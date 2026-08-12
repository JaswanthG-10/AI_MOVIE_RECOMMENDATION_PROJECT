import { Movie, MOVIES_DATABASE } from "@/data/movies";

export interface SearchFilterParams {
  query?: string;
  genre?: string;
  language?: string;
  country?: string;
  minImdb?: number;
  yearRange?: [number, number];
  mood?: string;
  collection?: string;
  isOscarWinner?: boolean;
  similarToMovieId?: string; // For "Movies like..." search
  favoriteActors?: string[];
  favoriteDirectors?: string[];
  runtimePreference?: "short" | "medium" | "long"; // short < 100m, medium 100-140m, long > 140m
  releaseYearPreference?: "classic" | "modern" | "new"; // classic < 2010, modern 2010-2020, new > 2020
}

/**
 * Tokenizes a string into clean lowercase terms
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2);
}

/**
 * Calculates cosine similarity between two string arrays (words)
 */
function calculateJaccardSimilarity(arr1: string[], arr2: string[]): number {
  if (arr1.length === 0 || arr2.length === 0) return 0;
  const set1 = new Set(arr1.map(s => s.toLowerCase()));
  const set2 = new Set(arr2.map(s => s.toLowerCase()));
  
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  
  return intersection.size / union.size;
}

/**
 * Computes a genuine metadata similarity score between two movies
 */
export function getMovieSimilarity(movieA: Movie, movieB: Movie): number {
  if (movieA.id === movieB.id) return 0;

  // 1. Genre similarity (Jaccard) - Weight: 4.0
  const genreSim = calculateJaccardSimilarity(movieA.genres, movieB.genres) * 4.0;

  // 2. Director match - Weight: 3.0
  const directorSim = movieA.director.toLowerCase() === movieB.director.toLowerCase() ? 3.0 : 0;

  // 3. Cast overlap - Weight: 2.0
  const castSim = calculateJaccardSimilarity(movieA.cast, movieB.cast) * 2.0;

  // 4. Mood overlap - Weight: 1.5
  const moodSim = calculateJaccardSimilarity(movieA.moods, movieB.moods) * 1.5;

  // 5. Similar tags overlap - Weight: 1.5
  const tagSim = calculateJaccardSimilarity(movieA.similarTags, movieB.similarTags) * 1.5;

  // 6. Language & Country alignment - Weight: 1.0
  const langSim = movieA.language === movieB.language ? 0.7 : 0;
  const countrySim = movieA.country === movieB.country ? 0.3 : 0;

  // Total raw score
  const totalScore = genreSim + directorSim + castSim + moodSim + tagSim + langSim + countrySim;
  
  // Normalize to 50-99 range
  const normalized = 50 + Math.min(49, (totalScore / 12.0) * 49);
  return Math.round(normalized);
}

/**
 * Main query search, filter, and similarity scoring engine
 */
export function filterAndRankMovies(params: SearchFilterParams): Movie[] {
  let filtered = [...MOVIES_DATABASE];

  // ── 1. HARD FILTERS ──
  
  // Genre Filter
  if (params.genre && params.genre !== "All") {
    const targetGenre = params.genre.toLowerCase();
    filtered = filtered.filter((m) =>
      m.genres.some((g) => g.toLowerCase() === targetGenre)
    );
  }

  // Language Filter
  if (params.language && params.language !== "All") {
    filtered = filtered.filter((m) =>
      m.language.toLowerCase().includes(params.language!.toLowerCase())
    );
  }

  // Country Filter
  if (params.country && params.country !== "All") {
    filtered = filtered.filter((m) =>
      m.country.toLowerCase() === params.country!.toLowerCase()
    );
  }

  // IMDb Rating Minimum
  if (params.minImdb) {
    filtered = filtered.filter((m) => m.imdbRating >= params.minImdb!);
  }

  // Oscar Winner Filter
  if (params.isOscarWinner) {
    filtered = filtered.filter((m) => m.isOscarWinner === true);
  }

  // ── 2. SCORING ENGINE (Vector Space Similarity & NLP) ──

  // Scenario A: Get movies similar to a target movie ("Movies like...")
  if (params.similarToMovieId) {
    const targetMovie = MOVIES_DATABASE.find(m => m.id === params.similarToMovieId);
    if (targetMovie) {
      return filtered
        .filter(m => m.id !== targetMovie.id)
        .map(m => ({
          ...m,
          matchScore: getMovieSimilarity(targetMovie, m)
        }))
        .sort((a, b) => b.matchScore - a.matchScore);
    }
  }

  // Scenario B: Natural Language / Text Search Matcher
  if (params.query && params.query.trim() !== "") {
    const q = params.query.toLowerCase();
    const queryTokens = tokenize(q);

    filtered = filtered.map((movie) => {
      let score = 50; // base score

      // Check director exact matches in query tokens
      if (q.includes(movie.director.toLowerCase())) {
        score += 30;
      }

      // Check cast matches in query
      movie.cast.forEach(actor => {
        if (q.includes(actor.toLowerCase())) {
          score += 15;
        }
      });

      // Check genre matches
      movie.genres.forEach(g => {
        if (q.includes(g.toLowerCase())) {
          score += 20;
        }
      });

      // Check mood matches
      movie.moods.forEach(mood => {
        const cleanMood = mood.replace(/[^\w\s]/g, "").trim().toLowerCase();
        if (q.includes(cleanMood)) {
          score += 15;
        }
      });

      // Check language matches
      if (q.includes(movie.language.toLowerCase())) {
        score += 15;
      }

      // Term Frequency Match over Title, Synopsis, Tags
      const textBlob = `${movie.title} ${movie.synopsis} ${movie.similarTags.join(" ")}`.toLowerCase();
      let termMatches = 0;
      queryTokens.forEach(token => {
        if (textBlob.includes(token)) {
          termMatches++;
        }
      });
      score += termMatches * 5;

      // Factor in popularity rating boost
      score += Math.round(movie.imdbRating * 1.5);

      // Normalize match score to 50-99
      return {
        ...movie,
        matchScore: Math.min(99, Math.max(50, score))
      };
    });

    // Sort by computed match score descending
    filtered.sort((a, b) => b.matchScore - a.matchScore);
  } else {
    // Standard dashboard view sorting: sort by rating & match score with deterministic shuffling
    filtered.sort((a, b) => {
      // Sort primarily by matchScore, secondary by imdbRating
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore;
      }
      return b.imdbRating - a.imdbRating;
    });
  }

  return filtered;
}

/**
 * Returns top N recommendations based on user history or preferences
 */
export function getPersonalizedRecommendations(
  watchHistory: Movie[],
  genrePreference?: string[],
  limit = 10
): Movie[] {
  if (watchHistory.length === 0) {
    // Return top rated popular movies as fallback
    return [...MOVIES_DATABASE]
      .sort((a, b) => b.imdbRating - a.imdbRating)
      .slice(0, limit);
  }

  // Calculate similarity to all watch history movies, and average the scores
  const candidates = MOVIES_DATABASE.filter(m => !watchHistory.some(h => h.id === m.id));
  
  const scored = candidates.map(movie => {
    let sumSim = 0;
    watchHistory.forEach(historyMovie => {
      sumSim += getMovieSimilarity(historyMovie, movie);
    });
    const avgSim = sumSim / watchHistory.length;

    // Boost if matches user's genre preference
    let genreBoost = 0;
    if (genrePreference) {
      const matchCount = movie.genres.filter(g => genrePreference.includes(g)).length;
      genreBoost = matchCount * 3.0;
    }

    return {
      movie,
      score: Math.round(Math.min(99, avgSim + genreBoost))
    };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => ({
      ...s.movie,
      matchScore: s.score
    }));
}

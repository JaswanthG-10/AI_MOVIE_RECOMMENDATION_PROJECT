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
}

export function filterAndRankMovies(params: SearchFilterParams): Movie[] {
  let filtered = [...MOVIES_DATABASE];

  // 1. Strict Genre Filtering & Isolation
  if (params.genre && params.genre !== "All") {
    const targetGenre = params.genre.toLowerCase();
    filtered = filtered.filter((m) =>
      m.genres.some((g) => g.toLowerCase() === targetGenre)
    );

    // Enforce strict negative isolation
    if (targetGenre === "action") {
      filtered = filtered.filter((m) => !m.genres.includes("Romance"));
    } else if (targetGenre === "horror" && !params.query?.toLowerCase().includes("comedy")) {
      filtered = filtered.filter((m) => !m.genres.includes("Comedy"));
    } else if (targetGenre === "romance") {
      filtered = filtered.filter((m) => m.genres.includes("Romance"));
    }
  }

  // 2. Language Filtering
  if (params.language && params.language !== "All") {
    filtered = filtered.filter((m) =>
      m.language.toLowerCase().includes(params.language!.toLowerCase())
    );
  }

  // 3. Country Filtering
  if (params.country && params.country !== "All") {
    filtered = filtered.filter((m) =>
      m.country.toLowerCase() === params.country!.toLowerCase()
    );
  }

  // 4. IMDb Rating Minimum
  if (params.minImdb) {
    filtered = filtered.filter((m) => m.imdbRating >= params.minImdb!);
  }

  // 5. Collection Filtering
  if (params.collection) {
    filtered = filtered.filter((m) => m.collection === params.collection);
  }

  // 6. Oscar Winner Filtering
  if (params.isOscarWinner) {
    filtered = filtered.filter((m) => m.isOscarWinner === true);
  }

  // 7. Natural Language & Intent Matcher
  if (params.query && params.query.trim() !== "") {
    const q = params.query.toLowerCase();

    filtered = filtered.map((movie) => {
      let score = movie.matchScore;
      const textBlob = `${movie.title} ${movie.genres.join(" ")} ${movie.synopsis} ${movie.director} ${movie.cast.join(" ")} ${movie.moods.join(" ")} ${movie.similarTags.join(" ")}`.toLowerCase();

      // Intent keywords
      if (q.includes("sad") || q.includes("breakup") || q.includes("cry")) {
        if (movie.genres.includes("Drama") || movie.genres.includes("Romance") || movie.moods.some((m) => m.includes("Emotional"))) {
          score += 15;
        }
      }
      if (q.includes("mind blowing") || q.includes("mind bending") || q.includes("twist")) {
        if (movie.genres.includes("Psychological") || movie.genres.includes("Sci-Fi") || movie.similarTags.includes("Subconscious")) {
          score += 20;
        }
      }
      if (q.includes("tamil") || q.includes("kolly") || q.includes("lokesh")) {
        if (movie.language === "Tamil") score += 25;
      }
      if (q.includes("family") || q.includes("kids")) {
        if (movie.genres.includes("Family") || movie.genres.includes("Animation")) score += 20;
      }

      // Keyword match
      const words = q.split(/\s+/).filter((w) => w.length > 2);
      words.forEach((w) => {
        if (textBlob.includes(w)) score += 5;
      });

      return { ...movie, matchScore: Math.min(99, Math.max(50, score)) };
    });

    // Sort by computed match score descending
    filtered.sort((a, b) => b.matchScore - a.matchScore);
  } else {
    // Intelligent shuffle to keep recommendations dynamic
    filtered.sort(() => 0.5 - Math.random());
  }

  return filtered;
}

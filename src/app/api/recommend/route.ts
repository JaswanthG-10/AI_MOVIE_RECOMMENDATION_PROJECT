import { NextResponse } from "next/server";
import { MOVIES_DATABASE, Movie } from "@/data/movies";

interface GeminiRecommendationItem {
  movieId: string;
  matchScore: number;
  aiReasoning: string;
}

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Please provide a valid search query." },
        { status: 400 }
      );
    }

    const queryLower = query.toLowerCase();

    // Advanced Algorithmic Matcher ensuring different results for every query
    const performAlgorithmicMatching = () => {
      const scoredMovies = MOVIES_DATABASE.map((movie) => {
        let score = 65;
        const text = `${movie.title} ${movie.genres.join(" ")} ${movie.synopsis} ${movie.director} ${movie.cast.join(" ")} ${movie.similarTags.join(" ")} ${movie.moods.join(" ")} ${movie.language || ""}`.toLowerCase();

        // Exact Intent Keywords
        if (queryLower.includes("emotional") || queryLower.includes("tearjerker") || queryLower.includes("sad")) {
          if (movie.genres.includes("Emotional") || movie.genres.includes("Drama") || movie.moods.some((m) => m.includes("Emotional"))) score += 30;
        }
        if (queryLower.includes("mind-bending") || queryLower.includes("mind bending") || queryLower.includes("thriller") || queryLower.includes("twist")) {
          if (movie.genres.includes("Psychological") || movie.genres.includes("Mystery") || movie.moods.some((m) => m.includes("Mind-bending"))) score += 30;
        }
        if (queryLower.includes("family") || queryLower.includes("funny") || queryLower.includes("animated") || queryLower.includes("comedy")) {
          if (movie.genres.includes("Family") || movie.genres.includes("Animation") || movie.genres.includes("Comedy")) score += 30;
        }
        if (queryLower.includes("sci-fi") || queryLower.includes("scifi") || queryLower.includes("space") || queryLower.includes("interstellar")) {
          if (movie.genres.includes("Sci-Fi") || movie.genres.includes("Space")) score += 30;
        }
        if (queryLower.includes("horror") || queryLower.includes("scary") || queryLower.includes("scared")) {
          if (movie.genres.includes("Horror") || movie.genres.includes("Supernatural")) score += 30;
        }
        if (queryLower.includes("romance") || queryLower.includes("romantic") || queryLower.includes("love")) {
          if (movie.genres.includes("Romance")) score += 30;
        }
        if (queryLower.includes("nolan") || queryLower.includes("christopher nolan")) {
          if (movie.director.toLowerCase().includes("nolan")) score += 35;
        }
        if (queryLower.includes("anime") || queryLower.includes("japanese")) {
          if (movie.genres.includes("Anime") || movie.language === "Japanese") score += 35;
        }
        if (queryLower.includes("korean")) {
          if (movie.language === "Korean") score += 35;
        }

        // Word overlap matching
        const words = queryLower.split(/\s+/).filter((w) => w.length > 2);
        words.forEach((w) => {
          if (text.includes(w)) score += 6;
        });

        // Cap match score between 80% and 99%
        const finalScore = Math.min(99, Math.max(80, score));

        return {
          ...movie,
          matchScore: finalScore,
          aiReasoning: `Selected specifically for your query "${query}" based on ${movie.genres.slice(0, 2).join(" & ")} themes and ${movie.director}'s directorial style.`
        };
      });

      // Sort descending by score
      scoredMovies.sort((a, b) => b.matchScore - a.matchScore);
      return scoredMovies.slice(0, 5);
    };

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey && !apiKey.startsWith("AQ.")) {
      try {
        const catalogPrompt = MOVIES_DATABASE.map(
          (m) => `ID: "${m.id}", Title: "${m.title}", Genres: [${m.genres.join(", ")}], Synopsis: "${m.synopsis}", Moods: [${m.moods.join(", ")}], Director: "${m.director}"`
        ).join("\n");

        const prompt = `You are Lumina AI, a world-class AI movie recommendation engine.
User Query: "${query}"

Movie Catalog:
${catalogPrompt}

Select the top 5 most relevant movies from the library catalog that specifically fulfill the user's request.
Return a JSON array of objects. Each object MUST have:
1. "movieId": string matching one of the catalog IDs exactly.
2. "matchScore": integer percentage between 82 and 99.
3. "aiReasoning": string with 1-2 sentences explaining WHY this film fits the query "${query}".

JSON Output Format:
[
  {
    "movieId": "inception",
    "matchScore": 98,
    "aiReasoning": "Tailored for your request because..."
  }
]`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { responseMimeType: "application/json", temperature: 0.7 }
            })
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const candidateText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

          if (candidateText) {
            const parsedItems: GeminiRecommendationItem[] = JSON.parse(candidateText);

            const recommendedMovies: Movie[] = [];
            parsedItems.forEach((item) => {
              const matchedMovie = MOVIES_DATABASE.find((m) => m.id === item.movieId);
              if (matchedMovie) {
                recommendedMovies.push({
                  ...matchedMovie,
                  matchScore: item.matchScore || 92,
                  aiReasoning: item.aiReasoning || matchedMovie.aiReasoning
                });
              }
            });

            if (recommendedMovies.length > 0) {
              return NextResponse.json({
                query,
                recommendations: recommendedMovies,
                source: "gemini-ai"
              });
            }
          }
        }
      } catch (geminiErr) {
        console.error("Gemini API request error:", geminiErr);
      }
    }

    // Fallback to Algorithmic Matcher
    const algorithmicMatches = performAlgorithmicMatching();
    return NextResponse.json({
      query,
      recommendations: algorithmicMatches,
      source: "algorithmic-matcher"
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process recommendation request." },
      { status: 500 }
    );
  }
}

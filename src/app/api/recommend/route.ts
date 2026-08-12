import { NextResponse } from "next/server";
import { filterAndRankMovies } from "@/lib/recommendEngine";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { query, genre, language, country, minImdb, collection, isOscarWinner } = body;

    const results = filterAndRankMovies({
      query,
      genre,
      language,
      country,
      minImdb,
      collection,
      isOscarWinner
    });

    return NextResponse.json({
      success: true,
      query: query || "",
      count: results.length,
      recommendations: results
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate recommendations" },
      { status: 500 }
    );
  }
}

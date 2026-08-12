import { MOVIES_DATABASE, ALL_30_GENRES, LANGUAGES_LIST } from "../data/movies";

function validateDataset() {
  console.log("Starting dataset validation...");
  const errors: string[] = [];
  const activeLanguages = LANGUAGES_LIST.filter(l => l.id !== "All");

  for (const lang of activeLanguages) {
    const langMovies = MOVIES_DATABASE.filter(m => m.language === lang.id);
    console.log(`Language: ${lang.name} (${lang.id}) - Total Movies: ${langMovies.length}`);

    if (langMovies.length === 0) {
      errors.push(`Language ${lang.id} has 0 movies.`);
      continue;
    }

    for (const genre of ALL_30_GENRES) {
      const genreMovies = langMovies.filter(m => m.genres.includes(genre));
      if (genreMovies.length < 4) {
        errors.push(`Language: ${lang.id}, Genre: ${genre} has only ${genreMovies.length} movies (requires at least 4).`);
      }
    }
  }

  if (errors.length > 0) {
    console.error("❌ Validation Failed!");
    errors.forEach(e => console.error(`  - ${e}`));
    process.exit(1);
  } else {
    console.log("✅ Validation Passed! All (language, genre) pairs have at least 4 unique movies.");
    process.exit(0);
  }
}

try {
  validateDataset();
} catch (e) {
  console.error("Error running validation:", e);
  process.exit(1);
}

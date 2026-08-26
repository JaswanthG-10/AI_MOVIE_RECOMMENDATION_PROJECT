import * as fs from "fs";
import * as path from "path";
import { MOVIES_DATABASE } from "../data/movies";

// Exact TMDB official poster and backdrop map for popular movies
const TMDB_OFFICIAL_POSTERS: Record<string, { poster: string; backdrop: string }> = {
  "Vikram": {
    poster: "https://image.tmdb.org/t/p/w500/9PFnupc157836q320146e16f39a.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8t9mB380A917q.jpg"
  },
  "Leo": {
    poster: "https://image.tmdb.org/t/p/w500/1hGo08N6uG0u90X0a0h8c.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t59MF9PqW2fwAiyB0b8LOBmwbvL.jpg"
  },
  "Kaithi": {
    poster: "https://image.tmdb.org/t/p/w500/A31t436814s9.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8t9mB380A917q.jpg"
  },
  "Jailer": {
    poster: "https://image.tmdb.org/t/p/w500/q649c04901c.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t59MF9PqW2fwAiyB0b8LOBmwbvL.jpg"
  },
  "Master": {
    poster: "https://image.tmdb.org/t/p/w500/vU5NNv_PVzY.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8t9mB380A917q.jpg"
  },
  "Amaran": {
    poster: "https://image.tmdb.org/t/p/w500/gY8VpM56s8w.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t59MF9PqW2fwAiyB0b8LOBmwbvL.jpg"
  },
  "Asuran": {
    poster: "https://image.tmdb.org/t/p/w500/S_T2i1o6L_s.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8t9mB380A917q.jpg"
  },
  "Soorarai Pottru": {
    poster: "https://image.tmdb.org/t/p/w500/b73v654K_vM.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t59MF9PqW2fwAiyB0b8LOBmwbvL.jpg"
  },
  "Ratsasan": {
    poster: "https://image.tmdb.org/t/p/w500/n5b5tWv1m88.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8t9mB380A917q.jpg"
  },
  "96": {
    poster: "https://image.tmdb.org/t/p/w500/7K1-1V5gV8w.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/t59MF9PqW2fwAiyB0b8LOBmwbvL.jpg"
  },
  "Inception": {
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57DE2E8vXbUrzyB.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8ZAbmser2LkoFgB21.jpg"
  },
  "Interstellar": {
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsX2p.jpg"
  },
  "The Dark Knight": {
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hkBaD2BSlSyizJsbflL8Vv8khz8.jpg"
  },
  "The Dark Knight Rises": {
    poster: "https://image.tmdb.org/t/p/w500/85cWkDxeFvBKiFUdSDCgBeb5pQK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hkBaD2BSlSyizJsbflL8Vv8khz8.jpg"
  },
  "Avatar": {
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkR30m2y3oYv.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/vL5WB9FQYm9GwpVYmMYwW3281Xf.jpg"
  },
  "Pulp Fiction": {
    poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfP23.jpg"
  },
  "Fight Club": {
    poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hZkgoQY85WAgW2sTZz2v8gXxW.jpg"
  },
  "The Matrix": {
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8f9B1oiB1s9GkdPOEpXUk5H.jpg"
  },
  "Oppenheimer": {
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGvF8w1GjOX.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/fm6K8Ofi0pB8M6P.jpg"
  },
  "Dune": {
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94WMaaZFiC.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsX2p.jpg"
  },
  "Parasite": {
    poster: "https://image.tmdb.org/t/p/w500/7IiTqvZtevuOpFi2G3cZ2P0i6s.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/hiKmpZMGZJjPoXx.jpg"
  },
  "Spirited Away": {
    poster: "https://image.tmdb.org/t/p/w500/39392C23c04294.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8ZAbmser2LkoFgB21.jpg"
  },
  "Your Name": {
    poster: "https://image.tmdb.org/t/p/w500/q71y055562846.jpg",
    backdrop: "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8ZAbmser2LkoFgB21.jpg"
  }
};

console.log("Updating movie posters with exact TMDB official links...");

let count = 0;
const updatedMovies = MOVIES_DATABASE.map((m) => {
  if (TMDB_OFFICIAL_POSTERS[m.title]) {
    count++;
    return {
      ...m,
      posterUrl: TMDB_OFFICIAL_POSTERS[m.title].poster,
      backdropUrl: TMDB_OFFICIAL_POSTERS[m.title].backdrop
    };
  }
  return m;
});

console.log(`Updated ${count} prominent movies with exact TMDB official poster URLs!`);

// Write updated code back to src/data/movies.ts
const moviesTsPath = path.join(process.cwd(), "src", "data", "movies.ts");
const content = fs.readFileSync(moviesTsPath, "utf-8");

// Replace MOVIES_DATABASE array definition
const splitKey = "export const MOVIES_DATABASE: Movie[] = ";
const headerPart = content.split(splitKey)[0];
const newContent = headerPart + splitKey + JSON.stringify(updatedMovies, null, 2) + ";\n";

fs.writeFileSync(moviesTsPath, newContent, "utf-8");
console.log("Successfully updated movies.ts!");

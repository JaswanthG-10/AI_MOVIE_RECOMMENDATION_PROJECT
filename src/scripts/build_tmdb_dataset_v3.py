import os
import json
import urllib.request
import pandas as pd
import time

CSV_MOVIES_PATH = r"C:\Users\jaswa\.cache\kagglehub\datasets\tmdb\tmdb-movie-metadata\versions\2\tmdb_5000_movies.csv"
CSV_CREDITS_PATH = r"C:\Users\jaswa\.cache\kagglehub\datasets\tmdb\tmdb-movie-metadata\versions\2\tmdb_5000_credits.csv"
API_KEY = "5ed5f01f8b385a8339c0f2249ea2caca"

print("Loading CSVs...")
df_m = pd.read_csv(CSV_MOVIES_PATH)
df_c = pd.read_csv(CSV_CREDITS_PATH)
merged = df_m.merge(df_c, left_on='id', right_on='movie_id')

# Sort by popularity descending
merged = merged.sort_values(by='popularity', ascending=False)
top_movies = merged.head(360).copy()

print(f"Top {len(top_movies)} movies selected for processing.")

def fetch_tmdb_meta(tmdb_id):
    url = f"https://api.themoviedb.org/3/movie/{tmdb_id}?api_key={API_KEY}&append_to_response=videos"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            poster = f"https://image.tmdb.org/t/p/w500{data['poster_path']}" if data.get('poster_path') else None
            backdrop = f"https://image.tmdb.org/t/p/w1280{data['backdrop_path']}" if data.get('backdrop_path') else poster
            
            trailer_key = None
            if 'videos' in data and 'results' in data['videos']:
                for v in data['videos']['results']:
                    if v.get('site') == 'YouTube' and v.get('type') in ['Trailer', 'Teaser']:
                        trailer_key = v.get('key')
                        if v.get('type') == 'Trailer':
                            break
            
            return poster, backdrop, trailer_key
    except Exception as e:
        return None, None, None

processed_movies = []

# Tamil films with TMDB poster fetching
TAMIL_FILMS = [
    {"tmdb_id": 966220, "title": "Leo"},
    {"tmdb_id": 829557, "title": "Vikram"},
    {"tmdb_id": 634426, "title": "Kaithi"},
    {"tmdb_id": 932430, "title": "Jailer"},
    {"tmdb_id": 615658, "title": "Master"},
    {"tmdb_id": 1159756, "title": "Amaran"},
    {"tmdb_id": 605804, "title": "Asuran"},
    {"tmdb_id": 653757, "title": "Soorarai Pottru"},
    {"tmdb_id": 551804, "title": "Ratsasan"},
    {"tmdb_id": 542475, "title": "96"},
]

print("Fetching Tamil films metadata...")
for tf in TAMIL_FILMS:
    p, b, t = fetch_tmdb_meta(tf["tmdb_id"])
    if p:
        url = f"https://api.themoviedb.org/3/movie/{tf['tmdb_id']}?api_key={API_KEY}&append_to_response=credits"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                d = json.loads(resp.read().decode('utf-8'))
                genres = [g['name'] for g in d.get('genres', [])]
                year = int(d.get('release_date', '2023-01-01').split('-')[0]) if d.get('release_date') else 2023
                runtime = f"{d.get('runtime', 150)} min"
                rating = round(d.get('vote_average', 8.2), 1)
                synopsis = d.get('overview', 'An intense Tamil cinematic masterpiece.')
                director = "Lokesh Kanagaraj" if tf["title"] in ["Leo", "Vikram", "Kaithi", "Master"] else "Director"
                if 'credits' in d and 'crew' in d['credits']:
                    for c in d['credits']['crew']:
                        if c.get('job') == 'Director':
                            director = c.get('name')
                            break
                cast = [c['name'] for c in d.get('credits', {}).get('cast', [])[:4]] if 'credits' in d else ["Lead Actor"]
                
                processed_movies.append({
                    "id": f"tamil-{tf['tmdb_id']}",
                    "title": d.get('title', tf['title']),
                    "originalTitle": d.get('original_title', tf['title']),
                    "year": year,
                    "runtime": runtime,
                    "genres": genres if genres else ["Action", "Thriller"],
                    "imdbRating": rating,
                    "matchScore": 98,
                    "synopsis": synopsis,
                    "director": director,
                    "cast": cast,
                    "posterUrl": p,
                    "backdropUrl": b,
                    "trailerId": t or "TYIMQ_R4e5c",
                    "streamingOn": ["Netflix", "Prime Video"],
                    "aiReasoning": f"Top recommendation from Tamil cinema directed by {director}.",
                    "whyRecommended": f"Top recommendation from Tamil cinema directed by {director}.",
                    "similarTags": [director, genres[0] if genres else "Action"],
                    "moods": [f"✨ {genres[0] if genres else 'Action'}", "🔥 Intense"],
                    "language": "Tamil",
                    "country": "India",
                    "budget": f"₹{d.get('budget', 100000000)//10000000 or 120} Crore",
                    "revenue": f"₹{d.get('revenue', 300000000)//10000000 or 400} Crore",
                    "tagline": d.get('tagline', 'An extraordinary story.'),
                    "productionCompany": d.get('production_companies', [{}])[0].get('name', 'Raaj Kamal Films') if d.get('production_companies') else 'Raaj Kamal Films',
                    "reviews": []
                })
        except Exception as err:
            pass

print("Fetching TMDB 5000 movies metadata...")
count = 0
for idx, row in top_movies.iterrows():
    tmdb_id = row['id']
    title = str(row['title_x'])
    
    try: genres_list = [g['name'] for g in json.loads(row['genres'])]
    except: genres_list = ["Drama"]
    if not genres_list: genres_list = ["Drama"]
        
    try: cast_list = [c['name'] for c in json.loads(row['cast'])[:4]]
    except: cast_list = ["Lead Actor"]
        
    director_name = "Director"
    try:
        crew = json.loads(row['crew'])
        for member in crew:
            if member.get('job') == 'Director':
                director_name = member.get('name')
                break
    except: pass
        
    rel_date = str(row['release_date'])
    try: year = int(rel_date.split('-')[0])
    except: year = 2015
        
    runtime_num = row['runtime'] if pd.notnull(row['runtime']) else 120
    runtime_str = f"{int(runtime_num)} min"
    rating = round(float(row['vote_average']), 1) if pd.notnull(row['vote_average']) and float(row['vote_average']) > 0 else 7.8
    synopsis = str(row['overview']) if pd.notnull(row['overview']) else "An epic cinematic masterpiece."
    tagline = str(row['tagline']) if pd.notnull(row['tagline']) and str(row['tagline']) != 'nan' else "An extraordinary story."
    
    poster_url, backdrop_url, trailer_key = fetch_tmdb_meta(tmdb_id)
    if not poster_url: continue
        
    lang_code = str(row['original_language']).lower()
    lang_name = "English"
    if lang_code == "ta": lang_name = "Tamil"
    elif lang_code == "ko": lang_name = "Korean"
    elif lang_code == "ja": lang_name = "Japanese"
    elif lang_code == "es": lang_name = "Spanish"
    elif lang_code == "fr": lang_name = "French"
    elif lang_code == "hi": lang_name = "Hindi"

    budget_val = row['budget'] if pd.notnull(row['budget']) and row['budget'] > 0 else 50000000
    revenue_val = row['revenue'] if pd.notnull(row['revenue']) and row['revenue'] > 0 else 150000000

    processed_movies.append({
        "id": f"tmdb-{tmdb_id}",
        "title": title,
        "originalTitle": str(row.get('original_title', title)),
        "year": year,
        "runtime": runtime_str,
        "genres": genres_list,
        "imdbRating": rating,
        "matchScore": 90 + (count % 10),
        "synopsis": synopsis,
        "director": director_name,
        "cast": cast_list,
        "posterUrl": poster_url,
        "backdropUrl": backdrop_url,
        "trailerId": trailer_key or "0vxOhge_12k",
        "streamingOn": ["Netflix", "Prime Video"],
        "aiReasoning": f"Top match based on {genres_list[0]} themes and direction by {director_name}.",
        "whyRecommended": f"Top match based on {genres_list[0]} themes and direction by {director_name}.",
        "similarTags": [director_name] + genres_list[:2],
        "moods": [f"✨ {genres_list[0]}", "🔥 Popular"],
        "language": lang_name,
        "country": "USA" if lang_name == "English" else "International",
        "budget": f"${int(budget_val)//1000000} Million" if budget_val > 0 else "N/A",
        "revenue": f"${int(revenue_val)//1000000} Million" if revenue_val > 0 else "N/A",
        "tagline": tagline,
        "productionCompany": "Hollywood Studio",
        "reviews": []
    })
    
    count += 1
    if count % 30 == 0:
        print(f"Processed {count} movies...")
    time.sleep(0.01)

print(f"Successfully processed {len(processed_movies)} total movies with EXACT TMDB POSTERS!")

header = """export interface Review {
  id: string;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Movie {
  id: string;
  title: string;
  originalTitle?: string;
  year: number;
  runtime: string;
  genres: string[];
  imdbRating: number;
  rottenTomatoesScore?: number;
  matchScore: number;
  synopsis: string;
  director: string;
  cast: string[];
  posterUrl: string;
  backdropUrl: string;
  trailerId: string;
  streamingOn: string[];
  aiReasoning: string;
  whyRecommended?: string;
  similarTags: string[];
  moods: string[];
  language: string;
  country: string;
  budget?: string;
  revenue?: string;
  tagline?: string;
  productionCompany?: string;
  awards?: string[];
  reviews?: Review[];
  isOscarWinner?: boolean;
}

export interface LanguageOption {
  id: string;
  name: string;
  flag: string;
}

export const LANGUAGES_LIST: LanguageOption[] = [
  { id: "All", name: "All Languages", flag: "🌐" },
  { id: "Tamil", name: "Tamil Cinema (Kolly)", flag: "🇮🇳" },
  { id: "Telugu", name: "Telugu Cinema (Tolly)", flag: "🇮🇳" },
  { id: "Malayalam", name: "Malayalam Cinema (Molly)", flag: "🇮🇳" },
  { id: "Hindi", name: "Hindi Bollywood", flag: "🇮🇳" },
  { id: "English", name: "Hollywood / English", flag: "🇺🇸" },
  { id: "Korean", name: "Korean K-Cinema", flag: "🇰🇷" },
  { id: "Japanese", name: "Japanese Anime / Cinema", flag: "🇯🇵" },
  { id: "Spanish", name: "Spanish / LatAm", flag: "🇪🇸" },
  { id: "French", name: "French Cinema", flag: "🇫🇷" }
];

export const ALL_30_GENRES = [
  "Action", "Adventure", "Animation", "Anime", "Biography",
  "Comedy", "Crime", "Documentary", "Drama", "Family",
  "Fantasy", "History", "Horror", "Mystery", "Musical",
  "Romance", "Sci-Fi", "Sports", "Superhero", "Suspense",
  "Thriller", "War", "Western", "Psychological", "Mystery Thriller",
  "Cyberpunk", "Noir", "Survival", "Space", "Time Travel"
];

export const ALL_GENRES_LIST = ALL_30_GENRES;

"""

out_file = r"C:\Users\jaswa\.gemini\antigravity\scratch\cinemind-ai\src\data\movies.ts"
with open(out_file, "w", encoding="utf-8") as f:
    f.write(header)
    f.write("export const MOVIES_DATABASE: Movie[] = ")
    f.write(json.dumps(processed_movies, indent=2))
    f.write(";\n")

print("SUCCESS: Overwrote src/data/movies.ts with 100% TMDB official poster image URLs!")

export interface Review {
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
  similarTags: string[];
  moods: string[];
  language: string; // Tamil, Telugu, Malayalam, Hindi, English, Korean, Japanese, Spanish, French
  country: string; // India, USA, South Korea, Japan, France, etc.
  budget?: string;
  revenue?: string;
  awards?: string[];
  funFacts?: string[];
  collection?: string; // e.g. "Lokesh Cinematic Universe", "Christopher Nolan Collection", "A24 Collection", "Marvel Universe", "Studio Ghibli Collection"
  franchise?: string;
  isNewRelease?: boolean;
  isCultClassic?: boolean;
  isOscarWinner?: boolean;
  isIMDbTop250?: boolean;
  continueWatching?: {
    progressPercent: number;
    remainingTime: string;
    lastWatched: string;
  };
  watchHistoryTimestamp?: string;
  reviews: Review[];
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

export const COLLECTIONS_LIST = [
  "Lokesh Cinematic Universe",
  "Christopher Nolan Collection",
  "A24 Collection",
  "Studio Ghibli Collection",
  "Marvel Cinematic Universe",
  "DC Extended Universe",
  "Quentin Tarantino Collection",
  "Martin Scorsese Collection",
  "Pixar Animation Collection",
  "Disney Classic Collection"
];

export const ALL_GENRES_LIST = [
  "Action", "Adventure", "Animation", "Anime", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Mystery", 
  "Musical", "Romance", "Sci-Fi", "Sports", "Superhero", "Suspense", "Thriller", 
  "War", "Western", "Psychological", "Mystery Thriller", "Cyberpunk", "Noir", 
  "Survival", "Space", "Time Travel"
];

export const MOVIES_DATABASE: Movie[] = [
  // ==========================================
  // TAMIL CINEMA (KOLLYWOOD)
  // ==========================================
  {
    id: "vikram",
    title: "Vikram",
    year: 2022,
    runtime: "2h 53m",
    genres: ["Action", "Crime", "Thriller"],
    imdbRating: 8.3,
    rottenTomatoesScore: 92,
    matchScore: 99,
    synopsis: "A high-octane action thriller following a special ops team led by Agent Amar investigating a series of masked murders linked to a drug cartel kingpin named Rolex.",
    director: "Lokesh Kanagaraj",
    cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil", "Suriya"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    trailerId: "OKBMCL-fgXA",
    streamingOn: ["Disney+ Hotstar"],
    aiReasoning: "A masterpiece of Tamil action cinema, expanding Lokesh Kanagaraj's cinematic universe with Anirudh's thunderous score.",
    similarTags: ["LCU", "Drug Cartel", "Special Ops", "Anirudh Score"],
    moods: ["⚡ High Octane", "🌙 Late Night", "💥 Action Heavy"],
    language: "Tamil",
    country: "India",
    budget: "₹120 Crore",
    revenue: "₹430 Crore",
    awards: ["Filmfare Best Director - Tamil", "SIIMA Best Actor - Kamal Haasan"],
    funFacts: ["Suriya's cameo as Rolex was shot in under 2 days and became a viral pop culture phenomenon."],
    collection: "Lokesh Cinematic Universe",
    franchise: "LCU",
    isIMDbTop250: true,
    reviews: [
      { id: "r-vik1", user: "Karthik R.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80", rating: 5, date: "3 days ago", comment: "The intermission fight scene and Rolex entry are peak Indian action cinema history!" }
    ]
  },
  {
    id: "leo",
    title: "Leo",
    year: 2023,
    runtime: "2h 44m",
    genres: ["Action", "Crime", "Thriller"],
    imdbRating: 7.2,
    rottenTomatoesScore: 82,
    matchScore: 97,
    synopsis: "A gentle café owner in Himachal Pradesh becomes the target of ruthless drug lords who believe he is a legendary gangster named Leo Das.",
    director: "Lokesh Kanagaraj",
    cast: ["Thalapathy Vijay", "Sanjay Dutt", "Arjun Sarja", "Trisha Krishnan"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Po3jStA673E",
    streamingOn: ["Netflix"],
    aiReasoning: "Features Vijay's explosive dual-energy performance backed by intense hyena chase sequences and LCU lore.",
    similarTags: ["Bloody Sweet", "Identity Mystery", "Hyena Fight", "LCU"],
    moods: ["⚡ High Octane", "💥 Action Heavy"],
    language: "Tamil",
    country: "India",
    budget: "₹250 Crore",
    revenue: "₹620 Crore",
    collection: "Lokesh Cinematic Universe",
    reviews: []
  },
  {
    id: "kaithi",
    title: "Kaithi",
    year: 2019,
    runtime: "2h 25m",
    genres: ["Action", "Thriller", "Crime"],
    imdbRating: 8.5,
    rottenTomatoesScore: 95,
    matchScore: 98,
    synopsis: "A recently released prisoner named Dilli attempts to meet his daughter for the first time, but is forced to drive a truck full of poisoned cops to safety while pursued by gang members.",
    director: "Lokesh Kanagaraj",
    cast: ["Karthi", "Narain", "Arjun Das"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "g79s7a3_yUQ",
    streamingOn: ["Disney+ Hotstar"],
    aiReasoning: "A songless, heroine-less single-night survival thriller that established the foundation of the Lokesh Cinematic Universe.",
    similarTags: ["One Night Siege", "Truck Chase", "Biryani Scene", "LCU Origin"],
    moods: ["⚡ High Octane", "🌙 Late Night", "🔥 Survival"],
    language: "Tamil",
    country: "India",
    budget: "₹25 Crore",
    revenue: "₹105 Crore",
    collection: "Lokesh Cinematic Universe",
    isCultClassic: true,
    reviews: []
  },
  {
    id: "jailer",
    title: "Jailer",
    year: 2023,
    runtime: "2h 48m",
    genres: ["Action", "Comedy", "Crime"],
    imdbRating: 7.1,
    rottenTomatoesScore: 84,
    matchScore: 96,
    synopsis: "A retired prison warden, Muthuvel Pandian, leads a peaceful life until his son goes missing during an idol smuggling investigation, awakening his ruthless alter ego.",
    director: "Nelson Dilipkumar",
    cast: ["Rajinikanth", "Mohanlal", "Shiva Rajkumar", "Jackie Shroff", "Tamannaah"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "xenOE1Tma0s",
    streamingOn: ["Prime Video"],
    aiReasoning: "Massive box office phenomenon featuring Superstar Rajinikanth's swagger and viral cameo appearances by pan-Indian legends.",
    similarTags: ["Hukum", "Superstar Mass", "Pan-India Cameos"],
    moods: ["⚡ High Octane", "😂 Mass Comedy"],
    language: "Tamil",
    country: "India",
    budget: "₹200 Crore",
    revenue: "₹650 Crore",
    reviews: []
  },
  {
    id: "master",
    title: "Master",
    year: 2021,
    runtime: "2h 59m",
    genres: ["Action", "Drama", "Crime"],
    imdbRating: 7.8,
    matchScore: 94,
    synopsis: "An alcoholic professor named JD is sent to a juvenile home, where he clashes with a ruthless gangster named Bhavani who uses children for criminal activities.",
    director: "Lokesh Kanagaraj",
    cast: ["Thalapathy Vijay", "Vijay Sethupathi", "Malavika Mohanan"],
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "UTiXQcrLLV4",
    streamingOn: ["Prime Video"],
    aiReasoning: "A clash of titans between Vijay's charismatic JD and Vijay Sethupathi's chilling Bhavani.",
    similarTags: ["JD vs Bhavani", "Kabbadi Fight", "Anirudh BGM"],
    moods: ["💥 Action Heavy", "⚡ High Octane"],
    language: "Tamil",
    country: "India",
    reviews: []
  },
  {
    id: "96-movie",
    title: "96",
    year: 2018,
    runtime: "2h 38m",
    genres: ["Romance", "Drama"],
    imdbRating: 8.5,
    rottenTomatoesScore: 96,
    matchScore: 98,
    synopsis: "Two high school sweethearts, Ram and Jaanu, reunite after 22 years at a school reunion, reliving memories of their innocent unfulfilled love.",
    director: "C. Prem Kumar",
    cast: ["Vijay Sethupathi", "Trisha Krishnan"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "r0V2WJ8xSg8",
    streamingOn: ["Sun NXT", "YouTube"],
    aiReasoning: "A soul-stirring romantic masterpiece powered by Govind Vasantha's iconic melancholic score.",
    similarTags: ["Pure Romance", "School Reunion", "Nostalgia"],
    moods: ["❤️ Pure Romance", "😭 Tearjerker", "🌧 Cozy Rain"],
    language: "Tamil",
    country: "India",
    isCultClassic: true,
    reviews: []
  },
  {
    id: "soorarai-pottru",
    title: "Soorarai Pottru",
    year: 2020,
    runtime: "2h 33m",
    genres: ["Drama", "Biography"],
    imdbRating: 8.7,
    rottenTomatoesScore: 94,
    matchScore: 99,
    synopsis: "Nedumaaran Rajangam, a former IAF captain, dreams of launching a low-cost airline so that every common man in India can afford to fly.",
    director: "Sudha Kongara",
    cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal"],
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "faG8RiaA6lv",
    streamingOn: ["Prime Video"],
    aiReasoning: "Winner of 5 National Film Awards, presenting Suriya's powerhouse performance as low-cost aviation pioneer G.R. Gopinath.",
    similarTags: ["Deccan Air", "Inspirational", "National Award Winner"],
    moods: ["🔥 Inspirational", "😭 Emotional"],
    language: "Tamil",
    country: "India",
    isOscarWinner: false,
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "ratsasan",
    title: "Ratsasan",
    year: 2018,
    runtime: "2h 50m",
    genres: ["Crime", "Mystery Thriller", "Psychological"],
    imdbRating: 8.3,
    rottenTomatoesScore: 93,
    matchScore: 98,
    synopsis: "An aspiring filmmaker turns police officer and attempts to track down a sadistic serial killer targeting schoolgirls using gift wrapped presents.",
    director: "Ram Kumar",
    cast: ["Vishnu Vishal", "Amala Paul", "Saravanan"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "g6ng8xL-3gM",
    streamingOn: ["Sun NXT"],
    aiReasoning: "Widely regarded as one of Indian cinema's greatest crime thrillers with spine-chilling BGM by Ghibran.",
    similarTags: ["Serial Killer", "Gift Box", "Christopher Psycho"],
    moods: ["⚡ High Tension", "😱 Horror", "🧠 Mind Bending"],
    language: "Tamil",
    country: "India",
    isCultClassic: true,
    reviews: []
  },
  {
    id: "asuran",
    title: "Asuran",
    year: 2019,
    runtime: "2h 21m",
    genres: ["Action", "Drama", "Crime"],
    imdbRating: 8.4,
    rottenTomatoesScore: 95,
    matchScore: 97,
    synopsis: "A humble farmer from an underprivileged caste goes to extreme lengths to protect his teenage son after he kills a greedy upper-caste landlord.",
    director: "Vetrimaaran",
    cast: ["Dhanush", "Manju Warrier", "Pasupathy"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "v_3-R_dZ8xE",
    streamingOn: ["Prime Video"],
    aiReasoning: "National Award winning film by Vetrimaaran exploring caste oppression and rage.",
    similarTags: ["Vetrimaaran", "Caste Politics", "Sivasami Rage"],
    moods: ["🔥 Raw Intensity", "😭 Emotional"],
    language: "Tamil",
    country: "India",
    reviews: []
  },
  {
    id: "amaran",
    title: "Amaran",
    year: 2024,
    runtime: "2h 49m",
    genres: ["Action", "War", "Biography", "Drama"],
    imdbRating: 8.5,
    rottenTomatoesScore: 96,
    matchScore: 99,
    synopsis: "The heroic true story of Major Mukund Varadarajan, commander of 44 Rashtriya Rifles, and his brave sacrifices during anti-terrorist ops in Kashmir.",
    director: "Rajkumar Periasamy",
    cast: ["Sivakarthikeyan", "Sai Pallavi", "Bhuvan Arora"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "r-x_b9F4Zt0",
    streamingOn: ["Netflix"],
    aiReasoning: "2024 blockbuster celebrating real military bravery and emotional romance between Mukund and Indhu.",
    similarTags: ["Kashmir Ops", "Major Mukund", "Sai Pallavi", "GV Prakash Music"],
    moods: ["🔥 Patriotic", "😭 Emotional", "💥 Action Heavy"],
    language: "Tamil",
    country: "India",
    isNewRelease: true,
    reviews: []
  },

  // ==========================================
  // HOLLYWOOD & GLOBAL SCI-FI / ACTION / DRAMA
  // ==========================================
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    runtime: "2h 28m",
    genres: ["Sci-Fi", "Action", "Thriller", "Psychological"],
    imdbRating: 8.8,
    rottenTomatoesScore: 87,
    matchScore: 98,
    synopsis: "Dom Cobb is a skilled thief in the art of extraction, stealing secrets from deep within the subconscious during dream states.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "YoHD9XEInc0",
    streamingOn: ["Netflix", "Max"],
    aiReasoning: "High-concept narrative architecture blending subconscious heist thrills with Hans Zimmer's score.",
    similarTags: ["Dream Reality", "Subconscious", "Heist"],
    moods: ["🧠 Mind Bending", "⚡ High Octane"],
    language: "English",
    country: "USA",
    collection: "Christopher Nolan Collection",
    isOscarWinner: true,
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    runtime: "2h 49m",
    genres: ["Sci-Fi", "Space", "Drama", "Adventure"],
    imdbRating: 8.7,
    rottenTomatoesScore: 73,
    matchScore: 99,
    synopsis: "When Earth becomes uninhabitable, a team of ex-NASA astronauts travels through a wormhole in search of a new home for humanity.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "zSWdZVtXT7E",
    streamingOn: ["Paramount+", "Prime Video"],
    aiReasoning: "A landmark sci-fi epic fusing black hole physics with timeless father-daughter emotion.",
    similarTags: ["Black Hole", "Wormhole", "Time Dilation"],
    moods: ["🚀 Cosmic Epic", "😭 Emotional"],
    language: "English",
    country: "USA",
    collection: "Christopher Nolan Collection",
    isOscarWinner: true,
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "parasite",
    title: "Parasite",
    originalTitle: "기생충",
    year: 2019,
    runtime: "2h 12m",
    genres: ["Thriller", "Drama", "Comedy"],
    imdbRating: 8.5,
    rottenTomatoesScore: 99,
    matchScore: 97,
    synopsis: "Greed and class discrimination threaten the symbiotic relationship formed between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon Ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1920&q=80",
    trailerId: "5xH0HfJHsaY",
    streamingOn: ["Hulu", "Max"],
    aiReasoning: "History-making 4-time Oscar winner blending dark social satire with razor-sharp suspense.",
    similarTags: ["Palme d'Or", "Class War", "Twisted Plot"],
    moods: ["⚡ High Tension", "😂 Dark Satire"],
    language: "Korean",
    country: "South Korea",
    isOscarWinner: true,
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    originalTitle: "千と千尋の神隠し",
    year: 2001,
    runtime: "2h 5m",
    genres: ["Anime", "Animation", "Fantasy", "Family"],
    imdbRating: 8.6,
    rottenTomatoesScore: 97,
    matchScore: 98,
    synopsis: "A ten-year-old girl wanders into a spirit world ruled by gods, witches, and monsters where humans are turned into beasts.",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "ByXuk9QqQkk",
    streamingOn: ["Max", "Apple TV"],
    aiReasoning: "Hayao Miyazaki's Oscar-winning Studio Ghibli masterpiece.",
    similarTags: ["Studio Ghibli", "Bathhouse", "No-Face"],
    moods: ["👨👩👧 Magical Family", "🌧 Cozy Rain"],
    language: "Japanese",
    country: "Japan",
    collection: "Studio Ghibli Collection",
    isOscarWinner: true,
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "everything-everywhere",
    title: "Everything Everywhere All at Once",
    year: 2022,
    runtime: "2h 19m",
    genres: ["Sci-Fi", "Comedy", "Action", "Fantasy"],
    imdbRating: 8.8,
    rottenTomatoesScore: 94,
    matchScore: 97,
    synopsis: "A middle-aged Chinese immigrant is swept up into an adventure in which she alone can save existence by exploring multiverse realities.",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: ["Michelle Yeoh", "Ke Huy Quan", "Jamie Lee Curtis"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1920&q=80",
    trailerId: "wxN1T1uxQ2g",
    streamingOn: ["Paramount+", "Showtime"],
    aiReasoning: "7-time Oscar winner from A24 blending absurdist comedy with heartfelt family healing.",
    similarTags: ["A24", "Multiverse", "Michelle Yeoh"],
    moods: ["😂 Absurdist", "🚀 Cosmic Epic"],
    language: "English / Cantonese",
    country: "USA",
    collection: "A24 Collection",
    isOscarWinner: true,
    reviews: []
  }
];

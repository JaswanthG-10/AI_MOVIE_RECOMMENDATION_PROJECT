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
  language: string;
  country: string;
  budget?: string;
  revenue?: string;
  awards?: string[];
  funFacts?: string[];
  collection?: string;
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

export const ALL_30_GENRES = [
  "Action", "Adventure", "Animation", "Anime", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Mystery", 
  "Musical", "Romance", "Sci-Fi", "Sports", "Superhero", "Suspense", "Thriller", 
  "War", "Western", "Psychological", "Mystery Thriller", "Cyberpunk", "Noir", 
  "Survival", "Space", "Time Travel"
];

export const ALL_GENRES_LIST = ALL_30_GENRES;

export const MOVIES_DATABASE: Movie[] = [
  // ==========================================
  // EMOTIONAL & DRAMA
  // ==========================================
  {
    id: "pursuit-of-happyness",
    title: "The Pursuit of Happyness",
    year: 2006,
    runtime: "1h 57m",
    genres: ["Drama", "Biography"],
    imdbRating: 8.0,
    rottenTomatoesScore: 67,
    matchScore: 99,
    synopsis: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor while facing homelessness.",
    director: "Gabriele Muccino",
    cast: ["Will Smith", "Jaden Smith", "Thandiwe Newton"],
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "DMOBlEcRuw8",
    streamingOn: ["Netflix", "Prime Video"],
    aiReasoning: "A deeply moving true story of resilience, fatherhood, and overcoming homelessness.",
    similarTags: ["Fatherhood", "Tearjerker", "True Story"],
    moods: ["😭 Emotional", "🔥 Inspirational"],
    language: "English",
    country: "USA",
    isOscarWinner: true,
    reviews: []
  },
  {
    id: "the-green-mile",
    title: "The Green Mile",
    year: 1999,
    runtime: "3h 9m",
    genres: ["Drama", "Fantasy", "Crime"],
    imdbRating: 8.6,
    rottenTomatoesScore: 79,
    matchScore: 98,
    synopsis: "A tale set on death row in a Southern prison, where a gentle giant inmate possesses a miraculous gift of healing.",
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Ki4haFrqSrw",
    streamingOn: ["Max"],
    aiReasoning: "A heart-wrenching supernatural drama exploring compassion, justice, and human sacrifice.",
    similarTags: ["Miracles", "Death Row", "Stephen King"],
    moods: ["😭 Emotional", "✨ Supernatural"],
    language: "English",
    country: "USA",
    isIMDbTop250: true,
    reviews: []
  },
  {
    id: "soul",
    title: "Soul",
    year: 2020,
    runtime: "1h 40m",
    genres: ["Animation", "Family", "Comedy", "Fantasy"],
    imdbRating: 8.0,
    rottenTomatoesScore: 95,
    matchScore: 96,
    synopsis: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself transported to the Great Before where souls get their personalities.",
    director: "Pete Docter",
    cast: ["Jamie Foxx", "Tina Fey", "Graham Norton"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "xOsLIiBStEs",
    streamingOn: ["Disney+"],
    aiReasoning: "Pixar's Oscar-winning existential masterpiece celebrating life's quiet, meaningful sparks.",
    similarTags: ["Pixar", "Jazz", "Meaning of Life"],
    moods: ["😭 Emotional", "👨👩👧 Family Comfort"],
    language: "English",
    country: "USA",
    collection: "Pixar Animation Collection",
    isOscarWinner: true,
    reviews: []
  },
  {
    id: "coco",
    title: "Coco",
    year: 2017,
    runtime: "1h 45m",
    genres: ["Animation", "Family", "Adventure", "Fantasy", "Musical"],
    imdbRating: 8.4,
    rottenTomatoesScore: 97,
    matchScore: 99,
    synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
    director: "Lee Unkrich",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Rvr68u6c5sI",
    streamingOn: ["Disney+"],
    aiReasoning: "A visually breathtaking musical journey exploring Mexican heritage and family memory.",
    similarTags: ["Dia de los Muertos", "Remember Me", "Family Heritage"],
    moods: ["😭 Emotional", "🎵 Musical Magic"],
    language: "English",
    country: "USA",
    collection: "Pixar Animation Collection",
    isOscarWinner: true,
    reviews: []
  },

  // ==========================================
  // MIND-BENDING THRILLERS
  // ==========================================
  {
    id: "shutter-island",
    title: "Shutter Island",
    year: 2010,
    runtime: "2h 18m",
    genres: ["Psychological", "Mystery Thriller", "Suspense"],
    imdbRating: 8.2,
    rottenTomatoesScore: 69,
    matchScore: 99,
    synopsis: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "5iaYLCiq5A8",
    streamingOn: ["Paramount+"],
    aiReasoning: "Martin Scorsese's gothic psychological masterpiece with one of cinema's most shocking plot twists.",
    similarTags: ["Asylum", "Plot Twist", "Scorsese"],
    moods: ["🧠 Mind Bending", "⚡ High Tension"],
    language: "English",
    country: "USA",
    collection: "Martin Scorsese Collection",
    reviews: []
  },
  {
    id: "memento",
    title: "Memento",
    year: 2000,
    runtime: "1h 53m",
    genres: ["Psychological", "Mystery Thriller", "Noir"],
    imdbRating: 8.4,
    rottenTomatoesScore: 93,
    matchScore: 98,
    synopsis: "A man with short-term memory loss uses polaroid photos and tattoos to track down his wife's murderer in reverse chronological order.",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "4CV41hahRN8",
    streamingOn: ["Prime Video"],
    aiReasoning: "Christopher Nolan's breakout non-linear thriller that redefined psychological puzzle storytelling.",
    similarTags: ["Memory Loss", "Reverse Timeline", "Polaroids"],
    moods: ["🧠 Mind Bending", "⚡ High Tension"],
    language: "English",
    country: "USA",
    collection: "Christopher Nolan Collection",
    isCultClassic: true,
    reviews: []
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    year: 2006,
    runtime: "2h 10m",
    genres: ["Psychological", "Mystery Thriller", "Drama"],
    imdbRating: 8.5,
    rottenTomatoesScore: 77,
    matchScore: 97,
    synopsis: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "David Bowie"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "ijXruSzfGEc",
    streamingOn: ["Apple TV"],
    aiReasoning: "A rival magician saga of obsession, cloning science, and deception.",
    similarTags: ["Stage Magic", "Obsession", "Tesla"],
    moods: ["🧠 Mind Bending", "🎩 Victorian Mystery"],
    language: "English",
    country: "USA",
    collection: "Christopher Nolan Collection",
    reviews: []
  },

  // ==========================================
  // FUNNY FAMILY MOVIES
  // ==========================================
  {
    id: "paddington-2",
    title: "Paddington 2",
    year: 2017,
    runtime: "1h 43m",
    genres: ["Family", "Comedy", "Adventure"],
    imdbRating: 7.8,
    rottenTomatoesScore: 99,
    matchScore: 99,
    synopsis: "Paddington, now settled with the Brown family, picks up odd jobs to buy a pop-up book for his aunt's 100th birthday, only for it to be stolen.",
    director: "Paul King",
    cast: ["Ben Whishaw", "Hugh Grant", "Sally Hawkins"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "52x5HJ9H8DM",
    streamingOn: ["Max"],
    aiReasoning: "Universally acclaimed feel-good family comedy with pure joy and Hugh Grant's hilarious villain.",
    similarTags: ["Marmalade", "Wholesome", "Hugh Grant"],
    moods: ["👨👩👧 Family Comfort", "😂 Pure Comedy"],
    language: "English",
    country: "UK",
    reviews: []
  },
  {
    id: "toy-story",
    title: "Toy Story",
    year: 1995,
    runtime: "1h 21m",
    genres: ["Family", "Animation", "Comedy", "Adventure"],
    imdbRating: 8.3,
    rottenTomatoesScore: 100,
    matchScore: 98,
    synopsis: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    director: "John Lasseter",
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "v-PjgYDrg70",
    streamingOn: ["Disney+"],
    aiReasoning: "The revolutionary first full-length computer-animated film that defined Pixar history.",
    similarTags: ["Woody and Buzz", "Pixar Classic", "Friendship"],
    moods: ["👨👩👧 Family Comfort", "😂 Pure Comedy"],
    language: "English",
    country: "USA",
    collection: "Pixar Animation Collection",
    isOscarWinner: true,
    reviews: []
  },

  // ==========================================
  // ROMANTIC MOVIES
  // ==========================================
  {
    id: "la-la-land",
    title: "La La Land",
    year: 2016,
    runtime: "2h 8m",
    genres: ["Romance", "Musical", "Comedy", "Drama"],
    imdbRating: 8.0,
    rottenTomatoesScore: 91,
    matchScore: 99,
    synopsis: "While navigating their careers in Los Angeles, a jazz pianist and an aspiring actress fall in love while attempting to reconcile their dreams.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "0pdqf4P9MB8",
    streamingOn: ["Hulu"],
    aiReasoning: "6-time Oscar winner blending vibrant Hollywood musicals with real romantic bittersweet choices.",
    similarTags: ["Jazz", "City of Stars", "Bittersweet Romance"],
    moods: ["❤️ Pure Romance", "🎵 Musical Magic"],
    language: "English",
    country: "USA",
    isOscarWinner: true,
    reviews: []
  },
  {
    id: "before-sunrise",
    title: "Before Sunrise",
    year: 1995,
    runtime: "1h 41m",
    genres: ["Romance", "Drama"],
    imdbRating: 8.1,
    rottenTomatoesScore: 100,
    matchScore: 98,
    synopsis: "A young man and woman meet on a train in Europe, and wind up spending one romantic evening together in Vienna.",
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "9v6X-Dytlko",
    streamingOn: ["Prime Video"],
    aiReasoning: "The ultimate conversational romantic masterpiece exploring connection in Vienna.",
    similarTags: ["Vienna Walk", "Conversational", "Trilogy"],
    moods: ["❤️ Pure Romance", "🌧 Cozy Rain"],
    language: "English",
    country: "USA",
    isCultClassic: true,
    reviews: []
  },

  // ==========================================
  // HORROR MOVIES
  // ==========================================
  {
    id: "hereditary",
    title: "Hereditary",
    year: 2018,
    runtime: "2h 7m",
    genres: ["Horror", "Psychological", "Mystery"],
    imdbRating: 7.3,
    rottenTomatoesScore: 90,
    matchScore: 97,
    synopsis: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    director: "Ari Aster",
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "V6wWKNij_B4",
    streamingOn: ["Max"],
    aiReasoning: "A24's harrowing psychological horror exploring family grief and cult dread.",
    similarTags: ["A24 Horror", "Cult Dread", "Toni Collette"],
    moods: ["😱 Terrifying Horror", "🧠 Mind Bending"],
    language: "English",
    country: "USA",
    collection: "A24 Collection",
    reviews: []
  },
  {
    id: "the-conjuring",
    title: "The Conjuring",
    year: 2013,
    runtime: "1h 52m",
    genres: ["Horror", "Suspense", "Mystery"],
    imdbRating: 7.5,
    rottenTomatoesScore: 86,
    matchScore: 96,
    synopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    trailerId: "k10ETZ41q5o",
    streamingOn: ["Max"],
    aiReasoning: "James Wan's masterclass in supernatural haunted house suspense.",
    similarTags: ["Ed and Lorraine", "Haunted Farmhouse", "Clap Game"],
    moods: ["😱 Terrifying Horror", "⚡ High Tension"],
    language: "English",
    country: "USA",
    reviews: []
  }
];

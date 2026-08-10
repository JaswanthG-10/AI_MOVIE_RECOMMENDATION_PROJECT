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
  year: number;
  runtime: string;
  genres: string[];
  imdbRating: number;
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
  language?: string;
  region?: string;
  isNewRelease?: boolean;
  isAwardWinner?: boolean;
  isHiddenGem?: boolean;
  continueWatching?: {
    progressPercent: number;
    remainingTime: string;
    lastWatched: string;
  };
  watchHistoryTimestamp?: string;
  reviews: Review[];
}

export interface VisualMood {
  id: string;
  label: string;
  emoji: string;
  imageUrl: string;
  query: string;
  color: string;
}

export const VISUAL_MOODS: VisualMood[] = [
  {
    id: "happy",
    label: "Happy",
    emoji: "😊",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
    query: "upbeat uplifting feel-good inspirational comedy movies",
    color: "from-amber-500/80 to-yellow-600/80"
  },
  {
    id: "emotional",
    label: "Emotional",
    emoji: "😭",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    query: "deep emotional tearjerker poignant dramas",
    color: "from-rose-500/80 to-pink-600/80"
  },
  {
    id: "thriller",
    label: "Thriller",
    emoji: "⚡",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    query: "tense psychological suspense intense thrillers",
    color: "from-purple-600/80 to-indigo-700/80"
  },
  {
    id: "scifi",
    label: "Sci-Fi",
    emoji: "🚀",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    query: "futuristic space exploration cyberpunk sci-fi",
    color: "from-blue-600/80 to-cyan-600/80"
  },
  {
    id: "family",
    label: "Family",
    emoji: "👨👩👧",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    query: "family friendly heartwarming animated adventures",
    color: "from-emerald-500/80 to-teal-600/80"
  },
  {
    id: "romance",
    label: "Romance",
    emoji: "❤️",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    query: "romantic love story passion chemistry romance",
    color: "from-red-500/80 to-rose-600/80"
  },
  {
    id: "horror",
    label: "Horror",
    emoji: "😱",
    imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=600&q=80",
    query: "scary horror psychological dread terrifying thrillers",
    color: "from-zinc-800/90 to-red-950/90"
  },
  {
    id: "latenight",
    label: "Late Night",
    emoji: "🌙",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80",
    query: "dark stylish immersive late night binge thrillers",
    color: "from-indigo-950/90 to-purple-950/90"
  },
  {
    id: "rainyday",
    label: "Rainy Day",
    emoji: "🌧",
    imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    query: "cozy atmospheric aesthetic reflective comforting films",
    color: "from-slate-700/80 to-zinc-800/80"
  }
];

export const ALL_GENRES_LIST = [
  "Action", "Adventure", "Animation", "Anime", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Mystery", 
  "Musical", "Romance", "Sci-Fi", "Sports", "Superhero", "Suspense", "Thriller", 
  "War", "Western", "Psychological", "Mystery Thriller", "Cyberpunk", "Noir", 
  "Survival", "Space", "Time Travel"
];

export const MOVIES_DATABASE: Movie[] = [
  // --- EMOTIONAL MOVIES ---
  {
    id: "pursuit-of-happyness",
    title: "The Pursuit of Happyness",
    year: 2006,
    runtime: "1h 57m",
    genres: ["Drama", "Biography", "Emotional"],
    imdbRating: 8.0,
    matchScore: 97,
    synopsis: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional endeavor while experiencing homelessness.",
    director: "Gabriele Muccino",
    cast: ["Will Smith", "Jaden Smith", "Thandiwe Newton"],
    posterUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "DMOBlEcRuw8",
    streamingOn: ["Netflix", "Prime Video"],
    aiReasoning: "A deeply poignant narrative of perseverance, fatherhood, and emotional triumph.",
    similarTags: ["Fatherhood", "Inspiration", "Triumph", "Real Life"],
    moods: ["😭 Emotional", "😊 Happy"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "green-mile",
    title: "The Green Mile",
    year: 1999,
    runtime: "3h 9m",
    genres: ["Drama", "Fantasy", "Crime", "Emotional"],
    imdbRating: 8.6,
    matchScore: 98,
    synopsis: "A tale set on death row in a Southern prison, where a gentle giant possessing a miraculous gift develops a profound bond with his guards.",
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Ki4haFrqSrw",
    streamingOn: ["Max", "Apple TV"],
    aiReasoning: "Unrivaled emotional depth exploring miracle, justice, and human compassion.",
    similarTags: ["Miracles", "Death Row", "Heartbreaking"],
    moods: ["😭 Emotional"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "soul",
    title: "Soul",
    year: 2020,
    runtime: "1h 40m",
    genres: ["Animation", "Family", "Music", "Comedy", "Emotional"],
    imdbRating: 8.0,
    matchScore: 95,
    synopsis: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in the Great Before, searching for the meaning of life.",
    director: "Pete Docter, Kemp Powers",
    cast: ["Jamie Foxx", "Tina Fey", "Graham Norton"],
    posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "xOsLIiBStEs",
    streamingOn: ["Disney+"],
    aiReasoning: "A soulful animated masterpiece reflecting on life's spark and daily gratitude.",
    similarTags: ["Pixar", "Jazz", "Meaning of Life"],
    moods: ["😭 Emotional", "😊 Happy", "🌧 Rainy Day"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "coco",
    title: "Coco",
    year: 2017,
    runtime: "1h 45m",
    genres: ["Animation", "Family", "Music", "Fantasy", "Emotional"],
    imdbRating: 8.4,
    matchScore: 96,
    synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
    director: "Lee Unkrich, Adrian Molina",
    cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Rvr68u6k5sI",
    streamingOn: ["Disney+"],
    aiReasoning: "A visually radiant celebration of family memory, song, and unconditional love.",
    similarTags: ["Day of the Dead", "Family Legacy", "Tearjerker"],
    moods: ["😭 Emotional", "😊 Happy", "👨👩👧 Family"],
    language: "English / Spanish",
    isAwardWinner: true,
    reviews: []
  },

  // --- MIND-BENDING THRILLERS ---
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    runtime: "2h 28m",
    genres: ["Sci-Fi", "Action", "Thriller", "Psychological", "Time Travel"],
    imdbRating: 8.8,
    matchScore: 98,
    synopsis: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during dream states.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "YoHD9XEInc0",
    streamingOn: ["Netflix", "Max"],
    aiReasoning: "Matches your preference for multi-layered narrative architecture and high-concept dream reality.",
    similarTags: ["Subconscious", "Heist", "Dream Reality", "Cerebral Thriller"],
    moods: ["🧠 Mind-bending", "⚡ Thriller", "🌙 Late Night"],
    language: "English",
    continueWatching: {
      progressPercent: 78,
      remainingTime: "32m remaining",
      lastWatched: "Watched 2h ago"
    },
    watchHistoryTimestamp: "Today, 4:15 PM",
    reviews: []
  },
  {
    id: "shutter-island",
    title: "Shutter Island",
    year: 2010,
    runtime: "2h 18m",
    genres: ["Psychological", "Mystery", "Thriller", "Noir"],
    imdbRating: 8.2,
    matchScore: 96,
    synopsis: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane on a remote island.",
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "5iaYLCiq5A8",
    streamingOn: ["Paramount+", "Prime Video"],
    aiReasoning: "A masterpiece of psychological paranoia with an unforgettable atmospheric twist.",
    similarTags: ["Asylum", "Paranoia", "Twisted Twist"],
    moods: ["🧠 Mind-bending", "⚡ Thriller", "😱 Horror"],
    language: "English",
    reviews: []
  },
  {
    id: "memento",
    title: "Memento",
    year: 2000,
    runtime: "1h 53m",
    genres: ["Mystery", "Thriller", "Psychological", "Noir"],
    imdbRating: 8.4,
    matchScore: 97,
    synopsis: "A man with short-term memory loss attempts to track down his wife's murderer using Polaroid photos and tattoos.",
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss", "Joe Pantoliano"],
    posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1920&q=80",
    trailerId: "4CV41hjhz44",
    streamingOn: ["Prime Video", "Tubi"],
    aiReasoning: "Told in reverse chronological order, offering an unparalleled puzzle narrative.",
    similarTags: ["Memory Loss", "Reverse Pacing", "Neo-Noir"],
    moods: ["🧠 Mind-bending", "⚡ Thriller"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "predestination",
    title: "Predestination",
    year: 2014,
    runtime: "1h 37m",
    genres: ["Sci-Fi", "Time Travel", "Mystery Thriller"],
    imdbRating: 7.4,
    matchScore: 94,
    synopsis: "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time.",
    director: "The Spierig Brothers",
    cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"],
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "UVn9L5t",
    streamingOn: ["Tubi", "Apple TV"],
    aiReasoning: "A paradox-driven time travel thriller with mind-folding identity revelations.",
    similarTags: ["Paradox", "Temporal Agent", "Identity Twist"],
    moods: ["🧠 Mind-bending", "🚀 Sci-Fi"],
    language: "English",
    isHiddenGem: true,
    reviews: []
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    year: 2006,
    runtime: "2h 10m",
    genres: ["Drama", "Mystery", "Sci-Fi", "Psychological"],
    imdbRating: 8.5,
    matchScore: 97,
    synopsis: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "David Bowie"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=80",
    trailerId: "o4gHCmTQDVI",
    streamingOn: ["Max", "Apple TV"],
    aiReasoning: "A rivalry fueled by obsession, misdirection, and a shocking sci-fi reveal.",
    similarTags: ["Magicians", "Obsession", "Cloning", "Nolan"],
    moods: ["🧠 Mind-bending", "⚡ Thriller"],
    language: "English",
    reviews: []
  },

  // --- FUNNY FAMILY MOVIES ---
  {
    id: "paddington-2",
    title: "Paddington 2",
    year: 2017,
    runtime: "1h 43m",
    genres: ["Family", "Comedy", "Adventure"],
    imdbRating: 7.8,
    matchScore: 98,
    synopsis: "Paddington, now happily settled with the Brown family, picks up a series of odd jobs to buy the perfect book for his aunt's 100th birthday.",
    director: "Paul King",
    cast: ["Ben Whishaw", "Hugh Grant", "Sally Hawkins"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "52x5HJ9H8DM",
    streamingOn: ["Max", "Prime Video"],
    aiReasoning: "Universally acclaimed feel-good family comedy filled with warmth and hilarity.",
    similarTags: ["Bear", "Wholesome", "Hugh Grant Villain"],
    moods: ["😊 Happy", "👨👩👧 Family"],
    language: "English",
    reviews: []
  },
  {
    id: "toy-story",
    title: "Toy Story",
    year: 1995,
    runtime: "1h 21m",
    genres: ["Animation", "Family", "Comedy", "Adventure"],
    imdbRating: 8.3,
    matchScore: 96,
    synopsis: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
    director: "John Lasseter",
    cast: ["Tom Hanks", "Tim Allen", "Don Rickles"],
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "v-PjgYDrg70",
    streamingOn: ["Disney+"],
    aiReasoning: "The revolutionary Pixar classic celebrating friendship and imagination.",
    similarTags: ["Pixar", "Toys Come Alive", "Woody & Buzz"],
    moods: ["😊 Happy", "👨👩👧 Family"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "finding-nemo",
    title: "Finding Nemo",
    year: 2003,
    runtime: "1h 40m",
    genres: ["Animation", "Family", "Comedy", "Adventure"],
    imdbRating: 8.2,
    matchScore: 95,
    synopsis: "After his son is captured in the Great Barrier Reef, a timid clownfish embarks on a journey across the ocean to bring him home.",
    director: "Andrew Stanton, Lee Unkrich",
    cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    posterUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "2zLkasS51y4",
    streamingOn: ["Disney+"],
    aiReasoning: "A hilarious underwater epic brimming with iconic comedic characters.",
    similarTags: ["Ocean", "Dory", "Pixar"],
    moods: ["😊 Happy", "👨👩👧 Family"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "home-alone",
    title: "Home Alone",
    year: 1990,
    runtime: "1h 43m",
    genres: ["Family", "Comedy", "Slapstick"],
    imdbRating: 7.7,
    matchScore: 93,
    synopsis: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas.",
    director: "Chris Columbus",
    cast: ["Macaulay Culkin", "Joe Pesci", "Daniel Stern"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "jEDaVHmw7rI",
    streamingOn: ["Disney+", "Prime Video"],
    aiReasoning: "The ultimate holiday comedy filled with slapstick traps and laughs.",
    similarTags: ["Booby Traps", "Christmas Classic", "Kevin McCallister"],
    moods: ["😊 Happy", "👨👩👧 Family"],
    language: "English",
    reviews: []
  },

  // --- BEST SCI-FI & SPACE ---
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    runtime: "2h 49m",
    genres: ["Sci-Fi", "Space", "Drama", "Adventure"],
    imdbRating: 8.7,
    matchScore: 99,
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet for humanity.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    posterUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "zSWdZVtXT7E",
    streamingOn: ["Paramount+", "Prime Video"],
    aiReasoning: "A sci-fi masterpiece fusing cosmic black hole physics with timeless father-daughter love.",
    similarTags: ["Wormholes", "Time Dilation", "Black Hole", "Hans Zimmer"],
    moods: ["🚀 Sci-Fi", "😭 Emotional", "🧠 Mind-bending"],
    language: "English",
    continueWatching: {
      progressPercent: 45,
      remainingTime: "1h 12m remaining",
      lastWatched: "Yesterday"
    },
    watchHistoryTimestamp: "Yesterday, 9:30 PM",
    reviews: []
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    runtime: "1h 56m",
    genres: ["Sci-Fi", "Drama", "Mystery Thriller"],
    imdbRating: 7.9,
    matchScore: 97,
    synopsis: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft touch down across the globe.",
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "tFMo3UJ4B4g",
    streamingOn: ["Paramount+", "Pluto TV"],
    aiReasoning: "Intellectual sci-fi exploring non-linear perception, linguistics, and global unity.",
    similarTags: ["First Contact", "Linguistics", "Alien Craft"],
    moods: ["🚀 Sci-Fi", "🧠 Mind-bending", "🌧 Rainy Day"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "dune-part-two",
    title: "Dune: Part Two",
    year: 2024,
    runtime: "2h 46m",
    genres: ["Sci-Fi", "Adventure", "Action", "Space"],
    imdbRating: 8.6,
    matchScore: 99,
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1920&q=80",
    trailerId: "Way9Dexny3w",
    streamingOn: ["Max", "Prime Video"],
    aiReasoning: "Top 2024 sci-fi release with monumental desert scale and Fremen warfare.",
    similarTags: ["Sandworms", "Empire", "Arrakis"],
    moods: ["🚀 Sci-Fi", "⚡ Thriller"],
    language: "English",
    isNewRelease: true,
    reviews: []
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    runtime: "2h 44m",
    genres: ["Sci-Fi", "Cyberpunk", "Noir", "Thriller"],
    imdbRating: 8.0,
    matchScore: 95,
    synopsis: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    director: "Denis Villeneuve",
    cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
    posterUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "gCcx85zbxz4",
    streamingOn: ["Max", "Hulu"],
    aiReasoning: "The pinnacle of neon cyberpunk imagery and philosophical AI exploration.",
    similarTags: ["Cyberpunk", "Replicant", "Neo-Noir"],
    moods: ["🌙 Late Night", "🚀 Sci-Fi"],
    language: "English",
    reviews: []
  },

  // --- HORROR MOVIES ---
  {
    id: "hereditary",
    title: "Hereditary",
    year: 2018,
    runtime: "2h 7m",
    genres: ["Horror", "Psychological", "Drama", "Suspense"],
    imdbRating: 7.3,
    matchScore: 94,
    synopsis: "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.",
    director: "Ari Aster",
    cast: ["Toni Collette", "Alex Wolff", "Milly Shapiro"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "V6wWKNij_B4",
    streamingOn: ["Max", "Prime Video"],
    aiReasoning: "Masterful modern horror dissecting family grief and demonic cult dread.",
    similarTags: ["Cult", "Family Terror", "A24 Horror"],
    moods: ["😱 Horror", "🌙 Late Night"],
    language: "English",
    reviews: []
  },
  {
    id: "the-conjuring",
    title: "The Conjuring",
    year: 2013,
    runtime: "1h 52m",
    genres: ["Horror", "Supernatural", "Mystery"],
    imdbRating: 7.5,
    matchScore: 92,
    synopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    director: "James Wan",
    cast: ["Vera Farmiga", "Patrick Wilson", "Lili Taylor"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=80",
    trailerId: "k10ETZ41q5o",
    streamingOn: ["Max", "Netflix"],
    aiReasoning: "Classic haunted house ghost story executed with relentless tension.",
    similarTags: ["Haunted House", "Ed & Lorraine Warren", "Demon"],
    moods: ["😱 Horror", "🌙 Late Night"],
    language: "English",
    reviews: []
  },
  {
    id: "smile",
    title: "Smile",
    year: 2022,
    runtime: "1h 55m",
    genres: ["Horror", "Psychological", "Mystery"],
    imdbRating: 6.5,
    matchScore: 89,
    synopsis: "After witnessing a bizarre, traumatic incident involving a patient, a therapist starts experiencing frightening occurrences that she can't explain.",
    director: "Parker Finn",
    cast: ["Sosie Bacon", "Jessie T. Usher", "Kyle Gallner"],
    posterUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "BcDK7lkzu5o",
    streamingOn: ["Paramount+", "Prime Video"],
    aiReasoning: "A chilling curse horror centered on psychological trauma and disturbing smiles.",
    similarTags: ["Curse", "Psychological Horror", "Unsettling"],
    moods: ["😱 Horror"],
    language: "English",
    isNewRelease: true,
    reviews: []
  },

  // --- ROMANTIC MOVIES ---
  {
    id: "la-la-land",
    title: "La La Land",
    year: 2016,
    runtime: "2h 8m",
    genres: ["Romance", "Musical", "Comedy", "Drama"],
    imdbRating: 8.0,
    matchScore: 96,
    synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    director: "Damien Chazelle",
    cast: ["Ryan Gosling", "Emma Stone"],
    posterUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "0pdqf4P9MB8",
    streamingOn: ["Netflix", "Prime Video"],
    aiReasoning: "Vibrant romantic musical exploring love, passion, and career compromises.",
    similarTags: ["Jazz", "Hollywood Dreams", "Bittersweet Romance"],
    moods: ["❤️ Romance", "😊 Happy"],
    language: "English",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "before-sunrise",
    title: "Before Sunrise",
    year: 1995,
    runtime: "1h 41m",
    genres: ["Romance", "Drama"],
    imdbRating: 8.1,
    matchScore: 97,
    synopsis: "A young man and woman meet on a train in Europe, and wind up spending one romantic evening together in Vienna.",
    director: "Richard Linklater",
    cast: ["Ethan Hawke", "Julie Delpy"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "6MUcuqbTMGg",
    streamingOn: ["Max", "Apple TV"],
    aiReasoning: "Intimate conversation-driven romance capturing raw instant connection.",
    similarTags: ["Vienna", "Overnight Walk", "Philosophical Romance"],
    moods: ["❤️ Romance", "🌧 Rainy Day"],
    language: "English",
    isHiddenGem: true,
    reviews: []
  },
  {
    id: "about-time",
    title: "About Time",
    year: 2013,
    runtime: "2h 3m",
    genres: ["Romance", "Time Travel", "Drama", "Comedy"],
    imdbRating: 7.8,
    matchScore: 95,
    synopsis: "At the age of 21, Tim discovers he can travel in time and change what happens in his own life. His decision to make his world a better place by getting a girlfriend turns out to be tricky.",
    director: "Richard Curtis",
    cast: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
    posterUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "T7A810DuHvw",
    streamingOn: ["Netflix", "Peacock"],
    aiReasoning: "Heartwarming blend of romance and time travel celebrating everyday beauty.",
    similarTags: ["Time Travel", "Life Gratitude", "Heartwarming"],
    moods: ["❤️ Romance", "😭 Emotional", "😊 Happy"],
    language: "English",
    reviews: []
  },

  // --- ANIME & JAPANESE MASTERPIECES ---
  {
    id: "your-name",
    title: "Your Name.",
    year: 2016,
    runtime: "1h 46m",
    genres: ["Anime", "Romance", "Fantasy", "Drama"],
    imdbRating: 8.4,
    matchScore: 97,
    synopsis: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    director: "Makoto Shinkai",
    cast: ["Ryunosuke Kamiki", "Mone Kamishibai"],
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    trailerId: "xU47nhruN-k",
    streamingOn: ["Crunchyroll", "Prime Video"],
    aiReasoning: "Breathtaking anime romance weaving comet destiny and time swap.",
    similarTags: ["Anime Romance", "Comet", "Body Swap"],
    moods: ["❤️ Romance", "😭 Emotional", "🌧 Rainy Day"],
    language: "Japanese",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    year: 2001,
    runtime: "2h 5m",
    genres: ["Anime", "Family", "Fantasy", "Adventure"],
    imdbRating: 8.6,
    matchScore: 98,
    synopsis: "During her family's move, a 10-year-old girl wanders into a world ruled by gods, witches, and spirits where humans are turned into beasts.",
    director: "Hayao Miyazaki",
    cast: ["Rumi Hiiragi", "Miyu Irino"],
    posterUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    trailerId: "ByXuk9QqQkk",
    streamingOn: ["Max", "Apple TV"],
    aiReasoning: "Enchanting Studio Ghibli fantasy worldbuilding.",
    similarTags: ["Studio Ghibli", "Japanese Animation", "Magical Bathhouse"],
    moods: ["👨👩👧 Family", "😊 Happy", "🌧 Rainy Day"],
    language: "Japanese",
    isAwardWinner: true,
    reviews: []
  },
  {
    id: "a-silent-voice",
    title: "A Silent Voice",
    year: 2016,
    runtime: "2h 10m",
    genres: ["Anime", "Drama", "Emotional"],
    imdbRating: 8.1,
    matchScore: 96,
    synopsis: "A grade school student who bullied his deaf classmate grows up and attempts to redeem himself.",
    director: "Naoko Yamada",
    cast: ["Miyu Irino", "Saori Hayami"],
    posterUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    backdropUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80",
    trailerId: "nfK6UgLra7w",
    streamingOn: ["Netflix", "Crunchyroll"],
    aiReasoning: "A deeply moving anime exploring redemption, mental health, and forgiveness.",
    similarTags: ["Redemption", "Deaf", "High School Drama"],
    moods: ["😭 Emotional", "🌧 Rainy Day"],
    language: "Japanese",
    reviews: []
  }
];

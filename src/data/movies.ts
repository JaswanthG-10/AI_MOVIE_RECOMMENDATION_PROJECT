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
  "Action",
  "Adventure",
  "Animation",
  "Anime",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Mystery",
  "Musical",
  "Romance",
  "Sci-Fi",
  "Sports",
  "Superhero",
  "Suspense",
  "Thriller",
  "War",
  "Western",
  "Psychological",
  "Mystery Thriller",
  "Cyberpunk",
  "Noir",
  "Survival",
  "Space",
  "Time Travel"
];
export const ALL_GENRES_LIST = ALL_30_GENRES;

export const MOVIES_DATABASE: Movie[] = [
  {
    "id": "tamil-vikram",
    "title": "Vikram",
    "year": 2022,
    "runtime": "2h 55m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A special agent investigates a group of masked vigilantes who are targeting drug lords.",
    "director": "Lokesh Kanagaraj",
    "cast": [
      "Kamal Haasan",
      "Vijay Sethupathi",
      "Fahadh Faasil"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "_-QD4_00Q3k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "similarTags": [
      "Lokesh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹120 Crore",
    "revenue": "₹450 Crore",
    "tagline": "Once a lion, always a lion.",
    "productionCompany": "Raaj Kamal Films International",
    "awards": [
      "Ananda Vikatan Cinema Award for Best Actor"
    ],
    "reviews": []
  },
  {
    "id": "tamil-leo",
    "title": "Leo",
    "year": 2023,
    "runtime": "2h 44m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "A mild-mannered cafe owner becomes the target of drug lords claiming he is their long-lost brother.",
    "director": "Lokesh Kanagaraj",
    "cast": [
      "Vijay",
      "Sanjay Dutt",
      "Trisha Krishnan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1602491453977-63a204d5537d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "3P-t4WRoW5c",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "similarTags": [
      "Lokesh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹300 Crore",
    "revenue": "₹620 Crore",
    "tagline": "Keep calm and avoid the bad guys.",
    "productionCompany": "Seven Screen Studio",
    "awards": [
      "SIIMA Award for Best Actor (Nominated)"
    ],
    "reviews": []
  },
  {
    "id": "tamil-kaithi",
    "title": "Kaithi",
    "year": 2019,
    "runtime": "2h 27m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Animation",
      "Drama",
      "Musical",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "An ex-convict helps the police drive a truck full of poisoned officers to the hospital while escaping gangs.",
    "director": "Lokesh Kanagaraj",
    "cast": [
      "Karthi",
      "Narain",
      "Arjun Das"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "RB14s-z-xVw",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "similarTags": [
      "Lokesh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹25 Crore",
    "revenue": "₹105 Crore",
    "tagline": "One night. Four police officers. A truck. 50 criminals.",
    "productionCompany": "Dream Warrior Pictures",
    "awards": [
      "Norway Tamil Film Festival Award for Best Actor"
    ],
    "reviews": []
  },
  {
    "id": "tamil-jailer",
    "title": "Jailer",
    "year": 2023,
    "runtime": "2h 48m",
    "genres": [
      "Action",
      "Comedy",
      "Crime",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A retired prison warden hunts down the criminals who allegedly killed his police officer son.",
    "director": "Nelson Dilipkumar",
    "cast": [
      "Rajinikanth",
      "Vinayakan",
      "Ramya Krishnan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "Vz-01L391c4",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Nelson Dilipkumar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Nelson Dilipkumar.",
    "similarTags": [
      "Nelson",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹200 Crore",
    "revenue": "₹650 Crore",
    "tagline": "A father's quiet rage.",
    "productionCompany": "Sun Pictures",
    "awards": [
      "Filmfare Award for Best Actor - Tamil"
    ],
    "reviews": []
  },
  {
    "id": "tamil-master",
    "title": "Master",
    "year": 2021,
    "runtime": "2h 59m",
    "genres": [
      "Action",
      "Drama",
      "Crime",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "An alcoholic professor is sent to a juvenile school, where he clashes with a ruthless gangster.",
    "director": "Lokesh Kanagaraj",
    "cast": [
      "Vijay",
      "Vijay Sethupathi",
      "Malavika Mohanan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "uU5NNv_PVzY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Lokesh Kanagaraj.",
    "similarTags": [
      "Lokesh",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹135 Crore",
    "revenue": "₹300 Crore",
    "tagline": "The master of his own destiny.",
    "productionCompany": "XB Film Creators",
    "awards": [
      "SIIMA Award for Best Film"
    ],
    "reviews": []
  },
  {
    "id": "tamil-ninety-six",
    "title": "96",
    "year": 2018,
    "runtime": "2h 38m",
    "genres": [
      "Romance",
      "Drama",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "Two high school sweethearts reunite at a class reunion after twenty-two years of separation.",
    "director": "C. Prem Kumar",
    "cast": [
      "Vijay Sethupathi",
      "Trisha Krishnan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "7K1-1V5gV8w",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Romance masterpiece directed by C. Prem Kumar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Romance masterpiece directed by C. Prem Kumar.",
    "similarTags": [
      "C.",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹18 Crore",
    "revenue": "₹55 Crore",
    "tagline": "The memories stay forever.",
    "productionCompany": "Madras Enterprises",
    "awards": [
      "SIIMA Award for Best Actress"
    ],
    "reviews": []
  },
  {
    "id": "tamil-soorarai-pottru",
    "title": "Soorarai Pottru",
    "year": 2020,
    "runtime": "2h 29m",
    "genres": [
      "Drama",
      "Biography",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A young man from a remote village dreams of launching a low-cost airline for the common man.",
    "director": "Sudha Kongara",
    "cast": [
      "Suriya",
      "Aparna Balamurali"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "b73v654K_vM",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Sudha Kongara.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Sudha Kongara.",
    "similarTags": [
      "Sudha",
      "Biography",
      "Crime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹20 Crore",
    "revenue": "₹170 Crore",
    "tagline": "An ordinary man with an extraordinary flight.",
    "productionCompany": "2D Entertainment",
    "awards": [
      "National Film Award for Best Feature Film"
    ],
    "reviews": []
  },
  {
    "id": "tamil-ratsasan",
    "title": "Ratsasan",
    "year": 2018,
    "runtime": "2h 50m",
    "genres": [
      "Thriller",
      "Mystery",
      "Crime",
      "Documentary",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "An aspiring film director becomes a cop and tracks down a psychotic serial killer targeting schoolgirls.",
    "director": "Ram Kumar",
    "cast": [
      "Vishnu Vishal",
      "Amala Paul"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "n5b5tWv1m88",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Thriller masterpiece directed by Ram Kumar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Thriller masterpiece directed by Ram Kumar.",
    "similarTags": [
      "Ram",
      "Mystery",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹15 Crore",
    "revenue": "₹75 Crore",
    "tagline": "The hunter becomes the hunted.",
    "productionCompany": "Axess Film Factory",
    "awards": [
      "Filmfare Award for Best Film - Tamil"
    ],
    "reviews": []
  },
  {
    "id": "tamil-asuran",
    "title": "Asuran",
    "year": 2019,
    "runtime": "2h 21m",
    "genres": [
      "Action",
      "Drama",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A farmer goes on the run with his family to protect his son, who has killed a wealthy landlord.",
    "director": "Vetrimaaran",
    "cast": [
      "Dhanush",
      "Manju Warrier"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "S_T2i1o6L_s",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Vetrimaaran.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Vetrimaaran.",
    "similarTags": [
      "Vetrimaaran",
      "Drama",
      "Musical"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹32 Crore",
    "revenue": "₹150 Crore",
    "tagline": "They can steal our land, but they can't steal our education.",
    "productionCompany": "V Creations",
    "awards": [
      "National Film Award for Best Actor"
    ],
    "reviews": []
  },
  {
    "id": "tamil-amaran",
    "title": "Amaran",
    "year": 2024,
    "runtime": "2h 45m",
    "genres": [
      "Drama",
      "Biography",
      "War",
      "Family",
      "Romance",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A biographical tribute to Major Mukund Varadarajan, chronicling his service and sacrifices in Kashmir.",
    "director": "Rajkumar Periasamy",
    "cast": [
      "Sivakarthikeyan",
      "Sai Pallavi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "gY8VpM56s8w",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Rajkumar Periasamy.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Rajkumar Periasamy.",
    "similarTags": [
      "Rajkumar",
      "Biography",
      "War"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹100 Crore",
    "revenue": "₹250 Crore",
    "tagline": "A hero's sacrifice.",
    "productionCompany": "Raaj Kamal Films International",
    "awards": [
      "National Film Award for Best Tribute Film"
    ],
    "reviews": []
  },
  {
    "id": "tamil-nayagan",
    "title": "Nayagan",
    "year": 1987,
    "runtime": "2h 25m",
    "genres": [
      "Crime",
      "Drama",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "A slum dweller rises to become a powerful crime godfather in Mumbai.",
    "director": "Mani Ratnam",
    "cast": [
      "Kamal Haasan",
      "Saranya Ponvannan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Crime masterpiece directed by Mani Ratnam.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Crime masterpiece directed by Mani Ratnam.",
    "similarTags": [
      "Mani",
      "Drama",
      "Fantasy"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹106 Crore",
    "revenue": "₹77 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "tamil-anbe-sivam",
    "title": "Anbe Sivam",
    "year": 2003,
    "runtime": "2h 40m",
    "genres": [
      "Drama",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "Two men of contrasting personalities travel together from Bhubaneswar to Chennai, forming an unlikely bond.",
    "director": "Sundar C.",
    "cast": [
      "Kamal Haasan",
      "R. Madhavan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Sundar C..",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Sundar C..",
    "similarTags": [
      "Sundar",
      "Comedy",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹99 Crore",
    "revenue": "₹90 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-ponniyin-selvan-1",
    "title": "Ponniyin Selvan: I",
    "year": 2022,
    "runtime": "2h 47m",
    "genres": [
      "Adventure",
      "Action",
      "History",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "Vandiyathevan sets out to deliver a message from Crown Prince Aditha Karikalan amidst Chola court conspiracies.",
    "director": "Mani Ratnam",
    "cast": [
      "Vikram",
      "Karthi",
      "Jayam Ravi",
      "Aishwarya Rai"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Adventure masterpiece directed by Mani Ratnam.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Adventure masterpiece directed by Mani Ratnam.",
    "similarTags": [
      "Mani",
      "Action",
      "History"
    ],
    "moods": [
      "✨ Adventure",
      "🔥 Action"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹41 Crore",
    "revenue": "₹344 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "tamil-vada-chennai",
    "title": "Vada Chennai",
    "year": 2018,
    "runtime": "2h 44m",
    "genres": [
      "Crime",
      "Drama",
      "Action",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A skilled carrom player gets reluctantly drawn into a gang war in North Chennai.",
    "director": "Vetrimaaran",
    "cast": [
      "Dhanush",
      "Ameer",
      "Andrea Jeremiah"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Crime masterpiece directed by Vetrimaaran.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Crime masterpiece directed by Vetrimaaran.",
    "similarTags": [
      "Vetrimaaran",
      "Drama",
      "Action"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹111 Crore",
    "revenue": "₹262 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-baasha",
    "title": "Baasha",
    "year": 1995,
    "runtime": "2h 25m",
    "genres": [
      "Action",
      "Crime",
      "Musical",
      "Thriller",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "An auto driver hides his dark past as a powerful Mumbai crime lord to keep his family safe.",
    "director": "Suresh Krissna",
    "cast": [
      "Rajinikanth",
      "Nagma",
      "Raghuvaran"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Suresh Krissna.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Suresh Krissna.",
    "similarTags": [
      "Suresh",
      "Crime",
      "Musical"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹91 Crore",
    "revenue": "₹60 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "tamil-enthiran",
    "title": "Enthiran",
    "year": 2010,
    "runtime": "2h 45m",
    "genres": [
      "Sci-Fi",
      "Action",
      "Cyberpunk",
      "Romance",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A scientist builds a humanoid robot that falls in love with his fiancee and turns rogue.",
    "director": "S. Shankar",
    "cast": [
      "Rajinikanth",
      "Aishwarya Rai"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Sci-Fi masterpiece directed by S. Shankar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Sci-Fi masterpiece directed by S. Shankar.",
    "similarTags": [
      "S.",
      "Action",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Action"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹60 Crore",
    "revenue": "₹67 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "tamil-ghilli",
    "title": "Ghilli",
    "year": 2004,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Comedy",
      "Sports",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A kabaddi player saves a girl from a powerful factionist in Madurai and hides her in his house.",
    "director": "Dharani",
    "cast": [
      "Vijay",
      "Trisha Krishnan",
      "Prakash Raj"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Dharani.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Dharani.",
    "similarTags": [
      "Dharani",
      "Comedy",
      "Sports"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹74 Crore",
    "revenue": "₹227 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "tamil-thuppakki",
    "title": "Thuppakki",
    "year": 2012,
    "runtime": "2h 45m",
    "genres": [
      "Action",
      "Thriller",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "An army captain visits Chennai on vacation, only to uncover and dismantle a network of sleeper cells.",
    "director": "A.R. Murugadoss",
    "cast": [
      "Vijay",
      "Kajal Aggarwal"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by A.R. Murugadoss.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by A.R. Murugadoss.",
    "similarTags": [
      "A.R.",
      "Thriller",
      "Sports"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹138 Crore",
    "revenue": "₹251 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "tamil-maanadu",
    "title": "Maanadu",
    "year": 2021,
    "runtime": "2h 27m",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Time Travel",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "A man gets trapped in a time loop on the day of a public conference, trying to save the Chief Minister.",
    "director": "Venkat Prabhu",
    "cast": [
      "Silambarasan",
      "S.J. Suryah"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Sci-Fi masterpiece directed by Venkat Prabhu.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Sci-Fi masterpiece directed by Venkat Prabhu.",
    "similarTags": [
      "Venkat",
      "Thriller",
      "Time Travel"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹50 Crore",
    "revenue": "₹339 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "tamil-vikram-vedha",
    "title": "Vikram Vedha",
    "year": 2017,
    "runtime": "2h 27m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A righteous police officer hunts a notorious gangster who tells him stories that blur lines of morality.",
    "director": "Pushkar-Gayathri",
    "cast": [
      "Madhavan",
      "Vijay Sethupathi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pushkar-Gayathri.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pushkar-Gayathri.",
    "similarTags": [
      "Pushkar-Gayathri",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹69 Crore",
    "revenue": "₹230 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-super-deluxe",
    "title": "Super Deluxe",
    "year": 2019,
    "runtime": "2h 56m",
    "genres": [
      "Drama",
      "Comedy",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "An array of odd characters find themselves in unexpected situations, forcing them to face their demons.",
    "director": "Thiagarajan Kumararaja",
    "cast": [
      "Vijay Sethupathi",
      "Fahadh Faasil",
      "Samantha Ruth Prabhu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Thiagarajan Kumararaja.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Thiagarajan Kumararaja.",
    "similarTags": [
      "Thiagarajan",
      "Comedy",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹29 Crore",
    "revenue": "₹414 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "tamil-visaranai",
    "title": "Visaranai",
    "year": 2015,
    "runtime": "1h 49m",
    "genres": [
      "Drama",
      "Crime",
      "Thriller",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "Four immigrants are tortured by the police to confess to a crime they did not commit.",
    "director": "Vetrimaaran",
    "cast": [
      "Dinesh",
      "Samuthirakani"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Vetrimaaran.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Vetrimaaran.",
    "similarTags": [
      "Vetrimaaran",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹79 Crore",
    "revenue": "₹128 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "tamil-jai-bhim",
    "title": "Jai Bhim",
    "year": 2021,
    "runtime": "2h 44m",
    "genres": [
      "Drama",
      "Biography",
      "Western",
      "Space",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A brave lawyer fights for justice when a tribal man is falsely accused of theft and disappears from custody.",
    "director": "T.J. Gnanavel",
    "cast": [
      "Suriya",
      "Lijo Mol Jose"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by T.J. Gnanavel.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by T.J. Gnanavel.",
    "similarTags": [
      "T.J.",
      "Biography",
      "Western"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹111 Crore",
    "revenue": "₹94 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-sarpatta-parambarai",
    "title": "Sarpatta Parambarai",
    "year": 2021,
    "runtime": "2h 53m",
    "genres": [
      "Drama",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "A young man from North Madras enters the boxing ring to save his clan's honor in the 1970s.",
    "director": "Pa. Ranjith",
    "cast": [
      "Arya",
      "Dushara Vijayan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Pa. Ranjith.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Pa. Ranjith.",
    "similarTags": [
      "Pa.",
      "Sports",
      "Psychological"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Sports"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹107 Crore",
    "revenue": "₹436 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "tamil-jigarthanda-doublex",
    "title": "Jigarthanda DoubleX",
    "year": 2023,
    "runtime": "2h 52m",
    "genres": [
      "Action",
      "Comedy",
      "Western",
      "Mystery Thriller",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "A filmmaker agrees to direct a movie for a ruthless gangster who wants to become a hero.",
    "director": "Karthik Subbaraj",
    "cast": [
      "Raghava Lawrence",
      "S.J. Suryah"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Karthik Subbaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Karthik Subbaraj.",
    "similarTags": [
      "Karthik",
      "Comedy",
      "Western"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹137 Crore",
    "revenue": "₹200 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "tamil-indian",
    "title": "Indian",
    "year": 1996,
    "runtime": "3h 5m",
    "genres": [
      "Action",
      "Thriller",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A veteran freedom fighter uses ancient martial arts to eradicate bribery and corruption in society.",
    "director": "S. Shankar",
    "cast": [
      "Kamal Haasan",
      "Nedumudi Venu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by S. Shankar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by S. Shankar.",
    "similarTags": [
      "S.",
      "Thriller",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹56 Crore",
    "revenue": "₹159 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "tamil-sivaji-boss",
    "title": "Sivaji: The Boss",
    "year": 2007,
    "runtime": "3h 5m",
    "genres": [
      "Action",
      "Comedy",
      "Drama",
      "Noir",
      "Animation",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A software engineer returns to India to help the poor, but clashes with corrupt politicians.",
    "director": "S. Shankar",
    "cast": [
      "Rajinikanth",
      "Shriya Saran"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by S. Shankar.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by S. Shankar.",
    "similarTags": [
      "S.",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹69 Crore",
    "revenue": "₹100 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-kaththi",
    "title": "Kaththi",
    "year": 2014,
    "runtime": "2h 46m",
    "genres": [
      "Action",
      "Drama",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "An escaping criminal takes the place of his lookalike to fight against a multinational company stealing water.",
    "director": "A.R. Murugadoss",
    "cast": [
      "Vijay",
      "Samantha Ruth Prabhu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by A.R. Murugadoss.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by A.R. Murugadoss.",
    "similarTags": [
      "A.R.",
      "Drama",
      "Survival"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹20 Crore",
    "revenue": "₹77 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "tamil-pizza",
    "title": "Pizza",
    "year": 2012,
    "runtime": "2h 7m",
    "genres": [
      "Horror",
      "Thriller",
      "Mystery",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A pizza delivery boy gets trapped inside a haunted house while delivering a pizza.",
    "director": "Karthik Subbaraj",
    "cast": [
      "Vijay Sethupathi",
      "Remya Nambeesan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Horror masterpiece directed by Karthik Subbaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Horror masterpiece directed by Karthik Subbaraj.",
    "similarTags": [
      "Karthik",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Thriller"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹65 Crore",
    "revenue": "₹110 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "tamil-mankatha",
    "title": "Mankatha",
    "year": 2011,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Crime",
      "Thriller",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A suspended police officer plans a heist to steal 500 million rupees from betting syndicates.",
    "director": "Venkat Prabhu",
    "cast": [
      "Ajith Kumar",
      "Arjun Sarja"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Venkat Prabhu.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Venkat Prabhu.",
    "similarTags": [
      "Venkat",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹58 Crore",
    "revenue": "₹153 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "tamil-aadukalam",
    "title": "Aadukalam",
    "year": 2011,
    "runtime": "2h 40m",
    "genres": [
      "Drama",
      "Sports",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A young man gets caught in a web of jealousy and betrayal in the world of rooster fighting.",
    "director": "Vetrimaaran",
    "cast": [
      "Dhanush",
      "Taapsee Pannu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Vetrimaaran.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Vetrimaaran.",
    "similarTags": [
      "Vetrimaaran",
      "Sports",
      "Action"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Sports"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹134 Crore",
    "revenue": "₹421 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "tamil-kaala",
    "title": "Kaala",
    "year": 2018,
    "runtime": "2h 42m",
    "genres": [
      "Action",
      "Drama",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A powerful crime lord protects his Dharavi slum dwellers from a ruthless politician's land grabs.",
    "director": "Pa. Ranjith",
    "cast": [
      "Rajinikanth",
      "Nana Patekar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pa. Ranjith.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pa. Ranjith.",
    "similarTags": [
      "Pa.",
      "Drama",
      "Adventure"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹97 Crore",
    "revenue": "₹438 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "tamil-kabali",
    "title": "Kabali",
    "year": 2016,
    "runtime": "2h 32m",
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "An aging gangster returns from prison to fight for the rights of Tamil workers in Malaysia.",
    "director": "Pa. Ranjith",
    "cast": [
      "Rajinikanth",
      "Winston Chao"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pa. Ranjith.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Pa. Ranjith.",
    "similarTags": [
      "Pa.",
      "Crime",
      "Drama"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹123 Crore",
    "revenue": "₹212 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "tamil-petta",
    "title": "Petta",
    "year": 2019,
    "runtime": "2h 51m",
    "genres": [
      "Action",
      "Comedy",
      "Crime",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A hostel warden confronts an international mafia family to protect his best friend's son.",
    "director": "Karthik Subbaraj",
    "cast": [
      "Rajinikanth",
      "Vijay Sethupathi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Karthik Subbaraj.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Karthik Subbaraj.",
    "similarTags": [
      "Karthik",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹43 Crore",
    "revenue": "₹126 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "tamil-madras",
    "title": "Madras",
    "year": 2014,
    "runtime": "2h 30m",
    "genres": [
      "Drama",
      "Action",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "An IT professional gets involved in a political conflict over a wall painting in North Chennai.",
    "director": "Pa. Ranjith",
    "cast": [
      "Karthi",
      "Catherine Tresa"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Pa. Ranjith.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Drama masterpiece directed by Pa. Ranjith.",
    "similarTags": [
      "Pa.",
      "Action",
      "Biography"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Action"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹67 Crore",
    "revenue": "₹434 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "tamil-irumbukottai-murattu-singam",
    "title": "Irumbukottai Murattu Singam",
    "year": 2010,
    "runtime": "2h 20m",
    "genres": [
      "Action",
      "Comedy",
      "Western",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "A cowboy set in Tamil Nadu saves a village from a ruthless gang using traditional guns.",
    "director": "Chimbudevan",
    "cast": [
      "Lawrence Raghavendra",
      "Sandhya",
      "Padmapriya"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Chimbudevan.",
    "whyRecommended": "Top recommendation from Tamil cinema. A high-quality Action masterpiece directed by Chimbudevan.",
    "similarTags": [
      "Chimbudevan",
      "Comedy",
      "Western"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "₹118 Crore",
    "revenue": "₹271 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-baahubali-1",
    "title": "Baahubali: The Beginning",
    "year": 2015,
    "runtime": "2h 39m",
    "genres": [
      "Action",
      "Fantasy",
      "Adventure",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A young villager learns about his legendary father's lineage and attempts to save his captive mother.",
    "director": "S.S. Rajamouli",
    "cast": [
      "Prabhas",
      "Rana Daggubati",
      "Anushka Shetty"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "similarTags": [
      "S.S.",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "✨ Action",
      "🔥 Fantasy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹46 Crore",
    "revenue": "₹175 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-baahubali-2",
    "title": "Baahubali 2: The Conclusion",
    "year": 2017,
    "runtime": "2h 47m",
    "genres": [
      "Action",
      "Fantasy",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "Shiva learns of the betrayal and assassination of his father, the grand general Baahubali.",
    "director": "S.S. Rajamouli",
    "cast": [
      "Prabhas",
      "Rana Daggubati",
      "Anushka Shetty"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "similarTags": [
      "S.S.",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "✨ Action",
      "🔥 Fantasy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹134 Crore",
    "revenue": "₹373 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-rrr",
    "title": "RRR",
    "year": 2022,
    "runtime": "3h 7m",
    "genres": [
      "Action",
      "Drama",
      "History",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "Two legendary revolutionaries embark on a journey of friendship and rebellion against British rule.",
    "director": "S.S. Rajamouli",
    "cast": [
      "NTR Jr.",
      "Ram Charan",
      "Alia Bhatt"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by S.S. Rajamouli.",
    "similarTags": [
      "S.S.",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹99 Crore",
    "revenue": "₹132 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-eega",
    "title": "Eega",
    "year": 2012,
    "runtime": "2h 25m",
    "genres": [
      "Fantasy",
      "Action",
      "Comedy",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A murdered man reincarnates as a housefly to protect his lover and seek revenge against his killer.",
    "director": "S.S. Rajamouli",
    "cast": [
      "Nani",
      "Samantha Ruth Prabhu",
      "Sudeep"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Fantasy masterpiece directed by S.S. Rajamouli.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Fantasy masterpiece directed by S.S. Rajamouli.",
    "similarTags": [
      "S.S.",
      "Action",
      "Comedy"
    ],
    "moods": [
      "✨ Fantasy",
      "🔥 Action"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹45 Crore",
    "revenue": "₹140 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-magadheera",
    "title": "Magadheera",
    "year": 2009,
    "runtime": "2h 47m",
    "genres": [
      "Fantasy",
      "Action",
      "Romance",
      "Biography",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "A motorcycle stuntman recalls a past life as a warrior who died protecting a princess.",
    "director": "S.S. Rajamouli",
    "cast": [
      "Ram Charan",
      "Kajal Aggarwal"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Fantasy masterpiece directed by S.S. Rajamouli.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Fantasy masterpiece directed by S.S. Rajamouli.",
    "similarTags": [
      "S.S.",
      "Action",
      "Romance"
    ],
    "moods": [
      "✨ Fantasy",
      "🔥 Action"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹54 Crore",
    "revenue": "₹85 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "telugu-pushpa",
    "title": "Pushpa: The Rise",
    "year": 2021,
    "runtime": "2h 59m",
    "genres": [
      "Action",
      "Crime",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A red sandalwood smuggler rises to lead the syndicate, facing off against a brutal police inspector.",
    "director": "Sukumar",
    "cast": [
      "Allu Arjun",
      "Rashmika Mandanna",
      "Fahadh Faasil"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sukumar.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sukumar.",
    "similarTags": [
      "Sukumar",
      "Crime",
      "Comedy"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹94 Crore",
    "revenue": "₹189 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-arjun-reddy",
    "title": "Arjun Reddy",
    "year": 2017,
    "runtime": "3h 2m",
    "genres": [
      "Drama",
      "Romance",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A brilliant medical student spirals into self-destruction after his girlfriend is forced to marry another.",
    "director": "Sandeep Reddy Vanga",
    "cast": [
      "Vijay Deverakonda",
      "Shalini Pandey"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sandeep Reddy Vanga.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sandeep Reddy Vanga.",
    "similarTags": [
      "Sandeep",
      "Romance",
      "Crime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹97 Crore",
    "revenue": "₹378 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "telugu-mahanati",
    "title": "Mahanati",
    "year": 2018,
    "runtime": "2h 57m",
    "genres": [
      "Drama",
      "Biography",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "The life story of Savitri, the iconic actress of South Indian cinema.",
    "director": "Nag Ashwin",
    "cast": [
      "Keerthy Suresh",
      "Dulquer Salmaan",
      "Samantha Ruth Prabhu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Nag Ashwin.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Nag Ashwin.",
    "similarTags": [
      "Nag",
      "Biography",
      "Documentary"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹90 Crore",
    "revenue": "₹209 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "telugu-sita-ramam",
    "title": "Sita Ramam",
    "year": 2022,
    "runtime": "2h 43m",
    "genres": [
      "Romance",
      "Drama",
      "War",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "An orphan soldier receives a letter from a girl named Sita, beginning a classic romantic journey.",
    "director": "Hanu Raghavapudi",
    "cast": [
      "Dulquer Salmaan",
      "Mrunal Thakur"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Hanu Raghavapudi.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Hanu Raghavapudi.",
    "similarTags": [
      "Hanu",
      "Drama",
      "War"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹185 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-jersey",
    "title": "Jersey",
    "year": 2019,
    "runtime": "2h 40m",
    "genres": [
      "Drama",
      "Sports",
      "Family",
      "Romance",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A retired cricketer decides to return to the game in his late thirties to buy a jersey for his son.",
    "director": "Gowtam Tinnanuri",
    "cast": [
      "Nani",
      "Shraddha Srinath"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Gowtam Tinnanuri.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Gowtam Tinnanuri.",
    "similarTags": [
      "Gowtam",
      "Sports",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Sports"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹129 Crore",
    "revenue": "₹322 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-kancharapalem",
    "title": "C/o Kancharapalem",
    "year": 2018,
    "runtime": "2h 22m",
    "genres": [
      "Drama",
      "Romance",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "Four love stories set in the neighborhood of Kancharapalem, spanning different age groups.",
    "director": "Venkatesh Maha",
    "cast": [
      "Subba Rao",
      "Radha Bessey"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Venkatesh Maha.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Venkatesh Maha.",
    "similarTags": [
      "Venkatesh",
      "Romance",
      "Fantasy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹68 Crore",
    "revenue": "₹195 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-rangasthalam",
    "title": "Ragasthalam",
    "year": 2018,
    "runtime": "2h 59m",
    "genres": [
      "Action",
      "Drama",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A partially deaf villager fights a ruthless president who has ruled his village for decades.",
    "director": "Sukumar",
    "cast": [
      "Ram Charan",
      "Samantha Ruth Prabhu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sukumar.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sukumar.",
    "similarTags": [
      "Sukumar",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹22 Crore",
    "revenue": "₹407 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-pokiri",
    "title": "Pokiri",
    "year": 2006,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Crime",
      "Thriller",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "An undercover cop infiltrates a mafia gang, pretending to be a ruthless hitman.",
    "director": "Puri Jagannadh",
    "cast": [
      "Mahesh Babu",
      "Ileana D'Cruz"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Puri Jagannadh.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Puri Jagannadh.",
    "similarTags": [
      "Puri",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹51 Crore",
    "revenue": "₹178 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-athadu",
    "title": "Athadu",
    "year": 2005,
    "runtime": "2h 50m",
    "genres": [
      "Action",
      "Drama",
      "Thriller",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A hitman is falsely accused of murder and hides in a remote village, pretending to be a relative.",
    "director": "Trivikram Srinivas",
    "cast": [
      "Mahesh Babu",
      "Trisha Krishnan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Trivikram Srinivas.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Trivikram Srinivas.",
    "similarTags": [
      "Trivikram",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹94 Crore",
    "revenue": "₹303 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-bommarillu",
    "title": "Bommarillu",
    "year": 2006,
    "runtime": "2h 45m",
    "genres": [
      "Romance",
      "Comedy",
      "Family",
      "Musical",
      "Thriller",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "A young man struggles with his father's overprotective nature while falling in love with a bubbly girl.",
    "director": "Bhaskar",
    "cast": [
      "Siddharth",
      "Genelia D'Souza"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Bhaskar.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Bhaskar.",
    "similarTags": [
      "Bhaskar",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹77 Crore",
    "revenue": "₹60 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "telugu-arya",
    "title": "Arya",
    "year": 2004,
    "runtime": "2h 30m",
    "genres": [
      "Romance",
      "Comedy",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A bubbly student confesses his love to a girl who is already in a relationship with a bully.",
    "director": "Sukumar",
    "cast": [
      "Allu Arjun",
      "Anuradha Mehta"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Sukumar.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Sukumar.",
    "similarTags": [
      "Sukumar",
      "Comedy",
      "War"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹110 Crore",
    "revenue": "₹411 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-goodachari",
    "title": "Goodachari",
    "year": 2018,
    "runtime": "2h 27m",
    "genres": [
      "Action",
      "Thriller",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "An aspiring intelligence officer is framed for the murder of his bosses on his graduation day.",
    "director": "Sashi Kiran Tikka",
    "cast": [
      "Adivi Sesh",
      "Sobhita Dhulipala"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sashi Kiran Tikka.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Sashi Kiran Tikka.",
    "similarTags": [
      "Sashi",
      "Thriller",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹32 Crore",
    "revenue": "₹279 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-agent-sai",
    "title": "Agent Sai Srinivasa Athreya",
    "year": 2019,
    "runtime": "2h 24m",
    "genres": [
      "Comedy",
      "Mystery",
      "Thriller",
      "Sports",
      "Psychological",
      "Time Travel",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A brilliant detective in Nellore stumbles upon a conspiracy involving unclaimed dead bodies.",
    "director": "Swaroop RSJ",
    "cast": [
      "Naveen Polishetty",
      "Shruti Sharma"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Swaroop RSJ.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Swaroop RSJ.",
    "similarTags": [
      "Swaroop",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Mystery"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹89 Crore",
    "revenue": "₹408 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "telugu-mathu-vadalara",
    "title": "Mathu Vadalara",
    "year": 2019,
    "runtime": "2h 10m",
    "genres": [
      "Comedy",
      "Thriller",
      "Crime",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "A delivery boy gets trapped in a murder case after trying to steal money to make ends meet.",
    "director": "Ritesh Rana",
    "cast": [
      "Sri Simha",
      "Satya"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Ritesh Rana.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Ritesh Rana.",
    "similarTags": [
      "Ritesh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Thriller"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹120 Crore",
    "revenue": "₹311 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "telugu-brochevarevarura",
    "title": "Brochevarevarura",
    "year": 2019,
    "runtime": "2h 18m",
    "genres": [
      "Comedy",
      "Crime",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "Three college friends plan a fake kidnapping to help a classmate, leading to chaotic events.",
    "director": "Vivek Athreya",
    "cast": [
      "Sree Vishnu",
      "Nivetha Thomas"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Vivek Athreya.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Comedy masterpiece directed by Vivek Athreya.",
    "similarTags": [
      "Vivek",
      "Crime",
      "Suspense"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Crime"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹117 Crore",
    "revenue": "₹270 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-major",
    "title": "Major",
    "year": 2022,
    "runtime": "2h 30m",
    "genres": [
      "Drama",
      "Biography",
      "War",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "The life and sacrifices of Major Sandeep Unnikrishnan during the 2008 Mumbai attacks.",
    "director": "Sashi Kiran Tikka",
    "cast": [
      "Adivi Sesh",
      "Saiee Manjrekar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sashi Kiran Tikka.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sashi Kiran Tikka.",
    "similarTags": [
      "Sashi",
      "Biography",
      "War"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹50 Crore",
    "revenue": "₹203 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-kartikeya-2",
    "title": "Kartikeya 2",
    "year": 2022,
    "runtime": "2h 25m",
    "genres": [
      "Adventure",
      "Mystery",
      "Fantasy",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "A rational doctor searches for the ancient anklet of Lord Krishna, facing mystics and traps.",
    "director": "Chandoo Mondeti",
    "cast": [
      "N निखिल Siddharth",
      "Anupama Parameswaran"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Adventure masterpiece directed by Chandoo Mondeti.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Adventure masterpiece directed by Chandoo Mondeti.",
    "similarTags": [
      "Chandoo",
      "Mystery",
      "Fantasy"
    ],
    "moods": [
      "✨ Adventure",
      "🔥 Mystery"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹110 Crore",
    "revenue": "₹151 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-dasara",
    "title": "Dasara",
    "year": 2023,
    "runtime": "2h 36m",
    "genres": [
      "Action",
      "Drama",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A young man from a coal mine village takes revenge for his friend's murder during a festival.",
    "director": "Srikanth Odela",
    "cast": [
      "Nani",
      "Keerthy Suresh"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Srikanth Odela.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Srikanth Odela.",
    "similarTags": [
      "Srikanth",
      "Drama",
      "Western"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹27 Crore",
    "revenue": "₹316 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "telugu-hanuman",
    "title": "Hanu-Man",
    "year": 2024,
    "runtime": "2h 38m",
    "genres": [
      "Action",
      "Fantasy",
      "Superhero",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "A petty thief in an imaginary village gains the powers of Lord Hanuman and saves his home from evil.",
    "director": "Prasanth Varma",
    "cast": [
      "Teja Sajja",
      "Amritha Aiyer"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Prasanth Varma.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Prasanth Varma.",
    "similarTags": [
      "Prasanth",
      "Fantasy",
      "Superhero"
    ],
    "moods": [
      "✨ Action",
      "🔥 Fantasy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹98 Crore",
    "revenue": "₹73 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-hi-nanna",
    "title": "Hi Nanna",
    "year": 2023,
    "runtime": "2h 35m",
    "genres": [
      "Drama",
      "Romance",
      "Family",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "A single father photographer raises his daughter until an enigmatic woman enters their lives.",
    "director": "Shouryuv",
    "cast": [
      "Nani",
      "Mrunal Thakur"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Shouryuv.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Shouryuv.",
    "similarTags": [
      "Shouryuv",
      "Romance",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹72 Crore",
    "revenue": "₹455 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "telugu-prasthanam",
    "title": "Prasthanam",
    "year": 2010,
    "runtime": "2h 45m",
    "genres": [
      "Drama",
      "Crime",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A political godfather chooses his stepson to succeed him, leading to intense family rivalry.",
    "director": "Deva Katta",
    "cast": [
      "Sharwanand",
      "Sai Kumar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Deva Katta.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Deva Katta.",
    "similarTags": [
      "Deva",
      "Crime",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹118 Crore",
    "revenue": "₹133 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-vedam",
    "title": "Vedam",
    "year": 2010,
    "runtime": "2h 15m",
    "genres": [
      "Drama",
      "Action",
      "Noir",
      "Animation",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "The lives of five people from different walks of life intersect at a hospital during a terror attack.",
    "director": "Krish Jagarlamudi",
    "cast": [
      "Allu Arjun",
      "Manchu Manoj",
      "Anushka Shetty"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Krish Jagarlamudi.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Krish Jagarlamudi.",
    "similarTags": [
      "Krish",
      "Action",
      "Noir"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Action"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹46 Crore",
    "revenue": "₹341 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-leader",
    "title": "Leader",
    "year": 2010,
    "runtime": "2h 40m",
    "genres": [
      "Drama",
      "Political",
      "History",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A foreign-educated youngster enters politics after his father's murder, aiming to eliminate corruption.",
    "director": "Sekhar Kammula",
    "cast": [
      "Rana Daggubati",
      "Richa Gangopadhyay"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sekhar Kammula.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Sekhar Kammula.",
    "similarTags": [
      "Sekhar",
      "Political",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Political"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹46 Crore",
    "revenue": "₹411 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-gamyam",
    "title": "Gamyam",
    "year": 2008,
    "runtime": "2h 10m",
    "genres": [
      "Drama",
      "Adventure",
      "Romance",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A wealthy youngster travels with a motorcycle thief in search of his long-lost love.",
    "director": "Krish Jagarlamudi",
    "cast": [
      "Sharwanand",
      "Allari Naresh"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Krish Jagarlamudi.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Drama masterpiece directed by Krish Jagarlamudi.",
    "similarTags": [
      "Krish",
      "Adventure",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Adventure"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹53 Crore",
    "revenue": "₹148 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "telugu-okkadu",
    "title": "Okkadu",
    "year": 2003,
    "runtime": "2h 50m",
    "genres": [
      "Action",
      "Romance",
      "Sports",
      "Time Travel",
      "Comedy",
      "History",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A kabaddi player saves a girl from a powerful factionist in Kurnool, hiding her in his house.",
    "director": "Gunasekhar",
    "cast": [
      "Mahesh Babu",
      "Bhumika Chawla"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Gunasekhar.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Gunasekhar.",
    "similarTags": [
      "Gunasekhar",
      "Romance",
      "Sports"
    ],
    "moods": [
      "✨ Action",
      "🔥 Romance"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹116 Crore",
    "revenue": "₹243 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-kshanam",
    "title": "Kshanam",
    "year": 2016,
    "runtime": "2h 0m",
    "genres": [
      "Thriller",
      "Mystery",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "An NRI returns to India to help his ex-girlfriend find her kidnapped daughter.",
    "director": "Ravikanth Perepu",
    "cast": [
      "Adivi Sesh",
      "Adah Sharma"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Thriller masterpiece directed by Ravikanth Perepu.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Thriller masterpiece directed by Ravikanth Perepu.",
    "similarTags": [
      "Ravikanth",
      "Mystery",
      "Action"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹86 Crore",
    "revenue": "₹301 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-evaru",
    "title": "Evaru",
    "year": 2019,
    "runtime": "1h 57m",
    "genres": [
      "Thriller",
      "Crime",
      "Mystery",
      "Adventure",
      "Documentary",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A corrupt police officer investigates a woman accused of killing an officer who allegedly assaulted her.",
    "director": "Venkat Ramji",
    "cast": [
      "Adivi Sesh",
      "Regina Cassandra"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Thriller masterpiece directed by Venkat Ramji.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Thriller masterpiece directed by Venkat Ramji.",
    "similarTags": [
      "Venkat",
      "Crime",
      "Mystery"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Crime"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹28 Crore",
    "revenue": "₹101 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-geetha-govindam",
    "title": "Geetha Govindam",
    "year": 2018,
    "runtime": "2h 22m",
    "genres": [
      "Romance",
      "Comedy",
      "Animation",
      "Drama",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A lecturer falls in love with a woman who initially hates him due to a tragic misunderstanding.",
    "director": "Parasuram",
    "cast": [
      "Vijay Deverakonda",
      "Rashmika Mandanna"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Parasuram.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Parasuram.",
    "similarTags": [
      "Parasuram",
      "Comedy",
      "Animation"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹40 Crore",
    "revenue": "₹345 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "telugu-ala-vaikunthapurramuloo",
    "title": "Ala Vaikunthapurramuloo",
    "year": 2020,
    "runtime": "2h 45m",
    "genres": [
      "Action",
      "Comedy",
      "Family",
      "Anime",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A young man swapped at birth learns about his biological father's wealthy family and protects them.",
    "director": "Trivikram Srinivas",
    "cast": [
      "Allu Arjun",
      "Pooja Hegde"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Trivikram Srinivas.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Action masterpiece directed by Trivikram Srinivas.",
    "similarTags": [
      "Trivikram",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹113 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "telugu-baby-telugu",
    "title": "Baby",
    "year": 2023,
    "runtime": "2h 55m",
    "genres": [
      "Romance",
      "Drama",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A triangular love story exploring changing priorities and heartbreaks in college life.",
    "director": "Sai Rajesh",
    "cast": [
      "Anand Deverakonda",
      "Vaishnavi Chaitanya"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Sai Rajesh.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by Sai Rajesh.",
    "similarTags": [
      "Sai",
      "Drama",
      "Biography"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹23 Crore",
    "revenue": "₹232 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "telugu-kushi-telugu",
    "title": "Kushi",
    "year": 2001,
    "runtime": "2h 50m",
    "genres": [
      "Romance",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "Two college friends have feelings for each other but keep fighting due to their high egos.",
    "director": "S.J. Suryah",
    "cast": [
      "Pawan Kalyan",
      "Bhumika Chawla"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by S.J. Suryah.",
    "whyRecommended": "Top recommendation from Telugu cinema. A high-quality Romance masterpiece directed by S.J. Suryah.",
    "similarTags": [
      "S.J.",
      "Comedy",
      "History"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Telugu",
    "country": "India",
    "budget": "₹115 Crore",
    "revenue": "₹444 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-drishyam-1",
    "title": "Drishyam",
    "year": 2013,
    "runtime": "2h 40m",
    "genres": [
      "Thriller",
      "Drama",
      "Crime",
      "Action",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A cable TV operator goes to extreme lengths to protect his family after they commit an accidental murder.",
    "director": "Jeethu Joseph",
    "cast": [
      "Mohanlal",
      "Meena",
      "Asha Sharath"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Jeethu Joseph.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Jeethu Joseph.",
    "similarTags": [
      "Jeethu",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹46 Crore",
    "revenue": "₹391 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-drishyam-2",
    "title": "Drishyam 2",
    "year": 2021,
    "runtime": "2h 32m",
    "genres": [
      "Thriller",
      "Drama",
      "Crime",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "The investigations reopen six years later, forcing Georgekutty to hatch a final cover-up plan.",
    "director": "Jeethu Joseph",
    "cast": [
      "Mohanlal",
      "Meena",
      "Murali Gopy"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Jeethu Joseph.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Jeethu Joseph.",
    "similarTags": [
      "Jeethu",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹32 Crore",
    "revenue": "₹297 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-premam",
    "title": "Premam",
    "year": 2015,
    "runtime": "2h 36m",
    "genres": [
      "Romance",
      "Comedy",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "A young man goes through three stages of love and heartbreak in his school and college life.",
    "director": "Alphonse Puthren",
    "cast": [
      "Nivin Pauly",
      "Sai Pallavi",
      "Madonna Sebastian"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Alphonse Puthren.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Alphonse Puthren.",
    "similarTags": [
      "Alphonse",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹113 Crore",
    "revenue": "₹128 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "malayalam-kumbalangi-nights",
    "title": "Kumbalangi Nights",
    "year": 2019,
    "runtime": "2h 15m",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "Four dysfunctional brothers in a fishing village form an unlikely bond to resolve their issues.",
    "director": "Madhu C. Narayanan",
    "cast": [
      "Fahadh Faasil",
      "Shane Nigam",
      "Soubin Shahir"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Madhu C. Narayanan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Madhu C. Narayanan.",
    "similarTags": [
      "Madhu",
      "Comedy",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹91 Crore",
    "revenue": "₹388 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-bangalore-days",
    "title": "Bangalore Days",
    "year": 2014,
    "runtime": "2h 51m",
    "genres": [
      "Drama",
      "Romance",
      "Comedy",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "Three cousins move from Kerala to Bangalore, chasing their dreams and facing new relationships.",
    "director": "Anjali Menon",
    "cast": [
      "Dulquer Salmaan",
      "Nivin Pauly",
      "Fahadh Faasil",
      "Nazriya Nazim"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Anjali Menon.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Anjali Menon.",
    "similarTags": [
      "Anjali",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹73 Crore",
    "revenue": "₹394 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-maheshinte",
    "title": "Maheshinte Prathikaaram",
    "year": 2016,
    "runtime": "2h 0m",
    "genres": [
      "Comedy",
      "Drama",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A photographer vows to remain barefoot until he takes revenge on the man who humiliated him.",
    "director": "Dileesh Pothan",
    "cast": [
      "Fahadh Faasil",
      "Aparna Balamurali"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Dileesh Pothan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Dileesh Pothan.",
    "similarTags": [
      "Dileesh",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹78 Crore",
    "revenue": "₹111 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "malayalam-lucifer",
    "title": "Lucifer",
    "year": 2019,
    "runtime": "2h 54m",
    "genres": [
      "Action",
      "Drama",
      "Thriller",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A mysterious godfather takes charge of a political party after its veteran leader passes away.",
    "director": "Prithviraj Sukumaran",
    "cast": [
      "Mohanlal",
      "Vivek Oberoi",
      "Manju Warrier"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Prithviraj Sukumaran.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Prithviraj Sukumaran.",
    "similarTags": [
      "Prithviraj",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹69 Crore",
    "revenue": "₹198 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-kurup",
    "title": "Kurup",
    "year": 2021,
    "runtime": "2h 36m",
    "genres": [
      "Crime",
      "Thriller",
      "Biography",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "The real-life story of Sukumara Kurup, India's most wanted fugitive who faked his death.",
    "director": "Srinath Rajendran",
    "cast": [
      "Dulquer Salmaan",
      "Sobhita Dhulipala"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Crime masterpiece directed by Srinath Rajendran.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Crime masterpiece directed by Srinath Rajendran.",
    "similarTags": [
      "Srinath",
      "Thriller",
      "Biography"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Thriller"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹68 Crore",
    "revenue": "₹213 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-minnal-murali",
    "title": "Minnal Murali",
    "year": 2021,
    "runtime": "2h 38m",
    "genres": [
      "Action",
      "Comedy",
      "Superhero",
      "Sci-Fi",
      "Drama",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A tailor gains superhuman speed and powers after being struck by lightning in his village.",
    "director": "Basil Joseph",
    "cast": [
      "Tovino Thomas",
      "Guru Somasundaram"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Basil Joseph.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Basil Joseph.",
    "similarTags": [
      "Basil",
      "Comedy",
      "Superhero"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹90 Crore",
    "revenue": "₹377 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "malayalam-hridayam",
    "title": "Hridayam",
    "year": 2022,
    "runtime": "2h 51m",
    "genres": [
      "Romance",
      "Drama",
      "Musical",
      "Family",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A young man goes through a series of relationships and career changes at an engineering college.",
    "director": "Vineeth Sreenivasan",
    "cast": [
      "Pranav Mohanlal",
      "Kalyani Priyadarshan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Vineeth Sreenivasan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Vineeth Sreenivasan.",
    "similarTags": [
      "Vineeth",
      "Drama",
      "Musical"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹130 Crore",
    "revenue": "₹61 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-bheeshma-parvam",
    "title": "Bheeshma Parvam",
    "year": 2022,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Drama",
      "Crime",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "An aging patriarch protects his large family from internal betrayals and external drug gangs.",
    "director": "Amal Neerad",
    "cast": [
      "Mammootty",
      "Soubin Shahir"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Amal Neerad.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Amal Neerad.",
    "similarTags": [
      "Amal",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹27 Crore",
    "revenue": "₹116 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-romanchan",
    "title": "Romanchan",
    "year": 2023,
    "runtime": "2h 10m",
    "genres": [
      "Comedy",
      "Horror",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "Seven bachelor roommates in Bangalore use a Ouija board, accidentally invoking a spirit named Anamika.",
    "director": "Jithu Madhavan",
    "cast": [
      "Soubin Shahir",
      "Arjun Ashokan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Jithu Madhavan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Jithu Madhavan.",
    "similarTags": [
      "Jithu",
      "Horror",
      "History"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Horror"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹136 Crore",
    "revenue": "₹177 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-two-thousand-eighteen",
    "title": "2018",
    "year": 2023,
    "runtime": "2h 30m",
    "genres": [
      "Drama",
      "Survival",
      "History",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "The survival stories of the people of Kerala during the catastrophic 2018 state floods.",
    "director": "Jude Anthany Joseph",
    "cast": [
      "Tovino Thomas",
      "Kunchacko Boban",
      "Asif Ali"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Jude Anthany Joseph.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Jude Anthany Joseph.",
    "similarTags": [
      "Jude",
      "Survival",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Survival"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹22 Crore",
    "revenue": "₹455 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-manjummel-boys",
    "title": "Manjummel Boys",
    "year": 2024,
    "runtime": "2h 15m",
    "genres": [
      "Drama",
      "Adventure",
      "Survival",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A group of friends on a trip to Kodaikanal attempt to rescue their friend from Guna Caves.",
    "director": "Chidambaram",
    "cast": [
      "Soubin Shahir",
      "Sreenath Bhasi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Chidambaram.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Chidambaram.",
    "similarTags": [
      "Chidambaram",
      "Adventure",
      "Survival"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Adventure"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹76 Crore",
    "revenue": "₹459 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-premalu",
    "title": "Premalu",
    "year": 2024,
    "runtime": "2h 36m",
    "genres": [
      "Romance",
      "Comedy",
      "Musical",
      "Thriller",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "A young graduate moves to Hyderabad for a gate coaching class, falling in love with a bubbly girl.",
    "director": "Girish A.D.",
    "cast": [
      "Naslen K. Gafoor",
      "Mamitha Baiju"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Girish A.D..",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by Girish A.D..",
    "similarTags": [
      "Girish",
      "Comedy",
      "Musical"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹25 Crore",
    "revenue": "₹354 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-aadujeevitham",
    "title": "Aadujeevitham",
    "year": 2024,
    "runtime": "2h 52m",
    "genres": [
      "Drama",
      "Biography",
      "Survival",
      "Romance",
      "War",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "An immigrant worker in Saudi Arabia is forced into slave labor herding goats in the desert.",
    "director": "Blessy",
    "cast": [
      "Prithviraj Sukumaran",
      "Amala Paul"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Blessy.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Blessy.",
    "similarTags": [
      "Blessy",
      "Biography",
      "Survival"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹115 Crore",
    "revenue": "₹186 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-bramayugam",
    "title": "Bramayugam",
    "year": 2024,
    "runtime": "2h 20m",
    "genres": [
      "Horror",
      "Thriller",
      "Fantasy",
      "Psychological",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A court singer escapes slave labor only to find himself trapped in a mysterious mansion owned by a wizard.",
    "director": "Rahul Sadasivan",
    "cast": [
      "Mammootty",
      "Arjun Ashokan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Horror masterpiece directed by Rahul Sadasivan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Horror masterpiece directed by Rahul Sadasivan.",
    "similarTags": [
      "Rahul",
      "Thriller",
      "Fantasy"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Thriller"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹75 Crore",
    "revenue": "₹132 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-trance",
    "title": "Trance",
    "year": 2020,
    "runtime": "2h 50m",
    "genres": [
      "Drama",
      "Psychological",
      "Thriller",
      "Sports",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A struggling motivational speaker is hired by corporate bosses to become a fake miracle worker.",
    "director": "Anwar Rasheed",
    "cast": [
      "Fahadh Faasil",
      "Nazriya Nazim",
      "Gautham Vasudev Menon"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Anwar Rasheed.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Anwar Rasheed.",
    "similarTags": [
      "Anwar",
      "Psychological",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Psychological"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹106 Crore",
    "revenue": "₹255 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-joji",
    "title": "Joji",
    "year": 2021,
    "runtime": "1h 53m",
    "genres": [
      "Drama",
      "Crime",
      "Thriller",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "An engineering dropout plots to kill his tyrannical father to inherit the family wealth.",
    "director": "Dileesh Pothan",
    "cast": [
      "Fahadh Faasil",
      "Baburaj"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Dileesh Pothan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Dileesh Pothan.",
    "similarTags": [
      "Dileesh",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹75 Crore",
    "revenue": "₹386 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-malik",
    "title": "Malik",
    "year": 2021,
    "runtime": "2h 42m",
    "genres": [
      "Drama",
      "Crime",
      "History",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A powerful godfather in a coastal village fights against local politicians trying to steal lands.",
    "director": "Mahesh Narayanan",
    "cast": [
      "Fahadh Faasil",
      "Nimisha Sajayan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Mahesh Narayanan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Mahesh Narayanan.",
    "similarTags": [
      "Mahesh",
      "Crime",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹27 Crore",
    "revenue": "₹364 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-great-indian-kitchen",
    "title": "The Great Indian Kitchen",
    "year": 2021,
    "runtime": "1h 40m",
    "genres": [
      "Drama",
      "Family",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "A newlywed woman struggles to adapt to the heavy domestic duties imposed on her by a patriarchal home.",
    "director": "Jeo Baby",
    "cast": [
      "Nimisha Sajayan",
      "Suraj Venjaramoodu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Jeo Baby.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Jeo Baby.",
    "similarTags": [
      "Jeo",
      "Family",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹393 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-nayattu",
    "title": "Nayattu",
    "year": 2021,
    "runtime": "2h 4m",
    "genres": [
      "Thriller",
      "Drama",
      "Survival",
      "War",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "Three police officers go on the run after accidentally running over a young boy.",
    "director": "Martin Prakkat",
    "cast": [
      "Kunchacko Boban",
      "Joju George",
      "Nimisha Sajayan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Martin Prakkat.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Martin Prakkat.",
    "similarTags": [
      "Martin",
      "Drama",
      "Survival"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹125 Crore",
    "revenue": "₹316 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "malayalam-angamaly-diaries",
    "title": "Angamaly Diaries",
    "year": 2017,
    "runtime": "2h 12m",
    "genres": [
      "Crime",
      "Comedy",
      "Drama",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A youngster gets involved in local gang wars over pig farming business in Angamaly.",
    "director": "Lijo Jose Pellissery",
    "cast": [
      "Antony Varghese",
      "Reshma Rajan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Crime masterpiece directed by Lijo Jose Pellissery.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Crime masterpiece directed by Lijo Jose Pellissery.",
    "similarTags": [
      "Lijo",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹98 Crore",
    "revenue": "₹427 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-ee-ma-yau",
    "title": "Ee.Ma.Yau.",
    "year": 2018,
    "runtime": "2h 0m",
    "genres": [
      "Drama",
      "Comedy",
      "Dark Comedy",
      "Psychological",
      "Time Travel",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "A son struggles to host a grand funeral for his deceased father in a coastal village.",
    "director": "Lijo Jose Pellissery",
    "cast": [
      "Chemban Vinod Jose",
      "Dileesh Pothan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Lijo Jose Pellissery.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Lijo Jose Pellissery.",
    "similarTags": [
      "Lijo",
      "Comedy",
      "Dark Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹74 Crore",
    "revenue": "₹153 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-amen",
    "title": "Amen",
    "year": 2013,
    "runtime": "2h 30m",
    "genres": [
      "Musical",
      "Comedy",
      "Fantasy",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "A young musician fights to win a band competition to marry his landlord's daughter.",
    "director": "Lijo Jose Pellissery",
    "cast": [
      "Fahadh Faasil",
      "Indrajith Sukumaran"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Musical masterpiece directed by Lijo Jose Pellissery.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Musical masterpiece directed by Lijo Jose Pellissery.",
    "similarTags": [
      "Lijo",
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "✨ Musical",
      "🔥 Comedy"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹62 Crore",
    "revenue": "₹337 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-double-barrel",
    "title": "Double Barrel",
    "year": 2015,
    "runtime": "2h 40m",
    "genres": [
      "Comedy",
      "Action",
      "Crime",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A spoof action comedy involving drug deals and diamond smuggling in Goa.",
    "director": "Lijo Jose Pellissery",
    "cast": [
      "Prithviraj Sukumaran",
      "Indrajith Sukumaran"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Lijo Jose Pellissery.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Lijo Jose Pellissery.",
    "similarTags": [
      "Lijo",
      "Action",
      "Crime"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Action"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹42 Crore",
    "revenue": "₹241 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "malayalam-rorschach",
    "title": "Rorschach",
    "year": 2022,
    "runtime": "2h 30m",
    "genres": [
      "Thriller",
      "Mystery",
      "Psychological",
      "Noir",
      "Animation",
      "Drama",
      "Musical"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A mysterious NRI travels to a village seeking revenge against his wife's killer.",
    "director": "Nisam Basheer",
    "cast": [
      "Mammootty",
      "Grace Antony"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Nisam Basheer.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Thriller masterpiece directed by Nisam Basheer.",
    "similarTags": [
      "Nisam",
      "Mystery",
      "Psychological"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹76 Crore",
    "revenue": "₹67 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-kannur-squad",
    "title": "Kannur Squad",
    "year": 2023,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Crime",
      "Thriller",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A team of police officers travel across India to catch a group of ruthless murderers.",
    "director": "Roby Varghese Raj",
    "cast": [
      "Mammootty",
      "Rony David"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Roby Varghese Raj.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Roby Varghese Raj.",
    "similarTags": [
      "Roby",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹86 Crore",
    "revenue": "₹191 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-manichitrathazhu",
    "title": "Manichitrathazhu",
    "year": 1993,
    "runtime": "2h 45m",
    "genres": [
      "Horror",
      "Mystery",
      "Psychological",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A psychiatrist investigates mysterious occurrences in a haunted ancestral home.",
    "director": "Fazil",
    "cast": [
      "Mohanlal",
      "Suresh Gopi",
      "Shobana"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Horror masterpiece directed by Fazil.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Horror masterpiece directed by Fazil.",
    "similarTags": [
      "Fazil",
      "Mystery",
      "Psychological"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹31 Crore",
    "revenue": "₹382 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-spadikam",
    "title": "Spadikam",
    "year": 1995,
    "runtime": "2h 40m",
    "genres": [
      "Action",
      "Drama",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A rebellious youngster turns rogue after facing severe pressure from his schoolmaster father.",
    "director": "Bhadran",
    "cast": [
      "Mohanlal",
      "Thilakan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Bhadran.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Action masterpiece directed by Bhadran.",
    "similarTags": [
      "Bhadran",
      "Drama",
      "Time Travel"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹41 Crore",
    "revenue": "₹424 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "malayalam-kireedam",
    "title": "Kireedam",
    "year": 1989,
    "runtime": "2h 30m",
    "genres": [
      "Drama",
      "Crime",
      "Action",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A young man's dreams of becoming a police officer are shattered when he saves his father from a gangster.",
    "director": "Sibi Malayil",
    "cast": [
      "Mohanlal",
      "Thilakan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Sibi Malayil.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by Sibi Malayil.",
    "similarTags": [
      "Sibi",
      "Crime",
      "Action"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹109 Crore",
    "revenue": "₹446 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-devasuram",
    "title": "Devasuram",
    "year": 1993,
    "runtime": "2h 40m",
    "genres": [
      "Drama",
      "Action",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A wealthy landlord fights with a rival clan to protect his inheritance.",
    "director": "I.V. Sasi",
    "cast": [
      "Mohanlal",
      "Napoleon"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by I.V. Sasi.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Drama masterpiece directed by I.V. Sasi.",
    "similarTags": [
      "I.V.",
      "Action",
      "Adventure"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Action"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹97 Crore",
    "revenue": "₹182 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "malayalam-thoovanathumbikal",
    "title": "Thoovanathumbikal",
    "year": 1987,
    "runtime": "2h 30m",
    "genres": [
      "Romance",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A wealthy landlord leads a double life, falling in love with a bubbly girl and a call girl.",
    "director": "P. Padmarajan",
    "cast": [
      "Mohanlal",
      "Sumalatha"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by P. Padmarajan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Romance masterpiece directed by P. Padmarajan.",
    "similarTags": [
      "P.",
      "Drama",
      "Animation"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹110 Crore",
    "revenue": "₹325 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "malayalam-chitram",
    "title": "Chitram",
    "year": 1988,
    "runtime": "2h 40m",
    "genres": [
      "Comedy",
      "Romance",
      "Drama",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A woman hires a thief to act as her husband to receive inheritance money from her father.",
    "director": "Priyadarshan",
    "cast": [
      "Mohanlal",
      "Ranjini"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "similarTags": [
      "Priyadarshan",
      "Romance",
      "Drama"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹57 Crore",
    "revenue": "₹392 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "malayalam-kilukkam",
    "title": "Kilukkam",
    "year": 1991,
    "runtime": "2h 45m",
    "genres": [
      "Comedy",
      "Romance",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A tourist guide in Ooty helps an illegitimate daughter search for her biological father.",
    "director": "Priyadarshan",
    "cast": [
      "Mohanlal",
      "Revathi",
      "Jagathy Sreekumar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "similarTags": [
      "Priyadarshan",
      "Romance",
      "Biography"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹100 Crore",
    "revenue": "₹147 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "malayalam-boeing-boeing",
    "title": "Boeing Boeing",
    "year": 1985,
    "runtime": "2h 30m",
    "genres": [
      "Comedy",
      "Romance",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "A young man dates three air hostesses at the same time with the help of his roommate.",
    "director": "Priyadarshan",
    "cast": [
      "Mohanlal",
      "Mukesh"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "whyRecommended": "Top recommendation from Malayalam cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "similarTags": [
      "Priyadarshan",
      "Romance",
      "History"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "Malayalam",
    "country": "India",
    "budget": "₹73 Crore",
    "revenue": "₹86 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-three-idiots",
    "title": "3 Idiots",
    "year": 2009,
    "runtime": "2h 50m",
    "genres": [
      "Comedy",
      "Drama",
      "Family",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "Two friends search for their long-lost companion, recalling their college days of fighting societal pressures.",
    "director": "Rajkumar Hirani",
    "cast": [
      "Aamir Khan",
      "R. Madhavan",
      "Sharman Joshi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "similarTags": [
      "Rajkumar",
      "Drama",
      "Family"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹74 Crore",
    "revenue": "₹297 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-dangal",
    "title": "Dangal",
    "year": 2016,
    "runtime": "2h 41m",
    "genres": [
      "Drama",
      "Biography",
      "Sports",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "A former wrestler trains his two daughters to become world-class wrestlers despite social taboos.",
    "director": "Nitesh Tiwari",
    "cast": [
      "Aamir Khan",
      "Fatima Sana Shaikh",
      "Sanya Malhotra"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Nitesh Tiwari.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Nitesh Tiwari.",
    "similarTags": [
      "Nitesh",
      "Biography",
      "Sports"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹419 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-lagaan",
    "title": "Lagaan",
    "year": 2001,
    "runtime": "3h 44m",
    "genres": [
      "Drama",
      "Sports",
      "History",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "Villagers in British India bet their future taxes on a game of cricket against their rulers.",
    "director": "Ashutosh Gowariker",
    "cast": [
      "Aamir Khan",
      "Gracy Singh"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Ashutosh Gowariker.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Ashutosh Gowariker.",
    "similarTags": [
      "Ashutosh",
      "Sports",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Sports"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹51 Crore",
    "revenue": "₹298 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "hindi-sholay",
    "title": "Sholay",
    "year": 1975,
    "runtime": "3h 24m",
    "genres": [
      "Action",
      "Crime",
      "Western",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A retired police officer hires two petty thieves to capture a notorious dacoit who slaughtered his family.",
    "director": "Ramesh Sippy",
    "cast": [
      "Dharmendra",
      "Amitabh Bachchan",
      "Hema Malini"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by Ramesh Sippy.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by Ramesh Sippy.",
    "similarTags": [
      "Ramesh",
      "Crime",
      "Western"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹117 Crore",
    "revenue": "₹156 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "hindi-ddlj",
    "title": "Dilwale Dulhania Le Jayenge",
    "year": 1995,
    "runtime": "3h 9m",
    "genres": [
      "Romance",
      "Drama",
      "Family",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "A fun-loving youngster tries to win the heart of a girl's conservative family in London and Punjab.",
    "director": "Aditya Chopra",
    "cast": [
      "Shah Rukh Khan",
      "Kajol"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Aditya Chopra.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Aditya Chopra.",
    "similarTags": [
      "Aditya",
      "Drama",
      "Family"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹59 Crore",
    "revenue": "₹428 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-taare-zameen-par",
    "title": "Taare Zameen Par",
    "year": 2007,
    "runtime": "2h 45m",
    "genres": [
      "Drama",
      "Family",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "An art teacher helps a dyslexic child discover his inner potential through care and patience.",
    "director": "Aamir Khan",
    "cast": [
      "Darsheel Safary",
      "Aamir Khan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Aamir Khan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Aamir Khan.",
    "similarTags": [
      "Aamir",
      "Family",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹67 Crore",
    "revenue": "₹420 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-pk",
    "title": "PK",
    "year": 2014,
    "runtime": "2h 33m",
    "genres": [
      "Comedy",
      "Fantasy",
      "Drama",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "An alien stranded on Earth asks questions about religious dogmas and human behaviors.",
    "director": "Rajkumar Hirani",
    "cast": [
      "Aamir Khan",
      "Anushka Sharma"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "similarTags": [
      "Rajkumar",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Fantasy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹100 Crore",
    "revenue": "₹91 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "hindi-sanju",
    "title": "Sanju",
    "year": 2018,
    "runtime": "2h 39m",
    "genres": [
      "Drama",
      "Biography",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "The real-life biographic story of Bollywood actor Sanjay Dutt, detailing his drug abuse and jail life.",
    "director": "Rajkumar Hirani",
    "cast": [
      "Ranbir Kapoor",
      "Vicky Kaushal"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Rajkumar Hirani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Rajkumar Hirani.",
    "similarTags": [
      "Rajkumar",
      "Biography",
      "Documentary"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹108 Crore",
    "revenue": "₹445 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "hindi-kabir-singh",
    "title": "Kabir Singh",
    "year": 2019,
    "runtime": "2h 55m",
    "genres": [
      "Drama",
      "Romance",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "An angry surgeon goes down a path of drug abuse after his lover is forced to marry another.",
    "director": "Sandeep Reddy Vanga",
    "cast": [
      "Shahid Kapoor",
      "Kiara Advani"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Sandeep Reddy Vanga.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Sandeep Reddy Vanga.",
    "similarTags": [
      "Sandeep",
      "Romance",
      "Musical"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹119 Crore",
    "revenue": "₹208 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-andhadhun",
    "title": "Andhadhun",
    "year": 2018,
    "runtime": "2h 19m",
    "genres": [
      "Thriller",
      "Crime",
      "Mystery",
      "Black Comedy",
      "Family",
      "Romance",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A blind pianist accidentally witnesses the murder of a former film star.",
    "director": "Sriram Raghavan",
    "cast": [
      "Ayushmann Khurrana",
      "Tabu",
      "Radhika Apte"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Thriller masterpiece directed by Sriram Raghavan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Thriller masterpiece directed by Sriram Raghavan.",
    "similarTags": [
      "Sriram",
      "Crime",
      "Mystery"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Crime"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹74 Crore",
    "revenue": "₹393 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-tumbbad",
    "title": "Tumbbad",
    "year": 2018,
    "runtime": "1h 44m",
    "genres": [
      "Horror",
      "Fantasy",
      "Mystery",
      "Thriller",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "A family builds a temple for a cursed deity of greed, trying to steal his endless gold coin stash.",
    "director": "Rahi Anil Barve",
    "cast": [
      "Sohum Shah",
      "Jyoti Malshe"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Rahi Anil Barve.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Rahi Anil Barve.",
    "similarTags": [
      "Rahi",
      "Fantasy",
      "Mystery"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Fantasy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹32 Crore",
    "revenue": "₹449 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-queen",
    "title": "Queen",
    "year": 2013,
    "runtime": "2h 26m",
    "genres": [
      "Comedy",
      "Drama",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A Delhi girl goes on her honeymoon to Paris and Amsterdam alone after her fiance cancels the wedding.",
    "director": "Vikas Bahl",
    "cast": [
      "Kangana Ranaut",
      "Rajkummar Rao"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Vikas Bahl.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Vikas Bahl.",
    "similarTags": [
      "Vikas",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹75 Crore",
    "revenue": "₹268 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "hindi-bajrangi-bhaijaan",
    "title": "Bajrangi Bhaijaan",
    "year": 2015,
    "runtime": "2h 39m",
    "genres": [
      "Drama",
      "Comedy",
      "Family",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "A devout Hindu man travels to Pakistan to reunite a mute Muslim girl with her family.",
    "director": "Kabir Khan",
    "cast": [
      "Salman Khan",
      "Harshaali Malhotra"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Kabir Khan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Kabir Khan.",
    "similarTags": [
      "Kabir",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹75 Crore",
    "revenue": "₹458 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "hindi-gangs-of-wasseypur",
    "title": "Gangs of Wasseypur",
    "year": 2012,
    "runtime": "5h 21m",
    "genres": [
      "Crime",
      "Action",
      "Drama",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A generational blood feud between mafia clans over coal mine control in Wasseypur.",
    "director": "Anurag Kashyap",
    "cast": [
      "Manoj Bajpayee",
      "Nawazuddin Siddiqui"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Crime masterpiece directed by Anurag Kashyap.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Crime masterpiece directed by Anurag Kashyap.",
    "similarTags": [
      "Anurag",
      "Action",
      "Drama"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Action"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹49 Crore",
    "revenue": "₹352 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-znmd",
    "title": "Zindagi Na Milegi Dobara",
    "year": 2011,
    "runtime": "2h 35m",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "Three childhood friends go on a road trip in Spain, facing their deepest fears.",
    "director": "Zoya Akhtar",
    "cast": [
      "Hrithik Roshan",
      "Farhan Akhtar",
      "Abhay Deol",
      "Katrina Kaif"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Zoya Akhtar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Zoya Akhtar.",
    "similarTags": [
      "Zoya",
      "Comedy",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹80 Crore",
    "revenue": "₹95 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-barfi",
    "title": "Barfi!",
    "year": 2012,
    "runtime": "2h 30m",
    "genres": [
      "Drama",
      "Romance",
      "Comedy",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A deaf-mute boy forms an unlikely bond with an autistic girl in Darjeeling.",
    "director": "Anurag Basu",
    "cast": [
      "Ranbir Kapoor",
      "Priyanka Chopra",
      "Ileana D'Cruz"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Anurag Basu.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Anurag Basu.",
    "similarTags": [
      "Anurag",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹44 Crore",
    "revenue": "₹413 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-dil-chahta-hai",
    "title": "Dil Chahta Hai",
    "year": 2001,
    "runtime": "3h 5m",
    "genres": [
      "Comedy",
      "Romance",
      "Drama",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "Three college friends face different relationships that test their bond.",
    "director": "Farhan Akhtar",
    "cast": [
      "Aamir Khan",
      "Saif Ali Khan",
      "Akshaye Khanna"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Farhan Akhtar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Farhan Akhtar.",
    "similarTags": [
      "Farhan",
      "Romance",
      "Drama"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹53 Crore",
    "revenue": "₹100 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-swades",
    "title": "Swades",
    "year": 2004,
    "runtime": "3h 15m",
    "genres": [
      "Drama",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A NASA scientist returns to his native village to take his nanny to the US, rediscovering his roots.",
    "director": "Ashutosh Gowariker",
    "cast": [
      "Shah Rukh Khan",
      "Gayatri Joshi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Ashutosh Gowariker.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Ashutosh Gowariker.",
    "similarTags": [
      "Ashutosh",
      "History",
      "Sports"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹81 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-chak-de-india",
    "title": "Chak De! India",
    "year": 2007,
    "runtime": "2h 33m",
    "genres": [
      "Drama",
      "Sports",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "A disgraced former hockey captain attempts to redeem himself by coaching the Indian women's team.",
    "director": "Shimit Amin",
    "cast": [
      "Shah Rukh Khan",
      "Vidya Malvade"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Shimit Amin.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Shimit Amin.",
    "similarTags": [
      "Shimit",
      "Sports",
      "Superhero"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Sports"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹71 Crore",
    "revenue": "₹240 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-border",
    "title": "Border",
    "year": 1997,
    "runtime": "2h 57m",
    "genres": [
      "Action",
      "History",
      "War",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A small battalion of Indian soldiers protects their post against a large Pakistani army in 1971.",
    "director": "J.P. Dutta",
    "cast": [
      "Sunny Deol",
      "Suniel Shetty"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by J.P. Dutta.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by J.P. Dutta.",
    "similarTags": [
      "J.P.",
      "History",
      "War"
    ],
    "moods": [
      "✨ Action",
      "🔥 History"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹85 Crore",
    "revenue": "₹414 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-shershaah",
    "title": "Shershaah",
    "year": 2021,
    "runtime": "2h 15m",
    "genres": [
      "Drama",
      "Biography",
      "War",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "The real-life story of Captain Vikram Batra, chronicling his heroics during the Kargil War.",
    "director": "Vishnuvardhan",
    "cast": [
      "Sidharth Malhotra",
      "Kiara Advani"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Vishnuvardhan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Vishnuvardhan.",
    "similarTags": [
      "Vishnuvardhan",
      "Biography",
      "War"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹122 Crore",
    "revenue": "₹245 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-uri-strike",
    "title": "Uri: The Surgical Strike",
    "year": 2019,
    "runtime": "2h 18m",
    "genres": [
      "Action",
      "Thriller",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "A special forces officer leads a covert operation to destroy terrorist launchpads across the border.",
    "director": "Aditya Dhar",
    "cast": [
      "Vicky Kaushal",
      "Yami Gautam"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by Aditya Dhar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Action masterpiece directed by Aditya Dhar.",
    "similarTags": [
      "Aditya",
      "Thriller",
      "War"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹54 Crore",
    "revenue": "₹407 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "hindi-bhool-bhulaiyaa",
    "title": "Bhool Bhulaiyaa",
    "year": 2007,
    "runtime": "2h 39m",
    "genres": [
      "Horror",
      "Mystery",
      "Comedy",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "An eccentric psychiatrist investigates reports of a female ghost inside a royal palace.",
    "director": "Priyadarshan",
    "cast": [
      "Akshay Kumar",
      "Vidya Balan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Priyadarshan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Priyadarshan.",
    "similarTags": [
      "Priyadarshan",
      "Mystery",
      "Comedy"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹67 Crore",
    "revenue": "₹412 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-stree",
    "title": "Stree",
    "year": 2018,
    "runtime": "2h 8m",
    "genres": [
      "Horror",
      "Comedy",
      "Mystery",
      "Psychological",
      "Time Travel",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "A tailor in Chanderi village falls in love with a girl who might be a ghost that abducts men at night.",
    "director": "Amar Kaushik",
    "cast": [
      "Rajkummar Rao",
      "Shraddha Kapoor"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Amar Kaushik.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Horror masterpiece directed by Amar Kaushik.",
    "similarTags": [
      "Amar",
      "Comedy",
      "Mystery"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Comedy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹54 Crore",
    "revenue": "₹85 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "hindi-golmaal",
    "title": "Golmaal: Fun Unlimited",
    "year": 2006,
    "runtime": "2h 30m",
    "genres": [
      "Comedy",
      "Family",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "Four college dropouts hide in a blind couple's home, pretending to be their grandson.",
    "director": "Rohit Shetty",
    "cast": [
      "Ajay Devgn",
      "Arshad Warsi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rohit Shetty.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rohit Shetty.",
    "similarTags": [
      "Rohit",
      "Family",
      "Mystery Thriller"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Family"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹72 Crore",
    "revenue": "₹159 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "hindi-hera-pheri",
    "title": "Hera Pheri",
    "year": 2000,
    "runtime": "2h 36m",
    "genres": [
      "Comedy",
      "Crime",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "Three bachelor roommates try to claim a kidnapper's ransom money after receiving a wrong call.",
    "director": "Priyadarshan",
    "cast": [
      "Akshay Kumar",
      "Suniel Shetty",
      "Paresh Rawal"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Priyadarshan.",
    "similarTags": [
      "Priyadarshan",
      "Crime",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Crime"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹31 Crore",
    "revenue": "₹290 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-munnabhai",
    "title": "Munna Bhai M.B.B.S.",
    "year": 2003,
    "runtime": "2h 36m",
    "genres": [
      "Comedy",
      "Drama",
      "Noir",
      "Animation",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A local gangster pretends to be a doctor to satisfy his father, entering a medical college.",
    "director": "Rajkumar Hirani",
    "cast": [
      "Sanjay Dutt",
      "Arshad Warsi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "similarTags": [
      "Rajkumar",
      "Drama",
      "Noir"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹88 Crore",
    "revenue": "₹177 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "hindi-lage-raho-munnabhai",
    "title": "Lage Raho Munna Bhai",
    "year": 2006,
    "runtime": "2h 24m",
    "genres": [
      "Comedy",
      "Drama",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A local gangster starts hallucinating Mahatma Gandhi, using his ideals to resolve problems.",
    "director": "Rajkumar Hirani",
    "cast": [
      "Sanjay Dutt",
      "Arshad Warsi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Comedy masterpiece directed by Rajkumar Hirani.",
    "similarTags": [
      "Rajkumar",
      "Drama",
      "Survival"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹115 Crore",
    "revenue": "₹68 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-dil-se",
    "title": "Dil Se..",
    "year": 1998,
    "runtime": "2h 43m",
    "genres": [
      "Romance",
      "Drama",
      "Thriller",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A radio broadcaster falls in love with a mysterious woman who is secretly a terrorist.",
    "director": "Mani Ratnam",
    "cast": [
      "Shah Rukh Khan",
      "Manisha Koirala"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Mani Ratnam.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Mani Ratnam.",
    "similarTags": [
      "Mani",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹124 Crore",
    "revenue": "₹77 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "hindi-devdas",
    "title": "Devdas",
    "year": 2002,
    "runtime": "3h 5m",
    "genres": [
      "Romance",
      "Drama",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A wealthy law graduate spirals into alcoholism after his family forbids him from marrying his love.",
    "director": "Sanjay Leela Bhansali",
    "cast": [
      "Shah Rukh Khan",
      "Aishwarya Rai",
      "Madhuri Dixit"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "similarTags": [
      "Sanjay",
      "Drama",
      "Time Travel"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹66 Crore",
    "revenue": "₹245 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "hindi-veer-zaara",
    "title": "Veer-Zaara",
    "year": 2004,
    "runtime": "3h 12m",
    "genres": [
      "Romance",
      "Drama",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "An Indian pilot is imprisoned in Pakistan after falling in love with a Pakistani girl.",
    "director": "Sanjay Leela Bhansali",
    "cast": [
      "Shah Rukh Khan",
      "Preity Zinta"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "similarTags": [
      "Sanjay",
      "Drama",
      "Action"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹119 Crore",
    "revenue": "₹270 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-kal-ho-na-ho",
    "title": "Kal Ho Naa Ho",
    "year": 2003,
    "runtime": "3h 6m",
    "genres": [
      "Romance",
      "Comedy",
      "Drama",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A terminally ill man attempts to match his lover with her best friend before he passes away.",
    "director": "Nikkhil Advani",
    "cast": [
      "Shah Rukh Khan",
      "Preity Zinta",
      "Saif Ali Khan"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Nikkhil Advani.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Nikkhil Advani.",
    "similarTags": [
      "Nikkhil",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹23 Crore",
    "revenue": "₹398 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-kuch-kuch-hota-hai",
    "title": "Kuch Kuch Hota Hai",
    "year": 1998,
    "runtime": "3h 5m",
    "genres": [
      "Romance",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A young girl reads her mother's letters, planning to reunite her widowed father with his college friend.",
    "director": "Karan Johar",
    "cast": [
      "Shah Rukh Khan",
      "Kajol",
      "Rani Mukerji"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Karan Johar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Karan Johar.",
    "similarTags": [
      "Karan",
      "Drama",
      "Animation"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹131 Crore",
    "revenue": "₹358 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "hindi-k3g",
    "title": "Kabhi Khushi Kabhie Gham...",
    "year": 2001,
    "runtime": "3h 30m",
    "genres": [
      "Drama",
      "Family",
      "Anime",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A wealthy son is disowned by his father after marrying a middle-class girl, moving to London.",
    "director": "Karan Johar",
    "cast": [
      "Amitabh Bachchan",
      "Shah Rukh Khan",
      "Kajol"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Karan Johar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Karan Johar.",
    "similarTags": [
      "Karan",
      "Family",
      "Anime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹109 Crore",
    "revenue": "₹92 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "hindi-my-name-is-khan",
    "title": "My Name Is Khan",
    "year": 2010,
    "runtime": "2h 45m",
    "genres": [
      "Drama",
      "Romance",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "An autistic man travels across America to meet the President and clear his name after a tragedy.",
    "director": "Karan Johar",
    "cast": [
      "Shah Rukh Khan",
      "Kajol"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Karan Johar.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Drama masterpiece directed by Karan Johar.",
    "similarTags": [
      "Karan",
      "Romance",
      "Biography"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹80 Crore",
    "revenue": "₹369 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "hindi-bajirao-mastani",
    "title": "Bajirao Mastani",
    "year": 2015,
    "runtime": "2h 38m",
    "genres": [
      "Romance",
      "History",
      "Drama",
      "Comedy",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "The tragic love story between Maratha General Bajirao and Mastani, a warrior princess.",
    "director": "Sanjay Leela Bhansali",
    "cast": [
      "Ranveer Singh",
      "Deepika Padukone"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "whyRecommended": "Top recommendation from Hindi cinema. A high-quality Romance masterpiece directed by Sanjay Leela Bhansali.",
    "similarTags": [
      "Sanjay",
      "History",
      "Drama"
    ],
    "moods": [
      "✨ Romance",
      "🔥 History"
    ],
    "language": "Hindi",
    "country": "India",
    "budget": "₹118 Crore",
    "revenue": "₹109 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "english-inception",
    "title": "Inception",
    "year": 2010,
    "runtime": "2h 28m",
    "genres": [
      "Sci-Fi",
      "Action",
      "Psychological",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A thief steals corporate secrets through dream-sharing technology, tasked with planting an idea.",
    "director": "Christopher Nolan",
    "cast": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "YoEMS-X7-rE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Christopher Nolan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Christopher Nolan.",
    "similarTags": [
      "Christopher",
      "Action",
      "Psychological"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Action"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$160 Million",
    "revenue": "$836 Million",
    "tagline": "Your mind is the scene of the crime.",
    "productionCompany": "Warner Bros. Pictures",
    "awards": [
      "4 Academy Awards (Best Cinematography, Sound Editing, Sound Mixing, Visual Effects)"
    ],
    "reviews": []
  },
  {
    "id": "english-interstellar",
    "title": "Interstellar",
    "year": 2014,
    "runtime": "2h 49m",
    "genres": [
      "Sci-Fi",
      "Drama",
      "Space",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "A team of explorers travel through a wormhole in space to find a new home for humanity.",
    "director": "Christopher Nolan",
    "cast": [
      "Matthew McConaughey",
      "Anne Hathaway"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Christopher Nolan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Christopher Nolan.",
    "similarTags": [
      "Christopher",
      "Drama",
      "Space"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$701 Million",
    "tagline": "Mankind was born on Earth. It was never meant to die here.",
    "productionCompany": "Paramount Pictures / Legendary Pictures",
    "awards": [
      "Academy Award for Best Visual Effects"
    ],
    "reviews": []
  },
  {
    "id": "english-dark-knight",
    "title": "The Dark Knight",
    "year": 2008,
    "runtime": "2h 32m",
    "genres": [
      "Action",
      "Crime",
      "Superhero",
      "Animation",
      "Drama",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "Batman faces a psychotic anarchist known as the Joker, who wants to plunge Gotham into chaos.",
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Heath Ledger"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "EXeTwQWrcwY",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Christopher Nolan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Christopher Nolan.",
    "similarTags": [
      "Christopher",
      "Crime",
      "Superhero"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$1.006 Billion",
    "tagline": "Why So Serious?",
    "productionCompany": "Warner Bros. Pictures / Legendary Pictures",
    "awards": [
      "Academy Award for Best Supporting Actor (Heath Ledger)"
    ],
    "reviews": []
  },
  {
    "id": "english-pulp-fiction",
    "title": "Pulp Fiction",
    "year": 1994,
    "runtime": "2h 34m",
    "genres": [
      "Crime",
      "Drama",
      "Noir",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "The lives of mob hitmen, a boxer, and a gangster's wife intertwine in stories of violence.",
    "director": "Quentin Tarantino",
    "cast": [
      "John Travolta",
      "Uma Thurman"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1542204172-e7052809d852?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "t7CkcmPgnXU",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Quentin Tarantino.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Quentin Tarantino.",
    "similarTags": [
      "Quentin",
      "Drama",
      "Noir"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$8 Million",
    "revenue": "$213 Million",
    "tagline": "Just because you are a character doesn't mean that you have character.",
    "productionCompany": "Miramax Films",
    "awards": [
      "Academy Award for Best Original Screenplay"
    ],
    "reviews": []
  },
  {
    "id": "english-shawshank",
    "title": "The Shawshank Redemption",
    "year": 1994,
    "runtime": "2h 22m",
    "genres": [
      "Drama",
      "Crime",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "Two imprisoned men bond over a number of years, finding solace and redemption.",
    "director": "Frank Darabont",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "NmzuHjWmXOc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Frank Darabont.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Frank Darabont.",
    "similarTags": [
      "Frank",
      "Crime",
      "Biography"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$73 Million",
    "tagline": "Fear can hold you prisoner. Hope can set you free.",
    "productionCompany": "Castle Rock Entertainment",
    "awards": [
      "7 Oscar Nominations"
    ],
    "reviews": []
  },
  {
    "id": "english-fight-club",
    "title": "Fight Club",
    "year": 1999,
    "runtime": "2h 19m",
    "genres": [
      "Drama",
      "Psychological",
      "Comedy",
      "History",
      "Sports",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "An insomniac office worker forms an underground fight club with a soap salesman.",
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Edward Norton"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "SUXWAEX2ajc",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by David Fincher.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by David Fincher.",
    "similarTags": [
      "David",
      "Psychological",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Psychological"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$63 Million",
    "revenue": "$101 Million",
    "tagline": "Mischief. Mayhem. Soap.",
    "productionCompany": "20th Century Fox",
    "awards": [
      "Oscar Nominated for Best Sound Editing"
    ],
    "reviews": []
  },
  {
    "id": "english-forrest-gump",
    "title": "Forrest Gump",
    "year": 1994,
    "runtime": "2h 22m",
    "genres": [
      "Drama",
      "Comedy",
      "Romance",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "The presidencies of Kennedy and Johnson, Vietnam, and history unfold from the perspective of an Alabama man.",
    "director": "Robert Zemeckis",
    "cast": [
      "Tom Hanks",
      "Robin Wright"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "bLvqoHBptmg",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Robert Zemeckis.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Robert Zemeckis.",
    "similarTags": [
      "Robert",
      "Comedy",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$55 Million",
    "revenue": "$678 Million",
    "tagline": "Life is like a box of chocolates... You never know what you're gonna get.",
    "productionCompany": "Paramount Pictures",
    "awards": [
      "6 Academy Awards including Best Picture"
    ],
    "reviews": []
  },
  {
    "id": "english-matrix",
    "title": "The Matrix",
    "year": 1999,
    "runtime": "2h 16m",
    "genres": [
      "Sci-Fi",
      "Action",
      "Cyberpunk",
      "Documentary",
      "Mystery",
      "Suspense",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    "director": "Lana Wachowski",
    "cast": [
      "Keanu Reeves",
      "Laurence Fishburne"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "vKQi3bBA1y8",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Lana Wachowski.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Lana Wachowski.",
    "similarTags": [
      "Lana",
      "Action",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Action"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$63 Million",
    "revenue": "$463 Million",
    "tagline": "Welcome to the real world.",
    "productionCompany": "Warner Bros. Pictures",
    "awards": [
      "4 Academy Awards for Editing, Sound and Visual Effects"
    ],
    "reviews": []
  },
  {
    "id": "english-gladiator",
    "title": "Gladiator",
    "year": 2000,
    "runtime": "2h 35m",
    "genres": [
      "Action",
      "Drama",
      "History",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
    "director": "Ridley Scott",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "owK1qxDselE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Ridley Scott.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Ridley Scott.",
    "similarTags": [
      "Ridley",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$103 Million",
    "revenue": "$503 Million",
    "tagline": "What we do in life echoes in eternity.",
    "productionCompany": "Universal Pictures / DreamWorks Pictures",
    "awards": [
      "5 Academy Awards including Best Picture"
    ],
    "reviews": []
  },
  {
    "id": "english-titanic",
    "title": "Titanic",
    "year": 1997,
    "runtime": "3h 14m",
    "genres": [
      "Romance",
      "Drama",
      "History",
      "Family",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the R.M.S. Titanic.",
    "director": "James Cameron",
    "cast": [
      "Leonardo DiCaprio",
      "Kate Winslet"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "kVrqfYjkT7c",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Romance masterpiece directed by James Cameron.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Romance masterpiece directed by James Cameron.",
    "similarTags": [
      "James",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$2.264 Billion",
    "tagline": "Nothing on Earth could come between them.",
    "productionCompany": "Paramount Pictures / 20th Century Fox",
    "awards": [
      "11 Academy Awards including Best Picture"
    ],
    "reviews": []
  },
  {
    "id": "english-avatar",
    "title": "Avatar",
    "year": 2009,
    "runtime": "2h 42m",
    "genres": [
      "Sci-Fi",
      "Action",
      "Adventure",
      "Fantasy",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "A paraplegic marine dispatched to the moon Pandora becomes torn between following orders and protecting it.",
    "director": "James Cameron",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by James Cameron.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by James Cameron.",
    "similarTags": [
      "James",
      "Action",
      "Adventure"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Action"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$110 Million",
    "revenue": "$775 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-jurassic-park",
    "title": "Jurassic Park",
    "year": 1993,
    "runtime": "2h 7m",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A pragmatic paleontologist visiting a theme park is tasked with protecting kids after a power failure.",
    "director": "Steven Spielberg",
    "cast": [
      "Sam Neill",
      "Laura Dern"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Adventure masterpiece directed by Steven Spielberg.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Adventure masterpiece directed by Steven Spielberg.",
    "similarTags": [
      "Steven",
      "Sci-Fi",
      "History"
    ],
    "moods": [
      "✨ Adventure",
      "🔥 Sci-Fi"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$804 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Pictures",
    "reviews": []
  },
  {
    "id": "english-star-wars-4",
    "title": "Star Wars: Episode IV",
    "year": 1977,
    "runtime": "2h 1m",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Space",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "Luke Skywalker joins forces with a Jedi Knight to save the galaxy from the Empire's battle station.",
    "director": "George Lucas",
    "cast": [
      "Mark Hamill",
      "Harrison Ford"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by George Lucas.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by George Lucas.",
    "similarTags": [
      "George",
      "Adventure",
      "Space"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Adventure"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$138 Million",
    "revenue": "$145 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-lotr-1",
    "title": "The Lord of the Rings: Fellowship of the Ring",
    "year": 2001,
    "runtime": "2h 58m",
    "genres": [
      "Fantasy",
      "Adventure",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A meek Hobbit from the Shire sets out to destroy a powerful ring in Mount Doom.",
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Ian McKellen"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Fantasy masterpiece directed by Peter Jackson.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Fantasy masterpiece directed by Peter Jackson.",
    "similarTags": [
      "Peter",
      "Adventure",
      "Mystery"
    ],
    "moods": [
      "✨ Fantasy",
      "🔥 Adventure"
    ],
    "language": "English",
    "country": "New Zealand",
    "budget": "$109 Million",
    "revenue": "$326 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Studios",
    "reviews": []
  },
  {
    "id": "english-avengers-endgame",
    "title": "Avengers: Endgame",
    "year": 2019,
    "runtime": "3h 1m",
    "genres": [
      "Action",
      "Adventure",
      "Superhero",
      "Musical",
      "Thriller",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "The Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.",
    "director": "Anthony Russo",
    "cast": [
      "Robert Downey Jr.",
      "Chris Evans"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Anthony Russo.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Anthony Russo.",
    "similarTags": [
      "Anthony",
      "Adventure",
      "Superhero"
    ],
    "moods": [
      "✨ Action",
      "🔥 Adventure"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$49 Million",
    "revenue": "$760 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-iron-man",
    "title": "Iron Man",
    "year": 2008,
    "runtime": "2h 6m",
    "genres": [
      "Action",
      "Sci-Fi",
      "Superhero",
      "Romance",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A wealthy industrialist builds a high-tech armored suit to escape captivity, becoming a hero.",
    "director": "Jon Favreau",
    "cast": [
      "Robert Downey Jr.",
      "Gwyneth Paltrow"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Jon Favreau.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Action masterpiece directed by Jon Favreau.",
    "similarTags": [
      "Jon",
      "Sci-Fi",
      "Superhero"
    ],
    "moods": [
      "✨ Action",
      "🔥 Sci-Fi"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$57 Million",
    "revenue": "$160 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Studios",
    "reviews": []
  },
  {
    "id": "english-spider-verse",
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "runtime": "1h 57m",
    "genres": [
      "Animation",
      "Family",
      "Superhero",
      "Adventure",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "Teen Miles Morales becomes the new Spider-Man, joining forces with spiders from other dimensions.",
    "director": "Bob Persichetti",
    "cast": [
      "Shameik Moore",
      "Jake Johnson"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Animation masterpiece directed by Bob Persichetti.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Animation masterpiece directed by Bob Persichetti.",
    "similarTags": [
      "Bob",
      "Family",
      "Superhero"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Family"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$89 Million",
    "revenue": "$658 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Pictures",
    "reviews": []
  },
  {
    "id": "english-whiplash",
    "title": "Whiplash",
    "year": 2014,
    "runtime": "1h 47m",
    "genres": [
      "Drama",
      "Musical",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A promising young drummer enrolls at a cut-throat music conservatory where he is pushed to his limits.",
    "director": "Damien Chazelle",
    "cast": [
      "Miles Teller",
      "J.K. Simmons"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Damien Chazelle.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Drama masterpiece directed by Damien Chazelle.",
    "similarTags": [
      "Damien",
      "Musical",
      "Sports"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Musical"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$57 Million",
    "revenue": "$576 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-la-la-land-eng",
    "title": "La La Land",
    "year": 2016,
    "runtime": "2h 8m",
    "genres": [
      "Romance",
      "Musical",
      "Comedy",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "A jazz pianist and an aspiring actress fall in love while attempting to reconcile their dreams.",
    "director": "Damien Chazelle",
    "cast": [
      "Ryan Gosling",
      "Emma Stone"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Romance masterpiece directed by Damien Chazelle.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Romance masterpiece directed by Damien Chazelle.",
    "similarTags": [
      "Damien",
      "Musical",
      "Comedy"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Musical"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$176 Million",
    "revenue": "$215 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-shutter-island-eng",
    "title": "Shutter Island",
    "year": 2010,
    "runtime": "2h 18m",
    "genres": [
      "Psychological",
      "Mystery Thriller",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A U.S. Marshal investigates the disappearance of a murderer from a hospital for the criminally insane.",
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Mark Ruffalo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Martin Scorsese.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Martin Scorsese.",
    "similarTags": [
      "Martin",
      "Mystery Thriller",
      "Suspense"
    ],
    "moods": [
      "✨ Psychological",
      "🔥 Mystery Thriller"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$83 Million",
    "revenue": "$634 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Pictures",
    "reviews": []
  },
  {
    "id": "english-godfather",
    "title": "The Godfather",
    "year": 1972,
    "runtime": "2h 55m",
    "genres": [
      "Crime",
      "Drama",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    "director": "Francis Ford Coppola",
    "cast": [
      "Marlon Brando",
      "Al Pacino"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Francis Ford Coppola.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Francis Ford Coppola.",
    "similarTags": [
      "Francis",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$146 Million",
    "revenue": "$665 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "A24",
    "reviews": []
  },
  {
    "id": "english-goodfellas",
    "title": "Goodfellas",
    "year": 1990,
    "runtime": "2h 25m",
    "genres": [
      "Crime",
      "Drama",
      "Biography",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "The story of Henry Hill and his life in the mob, relationship with his wife and partners.",
    "director": "Martin Scorsese",
    "cast": [
      "Robert De Niro",
      "Ray Liotta"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Martin Scorsese.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Martin Scorsese.",
    "similarTags": [
      "Martin",
      "Drama",
      "Biography"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$45 Million",
    "revenue": "$628 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-se7en",
    "title": "Se7en",
    "year": 1995,
    "runtime": "2h 7m",
    "genres": [
      "Crime",
      "Thriller",
      "Mystery",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Morgan Freeman"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by David Fincher.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by David Fincher.",
    "similarTags": [
      "David",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Thriller"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$131 Million",
    "revenue": "$700 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Studios",
    "reviews": []
  },
  {
    "id": "english-silence-lambs",
    "title": "The Silence of the Lambs",
    "year": 1991,
    "runtime": "1h 58m",
    "genres": [
      "Thriller",
      "Crime",
      "Mystery",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "An FBI cadet receives help from an incarcerated cannibal killer to catch another serial killer.",
    "director": "Jonathan Demme",
    "cast": [
      "Jodie Foster",
      "Anthony Hopkins"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Thriller masterpiece directed by Jonathan Demme.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Thriller masterpiece directed by Jonathan Demme.",
    "similarTags": [
      "Jonathan",
      "Crime",
      "Mystery"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Crime"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$92 Million",
    "revenue": "$621 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "A24",
    "reviews": []
  },
  {
    "id": "english-departed",
    "title": "The Departed",
    "year": 2006,
    "runtime": "2h 31m",
    "genres": [
      "Crime",
      "Thriller",
      "Drama",
      "Mystery Thriller",
      "Action",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "An undercover cop and a mole in the police attempt to identify each other inside a Boston gang.",
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Matt Damon"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Martin Scorsese.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Crime masterpiece directed by Martin Scorsese.",
    "similarTags": [
      "Martin",
      "Thriller",
      "Drama"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Thriller"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$119 Million",
    "revenue": "$720 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-prestige-eng",
    "title": "The Prestige",
    "year": 2006,
    "runtime": "2h 10m",
    "genres": [
      "Psychological",
      "Mystery Thriller",
      "Drama",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "Two magicians engage in a battle to create the ultimate illusion, sacrificing everything.",
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Hugh Jackman"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Christopher Nolan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Christopher Nolan.",
    "similarTags": [
      "Christopher",
      "Mystery Thriller",
      "Drama"
    ],
    "moods": [
      "✨ Psychological",
      "🔥 Mystery Thriller"
    ],
    "language": "English",
    "country": "UK",
    "budget": "$135 Million",
    "revenue": "$608 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Pictures",
    "reviews": []
  },
  {
    "id": "english-memento-eng",
    "title": "Memento",
    "year": 2000,
    "runtime": "1h 53m",
    "genres": [
      "Psychological",
      "Mystery Thriller",
      "Noir",
      "Animation",
      "Drama",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A man with short-term memory loss uses polaroid photos and tattoos to track down his wife's killer.",
    "director": "Christopher Nolan",
    "cast": [
      "Guy Pearce",
      "Carrie-Anne Moss"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Christopher Nolan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Psychological masterpiece directed by Christopher Nolan.",
    "similarTags": [
      "Christopher",
      "Mystery Thriller",
      "Noir"
    ],
    "moods": [
      "✨ Psychological",
      "🔥 Mystery Thriller"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$142 Million",
    "revenue": "$263 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-arrival",
    "title": "Arrival",
    "year": 2016,
    "runtime": "1h 56m",
    "genres": [
      "Sci-Fi",
      "Mystery",
      "Drama",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A linguist works with the military to communicate with alien lifeforms who landed on Earth.",
    "director": "Denis Villeneuve",
    "cast": [
      "Amy Adams",
      "Jeremy Renner"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "similarTags": [
      "Denis",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Mystery"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$162 Million",
    "revenue": "$681 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Warner Bros. Pictures",
    "reviews": []
  },
  {
    "id": "english-dune-eng",
    "title": "Dune",
    "year": 2021,
    "runtime": "2h 35m",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Space",
      "Biography",
      "Fantasy",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A noble family gets drawn into a war for control of the galaxy's most valuable asset on Arrakis.",
    "director": "Denis Villeneuve",
    "cast": [
      "Timothée Chalamet",
      "Rebecca Ferguson"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "similarTags": [
      "Denis",
      "Adventure",
      "Space"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Adventure"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$61 Million",
    "revenue": "$246 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-blade-runner-2049",
    "title": "Blade Runner 2049",
    "year": 2017,
    "runtime": "2h 44m",
    "genres": [
      "Sci-Fi",
      "Noir",
      "Cyberpunk",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A new blade runner uncovers a secret that could plunge what is left of society into chaos.",
    "director": "Denis Villeneuve",
    "cast": [
      "Ryan Gosling",
      "Harrison Ford"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Sci-Fi masterpiece directed by Denis Villeneuve.",
    "similarTags": [
      "Denis",
      "Noir",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Noir"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$144 Million",
    "revenue": "$183 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-get-out",
    "title": "Get Out",
    "year": 2017,
    "runtime": "1h 44m",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller",
      "Action",
      "Crime",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A young African-American visits his white girlfriend's parents for the weekend, discovering a dark secret.",
    "director": "Jordan Peele",
    "cast": [
      "Daniel Kaluuya",
      "Allison Williams"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by Jordan Peele.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by Jordan Peele.",
    "similarTags": [
      "Jordan",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$178 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Neon",
    "reviews": []
  },
  {
    "id": "english-hereditary-eng",
    "title": "Hereditary",
    "year": 2018,
    "runtime": "2h 7m",
    "genres": [
      "Horror",
      "Psychological",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A grieving family is haunted by disturbing occurrences after the death of their grandmother.",
    "director": "Ari Aster",
    "cast": [
      "Toni Collette",
      "Alex Wolff"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by Ari Aster.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by Ari Aster.",
    "similarTags": [
      "Ari",
      "Psychological",
      "Adventure"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Psychological"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$126 Million",
    "revenue": "$215 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Paramount Pictures",
    "reviews": []
  },
  {
    "id": "english-conjuring",
    "title": "The Conjuring",
    "year": 2013,
    "runtime": "1h 52m",
    "genres": [
      "Horror",
      "Suspense",
      "Animation",
      "Drama",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "Paranormal investigators Warren work to help a family terrorized by a dark presence.",
    "director": "James Wan",
    "cast": [
      "Vera Farmiga",
      "Patrick Wilson"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by James Wan.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Horror masterpiece directed by James Wan.",
    "similarTags": [
      "James",
      "Suspense",
      "Animation"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Suspense"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$45 Million",
    "revenue": "$340 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Studios",
    "reviews": []
  },
  {
    "id": "english-paddington-2-eng",
    "title": "Paddington 2",
    "year": 2017,
    "runtime": "1h 43m",
    "genres": [
      "Family",
      "Comedy",
      "Adventure",
      "Anime",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "Paddington picks up odd jobs to buy a pop-up book for his aunt, only for it to be stolen.",
    "director": "Paul King",
    "cast": [
      "Ben Whishaw",
      "Hugh Grant"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Family masterpiece directed by Paul King.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Family masterpiece directed by Paul King.",
    "similarTags": [
      "Paul",
      "Comedy",
      "Adventure"
    ],
    "moods": [
      "✨ Family",
      "🔥 Comedy"
    ],
    "language": "English",
    "country": "UK",
    "budget": "$169 Million",
    "revenue": "$578 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Pictures",
    "reviews": []
  },
  {
    "id": "english-toy-story-eng",
    "title": "Toy Story",
    "year": 1995,
    "runtime": "1h 21m",
    "genres": [
      "Family",
      "Animation",
      "Comedy",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A cowboy doll is threatened when a new spaceman figure becomes top toy in a boy's room.",
    "director": "John Lasseter",
    "cast": [
      "Tom Hanks",
      "Tim Allen"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Family masterpiece directed by John Lasseter.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Family masterpiece directed by John Lasseter.",
    "similarTags": [
      "John",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "✨ Family",
      "🔥 Animation"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$168 Million",
    "revenue": "$527 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "A24",
    "reviews": []
  },
  {
    "id": "english-finding-nemo",
    "title": "Finding Nemo",
    "year": 2003,
    "runtime": "1h 40m",
    "genres": [
      "Family",
      "Animation",
      "Adventure",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "A timid clownfish travels across the ocean to Sydney to rescue his captured son.",
    "director": "Andrew Stanton",
    "cast": [
      "Albert Brooks",
      "Ellen DeGeneres"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from English cinema. A high-quality Family masterpiece directed by Andrew Stanton.",
    "whyRecommended": "Top recommendation from English cinema. A high-quality Family masterpiece directed by Andrew Stanton.",
    "similarTags": [
      "Andrew",
      "Animation",
      "Adventure"
    ],
    "moods": [
      "✨ Family",
      "🔥 Animation"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$171 Million",
    "revenue": "$530 Million",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Universal Studios",
    "reviews": []
  },
  {
    "id": "korean-parasite",
    "title": "Parasite",
    "year": 2019,
    "runtime": "2h 12m",
    "genres": [
      "Drama",
      "Thriller",
      "Comedy",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    "director": "Bong Joon Ho",
    "cast": [
      "Song Kang-ho",
      "Lee Sun-kyun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "5x52P2Z22oo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "$11 Million",
    "revenue": "$263 Million",
    "tagline": "Act like you own the place.",
    "productionCompany": "CJ Entertainment",
    "awards": [
      "4 Academy Awards including Best Picture"
    ],
    "reviews": []
  },
  {
    "id": "korean-oldboy",
    "title": "Oldboy",
    "year": 2003,
    "runtime": "2h 0m",
    "genres": [
      "Action",
      "Thriller",
      "Mystery",
      "Psychological",
      "Adventure",
      "Documentary",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "After being kidnapped and imprisoned for fifteen years, a man is released, only to find that he must find his captor in five days.",
    "director": "Park Chan-wook",
    "cast": [
      "Choi Min-sik",
      "Yoo Ji-tae"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "2Ed91Bf36-k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "$3 Million",
    "revenue": "$15 Million",
    "tagline": "Laugh, and the world laughs with you. Weep, and you weep alone.",
    "productionCompany": "Show East",
    "awards": [
      "Grand Prix at the 2004 Cannes Film Festival"
    ],
    "reviews": []
  },
  {
    "id": "korean-memories-murder",
    "title": "Memories of Murder",
    "year": 2003,
    "runtime": "2h 11m",
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "Two local detectives in a small province attempt to solve a series of brutal murders targeting women in the 1980s.",
    "director": "Bong Joon Ho",
    "cast": [
      "Song Kang-ho",
      "Kim Sang-kyung"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "6C45QhK8n6Y",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Crime masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Crime masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Drama",
      "Mystery"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "$2.8 Million",
    "revenue": "$17 Million",
    "tagline": "In the summer of 1986, a small province of South Korea changed forever.",
    "productionCompany": "CJ Entertainment",
    "awards": [
      "Grand Bell Award for Best Actor"
    ],
    "reviews": []
  },
  {
    "id": "korean-handmaiden",
    "title": "The Handmaiden",
    "year": 2016,
    "runtime": "2h 25m",
    "genres": [
      "Romance",
      "Drama",
      "Thriller",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A woman is hired as a handmaiden to a Japanese heiress, but secretly plots to defraud her of her inheritance.",
    "director": "Park Chan-wook",
    "cast": [
      "Kim Min-hee",
      "Kim Tae-ri"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "Q4Z5jfjxdvQ",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "$8 Million",
    "revenue": "$38 Million",
    "tagline": "A story of deception and desire.",
    "productionCompany": "Moho Film",
    "awards": [
      "BAFTA Award for Best Film Not in the English Language"
    ],
    "reviews": []
  },
  {
    "id": "korean-train-busan",
    "title": "Train to Busan",
    "year": 2016,
    "runtime": "1h 58m",
    "genres": [
      "Action",
      "Horror",
      "Survival",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "A father and daughter get trapped in a high-speed train during a sudden zombie outbreak in South Korea.",
    "director": "Yeon Sang-ho",
    "cast": [
      "Gong Yoo",
      "Ma Dong-seok"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "pyWuPct77o0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Yeon Sang-ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Yeon Sang-ho.",
    "similarTags": [
      "Yeon",
      "Horror",
      "Survival"
    ],
    "moods": [
      "✨ Action",
      "🔥 Horror"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "$8.5 Million",
    "revenue": "$98 Million",
    "tagline": "Life or death, the final destination is Busan.",
    "productionCompany": "Redpeter Films",
    "awards": [
      "Blue Dragon Film Award for Technical Excellence"
    ],
    "reviews": []
  },
  {
    "id": "korean-saw-devil",
    "title": "I Saw the Devil",
    "year": 2010,
    "runtime": "2h 24m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A secret agent hunts down a sadistic serial killer who murdered his pregnant fiancee, starting a game of cat and mouse.",
    "director": "Kim Jee-woon",
    "cast": [
      "Lee Byung-hun",
      "Choi Min-sik"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kim Jee-woon.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kim Jee-woon.",
    "similarTags": [
      "Kim",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹100 Crore",
    "revenue": "₹365 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-burning",
    "title": "Burning",
    "year": 2018,
    "runtime": "2h 28m",
    "genres": [
      "Drama",
      "Mystery",
      "Psychological",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A delivery boy runs into a childhood classmate who asks him to look after her cat while she travels to Africa.",
    "director": "Lee Chang-dong",
    "cast": [
      "Yoo Ah-in",
      "Steven Yeun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Chang-dong.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Chang-dong.",
    "similarTags": [
      "Lee",
      "Mystery",
      "Psychological"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹108 Crore",
    "revenue": "₹147 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "korean-snowpiercer",
    "title": "Snowpiercer",
    "year": 2013,
    "runtime": "2h 6m",
    "genres": [
      "Sci-Fi",
      "Action",
      "Cyberpunk",
      "Documentary",
      "Mystery",
      "Suspense",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "A rebellion erupts aboard a perpetually moving train carrying the last survivors of humanity in a frozen world.",
    "director": "Bong Joon Ho",
    "cast": [
      "Chris Evans",
      "Song Kang-ho"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Sci-Fi masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Sci-Fi masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Action",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Action"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹104 Crore",
    "revenue": "₹217 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-wailing",
    "title": "The Wailing",
    "year": 2016,
    "runtime": "2h 36m",
    "genres": [
      "Horror",
      "Mystery",
      "Suspense",
      "Drama",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A mysterious disease spreads in a small mountain village after a Japanese stranger arrives.",
    "director": "Na Hong-jin",
    "cast": [
      "Kwak Do-won",
      "Hwang Jung-min"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Na Hong-jin.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Na Hong-jin.",
    "similarTags": [
      "Na",
      "Mystery",
      "Suspense"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹97 Crore",
    "revenue": "₹288 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "korean-minari",
    "title": "Minari",
    "year": 2020,
    "runtime": "1h 55m",
    "genres": [
      "Drama",
      "Family",
      "Romance",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A Korean-American family moves to an Arkansas farm in search of their own American Dream.",
    "director": "Lee Isaac Chung",
    "cast": [
      "Steven Yeun",
      "Han Ye-ri"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Isaac Chung.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Isaac Chung.",
    "similarTags": [
      "Lee",
      "Family",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Korean",
    "country": "USA",
    "budget": "₹81 Crore",
    "revenue": "₹416 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "korean-taxi-driver",
    "title": "A Taxi Driver",
    "year": 2017,
    "runtime": "2h 17m",
    "genres": [
      "Drama",
      "History",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "A taxi driver in Seoul reluctantly drives a German reporter to Gwangju during a historic uprising.",
    "director": "Jang Hoon",
    "cast": [
      "Song Kang-ho",
      "Thomas Kretschmann"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Jang Hoon.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Jang Hoon.",
    "similarTags": [
      "Jang",
      "History",
      "Fantasy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹100 Crore",
    "revenue": "₹459 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-chaser",
    "title": "The Chaser",
    "year": 2008,
    "runtime": "2h 5m",
    "genres": [
      "Action",
      "Crime",
      "Thriller",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A badass detective tries to maintain peace while two rival Chinese-Korean gangs wage war.",
    "director": "Na Hong-jin",
    "cast": [
      "Kim Yoon-seok",
      "Ha Jung-woo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Na Hong-jin.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Na Hong-jin.",
    "similarTags": [
      "Na",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹68 Crore",
    "revenue": "₹197 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-thirst",
    "title": "Thirst",
    "year": 2009,
    "runtime": "2h 13m",
    "genres": [
      "Horror",
      "Romance",
      "Drama",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "A priest volunteering for a vaccine trial gets infected, becoming a vampire craving blood.",
    "director": "Park Chan-wook",
    "cast": [
      "Song Kang-ho",
      "Kim Ok-bin"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Romance",
      "Drama"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Romance"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹71 Crore",
    "revenue": "₹232 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "korean-mother-kor",
    "title": "Mother",
    "year": 2009,
    "runtime": "2h 9m",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A mother desperately searches for the real killer of a schoolgirl to clear her disabled son's name.",
    "director": "Bong Joon Ho",
    "cast": [
      "Kim Hye-ja",
      "Won Bin"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹28 Crore",
    "revenue": "₹179 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-jsa",
    "title": "Joint Security Area",
    "year": 2000,
    "runtime": "1h 50m",
    "genres": [
      "Drama",
      "Mystery",
      "War",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "A neutral investigator looks into a shootout at the border between North and South Korea.",
    "director": "Park Chan-wook",
    "cast": [
      "Song Kang-ho",
      "Lee Byung-hun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Mystery",
      "War"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹64 Crore",
    "revenue": "₹265 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-sympathy-vengeance",
    "title": "Sympathy for Mr. Vengeance",
    "year": 2002,
    "runtime": "2h 9m",
    "genres": [
      "Drama",
      "Crime",
      "Thriller",
      "Romance",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A deaf-mute worker kidnaps his former boss's daughter to pay for his sister's kidney transplant.",
    "director": "Park Chan-wook",
    "cast": [
      "Song Kang-ho",
      "Shin Ha-kyun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹132 Crore",
    "revenue": "₹429 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "korean-lady-vengeance",
    "title": "Lady Vengeance",
    "year": 2005,
    "runtime": "1h 55m",
    "genres": [
      "Drama",
      "Crime",
      "Thriller",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A woman framed for kidnapping and murder is released from prison, planning an elaborate revenge.",
    "director": "Park Chan-wook",
    "cast": [
      "Lee Young-ae",
      "Choi Min-sik"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹25 Crore",
    "revenue": "₹256 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "korean-miracle-cell-7",
    "title": "Miracle in Cell No. 7",
    "year": 2013,
    "runtime": "2h 7m",
    "genres": [
      "Drama",
      "Comedy",
      "Family",
      "Sports",
      "Psychological",
      "Time Travel",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A mentally disabled man is falsely accused of murder, making friends with cellmates who smuggle his daughter.",
    "director": "Lee Hwan-kyung",
    "cast": [
      "Ryu Seung-ryong",
      "Kal So-won"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Hwan-kyung.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Lee Hwan-kyung.",
    "similarTags": [
      "Lee",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹21 Crore",
    "revenue": "₹180 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "korean-extreme-job",
    "title": "Extreme Job",
    "year": 2019,
    "runtime": "1h 51m",
    "genres": [
      "Comedy",
      "Action",
      "Crime",
      "Superhero",
      "Mystery Thriller",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "Narcotics detectives start a fried chicken restaurant as a cover for wiretapping, only to become famous.",
    "director": "Lee Byeong-heon",
    "cast": [
      "Ryu Seung-ryong",
      "Lee Hanee"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Lee Byeong-heon.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Lee Byeong-heon.",
    "similarTags": [
      "Lee",
      "Action",
      "Crime"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Action"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹126 Crore",
    "revenue": "₹237 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "korean-along-gods",
    "title": "Along with the Gods: The Two Worlds",
    "year": 2017,
    "runtime": "2h 20m",
    "genres": [
      "Fantasy",
      "Drama",
      "Action",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A deceased firefighter travels through the afterlife trials with three guardians to reincarnate.",
    "director": "Kim Yong-hwa",
    "cast": [
      "Ha Jung-woo",
      "Cha Tae-hyun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Fantasy masterpiece directed by Kim Yong-hwa.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Fantasy masterpiece directed by Kim Yong-hwa.",
    "similarTags": [
      "Kim",
      "Drama",
      "Action"
    ],
    "moods": [
      "✨ Fantasy",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹104 Crore",
    "revenue": "₹223 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-host",
    "title": "The Host",
    "year": 2006,
    "runtime": "2h 0m",
    "genres": [
      "Horror",
      "Action",
      "Family",
      "Thriller",
      "Noir",
      "Animation",
      "Drama",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "A monster emerges from Seoul's Han River, kidnapping a man's daughter, forcing his family to rescue her.",
    "director": "Bong Joon Ho",
    "cast": [
      "Song Kang-ho",
      "Byun Hee-bong"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Action",
      "Family"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Action"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹32 Crore",
    "revenue": "₹297 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-okja",
    "title": "Okja",
    "year": 2017,
    "runtime": "2h 0m",
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "A young girl risks everything to prevent a powerful multinational company from kidnapping her superpig.",
    "director": "Bong Joon Ho",
    "cast": [
      "Ahn Seo-hyun",
      "Tilda Swinton"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Adventure masterpiece directed by Bong Joon Ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Adventure masterpiece directed by Bong Joon Ho.",
    "similarTags": [
      "Bong",
      "Drama",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Adventure",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹20 Crore",
    "revenue": "₹85 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-silenced",
    "title": "Silenced",
    "year": 2011,
    "runtime": "2h 5m",
    "genres": [
      "Drama",
      "Crime",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A newly appointed teacher at a deaf school uncovers a network of abuse targeting disabled children.",
    "director": "Hwang Dong-hyuk",
    "cast": [
      "Gong Yoo",
      "Jung Yu-mi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Hwang Dong-hyuk.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Hwang Dong-hyuk.",
    "similarTags": [
      "Hwang",
      "Crime",
      "Western"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹20 Crore",
    "revenue": "₹373 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "korean-new-world",
    "title": "New World",
    "year": 2013,
    "runtime": "2h 14m",
    "genres": [
      "Crime",
      "Drama",
      "Action",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "An undercover police officer inside Korea's biggest corporate gang faces conflict after the boss dies.",
    "director": "Park Hoon-jung",
    "cast": [
      "Lee Jung-jae",
      "Choi Min-sik"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Crime masterpiece directed by Park Hoon-jung.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Crime masterpiece directed by Park Hoon-jung.",
    "similarTags": [
      "Park",
      "Drama",
      "Action"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹83 Crore",
    "revenue": "₹196 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "korean-man-nowhere",
    "title": "The Man from Nowhere",
    "year": 2010,
    "runtime": "1h 59m",
    "genres": [
      "Action",
      "Thriller",
      "Crime",
      "Mystery Thriller",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "A quiet pawnshop keeper goes on a rampage to rescue a young girl who is kidnapped by drug dealers.",
    "director": "Lee Jeong-beom",
    "cast": [
      "Won Bin",
      "Kim Sae-ron"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Lee Jeong-beom.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Lee Jeong-beom.",
    "similarTags": [
      "Lee",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹106 Crore",
    "revenue": "₹257 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-castaway-moon",
    "title": "Castaway on the Moon",
    "year": 2009,
    "runtime": "1h 56m",
    "genres": [
      "Comedy",
      "Romance",
      "Survival",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A failed salaryman gets stranded on a small island in Seoul's Han River, communicating with a shut-in girl.",
    "director": "Lee Hae-jun",
    "cast": [
      "Jung Jae-young",
      "Jung Ryeo-won"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Lee Hae-jun.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Lee Hae-jun.",
    "similarTags": [
      "Lee",
      "Romance",
      "Survival"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹135 Crore",
    "revenue": "₹248 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "korean-midnight-runners",
    "title": "Midnight Runners",
    "year": 2017,
    "runtime": "1h 49m",
    "genres": [
      "Comedy",
      "Action",
      "Crime",
      "Noir",
      "Animation",
      "Drama",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "Two police academy cadets witness a kidnapping and decide to investigate the case themselves.",
    "director": "Kim Joo-hwan",
    "cast": [
      "Park Seo-joon",
      "Kang Ha-neul"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Kim Joo-hwan.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Comedy masterpiece directed by Kim Joo-hwan.",
    "similarTags": [
      "Kim",
      "Action",
      "Crime"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Action"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹28 Crore",
    "revenue": "₹147 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-sunny",
    "title": "Sunny",
    "year": 2011,
    "runtime": "2h 4m",
    "genres": [
      "Drama",
      "Comedy",
      "Family",
      "Survival",
      "Anime",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A middle-aged woman attempts to reunite her high school group of friends after learning one is dying.",
    "director": "Kang Hyeong-cheol",
    "cast": [
      "Shim Eun-kyung",
      "Kang So-ra"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Kang Hyeong-cheol.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Kang Hyeong-cheol.",
    "similarTags": [
      "Kang",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹64 Crore",
    "revenue": "₹63 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-outlaws",
    "title": "The Outlaws",
    "year": 2017,
    "runtime": "2h 1m",
    "genres": [
      "Action",
      "Crime",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A badass detective tries to maintain peace while two rival Chinese-Korean gangs wage war.",
    "director": "Kang Yoon-sung",
    "cast": [
      "Ma Dong-seok",
      "Yoon Kye-sang"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kang Yoon-sung.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kang Yoon-sung.",
    "similarTags": [
      "Kang",
      "Crime",
      "Space"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹55 Crore",
    "revenue": "₹198 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "korean-decibel",
    "title": "Decibel",
    "year": 2022,
    "runtime": "1h 50m",
    "genres": [
      "Action",
      "Thriller",
      "Suspense",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A former navy commander receives a call from a terrorist who has planted sound-responsive bombs in the city.",
    "director": "Hwang In-ho",
    "cast": [
      "Kim Rae-won",
      "Lee Jong-suk"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Hwang In-ho.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Hwang In-ho.",
    "similarTags": [
      "Hwang",
      "Thriller",
      "Suspense"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹101 Crore",
    "revenue": "₹356 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "korean-concrete-utopia",
    "title": "Concrete Utopia",
    "year": 2023,
    "runtime": "2h 10m",
    "genres": [
      "Drama",
      "Thriller",
      "Survival",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "After an earthquake destroys Seoul, survivors gather at the only apartment building left standing.",
    "director": "Um Tae-hwa",
    "cast": [
      "Lee Byung-hun",
      "Park Seo-joon"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Um Tae-hwa.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Um Tae-hwa.",
    "similarTags": [
      "Um",
      "Thriller",
      "Survival"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Thriller"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹100 Crore",
    "revenue": "₹291 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-exhuma",
    "title": "Exhuma",
    "year": 2024,
    "runtime": "2h 14m",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller",
      "Adventure",
      "Documentary",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A wealthy family in LA hires shamans to exhume their ancestor's grave to cure a mysterious disease.",
    "director": "Jang Jae-hyun",
    "cast": [
      "Choi Min-sik",
      "Kim Go-eun"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Jang Jae-hyun.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Horror masterpiece directed by Jang Jae-hyun.",
    "similarTags": [
      "Jang",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹27 Crore",
    "revenue": "₹306 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "korean-decision-leave",
    "title": "Decision to Leave",
    "year": 2022,
    "runtime": "2h 18m",
    "genres": [
      "Romance",
      "Mystery",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A detective falls in love with the mysterious widow of a man who died falling from a mountain.",
    "director": "Park Chan-wook",
    "cast": [
      "Tang Wei",
      "Park Hae-il"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Park Chan-wook.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Park Chan-wook.",
    "similarTags": [
      "Park",
      "Mystery",
      "Drama"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Mystery"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹103 Crore",
    "revenue": "₹360 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "korean-past-lives",
    "title": "Past Lives",
    "year": 2023,
    "runtime": "1h 45m",
    "genres": [
      "Romance",
      "Drama",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "Two childhood friends reunite for one fateful week in New York, contemplating their destiny.",
    "director": "Celine Song",
    "cast": [
      "Greta Lee",
      "Teo Yoo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Celine Song.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Romance masterpiece directed by Celine Song.",
    "similarTags": [
      "Celine",
      "Drama",
      "Anime"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Korean",
    "country": "USA",
    "budget": "₹94 Crore",
    "revenue": "₹189 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "korean-ode-father",
    "title": "Ode to My Father",
    "year": 2014,
    "runtime": "2h 6m",
    "genres": [
      "Drama",
      "History",
      "Family",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A man's life story from the Hungnam Evacuation of 1950 to the present day, detailing his sacrifices.",
    "director": "Yoon Je-kyoon",
    "cast": [
      "Hwang Jung-min",
      "Yunjin Kim"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Yoon Je-kyoon.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Drama masterpiece directed by Yoon Je-kyoon.",
    "similarTags": [
      "Yoon",
      "History",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹36 Crore",
    "revenue": "₹61 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "korean-admiral-currents",
    "title": "The Admiral: Roaring Currents",
    "year": 2014,
    "runtime": "2h 8m",
    "genres": [
      "Action",
      "History",
      "War",
      "Comedy",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "Admiral Yi Sun-sin leads 12 ships to defeat an invading Japanese fleet of 330 vessels at Battle of Myeongnyang.",
    "director": "Kim Han-min",
    "cast": [
      "Choi Min-sik",
      "Ryu Seung-ryong"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kim Han-min.",
    "whyRecommended": "Top recommendation from Korean cinema. A high-quality Action masterpiece directed by Kim Han-min.",
    "similarTags": [
      "Kim",
      "History",
      "War"
    ],
    "moods": [
      "✨ Action",
      "🔥 History"
    ],
    "language": "Korean",
    "country": "South Korea",
    "budget": "₹116 Crore",
    "revenue": "₹331 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-spirited-away-jp",
    "title": "Spirited Away",
    "year": 2001,
    "runtime": "2h 5m",
    "genres": [
      "Animation",
      "Family",
      "Fantasy",
      "Anime",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A young girl gets trapped in a world ruled by spirits, trying to save her parents.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Rumi Hiiragi",
      "Miyu Irino"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "ByXuk9QqQkk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Family",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Family"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "$19 Million",
    "revenue": "$395 Million",
    "tagline": "Nothing that happens is ever forgotten, even if you can't remember it.",
    "productionCompany": "Studio Ghibli",
    "awards": [
      "Academy Award for Best Animated Feature"
    ],
    "reviews": []
  },
  {
    "id": "japanese-totoro",
    "title": "My Neighbor Totoro",
    "year": 1988,
    "runtime": "1h 26m",
    "genres": [
      "Animation",
      "Family",
      "Fantasy",
      "Anime",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "Two young sisters move to the countryside, forming a bond with friendly forest spirits.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Chika Sakamoto",
      "Noriko Hidaka"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "92aP9gn3MW8",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Family",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Family"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "$3.5 Million",
    "revenue": "$30 Million",
    "tagline": "Meet the friendly spirits of the forest.",
    "productionCompany": "Studio Ghibli",
    "awards": [
      "Blue Ribbon Award for Best Film"
    ],
    "reviews": []
  },
  {
    "id": "japanese-mononoke",
    "title": "Princess Mononoke",
    "year": 1997,
    "runtime": "2h 14m",
    "genres": [
      "Animation",
      "Adventure",
      "Fantasy",
      "Anime",
      "Drama",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "A young prince tries to maintain peace between humans mining iron and forest spirits.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Yoji Matsuda",
      "Yuriko Ishida"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "4UKdR2urfZk",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Adventure"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "$20 Million",
    "revenue": "$169 Million",
    "tagline": "The clash between civilization and forest gods.",
    "productionCompany": "Studio Ghibli",
    "awards": [
      "Japan Academy Prize for Picture of the Year"
    ],
    "reviews": []
  },
  {
    "id": "japanese-your-name-jp",
    "title": "Your Name.",
    "year": 2016,
    "runtime": "1h 46m",
    "genres": [
      "Animation",
      "Romance",
      "Drama",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "Two high school students swap bodies, forming a bond across space and time.",
    "director": "Makoto Shinkai",
    "cast": [
      "Ryunosuke Kamiki",
      "Mone Kamishibai"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "hDDw8iC10uQ",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "similarTags": [
      "Makoto",
      "Romance",
      "Drama"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Romance"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "$3.7 Million",
    "revenue": "$382 Million",
    "tagline": "Searching for someone I've never met.",
    "productionCompany": "CoMix Wave Films",
    "awards": [
      "L.A. Film Critics Association Award for Best Animated Film"
    ],
    "reviews": []
  },
  {
    "id": "japanese-silent-voice-jp",
    "title": "A Silent Voice",
    "year": 2016,
    "runtime": "2h 10m",
    "genres": [
      "Animation",
      "Drama",
      "Anime",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "A high school boy attempts to redeem himself with a deaf girl he bullied in grade school.",
    "director": "Naoko Yamada",
    "cast": [
      "Miyu Irino",
      "Saori Hayami"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "X5beT497n50",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Naoko Yamada.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Naoko Yamada.",
    "similarTags": [
      "Naoko",
      "Drama",
      "Anime"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Drama"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "$3.5 Million",
    "revenue": "$33 Million",
    "tagline": "Hear the voice that was left unheard.",
    "productionCompany": "Kyoto Animation",
    "awards": [
      "Japan Movie Critics Award for Best Animation"
    ],
    "reviews": []
  },
  {
    "id": "japanese-weathering-you",
    "title": "Weathering with You",
    "year": 2019,
    "runtime": "1h 52m",
    "genres": [
      "Animation",
      "Romance",
      "Fantasy",
      "Anime",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A runaway high school boy meets a girl who can control the weather in rainy Tokyo.",
    "director": "Makoto Shinkai",
    "cast": [
      "Kotaro Daigo",
      "Nana Mori"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "similarTags": [
      "Makoto",
      "Romance",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Romance"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹112 Crore",
    "revenue": "₹447 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-suzume-jp",
    "title": "Suzume",
    "year": 2022,
    "runtime": "2h 2m",
    "genres": [
      "Animation",
      "Adventure",
      "Fantasy",
      "Anime",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A high school girl travels around Japan closing mysterious doors to prevent earthquakes.",
    "director": "Makoto Shinkai",
    "cast": [
      "Nanoka Hara",
      "Hokuto Matsumura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Makoto Shinkai.",
    "similarTags": [
      "Makoto",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Adventure"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹82 Crore",
    "revenue": "₹257 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-akira",
    "title": "Akira",
    "year": 1988,
    "runtime": "2h 4m",
    "genres": [
      "Animation",
      "Sci-Fi",
      "Cyberpunk",
      "Anime",
      "Documentary",
      "Mystery",
      "Suspense",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "A military project endangers Neo-Tokyo after a biker gang member gains telekinetic powers.",
    "director": "Katsuhiro Otomo",
    "cast": [
      "Mitsuo Iwata",
      "Nozomu Sasaki"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Katsuhiro Otomo.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Katsuhiro Otomo.",
    "similarTags": [
      "Katsuhiro",
      "Sci-Fi",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Sci-Fi"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹57 Crore",
    "revenue": "₹280 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "japanese-ghost-shell",
    "title": "Ghost in the Shell",
    "year": 1995,
    "runtime": "1h 23m",
    "genres": [
      "Animation",
      "Sci-Fi",
      "Cyberpunk",
      "Anime",
      "Drama",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A cyborg policewoman hunts a hacker who steals memories from cyborg brains.",
    "director": "Mamoru Oshii",
    "cast": [
      "Atsuko Tanaka",
      "Akio Otsuka"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Mamoru Oshii.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Mamoru Oshii.",
    "similarTags": [
      "Mamoru",
      "Sci-Fi",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Sci-Fi"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹136 Crore",
    "revenue": "₹63 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-mugen-train",
    "title": "Demon Slayer: Mugen Train",
    "year": 2020,
    "runtime": "1h 57m",
    "genres": [
      "Animation",
      "Action",
      "Fantasy",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A group of demon slayers board a train to investigate disappearances, fighting a powerful demon.",
    "director": "Haruo Sotozaki",
    "cast": [
      "Natsuki Hanae",
      "Yoshitsugu Matsuoka"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Haruo Sotozaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Haruo Sotozaki.",
    "similarTags": [
      "Haruo",
      "Action",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Action"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹104 Crore",
    "revenue": "₹105 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-seven-samurai",
    "title": "Seven Samurai",
    "year": 1954,
    "runtime": "3h 27m",
    "genres": [
      "Action",
      "Drama",
      "History",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "A group of samurai defend a farming village from ruthless bandits in feudal Japan.",
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Takashi Shimura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Akira Kurosawa.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Akira Kurosawa.",
    "similarTags": [
      "Akira",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Action",
      "🔥 Drama"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹26 Crore",
    "revenue": "₹259 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-rashomon",
    "title": "Rashomon",
    "year": 1950,
    "runtime": "1h 28m",
    "genres": [
      "Drama",
      "Mystery",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A priest, a woodcutter, and a commoner discuss a murder trial through four contrasting stories.",
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Machiko Kyo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Akira Kurosawa.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Akira Kurosawa.",
    "similarTags": [
      "Akira",
      "Mystery",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹46 Crore",
    "revenue": "₹229 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-yojimbo",
    "title": "Yojimbo",
    "year": 1961,
    "runtime": "1h 50m",
    "genres": [
      "Action",
      "Comedy",
      "Western",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "A rogue samurai arrives in a small town divided by gang wars, playing them against each other.",
    "director": "Akira Kurosawa",
    "cast": [
      "Toshiro Mifune",
      "Tatsuya Nakadai"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Akira Kurosawa.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Akira Kurosawa.",
    "similarTags": [
      "Akira",
      "Comedy",
      "Western"
    ],
    "moods": [
      "✨ Action",
      "🔥 Comedy"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹26 Crore",
    "revenue": "₹193 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-ran",
    "title": "Ran",
    "year": 1985,
    "runtime": "2h 42m",
    "genres": [
      "Drama",
      "Action",
      "History",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "An aging warlord abdicates his throne to his three sons, leading to internal wars and betrayal.",
    "director": "Akira Kurosawa",
    "cast": [
      "Tatsuya Nakadai",
      "Akira Terao"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Akira Kurosawa.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Akira Kurosawa.",
    "similarTags": [
      "Akira",
      "Action",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Action"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹56 Crore",
    "revenue": "₹193 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-harakiri",
    "title": "Harakiri",
    "year": 1962,
    "runtime": "2h 13m",
    "genres": [
      "Drama",
      "Action",
      "History",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "An elder samurai requests to commit suicide in a clan's courtyard, telling the story of his son-in-law.",
    "director": "Masaki Kobayashi",
    "cast": [
      "Tatsuya Nakadai",
      "Rentaro Mikuni"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Masaki Kobayashi.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Masaki Kobayashi.",
    "similarTags": [
      "Masaki",
      "Action",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Action"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹90 Crore",
    "revenue": "₹409 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-shoplifters",
    "title": "Shoplifters",
    "year": 2018,
    "runtime": "2h 1m",
    "genres": [
      "Drama",
      "Family",
      "Romance",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A poor family of shoplifters adopt a young girl they find outside in the cold.",
    "director": "Hirokazu Kore-eda",
    "cast": [
      "Lily Franky",
      "Sakura Ando"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Hirokazu Kore-eda.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Hirokazu Kore-eda.",
    "similarTags": [
      "Hirokazu",
      "Family",
      "Romance"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹42 Crore",
    "revenue": "₹97 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-drive-my-car",
    "title": "Drive My Car",
    "year": 2021,
    "runtime": "2h 59m",
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A widowed theater director bonds with his young female chauffeur during a festival.",
    "director": "Ryusuke Hamaguchi",
    "cast": [
      "Hidetoshi Nishijima",
      "Toko Miura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Ryusuke Hamaguchi.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Ryusuke Hamaguchi.",
    "similarTags": [
      "Ryusuke",
      "Romance",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹103 Crore",
    "revenue": "₹248 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "japanese-monster-jp",
    "title": "Monster",
    "year": 2023,
    "runtime": "2h 6m",
    "genres": [
      "Drama",
      "Mystery",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A mother demands answers from a school after her young son starts acting strangely.",
    "director": "Hirokazu Kore-eda",
    "cast": [
      "Soya Kurokawa",
      "Hinata Hiiragi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Hirokazu Kore-eda.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Hirokazu Kore-eda.",
    "similarTags": [
      "Hirokazu",
      "Mystery",
      "Sports"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹123 Crore",
    "revenue": "₹124 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "japanese-perfect-days",
    "title": "Perfect Days",
    "year": 2023,
    "runtime": "2h 4m",
    "genres": [
      "Drama",
      "Family",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "The quiet, beautiful daily life of a toilet cleaner in Tokyo who enjoys books and photography.",
    "director": "Wim Wenders",
    "cast": [
      "Koji Yakusho",
      "Arisa Nakano"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Wim Wenders.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Drama masterpiece directed by Wim Wenders.",
    "similarTags": [
      "Wim",
      "Family",
      "Superhero"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹139 Crore",
    "revenue": "₹140 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "japanese-ring-jp",
    "title": "Ring",
    "year": 1998,
    "runtime": "1h 36m",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A reporter investigates a cursed videotape that allegedly kills anyone who watches it in seven days.",
    "director": "Hideo Nakata",
    "cast": [
      "Nanako Matsushima",
      "Hiroyuki Sanada"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Hideo Nakata.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Hideo Nakata.",
    "similarTags": [
      "Hideo",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹47 Crore",
    "revenue": "₹262 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "japanese-ju-on",
    "title": "Ju-On: The Grudge",
    "year": 2002,
    "runtime": "1h 32m",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller",
      "Noir",
      "Animation",
      "Drama",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "A mysterious curse is born in a house where a man murdered his family, infecting anyone who enters.",
    "director": "Takashi Shimizu",
    "cast": [
      "Megumi Okina",
      "Misaki Ito"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Takashi Shimizu.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Takashi Shimizu.",
    "similarTags": [
      "Takashi",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹71 Crore",
    "revenue": "₹112 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "japanese-perfect-blue",
    "title": "Perfect Blue",
    "year": 1997,
    "runtime": "1h 21m",
    "genres": [
      "Animation",
      "Horror",
      "Psychological",
      "Anime",
      "War",
      "Survival",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "A retired pop singer turns actress, facing a stalker and hallucinations that blur reality.",
    "director": "Satoshi Kon",
    "cast": [
      "Junko Iwao",
      "Rica Matsumoto"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "similarTags": [
      "Satoshi",
      "Horror",
      "Psychological"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Horror"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹70 Crore",
    "revenue": "₹367 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-paprika",
    "title": "Paprika",
    "year": 2006,
    "runtime": "1h 30m",
    "genres": [
      "Animation",
      "Sci-Fi",
      "Psychological",
      "Anime",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A therapist uses dream-sharing tech to help patients, but the tech is stolen by a terrorist.",
    "director": "Satoshi Kon",
    "cast": [
      "Megumi Hayashibara",
      "Toru Emori"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "similarTags": [
      "Satoshi",
      "Sci-Fi",
      "Psychological"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Sci-Fi"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹115 Crore",
    "revenue": "₹318 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "japanese-millennium-actress",
    "title": "Millennium Actress",
    "year": 2001,
    "runtime": "1h 27m",
    "genres": [
      "Animation",
      "Drama",
      "History",
      "Anime",
      "Psychological",
      "Time Travel",
      "Comedy",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "Two filmmakers interview a retired actress, traveling through her movie roles spanning Japanese history.",
    "director": "Satoshi Kon",
    "cast": [
      "Miyoko Shoji",
      "Mami Koyama"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "similarTags": [
      "Satoshi",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Drama"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹38 Crore",
    "revenue": "₹447 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-tokyo-godfathers",
    "title": "Tokyo Godfathers",
    "year": 2003,
    "runtime": "1h 32m",
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Anime",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "Three homeless people find an abandoned baby in Tokyo on Christmas Eve, searching for her mother.",
    "director": "Satoshi Kon",
    "cast": [
      "Torru Emori",
      "Yoshiaki Umegaki"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Satoshi Kon.",
    "similarTags": [
      "Satoshi",
      "Comedy",
      "Family"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Comedy"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹66 Crore",
    "revenue": "₹97 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-nausicaa",
    "title": "Nausicaä of the Valley of the Wind",
    "year": 1984,
    "runtime": "1h 57m",
    "genres": [
      "Animation",
      "Adventure",
      "Sci-Fi",
      "Anime",
      "Cyberpunk",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A princess defends her valley from toxic jungle insects and warmongering human states.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Sumi Shimamoto",
      "Mahito Tsujimura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Adventure",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Adventure"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹130 Crore",
    "revenue": "₹145 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-castle-sky",
    "title": "Castle in the Sky",
    "year": 1986,
    "runtime": "2h 4m",
    "genres": [
      "Animation",
      "Adventure",
      "Fantasy",
      "Anime",
      "Noir",
      "Drama",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A boy and a girl search for a legendary floating castle, escaping air pirates and soldiers.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Mayumi Tanaka",
      "Keiko Yokozawa"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Adventure"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹40 Crore",
    "revenue": "₹423 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-howl-castle",
    "title": "Howl's Moving Castle",
    "year": 2004,
    "runtime": "1h 59m",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure",
      "Anime",
      "Survival",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A cursed young girl is taken in by a wizard who lives in a giant walking castle.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Chieko Baisho",
      "Takuya Kimura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Fantasy"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹53 Crore",
    "revenue": "₹452 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "japanese-ponyo",
    "title": "Ponyo",
    "year": 2008,
    "runtime": "1h 41m",
    "genres": [
      "Animation",
      "Family",
      "Fantasy",
      "Anime",
      "Space",
      "Biography",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A goldfish princess escapes the ocean, forming a bond with a young human boy.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Yuria Nara",
      "Hiroki Doi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Family",
      "Fantasy"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Family"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹138 Crore",
    "revenue": "₹151 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-wind-rises",
    "title": "The Wind Rises",
    "year": 2013,
    "runtime": "2h 6m",
    "genres": [
      "Animation",
      "Biography",
      "Drama",
      "Anime",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "A biographical story of Jiro Horikoshi, the designer of Japanese fighter planes in WWII.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Hideaki Anno",
      "Miori Takimoto"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Biography",
      "Drama"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Biography"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹114 Crore",
    "revenue": "₹163 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-boy-heron",
    "title": "The Boy and the Heron",
    "year": 2023,
    "runtime": "2h 4m",
    "genres": [
      "Animation",
      "Fantasy",
      "Adventure",
      "Anime",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A young boy moves to a new town after a tragedy, entering a fantasy tower with a grey heron.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Soma Santoki",
      "Masaki Suda"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Animation masterpiece directed by Hayao Miyazaki.",
    "similarTags": [
      "Hayao",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Fantasy"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹78 Crore",
    "revenue": "₹253 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "japanese-godzilla-minus",
    "title": "Godzilla Minus One",
    "year": 2023,
    "runtime": "2h 5m",
    "genres": [
      "Action",
      "Sci-Fi",
      "Survival",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A disgraced kamikaze pilot fights alongside citizens to defend post-war Japan from Godzilla.",
    "director": "Takashi Yamazaki",
    "cast": [
      "Ryunosuke Kamiki",
      "Minami Hamabe"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Takashi Yamazaki.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Takashi Yamazaki.",
    "similarTags": [
      "Takashi",
      "Sci-Fi",
      "Survival"
    ],
    "moods": [
      "✨ Action",
      "🔥 Sci-Fi"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹37 Crore",
    "revenue": "₹74 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "japanese-love-letter",
    "title": "Love Letter",
    "year": 1995,
    "runtime": "1h 57m",
    "genres": [
      "Romance",
      "Drama",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A woman sends a letter to her deceased fiance's old address, receiving a reply from his schoolmate.",
    "director": "Shunji Iwai",
    "cast": [
      "Miho Nakayama",
      "Etsushi Toyokawa"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Romance masterpiece directed by Shunji Iwai.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Romance masterpiece directed by Shunji Iwai.",
    "similarTags": [
      "Shunji",
      "Drama",
      "Animation"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹109 Crore",
    "revenue": "₹262 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "japanese-cure",
    "title": "Cure",
    "year": 1997,
    "runtime": "1h 51m",
    "genres": [
      "Horror",
      "Mystery",
      "Psychological",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A detective investigates mysterious murders where the victims are found with an X carved in their necks.",
    "director": "Kiyoshi Kurosawa",
    "cast": [
      "Koji Yakusho",
      "Masato Hagiwara"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Kiyoshi Kurosawa.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Kiyoshi Kurosawa.",
    "similarTags": [
      "Kiyoshi",
      "Mystery",
      "Psychological"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹134 Crore",
    "revenue": "₹247 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "japanese-audition",
    "title": "Audition",
    "year": 1999,
    "runtime": "1h 55m",
    "genres": [
      "Horror",
      "Psychological",
      "Thriller",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A widower holds fake auditions to find a new wife, falling in love with a mysterious girl with a dark past.",
    "director": "Takashi Miike",
    "cast": [
      "Ryo Ishibashi",
      "Eihi Shiina"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Takashi Miike.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Horror masterpiece directed by Takashi Miike.",
    "similarTags": [
      "Takashi",
      "Psychological",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Psychological"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹46 Crore",
    "revenue": "₹207 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "japanese-battle-royale",
    "title": "Battle Royale",
    "year": 2000,
    "runtime": "1h 54m",
    "genres": [
      "Action",
      "Thriller",
      "Survival",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "Junior high students are sent to a deserted island to fight to the death under a government act.",
    "director": "Kinji Fukasaku",
    "cast": [
      "Tatsuya Fujiwara",
      "Aki Maeda"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Kinji Fukasaku.",
    "whyRecommended": "Top recommendation from Japanese cinema. A high-quality Action masterpiece directed by Kinji Fukasaku.",
    "similarTags": [
      "Kinji",
      "Thriller",
      "Survival"
    ],
    "moods": [
      "✨ Action",
      "🔥 Thriller"
    ],
    "language": "Japanese",
    "country": "Japan",
    "budget": "₹113 Crore",
    "revenue": "₹336 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-pan-labyrinth",
    "title": "Pan's Labyrinth",
    "year": 2006,
    "runtime": "1h 58m",
    "genres": [
      "Fantasy",
      "Drama",
      "History",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A young girl in fascist Spain escapes her cruel stepfather, entering a mysterious fantasy labyrinth.",
    "director": "Guillermo del Toro",
    "cast": [
      "Ivana Baquero",
      "Sergi López"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Fantasy masterpiece directed by Guillermo del Toro.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Fantasy masterpiece directed by Guillermo del Toro.",
    "similarTags": [
      "Guillermo",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Fantasy",
      "🔥 Drama"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹127 Crore",
    "revenue": "₹222 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-roma",
    "title": "Roma",
    "year": 2018,
    "runtime": "2h 15m",
    "genres": [
      "Drama",
      "History",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "The life story of a live-in housekeeper in a middle-class neighborhood of Mexico City.",
    "director": "Alfonso Cuarón",
    "cast": [
      "Yalitza Aparicio",
      "Marina de Tavira"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alfonso Cuarón.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alfonso Cuarón.",
    "similarTags": [
      "Alfonso",
      "History",
      "Adventure"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Spanish",
    "country": "Mexico",
    "budget": "₹62 Crore",
    "revenue": "₹133 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "spanish-secret-eyes",
    "title": "The Secret in Their Eyes",
    "year": 2009,
    "runtime": "2h 9m",
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "A retired investigator writes a novel about an unsolved rape and murder case that haunts him.",
    "director": "Juan José Campanella",
    "cast": [
      "Ricardo Darín",
      "Soledad Villamil"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Crime masterpiece directed by Juan José Campanella.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Crime masterpiece directed by Juan José Campanella.",
    "similarTags": [
      "Juan",
      "Drama",
      "Mystery"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "Spanish",
    "country": "Argentina",
    "budget": "₹45 Crore",
    "revenue": "₹68 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-open-eyes",
    "title": "Open Your Eyes",
    "year": 1997,
    "runtime": "1h 59m",
    "genres": [
      "Sci-Fi",
      "Drama",
      "Psychological",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A handsome man is disfigured in a car crash, finding himself in a dream-like state of hallucinations.",
    "director": "Alejandro Amenábar",
    "cast": [
      "Eduardo Noriega",
      "Penélope Cruz"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Alejandro Amenábar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Alejandro Amenábar.",
    "similarTags": [
      "Alejandro",
      "Drama",
      "Psychological"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Drama"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹58 Crore",
    "revenue": "₹443 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "spanish-skin-live-in",
    "title": "The Skin I Live In",
    "year": 2011,
    "runtime": "2h 0m",
    "genres": [
      "Thriller",
      "Horror",
      "Psychological",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "A plastic surgeon creates a synthetic skin resistant to burns, keeping a mysterious woman captive.",
    "director": "Pedro Almodóvar",
    "cast": [
      "Antonio Banderas",
      "Elena Anaya"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Pedro Almodóvar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Pedro Almodóvar.",
    "similarTags": [
      "Pedro",
      "Horror",
      "Psychological"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Horror"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹137 Crore",
    "revenue": "₹408 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-volver",
    "title": "Volver",
    "year": 2006,
    "runtime": "2h 1m",
    "genres": [
      "Drama",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A mother returns to her native village as a ghost to comfort her two daughters after a tragedy.",
    "director": "Pedro Almodóvar",
    "cast": [
      "Penélope Cruz",
      "Carmen Maura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "similarTags": [
      "Pedro",
      "Comedy",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Comedy"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹63 Crore",
    "revenue": "₹214 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-talk-her",
    "title": "Talk to Her",
    "year": 2002,
    "runtime": "1h 52m",
    "genres": [
      "Drama",
      "Romance",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "Two men share an unlikely bond while caring for two women in comas at a private clinic.",
    "director": "Pedro Almodóvar",
    "cast": [
      "Javier Cámara",
      "Darío Grandinetti"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "similarTags": [
      "Pedro",
      "Romance",
      "Crime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹101 Crore",
    "revenue": "₹166 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-pain-glory",
    "title": "Pain and Glory",
    "year": 2019,
    "runtime": "1h 53m",
    "genres": [
      "Drama",
      "Biography",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "A retired film director recalls his childhood and past relationships during a physical decline.",
    "director": "Pedro Almodóvar",
    "cast": [
      "Antonio Banderas",
      "Penélope Cruz"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Pedro Almodóvar.",
    "similarTags": [
      "Pedro",
      "Biography",
      "Documentary"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹113 Crore",
    "revenue": "₹72 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-wild-tales",
    "title": "Wild Tales",
    "year": 2014,
    "runtime": "2h 2m",
    "genres": [
      "Comedy",
      "Drama",
      "Crime",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "Six standalone stories of violence and revenge, detailing people pushed to their limits.",
    "director": "Damián Szifron",
    "cast": [
      "Ricardo Darín",
      "Oscar Martínez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Damián Szifron.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Damián Szifron.",
    "similarTags": [
      "Damián",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "Spanish",
    "country": "Argentina",
    "budget": "₹80 Crore",
    "revenue": "₹415 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "spanish-amores-perros",
    "title": "Amores Perros",
    "year": 2000,
    "runtime": "2h 34m",
    "genres": [
      "Drama",
      "Crime",
      "Family",
      "Romance",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A tragic car crash in Mexico City connects three stories of dog fights and personal loss.",
    "director": "Alejandro González Iñárritu",
    "cast": [
      "Emilio Echevarría",
      "Gael García Bernal"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro González Iñárritu.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro González Iñárritu.",
    "similarTags": [
      "Alejandro",
      "Crime",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "Spanish",
    "country": "Mexico",
    "budget": "₹35 Crore",
    "revenue": "₹426 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-y-tu-mama",
    "title": "Y Tu Mamá También",
    "year": 2001,
    "runtime": "1h 46m",
    "genres": [
      "Drama",
      "Romance",
      "Comedy",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "Two teenage boys embark on a road trip with a middle-aged woman, facing sexual tensions.",
    "director": "Alfonso Cuarón",
    "cast": [
      "Gael García Bernal",
      "Diego Luna"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alfonso Cuarón.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alfonso Cuarón.",
    "similarTags": [
      "Alfonso",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "Spanish",
    "country": "Mexico",
    "budget": "₹91 Crore",
    "revenue": "₹202 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-rec",
    "title": "Rec",
    "year": 2007,
    "runtime": "1h 18m",
    "genres": [
      "Horror",
      "Thriller",
      "Survival",
      "History",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A reporter and a camera operator follow firefighters into an apartment building quarantined due to a virus.",
    "director": "Jaume Balagueró",
    "cast": [
      "Manuela Velasco",
      "Ferran Terraza"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Jaume Balagueró.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Jaume Balagueró.",
    "similarTags": [
      "Jaume",
      "Thriller",
      "Survival"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹31 Crore",
    "revenue": "₹230 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-orphanage",
    "title": "The Orphanage",
    "year": 2007,
    "runtime": "1h 45m",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "A woman buys her childhood orphanage home to care for disabled children, until her son disappears.",
    "director": "J.A. Bayona",
    "cast": [
      "Belén Rueda",
      "Fernando Cayo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by J.A. Bayona.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by J.A. Bayona.",
    "similarTags": [
      "J.A.",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Mystery"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹39 Crore",
    "revenue": "₹142 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-platform",
    "title": "The Platform",
    "year": 2019,
    "runtime": "1h 34m",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Survival",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A vertical prison tower with one food platform descending through levels, exposing greed.",
    "director": "Galder Gaztelu-Urrutia",
    "cast": [
      "Ivan Massagué",
      "Zorion Eguileor"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Galder Gaztelu-Urrutia.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Galder Gaztelu-Urrutia.",
    "similarTags": [
      "Galder",
      "Thriller",
      "Survival"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹123 Crore",
    "revenue": "₹372 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-mirage",
    "title": "Mirage",
    "year": 2018,
    "runtime": "2h 8m",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Time Travel",
      "Musical",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "A space-time glitch allows a mother to save a boy's life 25 years ago, but she loses her daughter.",
    "director": "Oriol Paulo",
    "cast": [
      "Adriana Ugarte",
      "Chino Darín"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Oriol Paulo.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Oriol Paulo.",
    "similarTags": [
      "Oriol",
      "Thriller",
      "Time Travel"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹134 Crore",
    "revenue": "₹125 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "spanish-invisible-guest",
    "title": "The Invisible Guest",
    "year": 2016,
    "runtime": "1h 46m",
    "genres": [
      "Thriller",
      "Mystery",
      "Crime",
      "Romance",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A wealthy businessman hires a veteran lawyer to clear his name after waking up next to a corpse.",
    "director": "Oriol Paulo",
    "cast": [
      "Mario Casas",
      "Ana Wagener"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Oriol Paulo.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Oriol Paulo.",
    "similarTags": [
      "Oriol",
      "Mystery",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹65 Crore",
    "revenue": "₹64 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-toc-toc",
    "title": "Toc Toc",
    "year": 2017,
    "runtime": "1h 36m",
    "genres": [
      "Comedy",
      "Family",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A group of patients with OCD wait for a doctor whose flight is delayed, trying to help each other.",
    "director": "Vicente Villanueva",
    "cast": [
      "Julián Villagrán",
      "Alexandra Jiménez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Vicente Villanueva.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Vicente Villanueva.",
    "similarTags": [
      "Vicente",
      "Family",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Family"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹121 Crore",
    "revenue": "₹354 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-cell-211",
    "title": "Cell 211",
    "year": 2009,
    "runtime": "1h 53m",
    "genres": [
      "Action",
      "Crime",
      "Thriller",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "A new prison guard pretends to be an inmate to survive a sudden prison riot.",
    "director": "Daniel Monzón",
    "cast": [
      "Luis Tosar",
      "Alberto Ammann"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Action masterpiece directed by Daniel Monzón.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Action masterpiece directed by Daniel Monzón.",
    "similarTags": [
      "Daniel",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "✨ Action",
      "🔥 Crime"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹45 Crore",
    "revenue": "₹70 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-marshland",
    "title": "Marshland",
    "year": 2014,
    "runtime": "1h 45m",
    "genres": [
      "Crime",
      "Thriller",
      "Noir",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "Two detectives in 1980 visit a remote marshland village to solve the murder of two sisters.",
    "director": "Alberto Rodríguez",
    "cast": [
      "Raúl Arévalo",
      "Javier Gutiérrez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Crime masterpiece directed by Alberto Rodríguez.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Crime masterpiece directed by Alberto Rodríguez.",
    "similarTags": [
      "Alberto",
      "Thriller",
      "Noir"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹31 Crore",
    "revenue": "₹176 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-holy-family",
    "title": "Holy Family",
    "year": 2022,
    "runtime": "2h 0m",
    "genres": [
      "Drama",
      "Thriller",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A mother hides a dark secret in Madrid, where a new family threatens to expose her past.",
    "director": "Manolo Caro",
    "cast": [
      "Najwa Nimri",
      "Carla Campra"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Manolo Caro.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Manolo Caro.",
    "similarTags": [
      "Manolo",
      "Thriller",
      "Suspense"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹81 Crore",
    "revenue": "₹338 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-biutiful",
    "title": "Biutiful",
    "year": 2010,
    "runtime": "2h 28m",
    "genres": [
      "Drama",
      "Fantasy",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "The struggle of a terminally ill single father who communicates with spirits, trying to save his kids.",
    "director": "Alejandro González Iñárritu",
    "cast": [
      "Javier Bardem",
      "Maricel Álvarez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro González Iñárritu.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro González Iñárritu.",
    "similarTags": [
      "Alejandro",
      "Fantasy",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Fantasy"
    ],
    "language": "Spanish",
    "country": "Mexico",
    "budget": "₹83 Crore",
    "revenue": "₹172 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-sea-inside",
    "title": "The Sea Inside",
    "year": 2004,
    "runtime": "2h 5m",
    "genres": [
      "Drama",
      "Biography",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "The real-life story of Ramon Sampedro, who waged a thirty-year campaign to win his right to die.",
    "director": "Alejandro Amenábar",
    "cast": [
      "Javier Bardem",
      "Belén Rueda"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro Amenábar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Alejandro Amenábar.",
    "similarTags": [
      "Alejandro",
      "Biography",
      "War"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹107 Crore",
    "revenue": "₹266 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-butterfly-tongue",
    "title": "Butterfly's Tongue",
    "year": 1999,
    "runtime": "1h 36m",
    "genres": [
      "Drama",
      "History",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "A young boy in Galicia bonds with his republican teacher on the eve of the Spanish Civil War.",
    "director": "José Luis Cuerda",
    "cast": [
      "Fernando Fernán Gómez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by José Luis Cuerda.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by José Luis Cuerda.",
    "similarTags": [
      "José",
      "History",
      "Western"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹102 Crore",
    "revenue": "₹343 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "spanish-thesis",
    "title": "Thesis",
    "year": 1996,
    "runtime": "2h 5m",
    "genres": [
      "Thriller",
      "Mystery",
      "Crime",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "A college student writing a thesis on violence uncovers a real snuff film ring in her university.",
    "director": "Alejandro Amenábar",
    "cast": [
      "Ana Torrent",
      "Fele Martínez"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1536768139911-e290a59002e4?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Alejandro Amenábar.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Alejandro Amenábar.",
    "similarTags": [
      "Alejandro",
      "Mystery",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹37 Crore",
    "revenue": "₹62 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-devils-backbone",
    "title": "The Devil's Backbone",
    "year": 2001,
    "runtime": "1h 46m",
    "genres": [
      "Horror",
      "Fantasy",
      "History",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "A young boy arrives at a remote orphanage during the Spanish Civil War, meeting a ghost child.",
    "director": "Guillermo del Toro",
    "cast": [
      "Fernando Tielve",
      "Federico Luppi"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Guillermo del Toro.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Guillermo del Toro.",
    "similarTags": [
      "Guillermo",
      "Fantasy",
      "History"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Fantasy"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹103 Crore",
    "revenue": "₹104 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "spanish-timecrimes",
    "title": "Timecrimes",
    "year": 2007,
    "runtime": "1h 32m",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Time Travel",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A man accidentally steps into a time machine, escaping from a masked killer who might be himself.",
    "director": "Nacho Vigalondo",
    "cast": [
      "Karra Elejalde",
      "Candela Fernández"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Nacho Vigalondo.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by Nacho Vigalondo.",
    "similarTags": [
      "Nacho",
      "Thriller",
      "Time Travel"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹41 Crore",
    "revenue": "₹248 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-julias-eyes",
    "title": "Julia's Eyes",
    "year": 2010,
    "runtime": "1h 52m",
    "genres": [
      "Thriller",
      "Mystery",
      "Horror",
      "Noir",
      "Animation",
      "Drama",
      "Musical"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A woman suffering from a degenerative eye disease investigates the suicide of her blind sister.",
    "director": "Guillem Morales",
    "cast": [
      "Belén Rueda",
      "Lluís Homar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Guillem Morales.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Guillem Morales.",
    "similarTags": [
      "Guillem",
      "Mystery",
      "Horror"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹30 Crore",
    "revenue": "₹351 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "spanish-sleep-tight",
    "title": "Sleep Tight",
    "year": 2011,
    "runtime": "1h 42m",
    "genres": [
      "Thriller",
      "Psychological",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "A creepy apartment building concierge stalks a happy tenant, trying to destroy her life.",
    "director": "Jaume Balagueró",
    "cast": [
      "Luis Tosar",
      "Marta Etura"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Jaume Balagueró.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Thriller masterpiece directed by Jaume Balagueró.",
    "similarTags": [
      "Jaume",
      "Psychological",
      "Survival"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Psychological"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹46 Crore",
    "revenue": "₹455 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "spanish-even-rain",
    "title": "Even the Rain",
    "year": 2010,
    "runtime": "1h 43m",
    "genres": [
      "Drama",
      "History",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "A film crew visiting Bolivia during water riots faces conflicts over native exploitation.",
    "director": "Icíar Bollaín",
    "cast": [
      "Gael García Bernal",
      "Luis Tosar"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Icíar Bollaín.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Icíar Bollaín.",
    "similarTags": [
      "Icíar",
      "History",
      "Space"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹114 Crore",
    "revenue": "₹237 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "spanish-method",
    "title": "The Method",
    "year": 2005,
    "runtime": "1h 55m",
    "genres": [
      "Drama",
      "Thriller",
      "Time Travel",
      "Comedy",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "Seven job candidates undergo a psychological corporate evaluation test inside an office.",
    "director": "Marcelo Piñeyro",
    "cast": [
      "Eduardo Noriega",
      "Najwa Nimri"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Marcelo Piñeyro.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Marcelo Piñeyro.",
    "similarTags": [
      "Marcelo",
      "Thriller",
      "Time Travel"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹81 Crore",
    "revenue": "₹354 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "spanish-common-wealth",
    "title": "Common Wealth",
    "year": 2000,
    "runtime": "1h 50m",
    "genres": [
      "Comedy",
      "Crime",
      "Action",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A real estate agent finds 300 million pesetas in a deleted tenant's apartment, escaping neighbors.",
    "director": "Álex de la Iglesia",
    "cast": [
      "Carmen Maura",
      "Eduardo Antuña"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Álex de la Iglesia.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Comedy masterpiece directed by Álex de la Iglesia.",
    "similarTags": [
      "Álex",
      "Crime",
      "Action"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Crime"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹29 Crore",
    "revenue": "₹420 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "spanish-veronica",
    "title": "Verónica",
    "year": 2017,
    "runtime": "1h 45m",
    "genres": [
      "Horror",
      "Thriller",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "A teenage girl in Madrid is haunted by a dark presence after using a Ouija board with friends.",
    "director": "Paco Plaza",
    "cast": [
      "Sandra Escacena",
      "Bruna González"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Paco Plaza.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Horror masterpiece directed by Paco Plaza.",
    "similarTags": [
      "Paco",
      "Thriller",
      "Adventure"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹82 Crore",
    "revenue": "₹251 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "spanish-society-snow",
    "title": "Society of the Snow",
    "year": 2023,
    "runtime": "2h 24m",
    "genres": [
      "Drama",
      "Biography",
      "Survival",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "The survival story of a Uruguayan rugby team whose plane crashed in the Andes in 1972.",
    "director": "J.A. Bayona",
    "cast": [
      "Enzo Vogrincic",
      "Agustín Pardella"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by J.A. Bayona.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by J.A. Bayona.",
    "similarTags": [
      "J.A.",
      "Biography",
      "Survival"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹68 Crore",
    "revenue": "₹277 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "spanish-beasts",
    "title": "The Beasts",
    "year": 2022,
    "runtime": "2h 17m",
    "genres": [
      "Drama",
      "Thriller",
      "Crime",
      "Anime",
      "Family",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A French couple settles in a Galician village, facing severe hostility from their neighbors.",
    "director": "Rodrigo Sorogoyen",
    "cast": [
      "Denis Ménochet",
      "Marina Foïs"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Rodrigo Sorogoyen.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Drama masterpiece directed by Rodrigo Sorogoyen.",
    "similarTags": [
      "Rodrigo",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹68 Crore",
    "revenue": "₹307 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "spanish-bird-box-barcelona",
    "title": "Bird Box Barcelona",
    "year": 2023,
    "runtime": "1h 51m",
    "genres": [
      "Sci-Fi",
      "Thriller",
      "Survival",
      "Biography",
      "Fantasy",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A father fights to survive on the deserted streets of Barcelona after a mysterious force wipes out humanity.",
    "director": "David Pastor",
    "cast": [
      "Mario Casas",
      "Georgina Campbell"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by David Pastor.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Sci-Fi masterpiece directed by David Pastor.",
    "similarTags": [
      "David",
      "Thriller",
      "Survival"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Thriller"
    ],
    "language": "Spanish",
    "country": "Spain",
    "budget": "₹24 Crore",
    "revenue": "₹193 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "spanish-el-gringo",
    "title": "El Gringo",
    "year": 2012,
    "runtime": "1h 40m",
    "genres": [
      "Action",
      "Western",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "A man crosses into Mexico with a bag of cash, facing a shootout in a remote town.",
    "director": "Eduardo Rodriguez",
    "cast": [
      "Scott Adkins",
      "Christian Slater"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from Spanish cinema. A high-quality Action masterpiece directed by Eduardo Rodriguez.",
    "whyRecommended": "Top recommendation from Spanish cinema. A high-quality Action masterpiece directed by Eduardo Rodriguez.",
    "similarTags": [
      "Eduardo",
      "Western",
      "Comedy"
    ],
    "moods": [
      "✨ Action",
      "🔥 Western"
    ],
    "language": "Spanish",
    "country": "Mexico",
    "budget": "₹138 Crore",
    "revenue": "₹115 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "french-amelie",
    "title": "Amélie",
    "year": 2001,
    "runtime": "2h 2m",
    "genres": [
      "Comedy",
      "Romance",
      "Fantasy",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 80,
    "matchScore": 90,
    "synopsis": "A bubbly waitress in Paris decides to orchestrate the lives of people around her, falling in love.",
    "director": "Jean-Pierre Jeunet",
    "cast": [
      "Audrey Tautou",
      "Mathieu Kassovitz"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Jean-Pierre Jeunet.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Jean-Pierre Jeunet.",
    "similarTags": [
      "Jean-Pierre",
      "Romance",
      "Fantasy"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Romance"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹116 Crore",
    "revenue": "₹365 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "french-intouchables",
    "title": "The Intouchables",
    "year": 2011,
    "runtime": "1h 52m",
    "genres": [
      "Comedy",
      "Drama",
      "Biography",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 81,
    "matchScore": 91,
    "synopsis": "An unlikely friendship forms between a wealthy quadriplegic aristocrat and his streetwise caregiver.",
    "director": "Olivier Nakache",
    "cast": [
      "François Cluzet",
      "Omar Sy"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Olivier Nakache.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Olivier Nakache.",
    "similarTags": [
      "Olivier",
      "Drama",
      "Biography"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹23 Crore",
    "revenue": "₹192 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-haine",
    "title": "La Haine",
    "year": 1995,
    "runtime": "1h 38m",
    "genres": [
      "Drama",
      "Crime",
      "Noir",
      "Animation",
      "Musical",
      "Thriller"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 82,
    "matchScore": 92,
    "synopsis": "Three young friends from immigrant suburbs wander around Paris on the day after a riot.",
    "director": "Mathieu Kassovitz",
    "cast": [
      "Vincent Cassel",
      "Hubert Koundé"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Mathieu Kassovitz.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Mathieu Kassovitz.",
    "similarTags": [
      "Mathieu",
      "Crime",
      "Noir"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹29 Crore",
    "revenue": "₹254 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-portrait-lady",
    "title": "Portrait of a Lady on Fire",
    "year": 2019,
    "runtime": "2h 2m",
    "genres": [
      "Romance",
      "Drama",
      "History",
      "Anime",
      "Family",
      "War",
      "Survival"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 83,
    "matchScore": 93,
    "synopsis": "A painter is hired to paint a wedding portrait of a young countess, forming an intimate bond.",
    "director": "Céline Sciamma",
    "cast": [
      "Noémie Merlant",
      "Adèle Haenel"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Céline Sciamma.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Céline Sciamma.",
    "similarTags": [
      "Céline",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹29 Crore",
    "revenue": "₹422 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-blue-warmest",
    "title": "Blue Is the Warmest Colour",
    "year": 2013,
    "runtime": "3h 0m",
    "genres": [
      "Romance",
      "Drama",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 84,
    "matchScore": 94,
    "synopsis": "The life and relationship of a French girl who falls in love with a blue-haired art student.",
    "director": "Abdellatif Kechiche",
    "cast": [
      "Léa Seydoux",
      "Adèle Exarchopoulos"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Abdellatif Kechiche.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Abdellatif Kechiche.",
    "similarTags": [
      "Abdellatif",
      "Drama",
      "Biography"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹85 Crore",
    "revenue": "₹348 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "french-artist",
    "title": "The Artist",
    "year": 2011,
    "runtime": "1h 40m",
    "genres": [
      "Romance",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 85,
    "matchScore": 95,
    "synopsis": "A silent film star faces the transition to talking pictures in Hollywood, falling in love with a dancer.",
    "director": "Michel Hazanavicius",
    "cast": [
      "Jean Dujardin",
      "Bérénice Bejo"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Michel Hazanavicius.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Michel Hazanavicius.",
    "similarTags": [
      "Michel",
      "Comedy",
      "History"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Comedy"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹95 Crore",
    "revenue": "₹248 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-breathless",
    "title": "Breathless",
    "year": 1960,
    "runtime": "1h 30m",
    "genres": [
      "Drama",
      "Crime",
      "Noir",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 86,
    "matchScore": 96,
    "synopsis": "A petty criminal steals a car, shoots an officer, and hides with an American journalism student.",
    "director": "Jean-Luc Godard",
    "cast": [
      "Jean-Paul Belmondo",
      "Jean Seberg"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jean-Luc Godard.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jean-Luc Godard.",
    "similarTags": [
      "Jean-Luc",
      "Crime",
      "Noir"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹58 Crore",
    "revenue": "₹107 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "french-four-hundred-blows",
    "title": "The 400 Blows",
    "year": 1959,
    "runtime": "1h 39m",
    "genres": [
      "Drama",
      "Crime",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 87,
    "matchScore": 97,
    "synopsis": "A young boy in Paris turns to petty crime and delinquency to escape his neglectful parents.",
    "director": "François Truffaut",
    "cast": [
      "Jean-Pierre Léaud",
      "Claire Maurier"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by François Truffaut.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by François Truffaut.",
    "similarTags": [
      "François",
      "Crime",
      "Documentary"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹63 Crore",
    "revenue": "₹64 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-anatomy-fall",
    "title": "Anatomy of a Fall",
    "year": 2023,
    "runtime": "2h 31m",
    "genres": [
      "Drama",
      "Crime",
      "Mystery",
      "Musical",
      "Thriller",
      "Noir",
      "Animation"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 88,
    "matchScore": 98,
    "synopsis": "A woman is accused of murder after her husband falls to his death in a remote chalet.",
    "director": "Justine Triet",
    "cast": [
      "Sandra Hüller",
      "Swann Arlaud"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Justine Triet.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Justine Triet.",
    "similarTags": [
      "Justine",
      "Crime",
      "Mystery"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Crime"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹129 Crore",
    "revenue": "₹232 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-rust-bone",
    "title": "Rust and Bone",
    "year": 2012,
    "runtime": "2h 0m",
    "genres": [
      "Drama",
      "Romance",
      "Family",
      "War",
      "Survival",
      "Anime"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 89,
    "matchScore": 99,
    "synopsis": "A single father forms a bond with a killer whale trainer who lost her legs in an accident.",
    "director": "Jacques Audiard",
    "cast": [
      "Marion Cotillard",
      "Matthias Schoenaerts"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jacques Audiard.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jacques Audiard.",
    "similarTags": [
      "Jacques",
      "Romance",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹50 Crore",
    "revenue": "₹107 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "french-prophet",
    "title": "A Prophet",
    "year": 2009,
    "runtime": "2h 35m",
    "genres": [
      "Crime",
      "Drama",
      "Thriller",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 90,
    "matchScore": 90,
    "synopsis": "An Algerian immigrant enters a French prison, rising to lead a powerful Corsican gang.",
    "director": "Jacques Audiard",
    "cast": [
      "Tahar Rahim",
      "Niels Arestrup"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Crime masterpiece directed by Jacques Audiard.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Crime masterpiece directed by Jacques Audiard.",
    "similarTags": [
      "Jacques",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹114 Crore",
    "revenue": "₹289 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "french-climax",
    "title": "Climax",
    "year": 2018,
    "runtime": "1h 37m",
    "genres": [
      "Horror",
      "Musical",
      "Psychological",
      "History",
      "Sports",
      "Time Travel",
      "Comedy"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 91,
    "matchScore": 91,
    "synopsis": "A dance troop's rehearsal turns into a hallucinatory nightmare after their sangria is spiked.",
    "director": "Gaspar Noé",
    "cast": [
      "Sofia Boutella",
      "Romain Guillermic"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Gaspar Noé.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Gaspar Noé.",
    "similarTags": [
      "Gaspar",
      "Musical",
      "Psychological"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Musical"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹77 Crore",
    "revenue": "₹326 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-enter-void",
    "title": "Enter the Void",
    "year": 2009,
    "runtime": "2h 41m",
    "genres": [
      "Sci-Fi",
      "Drama",
      "Psychological",
      "Horror",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 92,
    "matchScore": 92,
    "synopsis": "A drug dealer is shot by the police in Tokyo, traveling through the city as a spirit.",
    "director": "Gaspar Noé",
    "cast": [
      "Nathaniel Brown",
      "Paz de la Huerta"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Sci-Fi masterpiece directed by Gaspar Noé.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Sci-Fi masterpiece directed by Gaspar Noé.",
    "similarTags": [
      "Gaspar",
      "Drama",
      "Psychological"
    ],
    "moods": [
      "✨ Sci-Fi",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹20 Crore",
    "revenue": "₹155 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "french-raw-french",
    "title": "Raw",
    "year": 2016,
    "runtime": "1h 39m",
    "genres": [
      "Horror",
      "Drama",
      "Thriller",
      "Mystery",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 93,
    "matchScore": 93,
    "synopsis": "A young vegetarian veterinary student develops a craving for raw meat after a hazing ritual.",
    "director": "Julia Ducournau",
    "cast": [
      "Garance Marillier",
      "Ella Rumpf"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Julia Ducournau.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Julia Ducournau.",
    "similarTags": [
      "Julia",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹33 Crore",
    "revenue": "₹410 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-titane",
    "title": "Titane",
    "year": 2021,
    "runtime": "1h 48m",
    "genres": [
      "Horror",
      "Thriller",
      "Sci-Fi",
      "Musical",
      "Noir",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 94,
    "matchScore": 94,
    "synopsis": "A serial killer who has a titanium plate in her skull takes the place of a firefighter's missing son.",
    "director": "Julia Ducournau",
    "cast": [
      "Vincent Lindon",
      "Agathe Rousselle"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Julia Ducournau.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Horror masterpiece directed by Julia Ducournau.",
    "similarTags": [
      "Julia",
      "Thriller",
      "Sci-Fi"
    ],
    "moods": [
      "✨ Horror",
      "🔥 Thriller"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹30 Crore",
    "revenue": "₹397 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "french-irreversible",
    "title": "Irreversible",
    "year": 2002,
    "runtime": "1h 37m",
    "genres": [
      "Thriller",
      "Drama",
      "Crime",
      "Romance",
      "War",
      "Survival",
      "Anime",
      "Family"
    ],
    "imdbRating": 8.9,
    "rottenTomatoesScore": 95,
    "matchScore": 95,
    "synopsis": "A boyfriend set out to exact revenge for a brutal assault on his lover in Paris.",
    "director": "Gaspar Noé",
    "cast": [
      "Monica Bellucci",
      "Vincent Cassel"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Gaspar Noé.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Gaspar Noé.",
    "similarTags": [
      "Gaspar",
      "Drama",
      "Crime"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹81 Crore",
    "revenue": "₹344 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-samourai",
    "title": "Le Samouraï",
    "year": 1967,
    "runtime": "1h 45m",
    "genres": [
      "Crime",
      "Thriller",
      "Noir",
      "Sci-Fi",
      "Western",
      "Space",
      "Biography",
      "Fantasy"
    ],
    "imdbRating": 9,
    "rottenTomatoesScore": 96,
    "matchScore": 96,
    "synopsis": "A professional hitman is witnessed at a crime scene, escaping both the police and his employers.",
    "director": "Jean-Pierre Melville",
    "cast": [
      "Alain Delon",
      "François Périer"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Crime masterpiece directed by Jean-Pierre Melville.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Crime masterpiece directed by Jean-Pierre Melville.",
    "similarTags": [
      "Jean-Pierre",
      "Thriller",
      "Noir"
    ],
    "moods": [
      "✨ Crime",
      "🔥 Thriller"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹53 Crore",
    "revenue": "₹132 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-jules-jim",
    "title": "Jules and Jim",
    "year": 1962,
    "runtime": "1h 42m",
    "genres": [
      "Romance",
      "Drama",
      "Sports",
      "Psychological",
      "Time Travel",
      "Comedy",
      "History"
    ],
    "imdbRating": 9.1,
    "rottenTomatoesScore": 97,
    "matchScore": 97,
    "synopsis": "Two friends fall in love with the same bohemian woman before and after the Great War.",
    "director": "François Truffaut",
    "cast": [
      "Jeanne Moreau",
      "Oskar Werner"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by François Truffaut.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by François Truffaut.",
    "similarTags": [
      "François",
      "Drama",
      "Sports"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹61 Crore",
    "revenue": "₹290 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "french-delicatessen",
    "title": "Delicatessen",
    "year": 1991,
    "runtime": "1h 39m",
    "genres": [
      "Comedy",
      "Sci-Fi",
      "Black Comedy",
      "Superhero",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror"
    ],
    "imdbRating": 9.2,
    "rottenTomatoesScore": 80,
    "matchScore": 98,
    "synopsis": "A young clown takes a job in an apartment building owned by a butcher who feeds tenants to others.",
    "director": "Marc Caro",
    "cast": [
      "Dominique Pinon",
      "Marie-Laure Dougnac"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Marc Caro.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Comedy masterpiece directed by Marc Caro.",
    "similarTags": [
      "Marc",
      "Sci-Fi",
      "Black Comedy"
    ],
    "moods": [
      "✨ Comedy",
      "🔥 Sci-Fi"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹113 Crore",
    "revenue": "₹176 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-chorus",
    "title": "The Chorus",
    "year": 2004,
    "runtime": "1h 37m",
    "genres": [
      "Drama",
      "Musical",
      "Family",
      "Suspense",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery"
    ],
    "imdbRating": 9.3,
    "rottenTomatoesScore": 81,
    "matchScore": 99,
    "synopsis": "A boarding school music teacher helps troubled students form a choir, changing their lives.",
    "director": "Christophe Barratier",
    "cast": [
      "Gérard Jugnot",
      "François Berléand"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Christophe Barratier.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Christophe Barratier.",
    "similarTags": [
      "Christophe",
      "Musical",
      "Family"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Musical"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹82 Crore",
    "revenue": "₹433 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "french-amour",
    "title": "Amour",
    "year": 2012,
    "runtime": "2h 7m",
    "genres": [
      "Drama",
      "Romance",
      "Thriller",
      "Noir",
      "Animation",
      "Musical"
    ],
    "imdbRating": 9.4,
    "rottenTomatoesScore": 82,
    "matchScore": 90,
    "synopsis": "An elderly couple faces a test of love when the wife suffers a series of strokes.",
    "director": "Michael Haneke",
    "cast": [
      "Jean-Louis Trintignant",
      "Emmanuelle Riva"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Michael Haneke.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Michael Haneke.",
    "similarTags": [
      "Michael",
      "Romance",
      "Thriller"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹23 Crore",
    "revenue": "₹230 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-cache",
    "title": "Caché",
    "year": 2005,
    "runtime": "1h 57m",
    "genres": [
      "Thriller",
      "Mystery",
      "Psychological",
      "War",
      "Survival",
      "Anime",
      "Family",
      "Romance"
    ],
    "imdbRating": 7.4,
    "rottenTomatoesScore": 83,
    "matchScore": 91,
    "synopsis": "A family receives mysterious videotapes showing their daily lives, suggesting a stalker.",
    "director": "Michael Haneke",
    "cast": [
      "Daniel Auteuil",
      "Juliette Binoche"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Michael Haneke.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Michael Haneke.",
    "similarTags": [
      "Michael",
      "Mystery",
      "Psychological"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Mystery"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹105 Crore",
    "revenue": "₹176 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-jean-florette",
    "title": "Jean de Florette",
    "year": 1986,
    "runtime": "2h 0m",
    "genres": [
      "Drama",
      "History",
      "Western",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi"
    ],
    "imdbRating": 7.5,
    "rottenTomatoesScore": 84,
    "matchScore": 92,
    "synopsis": "Two greedy farmers block a spring to force an immigrant tax collector off his land.",
    "director": "Claude Berri",
    "cast": [
      "Yves Montand",
      "Gérard Depardieu"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Claude Berri.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Claude Berri.",
    "similarTags": [
      "Claude",
      "History",
      "Western"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹23 Crore",
    "revenue": "₹406 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-manon-sources",
    "title": "Manon des Sources",
    "year": 1986,
    "runtime": "1h 53m",
    "genres": [
      "Drama",
      "History",
      "Psychological",
      "Time Travel",
      "Comedy",
      "Sports"
    ],
    "imdbRating": 7.6,
    "rottenTomatoesScore": 85,
    "matchScore": 93,
    "synopsis": "The daughter of Jean de Florette returns to exact revenge on the farmers who killed her father.",
    "director": "Claude Berri",
    "cast": [
      "Emmanuelle Béart",
      "Yves Montand"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Claude Berri.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Claude Berri.",
    "similarTags": [
      "Claude",
      "History",
      "Psychological"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹84 Crore",
    "revenue": "₹357 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "french-vie-en-rose",
    "title": "La Vie en Rose",
    "year": 2007,
    "runtime": "2h 20m",
    "genres": [
      "Drama",
      "Biography",
      "Musical",
      "Mystery Thriller",
      "Action",
      "Crime",
      "Horror",
      "Superhero"
    ],
    "imdbRating": 7.7,
    "rottenTomatoesScore": 86,
    "matchScore": 94,
    "synopsis": "The tragic biographical story of Edith Piaf, chronicling her rise from slums to iconic singer.",
    "director": "Olivier Dahan",
    "cast": [
      "Marion Cotillard",
      "Sylvie Testud"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Olivier Dahan.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Olivier Dahan.",
    "similarTags": [
      "Olivier",
      "Biography",
      "Musical"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹62 Crore",
    "revenue": "₹79 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "french-belle-jour",
    "title": "Belle de Jour",
    "year": 1967,
    "runtime": "1h 40m",
    "genres": [
      "Drama",
      "Romance",
      "Cyberpunk",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense"
    ],
    "imdbRating": 7.8,
    "rottenTomatoesScore": 87,
    "matchScore": 95,
    "synopsis": "A wealthy young housewife decides to spend her weekday afternoons working in a brothel.",
    "director": "Luis Buñuel",
    "cast": [
      "Catherine Deneuve",
      "Jean Sorel"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Luis Buñuel.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Luis Buñuel.",
    "similarTags": [
      "Luis",
      "Romance",
      "Cyberpunk"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹60 Crore",
    "revenue": "₹115 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  },
  {
    "id": "french-elle",
    "title": "Elle",
    "year": 2016,
    "runtime": "2h 10m",
    "genres": [
      "Thriller",
      "Crime",
      "Psychological",
      "Noir",
      "Animation",
      "Drama",
      "Musical"
    ],
    "imdbRating": 7.9,
    "rottenTomatoesScore": 88,
    "matchScore": 96,
    "synopsis": "A successful video game executive hunts the masked intruder who assaulted her in her home.",
    "director": "Paul Verhoeven",
    "cast": [
      "Isabelle Huppert",
      "Laurent Lafitte"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Paul Verhoeven.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Thriller masterpiece directed by Paul Verhoeven.",
    "similarTags": [
      "Paul",
      "Crime",
      "Psychological"
    ],
    "moods": [
      "✨ Thriller",
      "🔥 Crime"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹71 Crore",
    "revenue": "₹150 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-incendies",
    "title": "Incendies",
    "year": 2010,
    "runtime": "2h 11m",
    "genres": [
      "Drama",
      "Mystery",
      "History",
      "Survival",
      "Anime",
      "Family",
      "Romance",
      "War"
    ],
    "imdbRating": 8,
    "rottenTomatoesScore": 89,
    "matchScore": 97,
    "synopsis": "Twins travel to the Middle East to deliver letters to a father and brother they did not know existed.",
    "director": "Denis Villeneuve",
    "cast": [
      "Lubna Azabal",
      "Mélissa Désormeaux-Poulin"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Denis Villeneuve.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Denis Villeneuve.",
    "similarTags": [
      "Denis",
      "Mystery",
      "History"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Mystery"
    ],
    "language": "French",
    "country": "Canada",
    "budget": "₹99 Crore",
    "revenue": "₹172 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-gods-men",
    "title": "Of Gods and Men",
    "year": 2010,
    "runtime": "2h 2m",
    "genres": [
      "Drama",
      "History",
      "Space",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western"
    ],
    "imdbRating": 8.1,
    "rottenTomatoesScore": 90,
    "matchScore": 98,
    "synopsis": "Monks in an Algerian monastery decide to stay despite threats from fundamentalist rebels.",
    "director": "Xavier Beauvois",
    "cast": [
      "Lambert Wilson",
      "Michael Lonsdale"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Xavier Beauvois.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Xavier Beauvois.",
    "similarTags": [
      "Xavier",
      "History",
      "Space"
    ],
    "moods": [
      "✨ Drama",
      "🔥 History"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹106 Crore",
    "revenue": "₹137 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "french-belleville",
    "title": "The Triplets of Belleville",
    "year": 2003,
    "runtime": "1h 20m",
    "genres": [
      "Animation",
      "Comedy",
      "Musical",
      "Family",
      "Time Travel",
      "History",
      "Sports",
      "Psychological"
    ],
    "imdbRating": 8.2,
    "rottenTomatoesScore": 91,
    "matchScore": 99,
    "synopsis": "An elderly woman searches for her grandson who was kidnapped by mafia during the Tour de France.",
    "director": "Sylvain Chomet",
    "cast": [
      "Michel Robin",
      "Jean-Claude Donda"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Animation masterpiece directed by Sylvain Chomet.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Animation masterpiece directed by Sylvain Chomet.",
    "similarTags": [
      "Sylvain",
      "Comedy",
      "Musical"
    ],
    "moods": [
      "✨ Animation",
      "🔥 Comedy"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹94 Crore",
    "revenue": "₹119 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "V Creations",
    "reviews": []
  },
  {
    "id": "french-engagement",
    "title": "A Very Long Engagement",
    "year": 2004,
    "runtime": "2h 13m",
    "genres": [
      "Romance",
      "Drama",
      "History",
      "Action",
      "Crime",
      "Horror",
      "Superhero",
      "Mystery Thriller"
    ],
    "imdbRating": 8.3,
    "rottenTomatoesScore": 92,
    "matchScore": 90,
    "synopsis": "A young woman searches for her fiance who disappeared at the Somme during WWI.",
    "director": "Jean-Pierre Jeunet",
    "cast": [
      "Audrey Tautou",
      "Gaspard Ulliel"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Jean-Pierre Jeunet.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Romance masterpiece directed by Jean-Pierre Jeunet.",
    "similarTags": [
      "Jean-Pierre",
      "Drama",
      "History"
    ],
    "moods": [
      "✨ Romance",
      "🔥 Drama"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹41 Crore",
    "revenue": "₹186 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-diving-bell",
    "title": "The Diving Bell and the Butterfly",
    "year": 2007,
    "runtime": "1h 52m",
    "genres": [
      "Drama",
      "Biography",
      "Adventure",
      "Documentary",
      "Mystery",
      "Suspense",
      "Cyberpunk"
    ],
    "imdbRating": 8.4,
    "rottenTomatoesScore": 93,
    "matchScore": 91,
    "synopsis": "The real-life story of Jean-Dominique Bauby, who wrote his memoirs using only his left eyelid.",
    "director": "Julian Schnabel",
    "cast": [
      "Mathieu Amalric",
      "Emmanuelle Seigner"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Julian Schnabel.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Julian Schnabel.",
    "similarTags": [
      "Julian",
      "Biography",
      "Adventure"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Biography"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹121 Crore",
    "revenue": "₹264 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Filmax",
    "reviews": []
  },
  {
    "id": "french-holy-motors",
    "title": "Holy Motors",
    "year": 2012,
    "runtime": "1h 55m",
    "genres": [
      "Drama",
      "Fantasy",
      "Animation",
      "Musical",
      "Thriller",
      "Noir"
    ],
    "imdbRating": 8.5,
    "rottenTomatoesScore": 94,
    "matchScore": 92,
    "synopsis": "A man travels around Paris in a limousine, adopting different roles and personas.",
    "director": "Leos Carax",
    "cast": [
      "Denis Lavant",
      "Edith Scob"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Leos Carax.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Leos Carax.",
    "similarTags": [
      "Leos",
      "Fantasy",
      "Animation"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Fantasy"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹35 Crore",
    "revenue": "₹188 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Moho Film",
    "reviews": []
  },
  {
    "id": "french-class",
    "title": "The Class",
    "year": 2008,
    "runtime": "2h 8m",
    "genres": [
      "Drama",
      "Family",
      "Anime",
      "Romance",
      "War",
      "Survival"
    ],
    "imdbRating": 8.6,
    "rottenTomatoesScore": 95,
    "matchScore": 93,
    "synopsis": "A teacher faces challenges while managing a diverse high school classroom in Paris.",
    "director": "Laurent Cantet",
    "cast": [
      "François Bégaudeau",
      "Nassim Amrabt"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Laurent Cantet.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Laurent Cantet.",
    "similarTags": [
      "Laurent",
      "Family",
      "Anime"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Family"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹38 Crore",
    "revenue": "₹333 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Sun Pictures",
    "reviews": []
  },
  {
    "id": "french-contempt",
    "title": "Contempt",
    "year": 1963,
    "runtime": "1h 42m",
    "genres": [
      "Drama",
      "Romance",
      "Biography",
      "Fantasy",
      "Sci-Fi",
      "Western",
      "Space"
    ],
    "imdbRating": 8.7,
    "rottenTomatoesScore": 96,
    "matchScore": 94,
    "synopsis": "A marriage disintegrates during the production of a film adaptation of the Odyssey.",
    "director": "Jean-Luc Godard",
    "cast": [
      "Brigitte Bardot",
      "Michel Piccoli"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jean-Luc Godard.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Jean-Luc Godard.",
    "similarTags": [
      "Jean-Luc",
      "Romance",
      "Biography"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Romance"
    ],
    "language": "French",
    "country": "France",
    "budget": "₹39 Crore",
    "revenue": "₹240 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "KRG Studios",
    "reviews": []
  },
  {
    "id": "french-blueberry-hill",
    "title": "Blueberry Hill",
    "year": 1989,
    "runtime": "1h 35m",
    "genres": [
      "Drama",
      "Western",
      "Comedy",
      "History",
      "Sports",
      "Psychological",
      "Time Travel"
    ],
    "imdbRating": 8.8,
    "rottenTomatoesScore": 97,
    "matchScore": 95,
    "synopsis": "A Western-inspired drama set in Belgium featuring traditional cowboy culture.",
    "director": "Robbe De Hert",
    "cast": [
      "Michael Pas",
      "Babette van Veen"
    ],
    "posterUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80",
    "backdropUrl": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    "trailerId": "0vxOhge_12k",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Robbe De Hert.",
    "whyRecommended": "Top recommendation from French cinema. A high-quality Drama masterpiece directed by Robbe De Hert.",
    "similarTags": [
      "Robbe",
      "Western",
      "Comedy"
    ],
    "moods": [
      "✨ Drama",
      "🔥 Western"
    ],
    "language": "French",
    "country": "Belgium",
    "budget": "₹78 Crore",
    "revenue": "₹231 Crore",
    "tagline": "An unforgettable cinematic journey.",
    "productionCompany": "Studio Ghibli",
    "reviews": []
  }
];

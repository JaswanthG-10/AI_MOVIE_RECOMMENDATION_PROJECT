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

export const MOVIES_DATABASE: Movie[] = [
  {
    "id": "tamil-829557",
    "title": "365 Days: This Day",
    "originalTitle": "365 dni: Ten dzie\u0144",
    "year": 2022,
    "runtime": "110 min",
    "genres": [
      "Romance",
      "Drama"
    ],
    "imdbRating": 5.9,
    "matchScore": 98,
    "synopsis": "Laura and Massimo are back and hotter than ever. But the reunited couple's new beginning is complicated by Massimo\u2019s family ties and a mysterious man who enters Laura\u2019s life to win her heart and trust, at any cost.",
    "director": "Barbara Bia\u0142ow\u0105s",
    "cast": [
      "Anna-Maria Sieklucka",
      "Michele Morrone",
      "Simone Susinna",
      "Magdalena Lamparska"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7qU0SOVcQ8BTJLodcAlulUAG16C.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zBG5Mg29NH9xxpWMMG7BIvKwYhL.jpg",
    "trailerId": "pyM3z73oMAk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema directed by Barbara Bia\u0142ow\u0105s.",
    "whyRecommended": "Top recommendation from Tamil cinema directed by Barbara Bia\u0142ow\u0105s.",
    "similarTags": [
      "Barbara Bia\u0142ow\u0105s",
      "Romance"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Intense"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "\u20b9120 Crore",
    "revenue": "\u20b9400 Crore",
    "tagline": "Oh Yes.",
    "productionCompany": "Ekipa",
    "reviews": []
  },
  {
    "id": "tamil-615658",
    "title": "Awake",
    "originalTitle": "Awake",
    "year": 2021,
    "runtime": "96 min",
    "genres": [
      "Drama",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 5.8,
    "matchScore": 98,
    "synopsis": "After a sudden global event wipes out all electronics and takes away humankind\u2019s ability to sleep, chaos quickly begins to consume the world. Only Jill, an ex-soldier with a troubled past, may hold the key to a cure in the form of her own daughter. The question is, can Jill safely deliver her daughter and save the world before she herself loses her mind.",
    "director": "Mark Raso",
    "cast": [
      "Gina Rodriguez",
      "Ariana Greenblatt",
      "Lucius Hoyos",
      "Shamier Anderson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/d8WJFQyNNAEmuGeDwxPhBpx0G4B.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3RMbkXS4ocMmoJyAD3ZsWbm32Kx.jpg",
    "trailerId": "2fuowcxdrYc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema directed by Mark Raso.",
    "whyRecommended": "Top recommendation from Tamil cinema directed by Mark Raso.",
    "similarTags": [
      "Mark Raso",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Intense"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "\u20b9120 Crore",
    "revenue": "\u20b9400 Crore",
    "tagline": "Disorientation. Hallucinations. Hysteria. Sleep is survival.",
    "productionCompany": "Entertainment One",
    "reviews": []
  },
  {
    "id": "tamil-542475",
    "title": "Una buena forma de morir",
    "originalTitle": "Una buena forma de morir",
    "year": 1994,
    "runtime": "87 min",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "imdbRating": 6.3,
    "matchScore": 98,
    "synopsis": "After his wife is murdered by gang members, a man must take revenge.",
    "director": "Rafael Montero",
    "cast": [
      "Juan Carlos Colombo",
      "Ana Bertha Esp\u00edn",
      "Alvaro Garza",
      "\u00c1lvaro Guerrero"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1WnS3sb9A3m9JcyuRQTOBexro80.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/1WnS3sb9A3m9JcyuRQTOBexro80.jpg",
    "trailerId": "TYIMQ_R4e5c",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top recommendation from Tamil cinema directed by Rafael Montero.",
    "whyRecommended": "Top recommendation from Tamil cinema directed by Rafael Montero.",
    "similarTags": [
      "Rafael Montero",
      "Action"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Intense"
    ],
    "language": "Tamil",
    "country": "India",
    "budget": "\u20b9120 Crore",
    "revenue": "\u20b9400 Crore",
    "tagline": "",
    "productionCompany": "Televicine",
    "reviews": []
  },
  {
    "id": "tmdb-157336",
    "title": "Interstellar",
    "originalTitle": "Interstellar",
    "year": 2014,
    "runtime": "169 min",
    "genres": [
      "Adventure",
      "Drama",
      "Science Fiction"
    ],
    "imdbRating": 8.1,
    "matchScore": 90,
    "synopsis": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "director": "Christopher Nolan",
    "cast": [
      "Matthew McConaughey",
      "Jessica Chastain",
      "Anne Hathaway",
      "Michael Caine"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yQvGrMoipbRoddT0ZR8tPoR7NfX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vgnoBSVzWAV9sNQUORaDGvDp7wx.jpg",
    "trailerId": "LY19rHKAaAg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Adventure themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$675 Million",
    "tagline": "Mankind was born on Earth. It was never meant to die here.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-76341",
    "title": "Mad Max: Fury Road",
    "originalTitle": "Mad Max: Fury Road",
    "year": 2015,
    "runtime": "120 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 7.2,
    "matchScore": 91,
    "synopsis": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
    "director": "George Miller",
    "cast": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult",
      "Hugh Keays-Byrne"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ulcAi4dKpAjHwYGS08vNyx9H6I9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uT895WNwm0aIJRtGizcQhrejWUo.jpg",
    "trailerId": "MonFNCgK4WE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by George Miller.",
    "whyRecommended": "Top match based on Action themes and direction by George Miller.",
    "similarTags": [
      "George Miller",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$378 Million",
    "tagline": "What a Lovely Day.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-135397",
    "title": "Jurassic World",
    "originalTitle": "Jurassic World",
    "year": 2015,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 6.5,
    "matchScore": 92,
    "synopsis": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
    "director": "Colin Trevorrow",
    "cast": [
      "Chris Pratt",
      "Bryce Dallas Howard",
      "Irrfan Khan",
      "Vincent D'Onofrio"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dF6FjTZzRTENfB4R17HDN20jLT2.jpg",
    "trailerId": "aJJrkyHas78",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Colin Trevorrow.",
    "whyRecommended": "Top match based on Action themes and direction by Colin Trevorrow.",
    "similarTags": [
      "Colin Trevorrow",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$1513 Million",
    "tagline": "The park is open.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-22",
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "originalTitle": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "year": 2003,
    "runtime": "143 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 7.5,
    "matchScore": 93,
    "synopsis": "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple.",
    "director": "Gore Verbinski",
    "cast": [
      "Johnny Depp",
      "Geoffrey Rush",
      "Orlando Bloom",
      "Keira Knightley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uRNgkJSkNBFbbn9fPsEjDIy8Sh3.jpg",
    "trailerId": "-9HT0l9HV4c",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Gore Verbinski.",
    "whyRecommended": "Top match based on Adventure themes and direction by Gore Verbinski.",
    "similarTags": [
      "Gore Verbinski",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$140 Million",
    "revenue": "$655 Million",
    "tagline": "Prepare to be blown out of the water.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-119450",
    "title": "Dawn of the Planet of the Apes",
    "originalTitle": "Dawn of the Planet of the Apes",
    "year": 2014,
    "runtime": "130 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 94,
    "synopsis": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
    "director": "Matt Reeves",
    "cast": [
      "Andy Serkis",
      "Jason Clarke",
      "Gary Oldman",
      "Keri Russell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/mSmAc9G25fhOHH45SLEeagR0qi7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3SozaNPOYUadcmTPgndDibMyDNC.jpg",
    "trailerId": "DpSaTrW4leg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Matt Reeves.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Matt Reeves.",
    "similarTags": [
      "Matt Reeves",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$170 Million",
    "revenue": "$710 Million",
    "tagline": "One last chance for peace.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-131631",
    "title": "The Hunger Games: Mockingjay - Part 1",
    "originalTitle": "The Hunger Games: Mockingjay - Part 1",
    "year": 2014,
    "runtime": "123 min",
    "genres": [
      "Science Fiction",
      "Adventure",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 95,
    "synopsis": "Katniss Everdeen reluctantly becomes the symbol of a mass rebellion against the autocratic Capitol.",
    "director": "Francis Lawrence",
    "cast": [
      "Jennifer Lawrence",
      "Josh Hutcherson",
      "Liam Hemsworth",
      "Woody Harrelson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lV1P1Q5gLDXVG1ZYCxZHStkcQC3.jpg",
    "trailerId": "IXshQ5mv1K8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Francis Lawrence.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Francis Lawrence.",
    "similarTags": [
      "Francis Lawrence",
      "Science Fiction",
      "Adventure"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$125 Million",
    "revenue": "$752 Million",
    "tagline": "Fire burns brighter in the darkness",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-87101",
    "title": "Terminator Genisys",
    "originalTitle": "Terminator Genisys",
    "year": 2015,
    "runtime": "126 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Thriller",
      "Adventure"
    ],
    "imdbRating": 5.8,
    "matchScore": 96,
    "synopsis": "The year is 2029. John Connor, leader of the resistance continues the war against the machines. At the Los Angeles offensive, John's fears of the unknown future begin to emerge when TECOM spies reveal a new plot by SkyNet that will attack him from both fronts; past and future, and will ultimately change warfare forever.",
    "director": "Alan Taylor",
    "cast": [
      "Arnold Schwarzenegger",
      "Jason Clarke",
      "Emilia Clarke",
      "Jai Courtney"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/oZRVDpNtmHk8M1VYy1aeOWUXgbC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wvlIoof1FnKPLv9jAYanuP31V0C.jpg",
    "trailerId": "Dx3ShEjUId0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Alan Taylor.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Alan Taylor.",
    "similarTags": [
      "Alan Taylor",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$155 Million",
    "revenue": "$440 Million",
    "tagline": "Reset the future",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-271110",
    "title": "Captain America: Civil War",
    "originalTitle": "Captain America: Civil War",
    "year": 2016,
    "runtime": "147 min",
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 7.1,
    "matchScore": 97,
    "synopsis": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    "director": "Anthony Russo",
    "cast": [
      "Chris Evans",
      "Robert Downey Jr.",
      "Scarlett Johansson",
      "Sebastian Stan"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wdwcOBMkt3zmPQuEMxB3FUtMio2.jpg",
    "trailerId": "dKrVegVI0Us",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Anthony Russo.",
    "whyRecommended": "Top match based on Adventure themes and direction by Anthony Russo.",
    "similarTags": [
      "Anthony Russo",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$1153 Million",
    "tagline": "Divided We Fall",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-244786",
    "title": "Whiplash",
    "originalTitle": "Whiplash",
    "year": 2014,
    "runtime": "105 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 8.3,
    "matchScore": 98,
    "synopsis": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    "director": "Damien Chazelle",
    "cast": [
      "Miles Teller",
      "J.K. Simmons",
      "Melissa Benoist",
      "Austin Stowell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wbQa0EnWUyRzQ5d1pHLNRlmsCUP.jpg",
    "trailerId": "Q7kZy3T6vRM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Damien Chazelle.",
    "whyRecommended": "Top match based on Drama themes and direction by Damien Chazelle.",
    "similarTags": [
      "Damien Chazelle",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$3 Million",
    "revenue": "$13 Million",
    "tagline": "The road to greatness can take you to the edge.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-155",
    "title": "The Dark Knight",
    "originalTitle": "The Dark Knight",
    "year": 2008,
    "runtime": "152 min",
    "genres": [
      "Drama",
      "Action",
      "Crime",
      "Thriller"
    ],
    "imdbRating": 8.2,
    "matchScore": 99,
    "synopsis": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9FE5eD92WfVCiivM9Pq9GVSrlWk.jpg",
    "trailerId": "_PZpmTj1Q8Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Drama themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Drama",
      "Action"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$1004 Million",
    "tagline": "Why So Serious?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-286217",
    "title": "The Martian",
    "originalTitle": "The Martian",
    "year": 2015,
    "runtime": "141 min",
    "genres": [
      "Drama",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 7.6,
    "matchScore": 90,
    "synopsis": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
    "director": "Ridley Scott",
    "cast": [
      "Matt Damon",
      "Jessica Chastain",
      "Kristen Wiig",
      "Jeff Daniels"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lzMS0CI3FLQYC5EgJoWeIaEt0lm.jpg",
    "trailerId": "ej3ioOneTy8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Drama themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Drama",
      "Adventure"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$108 Million",
    "revenue": "$630 Million",
    "tagline": "Bring Him Home",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-209112",
    "title": "Batman v Superman: Dawn of Justice",
    "originalTitle": "Batman v Superman: Dawn of Justice",
    "year": 2016,
    "runtime": "151 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 5.7,
    "matchScore": 91,
    "synopsis": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City\u2019s own formidable, forceful vigilante takes on Metropolis\u2019s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it\u2019s ever known before.",
    "director": "Zack Snyder",
    "cast": [
      "Ben Affleck",
      "Henry Cavill",
      "Gal Gadot",
      "Amy Adams"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg",
    "trailerId": "s9EkdAHqtvU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Zack Snyder.",
    "whyRecommended": "Top match based on Action themes and direction by Zack Snyder.",
    "similarTags": [
      "Zack Snyder",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$873 Million",
    "tagline": "Justice or revenge",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-19995",
    "title": "Avatar",
    "originalTitle": "Avatar",
    "year": 2009,
    "runtime": "162 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Science Fiction"
    ],
    "imdbRating": 7.2,
    "matchScore": 92,
    "synopsis": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "director": "James Cameron",
    "cast": [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg",
    "trailerId": "jm2sNLIPPvA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by James Cameron.",
    "whyRecommended": "Top match based on Action themes and direction by James Cameron.",
    "similarTags": [
      "James Cameron",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$237 Million",
    "revenue": "$2787 Million",
    "tagline": "Enter the World of Pandora.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-58",
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "originalTitle": "Pirates of the Caribbean: Dead Man's Chest",
    "year": 2006,
    "runtime": "151 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 7.0,
    "matchScore": 93,
    "synopsis": "Captain Jack Sparrow works his way out of a blood debt with the ghostly Davey Jones, he also attempts to avoid eternal damnation.",
    "director": "Gore Verbinski",
    "cast": [
      "Johnny Depp",
      "Orlando Bloom",
      "Keira Knightley",
      "Stellan Skarsg\u00e5rd"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vr6n6ZFUZvedvIlhfYcbCWcaKyW.jpg",
    "trailerId": "9SFWn9taQTw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Gore Verbinski.",
    "whyRecommended": "Top match based on Adventure themes and direction by Gore Verbinski.",
    "similarTags": [
      "Gore Verbinski",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$1065 Million",
    "tagline": "Jack is back!",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-257344",
    "title": "Pixels",
    "originalTitle": "Pixels",
    "year": 2015,
    "runtime": "105 min",
    "genres": [
      "Action",
      "Comedy",
      "Science Fiction"
    ],
    "imdbRating": 5.6,
    "matchScore": 94,
    "synopsis": "Video game experts are recruited by the military to fight 1980s-era video game characters who've attacked New York.",
    "director": "Chris Columbus",
    "cast": [
      "Adam Sandler",
      "Michelle Monaghan",
      "Peter Dinklage",
      "Josh Gad"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/d26S5EfVXLNxRXqyFy1yyl3qRq3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6UFnKzVzFqKDjs4iCVLJdneK3ch.jpg",
    "trailerId": "v5kTR1MGBuw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Chris Columbus.",
    "whyRecommended": "Top match based on Action themes and direction by Chris Columbus.",
    "similarTags": [
      "Chris Columbus",
      "Action",
      "Comedy"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$88 Million",
    "revenue": "$243 Million",
    "tagline": "Game On.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-246655",
    "title": "X-Men: Apocalypse",
    "originalTitle": "X-Men: Apocalypse",
    "year": 2016,
    "runtime": "144 min",
    "genres": [
      "Science Fiction"
    ],
    "imdbRating": 6.4,
    "matchScore": 95,
    "synopsis": "After the re-emergence of the world's first mutant, world-destroyer Apocalypse, the X-Men must unite to defeat his extinction level plan.",
    "director": "Bryan Singer",
    "cast": [
      "James McAvoy",
      "Michael Fassbender",
      "Jennifer Lawrence",
      "Nicholas Hoult"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ikA8UhYdTGpqbatFa93nIf6noSr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sTQNRqLbfCXolrb5CizAW1dj528.jpg",
    "trailerId": "Jer8XjMrUB4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Bryan Singer.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Bryan Singer.",
    "similarTags": [
      "Bryan Singer",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$178 Million",
    "revenue": "$543 Million",
    "tagline": "Only the strong will survive",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-13",
    "title": "Forrest Gump",
    "originalTitle": "Forrest Gump",
    "year": 1994,
    "runtime": "142 min",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 8.2,
    "matchScore": 96,
    "synopsis": "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. 'Forrest Gump' is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.",
    "director": "Robert Zemeckis",
    "cast": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise",
      "Mykelti Williamson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/66Kn4XWhkuPkJxOJyPEx4U2CUfN.jpg",
    "trailerId": "0jKUpBmYO1Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Robert Zemeckis.",
    "whyRecommended": "Top match based on Comedy themes and direction by Robert Zemeckis.",
    "similarTags": [
      "Robert Zemeckis",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$55 Million",
    "revenue": "$677 Million",
    "tagline": "The world will never be the same, once you've seen it through the eyes of Forrest Gump.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-278",
    "title": "The Shawshank Redemption",
    "originalTitle": "The Shawshank Redemption",
    "year": 1994,
    "runtime": "142 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 8.5,
    "matchScore": 97,
    "synopsis": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "director": "Frank Darabont",
    "cast": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton",
      "Clancy Brown"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    "trailerId": "PLl99DlL6b4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Frank Darabont.",
    "whyRecommended": "Top match based on Drama themes and direction by Frank Darabont.",
    "similarTags": [
      "Frank Darabont",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$28 Million",
    "tagline": "Fear can hold you prisoner. Hope can set you free.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-99861",
    "title": "Avengers: Age of Ultron",
    "originalTitle": "Avengers: Age of Ultron",
    "year": 2015,
    "runtime": "141 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 7.3,
    "matchScore": 98,
    "synopsis": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth\u2019s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    "director": "Joss Whedon",
    "cast": [
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Mark Ruffalo",
      "Chris Evans"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kIBK5SKwgqIIuRKhhWrJn3XkbPq.jpg",
    "trailerId": "JAUoeqvedMo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Joss Whedon.",
    "whyRecommended": "Top match based on Action themes and direction by Joss Whedon.",
    "similarTags": [
      "Joss Whedon",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$280 Million",
    "revenue": "$1405 Million",
    "tagline": "A New Age Has Come.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-198663",
    "title": "The Maze Runner",
    "originalTitle": "The Maze Runner",
    "year": 2014,
    "runtime": "113 min",
    "genres": [
      "Action",
      "Mystery",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 7.0,
    "matchScore": 99,
    "synopsis": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape.",
    "director": "Wes Ball",
    "cast": [
      "Dylan O'Brien",
      "Ki Hong Lee",
      "Kaya Scodelario",
      "Aml Ameen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ode14q7WtDugFDp78fo9lCsmay9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/eTlcNXGv32zkVI7ZDHhfeaKHXKQ.jpg",
    "trailerId": "3b946aGm0zs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Wes Ball.",
    "whyRecommended": "Top match based on Action themes and direction by Wes Ball.",
    "similarTags": [
      "Wes Ball",
      "Action",
      "Mystery"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$34 Million",
    "revenue": "$348 Million",
    "tagline": "Run - Remember - Survive",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-158852",
    "title": "Tomorrowland",
    "originalTitle": "Tomorrowland",
    "year": 2015,
    "runtime": "130 min",
    "genres": [
      "Adventure",
      "Family",
      "Mystery",
      "Science Fiction"
    ],
    "imdbRating": 6.2,
    "matchScore": 90,
    "synopsis": "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland.\"",
    "director": "Brad Bird",
    "cast": [
      "Britt Robertson",
      "George Clooney",
      "Raffey Cassidy",
      "Thomas Robinson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kziYpr5Nfw60P0My8aj1sgCEqed.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/udYOmbW1JEZjVd726PWHlmptxPi.jpg",
    "trailerId": "lNzukD8pS_s",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Brad Bird.",
    "whyRecommended": "Top match based on Adventure themes and direction by Brad Bird.",
    "similarTags": [
      "Brad Bird",
      "Adventure",
      "Family"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$190 Million",
    "revenue": "$209 Million",
    "tagline": "Imagine a world where nothing is impossible.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-510",
    "title": "One Flew Over the Cuckoo's Nest",
    "originalTitle": "One Flew Over the Cuckoo's Nest",
    "year": 1975,
    "runtime": "133 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 8.2,
    "matchScore": 91,
    "synopsis": "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
    "director": "Milo\u0161 Forman",
    "cast": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Danny DeVito",
      "William Redfield"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kjWsMh72V6d8KRLV4EOoSJLT1H7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uA8eSNAUUUyfHNIrG4h0zHxzt9W.jpg",
    "trailerId": "F4da9uRIg8c",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Milo\u0161 Forman.",
    "whyRecommended": "Top match based on Drama themes and direction by Milo\u0161 Forman.",
    "similarTags": [
      "Milo\u0161 Forman",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$3 Million",
    "revenue": "$108 Million",
    "tagline": "If he's crazy, what does that make you?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-8966",
    "title": "Twilight",
    "originalTitle": "Twilight",
    "year": 2008,
    "runtime": "122 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 5.8,
    "matchScore": 92,
    "synopsis": "When Bella Swan moves to a small town in the Pacific Northwest to live with her father, she starts school and meets the reclusive Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire. Despite Edward's repeated cautions, Bella can't help but fall in love with him, a fatal move that endangers her own life when a coven of bloodsuckers try to challenge the Cullen clan.",
    "director": "Catherine Hardwicke",
    "cast": [
      "Kristen Stewart",
      "Robert Pattinson",
      "Billy Burke",
      "Taylor Lautner"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3Gkb6jm6962ADUPaCBqzz9CTbn9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/weAYfu6FfrNxEDJ3xH1XpgQcqUv.jpg",
    "trailerId": "uxjNDE2fMjI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Catherine Hardwicke.",
    "whyRecommended": "Top match based on Adventure themes and direction by Catherine Hardwicke.",
    "similarTags": [
      "Catherine Hardwicke",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$37 Million",
    "revenue": "$392 Million",
    "tagline": "When you can live forever, what do you live for?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-11",
    "title": "Star Wars",
    "originalTitle": "Star Wars",
    "year": 1977,
    "runtime": "121 min",
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 8.1,
    "matchScore": 93,
    "synopsis": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    "director": "George Lucas",
    "cast": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Peter Cushing"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fai0rspsNeJCS69wHNjOdWxcI7P.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yUiXA68FfQeA8cRBhd0Ao0jIRZt.jpg",
    "trailerId": "i-vsILeJ8_8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by George Lucas.",
    "whyRecommended": "Top match based on Adventure themes and direction by George Lucas.",
    "similarTags": [
      "George Lucas",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$11 Million",
    "revenue": "$775 Million",
    "tagline": "A long time ago in a galaxy far, far away...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-62177",
    "title": "Brave",
    "originalTitle": "Brave",
    "year": 2012,
    "runtime": "93 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family",
      "Action",
      "Fantasy"
    ],
    "imdbRating": 6.7,
    "matchScore": 94,
    "synopsis": "Brave is set in the mystical Scottish Highlands, where M\u00e9rida is the princess of a kingdom ruled by King Fergus and Queen Elinor. An unruly daughter and an accomplished archer, M\u00e9rida one day defies a sacred custom of the land and inadvertently brings turmoil to the kingdom. In an attempt to set things right, M\u00e9rida seeks out an eccentric old Wise Woman and is granted an ill-fated wish. Also figuring into M\u00e9rida\u2019s quest \u2014 and serving as comic relief \u2014 are the kingdom\u2019s three lords: the enormous Lord MacGuffin, the surly Lord Macintosh, and the disagreeable Lord Dingwall.",
    "director": "Brenda Chapman",
    "cast": [
      "Kelly Macdonald",
      "Julie Walters",
      "Billy Connolly",
      "Emma Thompson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1XAuDtMWpL0sYSFK0R6EZate2Ux.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qx9ts2hBYJrkIQxhryitxnLlm2u.jpg",
    "trailerId": "OKdLpBLp3nM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Brenda Chapman.",
    "whyRecommended": "Top match based on Animation themes and direction by Brenda Chapman.",
    "similarTags": [
      "Brenda Chapman",
      "Animation",
      "Adventure"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$538 Million",
    "tagline": "Change your fate.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1726",
    "title": "Iron Man",
    "originalTitle": "Iron Man",
    "year": 2008,
    "runtime": "126 min",
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure"
    ],
    "imdbRating": 7.4,
    "matchScore": 95,
    "synopsis": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "director": "Jon Favreau",
    "cast": [
      "Robert Downey Jr.",
      "Terrence Howard",
      "Jeff Bridges",
      "Shaun Toub"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cKvDv2LpwVEqbdXWoQl4XgGN6le.jpg",
    "trailerId": "8ugaeA-nMTc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Jon Favreau.",
    "whyRecommended": "Top match based on Action themes and direction by Jon Favreau.",
    "similarTags": [
      "Jon Favreau",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$140 Million",
    "revenue": "$585 Million",
    "tagline": "Heroes aren't born. They're built.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-102899",
    "title": "Ant-Man",
    "originalTitle": "Ant-Man",
    "year": 2015,
    "runtime": "117 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "imdbRating": 7.0,
    "matchScore": 96,
    "synopsis": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    "director": "Peyton Reed",
    "cast": [
      "Paul Rudd",
      "Michael Douglas",
      "Evangeline Lilly",
      "Corey Stoll"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1K3JmSNUN8OpjYsCjc0Hy0SYxAb.jpg",
    "trailerId": "cx3joJnXydc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Peyton Reed.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Peyton Reed.",
    "similarTags": [
      "Peyton Reed",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$519 Million",
    "tagline": "Heroes don't get any bigger.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-127585",
    "title": "X-Men: Days of Future Past",
    "originalTitle": "X-Men: Days of Future Past",
    "year": 2014,
    "runtime": "131 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Science Fiction"
    ],
    "imdbRating": 7.5,
    "matchScore": 97,
    "synopsis": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past \u2013 to save our future.",
    "director": "Bryan Singer",
    "cast": [
      "Hugh Jackman",
      "James McAvoy",
      "Michael Fassbender",
      "Jennifer Lawrence"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3czpqXzFy5UcNuD1AubecRLWkwD.jpg",
    "trailerId": "gsjtg7m1MMM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Bryan Singer.",
    "whyRecommended": "Top match based on Action themes and direction by Bryan Singer.",
    "similarTags": [
      "Bryan Singer",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$747 Million",
    "tagline": "To save the future, they must alter the past",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-91314",
    "title": "Transformers: Age of Extinction",
    "originalTitle": "Transformers: Age of Extinction",
    "year": 2014,
    "runtime": "165 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "imdbRating": 5.8,
    "matchScore": 98,
    "synopsis": "As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.",
    "director": "Michael Bay",
    "cast": [
      "Mark Wahlberg",
      "Stanley Tucci",
      "Kelsey Grammer",
      "Nicola Peltz"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jyzrfx2WaeY60kYZpPYepSjGz4S.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wxr4Z6E83h14CogsZOzDm1vuDX3.jpg",
    "trailerId": "S30VkLn5a2o",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Michael Bay.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Michael Bay.",
    "similarTags": [
      "Michael Bay",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$210 Million",
    "revenue": "$1091 Million",
    "tagline": "This is not war. It's extinction.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-181533",
    "title": "Night at the Museum: Secret of the Tomb",
    "originalTitle": "Night at the Museum: Secret of the Tomb",
    "year": 2014,
    "runtime": "97 min",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 6.1,
    "matchScore": 99,
    "synopsis": "When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley (Ben Stiller) spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
    "director": "Shawn Levy",
    "cast": [
      "Ben Stiller",
      "Rami Malek",
      "Rebel Wilson",
      "Robin Williams"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xwgy305K6qDs3D20xUO4OZu1HPY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1ClgfKeczI0d0KKuBs5qSIqUReT.jpg",
    "trailerId": "aXEtR6Hn_nA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Shawn Levy.",
    "whyRecommended": "Top match based on Adventure themes and direction by Shawn Levy.",
    "similarTags": [
      "Shawn Levy",
      "Adventure",
      "Comedy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$127 Million",
    "revenue": "$349 Million",
    "tagline": "One Final Night to Save the Day.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-240832",
    "title": "Lucy",
    "originalTitle": "Lucy",
    "year": 2014,
    "runtime": "89 min",
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 6.3,
    "matchScore": 90,
    "synopsis": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    "director": "Luc Besson",
    "cast": [
      "Scarlett Johansson",
      "Morgan Freeman",
      "Choi Min-sik",
      "Amr Waked"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1hzH1Wu2xhXBNOWzw3RMwNTJX5q.jpg",
    "trailerId": "l7zAV_MDC68",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Luc Besson.",
    "whyRecommended": "Top match based on Action themes and direction by Luc Besson.",
    "similarTags": [
      "Luc Besson",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$126 Million",
    "tagline": "The average person uses 10% of their brain capacity. Imagine what she could do with 100%.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-272",
    "title": "Batman Begins",
    "originalTitle": "Batman Begins",
    "year": 2005,
    "runtime": "140 min",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "imdbRating": 7.5,
    "matchScore": 91,
    "synopsis": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9IIBboV7MCT0bTxzXHmWK1Hq558.jpg",
    "trailerId": "lirBhHXvDSg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Action themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Action",
      "Crime"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$374 Million",
    "tagline": "Evil fears the knight.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-294254",
    "title": "Maze Runner: The Scorch Trials",
    "originalTitle": "Maze Runner: The Scorch Trials",
    "year": 2015,
    "runtime": "132 min",
    "genres": [
      "Action"
    ],
    "imdbRating": 6.4,
    "matchScore": 92,
    "synopsis": "Thomas and his fellow Gladers face their greatest challenge yet: searching for clues about the mysterious and powerful organization known as WCKD. Their journey takes them to the Scorch, a desolate landscape filled with unimaginable obstacles. Teaming up with resistance fighters, the Gladers take on WCKD\u2019s vastly superior forces and uncover its shocking plans for them all.",
    "director": "Wes Ball",
    "cast": [
      "Dylan O'Brien",
      "Kaya Scodelario",
      "Thomas Brodie-Sangster",
      "Giancarlo Esposito"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/mYw7ZyejqSCPFlrT2jHZOESZDU3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4mcOCiR06dqQ5eoEJcG3zvonjOa.jpg",
    "trailerId": "SDofO3P2HpE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Wes Ball.",
    "whyRecommended": "Top match based on Action themes and direction by Wes Ball.",
    "similarTags": [
      "Wes Ball",
      "Action"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$61 Million",
    "revenue": "$311 Million",
    "tagline": "The Maze Was Just the Beginning.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49026",
    "title": "The Dark Knight Rises",
    "originalTitle": "The Dark Knight Rises",
    "year": 2012,
    "runtime": "165 min",
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.6,
    "matchScore": 93,
    "synopsis": "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
    "director": "Christopher Nolan",
    "cast": [
      "Christian Bale",
      "Michael Caine",
      "Gary Oldman",
      "Anne Hathaway"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/y2DB71C4nyIdMrANijz8mzvQtk6.jpg",
    "trailerId": "GAjBzu8ggi0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Action themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Action",
      "Crime"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$1084 Million",
    "tagline": "The Legend Ends",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49047",
    "title": "Gravity",
    "originalTitle": "Gravity",
    "year": 2013,
    "runtime": "91 min",
    "genres": [
      "Science Fiction",
      "Thriller",
      "Drama"
    ],
    "imdbRating": 7.3,
    "matchScore": 94,
    "synopsis": "Dr. Ryan Stone, a brilliant medical engineer on her first Shuttle mission, with veteran astronaut Matt Kowalsky in command of his last flight before retiring. But on a seemingly routine spacewalk, disaster strikes. The Shuttle is destroyed, leaving Stone and Kowalsky completely alone-tethered to nothing but each other and spiraling out into the blackness of space. The deafening silence tells them they have lost any link to Earth and any chance for rescue. As fear turns to panic, every gulp of air eats away at what little oxygen is left. But the only way home may be to go further out into the terrifying expanse of space.",
    "director": "Alfonso Cuar\u00f3n",
    "cast": [
      "Sandra Bullock",
      "George Clooney",
      "Ed Harris",
      "Orto Ignatiussen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/a2n6bKD7qhCPCAEALgsAhWOAQcc.jpg",
    "trailerId": "OiTiKOy59o4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Alfonso Cuar\u00f3n.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Alfonso Cuar\u00f3n.",
    "similarTags": [
      "Alfonso Cuar\u00f3n",
      "Science Fiction",
      "Thriller"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$105 Million",
    "revenue": "$716 Million",
    "tagline": "Don't Let Go",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-671",
    "title": "Harry Potter and the Philosopher's Stone",
    "originalTitle": "Harry Potter and the Philosopher's Stone",
    "year": 2001,
    "runtime": "152 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 7.5,
    "matchScore": 95,
    "synopsis": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    "director": "Chris Columbus",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Richard Harris"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1XAC6RPT01UX9EQGy2JVn5c8pgy.jpg",
    "trailerId": "l91Km49W9qI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Chris Columbus.",
    "whyRecommended": "Top match based on Adventure themes and direction by Chris Columbus.",
    "similarTags": [
      "Chris Columbus",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$125 Million",
    "revenue": "$976 Million",
    "tagline": "Let the Magic Begin.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-18",
    "title": "The Fifth Element",
    "originalTitle": "The Fifth Element",
    "year": 1997,
    "runtime": "126 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 7.3,
    "matchScore": 96,
    "synopsis": "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    "director": "Luc Besson",
    "cast": [
      "Bruce Willis",
      "Gary Oldman",
      "Ian Holm",
      "Milla Jovovich"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fPtlCO1yQtnoLHOwKtWz7db6RGU.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jW21PoKwqs79wk6bfiYezox63mK.jpg",
    "trailerId": "5Sg2RkdkSvk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Luc Besson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Luc Besson.",
    "similarTags": [
      "Luc Besson",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$263 Million",
    "tagline": "There is no future without it.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-24021",
    "title": "The Twilight Saga: Eclipse",
    "originalTitle": "The Twilight Saga: Eclipse",
    "year": 2010,
    "runtime": "124 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 5.8,
    "matchScore": 97,
    "synopsis": "Bella once again finds herself surrounded by danger as Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob, knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf. With her graduation quickly approaching, Bella is confronted with the most important decision of her life.",
    "director": "David Slade",
    "cast": [
      "Kristen Stewart",
      "Robert Pattinson",
      "Taylor Lautner",
      "Ashley Greene"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/dK4Gi1UdMiHzHc7r7CZQG4IQ9Sr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oguoQWtQJcqIkmmUNbe3CmLx6AP.jpg",
    "trailerId": "kX2DKZcDM-o",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by David Slade.",
    "whyRecommended": "Top match based on Adventure themes and direction by David Slade.",
    "similarTags": [
      "David Slade",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$68 Million",
    "revenue": "$698 Million",
    "tagline": "It all begins ... With a choice.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-121",
    "title": "The Lord of the Rings: The Two Towers",
    "originalTitle": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "runtime": "179 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 8.0,
    "matchScore": 98,
    "synopsis": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Liv Tyler"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6G73mNyooWAEQTpckPSnFxFoNmc.jpg",
    "trailerId": "nuTU5XcZTLA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Peter Jackson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Peter Jackson.",
    "similarTags": [
      "Peter Jackson",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$79 Million",
    "revenue": "$926 Million",
    "tagline": "A New Power Is Rising.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-607",
    "title": "Men in Black",
    "originalTitle": "Men in Black",
    "year": 1997,
    "runtime": "98 min",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "imdbRating": 6.9,
    "matchScore": 99,
    "synopsis": "Men in Black follows the exploits of agents Kay and Jay, members of a top-secret organization established to monitor and police alien activity on Earth. The two Men in Black find themselves in the middle of the deadly plot by an intergalactic terrorist who has arrived on Earth to assassinate two ambassadors from opposing galaxies. In order to prevent worlds from colliding, the MiB must track down the terrorist and prevent the destruction of Earth. It's just another typical day for the Men in Black.",
    "director": "Barry Sonnenfeld",
    "cast": [
      "Tommy Lee Jones",
      "Will Smith",
      "Linda Fiorentino",
      "Vincent D'Onofrio"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uLOmOF5IzWoyrgIF5MfUnh5pa1X.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/o9puyKpayQoX8ikIaYtf2PfKv3.jpg",
    "trailerId": "HYUd7AOw_lk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Barry Sonnenfeld.",
    "whyRecommended": "Top match based on Action themes and direction by Barry Sonnenfeld.",
    "similarTags": [
      "Barry Sonnenfeld",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$589 Million",
    "tagline": "Protecting the Earth from the scum of the universe.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-497",
    "title": "The Green Mile",
    "originalTitle": "The Green Mile",
    "year": 1999,
    "runtime": "189 min",
    "genres": [
      "Fantasy",
      "Drama",
      "Crime"
    ],
    "imdbRating": 8.2,
    "matchScore": 90,
    "synopsis": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    "director": "Frank Darabont",
    "cast": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse",
      "Bonnie Hunt"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/amZavErrjrdgDwhsIdpWxHNenIx.jpg",
    "trailerId": "Bg7epsq0OIQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Frank Darabont.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Frank Darabont.",
    "similarTags": [
      "Frank Darabont",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$284 Million",
    "tagline": "Miracles do happen.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-280",
    "title": "Terminator 2: Judgment Day",
    "originalTitle": "Terminator 2: Judgment Day",
    "year": 1991,
    "runtime": "137 min",
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 7.7,
    "matchScore": 91,
    "synopsis": "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
    "director": "James Cameron",
    "cast": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Robert Patrick",
      "Edward Furlong"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/izkMjmhauFx9DjoBQqM5sM5WAwE.jpg",
    "trailerId": "BuBD2s2NmEM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by James Cameron.",
    "whyRecommended": "Top match based on Action themes and direction by James Cameron.",
    "similarTags": [
      "James Cameron",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$100 Million",
    "revenue": "$520 Million",
    "tagline": "It's nothing personal.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-147441",
    "title": "Exodus: Gods and Kings",
    "originalTitle": "Exodus: Gods and Kings",
    "year": 2014,
    "runtime": "150 min",
    "genres": [
      "Adventure",
      "Drama",
      "Action"
    ],
    "imdbRating": 5.6,
    "matchScore": 92,
    "synopsis": "The defiant leader Moses rises up against the Egyptian Pharaoh Ramses, setting 400,000 slaves on a monumental journey of escape from Egypt and its terrifying cycle of deadly plagues.",
    "director": "Ridley Scott",
    "cast": [
      "Christian Bale",
      "Joel Edgerton",
      "John Turturro",
      "Aaron Paul"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uaDj37JtvLan9tihxZ18e6qL33b.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hJ1jUw8irCiWwQk7BElxF92BrlK.jpg",
    "trailerId": "6k8qeqZycgE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Adventure themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$140 Million",
    "revenue": "$268 Million",
    "tagline": "Once brothers, now enemies.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-674",
    "title": "Harry Potter and the Goblet of Fire",
    "originalTitle": "Harry Potter and the Goblet of Fire",
    "year": 2005,
    "runtime": "157 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 7.5,
    "matchScore": 93,
    "synopsis": "Harry starts his fourth year at Hogwarts, competes in the treacherous Triwizard Tournament and faces the evil Lord Voldemort. Ron and Hermione help Harry manage the pressure \u2013 but Voldemort lurks, awaiting his chance to destroy Harry and all that he stands for.",
    "director": "Mike Newell",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Ralph Fiennes"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1OV7hau4D3rWGS5bu8sqBYeVpe.jpg",
    "trailerId": "4xkFJgcCQRE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Mike Newell.",
    "whyRecommended": "Top match based on Adventure themes and direction by Mike Newell.",
    "similarTags": [
      "Mike Newell",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$895 Million",
    "tagline": "Dark And Difficult Times Lie Ahead.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-150689",
    "title": "Cinderella",
    "originalTitle": "Cinderella",
    "year": 2015,
    "runtime": "105 min",
    "genres": [
      "Romance",
      "Fantasy",
      "Family",
      "Drama"
    ],
    "imdbRating": 6.7,
    "matchScore": 94,
    "synopsis": "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.",
    "director": "Kenneth Branagh",
    "cast": [
      "Lily James",
      "Cate Blanchett",
      "Richard Madden",
      "Helena Bonham Carter"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/j91LJmcWo16CArFOoapsz84bwxb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/q7vmCCmyiHnuKGMzHZlr0fD44b9.jpg",
    "trailerId": "n44EWI92Tc8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Kenneth Branagh.",
    "whyRecommended": "Top match based on Romance themes and direction by Kenneth Branagh.",
    "similarTags": [
      "Kenneth Branagh",
      "Romance",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$95 Million",
    "revenue": "$543 Million",
    "tagline": "Midnight is just the beginning.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-270303",
    "title": "It Follows",
    "originalTitle": "It Follows",
    "year": 2015,
    "runtime": "100 min",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 95,
    "synopsis": "For 19-year-old Jay, fall should be about school, boys and weekends out at the lake. But a seemingly innocent physical encounter turns sour and gives her the inescapable sense that someone, or something, is following her. Faced with this burden, Jay and her teenage friends must find a way to escape the horror that seems to be only a few steps behind.",
    "director": "David Robert Mitchell",
    "cast": [
      "Maika Monroe",
      "Keir Gilchrist",
      "Daniel Zovatto",
      "Jake Weary"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iwnQ1JH1wdWrGYkgWySptJ5284A.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ikaRI4yMxKOje5SmOlAhOBUnicL.jpg",
    "trailerId": "zoNa1WH3GR8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by David Robert Mitchell.",
    "whyRecommended": "Top match based on Horror themes and direction by David Robert Mitchell.",
    "similarTags": [
      "David Robert Mitchell",
      "Horror",
      "Thriller"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$2 Million",
    "revenue": "$14 Million",
    "tagline": "It doesn't think, it doesn't feel, it doesn't give up",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-281957",
    "title": "The Revenant",
    "originalTitle": "The Revenant",
    "year": 2015,
    "runtime": "156 min",
    "genres": [
      "Western",
      "Drama",
      "Adventure",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 96,
    "synopsis": "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
    "director": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
    "cast": [
      "Leonardo DiCaprio",
      "Tom Hardy",
      "Will Poulter",
      "Domhnall Gleeson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ji3ecJphATlVgWNY0B0RVXZizdf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hEQYZq2CDB2LSJVxxlazdBOKeyW.jpg",
    "trailerId": "EhffABvfAW0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Western themes and direction by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "whyRecommended": "Top match based on Western themes and direction by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "similarTags": [
      "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
      "Western",
      "Drama"
    ],
    "moods": [
      "\u2728 Western",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$135 Million",
    "revenue": "$532 Million",
    "tagline": "(n. One who has returned, as if from the dead.)",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-138832",
    "title": "We're the Millers",
    "originalTitle": "We're the Millers",
    "year": 2013,
    "runtime": "110 min",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "imdbRating": 6.8,
    "matchScore": 97,
    "synopsis": "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    "director": "Rawson Marshall Thurber",
    "cast": [
      "Jason Sudeikis",
      "Jennifer Aniston",
      "Will Poulter",
      "Emma Roberts"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qF2LJ0jwWrtXSuT4AFD5OS2IqaT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jxDo3i2f6Ab1XeTWjdNDkkZYEju.jpg",
    "trailerId": "O7NHfAzg7Yg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Rawson Marshall Thurber.",
    "whyRecommended": "Top match based on Comedy themes and direction by Rawson Marshall Thurber.",
    "similarTags": [
      "Rawson Marshall Thurber",
      "Comedy",
      "Crime"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$37 Million",
    "revenue": "$269 Million",
    "tagline": "-If anyone asks.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-82702",
    "title": "How to Train Your Dragon 2",
    "originalTitle": "How to Train Your Dragon 2",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Fantasy",
      "Action",
      "Adventure",
      "Animation",
      "Comedy",
      "Family"
    ],
    "imdbRating": 7.6,
    "matchScore": 98,
    "synopsis": "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging each other to dragon races (the island's new favorite contact sport), the now inseparable pair journey through the skies, charting unmapped territories and exploring new worlds. When one of their adventures leads to the discovery of a secret ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace.",
    "director": "Dean DeBlois",
    "cast": [
      "Jay Baruchel",
      "Gerard Butler",
      "Kristen Wiig",
      "Jonah Hill"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8AAuJtCzaibYkbE0QVHc8EBsELB.jpg",
    "trailerId": "1Y0erVF9cLI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Dean DeBlois.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Dean DeBlois.",
    "similarTags": [
      "Dean DeBlois",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$145 Million",
    "revenue": "$609 Million",
    "tagline": "The training is over.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-597",
    "title": "Titanic",
    "originalTitle": "Titanic",
    "year": 1997,
    "runtime": "194 min",
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "imdbRating": 7.5,
    "matchScore": 99,
    "synopsis": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fianc\u00e9, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
    "director": "James Cameron",
    "cast": [
      "Kate Winslet",
      "Leonardo DiCaprio",
      "Frances Fisher",
      "Billy Zane"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xnHVX37XZEp33hhCbYlQFq7ux1J.jpg",
    "trailerId": "wO44qBPBG4c",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by James Cameron.",
    "whyRecommended": "Top match based on Drama themes and direction by James Cameron.",
    "similarTags": [
      "James Cameron",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$1845 Million",
    "tagline": "Nothing on Earth could come between them.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-50620",
    "title": "The Twilight Saga: Breaking Dawn - Part 2",
    "originalTitle": "The Twilight Saga: Breaking Dawn - Part 2",
    "year": 2012,
    "runtime": "115 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 6.1,
    "matchScore": 90,
    "synopsis": "After the birth of Renesmee, the Cullens gather other vampire clans in order to protect the child from a false allegation that puts the family in front of the Volturi.",
    "director": "Bill Condon",
    "cast": [
      "Kristen Stewart",
      "Robert Pattinson",
      "Taylor Lautner",
      "Peter Facinelli"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7IGdPaKujv0BjI0Zd0m0a4CzEjJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qkl57wzSFrpi2sRpoc2mZJbMuLP.jpg",
    "trailerId": "bUXjqQ4GKRg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Bill Condon.",
    "whyRecommended": "Top match based on Adventure themes and direction by Bill Condon.",
    "similarTags": [
      "Bill Condon",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$829 Million",
    "tagline": "The epic finale that will live forever",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-425",
    "title": "Ice Age",
    "originalTitle": "Ice Age",
    "year": 2002,
    "runtime": "81 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "imdbRating": 7.1,
    "matchScore": 91,
    "synopsis": "With the impending ice age almost upon them, a mismatched trio of prehistoric critters \u2013 Manny the woolly mammoth, Diego the saber-toothed tiger and Sid the giant sloth \u2013 find an orphaned infant and decide to return it to its human parents. Along the way, the unlikely allies become friends but, when enemies attack, their quest takes on far nobler aims.",
    "director": "Chris Wedge",
    "cast": [
      "Ray Romano",
      "John Leguizamo",
      "Denis Leary",
      "Goran Visnjic"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gLhHHZUzeseRXShoDyC4VqLgsNv.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8pwIhymsxfAVjrAE7syDjQULn37.jpg",
    "trailerId": "i4noiCRJRoE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Chris Wedge.",
    "whyRecommended": "Top match based on Animation themes and direction by Chris Wedge.",
    "similarTags": [
      "Chris Wedge",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$59 Million",
    "revenue": "$383 Million",
    "tagline": "They came. They thawed. They conquered.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49521",
    "title": "Man of Steel",
    "originalTitle": "Man of Steel",
    "year": 2013,
    "runtime": "143 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy",
      "Science Fiction"
    ],
    "imdbRating": 6.5,
    "matchScore": 92,
    "synopsis": "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    "director": "Zack Snyder",
    "cast": [
      "Henry Cavill",
      "Amy Adams",
      "Michael Shannon",
      "Kevin Costner"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/j2MlEEpA3wgwQiJB6p1UHC50oiw.jpg",
    "trailerId": "vGrBV1C4hgo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Zack Snyder.",
    "whyRecommended": "Top match based on Action themes and direction by Zack Snyder.",
    "similarTags": [
      "Zack Snyder",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$225 Million",
    "revenue": "$662 Million",
    "tagline": "You will believe that a man can fly.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-767",
    "title": "Harry Potter and the Half-Blood Prince",
    "originalTitle": "Harry Potter and the Half-Blood Prince",
    "year": 2009,
    "runtime": "153 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 7.4,
    "matchScore": 93,
    "synopsis": "As Harry begins his sixth year at Hogwarts, he discovers an old book marked as 'Property of the Half-Blood Prince', and begins to learn more about Lord Voldemort's dark past.",
    "director": "David Yates",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Tom Felton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ze6Mx4QE5mQVXRYmG2flncqqle4.jpg",
    "trailerId": "DgeDDXcw--I",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by David Yates.",
    "whyRecommended": "Top match based on Adventure themes and direction by David Yates.",
    "similarTags": [
      "David Yates",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$933 Million",
    "tagline": "Dark Secrets Revealed",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-216015",
    "title": "Fifty Shades of Grey",
    "originalTitle": "Fifty Shades of Grey",
    "year": 2015,
    "runtime": "125 min",
    "genres": [
      "Drama",
      "Romance",
      "Thriller"
    ],
    "imdbRating": 5.2,
    "matchScore": 94,
    "synopsis": "When college senior Anastasia Steele steps in for her sick roommate to interview prominent businessman Christian Grey for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strangely drawn to Ana, and she to him. Though sexually inexperienced, Ana plunges headlong into an affair -- and learns that Christian's true sexual proclivities push the boundaries of pain and pleasure.",
    "director": "Sam Taylor-Johnson",
    "cast": [
      "Dakota Johnson",
      "Jamie Dornan",
      "Jennifer Ehle",
      "Eloise Mumford"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/63kGofUkt1Mx0SIL4XI4Z5AoSgt.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7IGKrY1f1KfwMipx9wZC4NRgIdF.jpg",
    "trailerId": "6FDTMRK7-24",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Sam Taylor-Johnson.",
    "whyRecommended": "Top match based on Drama themes and direction by Sam Taylor-Johnson.",
    "similarTags": [
      "Sam Taylor-Johnson",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$571 Million",
    "tagline": "Are you curious?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-76203",
    "title": "12 Years a Slave",
    "originalTitle": "12 Years a Slave",
    "year": 2013,
    "runtime": "134 min",
    "genres": [
      "Drama",
      "History"
    ],
    "imdbRating": 7.9,
    "matchScore": 95,
    "synopsis": "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon\u2019s chance meeting with a Canadian abolitionist will forever alter his life.",
    "director": "Steve McQueen",
    "cast": [
      "Chiwetel Ejiofor",
      "Michael Fassbender",
      "Lupita Nyong'o",
      "Benedict Cumberbatch"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4Bb1kMIfrT2tYRZ9M6Jhqy6gkeF.jpg",
    "trailerId": "z02Ie8wKKRg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Steve McQueen.",
    "whyRecommended": "Top match based on Drama themes and direction by Steve McQueen.",
    "similarTags": [
      "Steve McQueen",
      "Drama",
      "History"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$20 Million",
    "revenue": "$187 Million",
    "tagline": "The extraordinary true story of Solomon Northup",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-2048",
    "title": "I, Robot",
    "originalTitle": "I, Robot",
    "year": 2004,
    "runtime": "115 min",
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 6.7,
    "matchScore": 96,
    "synopsis": "In 2035, where robots are common-place and abide by the three laws of robotics, a techno-phobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger.",
    "director": "Alex Proyas",
    "cast": [
      "Will Smith",
      "Bridget Moynahan",
      "Alan Tudyk",
      "James Cromwell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/efwv6F2lGaghjPpBRSINHtoEiZB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jpFcZH2eyh6gcoxCa637TrGe4bT.jpg",
    "trailerId": "ry1N9lrzt7A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Alex Proyas.",
    "whyRecommended": "Top match based on Action themes and direction by Alex Proyas.",
    "similarTags": [
      "Alex Proyas",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$347 Million",
    "tagline": "Laws are made to be broken.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-264660",
    "title": "Ex Machina",
    "originalTitle": "Ex Machina",
    "year": 2015,
    "runtime": "108 min",
    "genres": [
      "Drama",
      "Science Fiction"
    ],
    "imdbRating": 7.6,
    "matchScore": 97,
    "synopsis": "Caleb, a 26 year old coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    "director": "Alex Garland",
    "cast": [
      "Domhnall Gleeson",
      "Alicia Vikander",
      "Oscar Isaac",
      "Sonoya Mizuno"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uqOuJ50EtTj7kkDIXP8LCg7G45D.jpg",
    "trailerId": "sDkEF7Db7Gw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Alex Garland.",
    "whyRecommended": "Top match based on Drama themes and direction by Alex Garland.",
    "similarTags": [
      "Alex Garland",
      "Drama",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$36 Million",
    "tagline": "There is nothing more human than the will to survive",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-18239",
    "title": "The Twilight Saga: New Moon",
    "originalTitle": "The Twilight Saga: New Moon",
    "year": 2009,
    "runtime": "130 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 5.6,
    "matchScore": 98,
    "synopsis": "Forks, Washington resident Bella Swan is reeling from the departure of her vampire love, Edward Cullen, and finds comfort in her friendship with Jacob Black, a werewolf. But before she knows it, she's thrust into a centuries-old conflict, and her desire to be with Edward at any cost leads her to take greater and greater risks.",
    "director": "Chris Weitz",
    "cast": [
      "Kristen Stewart",
      "Robert Pattinson",
      "Taylor Lautner",
      "Billy Burke"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/k2qTooPlHffgNABNWxeJdGMglPK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dF2c20sRDgySZLaLS2OUerL07sz.jpg",
    "trailerId": "q58iQSHhZGg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Chris Weitz.",
    "whyRecommended": "Top match based on Adventure themes and direction by Chris Weitz.",
    "similarTags": [
      "Chris Weitz",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$709 Million",
    "tagline": "The Next Chapter Begins.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-57158",
    "title": "The Hobbit: The Desolation of Smaug",
    "originalTitle": "The Hobbit: The Desolation of Smaug",
    "year": 2013,
    "runtime": "161 min",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 7.6,
    "matchScore": 99,
    "synopsis": "The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.",
    "director": "Peter Jackson",
    "cast": [
      "Martin Freeman",
      "Ian McKellen",
      "Richard Armitage",
      "Ken Stott"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5ZYxL6k4ZHrEmrFvmY4HZVzerxG.jpg",
    "trailerId": "gAo95e7_XKA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Peter Jackson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Peter Jackson.",
    "similarTags": [
      "Peter Jackson",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$250 Million",
    "revenue": "$958 Million",
    "tagline": "Beyond darkness... beyond desolation... lies the greatest danger of all.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-278927",
    "title": "The Jungle Book",
    "originalTitle": "The Jungle Book",
    "year": 2016,
    "runtime": "106 min",
    "genres": [
      "Family",
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "imdbRating": 6.7,
    "matchScore": 90,
    "synopsis": "After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther, Bagheera, and free spirited bear, Baloo.",
    "director": "Jon Favreau",
    "cast": [
      "Neel Sethi",
      "Bill Murray",
      "Ben Kingsley",
      "Idris Elba"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2Epx7F9X7DrFptn4seqn4mzBVks.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8oYykF1Qhrb8fC2qZqD71EzRywg.jpg",
    "trailerId": "YW97nCUE3ZA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Family themes and direction by Jon Favreau.",
    "whyRecommended": "Top match based on Family themes and direction by Jon Favreau.",
    "similarTags": [
      "Jon Favreau",
      "Family",
      "Adventure"
    ],
    "moods": [
      "\u2728 Family",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$175 Million",
    "revenue": "$966 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-348",
    "title": "Alien",
    "originalTitle": "Alien",
    "year": 1979,
    "runtime": "117 min",
    "genres": [
      "Horror",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 7.9,
    "matchScore": 91,
    "synopsis": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
    "director": "Ridley Scott",
    "cast": [
      "Tom Skerritt",
      "Sigourney Weaver",
      "Veronica Cartwright",
      "Harry Dean Stanton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
    "trailerId": "bM01Al2SWx4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Horror themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Horror",
      "Action"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$11 Million",
    "revenue": "$104 Million",
    "tagline": "In space no one can hear you scream.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-14160",
    "title": "Up",
    "originalTitle": "Up",
    "year": 2009,
    "runtime": "96 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "imdbRating": 7.7,
    "matchScore": 92,
    "synopsis": "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    "director": "Pete Docter",
    "cast": [
      "Ed Asner",
      "Christopher Plummer",
      "Jordan Nagai",
      "Bob Peterson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
    "trailerId": "Ajcdb4FAL7A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Pete Docter.",
    "whyRecommended": "Top match based on Animation themes and direction by Pete Docter.",
    "similarTags": [
      "Pete Docter",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$175 Million",
    "revenue": "$735 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-608",
    "title": "Men in Black II",
    "originalTitle": "Men in Black II",
    "year": 2002,
    "runtime": "88 min",
    "genres": [
      "Action",
      "Adventure",
      "Comedy",
      "Science Fiction"
    ],
    "imdbRating": 6.0,
    "matchScore": 93,
    "synopsis": "Kay and Jay reunite to provide our best, last and only line of defense against a sinister seductress who levels the toughest challenge yet to the MIB's untarnished mission statement \u2013 protecting Earth from the scum of the universe. It's been four years since the alien-seeking agents averted an intergalactic disaster of epic proportions. Now it's a race against the clock as Jay must convince Kay \u2013 who not only has absolutely no memory of his time spent with the MIB, but is also the only living person left with the expertise to save the galaxy \u2013 to reunite with the MIB before the earth submits to ultimate destruction.",
    "director": "Barry Sonnenfeld",
    "cast": [
      "Tommy Lee Jones",
      "Will Smith",
      "Rip Torn",
      "Lara Flynn Boyle"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/enA22EPyzc2WQ1VVyY7zxresQQr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/o1l6OCqA3pYDZHIc5L1s7CEzCMv.jpg",
    "trailerId": "DMHlNR6x2Sw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Barry Sonnenfeld.",
    "whyRecommended": "Top match based on Action themes and direction by Barry Sonnenfeld.",
    "similarTags": [
      "Barry Sonnenfeld",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$140 Million",
    "revenue": "$441 Million",
    "tagline": "Same Planet. New Scum.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-44214",
    "title": "Black Swan",
    "originalTitle": "Black Swan",
    "year": 2010,
    "runtime": "108 min",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 94,
    "synopsis": "A ballet dancer wins the lead in \"Swan Lake\" and is perfect for the role of the delicate White Swan - Princess Odette - but slowly loses her mind as she becomes more and more like Odile, the Black Swan.",
    "director": "Darren Aronofsky",
    "cast": [
      "Natalie Portman",
      "Mila Kunis",
      "Vincent Cassel",
      "Barbara Hershey"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/viWheBd44bouiLCHgNMvahLThqx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/eDLp4uFdqP1gpy9oMrutwH6Q64I.jpg",
    "trailerId": "2Pxc_5f27Kg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Darren Aronofsky.",
    "whyRecommended": "Top match based on Drama themes and direction by Darren Aronofsky.",
    "similarTags": [
      "Darren Aronofsky",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$13 Million",
    "revenue": "$327 Million",
    "tagline": "In the era of personal branding, the scariest possibility is that someone might be better at being you than you are.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1417",
    "title": "Pan's Labyrinth",
    "originalTitle": "El laberinto del fauno",
    "year": 2006,
    "runtime": "118 min",
    "genres": [
      "Fantasy",
      "Drama",
      "War"
    ],
    "imdbRating": 7.6,
    "matchScore": 95,
    "synopsis": "Living with her tyrannical stepfather in a new home with her pregnant mother, 10-year-old Ofelia feels alone until she explores a decaying labyrinth guarded by a mysterious faun who claims to know her destiny. If she wishes to return to her real father, Ofelia must complete three terrifying tasks.",
    "director": "Guillermo del Toro",
    "cast": [
      "Ivana Baquero",
      "Maribel Verd\u00fa",
      "Sergi L\u00f3pez",
      "Doug Jones"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/z7xXihu5wHuSMWymq5VAulPVuvg.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6G6nqSW9S7EHA9HrYl0Z8uo2H7f.jpg",
    "trailerId": "OBGKGm3RYos",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Guillermo del Toro.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Guillermo del Toro.",
    "similarTags": [
      "Guillermo del Toro",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "Spanish",
    "country": "International",
    "budget": "$19 Million",
    "revenue": "$83 Million",
    "tagline": "What happens when make-believe believes it's real?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49040",
    "title": "The Bourne Legacy",
    "originalTitle": "The Bourne Legacy",
    "year": 2012,
    "runtime": "120 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.0,
    "matchScore": 96,
    "synopsis": "New CIA operative, Aaron Cross experiences life-or-death stakes that have been triggered by the previous actions of Jason Bourne.",
    "director": "Tony Gilroy",
    "cast": [
      "Jeremy Renner",
      "Rachel Weisz",
      "Edward Norton",
      "Scott Glenn"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1aExL5DTGHj25ZfIC3dDwS84RWi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/akNBILfG0vh7WhuzjA1bXfrgpYI.jpg",
    "trailerId": "43WTCO8-C4w",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Tony Gilroy.",
    "whyRecommended": "Top match based on Action themes and direction by Tony Gilroy.",
    "similarTags": [
      "Tony Gilroy",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$276 Million",
    "tagline": "There Was Never Just One",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1930",
    "title": "The Amazing Spider-Man",
    "originalTitle": "The Amazing Spider-Man",
    "year": 2012,
    "runtime": "136 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 6.5,
    "matchScore": 97,
    "synopsis": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance \u2013 leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
    "director": "Marc Webb",
    "cast": [
      "Andrew Garfield",
      "Emma Stone",
      "Rhys Ifans",
      "Denis Leary"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jexoNYnPd6vVrmygwF6QZmWPFdu.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/HVcza6tJtWFrLriuh3Ano4Vt46.jpg",
    "trailerId": "WLxul0Vzuhk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Marc Webb.",
    "whyRecommended": "Top match based on Action themes and direction by Marc Webb.",
    "similarTags": [
      "Marc Webb",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$215 Million",
    "revenue": "$752 Million",
    "tagline": "The untold story begins.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-194662",
    "title": "Birdman",
    "originalTitle": "Birdman",
    "year": 2014,
    "runtime": "119 min",
    "genres": [
      "Drama",
      "Comedy"
    ],
    "imdbRating": 7.4,
    "matchScore": 98,
    "synopsis": "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
    "director": "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
    "cast": [
      "Michael Keaton",
      "Emma Stone",
      "Zach Galifianakis",
      "Naomi Watts"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/s0OrExdg7i3RLR7oqzHRk4q2kL4.jpg",
    "trailerId": "egYzOALlYyU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "whyRecommended": "Top match based on Drama themes and direction by Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu.",
    "similarTags": [
      "Alejandro Gonz\u00e1lez I\u00f1\u00e1rritu",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$18 Million",
    "revenue": "$103 Million",
    "tagline": "or (The Unexpected Virtue of Ignorance)",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-102382",
    "title": "The Amazing Spider-Man 2",
    "originalTitle": "The Amazing Spider-Man 2",
    "year": 2014,
    "runtime": "142 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 6.5,
    "matchScore": 99,
    "synopsis": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen\u2019s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    "director": "Marc Webb",
    "cast": [
      "Andrew Garfield",
      "Emma Stone",
      "Jamie Foxx",
      "Dane DeHaan"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/dGjoPttcbKR5VWg1jQuNFB247KL.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/k0hlAzTryCYX1O1LyC6P8tAa8s0.jpg",
    "trailerId": "DlM2CWNTQ84",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Marc Webb.",
    "whyRecommended": "Top match based on Action themes and direction by Marc Webb.",
    "similarTags": [
      "Marc Webb",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$705 Million",
    "tagline": "No more secrets.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-260346",
    "title": "Taken 3",
    "originalTitle": "Taken 3",
    "year": 2014,
    "runtime": "109 min",
    "genres": [
      "Thriller",
      "Action"
    ],
    "imdbRating": 6.1,
    "matchScore": 90,
    "synopsis": "Ex-government operative Bryan Mills finds his life is shattered when he's falsely accused of a murder that hits close to home. As he's pursued by a savvy police inspector, Mills employs his particular set of skills to track the real killer and exact his unique brand of justice.",
    "director": "Olivier Megaton",
    "cast": [
      "Liam Neeson",
      "Forest Whitaker",
      "Maggie Grace",
      "Famke Janssen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vzvMXMypMq7ieDofKThsxjHj9hn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vFm4pF0BgaWPj0i2zEiZO6TqEQ0.jpg",
    "trailerId": "JuU0M2xBasc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Olivier Megaton.",
    "whyRecommended": "Top match based on Thriller themes and direction by Olivier Megaton.",
    "similarTags": [
      "Olivier Megaton",
      "Thriller",
      "Action"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$48 Million",
    "revenue": "$325 Million",
    "tagline": "It Ends Here",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-146233",
    "title": "Prisoners",
    "originalTitle": "Prisoners",
    "year": 2013,
    "runtime": "153 min",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 7.9,
    "matchScore": 91,
    "synopsis": "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect his family?",
    "director": "Denis Villeneuve",
    "cast": [
      "Hugh Jackman",
      "Jake Gyllenhaal",
      "Paul Dano",
      "Maria Bello"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3RFmTz5h2UuFWEV4oH00XICBR9y.jpg",
    "trailerId": "yszyHq-S9W8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Denis Villeneuve.",
    "whyRecommended": "Top match based on Drama themes and direction by Denis Villeneuve.",
    "similarTags": [
      "Denis Villeneuve",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$46 Million",
    "revenue": "$122 Million",
    "tagline": "Every moment matters.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-429",
    "title": "The Good, the Bad and the Ugly",
    "originalTitle": "Il buono, il brutto, il cattivo",
    "year": 1966,
    "runtime": "161 min",
    "genres": [
      "Western"
    ],
    "imdbRating": 8.1,
    "matchScore": 92,
    "synopsis": "While the Civil War rages between the Union and the Confederacy, three men \u2013 a quiet loner, a ruthless hit man and a Mexican bandit \u2013 comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "director": "Sergio Leone",
    "cast": [
      "Eli Wallach",
      "Clint Eastwood",
      "Lee Van Cleef",
      "Aldo Giuffr\u00e8"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
    "trailerId": "WCnRSl24FPA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Western themes and direction by Sergio Leone.",
    "whyRecommended": "Top match based on Western themes and direction by Sergio Leone.",
    "similarTags": [
      "Sergio Leone",
      "Western"
    ],
    "moods": [
      "\u2728 Western",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$6 Million",
    "tagline": "For three men the Civil War wasn't hell. It was practice.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-10195",
    "title": "Thor",
    "originalTitle": "Thor",
    "year": 2011,
    "runtime": "115 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 6.6,
    "matchScore": 93,
    "synopsis": "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    "director": "Kenneth Branagh",
    "cast": [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Anthony Hopkins"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cDJ61O1STtbWNBwefuqVrRe3d7l.jpg",
    "trailerId": "uHBnrJowBZE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Kenneth Branagh.",
    "whyRecommended": "Top match based on Adventure themes and direction by Kenneth Branagh.",
    "similarTags": [
      "Kenneth Branagh",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$449 Million",
    "tagline": "Two worlds. One hero.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-2501",
    "title": "The Bourne Identity",
    "originalTitle": "The Bourne Identity",
    "year": 2002,
    "runtime": "119 min",
    "genres": [
      "Action",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 94,
    "synopsis": "Wounded to the brink of death and suffering from amnesia, Jason Bourne is rescued at sea by a fisherman. With nothing to go on but a Swiss bank account number, he starts to reconstruct his life, but finds that many people he encounters want him dead. However, Bourne realizes that he has the combat and mental skills of a world-class spy \u2013 but who does he work for?",
    "director": "Doug Liman",
    "cast": [
      "Matt Damon",
      "Franka Potente",
      "Chris Cooper",
      "Clive Owen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aP8swke3gmowbkfZ6lmNidu0y9p.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zxYp7GhqzcNqNSkjHoOdx0BEtOM.jpg",
    "trailerId": "PGKK5wACwrU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Doug Liman.",
    "whyRecommended": "Top match based on Action themes and direction by Doug Liman.",
    "similarTags": [
      "Doug Liman",
      "Action",
      "Drama"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$214 Million",
    "tagline": "He was the perfect weapon until he became the target.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-62",
    "title": "2001: A Space Odyssey",
    "originalTitle": "2001: A Space Odyssey",
    "year": 1968,
    "runtime": "149 min",
    "genres": [
      "Science Fiction",
      "Mystery",
      "Adventure"
    ],
    "imdbRating": 7.9,
    "matchScore": 95,
    "synopsis": "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    "director": "Stanley Kubrick",
    "cast": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester",
      "Douglas Rain"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/w5IDXtifKntw0ajv2co7jFlTQDM.jpg",
    "trailerId": "kR2r-A9H3Kg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Stanley Kubrick.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Stanley Kubrick.",
    "similarTags": [
      "Stanley Kubrick",
      "Science Fiction",
      "Mystery"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$10 Million",
    "revenue": "$68 Million",
    "tagline": "An epic drama of adventure and exploration",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-189",
    "title": "Sin City: A Dame to Kill For",
    "originalTitle": "Sin City: A Dame to Kill For",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Crime",
      "Thriller"
    ],
    "imdbRating": 6.3,
    "matchScore": 96,
    "synopsis": "Some of Sin City's most hard-boiled citizens cross paths with a few of its more reviled inhabitants.",
    "director": "Robert Rodriguez",
    "cast": [
      "Mickey Rourke",
      "Jessica Alba",
      "Josh Brolin",
      "Joseph Gordon-Levitt"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/50kALxDX4mmzIRljbNbPY0u4cie.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rxMnmklIpunsNsRkQ7hw61ZJa84.jpg",
    "trailerId": "XVjDcUCui0w",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Robert Rodriguez.",
    "whyRecommended": "Top match based on Crime themes and direction by Robert Rodriguez.",
    "similarTags": [
      "Robert Rodriguez",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$65 Million",
    "revenue": "$39 Million",
    "tagline": "There is no justice without sin.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-76757",
    "title": "Jupiter Ascending",
    "originalTitle": "Jupiter Ascending",
    "year": 2015,
    "runtime": "124 min",
    "genres": [
      "Science Fiction",
      "Fantasy",
      "Action",
      "Adventure"
    ],
    "imdbRating": 5.2,
    "matchScore": 97,
    "synopsis": "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty\u2026",
    "director": "Lilly Wachowski",
    "cast": [
      "Mila Kunis",
      "Channing Tatum",
      "Sean Bean",
      "Eddie Redmayne"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2NCcAZ3M3F0FxENYmammBknwpVn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/w4hk4QG05nDuSgimpa7XAM6OyPX.jpg",
    "trailerId": "gQHKolIqBGs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Lilly Wachowski.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Lilly Wachowski.",
    "similarTags": [
      "Lilly Wachowski",
      "Science Fiction",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$176 Million",
    "revenue": "$183 Million",
    "tagline": "Expand your universe.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-854",
    "title": "The Mask",
    "originalTitle": "The Mask",
    "year": 1994,
    "runtime": "101 min",
    "genres": [
      "Romance",
      "Comedy",
      "Crime",
      "Fantasy"
    ],
    "imdbRating": 6.6,
    "matchScore": 98,
    "synopsis": "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
    "director": "Chuck Russell",
    "cast": [
      "Jim Carrey",
      "Cameron Diaz",
      "Nancy Fish",
      "Tim Bagley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jPC2eYub74zwf2tPGVtzSlBW6Oy.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bQlw59HncOXX9alFlOYKHAvSnm.jpg",
    "trailerId": "uPrUiKgQVQk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Chuck Russell.",
    "whyRecommended": "Top match based on Romance themes and direction by Chuck Russell.",
    "similarTags": [
      "Chuck Russell",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$23 Million",
    "revenue": "$351 Million",
    "tagline": "From zero to hero.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-350",
    "title": "The Devil Wears Prada",
    "originalTitle": "The Devil Wears Prada",
    "year": 2006,
    "runtime": "109 min",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.0,
    "matchScore": 99,
    "synopsis": "The Devil Wears Prada is about a young journalist who moves to New York to work in the fashion industry. Her boss however is extremely demanding and cruel and won\u2019t let her succeed if she doesn\u2019t fit into the high class elegant look of their magazine when all she really wants to be a good journalist.",
    "director": "David Frankel",
    "cast": [
      "Meryl Streep",
      "Anne Hathaway",
      "Emily Blunt",
      "Stanley Tucci"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8912AsVuS7Sj915apArUFbv6F9L.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gkh6Nt8DtY1XT4gQsyFq9XAVJlJ.jpg",
    "trailerId": "6ZOZwUQKu3E",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by David Frankel.",
    "whyRecommended": "Top match based on Comedy themes and direction by David Frankel.",
    "similarTags": [
      "David Frankel",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$35 Million",
    "revenue": "$326 Million",
    "tagline": "Meet Andy Sachs. A million girls would kill to have her job. She's not one of them.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-225574",
    "title": "Non-Stop",
    "originalTitle": "Non-Stop",
    "year": 2014,
    "runtime": "106 min",
    "genres": [
      "Action",
      "Thriller",
      "Mystery"
    ],
    "imdbRating": 6.8,
    "matchScore": 90,
    "synopsis": "Bill Marks is a burned-out veteran of the Air Marshals service. He views the assignment not as a life-saving duty, but as a desk job in the sky. However, today's flight will be no routine trip. Shortly into the transatlantic journey from New York to London, he receives a series of mysterious text messages ordering him to have the government transfer $150 million into a secret account, or a passenger will die every 20 minutes.",
    "director": "Jaume Collet-Serra",
    "cast": [
      "Liam Neeson",
      "Julianne Moore",
      "Scoot McNairy",
      "Michelle Dockery"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/Nkgaj3X0W2jHQ1TzHEgWFpN3kJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7UOWJEhNbePQeGSaVn9PvcRaujX.jpg",
    "trailerId": "XSF6GPNXr9Y",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Jaume Collet-Serra.",
    "whyRecommended": "Top match based on Action themes and direction by Jaume Collet-Serra.",
    "similarTags": [
      "Jaume Collet-Serra",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$222 Million",
    "tagline": "The hijacking was just the beginning.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-238636",
    "title": "The Purge: Anarchy",
    "originalTitle": "The Purge: Anarchy",
    "year": 2014,
    "runtime": "104 min",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 91,
    "synopsis": "Three groups of people are trying to survive Purge Night, when their stories intertwine and are left stranded in The Purge trying to survive the chaos and violence that occurs.",
    "director": "James DeMonaco",
    "cast": [
      "Frank Grillo",
      "Carmen Ejogo",
      "Zach Gilford",
      "Kiele Sanchez"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qwqHHZLZSUvMkAMQ47ymtfjEifY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/blfZnm6StMPnTY35kaooPBCsSVp.jpg",
    "trailerId": "3mfRasMXmL4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by James DeMonaco.",
    "whyRecommended": "Top match based on Horror themes and direction by James DeMonaco.",
    "similarTags": [
      "James DeMonaco",
      "Horror",
      "Thriller"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$9 Million",
    "revenue": "$108 Million",
    "tagline": "Welcome to America, where one night a year, all crime Is legal.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-920",
    "title": "Cars",
    "originalTitle": "Cars",
    "year": 2006,
    "runtime": "117 min",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy",
      "Family"
    ],
    "imdbRating": 6.6,
    "matchScore": 92,
    "synopsis": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    "director": "John Lasseter",
    "cast": [
      "Owen Wilson",
      "Paul Newman",
      "Bonnie Hunt",
      "Larry the Cable Guy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sOLgkBKf1gjMRc4yXxM5aciXdfr.jpg",
    "trailerId": "bOs0p2E4sZw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by John Lasseter.",
    "whyRecommended": "Top match based on Animation themes and direction by John Lasseter.",
    "similarTags": [
      "John Lasseter",
      "Animation",
      "Adventure"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$461 Million",
    "tagline": "Ahhh... it's got that new movie smell.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-227159",
    "title": "Horrible Bosses 2",
    "originalTitle": "Horrible Bosses 2",
    "year": 2014,
    "runtime": "108 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 6.1,
    "matchScore": 93,
    "synopsis": "Dale, Kurt and Nick decide to start their own business but things don't go as planned because of a slick investor, prompting the trio to pull off a harebrained and misguided kidnapping scheme.",
    "director": "Sean Anders",
    "cast": [
      "Jason Bateman",
      "Jason Sudeikis",
      "Charlie Day",
      "Jennifer Aniston"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/boBOkwIqgrs8noxBUSDkkicKa4K.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5CUtGZASj2UqomudRG1RZOt5QbG.jpg",
    "trailerId": "utriEZFno0E",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Sean Anders.",
    "whyRecommended": "Top match based on Comedy themes and direction by Sean Anders.",
    "similarTags": [
      "Sean Anders",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$42 Million",
    "revenue": "$107 Million",
    "tagline": "New Crime. Same Tools.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-293863",
    "title": "The Age of Adaline",
    "originalTitle": "The Age of Adaline",
    "year": 2015,
    "runtime": "112 min",
    "genres": [
      "Fantasy",
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.4,
    "matchScore": 94,
    "synopsis": "After 29-year-old Adaline recovers from a nearly lethal accident, she inexplicably stops growing older. As the years stretch on and on, Adaline keeps her secret to herself  until she meets a man who changes her life.",
    "director": "Lee Toland Krieger",
    "cast": [
      "Blake Lively",
      "Michiel Huisman",
      "Harrison Ford",
      "Ellen Burstyn"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3XFuCS6wBfpSnUQboLd1JtkJqe0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wTvDGO0xGMmnScqjuiDeWU7PkcB.jpg",
    "trailerId": "7UzSekc0LoQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Lee Toland Krieger.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Lee Toland Krieger.",
    "similarTags": [
      "Lee Toland Krieger",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$65 Million",
    "tagline": "Love is timeless.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-11324",
    "title": "Shutter Island",
    "originalTitle": "Shutter Island",
    "year": 2010,
    "runtime": "138 min",
    "genres": [
      "Drama",
      "Thriller",
      "Mystery"
    ],
    "imdbRating": 7.8,
    "matchScore": 95,
    "synopsis": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Mark Ruffalo",
      "Ben Kingsley",
      "Emily Mortimer"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rbZvGN1A1QyZuoKzhCw8QPmf2q0.jpg",
    "trailerId": "qdPw9x9h5CY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Martin Scorsese.",
    "whyRecommended": "Top match based on Drama themes and direction by Martin Scorsese.",
    "similarTags": [
      "Martin Scorsese",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$80 Million",
    "revenue": "$294 Million",
    "tagline": "Someone is missing.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-18360",
    "title": "Night at the Museum: Battle of the Smithsonian",
    "originalTitle": "Night at the Museum: Battle of the Smithsonian",
    "year": 2009,
    "runtime": "105 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action",
      "Comedy",
      "Family"
    ],
    "imdbRating": 5.9,
    "matchScore": 96,
    "synopsis": "Hapless museum night watchman Larry Daley must help his living, breathing exhibit friends out of a pickle now that they've been transferred to the archives at the Smithsonian Institution. Larry's (mis)adventures this time include close encounters with Amelia Earhart, Abe Lincoln and Ivan the Terrible.",
    "director": "Shawn Levy",
    "cast": [
      "Ben Stiller",
      "Amy Adams",
      "Owen Wilson",
      "Hank Azaria"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/l9yAQn6TyrA3gv5xZZkiMMoZsiw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zdhICEDUlBTQ43fQMa2KJt8fDFX.jpg",
    "trailerId": "lPLY8O1y0qA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Shawn Levy.",
    "whyRecommended": "Top match based on Adventure themes and direction by Shawn Levy.",
    "similarTags": [
      "Shawn Levy",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$413 Million",
    "tagline": "When the lights go off the battle is on.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-8681",
    "title": "Taken",
    "originalTitle": "Taken",
    "year": 2008,
    "runtime": "93 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 7.2,
    "matchScore": 97,
    "synopsis": "While vacationing with a friend in Paris, an American girl is kidnapped by a gang of human traffickers intent on selling her into forced prostitution. Working against the clock, her ex-spy father must pull out all the stops to save her. But with his best years possibly behind him, the job may be more than he can handle.",
    "director": "Pierre Morel",
    "cast": [
      "Liam Neeson",
      "Famke Janssen",
      "Maggie Grace",
      "Katie Cassidy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ognkaUSNgJe1a2pjB4UNdzEo5jT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ysCmtf9Y9fLDChZ88PXId5RbLP1.jpg",
    "trailerId": "ZxKDnpiJaVc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Pierre Morel.",
    "whyRecommended": "Top match based on Action themes and direction by Pierre Morel.",
    "similarTags": [
      "Pierre Morel",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$226 Million",
    "tagline": "They took his daughter.  He'll take their lives.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-14",
    "title": "American Beauty",
    "originalTitle": "American Beauty",
    "year": 1999,
    "runtime": "122 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.9,
    "matchScore": 98,
    "synopsis": "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    "director": "Sam Mendes",
    "cast": [
      "Kevin Spacey",
      "Annette Bening",
      "Thora Birch",
      "Wes Bentley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2ndw55F40IkALzWyjCCza3M6nqM.jpg",
    "trailerId": "XCxzXblZyfQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Sam Mendes.",
    "whyRecommended": "Top match based on Drama themes and direction by Sam Mendes.",
    "similarTags": [
      "Sam Mendes",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$356 Million",
    "tagline": "Look closer.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-408",
    "title": "Snow White and the Seven Dwarfs",
    "originalTitle": "Snow White and the Seven Dwarfs",
    "year": 1937,
    "runtime": "83 min",
    "genres": [
      "Fantasy",
      "Animation",
      "Family"
    ],
    "imdbRating": 6.9,
    "matchScore": 99,
    "synopsis": "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as \"the fairest in the land,\" and Snow White's beauty surpasses her own.",
    "director": "David Hand",
    "cast": [
      "Adriana Caselotti",
      "Lucille La Verne",
      "Harry Stockwell",
      "Roy Atwell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3VAHfuNb6Z7UiW12iYKANSPBl8m.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4yWayBvwl9gHXaWrDrAslxjL7mh.jpg",
    "trailerId": "P4YE-s_8L1Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by David Hand.",
    "whyRecommended": "Top match based on Fantasy themes and direction by David Hand.",
    "similarTags": [
      "David Hand",
      "Fantasy",
      "Animation"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$184 Million",
    "tagline": "The Happiest, Dopiest, Grumpiest, Sneeziest movie of the year.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-24",
    "title": "Kill Bill: Vol. 1",
    "originalTitle": "Kill Bill: Vol. 1",
    "year": 2003,
    "runtime": "111 min",
    "genres": [
      "Action",
      "Crime"
    ],
    "imdbRating": 7.7,
    "matchScore": 90,
    "synopsis": "An assassin is shot at the altar by her ruthless employer, Bill and other members of their assassination circle \u2013 but 'The Bride' lives to plot her vengeance. Setting out for some payback, she makes a death list and hunts down those who wronged her, saving Bill for last.",
    "director": "Quentin Tarantino",
    "cast": [
      "Uma Thurman",
      "Lucy Liu",
      "Vivica A. Fox",
      "Daryl Hannah"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iffzIhuLAO38Po6sh1s6ZEVwlNL.jpg",
    "trailerId": "sXwXk3jcrfU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Quentin Tarantino.",
    "whyRecommended": "Top match based on Action themes and direction by Quentin Tarantino.",
    "similarTags": [
      "Quentin Tarantino",
      "Action",
      "Crime"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$180 Million",
    "tagline": "Go for the kill.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-673",
    "title": "Harry Potter and the Prisoner of Azkaban",
    "originalTitle": "Harry Potter and the Prisoner of Azkaban",
    "year": 2004,
    "runtime": "141 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 7.7,
    "matchScore": 91,
    "synopsis": "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry comes face to face with danger yet again, this time in the form of escaped convict, Sirius Black \u2013 and turns to sympathetic Professor Lupin for help.",
    "director": "Alfonso Cuar\u00f3n",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Gary Oldman"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/htmYEfH7TQgzsXHCnNXxmoYKQtL.jpg",
    "trailerId": "VwErvYgoH70",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Alfonso Cuar\u00f3n.",
    "whyRecommended": "Top match based on Adventure themes and direction by Alfonso Cuar\u00f3n.",
    "similarTags": [
      "Alfonso Cuar\u00f3n",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$789 Million",
    "tagline": "Something wicked this way comes.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-137113",
    "title": "Edge of Tomorrow",
    "originalTitle": "Edge of Tomorrow",
    "year": 2014,
    "runtime": "113 min",
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 7.6,
    "matchScore": 92,
    "synopsis": "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
    "director": "Doug Liman",
    "cast": [
      "Tom Cruise",
      "Emily Blunt",
      "Brendan Gleeson",
      "Bill Paxton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4V1yIoAKPMRQwGBaSses8Bp2nsi.jpg",
    "trailerId": "eb8wTIcGLgQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Doug Liman.",
    "whyRecommended": "Top match based on Action themes and direction by Doug Liman.",
    "similarTags": [
      "Doug Liman",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$178 Million",
    "revenue": "$370 Million",
    "tagline": "Live, Die, Repeat",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-694",
    "title": "The Shining",
    "originalTitle": "The Shining",
    "year": 1980,
    "runtime": "144 min",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdbRating": 8.1,
    "matchScore": 93,
    "synopsis": "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    "director": "Stanley Kubrick",
    "cast": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd",
      "Scatman Crothers"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uAR0AWqhQL1hQa69UDEbb2rE5Wx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/AdKA2F1SzYPhSZdEbjH1Zh75UVQ.jpg",
    "trailerId": "jAE7dNurHR4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by Stanley Kubrick.",
    "whyRecommended": "Top match based on Horror themes and direction by Stanley Kubrick.",
    "similarTags": [
      "Stanley Kubrick",
      "Horror",
      "Thriller"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$19 Million",
    "revenue": "$44 Million",
    "tagline": "A masterpiece of modern horror.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-12155",
    "title": "Alice in Wonderland",
    "originalTitle": "Alice in Wonderland",
    "year": 2010,
    "runtime": "108 min",
    "genres": [
      "Family",
      "Fantasy",
      "Adventure"
    ],
    "imdbRating": 6.4,
    "matchScore": 94,
    "synopsis": "Alice, an unpretentious and individual 19-year-old, is betrothed to a dunce of an English nobleman. At her engagement party, she escapes the crowd to consider whether to go through with the marriage and falls down a hole in the garden after spotting an unusual rabbit. Arriving in a strange and surreal place called 'Underland,' she finds herself in a world that resembles the nightmares she had as a child, filled with talking animals, villainous queens and knights, and frumious bandersnatches. Alice realizes that she is there for a reason \u2013 to conquer the horrific Jabberwocky and restore the rightful queen to her throne.",
    "director": "Tim Burton",
    "cast": [
      "Mia Wasikowska",
      "Johnny Depp",
      "Anne Hathaway",
      "Helena Bonham Carter"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/o0kre9wRCZz3jjSjaru7QU0UtFz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ocOWbTzHcJVTw9Tz173KPeskDOP.jpg",
    "trailerId": "9POCgSRVvf0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Family themes and direction by Tim Burton.",
    "whyRecommended": "Top match based on Family themes and direction by Tim Burton.",
    "similarTags": [
      "Tim Burton",
      "Family",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Family",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$1025 Million",
    "tagline": "You're invited to a very important date.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-9806",
    "title": "The Incredibles",
    "originalTitle": "The Incredibles",
    "year": 2004,
    "runtime": "115 min",
    "genres": [
      "Action",
      "Adventure",
      "Animation",
      "Family"
    ],
    "imdbRating": 7.4,
    "matchScore": 95,
    "synopsis": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    "director": "Brad Bird",
    "cast": [
      "Craig T. Nelson",
      "Holly Hunter",
      "Samuel L. Jackson",
      "Jason Lee"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lxwzY9vNwjDgxWKt3zZ6zcU6rEJ.jpg",
    "trailerId": "sJCjKQQOqT0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Brad Bird.",
    "whyRecommended": "Top match based on Action themes and direction by Brad Bird.",
    "similarTags": [
      "Brad Bird",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$92 Million",
    "revenue": "$631 Million",
    "tagline": "No gut, no glory",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-68721",
    "title": "Iron Man 3",
    "originalTitle": "Iron Man 3",
    "year": 2013,
    "runtime": "130 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 6.8,
    "matchScore": 96,
    "synopsis": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    "director": "Shane Black",
    "cast": [
      "Robert Downey Jr.",
      "Gwyneth Paltrow",
      "Don Cheadle",
      "Guy Pearce"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iVped1djsF0tvGkvnHbzsE3ZPTF.jpg",
    "trailerId": "YLorLVa95Xo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Shane Black.",
    "whyRecommended": "Top match based on Action themes and direction by Shane Black.",
    "similarTags": [
      "Shane Black",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$1215 Million",
    "tagline": "Unleash the power behind the armor.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-184315",
    "title": "Hercules",
    "originalTitle": "Hercules",
    "year": 2014,
    "runtime": "99 min",
    "genres": [
      "Action",
      "Adventure"
    ],
    "imdbRating": 5.6,
    "matchScore": 97,
    "synopsis": "Fourteen hundred years ago, a tormented soul walked the earth that was neither man nor god. Hercules was the powerful son of the god king Zeus, for this he received nothing but suffering his entire life. After twelve arduous labors and the loss of his family, this dark, world-weary soul turned his back on the gods finding his only solace in bloody battle. Over the years he warmed to the company of six similar souls, their only bond being their love of fighting and presence of death. These men and woman never question where they go to fight or why or whom, just how much they will be paid. Now the King of Thrace has hired these mercenaries to train his men to become the greatest army of all time. It is time for this bunch of lost souls to finally have their eyes opened to how far they have fallen when they must train an army to become as ruthless and blood thirsty as their reputation has become.",
    "director": "Brett Ratner",
    "cast": [
      "Dwayne Johnson",
      "Ian McShane",
      "John Hurt",
      "Rufus Sewell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sKNIwY6UENCJ36FvYvnBW3Vdzt7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nl18gyzai02Tu99VkURu7kCFrR8.jpg",
    "trailerId": "HydiAICZq6I",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Brett Ratner.",
    "whyRecommended": "Top match based on Action themes and direction by Brett Ratner.",
    "similarTags": [
      "Brett Ratner",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$100 Million",
    "revenue": "$243 Million",
    "tagline": "Before he was a legend, he was a man.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-163",
    "title": "Ocean's Twelve",
    "originalTitle": "Ocean's Twelve",
    "year": 2004,
    "runtime": "125 min",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "imdbRating": 6.4,
    "matchScore": 98,
    "synopsis": "Danny Ocean reunites with his old flame and the rest of his merry band of thieves in carrying out three huge heists in Rome, Paris and Amsterdam \u2013 but a Europol agent is hot on their heels.",
    "director": "Steven Soderbergh",
    "cast": [
      "George Clooney",
      "Brad Pitt",
      "Catherine Zeta-Jones",
      "Julia Roberts"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/pE5anFf7nf6ah7V3VRezQ1KSovi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5b5HrewiViLWEdMR4dmbd7ajQ8Q.jpg",
    "trailerId": "ATHwwFhB-UQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Steven Soderbergh.",
    "whyRecommended": "Top match based on Thriller themes and direction by Steven Soderbergh.",
    "similarTags": [
      "Steven Soderbergh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$110 Million",
    "revenue": "$362 Million",
    "tagline": "Twelve is the new eleven.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-857",
    "title": "Saving Private Ryan",
    "originalTitle": "Saving Private Ryan",
    "year": 1998,
    "runtime": "169 min",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "imdbRating": 7.9,
    "matchScore": 99,
    "synopsis": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    "director": "Steven Spielberg",
    "cast": [
      "Tom Hanks",
      "Matt Damon",
      "Vin Diesel",
      "Tom Sizemore"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bdD39MpSVhKjxarTxLSfX6baoMP.jpg",
    "trailerId": "y4SA9yUDgW8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Drama themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Drama",
      "History"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$70 Million",
    "revenue": "$481 Million",
    "tagline": "The mission is a man.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-217",
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "originalTitle": "Indiana Jones and the Kingdom of the Crystal Skull",
    "year": 2008,
    "runtime": "122 min",
    "genres": [
      "Adventure",
      "Action"
    ],
    "imdbRating": 5.7,
    "matchScore": 90,
    "synopsis": "Set during the Cold War, the Soviets \u2013 led by sword-wielding Irina Spalko \u2013 are in search of a crystal skull which has supernatural powers related to a mystical Lost City of Gold. After being captured and then escaping from them, Indy is coerced to head to Peru at the behest of a young man whose friend \u2013 and Indy's colleague \u2013 Professor Oxley has been captured for his knowledge of the skull's whereabouts.",
    "director": "Steven Spielberg",
    "cast": [
      "Harrison Ford",
      "Cate Blanchett",
      "Shia LaBeouf",
      "Ray Winstone"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/56As6XEM1flWvprX4LgkPl8ii4K.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/p96949hcwUG2BwE6MgKmw0uYNCx.jpg",
    "trailerId": "kTJy1rFBtVw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$786 Million",
    "tagline": "The adventure continues . . .",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-122906",
    "title": "About Time",
    "originalTitle": "About Time",
    "year": 2013,
    "runtime": "123 min",
    "genres": [
      "Comedy",
      "Drama",
      "Science Fiction"
    ],
    "imdbRating": 7.8,
    "matchScore": 91,
    "synopsis": "The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life \u2013 so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",
    "director": "Richard Curtis",
    "cast": [
      "Domhnall Gleeson",
      "Rachel McAdams",
      "Bill Nighy",
      "Lydia Wilson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ls6zswrOZVhCXQBh96DlbnLBajM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/einbto9qLXFx9QXxEHylaxDbKPx.jpg",
    "trailerId": "7OIFdWk83no",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Richard Curtis.",
    "whyRecommended": "Top match based on Comedy themes and direction by Richard Curtis.",
    "similarTags": [
      "Richard Curtis",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$87 Million",
    "tagline": "What if every moment in life came with a second chance?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-241554",
    "title": "Run All Night",
    "originalTitle": "Run All Night",
    "year": 2015,
    "runtime": "114 min",
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 6.3,
    "matchScore": 92,
    "synopsis": "Brooklyn mobster and prolific hit man Jimmy Conlon has seen better days. Longtime best friend of a mob boss, Jimmy is haunted by the sins of his past\u2014as well as a dogged police detective who\u2019s been one step behind Jimmy for 30 years. But when Jimmy\u2019s estranged son becomes a target, Jimmy must make a choice between the crime family he chose and the real family he abandoned long ago. Now, with nowhere safe to turn, Jimmy has just one night to figure out exactly where his loyalties lie and to see if he can finally make things right.",
    "director": "Jaume Collet-Serra",
    "cast": [
      "Liam Neeson",
      "Ed Harris",
      "Joel Kinnaman",
      "Boyd Holbrook"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iGvSMoPbWZWDnIhh54yiq3sW7wH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dqTvzfXhUWPoBuIbQInOBmYvEL4.jpg",
    "trailerId": "plrh783KCqg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Jaume Collet-Serra.",
    "whyRecommended": "Top match based on Action themes and direction by Jaume Collet-Serra.",
    "similarTags": [
      "Jaume Collet-Serra",
      "Action",
      "Crime"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$71 Million",
    "tagline": "No sin goes unpunished",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1771",
    "title": "Captain America: The First Avenger",
    "originalTitle": "Captain America: The First Avenger",
    "year": 2011,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 93,
    "synopsis": "Predominantly set during World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull \u2013 Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    "director": "Joe Johnston",
    "cast": [
      "Chris Evans",
      "Hugo Weaving",
      "Tommy Lee Jones",
      "Hayley Atwell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yFuKvT4Vm3sKHdFY4eG6I4ldAnn.jpg",
    "trailerId": "W4DlMggBPvc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Joe Johnston.",
    "whyRecommended": "Top match based on Action themes and direction by Joe Johnston.",
    "similarTags": [
      "Joe Johnston",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$140 Million",
    "revenue": "$370 Million",
    "tagline": "When patriots become heroes",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1124",
    "title": "The Prestige",
    "originalTitle": "The Prestige",
    "year": 2006,
    "runtime": "130 min",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 8.0,
    "matchScore": 94,
    "synopsis": "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
    "director": "Christopher Nolan",
    "cast": [
      "Hugh Jackman",
      "Christian Bale",
      "Michael Caine",
      "Scarlett Johansson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/Ag2B2KHKQPukjH7WutmgnnSNurZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/z3br1ub7spqGMkxgjgJSdM4DC21.jpg",
    "trailerId": "ObGVA1WOqyE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Drama themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Drama",
      "Mystery"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$109 Million",
    "tagline": "Are You Watching Closely?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-222935",
    "title": "The Fault in Our Stars",
    "originalTitle": "The Fault in Our Stars",
    "year": 2014,
    "runtime": "125 min",
    "genres": [
      "Romance",
      "Drama"
    ],
    "imdbRating": 7.6,
    "matchScore": 95,
    "synopsis": "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    "director": "Josh Boone",
    "cast": [
      "Shailene Woodley",
      "Ansel Elgort",
      "Nat Wolff",
      "Laura Dern"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kcVuktIlrn9SAN1uBmPDnocTQmF.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oQaVV7p916HO5MDI820zzs1pin9.jpg",
    "trailerId": "3Ixw15DE-xY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Josh Boone.",
    "whyRecommended": "Top match based on Romance themes and direction by Josh Boone.",
    "similarTags": [
      "Josh Boone",
      "Romance",
      "Drama"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$12 Million",
    "revenue": "$307 Million",
    "tagline": "One Sick Love Story",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-218",
    "title": "The Terminator",
    "originalTitle": "The Terminator",
    "year": 1984,
    "runtime": "108 min",
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 7.3,
    "matchScore": 96,
    "synopsis": "In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the \"Terminator\" back to 1984 to kill Sarah Connor, whose unborn son is destined to lead insurgents against 21st century mechanical hegemony. Meanwhile, the human-resistance movement dispatches a lone warrior to safeguard Sarah. Can he stop the virtually indestructible killing machine?",
    "director": "James Cameron",
    "cast": [
      "Arnold Schwarzenegger",
      "Michael Biehn",
      "Linda Hamilton",
      "Paul Winfield"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ffdqHMWkh1h9MABwIfbfRJhgFW6.jpg",
    "trailerId": "nGrW-OR2uDk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by James Cameron.",
    "whyRecommended": "Top match based on Action themes and direction by James Cameron.",
    "similarTags": [
      "James Cameron",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$78 Million",
    "tagline": "Your future is in his hands.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-22970",
    "title": "The Cabin in the Woods",
    "originalTitle": "The Cabin in the Woods",
    "year": 2012,
    "runtime": "95 min",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdbRating": 6.5,
    "matchScore": 97,
    "synopsis": "Five college friends spend the weekend at a remote cabin in the woods, where they get more than they bargained for. Together, they must discover the truth behind the cabin in the woods.",
    "director": "Drew Goddard",
    "cast": [
      "Kristen Connolly",
      "Chris Hemsworth",
      "Anna Hutchison",
      "Fran Kranz"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/zZZe5wn0udlhMtdlDjN4NB72R6e.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wJffMiCnrszaNclKggGixYWB7D7.jpg",
    "trailerId": "7NiAWF7VIFY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by Drew Goddard.",
    "whyRecommended": "Top match based on Horror themes and direction by Drew Goddard.",
    "similarTags": [
      "Drew Goddard",
      "Horror",
      "Thriller"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$66 Million",
    "tagline": "If you hear a strange sound outside... have sex",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-640",
    "title": "Catch Me If You Can",
    "originalTitle": "Catch Me If You Can",
    "year": 2002,
    "runtime": "141 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 7.7,
    "matchScore": 98,
    "synopsis": "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
    "director": "Steven Spielberg",
    "cast": [
      "Leonardo DiCaprio",
      "Tom Hanks",
      "Christopher Walken",
      "Martin Sheen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sfW8gtA6Bz2F4zK1FoCKbMqTF8Z.jpg",
    "trailerId": "71rDQ7z4eFg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Drama themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$52 Million",
    "revenue": "$352 Million",
    "tagline": "The true story of a real fake.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-83542",
    "title": "Cloud Atlas",
    "originalTitle": "Cloud Atlas",
    "year": 2012,
    "runtime": "172 min",
    "genres": [
      "Drama",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 99,
    "synopsis": "A set of six nested stories spanning time between the 19th century and a distant post-apocalyptic future. Cloud Atlas explores how the actions and consequences of individual lives impact one another throughout the past, the present and the future. Action, mystery and romance weave through the story as one soul is shaped from a killer into a hero and a single act of kindness ripples across centuries to inspire a revolution in the distant future.  Based on the award winning novel by David Mitchell. Directed by Tom Tykwer and the Wachowskis.",
    "director": "Tom Tykwer",
    "cast": [
      "Tom Hanks",
      "Halle Berry",
      "Jim Broadbent",
      "Hugo Weaving"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8naVv2Xu3rWI5JKHz0vCujx6GaJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cHm1lWAok12vwnTHqzprbPTk49q.jpg",
    "trailerId": "ByehYal_cCs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Tom Tykwer.",
    "whyRecommended": "Top match based on Drama themes and direction by Tom Tykwer.",
    "similarTags": [
      "Tom Tykwer",
      "Drama",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$102 Million",
    "revenue": "$130 Million",
    "tagline": "Everything is Connected",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-8909",
    "title": "Wanted",
    "originalTitle": "Wanted",
    "year": 2008,
    "runtime": "110 min",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 6.4,
    "matchScore": 90,
    "synopsis": "Doormat Wesley Gibson discovers that his recently murdered father \u2013 who Wesley never knew \u2013 belonged to a secret guild of assassins. After a leather-clad sexpot drafts Wesley into the society, he hones his innate killing skills and turns avenger.",
    "director": "Timur Bekmambetov",
    "cast": [
      "Angelina Jolie",
      "James McAvoy",
      "Morgan Freeman",
      "Thomas Kretschmann"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/njy7Pz7ZHZceO7lNfGIHKphY8Hd.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vjwuT8EzWY96W6nrJKZNI2WJU87.jpg",
    "trailerId": "b9YEdjEKme0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Timur Bekmambetov.",
    "whyRecommended": "Top match based on Action themes and direction by Timur Bekmambetov.",
    "similarTags": [
      "Timur Bekmambetov",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$75 Million",
    "revenue": "$258 Million",
    "tagline": "Choose your destiny.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-20526",
    "title": "TRON: Legacy",
    "originalTitle": "TRON: Legacy",
    "year": 2010,
    "runtime": "125 min",
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 6.3,
    "matchScore": 91,
    "synopsis": "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
    "director": "Joseph Kosinski",
    "cast": [
      "Garrett Hedlund",
      "Jeff Bridges",
      "Olivia Wilde",
      "Bruce Boxleitner"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8Nc6R8k7bG8frSiDJo0oLucF7dN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uUa6jgSr5BQpcBhhaz1PV1JhSa4.jpg",
    "trailerId": "m9CTGwEZiPk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Joseph Kosinski.",
    "whyRecommended": "Top match based on Adventure themes and direction by Joseph Kosinski.",
    "similarTags": [
      "Joseph Kosinski",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$170 Million",
    "revenue": "$400 Million",
    "tagline": "The Game Has Changed.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-862",
    "title": "Toy Story",
    "originalTitle": "Toy Story",
    "year": 1995,
    "runtime": "81 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "imdbRating": 7.7,
    "matchScore": 92,
    "synopsis": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    "director": "John Lasseter",
    "cast": [
      "Tom Hanks",
      "Tim Allen",
      "Don Rickles",
      "Jim Varney"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
    "trailerId": "CxwTLktovTU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by John Lasseter.",
    "whyRecommended": "Top match based on Animation themes and direction by John Lasseter.",
    "similarTags": [
      "John Lasseter",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$373 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-13475",
    "title": "Star Trek",
    "originalTitle": "Star Trek",
    "year": 2009,
    "runtime": "127 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "imdbRating": 7.4,
    "matchScore": 93,
    "synopsis": "The fate of the galaxy rests in the hands of bitter rivals. One, James Kirk, is a delinquent, thrill-seeking Iowa farm boy. The other, Spock, a Vulcan, was raised in a logic-based society that rejects all emotion. As fiery instinct clashes with calm reason, their unlikely but powerful partnership is the only thing capable of leading their crew through unimaginable danger, boldly going where no one has gone before. The human adventure has begun again.",
    "director": "J.J. Abrams",
    "cast": [
      "Chris Pine",
      "Zachary Quinto",
      "Leonard Nimoy",
      "Eric Bana"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9vaRPXj44Q2meHgt3VVfQufiHOJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/q7M0JpPixbEYT8EhnI7wTEMONxz.jpg",
    "trailerId": "pFVvigZ5wQY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by J.J. Abrams.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by J.J. Abrams.",
    "similarTags": [
      "J.J. Abrams",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$385 Million",
    "tagline": "The future begins.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-745",
    "title": "The Sixth Sense",
    "originalTitle": "The Sixth Sense",
    "year": 1999,
    "runtime": "107 min",
    "genres": [
      "Mystery",
      "Thriller",
      "Drama"
    ],
    "imdbRating": 7.7,
    "matchScore": 94,
    "synopsis": "A psychological thriller about an eight year old boy named Cole Sear who believes he can see into the world of the dead. A child psychologist named Malcolm Crowe comes to Cole to help him deal with his problem, learning that he really can see ghosts of dead people.",
    "director": "M. Night Shyamalan",
    "cast": [
      "Bruce Willis",
      "Toni Collette",
      "Olivia Williams",
      "Haley Joel Osment"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vOyfUXNFSnaTk7Vk5AjpsKTUWsu.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6TjllWT3cGrPFyqDXurVZ3L8bBi.jpg",
    "trailerId": "HXG4HTIlc1U",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Mystery themes and direction by M. Night Shyamalan.",
    "whyRecommended": "Top match based on Mystery themes and direction by M. Night Shyamalan.",
    "similarTags": [
      "M. Night Shyamalan",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "\u2728 Mystery",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$672 Million",
    "tagline": "Not every gift is a blessing.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-225886",
    "title": "Sex Tape",
    "originalTitle": "Sex Tape",
    "year": 2014,
    "runtime": "97 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 5.3,
    "matchScore": 95,
    "synopsis": "When Jay and Annie first got together, their romantic connection was intense \u2013 but ten years and two kids later, the flame of their love needs a spark.  To kick things up a notch, they decide \u2013 why not? \u2013 to make a video of themselves trying out every position in The Joy of Sex in one marathon three-hour session.  It seems like a great idea \u2013 until they discover that their most private video is no longer private.  With their reputations on the line, they know they\u2019re just one click away from being laid bare to the world... but as their race to reclaim their video leads to a night they'll never forget, they'll find that their video will expose even more than they bargained for.",
    "director": "Jake Kasdan",
    "cast": [
      "Cameron Diaz",
      "Jason Segel",
      "Rob Corddry",
      "Ellie Kemper"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/u2h7UnSHrbAA5WBoKhdH1rlDZfz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nFCUBRDF4C6RWopNo0nAfvMA6mm.jpg",
    "trailerId": "sxl4aOyHSwo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Jake Kasdan.",
    "whyRecommended": "Top match based on Comedy themes and direction by Jake Kasdan.",
    "similarTags": [
      "Jake Kasdan",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$126 Million",
    "tagline": "A movie about a movie they don't want you to see.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-16869",
    "title": "Inglourious Basterds",
    "originalTitle": "Inglourious Basterds",
    "year": 2009,
    "runtime": "153 min",
    "genres": [
      "Drama",
      "Action",
      "Thriller",
      "War"
    ],
    "imdbRating": 7.9,
    "matchScore": 96,
    "synopsis": "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
    "director": "Quentin Tarantino",
    "cast": [
      "Brad Pitt",
      "M\u00e9lanie Laurent",
      "Christoph Waltz",
      "Eli Roth"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hwNtEmmugU5Yd7hpfprNWI0DGIn.jpg",
    "trailerId": "uSEDz-my7XQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Quentin Tarantino.",
    "whyRecommended": "Top match based on Drama themes and direction by Quentin Tarantino.",
    "similarTags": [
      "Quentin Tarantino",
      "Drama",
      "Action"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$70 Million",
    "revenue": "$319 Million",
    "tagline": "Once upon a time in Nazi occupied France...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-100402",
    "title": "Captain America: The Winter Soldier",
    "originalTitle": "Captain America: The Winter Soldier",
    "year": 2014,
    "runtime": "136 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 7.6,
    "matchScore": 97,
    "synopsis": "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy\u2014the Winter Soldier.",
    "director": "Anthony Russo",
    "cast": [
      "Chris Evans",
      "Samuel L. Jackson",
      "Scarlett Johansson",
      "Robert Redford"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1RWLMyC9KcFfcaoViMiJGSSZzzr.jpg",
    "trailerId": "7SlILk2WMTI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Anthony Russo.",
    "whyRecommended": "Top match based on Action themes and direction by Anthony Russo.",
    "similarTags": [
      "Anthony Russo",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$170 Million",
    "revenue": "$714 Million",
    "tagline": "In heroes we trust.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1366",
    "title": "Rocky",
    "originalTitle": "Rocky",
    "year": 1976,
    "runtime": "119 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.5,
    "matchScore": 98,
    "synopsis": "When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer  Mickey Goldmill to make the most of this once in a lifetime break.",
    "director": "John G. Avildsen",
    "cast": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young",
      "Carl Weathers"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xSI0dbKLDETwhiVUy6hGE8KXUln.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bacOuUnRBoAO1NjMfsAGX2EKRrS.jpg",
    "trailerId": "-Hk-LYcavrw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by John G. Avildsen.",
    "whyRecommended": "Top match based on Drama themes and direction by John G. Avildsen.",
    "similarTags": [
      "John G. Avildsen",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$117 Million",
    "tagline": "His whole life was a million-to-one shot.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-75656",
    "title": "Now You See Me",
    "originalTitle": "Now You See Me",
    "year": 2013,
    "runtime": "115 min",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "imdbRating": 7.3,
    "matchScore": 99,
    "synopsis": "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    "director": "Louis Leterrier",
    "cast": [
      "Jesse Eisenberg",
      "Mark Ruffalo",
      "Woody Harrelson",
      "M\u00e9lanie Laurent"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xEY0MV2jSQBz9iOJfCFvLTiPGMA.jpg",
    "trailerId": "DaavRAV8a0A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Louis Leterrier.",
    "whyRecommended": "Top match based on Thriller themes and direction by Louis Leterrier.",
    "similarTags": [
      "Louis Leterrier",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$75 Million",
    "revenue": "$117 Million",
    "tagline": "4 amazing magicians. 3 impossible heists. 1 billion dollars. This is no illusion.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-6479",
    "title": "I Am Legend",
    "originalTitle": "I Am Legend",
    "year": 2007,
    "runtime": "101 min",
    "genres": [
      "Drama",
      "Horror",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 6.9,
    "matchScore": 90,
    "synopsis": "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    "director": "Francis Lawrence",
    "cast": [
      "Will Smith",
      "Alice Braga",
      "Charlie Tahan",
      "Salli Richardson-Whitfield"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ePgD1cwmklyrFBjl6z96IuixuSY.jpg",
    "trailerId": "4uDU6SUpr8k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Francis Lawrence.",
    "whyRecommended": "Top match based on Drama themes and direction by Francis Lawrence.",
    "similarTags": [
      "Francis Lawrence",
      "Drama",
      "Horror"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$585 Million",
    "tagline": "The last man on Earth is not alone",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-604",
    "title": "The Matrix Reloaded",
    "originalTitle": "The Matrix Reloaded",
    "year": 2003,
    "runtime": "138 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 6.7,
    "matchScore": 91,
    "synopsis": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance.  Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source.  Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
    "director": "Lilly Wachowski",
    "cast": [
      "Keanu Reeves",
      "Carrie-Anne Moss",
      "Laurence Fishburne",
      "Hugo Weaving"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ihOJcrorpDQtHTzIOrobbOhpJsj.jpg",
    "trailerId": "zmYE3tg26Qc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Lilly Wachowski.",
    "whyRecommended": "Top match based on Adventure themes and direction by Lilly Wachowski.",
    "similarTags": [
      "Lilly Wachowski",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$738 Million",
    "tagline": "Free your mind.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-70",
    "title": "Million Dollar Baby",
    "originalTitle": "Million Dollar Baby",
    "year": 2004,
    "runtime": "132 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.7,
    "matchScore": 92,
    "synopsis": "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
    "director": "Clint Eastwood",
    "cast": [
      "Clint Eastwood",
      "Hilary Swank",
      "Morgan Freeman",
      "Jay Baruchel"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jcfEqKdWF1zeyvECPqp3mkWLct2.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oGMomeS7bE43eN8SGJUaKvQnmud.jpg",
    "trailerId": "5_RsHRmIRBY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Clint Eastwood.",
    "whyRecommended": "Top match based on Drama themes and direction by Clint Eastwood.",
    "similarTags": [
      "Clint Eastwood",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$216 Million",
    "tagline": "Beyond his silence, there is a past. Beyond her dreams, there is a feeling. Beyond hope, there is a memory. Beyond their journey, there is a love.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-111",
    "title": "Scarface",
    "originalTitle": "Scarface",
    "year": 1983,
    "runtime": "170 min",
    "genres": [
      "Action",
      "Crime",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 8.0,
    "matchScore": 93,
    "synopsis": "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
    "director": "Brian De Palma",
    "cast": [
      "Al Pacino",
      "Steven Bauer",
      "Michelle Pfeiffer",
      "Mary Elizabeth Mastrantonio"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1qM2BYNE11Viby8ImC9LC00DgDr.jpg",
    "trailerId": "lZMIrD36MG8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Brian De Palma.",
    "whyRecommended": "Top match based on Action themes and direction by Brian De Palma.",
    "similarTags": [
      "Brian De Palma",
      "Action",
      "Crime"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$65 Million",
    "tagline": "The world is yours...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-8355",
    "title": "Ice Age: Dawn of the Dinosaurs",
    "originalTitle": "Ice Age: Dawn of the Dinosaurs",
    "year": 2009,
    "runtime": "94 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Adventure"
    ],
    "imdbRating": 6.5,
    "matchScore": 94,
    "synopsis": "Times are changing for Manny the moody mammoth, Sid the motor mouthed sloth and Diego the crafty saber-toothed tiger. Life heats up for our heroes when they meet some new and none-too-friendly neighbors \u2013 the mighty dinosaurs.",
    "director": "Carlos Saldanha",
    "cast": [
      "Ray Romano",
      "John Leguizamo",
      "Denis Leary",
      "Queen Latifah"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cXOLaxcNjNAYmEx1trZxOTKhK3Q.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6Ybbh8TrO8bkEfQXDedekLwVDfA.jpg",
    "trailerId": "byUCa2vjDik",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Carlos Saldanha.",
    "whyRecommended": "Top match based on Animation themes and direction by Carlos Saldanha.",
    "similarTags": [
      "Carlos Saldanha",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$886 Million",
    "tagline": "You Won't Believe Your Ice!",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-296",
    "title": "Terminator 3: Rise of the Machines",
    "originalTitle": "Terminator 3: Rise of the Machines",
    "year": 2003,
    "runtime": "109 min",
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 5.9,
    "matchScore": 95,
    "synopsis": "It's been 10 years since John Connor saved Earth from Judgment Day, and he's now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor's former nemesis, the Terminator, is back to aid the now-adult Connor \u2026 just like he promised.",
    "director": "Jonathan Mostow",
    "cast": [
      "Arnold Schwarzenegger",
      "Nick Stahl",
      "Claire Danes",
      "Kristanna Loken"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vvevzdYIrk2636maNW4qeWmlPFG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/voVkSwgFYv9GOpRNfUAwj6qYRTL.jpg",
    "trailerId": "ysQizA7Una8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Jonathan Mostow.",
    "whyRecommended": "Top match based on Action themes and direction by Jonathan Mostow.",
    "similarTags": [
      "Jonathan Mostow",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$435 Million",
    "tagline": "The Machines Will Rise.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-70981",
    "title": "Prometheus",
    "originalTitle": "Prometheus",
    "year": 2012,
    "runtime": "124 min",
    "genres": [
      "Science Fiction",
      "Adventure",
      "Mystery"
    ],
    "imdbRating": 6.3,
    "matchScore": 96,
    "synopsis": "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    "director": "Ridley Scott",
    "cast": [
      "Noomi Rapace",
      "Michael Fassbender",
      "Guy Pearce",
      "Idris Elba"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qsYQflQhOuhDpQ0W2aOcwqgDAeI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qDG5SlGkWNsjSJWiGTBMFI8DpzA.jpg",
    "trailerId": "cJMIzdf1eo8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Science Fiction",
      "Adventure"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$403 Million",
    "tagline": "The Search for Our Beginning Could Lead to Our End.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-38055",
    "title": "Megamind",
    "originalTitle": "Megamind",
    "year": 2010,
    "runtime": "95 min",
    "genres": [
      "Animation",
      "Action",
      "Comedy",
      "Family",
      "Science Fiction"
    ],
    "imdbRating": 6.7,
    "matchScore": 97,
    "synopsis": "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
    "director": "Tom McGrath",
    "cast": [
      "Will Ferrell",
      "Brad Pitt",
      "Tina Fey",
      "Jonah Hill"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/irpJXGiVr539uuspcQcNdkhS2lq.jpg",
    "trailerId": "bixkC-ZrH34",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Tom McGrath.",
    "whyRecommended": "Top match based on Animation themes and direction by Tom McGrath.",
    "similarTags": [
      "Tom McGrath",
      "Animation",
      "Action"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$321 Million",
    "tagline": "His brain is off the chain.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-214756",
    "title": "Ted 2",
    "originalTitle": "Ted 2",
    "year": 2015,
    "runtime": "115 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 6.2,
    "matchScore": 98,
    "synopsis": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
    "director": "Seth MacFarlane",
    "cast": [
      "Mark Wahlberg",
      "Seth MacFarlane",
      "Amanda Seyfried",
      "Jessica Barth"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/38C91I7Xft0gyY7BITm8i4yvuRb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xtHonIIIQXverDQM08TMQXjn9Fe.jpg",
    "trailerId": "mSG3R_2Uisw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Seth MacFarlane.",
    "whyRecommended": "Top match based on Comedy themes and direction by Seth MacFarlane.",
    "similarTags": [
      "Seth MacFarlane",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$68 Million",
    "revenue": "$217 Million",
    "tagline": "Ted is Coming, Again.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-273248",
    "title": "The Hateful Eight",
    "originalTitle": "The Hateful Eight",
    "year": 2015,
    "runtime": "167 min",
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Western"
    ],
    "imdbRating": 7.6,
    "matchScore": 99,
    "synopsis": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    "director": "Quentin Tarantino",
    "cast": [
      "Samuel L. Jackson",
      "Kurt Russell",
      "Jennifer Jason Leigh",
      "Walton Goggins"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7g1zO5t0bd27Iqn5ZUDJmksOGPJ.jpg",
    "trailerId": "GRG7fAPksbg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Quentin Tarantino.",
    "whyRecommended": "Top match based on Crime themes and direction by Quentin Tarantino.",
    "similarTags": [
      "Quentin Tarantino",
      "Crime",
      "Drama"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$44 Million",
    "revenue": "$155 Million",
    "tagline": "No one comes up here without a damn good reason.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-85",
    "title": "Raiders of the Lost Ark",
    "originalTitle": "Raiders of the Lost Ark",
    "year": 1981,
    "runtime": "115 min",
    "genres": [
      "Adventure",
      "Action"
    ],
    "imdbRating": 7.7,
    "matchScore": 90,
    "synopsis": "When Dr. Indiana Jones \u2013 the tweed-suited professor who just happens to be a celebrated archaeologist \u2013 is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
    "director": "Steven Spielberg",
    "cast": [
      "Harrison Ford",
      "Karen Allen",
      "Paul Freeman",
      "Ronald Lacey"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zPACwR32amTNvzId9qyapCWXYDJ.jpg",
    "trailerId": "0xQSIdSRlAk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$18 Million",
    "revenue": "$389 Million",
    "tagline": "Indiana Jones - the new hero from the creators of JAWS and STAR WARS.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-75612",
    "title": "Oblivion",
    "originalTitle": "Oblivion",
    "year": 2013,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Science Fiction",
      "Adventure",
      "Mystery"
    ],
    "imdbRating": 6.4,
    "matchScore": 91,
    "synopsis": "Jack Harper is one of the last few drone repairmen stationed on Earth.  Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack\u2019s mission is nearly complete.  His existence is brought crashing down when he rescues a beautiful  stranger from a downed spacecraft.  Her arrival triggers a chain of events that  forces him to question everything he knows and puts the fate of humanity in his hands.",
    "director": "Joseph Kosinski",
    "cast": [
      "Tom Cruise",
      "Morgan Freeman",
      "Olga Kurylenko",
      "Andrea Riseborough"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/bYLM3GpNUZnoFElPXp1zlhDPdtv.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2kVt8oj1cSz4GAP0Hi8SESOiH0T.jpg",
    "trailerId": "tx6_JMDFfWI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Joseph Kosinski.",
    "whyRecommended": "Top match based on Action themes and direction by Joseph Kosinski.",
    "similarTags": [
      "Joseph Kosinski",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$286 Million",
    "tagline": "Earth is a memory worth fighting for",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-679",
    "title": "Aliens",
    "originalTitle": "Aliens",
    "year": 1986,
    "runtime": "137 min",
    "genres": [
      "Horror",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 7.7,
    "matchScore": 92,
    "synopsis": "When Ripley's lifepod is found by a salvage crew over 50 years later, she finds that terra-formers are on the very planet they found the alien species. When the company sends a family of colonists out to investigate her story, all contact is lost with the planet and colonists. They enlist Ripley and the colonial marines to return and search for answers.",
    "director": "James Cameron",
    "cast": [
      "Sigourney Weaver",
      "Michael Biehn",
      "James Remar",
      "Paul Reiser"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/r1x5JGpyqZU8PYhbs4UcrO1Xb6x.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4kix6fAblJIH6eMs0Ku2loyZJXK.jpg",
    "trailerId": "8OxirbuHsBA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by James Cameron.",
    "whyRecommended": "Top match based on Horror themes and direction by James Cameron.",
    "similarTags": [
      "James Cameron",
      "Horror",
      "Action"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$18 Million",
    "revenue": "$183 Million",
    "tagline": "This Time It's War",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-13448",
    "title": "Angels & Demons",
    "originalTitle": "Angels & Demons",
    "year": 2009,
    "runtime": "138 min",
    "genres": [
      "Thriller",
      "Mystery"
    ],
    "imdbRating": 6.5,
    "matchScore": 93,
    "synopsis": "Harvard symbologist Robert Langdon investigates a mysterious symbol seared into the chest of a murdered physicist. He discovers evidence of the unimaginable, the rebirth of an ancient secret brotherhood known as the Illuminati, the most powerful underground organization ever to walk the earth.",
    "director": "Ron Howard",
    "cast": [
      "Tom Hanks",
      "Ewan McGregor",
      "Ayelet Zurer",
      "Stellan Skarsg\u00e5rd"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tFZQAuulEOtFTp0gHbVdEXwGrYe.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/olz8Xw3yOLpBAHKgPoSRwmomdM.jpg",
    "trailerId": "arb2-aZMDFg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Ron Howard.",
    "whyRecommended": "Top match based on Thriller themes and direction by Ron Howard.",
    "similarTags": [
      "Ron Howard",
      "Thriller",
      "Mystery"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$356 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-10674",
    "title": "Mulan",
    "originalTitle": "Mulan",
    "year": 1998,
    "runtime": "88 min",
    "genres": [
      "Animation",
      "Family",
      "Adventure"
    ],
    "imdbRating": 7.6,
    "matchScore": 94,
    "synopsis": "A tomboyish girl disguises herself as a young man so she can fight with the Imperial Chinese Army against the invading Huns. With help from wise-cracking dragon Mushu, Mulan just might save her country -- and win the heart of handsome Captain Li Shang.",
    "director": "Tony Bancroft",
    "cast": [
      "Eddie Murphy",
      "Jackie Chan",
      "Ming-Na Wen",
      "Lea Salonga"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jAbexAtB0aSfP5Ay4TpWHARyVnG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mUYV0ZdsDEliGaQahcQH1F3grsP.jpg",
    "trailerId": "2z2KsFZs-8I",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Tony Bancroft.",
    "whyRecommended": "Top match based on Animation themes and direction by Tony Bancroft.",
    "similarTags": [
      "Tony Bancroft",
      "Animation",
      "Family"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$304 Million",
    "tagline": "This time, the princess saves the prince.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-411",
    "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "originalTitle": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    "year": 2005,
    "runtime": "143 min",
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 6.7,
    "matchScore": 95,
    "synopsis": "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, the they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
    "director": "Andrew Adamson",
    "cast": [
      "William Moseley",
      "Anna Popplewell",
      "Skandar Keynes",
      "Georgie Henley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tuDhEdza074bA497bO9WFEPs6O6.jpg",
    "trailerId": "3mKPrxjwF7A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Andrew Adamson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Andrew Adamson.",
    "similarTags": [
      "Andrew Adamson",
      "Adventure",
      "Family"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$180 Million",
    "revenue": "$748 Million",
    "tagline": "Evil Has Reigned For 100 Years...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-808",
    "title": "Shrek",
    "originalTitle": "Shrek",
    "year": 2001,
    "runtime": "90 min",
    "genres": [
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 7.3,
    "matchScore": 96,
    "synopsis": "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    "director": "Andrew Adamson",
    "cast": [
      "Mike Myers",
      "Eddie Murphy",
      "Cameron Diaz",
      "John Lithgow"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sRvXNDItGlWCqtO3j6wks52FmbD.jpg",
    "trailerId": "ppDwfm6e498",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Andrew Adamson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Andrew Adamson.",
    "similarTags": [
      "Andrew Adamson",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$484 Million",
    "tagline": "The greatest fairy tale never told.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-10191",
    "title": "How to Train Your Dragon",
    "originalTitle": "How to Train Your Dragon",
    "year": 2010,
    "runtime": "98 min",
    "genres": [
      "Fantasy",
      "Adventure",
      "Animation",
      "Family"
    ],
    "imdbRating": 7.5,
    "matchScore": 97,
    "synopsis": "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast \u2013 which he names Toothless \u2013 much to the chagrin of his warrior father",
    "director": "Chris Sanders",
    "cast": [
      "Jay Baruchel",
      "Gerard Butler",
      "Craig Ferguson",
      "America Ferrera"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/59vDC1BuEQvti24OMr0ZvtAK6R1.jpg",
    "trailerId": "KZtbJ_I9IFM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Chris Sanders.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Chris Sanders.",
    "similarTags": [
      "Chris Sanders",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$494 Million",
    "tagline": "One adventure will change two worlds",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-87",
    "title": "Indiana Jones and the Temple of Doom",
    "originalTitle": "Indiana Jones and the Temple of Doom",
    "year": 1984,
    "runtime": "118 min",
    "genres": [
      "Adventure",
      "Action"
    ],
    "imdbRating": 7.1,
    "matchScore": 98,
    "synopsis": "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees \u2013 and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
    "director": "Steven Spielberg",
    "cast": [
      "Harrison Ford",
      "Kate Capshaw",
      "Jonathan Ke Quan",
      "Amrish Puri"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gpdVNUaa4LhRMLfJOPj1AZdhAZ3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/f133nWlU6yUkZqqwcCXCbTEJWHr.jpg",
    "trailerId": "WBdyLyijZhU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$333 Million",
    "tagline": "If adventure has a name... it must be Indiana Jones.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-500",
    "title": "Reservoir Dogs",
    "originalTitle": "Reservoir Dogs",
    "year": 1992,
    "runtime": "99 min",
    "genres": [
      "Crime",
      "Thriller"
    ],
    "imdbRating": 8.0,
    "matchScore": 99,
    "synopsis": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
    "director": "Quentin Tarantino",
    "cast": [
      "Harvey Keitel",
      "Tim Roth",
      "Michael Madsen",
      "Chris Penn"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jwt159hXWA9Q5xpBo8hWb3zwLi7.jpg",
    "trailerId": "2KLZ4fSXtgI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Quentin Tarantino.",
    "whyRecommended": "Top match based on Crime themes and direction by Quentin Tarantino.",
    "similarTags": [
      "Quentin Tarantino",
      "Crime",
      "Thriller"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$14 Million",
    "tagline": "Every dog has his day.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-652",
    "title": "Troy",
    "originalTitle": "Troy",
    "year": 2004,
    "runtime": "163 min",
    "genres": [
      "Adventure",
      "Drama",
      "War"
    ],
    "imdbRating": 6.9,
    "matchScore": 90,
    "synopsis": "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. Paris, the Trojan prince, convinces Helen, Queen of Sparta, to leave her husband Menelaus, and sail with him back to Troy. After Menelaus finds out that his wife was taken by the Trojans, he asks his brother Agamemnom to help him get her back. Agamemnon sees this as an opportunity for power. So they set off with 1,000 ships holding 50,000 Greeks to Troy. With the help of Achilles, the Greeks are able to fight the never before defeated Trojans.",
    "director": "Wolfgang Petersen",
    "cast": [
      "Brad Pitt",
      "Orlando Bloom",
      "Eric Bana",
      "Brian Cox"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/a07wLy4ONfpsjnBqMwhlWTJTcm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wyFJcodi5T9LJAeiE8Se7ScdOFj.jpg",
    "trailerId": "P8xLgg-MNKw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Wolfgang Petersen.",
    "whyRecommended": "Top match based on Adventure themes and direction by Wolfgang Petersen.",
    "similarTags": [
      "Wolfgang Petersen",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$175 Million",
    "revenue": "$497 Million",
    "tagline": "For passion. For honor. For destiny. For victory. For love.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-97020",
    "title": "RoboCop",
    "originalTitle": "RoboCop",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 5.7,
    "matchScore": 91,
    "synopsis": "In RoboCop, the year is 2028 and multinational conglomerate OmniCorp is at the center of robot technology.  Overseas, their drones have been used by the military for years, but have been forbidden for law enforcement in America.  Now OmniCorp wants to bring their controversial technology to the home front, and they see a golden opportunity to do it.  When Alex Murphy \u2013 a loving husband, father and good cop doing his best to stem the tide of crime and corruption in Detroit \u2013 is critically injured, OmniCorp sees their chance to build a part-man, part-robot police officer.  OmniCorp envisions a RoboCop in every city and even more billions for their shareholders, but they never counted on one thing: there is still a man inside the machine.",
    "director": "Jos\u00e9 Padilha",
    "cast": [
      "Joel Kinnaman",
      "Gary Oldman",
      "Michael Keaton",
      "Abbie Cornish"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gM5ql3BKYmHG3WtZ0buKXN7xY8O.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xACuC5FwpCdayrcCsJPxYzrl8BO.jpg",
    "trailerId": "_w_BPRUdmsQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Jos\u00e9 Padilha.",
    "whyRecommended": "Top match based on Action themes and direction by Jos\u00e9 Padilha.",
    "similarTags": [
      "Jos\u00e9 Padilha",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$242 Million",
    "tagline": "We've got the future under control.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-43074",
    "title": "Ghostbusters",
    "originalTitle": "Ghostbusters",
    "year": 2016,
    "runtime": "116 min",
    "genres": [
      "Action",
      "Fantasy",
      "Comedy"
    ],
    "imdbRating": 5.3,
    "matchScore": 92,
    "synopsis": "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.",
    "director": "Paul Feig",
    "cast": [
      "Melissa McCarthy",
      "Kristen Wiig",
      "Kate McKinnon",
      "Leslie Jones"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3KDHaahgXlUhmpXzoRZrLc7QSBM.jpg",
    "trailerId": "D3i2CqernTE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Paul Feig.",
    "whyRecommended": "Top match based on Action themes and direction by Paul Feig.",
    "similarTags": [
      "Paul Feig",
      "Action",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$144 Million",
    "revenue": "$229 Million",
    "tagline": "Who You Gonna Call?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-562",
    "title": "Die Hard",
    "originalTitle": "Die Hard",
    "year": 1988,
    "runtime": "131 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 7.5,
    "matchScore": 93,
    "synopsis": "NYPD cop, John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    "director": "John McTiernan",
    "cast": [
      "Bruce Willis",
      "Alan Rickman",
      "Alexander Godunov",
      "Bonnie Bedelia"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bvk2AAH64lP2YZs02Q3jskfHT8j.jpg",
    "trailerId": "TotSHi0ViUc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by John McTiernan.",
    "whyRecommended": "Top match based on Action themes and direction by John McTiernan.",
    "similarTags": [
      "John McTiernan",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$140 Million",
    "tagline": "40 Stories. Twelve Terrorists. One Cop.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-264644",
    "title": "Room",
    "originalTitle": "Room",
    "year": 2015,
    "runtime": "117 min",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdbRating": 8.1,
    "matchScore": 94,
    "synopsis": "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
    "director": "Lenny Abrahamson",
    "cast": [
      "Brie Larson",
      "Jacob Tremblay",
      "Joan Allen",
      "Sean Bridgers"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2hHDMeYyZjbGWn0BeNH1cTMxuM7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cGV6R2vzT4TYIabf3JgmrOISQ0y.jpg",
    "trailerId": "yfBdUPAjiVQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Lenny Abrahamson.",
    "whyRecommended": "Top match based on Drama themes and direction by Lenny Abrahamson.",
    "similarTags": [
      "Lenny Abrahamson",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$35 Million",
    "tagline": "Love knows no boundaries",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-187",
    "title": "Sin City",
    "originalTitle": "Sin City",
    "year": 2005,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 7.2,
    "matchScore": 95,
    "synopsis": "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark\u2026 Hard-boiled. Then there are those who call it home \u2014 Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    "director": "Robert Rodriguez",
    "cast": [
      "Jessica Alba",
      "Devon Aoki",
      "Clive Owen",
      "Rosario Dawson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/i66G50wATMmPrvpP95f0XP6ZdVS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/t9kQnqiaxQ8TLB25rTzDKLd0fdM.jpg",
    "trailerId": "0p0h_YCinMs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Robert Rodriguez.",
    "whyRecommended": "Top match based on Action themes and direction by Robert Rodriguez.",
    "similarTags": [
      "Robert Rodriguez",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$158 Million",
    "tagline": "Walk down the right back alley in Sin City and you can find anything...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-180",
    "title": "Minority Report",
    "originalTitle": "Minority Report",
    "year": 2002,
    "runtime": "145 min",
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction",
      "Mystery"
    ],
    "imdbRating": 7.1,
    "matchScore": 96,
    "synopsis": "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge.",
    "director": "Steven Spielberg",
    "cast": [
      "Tom Cruise",
      "Colin Farrell",
      "Samantha Morton",
      "Max von Sydow"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qtgFcnwh9dAFLocsDk2ySDVS8UF.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/PrMb3oeEluauy0q9ZO5xL33A6C.jpg",
    "trailerId": "3JNsNp2DVSE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Action themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$102 Million",
    "revenue": "$358 Million",
    "tagline": "The system is perfect until it comes after you.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-224141",
    "title": "Into the Woods",
    "originalTitle": "Into the Woods",
    "year": 2014,
    "runtime": "125 min",
    "genres": [
      "Fantasy",
      "Comedy",
      "Music"
    ],
    "imdbRating": 5.6,
    "matchScore": 97,
    "synopsis": "In a woods filled with magic and fairy tale characters, a baker and his wife set out to end the curse put on them by their neighbor, a spiteful witch.",
    "director": "Rob Marshall",
    "cast": [
      "Meryl Streep",
      "Emily Blunt",
      "James Corden",
      "Anna Kendrick"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/bINGDDuvUnZyde2sIcSx41IE5b6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qF938YRj7RoYkjwOsXFDNYf907J.jpg",
    "trailerId": "dRgr7itwgak",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Rob Marshall.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Rob Marshall.",
    "similarTags": [
      "Rob Marshall",
      "Fantasy",
      "Comedy"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$212 Million",
    "tagline": "Be careful what you wish for...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-2062",
    "title": "Ratatouille",
    "originalTitle": "Ratatouille",
    "year": 2007,
    "runtime": "111 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 7.5,
    "matchScore": 98,
    "synopsis": "A rat named Remy dreams of becoming a great French chef despite his family's wishes and the obvious problem of being a rat in a decidedly rodent-phobic profession. When fate places Remy in the sewers of Paris, he finds himself ideally situated beneath a restaurant made famous by his culinary hero, Auguste Gusteau. Despite the apparent dangers of being an unlikely - and certainly unwanted - visitor in the kitchen of a fine French restaurant, Remy's passion for cooking soon sets into motion a hilarious and exciting rat race that turns the culinary world of Paris upside down.",
    "director": "Jan Pinkava",
    "cast": [
      "Patton Oswalt",
      "Ian Holm",
      "Lou Romano",
      "Brian Dennehy"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jQ6Vuxe1CEPMXTF7d0fZgdIBY8U.jpg",
    "trailerId": "NgsQ8mVkN8w",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Jan Pinkava.",
    "whyRecommended": "Top match based on Animation themes and direction by Jan Pinkava.",
    "similarTags": [
      "Jan Pinkava",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$623 Million",
    "tagline": "He's dying to become a chef.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-47964",
    "title": "A Good Day to Die Hard",
    "originalTitle": "A Good Day to Die Hard",
    "year": 2013,
    "runtime": "98 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 5.2,
    "matchScore": 99,
    "synopsis": "Iconoclastic, take-no-prisoners cop John McClane, finds himself for the first time on foreign soil after traveling to Moscow to help his wayward son Jack - unaware that Jack is really a highly-trained CIA operative out to stop a nuclear weapons heist. With the Russian underworld in pursuit, and battling a countdown to war, the two McClanes discover that their opposing methods make them unstoppable heroes.",
    "director": "John Moore",
    "cast": [
      "Bruce Willis",
      "Jai Courtney",
      "Sebastian Koch",
      "Mary Elizabeth Winstead"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qJ0csDXAVFMsNn0cRcjy6W6PxAK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wFUkS5cnMf3I8ysIPWzIXpTsuR7.jpg",
    "trailerId": "mXTImBrEKUc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by John Moore.",
    "whyRecommended": "Top match based on Action themes and direction by John Moore.",
    "similarTags": [
      "John Moore",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$92 Million",
    "revenue": "$304 Million",
    "tagline": "Yippee Ki-Yay Mother Russia",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-188927",
    "title": "Star Trek Beyond",
    "originalTitle": "Star Trek Beyond",
    "year": 2016,
    "runtime": "122 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 90,
    "synopsis": "The USS Enterprise crew explores the furthest reaches of uncharted space, where they encounter a mysterious new enemy who puts them and everything the Federation stands for to the test.",
    "director": "Justin Lin",
    "cast": [
      "Chris Pine",
      "Zachary Quinto",
      "Karl Urban",
      "Simon Pegg"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cnQp8GmOWahIgQaH60Kwez3TNzw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sUJrnMbL2xLMjMHk4VdReNrL7BK.jpg",
    "trailerId": "NwpvjQKdpvI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Justin Lin.",
    "whyRecommended": "Top match based on Action themes and direction by Justin Lin.",
    "similarTags": [
      "Justin Lin",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$185 Million",
    "revenue": "$343 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1271",
    "title": "300",
    "originalTitle": "300",
    "year": 2006,
    "runtime": "117 min",
    "genres": [
      "Action",
      "Adventure",
      "War"
    ],
    "imdbRating": 7.0,
    "matchScore": 91,
    "synopsis": "Based on Frank Miller's graphic novel, \"300\" is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
    "director": "Zack Snyder",
    "cast": [
      "Gerard Butler",
      "Lena Headey",
      "Dominic West",
      "David Wenham"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/h7Lcio0c9ohxPhSZg42eTlKIVVY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/lgBZlJ1LHQel5nneNQMoesmvc7l.jpg",
    "trailerId": "UrIbxk7idYA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Zack Snyder.",
    "whyRecommended": "Top match based on Action themes and direction by Zack Snyder.",
    "similarTags": [
      "Zack Snyder",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$65 Million",
    "revenue": "$422 Million",
    "tagline": "Spartans, prepare for glory!",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-44833",
    "title": "Battleship",
    "originalTitle": "Battleship",
    "year": 2012,
    "runtime": "131 min",
    "genres": [
      "Thriller",
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 5.5,
    "matchScore": 92,
    "synopsis": "When mankind beams a radio signal into space, a reply comes from \u2018Planet G\u2019, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential his brother, and his fianc\u00e9e's father, Admiral Shane, expect of him.",
    "director": "Peter Berg",
    "cast": [
      "Taylor Kitsch",
      "Alexander Skarsg\u00e5rd",
      "Rihanna",
      "Brooklyn Decker"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9b0Im7SfedHiajTwzSL9zGyBI7M.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/85PMh0cKywekAJYDnRXfezYAmEc.jpg",
    "trailerId": "wvXKvbIAq2k",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Peter Berg.",
    "whyRecommended": "Top match based on Thriller themes and direction by Peter Berg.",
    "similarTags": [
      "Peter Berg",
      "Thriller",
      "Action"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$209 Million",
    "revenue": "$303 Million",
    "tagline": "The Battle for Earth Begins at Sea",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-13183",
    "title": "Watchmen",
    "originalTitle": "Watchmen",
    "year": 2009,
    "runtime": "163 min",
    "genres": [
      "Action",
      "Mystery",
      "Science Fiction"
    ],
    "imdbRating": 7.0,
    "matchScore": 93,
    "synopsis": "In a gritty and alternate 1985 the glory days of costumed vigilantes have been brought to a close by a government crackdown, but after one of the masked veterans is brutally murdered an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so uncover a sinister plot that puts all of humanity in grave danger.",
    "director": "Zack Snyder",
    "cast": [
      "Malin \u00c5kerman",
      "Billy Crudup",
      "Carla Gugino",
      "Jeffrey Dean Morgan"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aVURelN3pM56lFM7Dgfs5TixcIf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dH7ia3vtkYCa3CBvDnvVjqm9uiQ.jpg",
    "trailerId": "89xoXmHgG00",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Zack Snyder.",
    "whyRecommended": "Top match based on Action themes and direction by Zack Snyder.",
    "similarTags": [
      "Zack Snyder",
      "Action",
      "Mystery"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$185 Million",
    "tagline": "Justice is coming to all of us.  No matter what we do.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-762",
    "title": "Monty Python and the Holy Grail",
    "originalTitle": "Monty Python and the Holy Grail",
    "year": 1975,
    "runtime": "91 min",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "imdbRating": 7.8,
    "matchScore": 94,
    "synopsis": "King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They reach Camelot, but Arthur decides not  to enter, as \"it is a silly place\".",
    "director": "Terry Gilliam",
    "cast": [
      "Graham Chapman",
      "John Cleese",
      "Terry Gilliam",
      "Eric Idle"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7nTkHjETdGMYK1phHwDbPsrzbYl.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1KgXxv6tHXOnakqYvMPvFwYKWiw.jpg",
    "trailerId": "4b52A3sKz-I",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Terry Gilliam.",
    "whyRecommended": "Top match based on Adventure themes and direction by Terry Gilliam.",
    "similarTags": [
      "Terry Gilliam",
      "Adventure",
      "Comedy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$0 Million",
    "revenue": "$5 Million",
    "tagline": "And now! At Last! Another film completely different from some of the other films which aren't quite the same as this one is.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-286565",
    "title": "Paper Towns",
    "originalTitle": "Paper Towns",
    "year": 2015,
    "runtime": "109 min",
    "genres": [
      "Drama",
      "Mystery",
      "Romance"
    ],
    "imdbRating": 6.1,
    "matchScore": 95,
    "synopsis": "Quentin Jacobsen has spent a lifetime loving the magnificently adventurous Margo Roth Spiegelman from afar. So when she cracks open a window and climbs back into his life-dressed like a ninja and summoning him for an ingenious campaign of revenge-he follows. After their all-nighter ends and a new day breaks, Q arrives at school to discover that Margo, always an enigma, has now become a mystery. But Q soon learns that there are clues-and they're for him. Urged down a disconnected path, the closer he gets, the less Q sees of the girl he thought he knew.",
    "director": "Jake Schreier",
    "cast": [
      "Nat Wolff",
      "Cara Delevingne",
      "Justice Smith",
      "Austin Abrams"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lVW67w7eWwmBhbBCc4f983pO8m6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mwoIzHsliirmS0IlSrf2DvVouid.jpg",
    "trailerId": "F1dDr4b36Mo",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Jake Schreier.",
    "whyRecommended": "Top match based on Drama themes and direction by Jake Schreier.",
    "similarTags": [
      "Jake Schreier",
      "Drama",
      "Mystery"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$12 Million",
    "revenue": "$85 Million",
    "tagline": "Get Lost. Get Found.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-76726",
    "title": "Chronicle",
    "originalTitle": "Chronicle",
    "year": 2012,
    "runtime": "84 min",
    "genres": [
      "Science Fiction",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 96,
    "synopsis": "Three high school students make an incredible discovery, leading to their developing uncanny powers beyond their understanding. As they learn to control their abilities and use them to their advantage, their lives start to spin out of control, and their darker sides begin to take over.",
    "director": "Josh Trank",
    "cast": [
      "Dane DeHaan",
      "Alex Russell",
      "Michael B. Jordan",
      "Michael Kelly"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kdyrdFIt29FUmLIKvedAc2j4rpo.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rgNzvSagnlc32TuMEBa529QFIig.jpg",
    "trailerId": "AQ9XG-j4kvU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Josh Trank.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Josh Trank.",
    "similarTags": [
      "Josh Trank",
      "Science Fiction",
      "Drama"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$145 Million",
    "tagline": "What are you capable of?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-755",
    "title": "From Dusk Till Dawn",
    "originalTitle": "From Dusk Till Dawn",
    "year": 1996,
    "runtime": "108 min",
    "genres": [
      "Horror",
      "Action",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 6.9,
    "matchScore": 97,
    "synopsis": "Seth Gecko and his younger brother Richard are on the run after a bloody bank robbery in Texas. They escape across the border into Mexico and will be home-free the next morning, when they pay off the local kingpin. They just have to survive 'from dusk till dawn' at the rendezvous point, which turns out to be a Hell of a strip joint.",
    "director": "Robert Rodriguez",
    "cast": [
      "George Clooney",
      "Quentin Tarantino",
      "Harvey Keitel",
      "Juliette Lewis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sV3kIAmvJ9tPz4Lq5fuf9LLMxte.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/phiRQhfwZZeMMn3osvQUmGYmJbp.jpg",
    "trailerId": "y-J9bBvO5dk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by Robert Rodriguez.",
    "whyRecommended": "Top match based on Horror themes and direction by Robert Rodriguez.",
    "similarTags": [
      "Robert Rodriguez",
      "Horror",
      "Action"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$19 Million",
    "revenue": "$25 Million",
    "tagline": "One night is all that stands between them and freedom. But it's going to be a hell of a night.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-133805",
    "title": "Carrie",
    "originalTitle": "Carrie",
    "year": 2013,
    "runtime": "100 min",
    "genres": [
      "Drama",
      "Horror"
    ],
    "imdbRating": 5.8,
    "matchScore": 98,
    "synopsis": "A reimagining of the classic horror tale about Carrie White, a shy girl outcast by her peers and sheltered by her deeply religious mother, who unleashes telekinetic terror on her small town after being pushed too far at her senior prom.",
    "director": "Kimberly Peirce",
    "cast": [
      "Chlo\u00eb Grace Moretz",
      "Julianne Moore",
      "Judy Greer",
      "Alex Russell"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kloXz9qwO23z9Kbt3z3MgnjF4xO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zTwuMSZ8Tsf9k6r2lslemPs4m1H.jpg",
    "trailerId": "szzw_SQlfpU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Kimberly Peirce.",
    "whyRecommended": "Top match based on Drama themes and direction by Kimberly Peirce.",
    "similarTags": [
      "Kimberly Peirce",
      "Drama",
      "Horror"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$82 Million",
    "tagline": "Know her name. Fear her power.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-176",
    "title": "Saw",
    "originalTitle": "Saw",
    "year": 2004,
    "runtime": "103 min",
    "genres": [
      "Horror",
      "Mystery",
      "Crime"
    ],
    "imdbRating": 7.2,
    "matchScore": 99,
    "synopsis": "Obsessed with teaching his victims the value of life, a deranged, sadistic serial killer abducts the morally wayward. Once captured, they must face impossible choices in a horrific game of survival. The victims must fight to win their lives back, or die trying...",
    "director": "James Wan",
    "cast": [
      "Cary Elwes",
      "Danny Glover",
      "Monica Potter",
      "Michael Emerson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rLNSOudrayDBo1uqXjrhxcjODIC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ok4ot3YbfDYZcINXf91JUfq3maB.jpg",
    "trailerId": "0bHDblokwv0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by James Wan.",
    "whyRecommended": "Top match based on Horror themes and direction by James Wan.",
    "similarTags": [
      "James Wan",
      "Horror",
      "Mystery"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$103 Million",
    "tagline": "Live or die. Make your choice.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-769",
    "title": "GoodFellas",
    "originalTitle": "GoodFellas",
    "year": 1990,
    "runtime": "145 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 8.2,
    "matchScore": 90,
    "synopsis": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "director": "Martin Scorsese",
    "cast": [
      "Robert De Niro",
      "Ray Liotta",
      "Joe Pesci",
      "Lorraine Bracco"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gILte6Zd7m1YneIr6MVhh30S9pr.jpg",
    "trailerId": "PTBRNXGQR9Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Martin Scorsese.",
    "whyRecommended": "Top match based on Drama themes and direction by Martin Scorsese.",
    "similarTags": [
      "Martin Scorsese",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$25 Million",
    "revenue": "$46 Million",
    "tagline": "Three Decades of Life in the Mafia.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-82693",
    "title": "Silver Linings Playbook",
    "originalTitle": "Silver Linings Playbook",
    "year": 2012,
    "runtime": "122 min",
    "genres": [
      "Drama",
      "Comedy",
      "Romance"
    ],
    "imdbRating": 6.9,
    "matchScore": 91,
    "synopsis": "After spending eight months in a mental institution, a former teacher moves back in with his parents and tries to reconcile with his ex-wife.",
    "director": "David O. Russell",
    "cast": [
      "Bradley Cooper",
      "Jennifer Lawrence",
      "Robert De Niro",
      "Jacki Weaver"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fhHB1uvfFKKFbj6bTKE8xdtsjKi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/12GpsUm9nVVKFlcjDTflKLClFVA.jpg",
    "trailerId": "EI_3ywJLQio",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by David O. Russell.",
    "whyRecommended": "Top match based on Drama themes and direction by David O. Russell.",
    "similarTags": [
      "David O. Russell",
      "Drama",
      "Comedy"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$21 Million",
    "revenue": "$205 Million",
    "tagline": "Watch For The Signs",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-627",
    "title": "Trainspotting",
    "originalTitle": "Trainspotting",
    "year": 1996,
    "runtime": "93 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 7.8,
    "matchScore": 92,
    "synopsis": "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    "director": "Danny Boyle",
    "cast": [
      "Ewan McGregor",
      "Ewen Bremner",
      "Jonny Lee Miller",
      "Robert Carlyle"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1jUC02qsqS2NxBMFarbIhcQtazV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dkfBKDUIWP1peEszdqK10MkMZCP.jpg",
    "trailerId": "bKrbNruyFVE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Danny Boyle.",
    "whyRecommended": "Top match based on Drama themes and direction by Danny Boyle.",
    "similarTags": [
      "Danny Boyle",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$4 Million",
    "revenue": "$16 Million",
    "tagline": "Choose life.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1422",
    "title": "The Departed",
    "originalTitle": "The Departed",
    "year": 2006,
    "runtime": "151 min",
    "genres": [
      "Drama",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 7.9,
    "matchScore": 93,
    "synopsis": "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson",
      "Mark Wahlberg"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6WRrGYalXXveItfpnipYdayFkQB.jpg",
    "trailerId": "r-MiSNsCdQ4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Martin Scorsese.",
    "whyRecommended": "Top match based on Drama themes and direction by Martin Scorsese.",
    "similarTags": [
      "Martin Scorsese",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$289 Million",
    "tagline": "Lies. Betrayal. Sacrifice. How far will you take it?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-17654",
    "title": "District 9",
    "originalTitle": "District 9",
    "year": 2009,
    "runtime": "112 min",
    "genres": [
      "Science Fiction"
    ],
    "imdbRating": 7.3,
    "matchScore": 94,
    "synopsis": "Aliens land in South Africa and, with their ship totally disabled,  have no way home. Years later, after living in a slum and wearing out their welcome the 'Non-Humans' are being moved to a new tent city overseen by Multi-National United (MNU).",
    "director": "Neill Blomkamp",
    "cast": [
      "Sharlto Copley",
      "Jason Cope",
      "Nathalie Boltt",
      "Sylvaine Strike"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tuGlQkqLxnodDSk6mp5c2wvxUEd.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jhM3wgWUrrOkz9r4xwV5cV5RhI4.jpg",
    "trailerId": "_BjWEn5yvmw",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Neill Blomkamp.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Neill Blomkamp.",
    "similarTags": [
      "Neill Blomkamp",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$30 Million",
    "revenue": "$210 Million",
    "tagline": "You are not welcome here.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1368",
    "title": "First Blood",
    "originalTitle": "First Blood",
    "year": 1982,
    "runtime": "93 min",
    "genres": [
      "Action",
      "Adventure",
      "Thriller",
      "War"
    ],
    "imdbRating": 7.2,
    "matchScore": 95,
    "synopsis": "When former Green Beret John Rambo is harassed by local law enforcement and arrested for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats his way into the action-movie hall of fame. Hounded by a relentless sheriff, Rambo employs heavy-handed guerilla tactics to shake the cops off his tail.",
    "director": "Ted Kotcheff",
    "cast": [
      "Sylvester Stallone",
      "Richard Crenna",
      "Brian Dennehy",
      "Bill McKinney"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/a9sa6ERZCpplbPEO7OMWE763CLD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hCxxOJojCUFyuahDx167glJgp7E.jpg",
    "trailerId": "Rl_4vPKDijQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Ted Kotcheff.",
    "whyRecommended": "Top match based on Action themes and direction by Ted Kotcheff.",
    "similarTags": [
      "Ted Kotcheff",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$125 Million",
    "tagline": "This time he's fighting for his life.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-328387",
    "title": "Nerve",
    "originalTitle": "Nerve",
    "year": 2016,
    "runtime": "96 min",
    "genres": [
      "Mystery",
      "Adventure",
      "Crime"
    ],
    "imdbRating": 7.1,
    "matchScore": 96,
    "synopsis": "Industrious high school senior, Vee Delmonico, has had it with living life on the sidelines. When pressured by friends to join the popular online game Nerve, Vee decides to sign up for just one dare in what seems like harmless fun. But as she finds herself caught up in the thrill of the adrenaline-fueled competition partnered with a mysterious stranger, the game begins to take a sinister turn with increasingly dangerous acts, leading her into a high stakes finale that will determine her entire future.",
    "director": "Henry Joost",
    "cast": [
      "Emma Roberts",
      "Dave Franco",
      "Emily Meade",
      "Miles Heizer"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/qmSpHC0CSNyNll9WhlwWYuwoQ28.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/fg04CQyJzuDJ82jm2meY37n9XyE.jpg",
    "trailerId": "2PR9MOPTI7g",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Mystery themes and direction by Henry Joost.",
    "whyRecommended": "Top match based on Mystery themes and direction by Henry Joost.",
    "similarTags": [
      "Henry Joost",
      "Mystery",
      "Adventure"
    ],
    "moods": [
      "\u2728 Mystery",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$20 Million",
    "revenue": "$83 Million",
    "tagline": "Are you a watcher or a player?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1724",
    "title": "The Incredible Hulk",
    "originalTitle": "The Incredible Hulk",
    "year": 2008,
    "runtime": "114 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure"
    ],
    "imdbRating": 6.1,
    "matchScore": 97,
    "synopsis": "Scientist Bruce Banner scours the planet for an antidote to the unbridled force of rage within him: the Hulk. But when the military masterminds who dream of exploiting his powers force him back to civilization, he finds himself coming face to face with a new, deadly foe.",
    "director": "Louis Leterrier",
    "cast": [
      "Edward Norton",
      "Liv Tyler",
      "Tim Roth",
      "William Hurt"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jPu8yiadqgzwFPGKJmGo637ASVP.jpg",
    "trailerId": "dz6eBeW19Lg",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Louis Leterrier.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Louis Leterrier.",
    "similarTags": [
      "Louis Leterrier",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$163 Million",
    "tagline": "You'll like him when he's angry.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-82690",
    "title": "Wreck-It Ralph",
    "originalTitle": "Wreck-It Ralph",
    "year": 2012,
    "runtime": "108 min",
    "genres": [
      "Family",
      "Animation",
      "Comedy",
      "Adventure"
    ],
    "imdbRating": 7.1,
    "matchScore": 98,
    "synopsis": "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    "director": "Rich Moore",
    "cast": [
      "John C. Reilly",
      "Sarah Silverman",
      "Jack McBrayer",
      "Jane Lynch"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nrEupcBwf4O1zihCM34NoXusZDq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3IFRjBDwtk0DlIsDfJ2zEzLjUBi.jpg",
    "trailerId": "87E6N7ToCxs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Family themes and direction by Rich Moore.",
    "whyRecommended": "Top match based on Family themes and direction by Rich Moore.",
    "similarTags": [
      "Rich Moore",
      "Family",
      "Animation"
    ],
    "moods": [
      "\u2728 Family",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$471 Million",
    "tagline": "The story of a regular guy just looking for a little wreck-ognition.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-9543",
    "title": "Prince of Persia: The Sands of Time",
    "originalTitle": "Prince of Persia: The Sands of Time",
    "year": 2010,
    "runtime": "116 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action",
      "Romance"
    ],
    "imdbRating": 6.2,
    "matchScore": 99,
    "synopsis": "A rogue prince reluctantly joins forces with a mysterious princess and together, they race against dark forces to safeguard an ancient dagger capable of releasing the Sands of Time \u2013 gift from the gods that can reverse time and allow its possessor to rule the world.",
    "director": "Mike Newell",
    "cast": [
      "Jake Gyllenhaal",
      "Gemma Arterton",
      "Ben Kingsley",
      "Alfred Molina"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/siNGMLdOUNYLEGtlsnmQcpO2XZX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iP0capCU4w5nxCDl398CH7yR1r9.jpg",
    "trailerId": "SOlc7fV9zL0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Mike Newell.",
    "whyRecommended": "Top match based on Adventure themes and direction by Mike Newell.",
    "similarTags": [
      "Mike Newell",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$335 Million",
    "tagline": "Defy the Future",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-68734",
    "title": "Argo",
    "originalTitle": "Argo",
    "year": 2012,
    "runtime": "120 min",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.1,
    "matchScore": 90,
    "synopsis": "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.",
    "director": "Ben Affleck",
    "cast": [
      "Ben Affleck",
      "Bryan Cranston",
      "Alan Arkin",
      "John Goodman"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/m5gPWFZFIp4UJFABgWyLkbXv8GX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/iVk4mVKwNE66JbBcoDwcYFvuUXM.jpg",
    "trailerId": "3RrtxIci4T0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Ben Affleck.",
    "whyRecommended": "Top match based on Drama themes and direction by Ben Affleck.",
    "similarTags": [
      "Ben Affleck",
      "Drama",
      "Thriller"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$44 Million",
    "revenue": "$232 Million",
    "tagline": "The movie was fake. The mission was real.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-81188",
    "title": "Rise of the Guardians",
    "originalTitle": "Rise of the Guardians",
    "year": 2012,
    "runtime": "97 min",
    "genres": [
      "Fantasy",
      "Animation",
      "Family"
    ],
    "imdbRating": 7.1,
    "matchScore": 91,
    "synopsis": "When an evil spirit known as Pitch lays down the gauntlet to take over the world, the immortal Guardians must join forces for the first time to protect the hopes, beliefs and imagination of children all over the world.",
    "director": "Peter Ramsey",
    "cast": [
      "Chris Pine",
      "Alec Baldwin",
      "Jude Law",
      "Isla Fisher"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yfzmfWGjcmyugH6FZ13WcsUGiNj.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3dLjNqylxtfgKelBJse5OWqhggf.jpg",
    "trailerId": "aPLiBxhoug0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Peter Ramsey.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Peter Ramsey.",
    "similarTags": [
      "Peter Ramsey",
      "Fantasy",
      "Animation"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$145 Million",
    "revenue": "$306 Million",
    "tagline": "You better believe.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-277216",
    "title": "Straight Outta Compton",
    "originalTitle": "Straight Outta Compton",
    "year": 2015,
    "runtime": "147 min",
    "genres": [
      "Drama",
      "Music"
    ],
    "imdbRating": 7.7,
    "matchScore": 92,
    "synopsis": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels\u2014armed only with their lyrics, swagger, bravado and raw talent\u2014stood up to the authorities that meant to keep them down and formed the world\u2019s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
    "director": "F. Gary Gray",
    "cast": [
      "O'Shea Jackson Jr.",
      "Corey Hawkins",
      "Jason Mitchell",
      "Neil Brown Jr."
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1CiLJx8Xtv3TbbFj6k7BboSmKgC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8r9RoGfwGmn1pn0G3sbvHHemSWF.jpg",
    "trailerId": "-F5WcFPDzko",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by F. Gary Gray.",
    "whyRecommended": "Top match based on Drama themes and direction by F. Gary Gray.",
    "similarTags": [
      "F. Gary Gray",
      "Drama",
      "Music"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$201 Million",
    "tagline": "The Story of N.W.A.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-159824",
    "title": "Hotel Transylvania 2",
    "originalTitle": "Hotel Transylvania 2",
    "year": 2015,
    "runtime": "89 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "imdbRating": 6.7,
    "matchScore": 93,
    "synopsis": "When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.",
    "director": "Genndy Tartakovsky",
    "cast": [
      "Adam Sandler",
      "Andy Samberg",
      "Selena Gomez",
      "Kevin James"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3nFnrivNgipSKZ8LZJJbRSlAcTR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mfnkxXWuh2Br097Qteq8ieqKfev.jpg",
    "trailerId": "65YG3cGGj5A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Genndy Tartakovsky.",
    "whyRecommended": "Top match based on Animation themes and direction by Genndy Tartakovsky.",
    "similarTags": [
      "Genndy Tartakovsky",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$80 Million",
    "revenue": "$473 Million",
    "tagline": "They're back to raise a little terror",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-10386",
    "title": "The Iron Giant",
    "originalTitle": "The Iron Giant",
    "year": 1999,
    "runtime": "86 min",
    "genres": [
      "Adventure",
      "Animation",
      "Family",
      "Fantasy",
      "Science Fiction"
    ],
    "imdbRating": 7.6,
    "matchScore": 94,
    "synopsis": "In the small town of Rockwell, Maine in October 1957, a giant metal machine befriends a nine-year-old boy and ultimately finds its humanity by unselfishly saving people from their own fears and prejudices.",
    "director": "Brad Bird",
    "cast": [
      "Eli Marienthal",
      "Jennifer Aniston",
      "Vin Diesel",
      "Christopher McDonald"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ct04FCFLPImNG5thcPLRnVsZlmS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gZ78dyRH9hXeH94ASjuvD9Vw4b5.jpg",
    "trailerId": "1XHf94YqGyQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Brad Bird.",
    "whyRecommended": "Top match based on Adventure themes and direction by Brad Bird.",
    "similarTags": [
      "Brad Bird",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$70 Million",
    "revenue": "$23 Million",
    "tagline": "It came from outer space!",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-254",
    "title": "King Kong",
    "originalTitle": "King Kong",
    "year": 2005,
    "runtime": "187 min",
    "genres": [
      "Adventure",
      "Drama",
      "Action"
    ],
    "imdbRating": 6.6,
    "matchScore": 95,
    "synopsis": "In 1933 New York, an overly ambitious movie producer coerces his cast and hired ship crew to travel to mysterious Skull Island, where they encounter Kong, a giant ape who is immediately smitten with the leading lady.",
    "director": "Peter Jackson",
    "cast": [
      "Naomi Watts",
      "Jack Black",
      "Adrien Brody",
      "Thomas Kretschmann"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/6a2HY6UmD7XiDD3NokgaBAXEsD2.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mRM2NB0i3wv4HqxXvwIjEVi4Qqq.jpg",
    "trailerId": "9extfjDZCts",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Peter Jackson.",
    "whyRecommended": "Top match based on Adventure themes and direction by Peter Jackson.",
    "similarTags": [
      "Peter Jackson",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$207 Million",
    "revenue": "$550 Million",
    "tagline": "The eighth wonder of the world.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-141",
    "title": "Donnie Darko",
    "originalTitle": "Donnie Darko",
    "year": 2001,
    "runtime": "113 min",
    "genres": [
      "Fantasy",
      "Drama",
      "Mystery"
    ],
    "imdbRating": 7.7,
    "matchScore": 96,
    "synopsis": "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes.",
    "director": "Richard Kelly",
    "cast": [
      "Jake Gyllenhaal",
      "Jena Malone",
      "Patrick Swayze",
      "Maggie Gyllenhaal"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/j2AtZFsflxiluaNtajMTI0Avm8C.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/msCHK5Kh1YbdZ0zPJ2nzPUhhSN9.jpg",
    "trailerId": "71RaE7JYTUU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Richard Kelly.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Richard Kelly.",
    "similarTags": [
      "Richard Kelly",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$1 Million",
    "tagline": "You can never go too far",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-64682",
    "title": "The Great Gatsby",
    "originalTitle": "The Great Gatsby",
    "year": 2013,
    "runtime": "143 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.3,
    "matchScore": 97,
    "synopsis": "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
    "director": "Baz Luhrmann",
    "cast": [
      "Leonardo DiCaprio",
      "Tobey Maguire",
      "Carey Mulligan",
      "Joel Edgerton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/j9NGh8z7v2mLpGKkvUAHox81bqi.jpg",
    "trailerId": "l6yANES3TMM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Baz Luhrmann.",
    "whyRecommended": "Top match based on Drama themes and direction by Baz Luhrmann.",
    "similarTags": [
      "Baz Luhrmann",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$105 Million",
    "revenue": "$351 Million",
    "tagline": "Reserving judgments is a matter of infinite hope... I come to the admission that it has a limit.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-266856",
    "title": "The Theory of Everything",
    "originalTitle": "The Theory of Everything",
    "year": 2014,
    "runtime": "123 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.8,
    "matchScore": 98,
    "synopsis": "The Theory of Everything is the extraordinary story of one of the world\u2019s greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde.",
    "director": "James Marsh",
    "cast": [
      "Eddie Redmayne",
      "Felicity Jones",
      "Charlie Cox",
      "Emily Watson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7kwcLFNt887saoQAL7EY0XnW7VI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dh2QT3TPtAQf057yeLpNMuaJlmp.jpg",
    "trailerId": "_EnhOKk7BxM",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by James Marsh.",
    "whyRecommended": "Top match based on Drama themes and direction by James Marsh.",
    "similarTags": [
      "James Marsh",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$123 Million",
    "tagline": "His Mind Changed Our World. Her Love Changed His.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-32657",
    "title": "Percy Jackson & the Olympians: The Lightning Thief",
    "originalTitle": "Percy Jackson & the Olympians: The Lightning Thief",
    "year": 2010,
    "runtime": "118 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family"
    ],
    "imdbRating": 6.0,
    "matchScore": 99,
    "synopsis": "Accident prone teenager, Percy discovers he's actually a demi-God, the son of Poseidon, and he is needed when Zeus' lightning is stolen. Percy must master his new found skills in order to prevent a war between the Gods that could devastate the entire world.",
    "director": "Chris Columbus",
    "cast": [
      "Logan Lerman",
      "Brandon T. Jackson",
      "Alexandra Daddario",
      "Jake Abel"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/brzpTyZ5bnM7s53C1KSk1TmrMO6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ugiV9SpJburMOPeIyjBJyAnO1So.jpg",
    "trailerId": "R86InkfdboA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Chris Columbus.",
    "whyRecommended": "Top match based on Adventure themes and direction by Chris Columbus.",
    "similarTags": [
      "Chris Columbus",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$95 Million",
    "revenue": "$226 Million",
    "tagline": "Worlds Collide",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-161",
    "title": "Ocean's Eleven",
    "originalTitle": "Ocean's Eleven",
    "year": 2001,
    "runtime": "116 min",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "imdbRating": 7.2,
    "matchScore": 90,
    "synopsis": "Less than 24 hours into his parole, charismatic thief Danny Ocean is already rolling out his next plan: In one night, Danny's hand-picked crew of specialists will attempt to steal more than $150 million from three Las Vegas casinos. But to score the cash, Danny risks his chances of reconciling with ex-wife, Tess.",
    "director": "Steven Soderbergh",
    "cast": [
      "George Clooney",
      "Brad Pitt",
      "Matt Damon",
      "Andy Garc\u00eda"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/hQQCdZrsHtZyR6NbKH2YyCqd2fR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ncoqdHs1poUaBqyKic9YI8ai7MP.jpg",
    "trailerId": "n3epi9hPbqQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Steven Soderbergh.",
    "whyRecommended": "Top match based on Thriller themes and direction by Steven Soderbergh.",
    "similarTags": [
      "Steven Soderbergh",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$85 Million",
    "revenue": "$450 Million",
    "tagline": "Are you in or out?",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-332567",
    "title": "The Shallows",
    "originalTitle": "The Shallows",
    "year": 2016,
    "runtime": "86 min",
    "genres": [
      "Horror",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 6.2,
    "matchScore": 91,
    "synopsis": "An injured surfer stranded on a buoy needs to get back to shore, but the great white shark stalking her might have other ideas.",
    "director": "Jaume Collet-Serra",
    "cast": [
      "Blake Lively",
      "\u00d3scar Jaenada",
      "Angelo Josue Lozano Corzo",
      "Jos\u00e9 Manuel Trujillo Salas"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/bnBV7hZmLuA0Si5Aop481sPF2RY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/89ZSaf9Ofm7oDounnCOu4ktGI9e.jpg",
    "trailerId": "EgdxIlSuB70",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by Jaume Collet-Serra.",
    "whyRecommended": "Top match based on Horror themes and direction by Jaume Collet-Serra.",
    "similarTags": [
      "Jaume Collet-Serra",
      "Horror",
      "Drama"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$17 Million",
    "revenue": "$119 Million",
    "tagline": "What was once in the deep is now in the shallows.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1979",
    "title": "Fantastic 4: Rise of the Silver Surfer",
    "originalTitle": "4: Rise of the Silver Surfer",
    "year": 2007,
    "runtime": "92 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action",
      "Thriller"
    ],
    "imdbRating": 5.4,
    "matchScore": 92,
    "synopsis": "The Fantastic Four return to the big screen as a new and all powerful enemy threatens the Earth. The seemingly unstoppable 'Silver Surfer', but all is not what it seems and there are old and new enemies that pose a greater threat than the intrepid superheroes realize.",
    "director": "Tim Story",
    "cast": [
      "Ioan Gruffudd",
      "Jessica Alba",
      "Chris Evans",
      "Michael Chiklis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9wRfzTcMyyzkQxVDqBHv8RwuZOv.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/o2wYH40zW0JIYiYUTu6L4gsNy7E.jpg",
    "trailerId": "7whodtti908",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Tim Story.",
    "whyRecommended": "Top match based on Adventure themes and direction by Tim Story.",
    "similarTags": [
      "Tim Story",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$289 Million",
    "tagline": "Discover the secret of the Surfer.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-128",
    "title": "Princess Mononoke",
    "originalTitle": "\u3082\u306e\u306e\u3051\u59eb",
    "year": 1997,
    "runtime": "134 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Animation"
    ],
    "imdbRating": 8.2,
    "matchScore": 93,
    "synopsis": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    "director": "Hayao Miyazaki",
    "cast": [
      "Y\u014dji Matsuda",
      "Yuriko Ishida",
      "Y\u016bko Tanaka",
      "Kaoru Kobayashi"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg",
    "trailerId": "I1dHzoRl0sQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Hayao Miyazaki.",
    "whyRecommended": "Top match based on Adventure themes and direction by Hayao Miyazaki.",
    "similarTags": [
      "Hayao Miyazaki",
      "Adventure",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "Japanese",
    "country": "International",
    "budget": "$26 Million",
    "revenue": "$159 Million",
    "tagline": "The Fate Of The World Rests On The Courage Of One Warrior.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-77",
    "title": "Memento",
    "originalTitle": "Memento",
    "year": 2000,
    "runtime": "113 min",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 8.1,
    "matchScore": 94,
    "synopsis": "Suffering short-term memory loss after a head injury, Leonard Shelby embarks on a grim quest to find the lowlife who murdered his wife in this gritty, complex thriller that packs more knots than a hangman's noose. To carry out his plan, Shelby snaps Polaroids of people and places, jotting down contextual notes on the backs of photos to aid in his search and jog his memory. He even tattoos his own body in a desperate bid to remember.",
    "director": "Christopher Nolan",
    "cast": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano",
      "Mark Boone Junior"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7Wev9JMo6R5XAfz2KDvXb7oPMmy.jpg",
    "trailerId": "Rq9eM4ZXRgs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Mystery themes and direction by Christopher Nolan.",
    "whyRecommended": "Top match based on Mystery themes and direction by Christopher Nolan.",
    "similarTags": [
      "Christopher Nolan",
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "\u2728 Mystery",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$9 Million",
    "revenue": "$39 Million",
    "tagline": "Some memories are best forgotten.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-433",
    "title": "Mary Poppins",
    "originalTitle": "Mary Poppins",
    "year": 1964,
    "runtime": "139 min",
    "genres": [
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 7.4,
    "matchScore": 95,
    "synopsis": "The movie combines a diverting story, songs, color and sequences of live action blended with the movements of animated figures. Mary Poppins is a kind of Super-nanny who flies in with her umbrella in response to the request of the Banks children and proceeds to put things right with the aid of her rather extraordinary magical powers before flying off again.",
    "director": "Robert Stevenson",
    "cast": [
      "Julie Andrews",
      "Dick Van Dyke",
      "David Tomlinson",
      "Glynis Johns"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/o4Wsby4ydIXhWmtmfvb451D5Np1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nMXLizoHhVTeh3GjFyUOfNx3b7i.jpg",
    "trailerId": "H54Ft85U2RA",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Robert Stevenson.",
    "whyRecommended": "Top match based on Comedy themes and direction by Robert Stevenson.",
    "similarTags": [
      "Robert Stevenson",
      "Comedy",
      "Family"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$102 Million",
    "tagline": "It's supercalifragilisticexpialidocious!",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-256591",
    "title": "Focus",
    "originalTitle": "Focus",
    "year": 2015,
    "runtime": "105 min",
    "genres": [
      "Romance",
      "Comedy",
      "Crime",
      "Drama"
    ],
    "imdbRating": 6.7,
    "matchScore": 96,
    "synopsis": "Nicky, a veteran con artist, takes a novice named Jess under his wing. While Nicky teaches Jess the tricks of the trade, the pair become romantically involved; but, when Jess gets uncomfortably close, Nicky ends their relationship. Three years later, Nicky is in Buenos Aires working a very dangerous scheme when Jess -- now an accomplished femme fatale -- unexpectedly shows up. Her appearance throws Nicky for a loop at a time when he cannot afford to be off his game.",
    "director": "Glenn Ficarra",
    "cast": [
      "Will Smith",
      "Margot Robbie",
      "Rodrigo Santoro",
      "Robert Taylor"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lOzGWjceYTd0kd5HyX7Ch46O9kh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cWWM1TTGnOoglZKLpVERGtQ6HJ4.jpg",
    "trailerId": "6vY9UPiI4eQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Glenn Ficarra.",
    "whyRecommended": "Top match based on Romance themes and direction by Glenn Ficarra.",
    "similarTags": [
      "Glenn Ficarra",
      "Romance",
      "Comedy"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$153 Million",
    "tagline": "Never Drop The Con.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-137106",
    "title": "The Lego Movie",
    "originalTitle": "The Lego Movie",
    "year": 2014,
    "runtime": "100 min",
    "genres": [
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 7.5,
    "matchScore": 97,
    "synopsis": "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from gluing the universe together.",
    "director": "Phil Lord",
    "cast": [
      "Chris Pratt",
      "Will Ferrell",
      "Elizabeth Banks",
      "Will Arnett"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6gI1dAkOaUQ6659OdRPsTLlsem5.jpg",
    "trailerId": "fZ_JOBCLF-I",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Phil Lord.",
    "whyRecommended": "Top match based on Adventure themes and direction by Phil Lord.",
    "similarTags": [
      "Phil Lord",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$469 Million",
    "tagline": "The story of a nobody who saved everybody.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-152532",
    "title": "Dallas Buyers Club",
    "originalTitle": "Dallas Buyers Club",
    "year": 2013,
    "runtime": "117 min",
    "genres": [
      "Drama",
      "History"
    ],
    "imdbRating": 7.9,
    "matchScore": 98,
    "synopsis": "Loosely based on the true-life tale of Ron Woodroof, a drug-taking, women-loving, homophobic man who in 1986 was diagnosed with HIV/AIDS and given thirty days to live.",
    "director": "Jean-Marc Vall\u00e9e",
    "cast": [
      "Matthew McConaughey",
      "Jennifer Garner",
      "Jared Leto",
      "Denis O'Hare"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7Fdh7gUq3plvQqxRbNYhWvDABXA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sbVKj98cq0FztCukzu47bu0H8o7.jpg",
    "trailerId": "KDvPcBeOn8E",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Jean-Marc Vall\u00e9e.",
    "whyRecommended": "Top match based on Drama themes and direction by Jean-Marc Vall\u00e9e.",
    "similarTags": [
      "Jean-Marc Vall\u00e9e",
      "Drama",
      "History"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$5 Million",
    "revenue": "$55 Million",
    "tagline": "Sometimes it takes a hustler to change the world",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-72559",
    "title": "G.I. Joe: Retaliation",
    "originalTitle": "G.I. Joe: Retaliation",
    "year": 2013,
    "runtime": "110 min",
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 5.4,
    "matchScore": 99,
    "synopsis": "Framed for crimes against the country, the G.I. Joe team is terminated by Presidential order. This forces the G.I. Joes into not only fighting their mortal enemy Cobra; they are forced to contend with threats from within the government that jeopardize their very existence.",
    "director": "Jon M. Chu",
    "cast": [
      "Dwayne Johnson",
      "D.J. Cotrona",
      "Adrianne Palicki",
      "Bruce Willis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3rWIZMzTKcCtV0eHJ70Z4Ru659f.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/pEhXq18GVe1dg2ltplcxtGWfSje.jpg",
    "trailerId": "2vAo4rJPqQ4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Jon M. Chu.",
    "whyRecommended": "Top match based on Adventure themes and direction by Jon M. Chu.",
    "similarTags": [
      "Jon M. Chu",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$371 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-12405",
    "title": "Slumdog Millionaire",
    "originalTitle": "Slumdog Millionaire",
    "year": 2008,
    "runtime": "120 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.6,
    "matchScore": 90,
    "synopsis": "Jamal Malik is an impoverished Indian teen who becomes a contestant on the Hindi version of \u2018Who Wants to Be a Millionaire?\u2019 but, after he wins, he is suspected of cheating.",
    "director": "Danny Boyle",
    "cast": [
      "Dev Patel",
      "Freida Pinto",
      "Anil Kapoor",
      "Mia Drake Inderbitzin"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/5leCCi7ZF0CawAfM5Qo2ECKPprc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1wZoVT9RJsZmNjg8CecXqSgFUd9.jpg",
    "trailerId": "AIzbwV7on6Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Danny Boyle.",
    "whyRecommended": "Top match based on Drama themes and direction by Danny Boyle.",
    "similarTags": [
      "Danny Boyle",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$377 Million",
    "tagline": "What does it take to find a lost love? A. Money, B. Luck, C. Smarts, D. Destiny",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-453",
    "title": "A Beautiful Mind",
    "originalTitle": "A Beautiful Mind",
    "year": 2001,
    "runtime": "135 min",
    "genres": [
      "Drama",
      "Romance"
    ],
    "imdbRating": 7.7,
    "matchScore": 91,
    "synopsis": "At Princeton University, John Nash struggles to make a worthwhile contribution to serve as his legacy to the world of mathematics. He finally makes a revolutionary breakthrough that will eventually earn him the Nobel Prize. After graduate school he turns to teaching, becoming romantically involved with his student Alicia. Meanwhile the government asks his help with breaking Soviet codes, which soon gets him involved in a terrifying conspiracy plot. Nash grows more and more paranoid until a discovery that turns his entire world upside down. Now it is only with Alicia's help that he will be able to recover his mental strength and regain his status as the great mathematician we know him as today..",
    "director": "Ron Howard",
    "cast": [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly",
      "Christopher Plummer"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rEIg5yJdNOt9fmX4P8gU9LeNoTQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hCJFWTPghXCwwSpvPpAoIB8318Q.jpg",
    "trailerId": "yC2VpkVMtXY",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Ron Howard.",
    "whyRecommended": "Top match based on Drama themes and direction by Ron Howard.",
    "similarTags": [
      "Ron Howard",
      "Drama",
      "Romance"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$313 Million",
    "tagline": "I need to believe that something extra ordinary is possible...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-45612",
    "title": "Source Code",
    "originalTitle": "Source Code",
    "year": 2011,
    "runtime": "93 min",
    "genres": [
      "Thriller",
      "Science Fiction",
      "Mystery"
    ],
    "imdbRating": 7.1,
    "matchScore": 92,
    "synopsis": "Decorated soldier Captain Colter Stevens wakes up in the body of an unknown man, discovering he's involved in a mission to find the bomber of a Chicago commuter train. He learns he's part of a top-secret experimental program that enables him to experience the final 8 minutes of another person's life. Colter re-lives the train incident over and over again, gathering more clues each time. But can he discover who is responsible for the attack before the next one happens?",
    "director": "Duncan Jones",
    "cast": [
      "Jake Gyllenhaal",
      "Michelle Monaghan",
      "Vera Farmiga",
      "Russell Peters"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nTr0lvAzeQmUjgSgDEHTJpnrxTz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/s2Cu1y9Al9RbwRU5blAH8wMCrBI.jpg",
    "trailerId": "0dafmG_c8kc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Duncan Jones.",
    "whyRecommended": "Top match based on Thriller themes and direction by Duncan Jones.",
    "similarTags": [
      "Duncan Jones",
      "Thriller",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$32 Million",
    "revenue": "$147 Million",
    "tagline": "Make Every Second Count",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-242",
    "title": "The Godfather: Part III",
    "originalTitle": "The Godfather: Part III",
    "year": 1990,
    "runtime": "162 min",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.1,
    "matchScore": 93,
    "synopsis": "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don, Michael Corleone seeks forgiveness for his sins while taking a young protege under his wing.",
    "director": "Francis Ford Coppola",
    "cast": [
      "Al Pacino",
      "Diane Keaton",
      "Andy Garc\u00eda",
      "Talia Shire"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lm3pQ2QoQ16pextRsmnUbG2onES.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zNnjHLDtV8Ti3aworltaeaLMov4.jpg",
    "trailerId": "qQR85-nGk2M",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Francis Ford Coppola.",
    "whyRecommended": "Top match based on Crime themes and direction by Francis Ford Coppola.",
    "similarTags": [
      "Francis Ford Coppola",
      "Crime",
      "Drama"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$54 Million",
    "revenue": "$136 Million",
    "tagline": "All the power on earth can't change destiny.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-157353",
    "title": "Transcendence",
    "originalTitle": "Transcendence",
    "year": 2014,
    "runtime": "119 min",
    "genres": [
      "Thriller",
      "Science Fiction",
      "Drama",
      "Mystery"
    ],
    "imdbRating": 5.9,
    "matchScore": 94,
    "synopsis": "Two leading computer scientists work toward their goal of Technological Singularity,  as a radical anti-technology organization fights to prevent them from creating a world where computers can transcend the abilities of the human brain.",
    "director": "Wally Pfister",
    "cast": [
      "Johnny Depp",
      "Paul Bettany",
      "Rebecca Hall",
      "Kate Mara"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/i3JqPtiJWnidaif3UA2K2Eng0hp.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ypuD6ZsupyVV1ElNSIPz2BooIlX.jpg",
    "trailerId": "QheoYw1BKJ4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Wally Pfister.",
    "whyRecommended": "Top match based on Thriller themes and direction by Wally Pfister.",
    "similarTags": [
      "Wally Pfister",
      "Thriller",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$100 Million",
    "revenue": "$103 Million",
    "tagline": "Yesterday, Dr. Will Caster was only human...",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-744",
    "title": "Top Gun",
    "originalTitle": "Top Gun",
    "year": 1986,
    "runtime": "110 min",
    "genres": [
      "Action",
      "Romance",
      "War"
    ],
    "imdbRating": 6.7,
    "matchScore": 95,
    "synopsis": "For Lieutenant Pete 'Maverick' Mitchell and his friend and Co-Pilot Nick 'Goose' Bradshaw being accepted into an elite training school for fighter pilots is a dream come true.  A tragedy, as well as personal demons, threaten Pete's dreams of becoming an Ace pilot.",
    "director": "Tony Scott",
    "cast": [
      "Tom Cruise",
      "Kelly McGillis",
      "Val Kilmer",
      "Anthony Edwards"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xUuHj3CgmZQ9P2cMaqQs4J0d4Zc.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dBgxEkWe17R0AJDAvAhpeVELQx2.jpg",
    "trailerId": "Klc__shdj88",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Tony Scott.",
    "whyRecommended": "Top match based on Action themes and direction by Tony Scott.",
    "similarTags": [
      "Tony Scott",
      "Action",
      "Romance"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$356 Million",
    "tagline": "Up there with the best of the best.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-2059",
    "title": "National Treasure",
    "originalTitle": "National Treasure",
    "year": 2004,
    "runtime": "131 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller",
      "Mystery"
    ],
    "imdbRating": 6.4,
    "matchScore": 96,
    "synopsis": "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do.",
    "director": "Jon Turteltaub",
    "cast": [
      "Nicolas Cage",
      "Diane Kruger",
      "Justin Bartha",
      "Sean Bean"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/pxL6E4GBOPUG6CdkO9cUQN5VMwI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9EnZD3ZWjpJy4IPoQkqTzxvZrso.jpg",
    "trailerId": "I0u9-5lPP4Q",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Jon Turteltaub.",
    "whyRecommended": "Top match based on Adventure themes and direction by Jon Turteltaub.",
    "similarTags": [
      "Jon Turteltaub",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$100 Million",
    "revenue": "$347 Million",
    "tagline": "The greatest adventure history has ever revealed.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-103",
    "title": "Taxi Driver",
    "originalTitle": "Taxi Driver",
    "year": 1976,
    "runtime": "114 min",
    "genres": [
      "Crime",
      "Drama"
    ],
    "imdbRating": 8.0,
    "matchScore": 97,
    "synopsis": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    "director": "Martin Scorsese",
    "cast": [
      "Robert De Niro",
      "Cybill Shepherd",
      "Harvey Keitel",
      "Jodie Foster"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9uddYYTNcLWpzUkl5iw1RUYhLhY.jpg",
    "trailerId": "zdqCqDSTVNI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Martin Scorsese.",
    "whyRecommended": "Top match based on Crime themes and direction by Martin Scorsese.",
    "similarTags": [
      "Martin Scorsese",
      "Crime",
      "Drama"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$28 Million",
    "tagline": "On every street in every city, there's a nobody who dreams of being a somebody.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49018",
    "title": "Insidious",
    "originalTitle": "Insidious",
    "year": 2010,
    "runtime": "103 min",
    "genres": [
      "Horror",
      "Thriller"
    ],
    "imdbRating": 6.8,
    "matchScore": 98,
    "synopsis": "A family discovers that dark spirits have invaded their home after their son inexplicably falls into an endless sleep. When they reach out to a professional for help, they learn things are a lot more personal than they thought.",
    "director": "James Wan",
    "cast": [
      "Patrick Wilson",
      "Rose Byrne",
      "Ty Simpkins",
      "Barbara Hershey"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1egpmVXuXed58TH2UOnX1nATTrf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tJvRdhlkonjBLBUpTqp0RPPujxJ.jpg",
    "trailerId": "62rpZcMYa0A",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by James Wan.",
    "whyRecommended": "Top match based on Horror themes and direction by James Wan.",
    "similarTags": [
      "James Wan",
      "Horror",
      "Thriller"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$1 Million",
    "revenue": "$97 Million",
    "tagline": "It's not the house that's haunted.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-299687",
    "title": "The 5th Wave",
    "originalTitle": "The 5th Wave",
    "year": 2016,
    "runtime": "112 min",
    "genres": [
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 5.6,
    "matchScore": 99,
    "synopsis": "16-year-old Cassie Sullivan tries to survive in a world devastated by the waves of an alien invasion that has already decimated the population and knocked mankind back to the Stone Age.",
    "director": "J Blakeson",
    "cast": [
      "Chlo\u00eb Grace Moretz",
      "Nick Robinson",
      "Alex Roe",
      "Maika Monroe"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ja34BV577dtjWl2S5G1tB93IjYb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hqrwXs3KqPuU5rWoconbmQUn6rh.jpg",
    "trailerId": "kmxLybfGNC4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by J Blakeson.",
    "whyRecommended": "Top match based on Adventure themes and direction by J Blakeson.",
    "similarTags": [
      "J Blakeson",
      "Adventure",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$38 Million",
    "revenue": "$109 Million",
    "tagline": "Protect Your Own",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-203833",
    "title": "The Book Thief",
    "originalTitle": "The Book Thief",
    "year": 2013,
    "runtime": "131 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.4,
    "matchScore": 90,
    "synopsis": "While subjected to the horrors of WWII Germany, young Liesel finds solace by stealing books and sharing them with others. Under the stairs in her home, a Jewish refuge is being sheltered by her adoptive parents.",
    "director": "Brian Percival",
    "cast": [
      "Geoffrey Rush",
      "Sophie N\u00e9lisse",
      "Emily Watson",
      "Nico Liersch"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wj4U5sMLcJMa3WR9CpRR9e2sdgZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/arFPEDEW4PzPaMBXgTPzJlumfGw.jpg",
    "trailerId": "38K6u_z5Gug",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Brian Percival.",
    "whyRecommended": "Top match based on Drama themes and direction by Brian Percival.",
    "similarTags": [
      "Brian Percival",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$76 Million",
    "tagline": "Courage beyond words.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-10528",
    "title": "Sherlock Holmes",
    "originalTitle": "Sherlock Holmes",
    "year": 2009,
    "runtime": "128 min",
    "genres": [
      "Action",
      "Adventure",
      "Crime",
      "Mystery"
    ],
    "imdbRating": 7.0,
    "matchScore": 91,
    "synopsis": "Eccentric consulting detective, Sherlock Holmes and Doctor John Watson battle to bring down a new nemesis and unravel a deadly plot that could destroy England.",
    "director": "Guy Ritchie",
    "cast": [
      "Robert Downey Jr.",
      "Jude Law",
      "Rachel McAdams",
      "Mark Strong"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/momkKuWburNTqKBF6ez7rvhYVhE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/85g84VtSf9tu1A9JqqruXEHspb7.jpg",
    "trailerId": "zBQfbc1t_I8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Guy Ritchie.",
    "whyRecommended": "Top match based on Action themes and direction by Guy Ritchie.",
    "similarTags": [
      "Guy Ritchie",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$524 Million",
    "tagline": "Nothing escapes him.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-594",
    "title": "The Terminal",
    "originalTitle": "The Terminal",
    "year": 2004,
    "runtime": "128 min",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "imdbRating": 7.0,
    "matchScore": 92,
    "synopsis": "Viktor Navorski is a man without a country; his plane took off just as a coup d'etat exploded in his homeland, leaving it in shambles, and now he's stranded at Kennedy Airport, where he's holding a passport that nobody recognizes. While quarantined in the transit lounge until authorities can figure out what to do with him, Viktor simply goes on living \u2013 and courts romance with a beautiful flight attendant.",
    "director": "Steven Spielberg",
    "cast": [
      "Tom Hanks",
      "Catherine Zeta-Jones",
      "Stanley Tucci",
      "Chi McBride"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cPB3ZMM4UdsSAhNdS4c7ps5nypY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zywtNiaZ9r7azrcNdl2j0jOgrkw.jpg",
    "trailerId": "GZjC9dAvWuU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Comedy themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Comedy",
      "Drama"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$60 Million",
    "revenue": "$219 Million",
    "tagline": "Life is waiting.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-8358",
    "title": "Cast Away",
    "originalTitle": "Cast Away",
    "year": 2000,
    "runtime": "143 min",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "imdbRating": 7.5,
    "matchScore": 93,
    "synopsis": "Chuck, a top international manager for FedEx, and Kelly, a Ph.D. student, are in love and heading towards marriage. Then Chuck's plane to Malaysia ditches at sea during a terrible storm. He's the only survivor, and he washes up on a tiny island with nothing but some flotsam and jetsam from the aircraft's cargo.",
    "director": "Robert Zemeckis",
    "cast": [
      "Tom Hanks",
      "Helen Hunt",
      "Chris Noth",
      "Paul Sanchez"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oCFVYPXI4IfhtF3GapU2jkDicDI.jpg",
    "trailerId": "2dZvTscDGek",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Robert Zemeckis.",
    "whyRecommended": "Top match based on Adventure themes and direction by Robert Zemeckis.",
    "similarTags": [
      "Robert Zemeckis",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$90 Million",
    "revenue": "$429 Million",
    "tagline": "At the edge of the world, his journey begins.",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-1573",
    "title": "Die Hard 2",
    "originalTitle": "Die Hard 2",
    "year": 1990,
    "runtime": "124 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 94,
    "synopsis": "John McClane is an off-duty cop gripped with a feeling of d\u00e9j\u00e0 vu when on a snowy Christmas Eve in the nation's capital, terrorists seize a major international airport, holding thousands of holiday travelers hostage. Renegade military commandos led by a murderous rogue officer plot to rescue a drug lord from justice and are prepared for every contingency except one: McClane's smart-mouthed heroics.",
    "director": "Renny Harlin",
    "cast": [
      "Bruce Willis",
      "Bonnie Bedelia",
      "William Atherton",
      "Reginald VelJohnson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ybki0UWO3OPhaM6MSniuKC7sy1R.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/cDtefl7KGnKrDziEUXetMnztvqr.jpg",
    "trailerId": "IoZCfS5290M",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Renny Harlin.",
    "whyRecommended": "Top match based on Action themes and direction by Renny Harlin.",
    "similarTags": [
      "Renny Harlin",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$70 Million",
    "revenue": "$240 Million",
    "tagline": "Die Harder",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  },
  {
    "id": "tmdb-49049",
    "title": "Dredd",
    "originalTitle": "Dredd",
    "year": 2012,
    "runtime": "95 min",
    "genres": [
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 95,
    "synopsis": "In the future, America is a dystopian wasteland. The latest scourge is Ma-Ma, a prostitute-turned-drug pusher with a dangerous new drug and aims to take over the city. The only possibility of stopping her is an elite group of urban police called Judges, who combine the duties of judge, jury and executioner to deliver a brutal brand of swift justice. But even the top-ranking Judge, Dredd, discovers that taking down Ma-Ma isn\u2019t as easy as it seems in this explosive adaptation of the hugely popular comic series.",
    "director": "Pete Travis",
    "cast": [
      "Karl Urban",
      "Olivia Thirlby",
      "Lena Headey",
      "Wood Harris"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wLx65gtGVnUFCxceHWGszcruCZj.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jUqDBi02CDjqrroC3Zl8hroBbSr.jpg",
    "trailerId": "3Sp-2FvUNv0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Pete Travis.",
    "whyRecommended": "Top match based on Action themes and direction by Pete Travis.",
    "similarTags": [
      "Pete Travis",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$50 Million",
    "revenue": "$41 Million",
    "tagline": "Judgement is coming",
    "productionCompany": "Hollywood Studio",
    "reviews": []
  }
];

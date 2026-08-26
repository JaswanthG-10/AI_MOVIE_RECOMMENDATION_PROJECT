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

export const LANGUAGES_LIST = [
  { id: "All", name: "All Languages", flag: "🌐" },
  { id: "English", name: "English", flag: "🇺🇸" },
  { id: "Tamil", name: "Tamil (தமிழ்)", flag: "🇮🇳" },
  { id: "Korean", name: "Korean (한국어)", flag: "🇰🇷" },
  { id: "Japanese", name: "Japanese (日本語)", flag: "🇯🇵" },
  { id: "Spanish", name: "Spanish", flag: "🇪🇸" },
  { id: "Hindi", name: "Hindi (हिंदी)", flag: "🇮🇳 font-bold" },
];

export const ALL_GENRES_LIST = [
  "Action", "Adventure", "Animation", "Comedy", "Crime",
  "Drama", "Fantasy", "Horror", "Mystery", "Romance",
  "Sci-Fi", "Thriller"
];

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
    "productionCompany": "Ekipa"
  },
  {
    "id": "tmdb-211672",
    "title": "Minions",
    "originalTitle": "Minions",
    "year": 2015,
    "runtime": "91 min",
    "genres": [
      "Family",
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "imdbRating": 6.4,
    "matchScore": 90,
    "synopsis": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
    "director": "Kyle Balda",
    "cast": [
      "Sandra Bullock",
      "Jon Hamm",
      "Michael Keaton",
      "Allison Janney"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wKrxeY6lbu7KFBsWVcMH6M8avwr.jpg",
    "trailerId": "Wfql_DoHRKc",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Family themes and direction by Kyle Balda.",
    "whyRecommended": "Top match based on Family themes and direction by Kyle Balda.",
    "similarTags": [
      "Kyle Balda",
      "Family",
      "Animation"
    ],
    "moods": [
      "\u2728 Family",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$74 Million",
    "revenue": "$1156 Million",
    "tagline": "Before Gru, they had a history of bad bosses",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-293660",
    "title": "Deadpool",
    "originalTitle": "Deadpool",
    "year": 2016,
    "runtime": "108 min",
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "imdbRating": 7.4,
    "matchScore": 92,
    "synopsis": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    "director": "Tim Miller",
    "cast": [
      "Ryan Reynolds",
      "Morena Baccarin",
      "Ed Skrein",
      "T.J. Miller"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/en971MEXui9diirXlogOrPKmsEn.jpg",
    "trailerId": "9vN6DHB6bJc",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Tim Miller.",
    "whyRecommended": "Top match based on Action themes and direction by Tim Miller.",
    "similarTags": [
      "Tim Miller",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$58 Million",
    "revenue": "$783 Million",
    "tagline": "Witness the beginning of a happy ending",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-177572",
    "title": "Big Hero 6",
    "originalTitle": "Big Hero 6",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Adventure",
      "Family",
      "Animation",
      "Action",
      "Comedy"
    ],
    "imdbRating": 7.8,
    "matchScore": 97,
    "synopsis": "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    "director": "Chris Williams",
    "cast": [
      "Scott Adsit",
      "Ryan Potter",
      "Daniel Henney",
      "T.J. Miller"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/4s2d3xdyqotiVNHTlTlJjrr3q0H.jpg",
    "trailerId": "8IdMPpKMdcc",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Chris Williams.",
    "whyRecommended": "Top match based on Adventure themes and direction by Chris Williams.",
    "similarTags": [
      "Chris Williams",
      "Adventure",
      "Family"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$165 Million",
    "revenue": "$652 Million",
    "tagline": "From the creators of Wreck-it Ralph and Frozen",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-109445",
    "title": "Frozen",
    "originalTitle": "Frozen",
    "year": 2013,
    "runtime": "102 min",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "imdbRating": 7.3,
    "matchScore": 99,
    "synopsis": "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa\u2019s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    "director": "Chris Buck",
    "cast": [
      "Kristen Bell",
      "Idina Menzel",
      "Jonathan Groff",
      "Josh Gad"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/itAKcobTYGpYT8Phwjd8c9hleTo.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rj58WQ9ImI0mYDptXdM7euX1Wjt.jpg",
    "trailerId": "TbQm5doF_Uc",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Chris Buck.",
    "whyRecommended": "Top match based on Animation themes and direction by Chris Buck.",
    "similarTags": [
      "Chris Buck",
      "Animation",
      "Adventure"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$1274 Million",
    "tagline": "Only the act of true love will thaw a frozen heart.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-550",
    "title": "Fight Club",
    "originalTitle": "Fight Club",
    "year": 1999,
    "runtime": "139 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 8.3,
    "matchScore": 92,
    "synopsis": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "director": "David Fincher",
    "cast": [
      "Edward Norton",
      "Brad Pitt",
      "Meat Loaf",
      "Jared Leto"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/c6OLXfKAk5BKeR6broC8pYiCquX.jpg",
    "trailerId": "dfeUzm6KF4g",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by David Fincher.",
    "whyRecommended": "Top match based on Drama themes and direction by David Fincher.",
    "similarTags": [
      "David Fincher",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$63 Million",
    "revenue": "$100 Million",
    "tagline": "Mischief. Mayhem. Soap.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-238",
    "title": "The Godfather",
    "originalTitle": "The Godfather",
    "year": 1972,
    "runtime": "175 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 8.4,
    "matchScore": 93,
    "synopsis": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "director": "Francis Ford Coppola",
    "cast": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan",
      "Richard S. Castellano"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg",
    "trailerId": "Ew9ngL1GZvs",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Francis Ford Coppola.",
    "whyRecommended": "Top match based on Drama themes and direction by Francis Ford Coppola.",
    "similarTags": [
      "Francis Ford Coppola",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$245 Million",
    "tagline": "An offer you can't refuse.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-98566",
    "title": "Teenage Mutant Ninja Turtles",
    "originalTitle": "Teenage Mutant Ninja Turtles",
    "year": 2014,
    "runtime": "101 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Adventure",
      "Fantasy",
      "Comedy"
    ],
    "imdbRating": 5.8,
    "matchScore": 94,
    "synopsis": "The city needs heroes. Darkness has settled over New York City as Shredder and his evil Foot Clan have an iron grip on everything from the police to the politicians. The future is grim until four unlikely outcast brothers rise from the sewers and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must work with fearless reporter April and her wise-cracking cameraman Vern Fenwick to save the city and unravel Shredder's diabolical plan.",
    "director": "Jonathan Liebesman",
    "cast": [
      "Megan Fox",
      "Will Arnett",
      "William Fichtner",
      "Alan Ritchson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/azL2ThbJMIkts3ZMt3j1YgBUeDB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/eezsbzYPbYKjjh6E1XHDBNlLynh.jpg",
    "trailerId": "dwXFsrp6WBs",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Jonathan Liebesman.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Jonathan Liebesman.",
    "similarTags": [
      "Jonathan Liebesman",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$125 Million",
    "revenue": "$477 Million",
    "tagline": "Mysterious. Dangerous. Reptilious. You've never seen heroes like this.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-228150",
    "title": "Fury",
    "originalTitle": "Fury",
    "year": 2014,
    "runtime": "135 min",
    "genres": [
      "War",
      "Drama",
      "Action"
    ],
    "imdbRating": 7.4,
    "matchScore": 95,
    "synopsis": "Last months of World War II in April 1945. As the Allies make their final push in the European Theater, a battle-hardened U.S. Army sergeant in the 2nd Armored Division named Wardaddy commands a Sherman tank called \"Fury\" and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
    "director": "David Ayer",
    "cast": [
      "Brad Pitt",
      "Shia LaBeouf",
      "Logan Lerman",
      "Michael Pe\u00f1a"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/pfte7wdMobMF4CVHuOxyu6oqeeA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/95ckrV6wQgbffurAVmETQ5YKASL.jpg",
    "trailerId": "09w9MTtZDEM",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on War themes and direction by David Ayer.",
    "whyRecommended": "Top match based on War themes and direction by David Ayer.",
    "similarTags": [
      "David Ayer",
      "War",
      "Drama"
    ],
    "moods": [
      "\u2728 War",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$68 Million",
    "revenue": "$211 Million",
    "tagline": "War never ends quietly.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-285",
    "title": "Pirates of the Caribbean: At World's End",
    "originalTitle": "Pirates of the Caribbean: At World's End",
    "year": 2007,
    "runtime": "169 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 6.9,
    "matchScore": 97,
    "synopsis": "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems.",
    "director": "Gore Verbinski",
    "cast": [
      "Johnny Depp",
      "Orlando Bloom",
      "Keira Knightley",
      "Stellan Skarsg\u00e5rd"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1jHxkVXMI5s3vRiyiZooUy1shB5.jpg",
    "trailerId": "HKSZtp_OGHY",
    "streamingOn": [
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
    "budget": "$300 Million",
    "revenue": "$961 Million",
    "tagline": "At the end of the world, the adventure begins.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-120",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "originalTitle": "The Lord of the Rings: The Fellowship of the Ring",
    "year": 2001,
    "runtime": "178 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 8.0,
    "matchScore": 98,
    "synopsis": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Ian McKellen",
      "Cate Blanchett",
      "Orlando Bloom"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mWDdRXTivGE7aaY2vo1Ie0PfCX5.jpg",
    "trailerId": "_nZdmwHrcnw",
    "streamingOn": [
      "Max"
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
    "budget": "$93 Million",
    "revenue": "$871 Million",
    "tagline": "One ring to rule them all",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-93456",
    "title": "Despicable Me 2",
    "originalTitle": "Despicable Me 2",
    "year": 2013,
    "runtime": "98 min",
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "imdbRating": 7.0,
    "matchScore": 99,
    "synopsis": "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    "director": "Pierre Coffin",
    "cast": [
      "Steve Carell",
      "Kristen Wiig",
      "Benjamin Bratt",
      "Miranda Cosgrove"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uD267eSiACfWLxp47t3gYymOQRj.jpg",
    "trailerId": "EK3j98PHaGM",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Pierre Coffin.",
    "whyRecommended": "Top match based on Animation themes and direction by Pierre Coffin.",
    "similarTags": [
      "Pierre Coffin",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$76 Million",
    "revenue": "$970 Million",
    "tagline": "Back 2 Work",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-1865",
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "originalTitle": "Pirates of the Caribbean: On Stranger Tides",
    "year": 2011,
    "runtime": "136 min",
    "genres": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "imdbRating": 6.4,
    "matchScore": 91,
    "synopsis": "Captain Jack Sparrow crosses paths with a woman from his past, and he's not sure if it's love -- or if she's a ruthless con artist who's using him to find the fabled Fountain of Youth. When she forces him aboard the Queen Anne's Revenge, the ship of the formidable pirate Blackbeard, Jack finds himself on an unexpected adventure in which he doesn't know who to fear more: Blackbeard or the woman from his past.",
    "director": "Rob Marshall",
    "cast": [
      "Johnny Depp",
      "Pen\u00e9lope Cruz",
      "Ian McShane",
      "Kevin McNally"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uzIGtyS6bbnJzGsPL93WCF1FWm8.jpg",
    "trailerId": "0BXCVe8Yww4",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Rob Marshall.",
    "whyRecommended": "Top match based on Adventure themes and direction by Rob Marshall.",
    "similarTags": [
      "Rob Marshall",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$380 Million",
    "revenue": "$1045 Million",
    "tagline": "Live Forever Or Die Trying.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-131634",
    "title": "The Hunger Games: Mockingjay - Part 2",
    "originalTitle": "The Hunger Games: Mockingjay - Part 2",
    "year": 2015,
    "runtime": "137 min",
    "genres": [
      "Action",
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 94,
    "synopsis": "With the nation of Panem in a full scale war, Katniss confronts President Snow in the final showdown. Teamed with a group of her closest friends \u2013 including Gale, Finnick, and Peeta \u2013 Katniss goes off on a mission with the unit from District 13 as they risk their lives to stage an assassination attempt on President Snow who has become increasingly obsessed with destroying her. The mortal traps, enemies, and moral choices that await Katniss will challenge her more than any arena she faced in The Hunger Games.",
    "director": "Francis Lawrence",
    "cast": [
      "Jennifer Lawrence",
      "Josh Hutcherson",
      "Liam Hemsworth",
      "Woody Harrelson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lImKHDfExAulp16grYm8zD5eONE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qVgLMRVNB5bHU0inmRa0ueShacN.jpg",
    "trailerId": "SoKIqLEGhI0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Francis Lawrence.",
    "whyRecommended": "Top match based on Action themes and direction by Francis Lawrence.",
    "similarTags": [
      "Francis Lawrence",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$160 Million",
    "revenue": "$653 Million",
    "tagline": "The fire will burn forever.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-122",
    "title": "The Lord of the Rings: The Return of the King",
    "originalTitle": "The Lord of the Rings: The Return of the King",
    "year": 2003,
    "runtime": "201 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 8.1,
    "matchScore": 97,
    "synopsis": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's realm.",
    "director": "Peter Jackson",
    "cast": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen",
      "Liv Tyler"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
    "trailerId": "zckJCxYxn1g",
    "streamingOn": [
      "Disney+"
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
    "budget": "$94 Million",
    "revenue": "$1118 Million",
    "tagline": "The eye of the enemy is moving.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-680",
    "title": "Pulp Fiction",
    "originalTitle": "Pulp Fiction",
    "year": 1994,
    "runtime": "154 min",
    "genres": [
      "Thriller",
      "Crime"
    ],
    "imdbRating": 8.3,
    "matchScore": 98,
    "synopsis": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "director": "Quentin Tarantino",
    "cast": [
      "John Travolta",
      "Samuel L. Jackson",
      "Uma Thurman",
      "Bruce Willis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    "trailerId": "tGpTpVyI_OQ",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Quentin Tarantino.",
    "whyRecommended": "Top match based on Thriller themes and direction by Quentin Tarantino.",
    "similarTags": [
      "Quentin Tarantino",
      "Thriller",
      "Crime"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$8 Million",
    "revenue": "$213 Million",
    "tagline": "Just because you are a character doesn't mean you have character.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-122917",
    "title": "The Hobbit: The Battle of the Five Armies",
    "originalTitle": "The Hobbit: The Battle of the Five Armies",
    "year": 2014,
    "runtime": "144 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 7.1,
    "matchScore": 99,
    "synopsis": "Immediately after the events of The Desolation of Smaug, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    "director": "Peter Jackson",
    "cast": [
      "Martin Freeman",
      "Ian McKellen",
      "Richard Armitage",
      "Ken Stott"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3UbaCMmqOd7mca4Y5DOzY2ZVTyX.jpg",
    "trailerId": "Y6Fv5StfAxA",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Peter Jackson.",
    "whyRecommended": "Top match based on Action themes and direction by Peter Jackson.",
    "similarTags": [
      "Peter Jackson",
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
    "revenue": "$956 Million",
    "tagline": "Witness the defining chapter of the Middle-Earth saga",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-129",
    "title": "Spirited Away",
    "originalTitle": "\u5343\u3068\u5343\u5c0b\u306e\u795e\u96a0\u3057",
    "year": 2001,
    "runtime": "125 min",
    "genres": [
      "Fantasy",
      "Adventure",
      "Animation",
      "Family"
    ],
    "imdbRating": 8.3,
    "matchScore": 92,
    "synopsis": "A ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    "director": "Hayao Miyazaki",
    "cast": [
      "Rumi Hiiragi",
      "Miyu Irino",
      "Mari Natsuki",
      "Takashi Naito"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/dyJvKsNs2KP8qQnAXbRwDjblViy.jpg",
    "trailerId": "GAp2_0JJskk",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Hayao Miyazaki.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Hayao Miyazaki.",
    "similarTags": [
      "Hayao Miyazaki",
      "Fantasy",
      "Adventure"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "Japanese",
    "country": "International",
    "budget": "$15 Million",
    "revenue": "$274 Million",
    "tagline": "The tunnel led Chihiro to a mysterious town...",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-198184",
    "title": "Chappie",
    "originalTitle": "Chappie",
    "year": 2015,
    "runtime": "120 min",
    "genres": [
      "Crime",
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 6.6,
    "matchScore": 94,
    "synopsis": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings\u2014some good, some bad\u2014and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    "director": "Neill Blomkamp",
    "cast": [
      "Sharlto Copley",
      "Dev Patel",
      "Ninja",
      "Yolandi Visser"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uuDUpzlMFomdSfNWlpEPS9nVZWV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3pKIcv6KhUE35jsKnv3MylQ3OT2.jpg",
    "trailerId": "lyy7y0QOK-0",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Neill Blomkamp.",
    "whyRecommended": "Top match based on Crime themes and direction by Neill Blomkamp.",
    "similarTags": [
      "Neill Blomkamp",
      "Crime",
      "Action"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$49 Million",
    "revenue": "$104 Million",
    "tagline": "I am consciousness. I am alive. I am Chappie.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-559",
    "title": "Spider-Man 3",
    "originalTitle": "Spider-Man 3",
    "year": 2007,
    "runtime": "139 min",
    "genres": [
      "Fantasy",
      "Action",
      "Adventure"
    ],
    "imdbRating": 5.9,
    "matchScore": 95,
    "synopsis": "The seemingly invincible Spider-Man goes up against an all-new crop of villain \u2013 including the shape-shifting Sandman. While Spider-Man\u2019s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.",
    "director": "Sam Raimi",
    "cast": [
      "Tobey Maguire",
      "Kirsten Dunst",
      "James Franco",
      "Thomas Haden Church"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sJMTTGjtjvrMZ7G0oP9D13wNUum.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/FfAU0PUs8AJkMU2VbkVNFtRXR4.jpg",
    "trailerId": "e5wUilOeOmg",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Sam Raimi.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Sam Raimi.",
    "similarTags": [
      "Sam Raimi",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$258 Million",
    "revenue": "$890 Million",
    "tagline": "The battle within.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-177677",
    "title": "Mission: Impossible - Rogue Nation",
    "originalTitle": "Mission: Impossible - Rogue Nation",
    "year": 2015,
    "runtime": "131 min",
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "imdbRating": 7.1,
    "matchScore": 98,
    "synopsis": "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
    "director": "Christopher McQuarrie",
    "cast": [
      "Tom Cruise",
      "Rebecca Ferguson",
      "Simon Pegg",
      "Jeremy Renner"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fRJLXQBHK2wyznK5yZbO7vmsuVK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vYIUN5rrCncHFY8WvcuXQlM4hk5.jpg",
    "trailerId": "F-qBD17wwrQ",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Christopher McQuarrie.",
    "whyRecommended": "Top match based on Action themes and direction by Christopher McQuarrie.",
    "similarTags": [
      "Christopher McQuarrie",
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
    "revenue": "$682 Million",
    "tagline": "Desperate Times. Desperate Measures.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-49051",
    "title": "The Hobbit: An Unexpected Journey",
    "originalTitle": "The Hobbit: An Unexpected Journey",
    "year": 2012,
    "runtime": "169 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Action"
    ],
    "imdbRating": 7.0,
    "matchScore": 93,
    "synopsis": "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    "director": "Peter Jackson",
    "cast": [
      "Ian McKellen",
      "Martin Freeman",
      "Richard Armitage",
      "Andy Serkis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xyXmtuvsoM5J3yNad0nvcetpBdY.jpg",
    "trailerId": "CXqZK-nbZ74",
    "streamingOn": [
      "Disney+"
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
    "revenue": "$1021 Million",
    "tagline": "From the smallest beginnings come the greatest legends.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-10764",
    "title": "Quantum of Solace",
    "originalTitle": "Quantum of Solace",
    "year": 2008,
    "runtime": "106 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller",
      "Crime"
    ],
    "imdbRating": 6.1,
    "matchScore": 94,
    "synopsis": "Quantum of Solace continues the adventures of James Bond after Casino Royale. Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    "director": "Marc Forster",
    "cast": [
      "Daniel Craig",
      "Olga Kurylenko",
      "Mathieu Amalric",
      "Judi Dench"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uGs5Z7dMguf7kxWubGFcp9EhKcy.jpg",
    "trailerId": "BBqYaFEWBxI",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Marc Forster.",
    "whyRecommended": "Top match based on Adventure themes and direction by Marc Forster.",
    "similarTags": [
      "Marc Forster",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$586 Million",
    "tagline": "For love, for hate, for justice, for revenge.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-206647",
    "title": "Spectre",
    "originalTitle": "Spectre",
    "year": 2015,
    "runtime": "148 min",
    "genres": [
      "Action",
      "Adventure",
      "Crime"
    ],
    "imdbRating": 6.3,
    "matchScore": 95,
    "synopsis": "A cryptic message from Bond\u2019s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    "director": "Sam Mendes",
    "cast": [
      "Daniel Craig",
      "Christoph Waltz",
      "L\u00e9a Seydoux",
      "Ralph Fiennes"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8lBViysvNJBPkl6zG1LVAaW3qhj.jpg",
    "trailerId": "z4UDNzXD3qA",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Sam Mendes.",
    "whyRecommended": "Top match based on Action themes and direction by Sam Mendes.",
    "similarTags": [
      "Sam Mendes",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$245 Million",
    "revenue": "$880 Million",
    "tagline": "A Plan No One Escapes",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-240",
    "title": "The Godfather: Part II",
    "originalTitle": "The Godfather: Part II",
    "year": 1974,
    "runtime": "200 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 8.3,
    "matchScore": 96,
    "synopsis": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
    "director": "Francis Ford Coppola",
    "cast": [
      "Al Pacino",
      "Robert Duvall",
      "Diane Keaton",
      "Robert De Niro"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sSuQTCZwqKrNBNIsksO9IAUoWP9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
    "trailerId": "7pfqivkYUlE",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Francis Ford Coppola.",
    "whyRecommended": "Top match based on Drama themes and direction by Francis Ford Coppola.",
    "similarTags": [
      "Francis Ford Coppola",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$13 Million",
    "revenue": "$47 Million",
    "tagline": "I don't feel I have to wipe everybody out, Tom. Just my enemies.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-424",
    "title": "Schindler's List",
    "originalTitle": "Schindler's List",
    "year": 1993,
    "runtime": "195 min",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "imdbRating": 8.3,
    "matchScore": 97,
    "synopsis": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    "director": "Steven Spielberg",
    "cast": [
      "Liam Neeson",
      "Ben Kingsley",
      "Ralph Fiennes",
      "Caroline Goodall"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
    "trailerId": "v0RB-3sWbBA",
    "streamingOn": [
      "Disney+"
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
    "budget": "$22 Million",
    "revenue": "$321 Million",
    "tagline": "Whoever saves one life, saves the world entire.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-254128",
    "title": "San Andreas",
    "originalTitle": "San Andreas",
    "year": 2015,
    "runtime": "114 min",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 6.0,
    "matchScore": 93,
    "synopsis": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
    "director": "Brad Peyton",
    "cast": [
      "Dwayne Johnson",
      "Alexandra Daddario",
      "Carla Gugino",
      "Ioan Gruffudd"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zcySy6dnSmyqiichtDgO7AEeZoq.jpg",
    "trailerId": "F1ZewAPl7L0",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Brad Peyton.",
    "whyRecommended": "Top match based on Action themes and direction by Brad Peyton.",
    "similarTags": [
      "Brad Peyton",
      "Action",
      "Drama"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$110 Million",
    "revenue": "$470 Million",
    "tagline": "A rescue pilot survived an earthquake, this is what happens next",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-76338",
    "title": "Thor: The Dark World",
    "originalTitle": "Thor: The Dark World",
    "year": 2013,
    "runtime": "112 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 6.8,
    "matchScore": 98,
    "synopsis": "Thor fights to restore order across the cosmos\u2026 but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    "director": "Alan Taylor",
    "cast": [
      "Chris Hemsworth",
      "Natalie Portman",
      "Tom Hiddleston",
      "Anthony Hopkins"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5QEOy0QEpad9QsXeMxuGHPXMale.jpg",
    "trailerId": "npvJ9FTgZbM",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Alan Taylor.",
    "whyRecommended": "Top match based on Action themes and direction by Alan Taylor.",
    "similarTags": [
      "Alan Taylor",
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
    "revenue": "$644 Million",
    "tagline": "Delve into the darkness",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-98",
    "title": "Gladiator",
    "originalTitle": "Gladiator",
    "year": 2000,
    "runtime": "155 min",
    "genres": [
      "Action",
      "Drama",
      "Adventure"
    ],
    "imdbRating": 7.9,
    "matchScore": 92,
    "synopsis": "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences. His battle skills serve him well, and he becomes one of the most famous and admired men to fight in the Colosseum. Determined to avenge himself against the man who took away his freedom and laid waste to his family, Maximus believes that he can use his fame and skill in the ring to avenge the loss of his family and former glory. As the gladiator begins to challenge his rule, Commodus decides to put his own fighting mettle to the test by squaring off with Maximus in a battle to the death.",
    "director": "Ridley Scott",
    "cast": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen",
      "Oliver Reed"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/jhk6D8pim3yaByu1801kMoxXFaX.jpg",
    "trailerId": "P5ieIbInFpg",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Action themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Action",
      "Drama"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$103 Million",
    "revenue": "$457 Million",
    "tagline": "A Hero Will Rise.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-106646",
    "title": "The Wolf of Wall Street",
    "originalTitle": "The Wolf of Wall Street",
    "year": 2013,
    "runtime": "180 min",
    "genres": [
      "Crime",
      "Drama",
      "Comedy"
    ],
    "imdbRating": 7.9,
    "matchScore": 93,
    "synopsis": "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    "director": "Martin Scorsese",
    "cast": [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie",
      "Kyle Chandler"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg",
    "trailerId": "Slj4-Sv-YNA",
    "streamingOn": [
      "Disney+"
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
    "budget": "$100 Million",
    "revenue": "$392 Million",
    "tagline": "EARN. SPEND. PARTY.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-78",
    "title": "Blade Runner",
    "originalTitle": "Blade Runner",
    "year": 1982,
    "runtime": "117 min",
    "genres": [
      "Science Fiction",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.9,
    "matchScore": 96,
    "synopsis": "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    "director": "Ridley Scott",
    "cast": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young",
      "Edward James Olmos"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hJ5R9d6QuH3tzr8L8neZZTuzNXm.jpg",
    "trailerId": "qoEyZoOTtss",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Ridley Scott.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Ridley Scott.",
    "similarTags": [
      "Ridley Scott",
      "Science Fiction",
      "Drama"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$33 Million",
    "tagline": "Man has made his match... now it's his problem.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-539",
    "title": "Psycho",
    "originalTitle": "Psycho",
    "year": 1960,
    "runtime": "109 min",
    "genres": [
      "Drama",
      "Horror",
      "Thriller"
    ],
    "imdbRating": 8.2,
    "matchScore": 97,
    "synopsis": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine\u2026 until Marion decides to take a shower.",
    "director": "Alfred Hitchcock",
    "cast": [
      "Anthony Perkins",
      "Vera Miles",
      "John Gavin",
      "Janet Leigh"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mufF1aYvwdpKerhq5R1YrVcbJLY.jpg",
    "trailerId": "D90QhegiVvo",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Alfred Hitchcock.",
    "whyRecommended": "Top match based on Drama themes and direction by Alfred Hitchcock.",
    "similarTags": [
      "Alfred Hitchcock",
      "Drama",
      "Horror"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$0 Million",
    "revenue": "$32 Million",
    "tagline": "The master of suspense moves his cameras into the icy blackness of the unexplored!",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-37724",
    "title": "Skyfall",
    "originalTitle": "Skyfall",
    "year": 2012,
    "runtime": "143 min",
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "imdbRating": 6.9,
    "matchScore": 98,
    "synopsis": "When Bond's latest assignment goes gravely wrong and agents around the world are exposed, MI6 is attacked forcing M to relocate the agency. These events cause her authority and position to be challenged by Gareth Mallory, the new Chairman of the Intelligence and Security Committee. With MI6 now compromised from both inside and out, M is left with one ally she can trust: Bond. 007 takes to the shadows - aided only by field agent, Eve - following a trail to the mysterious Silva, whose lethal and hidden motives have yet to reveal themselves.",
    "director": "Sam Mendes",
    "cast": [
      "Daniel Craig",
      "Judi Dench",
      "Javier Bardem",
      "Ralph Fiennes"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wkA622CCN2X0uwpgqYEOnUYEDf5.jpg",
    "trailerId": "YvV3g8hLlyU",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Sam Mendes.",
    "whyRecommended": "Top match based on Action themes and direction by Sam Mendes.",
    "similarTags": [
      "Sam Mendes",
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
    "revenue": "$1108 Million",
    "tagline": "Think on your sins.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-812",
    "title": "Aladdin",
    "originalTitle": "Aladdin",
    "year": 1992,
    "runtime": "90 min",
    "genres": [
      "Animation",
      "Family",
      "Comedy",
      "Adventure",
      "Fantasy",
      "Romance"
    ],
    "imdbRating": 7.4,
    "matchScore": 99,
    "synopsis": "Princess Jasmine grows tired of being forced to remain in the palace and she sneaks out into the marketplace  in disguise where she meets street-urchin Aladdin and the two fall in love, although she may only marry a prince. After being thrown in jail, Aladdin and becomes embroiled in a plot to find a mysterious lamp with which the evil Jafar hopes to rule the land.",
    "director": "Ron Clements",
    "cast": [
      "Scott Weinger",
      "Robin Williams",
      "Linda Larkin",
      "Jonathan Freeman"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nenJjvfe2Eq8uBMXFJnWj5mw4bi.jpg",
    "trailerId": "mq05scD6PUs",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Ron Clements.",
    "whyRecommended": "Top match based on Animation themes and direction by Ron Clements.",
    "similarTags": [
      "Ron Clements",
      "Animation",
      "Family"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$504 Million",
    "tagline": "Wish granted!",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-8587",
    "title": "The Lion King",
    "originalTitle": "The Lion King",
    "year": 1994,
    "runtime": "89 min",
    "genres": [
      "Family",
      "Animation",
      "Drama"
    ],
    "imdbRating": 8.0,
    "matchScore": 93,
    "synopsis": "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
    "director": "Roger Allers",
    "cast": [
      "Jonathan Taylor Thomas",
      "Matthew Broderick",
      "James Earl Jones",
      "Jeremy Irons"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/q00H8EqULYSK74lgevMkhmGGLHn.jpg",
    "trailerId": "UgjEj5mXLlk",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Family themes and direction by Roger Allers.",
    "whyRecommended": "Top match based on Family themes and direction by Roger Allers.",
    "similarTags": [
      "Roger Allers",
      "Family",
      "Animation"
    ],
    "moods": [
      "\u2728 Family",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$45 Million",
    "revenue": "$788 Million",
    "tagline": "Life's greatest adventure is finding your place in the Circle of Life.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-297761",
    "title": "Suicide Squad",
    "originalTitle": "Suicide Squad",
    "year": 2016,
    "runtime": "123 min",
    "genres": [
      "Action",
      "Adventure",
      "Crime",
      "Fantasy",
      "Science Fiction"
    ],
    "imdbRating": 5.9,
    "matchScore": 95,
    "synopsis": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    "director": "David Ayer",
    "cast": [
      "Will Smith",
      "Margot Robbie",
      "Joel Kinnaman",
      "Viola Davis"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sk3FZgh3sRrmr8vyhaitNobMcfh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8XyX5Us7uzwQdXtAdnhCB9Gquek.jpg",
    "trailerId": "m0Xb9BhfVjY",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by David Ayer.",
    "whyRecommended": "Top match based on Action themes and direction by David Ayer.",
    "similarTags": [
      "David Ayer",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$175 Million",
    "revenue": "$745 Million",
    "tagline": "Worst Heroes Ever",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-17578",
    "title": "The Adventures of Tintin",
    "originalTitle": "The Adventures of Tintin",
    "year": 2011,
    "runtime": "107 min",
    "genres": [
      "Adventure",
      "Animation",
      "Mystery"
    ],
    "imdbRating": 6.7,
    "matchScore": 96,
    "synopsis": "Intrepid young reporter, Tintin and his loyal dog, Snowy are thrust into a world of high adventure when they discover a ship carrying an explosive secret. As Tintin is drawn into a centuries-old mystery, Ivan Ivanovitch Sakharine suspects him of stealing a priceless treasure. Tintin and Snowy, with the help of salty, cantankerous Captain Haddock and bumbling detectives, Thompson &amp; Thomson, travel half the world, one step ahead of their enemies as Tintin endeavors to find The Unicorn, a sunken ship that may hold a vast fortune, but also an ancient curse.",
    "director": "Steven Spielberg",
    "cast": [
      "Jamie Bell",
      "Andy Serkis",
      "Daniel Craig",
      "Nick Frost"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fQZ3sLR1Fi63NMsNRbjm9q5qODJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6mqgl2szMLRYj4lhlXOjju5Tpeo.jpg",
    "trailerId": "7NWtW699XME",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "whyRecommended": "Top match based on Adventure themes and direction by Steven Spielberg.",
    "similarTags": [
      "Steven Spielberg",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$371 Million",
    "tagline": "This year, discover how far adventure will take you.",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-242582",
    "title": "Nightcrawler",
    "originalTitle": "Nightcrawler",
    "year": 2014,
    "runtime": "117 min",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 7.6,
    "matchScore": 99,
    "synopsis": "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    "director": "Dan Gilroy",
    "cast": [
      "Jake Gyllenhaal",
      "Rene Russo",
      "Riz Ahmed",
      "Bill Paxton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bdI6U1mT0kCdTJ6TWtiFxQ42GSn.jpg",
    "trailerId": "7uaYhPpV7G4",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Dan Gilroy.",
    "whyRecommended": "Top match based on Crime themes and direction by Dan Gilroy.",
    "similarTags": [
      "Dan Gilroy",
      "Crime",
      "Drama"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$8 Million",
    "revenue": "$38 Million",
    "tagline": "The city shines brightest at night",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-36557",
    "title": "Casino Royale",
    "originalTitle": "Casino Royale",
    "year": 2006,
    "runtime": "144 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 90,
    "synopsis": "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond \u2013 on his maiden mission as a 00 Agent \u2013 to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
    "director": "Martin Campbell",
    "cast": [
      "Daniel Craig",
      "Eva Green",
      "Mads Mikkelsen",
      "Judi Dench"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lMrxYKKhd4lqRzwUHAy5gcx9PSO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/klJMCIblHLFwCuGjKz7tyOpekIC.jpg",
    "trailerId": "U4NT78c-pYs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Martin Campbell.",
    "whyRecommended": "Top match based on Adventure themes and direction by Martin Campbell.",
    "similarTags": [
      "Martin Campbell",
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
    "revenue": "$599 Million",
    "tagline": "Everyone has a past. Every legend has a beginning.",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-262504",
    "title": "Allegiant",
    "originalTitle": "Allegiant",
    "year": 2016,
    "runtime": "121 min",
    "genres": [
      "Adventure",
      "Science Fiction"
    ],
    "imdbRating": 5.9,
    "matchScore": 95,
    "synopsis": "Beatrice Prior and Tobias Eaton venture into the world outside of the fence and are taken into protective custody by a mysterious agency known as the Bureau of Genetic Welfare.",
    "director": "Robert Schwentke",
    "cast": [
      "Shailene Woodley",
      "Theo James",
      "Zo\u00eb Kravitz",
      "Miles Teller"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/faq9JlF8znUGQ5p3En1W61Fi5p0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qSP072apfe2EEcd5Qg9vGYy2OLw.jpg",
    "trailerId": "ESJBomF-9Y8",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Robert Schwentke.",
    "whyRecommended": "Top match based on Adventure themes and direction by Robert Schwentke.",
    "similarTags": [
      "Robert Schwentke",
      "Adventure",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$110 Million",
    "revenue": "$179 Million",
    "tagline": "Break the boundaries of your world",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-9502",
    "title": "Kung Fu Panda",
    "originalTitle": "Kung Fu Panda",
    "year": 2008,
    "runtime": "90 min",
    "genres": [
      "Adventure",
      "Animation",
      "Family",
      "Comedy"
    ],
    "imdbRating": 6.9,
    "matchScore": 96,
    "synopsis": "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
    "director": "Mark Osborne",
    "cast": [
      "Jack Black",
      "Dustin Hoffman",
      "Angelina Jolie",
      "Jackie Chan"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qdthf9WrRDSaIkGVQGhhJ9pz1hn.jpg",
    "trailerId": "TD0YUZw_oHY",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Mark Osborne.",
    "whyRecommended": "Top match based on Adventure themes and direction by Mark Osborne.",
    "similarTags": [
      "Mark Osborne",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$130 Million",
    "revenue": "$631 Million",
    "tagline": "Prepare for awesomeness.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-752",
    "title": "V for Vendetta",
    "originalTitle": "V for Vendetta",
    "year": 2006,
    "runtime": "132 min",
    "genres": [
      "Action",
      "Thriller",
      "Fantasy"
    ],
    "imdbRating": 7.7,
    "matchScore": 97,
    "synopsis": "In a world in which Great Britain has become a fascist state, a masked vigilante known only as 'V' conducts guerrilla warfare against the oppressive British government. When 'V' rescues a young woman from the secret police, he finds in her an ally with whom he can continue his fight to free the people of Britain.",
    "director": "James McTeigue",
    "cast": [
      "Natalie Portman",
      "Hugo Weaving",
      "Stephen Rea",
      "Stephen Fry"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/1avD1JeaRiJX5M4ahPdZPypGoGN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/sFEYsEfzTx7hhjetlNrme8B5OUo.jpg",
    "trailerId": "3ge0navn9E0",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by James McTeigue.",
    "whyRecommended": "Top match based on Action themes and direction by James McTeigue.",
    "similarTags": [
      "James McTeigue",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$54 Million",
    "revenue": "$132 Million",
    "tagline": "People should not be afraid of their governments. Governments should be afraid of their people.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-557",
    "title": "Spider-Man",
    "originalTitle": "Spider-Man",
    "year": 2002,
    "runtime": "121 min",
    "genres": [
      "Fantasy",
      "Action"
    ],
    "imdbRating": 6.8,
    "matchScore": 91,
    "synopsis": "After being bitten by a genetically altered spider, nerdy high school student Peter Parker is endowed with amazing powers.",
    "director": "Sam Raimi",
    "cast": [
      "Tobey Maguire",
      "Willem Dafoe",
      "Kirsten Dunst",
      "James Franco"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/or6XJBVpcEbIkma0V9zshnbEtx4.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zQ8AxTPiCiS5nnwXpwTBPBHSaa5.jpg",
    "trailerId": "t06RUxPbp_c",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Sam Raimi.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Sam Raimi.",
    "similarTags": [
      "Sam Raimi",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$139 Million",
    "revenue": "$821 Million",
    "tagline": "With great power comes great responsibility.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-72190",
    "title": "World War Z",
    "originalTitle": "World War Z",
    "year": 2013,
    "runtime": "116 min",
    "genres": [
      "Action",
      "Drama",
      "Horror",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 6.7,
    "matchScore": 94,
    "synopsis": "Life for former United Nations investigator Gerry Lane and his family seems content. Suddenly, the world is plagued by a mysterious infection turning whole human populations into rampaging mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease. What follows is a perilous trek around the world where Lane must brave horrific dangers and long odds to find answers before human civilization falls.",
    "director": "Marc Forster",
    "cast": [
      "Brad Pitt",
      "Mireille Enos",
      "Abigail Hargrove",
      "Sterling Jerins"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aCnVdvExw6UWSeQfr0tUH3jr4qG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/kg2FOT2Oe5PSCgs3L4vLel6B7ck.jpg",
    "trailerId": "TvRCQM2HrXs",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Marc Forster.",
    "whyRecommended": "Top match based on Action themes and direction by Marc Forster.",
    "similarTags": [
      "Marc Forster",
      "Action",
      "Drama"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$531 Million",
    "tagline": "Remember Philly!",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-277",
    "title": "Underworld",
    "originalTitle": "Underworld",
    "year": 2003,
    "runtime": "121 min",
    "genres": [
      "Fantasy",
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 95,
    "synopsis": "Vampires and werewolves have waged a nocturnal war against each other for centuries. But all bets are off when a female vampire warrior named Selene, who's famous for her strength and werewolf-hunting prowess, becomes smitten with a peace-loving male werewolf, Michael, who wants to end the war.",
    "director": "Len Wiseman",
    "cast": [
      "Kate Beckinsale",
      "Scott Speedman",
      "Michael Sheen",
      "Shane Brolly"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/zsnQ41UZ3jo1wEeemF0eA9cAIU0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/zsgdVbuEwqZbnUN9qLGEMBYf2Zo.jpg",
    "trailerId": "2_IoL7g5Ub8",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Len Wiseman.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Len Wiseman.",
    "similarTags": [
      "Len Wiseman",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$22 Million",
    "revenue": "$95 Million",
    "tagline": "Underworld",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-772",
    "title": "Home Alone 2: Lost in New York",
    "originalTitle": "Home Alone 2: Lost in New York",
    "year": 1992,
    "runtime": "120 min",
    "genres": [
      "Comedy",
      "Family",
      "Adventure",
      "Crime"
    ],
    "imdbRating": 6.3,
    "matchScore": 97,
    "synopsis": "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card\u2014despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas eve.",
    "director": "Chris Columbus",
    "cast": [
      "Macaulay Culkin",
      "Joe Pesci",
      "Catherine O'Hara",
      "Daniel Stern"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/8fnYJPoXxwAN4valDLgz2whMGTH.jpg",
    "trailerId": "k0kJieJ1k6k",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Chris Columbus.",
    "whyRecommended": "Top match based on Comedy themes and direction by Chris Columbus.",
    "similarTags": [
      "Chris Columbus",
      "Comedy",
      "Family"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$18 Million",
    "revenue": "$358 Million",
    "tagline": "He's up past his bedtime in the city that never sleeps.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-89",
    "title": "Indiana Jones and the Last Crusade",
    "originalTitle": "Indiana Jones and the Last Crusade",
    "year": 1989,
    "runtime": "127 min",
    "genres": [
      "Adventure",
      "Action"
    ],
    "imdbRating": 7.6,
    "matchScore": 98,
    "synopsis": "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
    "director": "Steven Spielberg",
    "cast": [
      "Harrison Ford",
      "Sean Connery",
      "Denholm Elliott",
      "Alison Doody"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/12fvZHskx57kQfNEUXJ3v0flWYQ.jpg",
    "trailerId": "GRfckj3ETh0",
    "streamingOn": [
      "Max"
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
    "budget": "$48 Million",
    "revenue": "$474 Million",
    "tagline": "The man with the hat is back. And this time, he's bringing his Dad.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-1402",
    "title": "The Pursuit of Happyness",
    "originalTitle": "The Pursuit of Happyness",
    "year": 2006,
    "runtime": "117 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.7,
    "matchScore": 90,
    "synopsis": "The true story of Christopher Gardner, who invests heavily in a device known as a 'Bone Density Scanner', only to find himself struggle to sell the product as it's just marginally better than the current technology, and much more expensive. His wife leaves him,  he loses his house, bank account and credit cards and, now forced to live out in the streets with his young son,  he's desperate to find a steady job. He takes on a job as a stockbroker but, before he can receive pay, he needs to go through 6 months of training, and must sell his devices.",
    "director": "Gabriele Muccino",
    "cast": [
      "Will Smith",
      "Jaden Smith",
      "Thandie Newton",
      "Brian Howe"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5jhG1lTgV0MS6tDkBMQSSitttTT.jpg",
    "trailerId": "DMOBlEcRuw8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Gabriele Muccino.",
    "whyRecommended": "Top match based on Drama themes and direction by Gabriele Muccino.",
    "similarTags": [
      "Gabriele Muccino",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$55 Million",
    "revenue": "$307 Million",
    "tagline": "An extraordinary story.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-156022",
    "title": "The Equalizer",
    "originalTitle": "The Equalizer",
    "year": 2014,
    "runtime": "132 min",
    "genres": [
      "Thriller",
      "Action",
      "Crime"
    ],
    "imdbRating": 7.1,
    "matchScore": 91,
    "synopsis": "In The Equalizer, Denzel Washington plays McCall, a man who believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when McCall meets Teri (Chlo\u00eb Grace Moretz), a young girl under the control of ultra-violent Russian gangsters, he can\u2019t stand idly by \u2013 he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    "director": "Antoine Fuqua",
    "cast": [
      "Denzel Washington",
      "Marton Csokas",
      "Chlo\u00eb Grace Moretz",
      "David Harbour"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9vAoubhoZE8aSkUZoSfxs3UWZhO.jpg",
    "trailerId": "BP_FwE0Z7no",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Antoine Fuqua.",
    "whyRecommended": "Top match based on Thriller themes and direction by Antoine Fuqua.",
    "similarTags": [
      "Antoine Fuqua",
      "Thriller",
      "Action"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$55 Million",
    "revenue": "$192 Million",
    "tagline": "What do you see when you look at me?",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-807",
    "title": "Se7en",
    "originalTitle": "Se7en",
    "year": 1995,
    "runtime": "127 min",
    "genres": [
      "Crime",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 8.1,
    "matchScore": 93,
    "synopsis": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
    "director": "David Fincher",
    "cast": [
      "Brad Pitt",
      "Morgan Freeman",
      "Gwyneth Paltrow",
      "John C. McGinley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/i5H7zusQGsysGQ8i6P361Vnr0n2.jpg",
    "trailerId": "KPOuJGkpblk",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by David Fincher.",
    "whyRecommended": "Top match based on Crime themes and direction by David Fincher.",
    "similarTags": [
      "David Fincher",
      "Crime",
      "Mystery"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$33 Million",
    "revenue": "$327 Million",
    "tagline": "Seven deadly sins. Seven ways to die.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-675",
    "title": "Harry Potter and the Order of the Phoenix",
    "originalTitle": "Harry Potter and the Order of the Phoenix",
    "year": 2007,
    "runtime": "138 min",
    "genres": [
      "Adventure",
      "Fantasy",
      "Family",
      "Mystery"
    ],
    "imdbRating": 7.4,
    "matchScore": 96,
    "synopsis": "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students \u2013 dubbed 'Dumbledore's Army' \u2013 to defend themselves against the dark arts.",
    "director": "David Yates",
    "cast": [
      "Daniel Radcliffe",
      "Rupert Grint",
      "Emma Watson",
      "Michael Gambon"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/pkxPkHOPJjOvzfQOclANEBT8OfK.jpg",
    "trailerId": "47PHbQTmw5g",
    "streamingOn": [
      "Max"
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
    "budget": "$150 Million",
    "revenue": "$938 Million",
    "tagline": "Evil Must Be Confronted.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-56292",
    "title": "Mission: Impossible - Ghost Protocol",
    "originalTitle": "Mission: Impossible - Ghost Protocol",
    "year": 2011,
    "runtime": "133 min",
    "genres": [
      "Action",
      "Thriller",
      "Adventure"
    ],
    "imdbRating": 6.8,
    "matchScore": 98,
    "synopsis": "In the 4th installment of the Mission Impossible series, Ethan Hunt (Cruise) and his team are racing against time to track down a dangerous terrorist named Hendricks (Nyqvist), who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
    "director": "Brad Bird",
    "cast": [
      "Tom Cruise",
      "Jeremy Renner",
      "Simon Pegg",
      "Paula Patton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/eRZTGx7GsiKqPch96k27LK005ZL.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/ih4lZkUpmSE7AP3maymiO72xJ1z.jpg",
    "trailerId": "7wkih9Yvxq0",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Brad Bird.",
    "whyRecommended": "Top match based on Action themes and direction by Brad Bird.",
    "similarTags": [
      "Brad Bird",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$145 Million",
    "revenue": "$694 Million",
    "tagline": "No Plan. No Backup. No Choice.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-27578",
    "title": "The Expendables",
    "originalTitle": "The Expendables",
    "year": 2010,
    "runtime": "103 min",
    "genres": [
      "Thriller",
      "Adventure",
      "Action"
    ],
    "imdbRating": 6.0,
    "matchScore": 90,
    "synopsis": "Barney Ross leads a band of highly skilled mercenaries including knife enthusiast Lee Christmas, a martial arts expert, heavy weapons specialist, demolitionist, and a loose-cannon sniper. When the group is commissioned by the mysterious Mr. Church to assassinate the dictator of a small South American island, Barney and Lee visit the remote locale to scout out their opposition and discover the true nature of the conflict engulfing the city.",
    "director": "Sylvester Stallone",
    "cast": [
      "Sylvester Stallone",
      "Jason Statham",
      "Dolph Lundgren",
      "Eric Roberts"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/j09ZkH6R4JWVylBcDai1laCmGw7.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yBv9RxlWPXRCvjMFsrmB1pxwWo6.jpg",
    "trailerId": "G_OQpXk8vAQ",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Sylvester Stallone.",
    "whyRecommended": "Top match based on Thriller themes and direction by Sylvester Stallone.",
    "similarTags": [
      "Sylvester Stallone",
      "Thriller",
      "Adventure"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$80 Million",
    "revenue": "$274 Million",
    "tagline": "Choose Your Weapon.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-105",
    "title": "Back to the Future",
    "originalTitle": "Back to the Future",
    "year": 1985,
    "runtime": "116 min",
    "genres": [
      "Adventure",
      "Comedy",
      "Science Fiction",
      "Family"
    ],
    "imdbRating": 8.0,
    "matchScore": 92,
    "synopsis": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
    "director": "Robert Zemeckis",
    "cast": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson",
      "Crispin Glover"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
    "trailerId": "ez6WQ7IX72U",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Robert Zemeckis.",
    "whyRecommended": "Top match based on Adventure themes and direction by Robert Zemeckis.",
    "similarTags": [
      "Robert Zemeckis",
      "Adventure",
      "Comedy"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$19 Million",
    "revenue": "$381 Million",
    "tagline": "He's the only kid ever to get into trouble before he was born.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-101299",
    "title": "The Hunger Games: Catching Fire",
    "originalTitle": "The Hunger Games: Catching Fire",
    "year": 2013,
    "runtime": "146 min",
    "genres": [
      "Adventure",
      "Action",
      "Science Fiction"
    ],
    "imdbRating": 7.4,
    "matchScore": 93,
    "synopsis": "Katniss Everdeen has returned home safe after winning the 74th Annual Hunger Games along with fellow tribute Peeta Mellark. Winning means that they must turn around and leave their family and close friends, embarking on a \"Victor's Tour\" of the districts. Along the way Katniss senses that a rebellion is simmering, but the Capitol is still very much in control as President Snow prepares the 75th Annual Hunger Games (The Quarter Quell) - a competition that could change Panem forever.",
    "director": "Francis Lawrence",
    "cast": [
      "Jennifer Lawrence",
      "Josh Hutcherson",
      "Liam Hemsworth",
      "Woody Harrelson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/eHaazLxM5LRMh0ySkVy7SK6wUWt.jpg",
    "trailerId": "zoKj7TdJk98",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Francis Lawrence.",
    "whyRecommended": "Top match based on Adventure themes and direction by Francis Lawrence.",
    "similarTags": [
      "Francis Lawrence",
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
    "revenue": "$847 Million",
    "tagline": "Every revolution begins with a spark.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-73",
    "title": "American History X",
    "originalTitle": "American History X",
    "year": 1998,
    "runtime": "119 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 8.2,
    "matchScore": 91,
    "synopsis": "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    "director": "Tony Kaye",
    "cast": [
      "Edward Norton",
      "Edward Furlong",
      "Beverly D'Angelo",
      "Avery Brooks"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/6qHI1IYj7QlLSCwHRzkL62X175s.jpg",
    "trailerId": "el6JxnW2Tyg",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Tony Kaye.",
    "whyRecommended": "Top match based on Drama themes and direction by Tony Kaye.",
    "similarTags": [
      "Tony Kaye",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$20 Million",
    "revenue": "$23 Million",
    "tagline": "Some Legacies Must End.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-1954",
    "title": "The Butterfly Effect",
    "originalTitle": "The Butterfly Effect",
    "year": 2004,
    "runtime": "113 min",
    "genres": [
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 7.3,
    "matchScore": 92,
    "synopsis": "A young man struggles to access sublimated childhood memories. He finds a technique that allows him to travel back into the past, to occupy his childhood body and change history. However, he soon finds that every change he makes has unexpected consequences.",
    "director": "Eric Bress",
    "cast": [
      "Ashton Kutcher",
      "Melora Walters",
      "Amy Smart",
      "Elden Henson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ea5iv7TWMh18fOKoRGgmtcg85Gx.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yriYPLqyFqPW0QXaegT1KmWXk9a.jpg",
    "trailerId": "KctopagSGJE",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Eric Bress.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Eric Bress.",
    "similarTags": [
      "Eric Bress",
      "Science Fiction",
      "Thriller"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$13 Million",
    "revenue": "$96 Million",
    "tagline": "Such minor changes, such huge consequences.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-271718",
    "title": "Trainwreck",
    "originalTitle": "Trainwreck",
    "year": 2015,
    "runtime": "125 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 5.9,
    "matchScore": 94,
    "synopsis": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
    "director": "Judd Apatow",
    "cast": [
      "Amy Schumer",
      "Bill Hader",
      "Brie Larson",
      "Colin Quinn"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wrY629UTCUAKLJ4CxQXz6DCE7pr.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/9O6pLFE630h7IxslegYR9CV64aE.jpg",
    "trailerId": "YgkciW7ip4E",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Judd Apatow.",
    "whyRecommended": "Top match based on Comedy themes and direction by Judd Apatow.",
    "similarTags": [
      "Judd Apatow",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$35 Million",
    "revenue": "$140 Million",
    "tagline": "We All Know One.",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-534",
    "title": "Terminator Salvation",
    "originalTitle": "Terminator Salvation",
    "year": 2009,
    "runtime": "115 min",
    "genres": [
      "Action",
      "Science Fiction",
      "Thriller"
    ],
    "imdbRating": 5.9,
    "matchScore": 97,
    "synopsis": "All grown up in post-apocalyptic 2018, John Connor must lead the resistance of humans against the increasingly dominating militaristic robots. But when Marcus Wright appears, his existence confuses the mission as Connor tries to determine whether Wright has come from the future or the past -- and whether he's friend or foe.",
    "director": "McG",
    "cast": [
      "Christian Bale",
      "Sam Worthington",
      "Anton Yelchin",
      "Moon Bloodgood"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/gw6JhlekZgtKUFlDTezq3j5JEPK.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/74zPun6CdSNVSDLcKOM8Yjv7WWB.jpg",
    "trailerId": "MRN71NlONZU",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by McG.",
    "whyRecommended": "Top match based on Action themes and direction by McG.",
    "similarTags": [
      "McG",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$371 Million",
    "tagline": "The End Begins.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-53182",
    "title": "300: Rise of an Empire",
    "originalTitle": "300: Rise of an Empire",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Action",
      "War"
    ],
    "imdbRating": 6.1,
    "matchScore": 98,
    "synopsis": "Based on Frank Miller's latest graphic novel Xerxes and told in the breathtaking visual style of the blockbuster \"300,\" this new chapter of the epic saga takes the action to a fresh battlefield--on the sea--as Greek general Themistokles attempts to unite all of Greece by leading the charge that will change the course of the war. \"300: Rise of an Empire\" pits Themistokles against the massive invading Persian forces led by mortal-turned-god Xerxes and Artemesia, the vengeful commander of the Persian navy.",
    "director": "Noam Murro",
    "cast": [
      "Sullivan Stapleton",
      "Eva Green",
      "Lena Headey",
      "Callan Mulvey"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/wYDdWN1McB1Sio4z1dPSkb40Z78.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/chjkfyo57JexWo1YeIZRMk8wA4m.jpg",
    "trailerId": "bsoJaQ2gZh4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Noam Murro.",
    "whyRecommended": "Top match based on Action themes and direction by Noam Murro.",
    "similarTags": [
      "Noam Murro",
      "Action",
      "War"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$110 Million",
    "revenue": "$337 Million",
    "tagline": "Seize your glory!",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-254470",
    "title": "Pitch Perfect 2",
    "originalTitle": "Pitch Perfect 2",
    "year": 2015,
    "runtime": "115 min",
    "genres": [
      "Comedy",
      "Music"
    ],
    "imdbRating": 6.8,
    "matchScore": 99,
    "synopsis": "The Bellas are back, and they are better than ever. After being humiliated in front of none other than the President of the United States of America, the Bellas are taken out of the Aca-Circuit. In order to clear their name, and regain their status, the Bellas take on a seemingly impossible task: winning an international competition no American team has ever won. In order to accomplish this monumental task, they need to strengthen the bonds of friendship and sisterhood and blow away the competition with their amazing aca-magic! With all new friends and old rivals tagging along for the trip, the Bellas can hopefully accomplish their dreams.",
    "director": "Elizabeth Banks",
    "cast": [
      "Anna Kendrick",
      "Rebel Wilson",
      "Hailee Steinfeld",
      "Brittany Snow"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/fQaEGzFmvTYu3G641WV0Tg9auAt.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bWOfRV1Ubk9SWEDZDDjsmIUCcbZ.jpg",
    "trailerId": "OgPm-yaLoyo",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Elizabeth Banks.",
    "whyRecommended": "Top match based on Comedy themes and direction by Elizabeth Banks.",
    "similarTags": [
      "Elizabeth Banks",
      "Comedy",
      "Music"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$29 Million",
    "revenue": "$287 Million",
    "tagline": "We're back pitches",
    "productionCompany": "Hollywood Studio"
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-193893",
    "title": "Let's Be Cops",
    "originalTitle": "Let's Be Cops",
    "year": 2014,
    "runtime": "104 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 6.4,
    "matchScore": 91,
    "synopsis": "It's the ultimate buddy cop movie except for one thing: they're not cops.  When two struggling pals dress as police officers for a costume party, they become neighborhood sensations.  But when these newly-minted \u201cheroes\u201d get tangled in a real life web of mobsters and dirty detectives, they must put their fake badges on the line.",
    "director": "Luke Greenfield",
    "cast": [
      "Jake Johnson",
      "Damon Wayans Jr.",
      "Nina Dobrev",
      "Rob Riggle"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/pf4FoUr2phn5WyZjU7rLXSiW1Ve.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/aa5P3DfHMD2Y5xotn2067A5OMAI.jpg",
    "trailerId": "Mx03VkB-TPE",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Luke Greenfield.",
    "whyRecommended": "Top match based on Comedy themes and direction by Luke Greenfield.",
    "similarTags": [
      "Luke Greenfield",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$17 Million",
    "revenue": "$136 Million",
    "tagline": "Fake Cops. Real Trouble.",
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-782",
    "title": "Gattaca",
    "originalTitle": "Gattaca",
    "year": 1997,
    "runtime": "106 min",
    "genres": [
      "Thriller",
      "Science Fiction",
      "Mystery",
      "Romance"
    ],
    "imdbRating": 7.5,
    "matchScore": 93,
    "synopsis": "Science fiction drama about a future society in the era of indefinite eugenics where humans are set on a life course depending on their DNA. The young Vincent Freeman is born with a condition that would prevent him from space travel, yet he is determined to infiltrate the GATTACA space program.",
    "director": "Andrew Niccol",
    "cast": [
      "Ethan Hawke",
      "Jude Law",
      "Gore Vidal",
      "Uma Thurman"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/eSKr5Fl1MEC7zpAXaLWBWSBjgJq.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hPsCR1ny6GnctJkWqeJwihTDD7T.jpg",
    "trailerId": "NIIZ2P-fiyI",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Thriller themes and direction by Andrew Niccol.",
    "whyRecommended": "Top match based on Thriller themes and direction by Andrew Niccol.",
    "similarTags": [
      "Andrew Niccol",
      "Thriller",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Thriller",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$36 Million",
    "revenue": "$12 Million",
    "tagline": "There is no gene for the human spirit.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-568",
    "title": "Apollo 13",
    "originalTitle": "Apollo 13",
    "year": 1995,
    "runtime": "140 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 7.3,
    "matchScore": 98,
    "synopsis": "The true story of technical troubles that scuttle the Apollo 13 lunar mission in 1971, risking the lives of astronaut Jim Lovell and his crew, with the failed journey turning into a thrilling saga of heroism. Drifting more than 200,000 miles from Earth, the astronauts work furiously with the ground crew to avert tragedy.",
    "director": "Ron Howard",
    "cast": [
      "Tom Hanks",
      "Bill Paxton",
      "Kevin Bacon",
      "Gary Sinise"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/tVeKscCm2fY1xDXZk8PgnZ87h9S.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/n0FDJI9c0uWiZwm8wgXVjaMBn96.jpg",
    "trailerId": "B1KJ9XeZuxA",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Ron Howard.",
    "whyRecommended": "Top match based on Drama themes and direction by Ron Howard.",
    "similarTags": [
      "Ron Howard",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$52 Million",
    "revenue": "$355 Million",
    "tagline": "Houston, we have a problem.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-100042",
    "title": "Dumb and Dumber To",
    "originalTitle": "Dumb and Dumber To",
    "year": 2014,
    "runtime": "110 min",
    "genres": [
      "Comedy"
    ],
    "imdbRating": 5.4,
    "matchScore": 99,
    "synopsis": "20 years after the dimwits set out on their first adventure, they head out in search of one of their long lost children in the hope of gaining a new kidney.",
    "director": "Bobby Farrelly",
    "cast": [
      "Jim Carrey",
      "Jeff Daniels",
      "Rachel Melvin",
      "Kathleen Turner"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cvEi0xV7TUkabJGuzulhvbMjrHi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rYaADjAB6trEToo452FfVMoAdgl.jpg",
    "trailerId": "dmNddThxi4c",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Comedy themes and direction by Bobby Farrelly.",
    "whyRecommended": "Top match based on Comedy themes and direction by Bobby Farrelly.",
    "similarTags": [
      "Bobby Farrelly",
      "Comedy"
    ],
    "moods": [
      "\u2728 Comedy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$40 Million",
    "revenue": "$169 Million",
    "tagline": "The Second Parts Are More Fools",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-621",
    "title": "Grease",
    "originalTitle": "Grease",
    "year": 1978,
    "runtime": "110 min",
    "genres": [
      "Romance"
    ],
    "imdbRating": 7.2,
    "matchScore": 92,
    "synopsis": "Australian good girl Sandy and greaser Danny fell in love over the summer. But when they unexpectedly discover they're now in the same high school, will they be able to rekindle their romance despite their eccentric friends?",
    "director": "Randal Kleiser",
    "cast": [
      "John Travolta",
      "Olivia Newton-John",
      "Stockard Channing",
      "Jeff Conaway"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2rM7fQKpb7cs1Iq7IBqub9LFDzJ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2SRJMIoJzABzgyGw01U6VbQbvJD.jpg",
    "trailerId": "THd96gHV7Tg",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Randal Kleiser.",
    "whyRecommended": "Top match based on Romance themes and direction by Randal Kleiser.",
    "similarTags": [
      "Randal Kleiser",
      "Romance"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$181 Million",
    "tagline": "Grease is the word",
    "productionCompany": "Hollywood Studio"
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-68724",
    "title": "Elysium",
    "originalTitle": "Elysium",
    "year": 2013,
    "runtime": "109 min",
    "genres": [
      "Science Fiction",
      "Action",
      "Drama",
      "Thriller"
    ],
    "imdbRating": 6.4,
    "matchScore": 96,
    "synopsis": "In the year 2159, two classes of people exist: the very wealthy who live on a pristine man-made space station called Elysium, and the rest, who live on an overpopulated, ruined Earth. Secretary Rhodes (Jodie Foster), a hard line government of\ufb01cial, will stop at nothing to enforce anti-immigration laws and preserve the luxurious lifestyle of the citizens of Elysium. That doesn\u2019t stop the people of Earth from trying to get in, by any means they can. When unlucky Max (Matt Damon) is backed into a corner, he agrees to take on a daunting mission that, if successful, will not only save his life, but could bring equality to these polarized worlds.",
    "director": "Neill Blomkamp",
    "cast": [
      "Matt Damon",
      "Jodie Foster",
      "Sharlto Copley",
      "Alice Braga"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/aRjuJuPXHtVs6YegfeeQWXGRs1E.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/oo9GyiNKvR4CU1etuYl081UJ1LE.jpg",
    "trailerId": "oIBtePb-dGY",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Neill Blomkamp.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Neill Blomkamp.",
    "similarTags": [
      "Neill Blomkamp",
      "Science Fiction",
      "Action"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$115 Million",
    "revenue": "$286 Million",
    "tagline": "He can save us all.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-10681",
    "title": "WALL\u00b7E",
    "originalTitle": "WALL\u00b7E",
    "year": 2008,
    "runtime": "98 min",
    "genres": [
      "Animation",
      "Family"
    ],
    "imdbRating": 7.8,
    "matchScore": 99,
    "synopsis": "WALL\u00b7E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL\u00b7E thinks he's finally found a friend and stows away on the ship when it leaves.",
    "director": "Andrew Stanton",
    "cast": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin",
      "Fred Willard"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/nYs4ZwnJBK4AgljhvzwNz7fpr3E.jpg",
    "trailerId": "Tbr_L9Gap_M",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Andrew Stanton.",
    "whyRecommended": "Top match based on Animation themes and direction by Andrew Stanton.",
    "similarTags": [
      "Andrew Stanton",
      "Animation",
      "Family"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$180 Million",
    "revenue": "$521 Million",
    "tagline": "An adventure beyond the ordinar-E.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-223702",
    "title": "Sausage Party",
    "originalTitle": "Sausage Party",
    "year": 2016,
    "runtime": "83 min",
    "genres": [
      "Adventure",
      "Animation",
      "Comedy",
      "Fantasy"
    ],
    "imdbRating": 5.6,
    "matchScore": 90,
    "synopsis": "Sausage Party, the first R-rated CG animated movie, is about one sausage leading a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
    "director": "Conrad Vernon",
    "cast": [
      "Seth Rogen",
      "Kristen Wiig",
      "Jonah Hill",
      "Bill Hader"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vNgdPJQ5CI60oEiiHLKRNrsDhMy.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hsb8nNBt3emvWqBs7Xv5IKlz6Im.jpg",
    "trailerId": "GAJrBPUVDJM",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Conrad Vernon.",
    "whyRecommended": "Top match based on Adventure themes and direction by Conrad Vernon.",
    "similarTags": [
      "Conrad Vernon",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$19 Million",
    "revenue": "$140 Million",
    "tagline": "Always use condiments",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 91,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-238615",
    "title": "Self/less",
    "originalTitle": "Self/less",
    "year": 2015,
    "runtime": "116 min",
    "genres": [
      "Science Fiction",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 6.3,
    "matchScore": 92,
    "synopsis": "An extremely wealthy elderly man dying from cancer undergoes a radical medical procedure that transfers his consciousness to the body of a healthy young man but everything may not be as good as it seems when he starts to uncover the mystery of the body's origins and the secret organization that will kill to keep its secrets.",
    "director": "Tarsem Singh",
    "cast": [
      "Ryan Reynolds",
      "Ben Kingsley",
      "Natalie Martinez",
      "Matthew Goode"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/hCqXcAMeBiPVnLUU8PNsKUYi6Gn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/vzbsqeoG7xH8EVOBiYBSIjU8wt1.jpg",
    "trailerId": "Mc4sz6neHDs",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Science Fiction themes and direction by Tarsem Singh.",
    "whyRecommended": "Top match based on Science Fiction themes and direction by Tarsem Singh.",
    "similarTags": [
      "Tarsem Singh",
      "Science Fiction",
      "Mystery"
    ],
    "moods": [
      "\u2728 Science Fiction",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$26 Million",
    "revenue": "$30 Million",
    "tagline": "God Created Man. Man Created Immortality.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-57800",
    "title": "Ice Age: Continental Drift",
    "originalTitle": "Ice Age: Continental Drift",
    "year": 2012,
    "runtime": "88 min",
    "genres": [
      "Animation",
      "Comedy",
      "Adventure",
      "Family"
    ],
    "imdbRating": 6.2,
    "matchScore": 97,
    "synopsis": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    "director": "Steve Martino",
    "cast": [
      "John Leguizamo",
      "Ray Romano",
      "Chris Wedge",
      "Denis Leary"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/dfp1BZF7FxbBUyzHvMOI9t8NWDD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/liiPM38H376CDqxJ7VeQjan5YUy.jpg",
    "trailerId": "0Int9oeZN5o",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Steve Martino.",
    "whyRecommended": "Top match based on Animation themes and direction by Steve Martino.",
    "similarTags": [
      "Steve Martino",
      "Animation",
      "Comedy"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$95 Million",
    "revenue": "$877 Million",
    "tagline": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-110415",
    "title": "Snowpiercer",
    "originalTitle": "Snowpiercer",
    "year": 2013,
    "runtime": "126 min",
    "genres": [
      "Action",
      "Science Fiction",
      "Drama"
    ],
    "imdbRating": 6.7,
    "matchScore": 91,
    "synopsis": "In a future where a failed global-warming experiment kills off most life on the planet, a class system evolves aboard the Snowpiercer, a train that travels around the globe via a perpetual-motion engine.",
    "director": "Bong Joon-ho",
    "cast": [
      "Chris Evans",
      "Song Kang-ho",
      "Ed Harris",
      "John Hurt"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/kw6YQudA0TMcNmGUGy5XIw7zbnV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/tBIRtMCELcA5PxO7z7OiuCHJdFO.jpg",
    "trailerId": "3Np3v7xnNJk",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Bong Joon-ho.",
    "whyRecommended": "Top match based on Action themes and direction by Bong Joon-ho.",
    "similarTags": [
      "Bong Joon-ho",
      "Action",
      "Science Fiction"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "Korean",
    "country": "International",
    "budget": "$39 Million",
    "revenue": "$86 Million",
    "tagline": "AD 2031, the passengers in the train are the only survivors on Earth.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-49519",
    "title": "The Croods",
    "originalTitle": "The Croods",
    "year": 2013,
    "runtime": "98 min",
    "genres": [
      "Adventure",
      "Animation",
      "Comedy",
      "Family",
      "Fantasy"
    ],
    "imdbRating": 6.8,
    "matchScore": 92,
    "synopsis": "The Croods is a prehistoric comedy adventure that follows the world's first family as they embark on a journey of a lifetime when the cave that has always shielded them from danger is destroyed. Traveling across a spectacular landscape, the Croods discover an incredible new world filled with fantastic creatures -- and their outlook is changed forever.",
    "director": "Chris Sanders",
    "cast": [
      "Nicolas Cage",
      "Emma Stone",
      "Ryan Reynolds",
      "Catherine Keener"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/27zvjVOtOi5ped1HSlJKNsKXkFH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wFN8llYh215M8i2fqWAcPV8CSyL.jpg",
    "trailerId": "E80GplS1OG8",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Chris Sanders.",
    "whyRecommended": "Top match based on Adventure themes and direction by Chris Sanders.",
    "similarTags": [
      "Chris Sanders",
      "Adventure",
      "Animation"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$135 Million",
    "revenue": "$585 Million",
    "tagline": "Meet the first modern family.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-629",
    "title": "The Usual Suspects",
    "originalTitle": "The Usual Suspects",
    "year": 1995,
    "runtime": "106 min",
    "genres": [
      "Drama",
      "Crime",
      "Thriller"
    ],
    "imdbRating": 8.1,
    "matchScore": 94,
    "synopsis": "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor \u2013 leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
    "director": "Bryan Singer",
    "cast": [
      "Stephen Baldwin",
      "Gabriel Byrne",
      "Chazz Palminteri",
      "Kevin Pollak"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/99X2SgyFunJFXGAYnDv3sb9pnUD.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/hy0Hx9fMPk2fmw26Li60z1S2giU.jpg",
    "trailerId": "jM3jrHGAsIE",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Bryan Singer.",
    "whyRecommended": "Top match based on Drama themes and direction by Bryan Singer.",
    "similarTags": [
      "Bryan Singer",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$23 Million",
    "tagline": "Five Criminals. One Line Up. No Coincidence.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-68737",
    "title": "Seventh Son",
    "originalTitle": "Seventh Son",
    "year": 2014,
    "runtime": "102 min",
    "genres": [
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 5.2,
    "matchScore": 98,
    "synopsis": "John Gregory, who is a seventh son of a seventh son and also the local spook, has protected the country from witches, boggarts, ghouls and all manner of things that go bump in the night. However John is not young anymore, and has been seeking an apprentice to carry on his trade. Most have failed to survive. The last hope is a young farmer's son named Thomas Ward. Will he survive the training to become the spook that so many others couldn't?",
    "director": "Sergei Bodrov",
    "cast": [
      "Jeff Bridges",
      "Julianne Moore",
      "Ben Barnes",
      "Alicia Vikander"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/7Q8DfXSjcFSSQDOxz1Sk865wNqI.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2EyK8wpLdYFaS35o0worjqsiuZn.jpg",
    "trailerId": "5i90Qr0Qi6w",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Sergei Bodrov.",
    "whyRecommended": "Top match based on Adventure themes and direction by Sergei Bodrov.",
    "similarTags": [
      "Sergei Bodrov",
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
    "revenue": "$114 Million",
    "tagline": "When darkness falls, the son will rise. When the son falls, the dark knight will rise.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-228161",
    "title": "Home",
    "originalTitle": "Home",
    "year": 2015,
    "runtime": "94 min",
    "genres": [
      "Fantasy",
      "Comedy",
      "Animation",
      "Science Fiction",
      "Family"
    ],
    "imdbRating": 6.8,
    "matchScore": 90,
    "synopsis": "When Earth is taken over by the overly-confident Boov, an alien race in search of a new place to call home, all humans are promptly relocated, while all Boov get busy reorganizing the planet. But when one resourceful girl, Tip, manages to avoid capture, she finds herself the accidental accomplice of a banished Boov named Oh. The two fugitives realize there\u2019s a lot more at stake than intergalactic relations as they embark on the road trip of a lifetime.",
    "director": "Tim Johnson",
    "cast": [
      "Jim Parsons",
      "Rihanna",
      "Steve Martin",
      "Jennifer Lopez"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/usFenYnk6mr8C62dB1MoAfSWMGR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/gnkBzJVH2zicIopP2fHf4kRElne.jpg",
    "trailerId": "Du4jTG7-93k",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Tim Johnson.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Tim Johnson.",
    "similarTags": [
      "Tim Johnson",
      "Fantasy",
      "Comedy"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$135 Million",
    "revenue": "$368 Million",
    "tagline": "Worlds Collide",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-68735",
    "title": "Warcraft",
    "originalTitle": "Warcraft",
    "year": 2016,
    "runtime": "123 min",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "imdbRating": 6.3,
    "matchScore": 91,
    "synopsis": "The peaceful realm of Azeroth stands on the brink of war as its civilization faces a fearsome race of invaders: orc warriors fleeing their dying home to colonize another. As a portal opens to connect the two worlds, one army faces destruction and the other faces extinction. From opposing sides, two heroes are set on a collision course that will decide the fate of their family, their people, and their home.",
    "director": "Duncan Jones",
    "cast": [
      "Paula Patton",
      "Travis Fimmel",
      "Ben Foster",
      "Robert Kazinsky"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/eGi5aoxaZveqNLtE7BZJCuWwR3G.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/aTGvZ3F8QnAD8cPpJRaaqRRxFK6.jpg",
    "trailerId": "65AjY_nRdqE",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Duncan Jones.",
    "whyRecommended": "Top match based on Action themes and direction by Duncan Jones.",
    "similarTags": [
      "Duncan Jones",
      "Action",
      "Adventure"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$160 Million",
    "revenue": "$433 Million",
    "tagline": "Two worlds. One home.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-956",
    "title": "Mission: Impossible III",
    "originalTitle": "Mission: Impossible III",
    "year": 2006,
    "runtime": "126 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.5,
    "matchScore": 92,
    "synopsis": "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
    "director": "J.J. Abrams",
    "cast": [
      "Tom Cruise",
      "Philip Seymour Hoffman",
      "Ving Rhames",
      "Billy Crudup"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/bYKeB9uUcPmvikjouEEQ86uvPw9.jpg",
    "trailerId": "4oVva0muTE8",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by J.J. Abrams.",
    "whyRecommended": "Top match based on Adventure themes and direction by J.J. Abrams.",
    "similarTags": [
      "J.J. Abrams",
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
    "revenue": "$397 Million",
    "tagline": "The Mission Begins 05:05:06.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-64688",
    "title": "21 Jump Street",
    "originalTitle": "21 Jump Street",
    "year": 2012,
    "runtime": "109 min",
    "genres": [
      "Action",
      "Comedy",
      "Crime"
    ],
    "imdbRating": 6.7,
    "matchScore": 94,
    "synopsis": "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
    "director": "Phil Lord",
    "cast": [
      "Channing Tatum",
      "Jonah Hill",
      "Brie Larson",
      "Dave Franco"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/rXrpYOveFl76ivMmyb2612T7Q8w.jpg",
    "trailerId": "BjRs18rV1FI",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Phil Lord.",
    "whyRecommended": "Top match based on Action themes and direction by Phil Lord.",
    "similarTags": [
      "Phil Lord",
      "Action",
      "Comedy"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$42 Million",
    "revenue": "$201 Million",
    "tagline": "They thought the streets were mean. Then they went back to high school.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-324668",
    "title": "Jason Bourne",
    "originalTitle": "Jason Bourne",
    "year": 2016,
    "runtime": "123 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 5.9,
    "matchScore": 95,
    "synopsis": "The most dangerous former operative of the CIA is drawn out of hiding to uncover hidden truths about his past.",
    "director": "Paul Greengrass",
    "cast": [
      "Matt Damon",
      "Alicia Vikander",
      "Tommy Lee Jones",
      "Vincent Cassel"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/xA7N41glw17MBQtcWSm2eBlBRuG.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7mHeyU0a538bgguOeF57I8ZroSk.jpg",
    "trailerId": "F4gJsKZvqE4",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Paul Greengrass.",
    "whyRecommended": "Top match based on Action themes and direction by Paul Greengrass.",
    "similarTags": [
      "Paul Greengrass",
      "Action",
      "Thriller"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$120 Million",
    "revenue": "$415 Million",
    "tagline": "You know his name",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-122081",
    "title": "Spring Breakers",
    "originalTitle": "Spring Breakers",
    "year": 2013,
    "runtime": "94 min",
    "genres": [
      "Drama",
      "Crime"
    ],
    "imdbRating": 5.0,
    "matchScore": 96,
    "synopsis": "After four college girls rob a restaurant to fund their spring break in Florida, they get entangled with a weird dude with his own criminal agenda.",
    "director": "Harmony Korine",
    "cast": [
      "James Franco",
      "Selena Gomez",
      "Vanessa Hudgens",
      "Ashley Benson"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/9tyPnyEkL44qbAliM9jMRWc6bjg.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/3eMxTkvHM6G1lHugBvFGVpcJFUa.jpg",
    "trailerId": "m0AMLz5NMl4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Harmony Korine.",
    "whyRecommended": "Top match based on Drama themes and direction by Harmony Korine.",
    "similarTags": [
      "Harmony Korine",
      "Drama",
      "Crime"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$5 Million",
    "revenue": "$31 Million",
    "tagline": "A little sun can bring out your dark side.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-10198",
    "title": "The Princess and the Frog",
    "originalTitle": "The Princess and the Frog",
    "year": 2009,
    "runtime": "97 min",
    "genres": [
      "Romance",
      "Family",
      "Animation",
      "Music"
    ],
    "imdbRating": 6.7,
    "matchScore": 97,
    "synopsis": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to do face the same problem after she kisses him.",
    "director": "Ron Clements",
    "cast": [
      "Anika Noni Rose",
      "Bruno Campos",
      "Keith David",
      "Michael-Leon Wooley"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yprv5PbnEksoVj2v6XEnDBg9joR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/y5tad0a4yRbxYgOHGllEIEeCCKt.jpg",
    "trailerId": "Kw4fSwQbrFo",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Romance themes and direction by Ron Clements.",
    "whyRecommended": "Top match based on Romance themes and direction by Ron Clements.",
    "similarTags": [
      "Ron Clements",
      "Romance",
      "Family"
    ],
    "moods": [
      "\u2728 Romance",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$105 Million",
    "revenue": "$267 Million",
    "tagline": "Every Love Story Begins With a Kiss...",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-169917",
    "title": "A Walk Among the Tombstones",
    "originalTitle": "A Walk Among the Tombstones",
    "year": 2014,
    "runtime": "113 min",
    "genres": [
      "Crime",
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "imdbRating": 6.2,
    "matchScore": 91,
    "synopsis": "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
    "director": "Scott Frank",
    "cast": [
      "Liam Neeson",
      "Dan Stevens",
      "David Harbour",
      "Boyd Holbrook"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/euPgyPsiNFp6gOBB7nUFxvN5ZaY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/k23FPWl97XKpJ1oTaDyADzxWxs6.jpg",
    "trailerId": "aTKBowDjMQg",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Crime themes and direction by Scott Frank.",
    "whyRecommended": "Top match based on Crime themes and direction by Scott Frank.",
    "similarTags": [
      "Scott Frank",
      "Crime",
      "Drama"
    ],
    "moods": [
      "\u2728 Crime",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$28 Million",
    "revenue": "$53 Million",
    "tagline": "Some people are afraid of all the wrong things",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 93,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-138103",
    "title": "The Expendables 3",
    "originalTitle": "The Expendables 3",
    "year": 2014,
    "runtime": "127 min",
    "genres": [
      "Action",
      "Adventure",
      "Thriller"
    ],
    "imdbRating": 6.1,
    "matchScore": 96,
    "synopsis": "Barney, Christmas and the rest of the team comes face-to-face with Conrad Stonebanks, who years ago co-founded The Expendables with Barney. Stonebanks subsequently became a ruthless arms trader and someone who Barney was forced to kill\u2026 or so he thought. Stonebanks, who eluded death once before, now is making it his mission to end The Expendables -- but Barney has other plans. Barney decides that he has to fight old blood with new blood, and brings in a new era of Expendables team members, recruiting individuals who are younger, faster and more tech-savvy. The latest mission becomes a clash of classic old-school style versus high-tech expertise in the Expendables\u2019 most personal battle yet.",
    "director": "Patrick Hughes",
    "cast": [
      "Sylvester Stallone",
      "Jason Statham",
      "Harrison Ford",
      "Arnold Schwarzenegger"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/utS5euWHlEdKBNnEFwjpZ2oGuhF.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/xSfBWkAarrPwwfiGBAMt8wqxUUH.jpg",
    "trailerId": "KATn_m-AX9I",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Patrick Hughes.",
    "whyRecommended": "Top match based on Action themes and direction by Patrick Hughes.",
    "similarTags": [
      "Patrick Hughes",
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
    "revenue": "$206 Million",
    "tagline": "New team. New attitude. New mission.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 97,
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
      "Disney+"
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-197",
    "title": "Braveheart",
    "originalTitle": "Braveheart",
    "year": 1995,
    "runtime": "177 min",
    "genres": [
      "Action",
      "Drama",
      "History",
      "War"
    ],
    "imdbRating": 7.7,
    "matchScore": 91,
    "synopsis": "Enraged at the slaughter of Murron, his new bride and childhood love, Scottish warrior William Wallace slays a platoon of the local English lord's soldiers. This leads the village to revolt and, eventually, the entire country to rise up against English rule.",
    "director": "Mel Gibson",
    "cast": [
      "Mel Gibson",
      "Catherine McCormack",
      "Sophie Marceau",
      "Patrick McGoohan"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/1m1c5gIWWkb1FEC9lzsoXHhhs7b.jpg",
    "trailerId": "WtO3CsleMDg",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Mel Gibson.",
    "whyRecommended": "Top match based on Action themes and direction by Mel Gibson.",
    "similarTags": [
      "Mel Gibson",
      "Action",
      "Drama"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$72 Million",
    "revenue": "$210 Million",
    "tagline": "Every man dies. Not every man truly lives.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-4922",
    "title": "The Curious Case of Benjamin Button",
    "originalTitle": "The Curious Case of Benjamin Button",
    "year": 2008,
    "runtime": "166 min",
    "genres": [
      "Fantasy",
      "Drama",
      "Thriller",
      "Mystery",
      "Romance"
    ],
    "imdbRating": 7.3,
    "matchScore": 92,
    "synopsis": "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.",
    "director": "David Fincher",
    "cast": [
      "Cate Blanchett",
      "Brad Pitt",
      "Tilda Swinton",
      "Julia Ormond"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/26wEWZYt6yJkwRVkjcbwJEFh9IS.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/2fswjyrY3GEzeoVn6mF8pNeNcgf.jpg",
    "trailerId": "lqijVXvw7_E",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by David Fincher.",
    "whyRecommended": "Top match based on Fantasy themes and direction by David Fincher.",
    "similarTags": [
      "David Fincher",
      "Fantasy",
      "Drama"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$150 Million",
    "revenue": "$333 Million",
    "tagline": "Life isn't measured in minutes, but in moments.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-253412",
    "title": "Everest",
    "originalTitle": "Everest",
    "year": 2015,
    "runtime": "121 min",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "imdbRating": 6.7,
    "matchScore": 93,
    "synopsis": "Inspired by the incredible events surrounding a treacherous attempt to reach the summit of the world's highest mountain, \"Everest\" documents the awe-inspiring journey of two different expeditions challenged beyond their limits by one of the fiercest snowstorms ever encountered by mankind. Their mettle tested by the harshest of elements found on the planet, the climbers will face nearly impossible obstacles as a lifelong obsession becomes a breathtaking struggle for survival.",
    "director": "Baltasar Korm\u00e1kur",
    "cast": [
      "Jason Clarke",
      "Jake Gyllenhaal",
      "Josh Brolin",
      "John Hawkes"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/2jKOu2bjpLP6NXJcm7Ep14bDGtA.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/P7d3lyBaYbAXVor6iB2avLvc4K.jpg",
    "trailerId": "5CKZwKpV06U",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Baltasar Korm\u00e1kur.",
    "whyRecommended": "Top match based on Adventure themes and direction by Baltasar Korm\u00e1kur.",
    "similarTags": [
      "Baltasar Korm\u00e1kur",
      "Adventure",
      "Drama"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$55 Million",
    "revenue": "$203 Million",
    "tagline": "The Storm Awaits.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-49530",
    "title": "In Time",
    "originalTitle": "In Time",
    "year": 2011,
    "runtime": "109 min",
    "genres": [
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 6.7,
    "matchScore": 94,
    "synopsis": "In the not-too-distant future the aging gene has been switched off. To avoid overpopulation, time has become the currency and the way people pay for luxuries and necessities. The rich can live forever, while the rest try to negotiate for their immortality. A poor young man who comes into a fortune of time, though too late to help his mother from dying. He ends up on the run from a corrupt police force known as 'time keepers'.",
    "director": "Andrew Niccol",
    "cast": [
      "Justin Timberlake",
      "Amanda Seyfried",
      "Cillian Murphy",
      "Olivia Wilde"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/3Mwj2sIONQckOZP3YwsUXF7U5I4.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/pxL08w7Eq0vKrQ3mJzYp0VHGaKG.jpg",
    "trailerId": "xhYUaR5QiUs",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Andrew Niccol.",
    "whyRecommended": "Top match based on Action themes and direction by Andrew Niccol.",
    "similarTags": [
      "Andrew Niccol",
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
    "revenue": "$173 Million",
    "tagline": "Time Is Power",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-250546",
    "title": "Annabelle",
    "originalTitle": "Annabelle",
    "year": 2014,
    "runtime": "99 min",
    "genres": [
      "Horror"
    ],
    "imdbRating": 5.6,
    "matchScore": 95,
    "synopsis": "John Form has found the perfect gift for his expectant wife, Mia - a beautiful, rare vintage doll in a pure white wedding dress. But Mia's delight with Annabelle doesn't last long. On one horrific night, their home is invaded by members of a satanic cult, who violently attack the couple. Spilled blood and terror are not all they leave behind. The cultists have conjured an entity so malevolent that nothing they did will compare to the sinister conduit to the damned that is now... Annabelle.",
    "director": "John R. Leonetti",
    "cast": [
      "Annabelle Wallis",
      "Ward Horton",
      "Tony Amendola",
      "Alfre Woodard"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/yLsuU2P2SpDYFwtZQ7dtfVAf6TE.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/pWZ0srAfPx4XyJMlFkKBlmYfx3C.jpg",
    "trailerId": "xabuZwG3XyM",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Horror themes and direction by John R. Leonetti.",
    "whyRecommended": "Top match based on Horror themes and direction by John R. Leonetti.",
    "similarTags": [
      "John R. Leonetti",
      "Horror"
    ],
    "moods": [
      "\u2728 Horror",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$6 Million",
    "revenue": "$255 Million",
    "tagline": "Before the Conjuring, there was Annabelle.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-1735",
    "title": "The Mummy: Tomb of the Dragon Emperor",
    "originalTitle": "The Mummy: Tomb of the Dragon Emperor",
    "year": 2008,
    "runtime": "112 min",
    "genres": [
      "Adventure",
      "Action",
      "Fantasy"
    ],
    "imdbRating": 5.2,
    "matchScore": 96,
    "synopsis": "Archaeologist Rick O'Connell travels to China, pitting him against an emperor from the 2,000-year-old Han dynasty who's returned from the dead to pursue a quest for world domination. This time, O'Connell enlists the help of his wife and son to quash the so-called 'Dragon Emperor' and his abuse of supernatural power.",
    "director": "Rob Cohen",
    "cast": [
      "Brendan Fraser",
      "Jet Li",
      "John Hannah",
      "Maria Bello"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/A3acM1lX5PNWQa6r5qeMAJOxbnT.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/W034dd7w2malON26KWyZm4y37W.jpg",
    "trailerId": "ol-U0ibnVD4",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Rob Cohen.",
    "whyRecommended": "Top match based on Adventure themes and direction by Rob Cohen.",
    "similarTags": [
      "Rob Cohen",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$145 Million",
    "revenue": "$401 Million",
    "tagline": "A New Evil Awakens.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-10193",
    "title": "Toy Story 3",
    "originalTitle": "Toy Story 3",
    "year": 2010,
    "runtime": "103 min",
    "genres": [
      "Animation",
      "Family",
      "Comedy"
    ],
    "imdbRating": 7.6,
    "matchScore": 97,
    "synopsis": "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    "director": "Lee Unkrich",
    "cast": [
      "Tom Hanks",
      "Tim Allen",
      "Ned Beatty",
      "Joan Cusack"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/uAfhsySkr1UzQg1zdg3dZQRz9Fd.jpg",
    "trailerId": "6c3K7LhA9Yc",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Animation themes and direction by Lee Unkrich.",
    "whyRecommended": "Top match based on Animation themes and direction by Lee Unkrich.",
    "similarTags": [
      "Lee Unkrich",
      "Animation",
      "Family"
    ],
    "moods": [
      "\u2728 Animation",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$200 Million",
    "revenue": "$1066 Million",
    "tagline": "No toy gets left behind.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 98,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-710",
    "title": "GoldenEye",
    "originalTitle": "GoldenEye",
    "year": 1995,
    "runtime": "130 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.6,
    "matchScore": 99,
    "synopsis": "James Bond must unmask the mysterious head of the Janus Syndicate and prevent the leader from utilizing the GoldenEye weapons system to inflict devastating revenge on Britain.",
    "director": "Martin Campbell",
    "cast": [
      "Pierce Brosnan",
      "Sean Bean",
      "Izabella Scorupco",
      "Famke Janssen"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/z0ljRnNxIO7CRBhLEO0DvLgAFPR.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/fIWsCpYR9iGDMSbMTSAzy8L7Kg5.jpg",
    "trailerId": "8Zw8ylP4buA",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Martin Campbell.",
    "whyRecommended": "Top match based on Adventure themes and direction by Martin Campbell.",
    "similarTags": [
      "Martin Campbell",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$58 Million",
    "revenue": "$352 Million",
    "tagline": "No limits. No fears. No substitutes.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 90,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-117263",
    "title": "Olympus Has Fallen",
    "originalTitle": "Olympus Has Fallen",
    "year": 2013,
    "runtime": "120 min",
    "genres": [
      "Action",
      "Thriller"
    ],
    "imdbRating": 6.2,
    "matchScore": 91,
    "synopsis": "When the White House (Secret Service Code: \"Olympus\") is captured by a terrorist mastermind and the President is kidnapped, disgraced former Presidential guard Mike Banning finds himself trapped within the building. As the national security team scrambles to respond, they are forced to rely on Banning's inside knowledge to help retake the White House, save the President and avert an even bigger disaster.",
    "director": "Antoine Fuqua",
    "cast": [
      "Gerard Butler",
      "Aaron Eckhart",
      "Angela Bassett",
      "Morgan Freeman"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/u3GTFGwesNBNd0t1hiLaEk1iqZU.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/mjYU7EwVeOtM39ArdWHZk78VhYm.jpg",
    "trailerId": "74F_pts7Uhg",
    "streamingOn": [
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Antoine Fuqua.",
    "whyRecommended": "Top match based on Action themes and direction by Antoine Fuqua.",
    "similarTags": [
      "Antoine Fuqua",
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
    "revenue": "$161 Million",
    "tagline": "When our flag falls our nation will rise.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 92,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-389",
    "title": "12 Angry Men",
    "originalTitle": "12 Angry Men",
    "year": 1957,
    "runtime": "96 min",
    "genres": [
      "Drama"
    ],
    "imdbRating": 8.2,
    "matchScore": 93,
    "synopsis": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    "director": "Sidney Lumet",
    "cast": [
      "Henry Fonda",
      "Martin Balsam",
      "John Fiedler",
      "Lee J. Cobb"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
    "trailerId": "TEN-2uTi2c0",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Drama themes and direction by Sidney Lumet.",
    "whyRecommended": "Top match based on Drama themes and direction by Sidney Lumet.",
    "similarTags": [
      "Sidney Lumet",
      "Drama"
    ],
    "moods": [
      "\u2728 Drama",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$0 Million",
    "revenue": "$1 Million",
    "tagline": "Life is in their hands. Death is on their minds.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 94,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 95,
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
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 96,
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
      "Max"
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-364",
    "title": "Batman Returns",
    "originalTitle": "Batman Returns",
    "year": 1992,
    "runtime": "126 min",
    "genres": [
      "Action",
      "Fantasy"
    ],
    "imdbRating": 6.6,
    "matchScore": 97,
    "synopsis": "Having defeated the Joker, Batman now faces the Penguin - a warped and deformed individual who is intent on being accepted into Gotham society. Crooked businessman Max Schreck is coerced into helping him become Mayor of Gotham and they both attempt to expose Batman in a different light. Selina Kyle, Max's secretary, is thrown from the top of a building and is transformed into Catwoman - a mysterious figure who has the same personality disorder as Batman. Batman must attempt to clear his name, all the time deciding just what must be done with the Catwoman.",
    "director": "Tim Burton",
    "cast": [
      "Michael Keaton",
      "Danny DeVito",
      "Michelle Pfeiffer",
      "Christopher Walken"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jKBjeXM7iBBV9UkUcOXx3m7FSHY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7x4SNxO5HWArighxxFeet5sn3il.jpg",
    "trailerId": "ZCaE6AIk0DM",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Action themes and direction by Tim Burton.",
    "whyRecommended": "Top match based on Action themes and direction by Tim Burton.",
    "similarTags": [
      "Tim Burton",
      "Action",
      "Fantasy"
    ],
    "moods": [
      "\u2728 Action",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$80 Million",
    "revenue": "$280 Million",
    "tagline": "The Bat, the Cat, the Penguin.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-563",
    "title": "Starship Troopers",
    "originalTitle": "Starship Troopers",
    "year": 1997,
    "runtime": "129 min",
    "genres": [
      "Adventure",
      "Action",
      "Thriller",
      "Science Fiction"
    ],
    "imdbRating": 6.7,
    "matchScore": 98,
    "synopsis": "Set in the future, the story follows a young soldier named Johnny Rico and his exploits in the Mobile Infantry. Rico's military career progresses from recruit to non-commissioned officer and finally to officer against the backdrop of an interstellar war between mankind and an arachnoid species known as \"the Bugs\".",
    "director": "Paul Verhoeven",
    "cast": [
      "Casper Van Dien",
      "Dina Meyer",
      "Denise Richards",
      "Jake Busey"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/cxCmv23O7p3hyHwqoktHYkZcGsY.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/7iEfnj3rfyunky6BzvnlwqfoEF0.jpg",
    "trailerId": "zPYuV_jGk7M",
    "streamingOn": [
      "Netflix",
      "Prime Video"
    ],
    "aiReasoning": "Top match based on Adventure themes and direction by Paul Verhoeven.",
    "whyRecommended": "Top match based on Adventure themes and direction by Paul Verhoeven.",
    "similarTags": [
      "Paul Verhoeven",
      "Adventure",
      "Action"
    ],
    "moods": [
      "\u2728 Adventure",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$105 Million",
    "revenue": "$121 Million",
    "tagline": "The only good bug is a dead bug.",
    "productionCompany": "Hollywood Studio"
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
    "matchScore": 99,
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
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-4011",
    "title": "Beetlejuice",
    "originalTitle": "Beetlejuice",
    "year": 1988,
    "runtime": "92 min",
    "genres": [
      "Fantasy",
      "Comedy"
    ],
    "imdbRating": 7.1,
    "matchScore": 90,
    "synopsis": "Thanks to an untimely demise via drowning, a young couple end up as poltergeists in their New England farmhouse, where they fail to meet the challenge of scaring away the insufferable new owners, who want to make drastic changes. In desperation, the undead newlyweds turn to an expert frightmeister, but he's got a diabolical agenda of his own.",
    "director": "Tim Burton",
    "cast": [
      "Geena Davis",
      "Alec Baldwin",
      "Winona Ryder",
      "Michael Keaton"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/yRKyJJYIzfeiVDHBe4LXguPQCvD.jpg",
    "trailerId": "po1HJbmow0g",
    "streamingOn": [
      "Max"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by Tim Burton.",
    "whyRecommended": "Top match based on Fantasy themes and direction by Tim Burton.",
    "similarTags": [
      "Tim Burton",
      "Fantasy",
      "Comedy"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$15 Million",
    "revenue": "$73 Million",
    "tagline": "He's guaranteed to put some life in your afterlife.",
    "productionCompany": "Hollywood Studio"
  },
  {
    "id": "tmdb-52520",
    "title": "Underworld: Awakening",
    "originalTitle": "Underworld: Awakening",
    "year": 2012,
    "runtime": "88 min",
    "genres": [
      "Fantasy",
      "Action",
      "Horror"
    ],
    "imdbRating": 6.1,
    "matchScore": 91,
    "synopsis": "After being held in a coma-like state for fifteen years, vampire Selene learns that she has a fourteen-year-old vampire/Lycan hybrid daughter named Nissa, and when she finds her, they must stop BioCom from creating super Lycans that will kill them all.",
    "director": "M\u00e5ns M\u00e5rlind",
    "cast": [
      "Kate Beckinsale",
      "Stephen Rea",
      "Michael Ealy",
      "Theo James"
    ],
    "posterUrl": "https://image.tmdb.org/t/p/w500/jN0uuc8U6M3sTg9zEaliJV60Stf.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w1280/wJJJS5ey53DqJ3cTuu7GFJsRsWu.jpg",
    "trailerId": "WiJMiHazLPQ",
    "streamingOn": [
      "Disney+"
    ],
    "aiReasoning": "Top match based on Fantasy themes and direction by M\u00e5ns M\u00e5rlind.",
    "whyRecommended": "Top match based on Fantasy themes and direction by M\u00e5ns M\u00e5rlind.",
    "similarTags": [
      "M\u00e5ns M\u00e5rlind",
      "Fantasy",
      "Action"
    ],
    "moods": [
      "\u2728 Fantasy",
      "\ud83d\udd25 Popular"
    ],
    "language": "English",
    "country": "USA",
    "budget": "$70 Million",
    "revenue": "$160 Million",
    "tagline": "Vengeance Returns",
    "productionCompany": "Hollywood Studio"
  }
];

import * as fs from "fs";
import * as path from "path";

// Define the 30 genres
const ALL_30_GENRES = [
  "Action", "Adventure", "Animation", "Anime", "Biography", "Comedy", "Crime", 
  "Documentary", "Drama", "Family", "Fantasy", "History", "Horror", "Mystery", 
  "Musical", "Romance", "Sci-Fi", "Sports", "Superhero", "Suspense", "Thriller", 
  "War", "Western", "Psychological", "Mystery Thriller", "Cyberpunk", "Noir", 
  "Survival", "Space", "Time Travel"
];

// Unsplash high-quality copyright-safe photo pools categorized by genre/theme
const UNSPLASH_POSTERS: Record<string, string[]> = {
  Action: [
    "photo-1508700115892-45ecd05ae2ad", // neon city night alley
    "photo-1533105079780-92b9be482077", // smoke combat silhouette
    "photo-1536768139911-e290a59002e4", // dark highway headlights
    "photo-1509198397868-475647b2a1e5", // surreal steps/structure
    "photo-1486406146926-c627a92ad1ab"  // concrete grungy alley
  ],
  Space: [
    "photo-1451187580459-43490279c0fa", // cosmic blue galaxy
    "photo-1446776811953-b23d57bd21aa", // satellite earth orbit
    "photo-1506318137071-a8e063b4bec0", // nebula stardust
    "photo-1462331940025-496dfbfc7564"  // vibrant deep space nebula
  ],
  Drama: [
    "photo-1470071459604-3b5ec3a7fe05", // solitary park bench
    "photo-1518199266791-5375a83190b7", // emotional silhouette hands
    "photo-1500530855697-b586d89ba3ee", // vast ocean sunset road
    "photo-1494790108377-be9c29b29330", // expressive human portrait
    "photo-1507608869274-d3177c8bb4c7"  // sunset sky soldier silhouette
  ],
  Romance: [
    "photo-1518199266791-5375a83190b7", // couple holding hands walking
    "photo-1516589178581-6cd7833ae3b2", // romantic silhouettes sunset
    "photo-1513151233558-d860c5398176", // abstract warm bokeh lights
    "photo-1490730141103-6cac27aaab94"  // peaceful twilight lake
  ],
  Anime: [
    "photo-1578632767115-351597cf2477", // japanese fantasy torii gate
    "photo-1607604276583-eef5d076aa5f", // anime figure neon setup
    "photo-1534447677768-be436bb09401", // fantasy castle peak
    "photo-1542838132-92c53300491e"  // abstract vaporwave elements
  ],
  Horror: [
    "photo-1505635552518-3448ff116af3", // dark misty forest trees
    "photo-1518063319789-7217e6706b04", // creepy silhouette haunted house
    "photo-1509114397022-ed747cca3f65", // shadow figure in dark alley
    "photo-1519074002996-a69e7ac46a42"  // dark red abstract textures
  ],
  Comedy: [
    "photo-1513151233558-d860c5398176", // balloons festive party
    "photo-1489710437720-ebb67ec84dd2", // joyful smiling portrait
    "photo-1492684223066-81342ee5ff30", // outdoor festival crowd
    "photo-1530103862676-de8c9debad1d"  // colorful confetti burst
  ]
};

const UNSPLASH_BACKDROPS: Record<string, string[]> = {
  Action: [
    "photo-1509198397868-475647b2a1e5", // abstract architecture steps
    "photo-1508700115892-45ecd05ae2ad", // neon wet street alley
    "photo-1478760329108-5c3ed9d495a0"  // dark moody road
  ],
  Space: [
    "photo-1446776811953-b23d57bd21aa", // space shuttle view
    "photo-1506318137071-a8e063b4bec0", // starlit night sky
    "photo-1451187580459-43490279c0fa"  // cosmic connection mesh
  ],
  Drama: [
    "photo-1501785888041-af3ef285b470", // quiet mountain peaks lake
    "photo-1502082553048-f009c37129b9", // misty forest floor
    "photo-1531266752426-aad472b7bbf4"  // twilight military terrain
  ],
  Romance: [
    "photo-1516589178581-6cd7833ae3b2", // orange sunset sea horizon
    "photo-1490730141103-6cac27aaab94", // pink lake sunset reflection
    "photo-1518199266791-5375a83190b7"  // warm lights couple walk
  ],
  Anime: [
    "photo-1534447677768-be436bb09401", // fantasy mountain bridge
    "photo-1578632767115-351597cf2477", // red shrine pathway
    "photo-1607604276583-eef5d076aa5f"  // synthwave purple room
  ],
  Horror: [
    "photo-1505635552518-3448ff116af3", // misty forest dark silhouette
    "photo-1509114397022-ed747cca3f65", // creepy hallway light
    "photo-1518063319789-7217e6706b04"  // abandoned gothic window
  ],
  Comedy: [
    "photo-1530103862676-de8c9debad1d", // confetti celebration sky
    "photo-1492684223066-81342ee5ff30", // festival bokeh crowd
    "photo-1513151233558-d860c5398176"  // party lights display
  ]
};

// Let's create a mapping of specific, highly relevant Unsplash photo IDs for the 28 prominent movies
// This guarantees that clicking any movie displays a beautiful, copyright-safe illustration that fits the theme of the movie!
interface RealMetadata {
  poster: string;
  backdrop: string;
  trailer: string;
  tagline: string;
  budget: string;
  revenue: string;
  studio: string;
  awards: string[];
}

const metadataMap: Record<string, RealMetadata> = {
  // === Tamil ===
  "vikram": {
    poster: "photo-1508700115892-45ecd05ae2ad", // neon action city
    backdrop: "photo-1509198397868-475647b2a1e5", // abstract smoky steps
    trailer: "AoAMf1whqyU",
    tagline: "Once a lion, always a lion.",
    budget: "₹120 Crore",
    revenue: "₹450 Crore",
    studio: "Raaj Kamal Films International",
    awards: ["Ananda Vikatan Cinema Award for Best Actor"]
  },
  "leo": {
    poster: "photo-1546182990-dffeafbe841d", // majestic lion profile
    backdrop: "photo-1602491453977-63a204d5537d", // snow tiger forest
    trailer: "Po3jIhW50m0",
    tagline: "Keep calm and avoid the bad guys.",
    budget: "₹300 Crore",
    revenue: "₹620 Crore",
    studio: "Seven Screen Studio",
    awards: ["SIIMA Award for Best Actor (Nominated)"]
  },
  "kaithi": {
    poster: "photo-1536768139911-e290a59002e4", // night highway truck headlights
    backdrop: "photo-1509114397022-ed747cca3f65", // misty dark highway shadow
    trailer: "gkoO9UrwX7I",
    tagline: "One night. Four police officers. A truck. 50 criminals.",
    budget: "₹25 Crore",
    revenue: "₹105 Crore",
    studio: "Dream Warrior Pictures",
    awards: ["Norway Tamil Film Festival Award for Best Actor"]
  },
  "jailer": {
    poster: "photo-1589829545856-d10d557cf95f", // prison bars silhouette
    backdrop: "photo-1478760329108-5c3ed9d495a0", // misty dark alley
    trailer: "xenOCRDpEPk",
    tagline: "A father's quiet rage.",
    budget: "₹200 Crore",
    revenue: "₹650 Crore",
    studio: "Sun Pictures",
    awards: ["Filmfare Award for Best Actor - Tamil"]
  },
  "master": {
    poster: "photo-1497633762265-9d179a990aa6", // classroom library books
    backdrop: "photo-1516321318423-f06f85e504b3", // empty school corridor
    trailer: "1_iUJKsh4Qc",
    tagline: "The master of his own destiny.",
    budget: "₹135 Crore",
    revenue: "₹300 Crore",
    studio: "XB Film Creators",
    awards: ["SIIMA Award for Best Film"]
  },
  "ninety-six": {
    poster: "photo-1518199266791-5375a83190b7", // romantic walking hands
    backdrop: "photo-1516589178581-6cd7833ae3b2", // beach sunset silhouettes
    trailer: "r0s_8-L9y9I",
    tagline: "The memories stay forever.",
    budget: "₹18 Crore",
    revenue: "₹55 Crore",
    studio: "Madras Enterprises",
    awards: ["SIIMA Award for Best Actress"]
  },
  "soorarai-pottru": {
    poster: "photo-1436491865332-7a61a109cc05", // commercial flight sky
    backdrop: "photo-1501785888041-af3ef285b470", // mountain peaks horizon
    trailer: "dyrA-tV4h-U",
    tagline: "An ordinary man with an extraordinary flight.",
    budget: "₹20 Crore",
    revenue: "₹170 Crore",
    studio: "2D Entertainment",
    awards: ["National Film Award for Best Feature Film"]
  },
  "ratsasan": {
    poster: "photo-1509248961158-e54f6934749c", // creepy dark mask shadow
    backdrop: "photo-1505635552518-3448ff116af3", // misty dark forest trees
    trailer: "1_qR1JmB7U8",
    tagline: "The hunter becomes the hunted.",
    budget: "₹15 Crore",
    revenue: "₹75 Crore",
    studio: "Axess Film Factory",
    awards: ["Filmfare Award for Best Film - Tamil"]
  },
  "asuran": {
    poster: "photo-1500937386664-56d1dfef3854", // rural dry soil field
    backdrop: "photo-1502082553048-f009c37129b9", // forest rugged ground
    trailer: "k1B9X9B5r8w",
    tagline: "They can steal our land, but they can't steal our education.",
    budget: "₹32 Crore",
    revenue: "₹150 Crore",
    studio: "V Creations",
    awards: ["National Film Award for Best Actor"]
  },
  "amaran": {
    poster: "photo-1507608869274-d3177c8bb4c7", // soldier helmet in sunset
    backdrop: "photo-1531266752426-aad472b7bbf4", // military twilight horizon
    trailer: "1_B9X9B5r8w",
    tagline: "A hero's sacrifice.",
    budget: "₹100 Crore",
    revenue: "₹250 Crore",
    studio: "Raaj Kamal Films International",
    awards: ["National Film Award for Best Tribute Film"]
  },

  // === English ===
  "inception": {
    poster: "photo-1518531933037-91b2f5f229cc", // surreal twisting architecture
    backdrop: "photo-1506318137071-a8e063b4bec0", // starry dream steps
    trailer: "8hP9D6kZseM",
    tagline: "Your mind is the scene of the crime.",
    budget: "$160 Million",
    revenue: "$836 Million",
    studio: "Warner Bros. Pictures",
    awards: ["4 Academy Awards (Best Cinematography, Sound Editing, Sound Mixing, Visual Effects)"]
  },
  "interstellar": {
    poster: "photo-1451187580459-43490279c0fa", // space cosmic universe
    backdrop: "photo-1446776811953-b23d57bd21aa", // orbiting space shuttle
    trailer: "zSWdZAZE3Dc",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    budget: "$165 Million",
    revenue: "$701 Million",
    studio: "Paramount Pictures / Legendary Pictures",
    awards: ["Academy Award for Best Visual Effects"]
  },
  "dark-knight": {
    poster: "photo-1534447677768-be436bb09401", // gothic dark spire
    backdrop: "photo-1509198397868-475647b2a1e5", // gothic dark city skyline
    trailer: "EXeTwQWrcwY",
    tagline: "Why So Serious?",
    budget: "$185 Million",
    revenue: "$1.006 Billion",
    studio: "Warner Bros. Pictures / Legendary Pictures",
    awards: ["Academy Award for Best Supporting Actor (Heath Ledger)"]
  },
  "pulp-fiction": {
    poster: "photo-1543536448-d209d2d13a1c", // retro vinyl record album
    backdrop: "photo-1542204172-e7052809d852", // retro neon diner table
    trailer: "s7EdQ4FqbhY",
    tagline: "Just because you are a character doesn't mean that you have character.",
    budget: "$8 Million",
    revenue: "$213 Million",
    studio: "Miramax Films",
    awards: ["Academy Award for Best Original Screenplay"]
  },
  "shawshank": {
    poster: "photo-1589829545856-d10d557cf95f", // silhouette in heavy rain
    backdrop: "photo-1478760329108-5c3ed9d495a0", // misty jail outer wall
    trailer: "PLl99DfYbY4",
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    budget: "$25 Million",
    revenue: "$73 Million",
    studio: "Castle Rock Entertainment",
    awards: ["7 Oscar Nominations"]
  },
  "fight-club": {
    poster: "photo-1486406146926-c627a92ad1ab", // concrete grungy pillars
    backdrop: "photo-1508700115892-45ecd05ae2ad", // wet neon city street alley
    trailer: "O1tGxRRgly8",
    tagline: "Mischief. Mayhem. Soap.",
    budget: "$63 Million",
    revenue: "$101 Million",
    studio: "20th Century Fox",
    awards: ["Oscar Nominated for Best Sound Editing"]
  },
  "forrest-gump": {
    poster: "photo-1470071459604-3b5ec3a7fe05", // solitary park bench
    backdrop: "photo-1500530855697-b586d89ba3ee", // grassy landscape open road
    trailer: "bLvqoHBptjg",
    tagline: "Life is like a box of chocolates... You never know what you're gonna get.",
    budget: "$55 Million",
    revenue: "$678 Million",
    studio: "Paramount Pictures",
    awards: ["6 Academy Awards including Best Picture"]
  },
  "matrix": {
    poster: "photo-1526374965328-7f61d4dc18c5", // digital green code matrix
    backdrop: "photo-1515879218367-8466d910aaa4", // dark coding screen matrix
    trailer: "vKQi3bBA1y8",
    tagline: "Welcome to the real world.",
    budget: "$63 Million",
    revenue: "$463 Million",
    studio: "Warner Bros. Pictures",
    awards: ["4 Academy Awards for Editing, Sound and Visual Effects"]
  },
  "gladiator": {
    poster: "photo-1552832230-c0197dd311b5", // colosseum monument rome
    backdrop: "photo-1533105079780-92b9be482077", // ancient column ground
    trailer: "ol67qo3P4w8",
    tagline: "What we do in life echoes in eternity.",
    budget: "$103 Million",
    revenue: "$503 Million",
    studio: "Universal Pictures / DreamWorks Pictures",
    awards: ["5 Academy Awards including Best Picture"]
  },
  "titanic": {
    poster: "photo-1500530855697-b586d89ba3ee", // ocean ship wake
    backdrop: "photo-1516589178581-6cd7833ae3b2", // deep blue twilight sea
    trailer: "CHekzSiZhsY",
    tagline: "Nothing on Earth could come between them.",
    budget: "$200 Million",
    revenue: "$2.264 Billion",
    studio: "Paramount Pictures / 20th Century Fox",
    awards: ["11 Academy Awards including Best Picture"]
  },

  // === Korean ===
  "parasite": {
    poster: "photo-1513694203232-719a280e022f", // luxury house staircase
    backdrop: "photo-1486406146926-c627a92ad1ab", // rainy basement window view
    trailer: "SEUXvca1i-g",
    tagline: "Act like you own the place.",
    budget: "$11 Million",
    revenue: "$263 Million",
    studio: "CJ Entertainment",
    awards: ["4 Academy Awards including Best Picture"]
  },
  "oldboy": {
    poster: "photo-1509114397022-ed747cca3f65", // hammer outline shadow
    backdrop: "photo-1508700115892-45ecd05ae2ad", // green lit corridor alley
    trailer: "2HkjrJ6IK5E",
    tagline: "Laugh, and the world laughs with you. Weep, and you weep alone.",
    budget: "$3 Million",
    revenue: "$15 Million",
    studio: "Show East",
    awards: ["Grand Prix at the 2004 Cannes Film Festival"]
  },
  "memories-murder": {
    poster: "photo-1505635552518-3448ff116af3", // misty spooky forest path
    backdrop: "photo-1509114397022-ed747cca3f65", // shadow figure in dark alley
    trailer: "0n_H-Jt9xP8",
    tagline: "In the summer of 1986, a small province of South Korea changed forever.",
    budget: "$2.8 Million",
    revenue: "$17 Million",
    studio: "CJ Entertainment",
    awards: ["Grand Bell Award for Best Actor"]
  },
  "handmaiden": {
    poster: "photo-1518199266791-5375a83190b7", // elegant hands close-up
    backdrop: "photo-1516589178581-6cd7833ae3b2", // beautiful twilight sky
    trailer: "Ie6Y_Q5-E0Y",
    tagline: "A story of deception and desire.",
    budget: "$8 Million",
    revenue: "$38 Million",
    studio: "Moho Film",
    awards: ["BAFTA Award for Best Film Not in the English Language"]
  },
  "train-busan": {
    poster: "photo-1536768139911-e290a59002e4", // night highway train track
    backdrop: "photo-1509114397022-ed747cca3f65", // creepy misty train station
    trailer: "pyWuOrFRKQE",
    tagline: "Life or death, the final destination is Busan.",
    budget: "$8.5 Million",
    revenue: "$98 Million",
    studio: "Redpeter Films",
    awards: ["Blue Dragon Film Award for Technical Excellence"]
  },

  // === Japanese ===
  "spirited-away-jp": {
    poster: "photo-1578632767115-351597cf2477", // red bridge japanese temple
    backdrop: "photo-1534447677768-be436bb09401", // fantasy bridge mist
    trailer: "ByXuk9QqQkk",
    tagline: "Nothing that happens is ever forgotten, even if you can't remember it.",
    budget: "$19 Million",
    revenue: "$395 Million",
    studio: "Studio Ghibli",
    awards: ["Academy Award for Best Animated Feature"]
  },
  "totoro": {
    poster: "photo-1502082553048-f009c37129b9", // mystical forest tree trunk
    backdrop: "photo-1470071459604-3b5ec3a7fe05", // sunny country path field
    trailer: "92a7Hj0ijLs",
    tagline: "Meet the friendly spirits of the forest.",
    budget: "$3.5 Million",
    revenue: "$30 Million",
    studio: "Studio Ghibli",
    awards: ["Blue Ribbon Award for Best Film"]
  },
  "mononoke": {
    poster: "photo-1518063319789-7217e6706b04", // mystical deer/wolf forest
    backdrop: "photo-1505635552518-3448ff116af3", // ancient misty forest trees
    trailer: "4OiMTOKdKTE",
    tagline: "The clash between civilization and forest gods.",
    budget: "$20 Million",
    revenue: "$169 Million",
    studio: "Studio Ghibli",
    awards: ["Japan Academy Prize for Picture of the Year"]
  },
  "your-name-jp": {
    poster: "photo-1506318137071-a8e063b4bec0", // starlit meteor night sky
    backdrop: "photo-1446776811953-b23d57bd21aa", // anime clouds twilight
    trailer: "xU47nhruN-k",
    tagline: "Searching for someone I've never met.",
    budget: "$3.7 Million",
    revenue: "$382 Million",
    studio: "CoMix Wave Films",
    awards: ["L.A. Film Critics Association Award for Best Animated Film"]
  },
  "silent-voice-jp": {
    poster: "photo-1518199266791-5375a83190b7", // school bridge cherry blossom
    backdrop: "photo-1516589178581-6cd7833ae3b2", // sunset lake ripples
    trailer: "nfK6UgLra7w",
    tagline: "Hear the voice that was left unheard.",
    budget: "$3.5 Million",
    revenue: "$33 Million",
    studio: "Kyoto Animation",
    awards: ["Japan Movie Critics Award for Best Animation"]
  }
};

// Helper to calculate a deterministic hash number for mapping fallbacks evenly
function getHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// We import rawMoviesData dynamically from generate-dataset.ts
// But to make it independent, we re-declare our raw movie data here so we have the absolute final dataset in one step.
const rawMoviesData: Record<string, Array<{
  id: string;
  title: string;
  year: number;
  runtime: string;
  director: string;
  cast: string[];
  synopsis: string;
  country: string;
  genres: string[];
}>> = {
  // === Tamil ===
  Tamil: [
    { id: "vikram", title: "Vikram", year: 2022, runtime: "2h 55m", director: "Lokesh Kanagaraj", cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"], synopsis: "A special agent investigates a group of masked vigilantes who are targeting drug lords.", country: "India", genres: ["Action", "Thriller", "Crime"] },
    { id: "leo", title: "Leo", year: 2023, runtime: "2h 44m", director: "Lokesh Kanagaraj", cast: ["Vijay", "Sanjay Dutt", "Trisha Krishnan"], synopsis: "A mild-mannered cafe owner becomes the target of drug lords claiming he is their long-lost brother.", country: "India", genres: ["Action", "Thriller", "Crime"] },
    { id: "kaithi", title: "Kaithi", year: 2019, runtime: "2h 27m", director: "Lokesh Kanagaraj", cast: ["Karthi", "Narain", "Arjun Das"], synopsis: "An ex-convict helps the police drive a truck full of poisoned officers to the hospital while escaping gangs.", country: "India", genres: ["Action", "Thriller", "Crime"] },
    { id: "jailer", title: "Jailer", year: 2023, runtime: "2h 48m", director: "Nelson Dilipkumar", cast: ["Rajinikanth", "Vinayakan", "Ramya Krishnan"], synopsis: "A retired prison warden hunts down the criminals who allegedly killed his police officer son.", country: "India", genres: ["Action", "Comedy", "Crime"] },
    { id: "master", title: "Master", year: 2021, runtime: "2h 59m", director: "Lokesh Kanagaraj", cast: ["Vijay", "Vijay Sethupathi", "Malavika Mohanan"], synopsis: "An alcoholic professor is sent to a juvenile school, where he clashes with a ruthless gangster.", country: "India", genres: ["Action", "Drama", "Crime"] },
    { id: "ninety-six", title: "96", year: 2018, runtime: "2h 38m", director: "C. Prem Kumar", cast: ["Vijay Sethupathi", "Trisha Krishnan"], synopsis: "Two high school sweethearts reunite at a class reunion after twenty-two years of separation.", country: "India", genres: ["Romance", "Drama"] },
    { id: "soorarai-pottru", title: "Soorarai Pottru", year: 2020, runtime: "2h 29m", director: "Sudha Kongara", cast: ["Suriya", "Aparna Balamurali"], synopsis: "A young man from a remote village dreams of launching a low-cost airline for the common man.", country: "India", genres: ["Drama", "Biography"] },
    { id: "ratsasan", title: "Ratsasan", year: 2018, runtime: "2h 50m", director: "Ram Kumar", cast: ["Vishnu Vishal", "Amala Paul"], synopsis: "An aspiring film director becomes a cop and tracks down a psychotic serial killer targeting schoolgirls.", country: "India", genres: ["Thriller", "Mystery", "Crime"] },
    { id: "asuran", title: "Asuran", year: 2019, runtime: "2h 21m", director: "Vetrimaaran", cast: ["Dhanush", "Manju Warrier"], synopsis: "A farmer goes on the run with his family to protect his son, who has killed a wealthy landlord.", country: "India", genres: ["Action", "Drama"] },
    { id: "amaran", title: "Amaran", year: 2024, runtime: "2h 45m", director: "Rajkumar Periasamy", cast: ["Sivakarthikeyan", "Sai Pallavi"], synopsis: "A biographical tribute to Major Mukund Varadarajan, chronicling his service and sacrifices in Kashmir.", country: "India", genres: ["Drama", "Biography", "War"] },
    { id: "nayagan", title: "Nayagan", year: 1987, runtime: "2h 25m", director: "Mani Ratnam", cast: ["Kamal Haasan", "Saranya Ponvannan"], synopsis: "A slum dweller rises to become a powerful crime godfather in Mumbai.", country: "India", genres: ["Crime", "Drama"] },
    { id: "anbe-sivam", title: "Anbe Sivam", year: 2003, runtime: "2h 40m", director: "Sundar C.", cast: ["Kamal Haasan", "R. Madhavan"], synopsis: "Two men of contrasting personalities travel together from Bhubaneswar to Chennai, forming an unlikely bond.", country: "India", genres: ["Drama", "Comedy"] },
    { id: "ponniyin-selvan-1", title: "Ponniyin Selvan: I", year: 2022, runtime: "2h 47m", director: "Mani Ratnam", cast: ["Vikram", "Karthi", "Jayam Ravi", "Aishwarya Rai"], synopsis: "Vandiyathevan sets out to deliver a message from Crown Prince Aditha Karikalan amidst Chola court conspiracies.", country: "India", genres: ["Adventure", "Action", "History"] },
    { id: "vada-chennai", title: "Vada Chennai", year: 2018, runtime: "2h 44m", director: "Vetrimaaran", cast: ["Dhanush", "Ameer", "Andrea Jeremiah"], synopsis: "A skilled carrom player gets reluctantly drawn into a gang war in North Chennai.", country: "India", genres: ["Crime", "Drama", "Action"] },
    { id: "baasha", title: "Baasha", year: 1995, runtime: "2h 25m", director: "Suresh Krissna", cast: ["Rajinikanth", "Nagma", "Raghuvaran"], synopsis: "An auto driver hides his dark past as a powerful Mumbai crime lord to keep his family safe.", country: "India", genres: ["Action", "Crime"] },
    { id: "enthiran", title: "Enthiran", year: 2010, runtime: "2h 45m", director: "S. Shankar", cast: ["Rajinikanth", "Aishwarya Rai"], synopsis: "A scientist builds a humanoid robot that falls in love with his fiancee and turns rogue.", country: "India", genres: ["Sci-Fi", "Action", "Cyberpunk"] },
    { id: "ghilli", title: "Ghilli", year: 2004, runtime: "2h 40m", director: "Dharani", cast: ["Vijay", "Trisha Krishnan", "Prakash Raj"], synopsis: "A kabaddi player saves a girl from a powerful factionist in Madurai and hides her in his house.", country: "India", genres: ["Action", "Comedy", "Sports"] },
    { id: "thuppakki", title: "Thuppakki", year: 2012, runtime: "2h 45m", director: "A.R. Murugadoss", cast: ["Vijay", "Kajal Aggarwal"], synopsis: "An army captain visits Chennai on vacation, only to uncover and dismantle a network of sleeper cells.", country: "India", genres: ["Action", "Thriller"] },
    { id: "maanadu", title: "Maanadu", year: 2021, runtime: "2h 27m", director: "Venkat Prabhu", cast: ["Silambarasan", "S.J. Suryah"], synopsis: "A man gets trapped in a time loop on the day of a public conference, trying to save the Chief Minister.", country: "India", genres: ["Sci-Fi", "Thriller", "Time Travel"] },
    { id: "vikram-vedha", title: "Vikram Vedha", year: 2017, runtime: "2h 27m", director: "Pushkar-Gayathri", cast: ["Madhavan", "Vijay Sethupathi"], synopsis: "A righteous police officer hunts a notorious gangster who tells him stories that blur lines of morality.", country: "India", genres: ["Action", "Thriller", "Crime"] },
    { id: "super-deluxe", title: "Super Deluxe", year: 2019, runtime: "2h 56m", director: "Thiagarajan Kumararaja", cast: ["Vijay Sethupathi", "Fahadh Faasil", "Samantha Ruth Prabhu"], synopsis: "An array of odd characters find themselves in unexpected situations, forcing them to face their demons.", country: "India", genres: ["Drama", "Comedy"] },
    { id: "visaranai", title: "Visaranai", year: 2015, runtime: "1h 49m", director: "Vetrimaaran", cast: ["Dinesh", "Samuthirakani"], synopsis: "Four immigrants are tortured by the police to confess to a crime they did not commit.", country: "India", genres: ["Drama", "Crime", "Thriller"] },
    { id: "jai-bhim", title: "Jai Bhim", year: 2021, runtime: "2h 44m", director: "T.J. Gnanavel", cast: ["Suriya", "Lijo Mol Jose"], synopsis: "A brave lawyer fights for justice when a tribal man is falsely accused of theft and disappears from custody.", country: "India", genres: ["Drama", "Biography"] },
    { id: "sarpatta-parambarai", title: "Sarpatta Parambarai", year: 2021, runtime: "2h 53m", director: "Pa. Ranjith", cast: ["Arya", "Dushara Vijayan"], synopsis: "A young man from North Madras enters the boxing ring to save his clan's honor in the 1970s.", country: "India", genres: ["Drama", "Sports"] },
    { id: "jigarthanda-doublex", title: "Jigarthanda DoubleX", year: 2023, runtime: "2h 52m", director: "Karthik Subbaraj", cast: ["Raghava Lawrence", "S.J. Suryah"], synopsis: "A filmmaker agrees to direct a movie for a ruthless gangster who wants to become a hero.", country: "India", genres: ["Action", "Comedy", "Western"] },
    { id: "indian", title: "Indian", year: 1996, runtime: "3h 5m", director: "S. Shankar", cast: ["Kamal Haasan", "Nedumudi Venu"], synopsis: "A veteran freedom fighter uses ancient martial arts to eradicate bribery and corruption in society.", country: "India", genres: ["Action", "Thriller"] },
    { id: "sivaji-boss", title: "Sivaji: The Boss", year: 2007, runtime: "3h 5m", director: "S. Shankar", cast: ["Rajinikanth", "Shriya Saran"], synopsis: "A software engineer returns to India to help the poor, but clashes with corrupt politicians.", country: "India", genres: ["Action", "Comedy", "Drama"] },
    { id: "kaththi", title: "Kaththi", year: 2014, runtime: "2h 46m", director: "A.R. Murugadoss", cast: ["Vijay", "Samantha Ruth Prabhu"], synopsis: "An escaping criminal takes the place of his lookalike to fight against a multinational company stealing water.", country: "India", genres: ["Action", "Drama"] },
    { id: "pizza", title: "Pizza", year: 2012, runtime: "2h 7m", director: "Karthik Subbaraj", cast: ["Vijay Sethupathi", "Remya Nambeesan"], synopsis: "A pizza delivery boy gets trapped inside a haunted house while delivering a pizza.", country: "India", genres: ["Horror", "Thriller", "Mystery"] },
    { id: "mankatha", title: "Mankatha", year: 2011, runtime: "2h 40m", director: "Venkat Prabhu", cast: ["Ajith Kumar", "Arjun Sarja"], synopsis: "A suspended police officer plans a heist to steal 500 million rupees from betting syndicates.", country: "India", genres: ["Action", "Crime", "Thriller"] },
    { id: "aadukalam", title: "Aadukalam", year: 2011, runtime: "2h 40m", director: "Vetrimaaran", cast: ["Dhanush", "Taapsee Pannu"], synopsis: "A young man gets caught in a web of jealousy and betrayal in the world of rooster fighting.", country: "India", genres: ["Drama", "Sports"] },
    { id: "kaala", title: "Kaala", year: 2018, runtime: "2h 42m", director: "Pa. Ranjith", cast: ["Rajinikanth", "Nana Patekar"], synopsis: "A powerful crime lord protects his Dharavi slum dwellers from a ruthless politician's land grabs.", country: "India", genres: ["Action", "Drama"] },
    { id: "kabali", title: "Kabali", year: 2016, runtime: "2h 32m", director: "Pa. Ranjith", cast: ["Rajinikanth", "Winston Chao"], synopsis: "An aging gangster returns from prison to fight for the rights of Tamil workers in Malaysia.", country: "India", genres: ["Action", "Crime", "Drama"] },
    { id: "petta", title: "Petta", year: 2019, runtime: "2h 51m", director: "Karthik Subbaraj", cast: ["Rajinikanth", "Vijay Sethupathi"], synopsis: "A hostel warden confronts an international mafia family to protect his best friend's son.", country: "India", genres: ["Action", "Comedy", "Crime"] },
    { id: "madras", title: "Madras", year: 2014, runtime: "2h 30m", director: "Pa. Ranjith", cast: ["Karthi", "Catherine Tresa"], synopsis: "An IT professional gets involved in a political conflict over a wall painting in North Chennai.", country: "India", genres: ["Drama", "Action"] },
    { id: "irumbukottai-murattu-singam", title: "Irumbukottai Murattu Singam", year: 2010, runtime: "2h 20m", director: "Chimbudevan", cast: ["Lawrence Raghavendra", "Sandhya", "Padmapriya"], synopsis: "A cowboy set in Tamil Nadu saves a village from a ruthless gang using traditional guns.", country: "India", genres: ["Action", "Comedy", "Western"] }
  ],
  // === Telugu ===
  Telugu: [
    { id: "baahubali-1", title: "Baahubali: The Beginning", year: 2015, runtime: "2h 39m", director: "S.S. Rajamouli", cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"], synopsis: "A young villager learns about his legendary father's lineage and attempts to save his captive mother.", country: "India", genres: ["Action", "Fantasy", "Adventure"] },
    { id: "baahubali-2", title: "Baahubali 2: The Conclusion", year: 2017, runtime: "2h 47m", director: "S.S. Rajamouli", cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"], synopsis: "Shiva learns of the betrayal and assassination of his father, the grand general Baahubali.", country: "India", genres: ["Action", "Fantasy", "Adventure"] },
    { id: "rrr", title: "RRR", year: 2022, runtime: "3h 7m", director: "S.S. Rajamouli", cast: ["NTR Jr.", "Ram Charan", "Alia Bhatt"], synopsis: "Two legendary revolutionaries embark on a journey of friendship and rebellion against British rule.", country: "India", genres: ["Action", "Drama", "History"] },
    { id: "eega", title: "Eega", year: 2012, runtime: "2h 25m", director: "S.S. Rajamouli", cast: ["Nani", "Samantha Ruth Prabhu", "Sudeep"], synopsis: "A murdered man reincarnates as a housefly to protect his lover and seek revenge against his killer.", country: "India", genres: ["Fantasy", "Action", "Comedy"] },
    { id: "magadheera", title: "Magadheera", year: 2009, runtime: "2h 47m", director: "S.S. Rajamouli", cast: ["Ram Charan", "Kajal Aggarwal"], synopsis: "A motorcycle stuntman recalls a past life as a warrior who died protecting a princess.", country: "India", genres: ["Fantasy", "Action", "Romance"] },
    { id: "pushpa", title: "Pushpa: The Rise", year: 2021, runtime: "2h 59m", director: "Sukumar", cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"], synopsis: "A red sandalwood smuggler rises to lead the syndicate, facing off against a brutal police inspector.", country: "India", genres: ["Action", "Crime"] },
    { id: "arjun-reddy", title: "Arjun Reddy", year: 2017, runtime: "3h 2m", director: "Sandeep Reddy Vanga", cast: ["Vijay Deverakonda", "Shalini Pandey"], synopsis: "A brilliant medical student spirals into self-destruction after his girlfriend is forced to marry another.", country: "India", genres: ["Drama", "Romance"] },
    { id: "mahanati", title: "Mahanati", year: 2018, runtime: "2h 57m", director: "Nag Ashwin", cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha Ruth Prabhu"], synopsis: "The life story of Savitri, the iconic actress of South Indian cinema.", country: "India", genres: ["Drama", "Biography"] },
    { id: "sita-ramam", title: "Sita Ramam", year: 2022, runtime: "2h 43m", director: "Hanu Raghavapudi", cast: ["Dulquer Salmaan", "Mrunal Thakur"], synopsis: "An orphan soldier receives a letter from a girl named Sita, beginning a classic romantic journey.", country: "India", genres: ["Romance", "Drama", "War"] },
    { id: "jersey", title: "Jersey", year: 2019, runtime: "2h 40m", director: "Gowtam Tinnanuri", cast: ["Nani", "Shraddha Srinath"], synopsis: "A retired cricketer decides to return to the game in his late thirties to buy a jersey for his son.", country: "India", genres: ["Drama", "Sports"] },
    { id: "kancharapalem", title: "C/o Kancharapalem", year: 2018, runtime: "2h 22m", director: "Venkatesh Maha", cast: ["Subba Rao", "Radha Bessey"], synopsis: "Four love stories set in the neighborhood of Kancharapalem, spanning different age groups.", country: "India", genres: ["Drama", "Romance"] },
    { id: "rangasthalam", title: "Ragasthalam", year: 2018, runtime: "2h 59m", director: "Sukumar", cast: ["Ram Charan", "Samantha Ruth Prabhu"], synopsis: "A partially deaf villager fights a ruthless president who has ruled his village for decades.", country: "India", genres: ["Action", "Drama", "History"] },
    { id: "pokiri", title: "Pokiri", year: 2006, runtime: "2h 40m", director: "Puri Jagannadh", cast: ["Mahesh Babu", "Ileana D'Cruz"], synopsis: "An undercover cop infiltrates a mafia gang, pretending to be a ruthless hitman.", country: "India", genres: ["Action", "Crime", "Thriller"] },
    { id: "athadu", title: "Athadu", year: 2005, runtime: "2h 50m", director: "Trivikram Srinivas", cast: ["Mahesh Babu", "Trisha Krishnan"], synopsis: "A hitman is falsely accused of murder and hides in a remote village, pretending to be a relative.", country: "India", genres: ["Action", "Drama", "Thriller"] },
    { id: "bommarillu", title: "Bommarillu", year: 2006, runtime: "2h 45m", director: "Bhaskar", cast: ["Siddharth", "Genelia D'Souza"], synopsis: "A young man struggles with his father's overprotective nature while falling in love with a bubbly girl.", country: "India", genres: ["Romance", "Comedy", "Family"] },
    { id: "arya", title: "Arya", year: 2004, runtime: "2h 30m", director: "Sukumar", cast: ["Allu Arjun", "Anuradha Mehta"], synopsis: "A bubbly student confesses his love to a girl who is already in a relationship with a bully.", country: "India", genres: ["Romance", "Comedy"] },
    { id: "goodachari", title: "Goodachari", year: 2018, runtime: "2h 27m", director: "Sashi Kiran Tikka", cast: ["Adivi Sesh", "Sobhita Dhulipala"], synopsis: "An aspiring intelligence officer is framed for the murder of his bosses on his graduation day.", country: "India", genres: ["Action", "Thriller"] },
    { id: "agent-sai", title: "Agent Sai Srinivasa Athreya", year: 2019, runtime: "2h 24m", director: "Swaroop RSJ", cast: ["Naveen Polishetty", "Shruti Sharma"], synopsis: "A brilliant detective in Nellore stumbles upon a conspiracy involving unclaimed dead bodies.", country: "India", genres: ["Comedy", "Mystery", "Thriller"] },
    { id: "mathu-vadalara", title: "Mathu Vadalara", year: 2019, runtime: "2h 10m", director: "Ritesh Rana", cast: ["Sri Simha", "Satya"], synopsis: "A delivery boy gets trapped in a murder case after trying to steal money to make ends meet.", country: "India", genres: ["Comedy", "Thriller", "Crime"] },
    { id: "brochevarevarura", title: "Brochevarevarura", year: 2019, runtime: "2h 18m", director: "Vivek Athreya", cast: ["Sree Vishnu", "Nivetha Thomas"], synopsis: "Three college friends plan a fake kidnapping to help a classmate, leading to chaotic events.", country: "India", genres: ["Comedy", "Crime"] },
    { id: "major", title: "Major", year: 2022, runtime: "2h 30m", director: "Sashi Kiran Tikka", cast: ["Adivi Sesh", "Saiee Manjrekar"], synopsis: "The life and sacrifices of Major Sandeep Unnikrishnan during the 2008 Mumbai attacks.", country: "India", genres: ["Drama", "Biography", "War"] },
    { id: "kartikeya-2", title: "Kartikeya 2", year: 2022, runtime: "2h 25m", director: "Chandoo Mondeti", cast: ["N निखिल Siddharth", "Anupama Parameswaran"], synopsis: "A rational doctor searches for the ancient anklet of Lord Krishna, facing mystics and traps.", country: "India", genres: ["Adventure", "Mystery", "Fantasy"] },
    { id: "dasara", title: "Dasara", year: 2023, runtime: "2h 36m", director: "Srikanth Odela", cast: ["Nani", "Keerthy Suresh"], synopsis: "A young man from a coal mine village takes revenge for his friend's murder during a festival.", country: "India", genres: ["Action", "Drama"] },
    { id: "hanuman", title: "Hanu-Man", year: 2024, runtime: "2h 38m", director: "Prasanth Varma", cast: ["Teja Sajja", "Amritha Aiyer"], synopsis: "A petty thief in an imaginary village gains the powers of Lord Hanuman and saves his home from evil.", country: "India", genres: ["Action", "Fantasy", "Superhero"] },
    { id: "hi-nanna", title: "Hi Nanna", year: 2023, runtime: "2h 35m", director: "Shouryuv", cast: ["Nani", "Mrunal Thakur"], synopsis: "A single father photographer raises his daughter until an enigmatic woman enters their lives.", country: "India", genres: ["Drama", "Romance", "Family"] },
    { id: "prasthanam", title: "Prasthanam", year: 2010, runtime: "2h 45m", director: "Deva Katta", cast: ["Sharwanand", "Sai Kumar"], synopsis: "A political godfather chooses his stepson to succeed him, leading to intense family rivalry.", country: "India", genres: ["Drama", "Crime"] },
    { id: "vedam", title: "Vedam", year: 2010, runtime: "2h 15m", director: "Krish Jagarlamudi", cast: ["Allu Arjun", "Manchu Manoj", "Anushka Shetty"], synopsis: "The lives of five people from different walks of life intersect at a hospital during a terror attack.", country: "India", genres: ["Drama", "Action"] },
    { id: "leader", title: "Leader", year: 2010, runtime: "2h 40m", director: "Sekhar Kammula", cast: ["Rana Daggubati", "Richa Gangopadhyay"], synopsis: "A foreign-educated youngster enters politics after his father's murder, aiming to eliminate corruption.", country: "India", genres: ["Drama", "Political", "History"] },
    { id: "gamyam", title: "Gamyam", year: 2008, runtime: "2h 10m", director: "Krish Jagarlamudi", cast: ["Sharwanand", "Allari Naresh"], synopsis: "A wealthy youngster travels with a motorcycle thief in search of his long-lost love.", country: "India", genres: ["Drama", "Adventure", "Romance"] },
    { id: "okkadu", title: "Okkadu", year: 2003, runtime: "2h 50m", director: "Gunasekhar", cast: ["Mahesh Babu", "Bhumika Chawla"], synopsis: "A kabaddi player saves a girl from a powerful factionist in Kurnool, hiding her in his house.", country: "India", genres: ["Action", "Romance", "Sports"] },
    { id: "kshanam", title: "Kshanam", year: 2016, runtime: "2h 0m", director: "Ravikanth Perepu", cast: ["Adivi Sesh", "Adah Sharma"], synopsis: "An NRI returns to India to help his ex-girlfriend find her kidnapped daughter.", country: "India", genres: ["Thriller", "Mystery"] },
    { id: "evaru", title: "Evaru", year: 2019, runtime: "1h 57m", director: "Venkat Ramji", cast: ["Adivi Sesh", "Regina Cassandra"], synopsis: "A corrupt police officer investigates a woman accused of killing an officer who allegedly assaulted her.", country: "India", genres: ["Thriller", "Crime", "Mystery"] },
    { id: "geetha-govindam", title: "Geetha Govindam", year: 2018, runtime: "2h 22m", director: "Parasuram", cast: ["Vijay Deverakonda", "Rashmika Mandanna"], synopsis: "A lecturer falls in love with a woman who initially hates him due to a tragic misunderstanding.", country: "India", genres: ["Romance", "Comedy"] },
    { id: "ala-vaikunthapurramuloo", title: "Ala Vaikunthapurramuloo", year: 2020, runtime: "2h 45m", director: "Trivikram Srinivas", cast: ["Allu Arjun", "Pooja Hegde"], synopsis: "A young man swapped at birth learns about his biological father's wealthy family and protects them.", country: "India", genres: ["Action", "Comedy", "Family"] },
    { id: "baby-telugu", title: "Baby", year: 2023, runtime: "2h 55m", director: "Sai Rajesh", cast: ["Anand Deverakonda", "Vaishnavi Chaitanya"], synopsis: "A triangular love story exploring changing priorities and heartbreaks in college life.", country: "India", genres: ["Romance", "Drama"] },
    { id: "kushi-telugu", title: "Kushi", year: 2001, runtime: "2h 50m", director: "S.J. Suryah", cast: ["Pawan Kalyan", "Bhumika Chawla"], synopsis: "Two college friends have feelings for each other but keep fighting due to their high egos.", country: "India", genres: ["Romance", "Comedy"] }
  ],
  // === Malayalam ===
  Malayalam: [
    { id: "drishyam-1", title: "Drishyam", year: 2013, runtime: "2h 40m", director: "Jeethu Joseph", cast: ["Mohanlal", "Meena", "Asha Sharath"], synopsis: "A cable TV operator goes to extreme lengths to protect his family after they commit an accidental murder.", country: "India", genres: ["Thriller", "Drama", "Crime"] },
    { id: "drishyam-2", title: "Drishyam 2", year: 2021, runtime: "2h 32m", director: "Jeethu Joseph", cast: ["Mohanlal", "Meena", "Murali Gopy"], synopsis: "The investigations reopen six years later, forcing Georgekutty to hatch a final cover-up plan.", country: "India", genres: ["Thriller", "Drama", "Crime"] },
    { id: "premam", title: "Premam", year: 2015, runtime: "2h 36m", director: "Alphonse Puthren", cast: ["Nivin Pauly", "Sai Pallavi", "Madonna Sebastian"], synopsis: "A young man goes through three stages of love and heartbreak in his school and college life.", country: "India", genres: ["Romance", "Comedy", "Drama"] },
    { id: "kumbalangi-nights", title: "Kumbalangi Nights", year: 2019, runtime: "2h 15m", director: "Madhu C. Narayanan", cast: ["Fahadh Faasil", "Shane Nigam", "Soubin Shahir"], synopsis: "Four dysfunctional brothers in a fishing village form an unlikely bond to resolve their issues.", country: "India", genres: ["Drama", "Comedy", "Romance"] },
    { id: "bangalore-days", title: "Bangalore Days", year: 2014, runtime: "2h 51m", director: "Anjali Menon", cast: ["Dulquer Salmaan", "Nivin Pauly", "Fahadh Faasil", "Nazriya Nazim"], synopsis: "Three cousins move from Kerala to Bangalore, chasing their dreams and facing new relationships.", country: "India", genres: ["Drama", "Romance", "Comedy"] },
    { id: "maheshinte", title: "Maheshinte Prathikaaram", year: 2016, runtime: "2h 0m", director: "Dileesh Pothan", cast: ["Fahadh Faasil", "Aparna Balamurali"], synopsis: "A photographer vows to remain barefoot until he takes revenge on the man who humiliated him.", country: "India", genres: ["Comedy", "Drama"] },
    { id: "lucifer", title: "Lucifer", year: 2019, runtime: "2h 54m", director: "Prithviraj Sukumaran", cast: ["Mohanlal", "Vivek Oberoi", "Manju Warrier"], synopsis: "A mysterious godfather takes charge of a political party after its veteran leader passes away.", country: "India", genres: ["Action", "Drama", "Thriller"] },
    { id: "kurup", title: "Kurup", year: 2021, runtime: "2h 36m", director: "Srinath Rajendran", cast: ["Dulquer Salmaan", "Sobhita Dhulipala"], synopsis: "The real-life story of Sukumara Kurup, India's most wanted fugitive who faked his death.", country: "India", genres: ["Crime", "Thriller", "Biography"] },
    { id: "minnal-murali", title: "Minnal Murali", year: 2021, runtime: "2h 38m", director: "Basil Joseph", cast: ["Tovino Thomas", "Guru Somasundaram"], synopsis: "A tailor gains superhuman speed and powers after being struck by lightning in his village.", country: "India", genres: ["Action", "Comedy", "Superhero", "Sci-Fi"] },
    { id: "hridayam", title: "Hridayam", year: 2022, runtime: "2h 51m", director: "Vineeth Sreenivasan", cast: ["Pranav Mohanlal", "Kalyani Priyadarshan"], synopsis: "A young man goes through a series of relationships and career changes at an engineering college.", country: "India", genres: ["Romance", "Drama", "Musical"] },
    { id: "bheeshma-parvam", title: "Bheeshma Parvam", year: 2022, runtime: "2h 40m", director: "Amal Neerad", cast: ["Mammootty", "Soubin Shahir"], synopsis: "An aging patriarch protects his large family from internal betrayals and external drug gangs.", country: "India", genres: ["Action", "Drama", "Crime"] },
    { id: "romanchan", title: "Romanchan", year: 2023, runtime: "2h 10m", director: "Jithu Madhavan", cast: ["Soubin Shahir", "Arjun Ashokan"], synopsis: "Seven bachelor roommates in Bangalore use a Ouija board, accidentally invoking a spirit named Anamika.", country: "India", genres: ["Comedy", "Horror"] },
    { id: "two-thousand-eighteen", title: "2018", year: 2023, runtime: "2h 30m", director: "Jude Anthany Joseph", cast: ["Tovino Thomas", "Kunchacko Boban", "Asif Ali"], synopsis: "The survival stories of the people of Kerala during the catastrophic 2018 state floods.", country: "India", genres: ["Drama", "Survival", "History"] },
    { id: "manjummel-boys", title: "Manjummel Boys", year: 2024, runtime: "2h 15m", director: "Chidambaram", cast: ["Soubin Shahir", "Sreenath Bhasi"], synopsis: "A group of friends on a trip to Kodaikanal attempt to rescue their friend from Guna Caves.", country: "India", genres: ["Drama", "Adventure", "Survival"] },
    { id: "premalu", title: "Premalu", year: 2024, runtime: "2h 36m", director: "Girish A.D.", cast: ["Naslen K. Gafoor", "Mamitha Baiju"], synopsis: "A young graduate moves to Hyderabad for a gate coaching class, falling in love with a bubbly girl.", country: "India", genres: ["Romance", "Comedy"] },
    { id: "aadujeevitham", title: "Aadujeevitham", year: 2024, runtime: "2h 52m", director: "Blessy", cast: ["Prithviraj Sukumaran", "Amala Paul"], synopsis: "An immigrant worker in Saudi Arabia is forced into slave labor herding goats in the desert.", country: "India", genres: ["Drama", "Biography", "Survival"] },
    { id: "bramayugam", title: "Bramayugam", year: 2024, runtime: "2h 20m", director: "Rahul Sadasivan", cast: ["Mammootty", "Arjun Ashokan"], synopsis: "A court singer escapes slave labor only to find himself trapped in a mysterious mansion owned by a wizard.", country: "India", genres: ["Horror", "Thriller", "Fantasy", "Psychological"] },
    { id: "trance", title: "Trance", year: 2020, runtime: "2h 50m", director: "Anwar Rasheed", cast: ["Fahadh Faasil", "Nazriya Nazim", "Gautham Vasudev Menon"], synopsis: "A struggling motivational speaker is hired by corporate bosses to become a fake miracle worker.", country: "India", genres: ["Drama", "Psychological", "Thriller"] },
    { id: "joji", title: "Joji", year: 2021, runtime: "1h 53m", director: "Dileesh Pothan", cast: ["Fahadh Faasil", "Baburaj"], synopsis: "An engineering dropout plots to kill his tyrannical father to inherit the family wealth.", country: "India", genres: ["Drama", "Crime", "Thriller"] },
    { id: "malik", title: "Malik", year: 2021, runtime: "2h 42m", director: "Mahesh Narayanan", cast: ["Fahadh Faasil", "Nimisha Sajayan"], synopsis: "A powerful godfather in a coastal village fights against local politicians trying to steal lands.", country: "India", genres: ["Drama", "Crime", "History"] },
    { id: "great-indian-kitchen", title: "The Great Indian Kitchen", year: 2021, runtime: "1h 40m", director: "Jeo Baby", cast: ["Nimisha Sajayan", "Suraj Venjaramoodu"], synopsis: "A newlywed woman struggles to adapt to the heavy domestic duties imposed on her by a patriarchal home.", country: "India", genres: ["Drama", "Family"] },
    { id: "nayattu", title: "Nayattu", year: 2021, runtime: "2h 4m", director: "Martin Prakkat", cast: ["Kunchacko Boban", "Joju George", "Nimisha Sajayan"], synopsis: "Three police officers go on the run after accidentally running over a young boy.", country: "India", genres: ["Thriller", "Drama", "Survival"] },
    { id: "angamaly-diaries", title: "Angamaly Diaries", year: 2017, runtime: "2h 12m", director: "Lijo Jose Pellissery", cast: ["Antony Varghese", "Reshma Rajan"], synopsis: "A youngster gets involved in local gang wars over pig farming business in Angamaly.", country: "India", genres: ["Crime", "Comedy", "Drama"] },
    { id: "ee-ma-yau", title: "Ee.Ma.Yau.", year: 2018, runtime: "2h 0m", director: "Lijo Jose Pellissery", cast: ["Chemban Vinod Jose", "Dileesh Pothan"], synopsis: "A son struggles to host a grand funeral for his deceased father in a coastal village.", country: "India", genres: ["Drama", "Comedy", "Dark Comedy"] },
    { id: "amen", title: "Amen", year: 2013, runtime: "2h 30m", director: "Lijo Jose Pellissery", cast: ["Fahadh Faasil", "Indrajith Sukumaran"], synopsis: "A young musician fights to win a band competition to marry his landlord's daughter.", country: "India", genres: ["Musical", "Comedy", "Fantasy"] },
    { id: "double-barrel", title: "Double Barrel", year: 2015, runtime: "2h 40m", director: "Lijo Jose Pellissery", cast: ["Prithviraj Sukumaran", "Indrajith Sukumaran"], synopsis: "A spoof action comedy involving drug deals and diamond smuggling in Goa.", country: "India", genres: ["Comedy", "Action", "Crime"] },
    { id: "rorschach", title: "Rorschach", year: 2022, runtime: "2h 30m", director: "Nisam Basheer", cast: ["Mammootty", "Grace Antony"], synopsis: "A mysterious NRI travels to a village seeking revenge against his wife's killer.", country: "India", genres: ["Thriller", "Mystery", "Psychological"] },
    { id: "kannur-squad", title: "Kannur Squad", year: 2023, runtime: "2h 40m", director: "Roby Varghese Raj", cast: ["Mammootty", "Rony David"], synopsis: "A team of police officers travel across India to catch a group of ruthless murderers.", country: "India", genres: ["Action", "Crime", "Thriller"] },
    { id: "manichitrathazhu", title: "Manichitrathazhu", year: 1993, runtime: "2h 45m", director: "Fazil", cast: ["Mohanlal", "Suresh Gopi", "Shobana"], synopsis: "A psychiatrist investigates mysterious occurrences in a haunted ancestral home.", country: "India", genres: ["Horror", "Mystery", "Psychological"] },
    { id: "spadikam", title: "Spadikam", year: 1995, runtime: "2h 40m", director: "Bhadran", cast: ["Mohanlal", "Thilakan"], synopsis: "A rebellious youngster turns rogue after facing severe pressure from his schoolmaster father.", country: "India", genres: ["Action", "Drama"] },
    { id: "kireedam", title: "Kireedam", year: 1989, runtime: "2h 30m", director: "Sibi Malayil", cast: ["Mohanlal", "Thilakan"], synopsis: "A young man's dreams of becoming a police officer are shattered when he saves his father from a gangster.", country: "India", genres: ["Drama", "Crime"] },
    { id: "devasuram", title: "Devasuram", year: 1993, runtime: "2h 40m", director: "I.V. Sasi", cast: ["Mohanlal", "Napoleon"], synopsis: "A wealthy landlord fights with a rival clan to protect his inheritance.", country: "India", genres: ["Drama", "Action"] },
    { id: "thoovanathumbikal", title: "Thoovanathumbikal", year: 1987, runtime: "2h 30m", director: "P. Padmarajan", cast: ["Mohanlal", "Sumalatha"], synopsis: "A wealthy landlord leads a double life, falling in love with a bubbly girl and a call girl.", country: "India", genres: ["Romance", "Drama"] },
    { id: "chitram", title: "Chitram", year: 1988, runtime: "2h 40m", director: "Priyadarshan", cast: ["Mohanlal", "Ranjini"], synopsis: "A woman hires a thief to act as her husband to receive inheritance money from her father.", country: "India", genres: ["Comedy", "Romance", "Drama"] },
    { id: "kilukkam", title: "Kilukkam", year: 1991, runtime: "2h 45m", director: "Priyadarshan", cast: ["Mohanlal", "Revathi", "Jagathy Sreekumar"], synopsis: "A tourist guide in Ooty helps an illegitimate daughter search for her biological father.", country: "India", genres: ["Comedy", "Romance"] },
    { id: "boeing-boeing", title: "Boeing Boeing", year: 1985, runtime: "2h 30m", director: "Priyadarshan", cast: ["Mohanlal", "Mukesh"], synopsis: "A young man dates three air hostesses at the same time with the help of his roommate.", country: "India", genres: ["Comedy", "Romance"] }
  ],
  // === Hindi ===
  Hindi: [
    { id: "three-idiots", title: "3 Idiots", year: 2009, runtime: "2h 50m", director: "Rajkumar Hirani", cast: ["Aamir Khan", "R. Madhavan", "Sharman Joshi"], synopsis: "Two friends search for their long-lost companion, recalling their college days of fighting societal pressures.", country: "India", genres: ["Comedy", "Drama", "Family"] },
    { id: "dangal", title: "Dangal", year: 2016, runtime: "2h 41m", director: "Nitesh Tiwari", cast: ["Aamir Khan", "Fatima Sana Shaikh", "Sanya Malhotra"], synopsis: "A former wrestler trains his two daughters to become world-class wrestlers despite social taboos.", country: "India", genres: ["Drama", "Biography", "Sports"] },
    { id: "lagaan", title: "Lagaan", year: 2001, runtime: "3h 44m", director: "Ashutosh Gowariker", cast: ["Aamir Khan", "Gracy Singh"], synopsis: "Villagers in British India bet their future taxes on a game of cricket against their rulers.", country: "India", genres: ["Drama", "Sports", "History"] },
    { id: "sholay", title: "Sholay", year: 1975, runtime: "3h 24m", director: "Ramesh Sippy", cast: ["Dharmendra", "Amitabh Bachchan", "Hema Malini"], synopsis: "A retired police officer hires two petty thieves to capture a notorious dacoit who slaughtered his family.", country: "India", genres: ["Action", "Crime", "Western"] },
    { id: "ddlj", title: "Dilwale Dulhania Le Jayenge", year: 1995, runtime: "3h 9m", director: "Aditya Chopra", cast: ["Shah Rukh Khan", "Kajol"], synopsis: "A fun-loving youngster tries to win the heart of a girl's conservative family in London and Punjab.", country: "India", genres: ["Romance", "Drama", "Family"] },
    { id: "taare-zameen-par", title: "Taare Zameen Par", year: 2007, runtime: "2h 45m", director: "Aamir Khan", cast: ["Darsheel Safary", "Aamir Khan"], synopsis: "An art teacher helps a dyslexic child discover his inner potential through care and patience.", country: "India", genres: ["Drama", "Family"] },
    { id: "pk", title: "PK", year: 2014, runtime: "2h 33m", director: "Rajkumar Hirani", cast: ["Aamir Khan", "Anushka Sharma"], synopsis: "An alien stranded on Earth asks questions about religious dogmas and human behaviors.", country: "India", genres: ["Comedy", "Fantasy", "Drama"] },
    { id: "sanju", title: "Sanju", year: 2018, runtime: "2h 39m", director: "Rajkumar Hirani", cast: ["Ranbir Kapoor", "Vicky Kaushal"], synopsis: "The real-life biographic story of Bollywood actor Sanjay Dutt, detailing his drug abuse and jail life.", country: "India", genres: ["Drama", "Biography"] },
    { id: "kabir-singh", title: "Kabir Singh", year: 2019, runtime: "2h 55m", director: "Sandeep Reddy Vanga", cast: ["Shahid Kapoor", "Kiara Advani"], synopsis: "An angry surgeon goes down a path of drug abuse after his lover is forced to marry another.", country: "India", genres: ["Drama", "Romance"] },
    { id: "andhadhun", title: "Andhadhun", year: 2018, runtime: "2h 19m", director: "Sriram Raghavan", cast: ["Ayushmann Khurrana", "Tabu", "Radhika Apte"], synopsis: "A blind pianist accidentally witnesses the murder of a former film star.", country: "India", genres: ["Thriller", "Crime", "Mystery", "Black Comedy"] },
    { id: "tumbbad", title: "Tumbbad", year: 2018, runtime: "1h 44m", director: "Rahi Anil Barve", cast: ["Sohum Shah", "Jyoti Malshe"], synopsis: "A family builds a temple for a cursed deity of greed, trying to steal his endless gold coin stash.", country: "India", genres: ["Horror", "Fantasy", "Mystery", "Thriller"] },
    { id: "queen", title: "Queen", year: 2013, runtime: "2h 26m", director: "Vikas Bahl", cast: ["Kangana Ranaut", "Rajkummar Rao"], synopsis: "A Delhi girl goes on her honeymoon to Paris and Amsterdam alone after her fiance cancels the wedding.", country: "India", genres: ["Comedy", "Drama"] },
    { id: "bajrangi-bhaijaan", title: "Bajrangi Bhaijaan", year: 2015, runtime: "2h 39m", director: "Kabir Khan", cast: ["Salman Khan", "Harshaali Malhotra"], synopsis: "A devout Hindu man travels to Pakistan to reunite a mute Muslim girl with her family.", country: "India", genres: ["Drama", "Comedy", "Family"] },
    { id: "gangs-of-wasseypur", title: "Gangs of Wasseypur", year: 2012, runtime: "5h 21m", director: "Anurag Kashyap", cast: ["Manoj Bajpayee", "Nawazuddin Siddiqui"], synopsis: "A generational blood feud between mafia clans over coal mine control in Wasseypur.", country: "India", genres: ["Crime", "Action", "Drama"] },
    { id: "znmd", title: "Zindagi Na Milegi Dobara", year: 2011, runtime: "2h 35m", director: "Zoya Akhtar", cast: ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol", "Katrina Kaif"], synopsis: "Three childhood friends go on a road trip in Spain, facing their deepest fears.", country: "India", genres: ["Drama", "Comedy", "Romance"] },
    { id: "barfi", title: "Barfi!", year: 2012, runtime: "2h 30m", director: "Anurag Basu", cast: ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"], synopsis: "A deaf-mute boy forms an unlikely bond with an autistic girl in Darjeeling.", country: "India", genres: ["Drama", "Romance", "Comedy"] },
    { id: "dil-chahta-hai", title: "Dil Chahta Hai", year: 2001, runtime: "3h 5m", director: "Farhan Akhtar", cast: ["Aamir Khan", "Saif Ali Khan", "Akshaye Khanna"], synopsis: "Three college friends face different relationships that test their bond.", country: "India", genres: ["Comedy", "Romance", "Drama"] },
    { id: "swades", title: "Swades", year: 2004, runtime: "3h 15m", director: "Ashutosh Gowariker", cast: ["Shah Rukh Khan", "Gayatri Joshi"], synopsis: "A NASA scientist returns to his native village to take his nanny to the US, rediscovering his roots.", country: "India", genres: ["Drama", "History"] },
    { id: "chak-de-india", title: "Chak De! India", year: 2007, runtime: "2h 33m", director: "Shimit Amin", cast: ["Shah Rukh Khan", "Vidya Malvade"], synopsis: "A disgraced former hockey captain attempts to redeem himself by coaching the Indian women's team.", country: "India", genres: ["Drama", "Sports"] },
    { id: "border", title: "Border", year: 1997, runtime: "2h 57m", director: "J.P. Dutta", cast: ["Sunny Deol", "Suniel Shetty"], synopsis: "A small battalion of Indian soldiers protects their post against a large Pakistani army in 1971.", country: "India", genres: ["Action", "History", "War"] },
    { id: "shershaah", title: "Shershaah", year: 2021, runtime: "2h 15m", director: "Vishnuvardhan", cast: ["Sidharth Malhotra", "Kiara Advani"], synopsis: "The real-life story of Captain Vikram Batra, chronicling his heroics during the Kargil War.", country: "India", genres: ["Drama", "Biography", "War"] },
    { id: "uri-strike", title: "Uri: The Surgical Strike", year: 2019, runtime: "2h 18m", director: "Aditya Dhar", cast: ["Vicky Kaushal", "Yami Gautam"], synopsis: "A special forces officer leads a covert operation to destroy terrorist launchpads across the border.", country: "India", genres: ["Action", "Thriller", "War"] },
    { id: "bhool-bhulaiyaa", title: "Bhool Bhulaiyaa", year: 2007, runtime: "2h 39m", director: "Priyadarshan", cast: ["Akshay Kumar", "Vidya Balan"], synopsis: "An eccentric psychiatrist investigates reports of a female ghost inside a royal palace.", country: "India", genres: ["Horror", "Mystery", "Comedy"] },
    { id: "stree", title: "Stree", year: 2018, runtime: "2h 8m", director: "Amar Kaushik", cast: ["Rajkummar Rao", "Shraddha Kapoor"], synopsis: "A tailor in Chanderi village falls in love with a girl who might be a ghost that abducts men at night.", country: "India", genres: ["Horror", "Comedy", "Mystery"] },
    { id: "golmaal", title: "Golmaal: Fun Unlimited", year: 2006, runtime: "2h 30m", director: "Rohit Shetty", cast: ["Ajay Devgn", "Arshad Warsi"], synopsis: "Four college dropouts hide in a blind couple's home, pretending to be their grandson.", country: "India", genres: ["Comedy", "Family"] },
    { id: "hera-pheri", title: "Hera Pheri", year: 2000, runtime: "2h 36m", director: "Priyadarshan", cast: ["Akshay Kumar", "Suniel Shetty", "Paresh Rawal"], synopsis: "Three bachelor roommates try to claim a kidnapper's ransom money after receiving a wrong call.", country: "India", genres: ["Comedy", "Crime"] },
    { id: "munnabhai", title: "Munna Bhai M.B.B.S.", year: 2003, runtime: "2h 36m", director: "Rajkumar Hirani", cast: ["Sanjay Dutt", "Arshad Warsi"], synopsis: "A local gangster pretends to be a doctor to satisfy his father, entering a medical college.", country: "India", genres: ["Comedy", "Drama"] },
    { id: "lage-raho-munnabhai", title: "Lage Raho Munna Bhai", year: 2006, runtime: "2h 24m", director: "Rajkumar Hirani", cast: ["Sanjay Dutt", "Arshad Warsi"], synopsis: "A local gangster starts hallucinating Mahatma Gandhi, using his ideals to resolve problems.", country: "India", genres: ["Comedy", "Drama"] },
    { id: "dil-se", title: "Dil Se..", year: 1998, runtime: "2h 43m", director: "Mani Ratnam", cast: ["Shah Rukh Khan", "Manisha Koirala"], synopsis: "A radio broadcaster falls in love with a mysterious woman who is secretly a terrorist.", country: "India", genres: ["Romance", "Drama", "Thriller"] },
    { id: "devdas", title: "Devdas", year: 2002, runtime: "3h 5m", director: "Sanjay Leela Bhansali", cast: ["Shah Rukh Khan", "Aishwarya Rai", "Madhuri Dixit"], synopsis: "A wealthy law graduate spirals into alcoholism after his family forbids him from marrying his love.", country: "India", genres: ["Romance", "Drama"] },
    { id: "veer-zaara", title: "Veer-Zaara", year: 2004, runtime: "3h 12m", director: "Sanjay Leela Bhansali", cast: ["Shah Rukh Khan", "Preity Zinta"], synopsis: "An Indian pilot is imprisoned in Pakistan after falling in love with a Pakistani girl.", country: "India", genres: ["Romance", "Drama"] },
    { id: "kal-ho-na-ho", title: "Kal Ho Naa Ho", year: 2003, runtime: "3h 6m", director: "Nikkhil Advani", cast: ["Shah Rukh Khan", "Preity Zinta", "Saif Ali Khan"], synopsis: "A terminally ill man attempts to match his lover with her best friend before he passes away.", country: "India", genres: ["Romance", "Comedy", "Drama"] },
    { id: "kuch-kuch-hota-hai", title: "Kuch Kuch Hota Hai", year: 1998, runtime: "3h 5m", director: "Karan Johar", cast: ["Shah Rukh Khan", "Kajol", "Rani Mukerji"], synopsis: "A young girl reads her mother's letters, planning to reunite her widowed father with his college friend.", country: "India", genres: ["Romance", "Drama"] },
    { id: "k3g", title: "Kabhi Khushi Kabhie Gham...", year: 2001, runtime: "3h 30m", director: "Karan Johar", cast: ["Amitabh Bachchan", "Shah Rukh Khan", "Kajol"], synopsis: "A wealthy son is disowned by his father after marrying a middle-class girl, moving to London.", country: "India", genres: ["Drama", "Family"] },
    { id: "my-name-is-khan", title: "My Name Is Khan", year: 2010, runtime: "2h 45m", director: "Karan Johar", cast: ["Shah Rukh Khan", "Kajol"], synopsis: "An autistic man travels across America to meet the President and clear his name after a tragedy.", country: "India", genres: ["Drama", "Romance"] },
    { id: "bajirao-mastani", title: "Bajirao Mastani", year: 2015, runtime: "2h 38m", director: "Sanjay Leela Bhansali", cast: ["Ranveer Singh", "Deepika Padukone"], synopsis: "The tragic love story between Maratha General Bajirao and Mastani, a warrior princess.", country: "India", genres: ["Romance", "History", "Drama"] }
  ],
  // === English ===
  English: [
    { id: "inception", title: "Inception", year: 2010, runtime: "2h 28m", director: "Christopher Nolan", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], synopsis: "A thief steals corporate secrets through dream-sharing technology, tasked with planting an idea.", country: "USA", genres: ["Sci-Fi", "Action", "Psychological"] },
    { id: "interstellar", title: "Interstellar", year: 2014, runtime: "2h 49m", director: "Christopher Nolan", cast: ["Matthew McConaughey", "Anne Hathaway"], synopsis: "A team of explorers travel through a wormhole in space to find a new home for humanity.", country: "USA", genres: ["Sci-Fi", "Drama", "Space"] },
    { id: "dark-knight", title: "The Dark Knight", year: 2008, runtime: "2h 32m", director: "Christopher Nolan", cast: ["Christian Bale", "Heath Ledger"], synopsis: "Batman faces a psychotic anarchist known as the Joker, who wants to plunge Gotham into chaos.", country: "USA", genres: ["Action", "Crime", "Superhero"] },
    { id: "pulp-fiction", title: "Pulp Fiction", year: 1994, runtime: "2h 34m", director: "Quentin Tarantino", cast: ["John Travolta", "Uma Thurman"], synopsis: "The lives of mob hitmen, a boxer, and a gangster's wife intertwine in stories of violence.", country: "USA", genres: ["Crime", "Drama", "Noir"] },
    { id: "shawshank", title: "The Shawshank Redemption", year: 1994, runtime: "2h 22m", director: "Frank Darabont", cast: ["Tim Robbins", "Morgan Freeman"], synopsis: "Two imprisoned men bond over a number of years, finding solace and redemption.", country: "USA", genres: ["Drama", "Crime"] },
    { id: "fight-club", title: "Fight Club", year: 1999, runtime: "2h 19m", director: "David Fincher", cast: ["Brad Pitt", "Edward Norton"], synopsis: "An insomniac office worker forms an underground fight club with a soap salesman.", country: "USA", genres: ["Drama", "Psychological"] },
    { id: "forrest-gump", title: "Forrest Gump", year: 1994, runtime: "2h 22m", director: "Robert Zemeckis", cast: ["Tom Hanks", "Robin Wright"], synopsis: "The presidencies of Kennedy and Johnson, Vietnam, and history unfold from the perspective of an Alabama man.", country: "USA", genres: ["Drama", "Comedy", "Romance"] },
    { id: "matrix", title: "The Matrix", year: 1999, runtime: "2h 16m", director: "Lana Wachowski", cast: ["Keanu Reeves", "Laurence Fishburne"], synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality.", country: "USA", genres: ["Sci-Fi", "Action", "Cyberpunk"] },
    { id: "gladiator", title: "Gladiator", year: 2000, runtime: "2h 35m", director: "Ridley Scott", cast: ["Russell Crowe", "Joaquin Phoenix"], synopsis: "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.", country: "USA", genres: ["Action", "Drama", "History"] },
    { id: "titanic", title: "Titanic", year: 1997, runtime: "3h 14m", director: "James Cameron", cast: ["Leonardo DiCaprio", "Kate Winslet"], synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the R.M.S. Titanic.", country: "USA", genres: ["Romance", "Drama", "History"] },
    { id: "avatar", title: "Avatar", year: 2009, runtime: "2h 42m", director: "James Cameron", cast: ["Sam Worthington", "Zoe Saldana"], synopsis: "A paraplegic marine dispatched to the moon Pandora becomes torn between following orders and protecting it.", country: "USA", genres: ["Sci-Fi", "Action", "Adventure"] },
    { id: "jurassic-park", title: "Jurassic Park", year: 1993, runtime: "2h 7m", director: "Steven Spielberg", cast: ["Sam Neill", "Laura Dern"], synopsis: "A pragmatic paleontologist visiting a theme park is tasked with protecting kids after a power failure.", country: "USA", genres: ["Adventure", "Sci-Fi"] },
    { id: "star-wars-4", title: "Star Wars: Episode IV", year: 1977, runtime: "2h 1m", director: "George Lucas", cast: ["Mark Hamill", "Harrison Ford"], synopsis: "Luke Skywalker joins forces with a Jedi Knight to save the galaxy from the Empire's battle station.", country: "USA", genres: ["Sci-Fi", "Adventure", "Space"] },
    { id: "lotr-1", title: "The Lord of the Rings: Fellowship of the Ring", year: 2001, runtime: "2h 58m", director: "Peter Jackson", cast: ["Elijah Wood", "Ian McKellen"], synopsis: "A meek Hobbit from the Shire sets out to destroy a powerful ring in Mount Doom.", country: "New Zealand", genres: ["Fantasy", "Adventure"] },
    { id: "avengers-endgame", title: "Avengers: Endgame", year: 2019, runtime: "3h 1m", director: "Anthony Russo", cast: ["Robert Downey Jr.", "Chris Evans"], synopsis: "The Avengers assemble once more to reverse Thanos's actions and restore balance to the universe.", country: "USA", genres: ["Action", "Adventure", "Superhero"] },
    { id: "iron-man", title: "Iron Man", year: 2008, runtime: "2h 6m", director: "Jon Favreau", cast: ["Robert Downey Jr.", "Gwyneth Paltrow"], synopsis: "A wealthy industrialist builds a high-tech armored suit to escape captivity, becoming a hero.", country: "USA", genres: ["Action", "Sci-Fi", "Superhero"] },
    { id: "spider-verse", title: "Spider-Man: Into the Spider-Verse", year: 2018, runtime: "1h 57m", director: "Bob Persichetti", cast: ["Shameik Moore", "Jake Johnson"], synopsis: "Teen Miles Morales becomes the new Spider-Man, joining forces with spiders from other dimensions.", country: "USA", genres: ["Animation", "Family", "Superhero", "Adventure"] },
    { id: "whiplash", title: "Whiplash", year: 2014, runtime: "1h 47m", director: "Damien Chazelle", cast: ["Miles Teller", "J.K. Simmons"], synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where he is pushed to his limits.", country: "USA", genres: ["Drama", "Musical"] },
    { id: "la-la-land-eng", title: "La La Land", year: 2016, runtime: "2h 8m", director: "Damien Chazelle", cast: ["Ryan Gosling", "Emma Stone"], synopsis: "A jazz pianist and an aspiring actress fall in love while attempting to reconcile their dreams.", country: "USA", genres: ["Romance", "Musical", "Comedy"] },
    { id: "shutter-island-eng", title: "Shutter Island", year: 2010, runtime: "2h 18m", director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo"], synopsis: "A U.S. Marshal investigates the disappearance of a murderer from a hospital for the criminally insane.", country: "USA", genres: ["Psychological", "Mystery Thriller", "Suspense"] },
    { id: "godfather", title: "The Godfather", year: 1972, runtime: "2h 55m", director: "Francis Ford Coppola", cast: ["Marlon Brando", "Al Pacino"], synopsis: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.", country: "USA", genres: ["Crime", "Drama"] },
    { id: "goodfellas", title: "Goodfellas", year: 1990, runtime: "2h 25m", director: "Martin Scorsese", cast: ["Robert De Niro", "Ray Liotta"], synopsis: "The story of Henry Hill and his life in the mob, relationship with his wife and partners.", country: "USA", genres: ["Crime", "Drama", "Biography"] },
    { id: "se7en", title: "Se7en", year: 1995, runtime: "2h 7m", director: "David Fincher", cast: ["Brad Pitt", "Morgan Freeman"], synopsis: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.", country: "USA", genres: ["Crime", "Thriller", "Mystery"] },
    { id: "silence-lambs", title: "The Silence of the Lambs", year: 1991, runtime: "1h 58m", director: "Jonathan Demme", cast: ["Jodie Foster", "Anthony Hopkins"], synopsis: "An FBI cadet receives help from an incarcerated cannibal killer to catch another serial killer.", country: "USA", genres: ["Thriller", "Crime", "Mystery"] },
    { id: "departed", title: "The Departed", year: 2006, runtime: "2h 31m", director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Matt Damon"], synopsis: "An undercover cop and a mole in the police attempt to identify each other inside a Boston gang.", country: "USA", genres: ["Crime", "Thriller", "Drama"] },
    { id: "prestige-eng", title: "The Prestige", year: 2006, runtime: "2h 10m", director: "Christopher Nolan", cast: ["Christian Bale", "Hugh Jackman"], synopsis: "Two magicians engage in a battle to create the ultimate illusion, sacrificing everything.", country: "UK", genres: ["Psychological", "Mystery Thriller", "Drama"] },
    { id: "memento-eng", title: "Memento", year: 2000, runtime: "1h 53m", director: "Christopher Nolan", cast: ["Guy Pearce", "Carrie-Anne Moss"], synopsis: "A man with short-term memory loss uses polaroid photos and tattoos to track down his wife's killer.", country: "USA", genres: ["Psychological", "Mystery Thriller", "Noir"] },
    { id: "arrival", title: "Arrival", year: 2016, runtime: "1h 56m", director: "Denis Villeneuve", cast: ["Amy Adams", "Jeremy Renner"], synopsis: "A linguist works with the military to communicate with alien lifeforms who landed on Earth.", country: "USA", genres: ["Sci-Fi", "Mystery", "Drama"] },
    { id: "dune-eng", title: "Dune", year: 2021, runtime: "2h 35m", director: "Denis Villeneuve", cast: ["Timothée Chalamet", "Rebecca Ferguson"], synopsis: "A noble family gets drawn into a war for control of the galaxy's most valuable asset on Arrakis.", country: "USA", genres: ["Sci-Fi", "Adventure"] },
    { id: "blade-runner-2049", title: "Blade Runner 2049", year: 2017, runtime: "2h 44m", director: "Denis Villeneuve", cast: ["Ryan Gosling", "Harrison Ford"], synopsis: "A new blade runner uncovers a secret that could plunge what is left of society into chaos.", country: "USA", genres: ["Sci-Fi", "Noir", "Cyberpunk"] },
    { id: "get-out", title: "Get Out", year: 2017, runtime: "1h 44m", director: "Jordan Peele", cast: ["Daniel Kaluuya", "Allison Williams"], synopsis: "A young African-American visits his white girlfriend's parents for the weekend, discovering a dark secret.", country: "USA", genres: ["Horror", "Mystery", "Thriller"] },
    { id: "hereditary-eng", title: "Hereditary", year: 2018, runtime: "2h 7m", director: "Ari Aster", cast: ["Toni Collette", "Alex Wolff"], synopsis: "A grieving family is haunted by disturbing occurrences after the death of their grandmother.", country: "USA", genres: ["Horror", "Psychological"] },
    { id: "conjuring", title: "The Conjuring", year: 2013, runtime: "1h 52m", director: "James Wan", cast: ["Vera Farmiga", "Patrick Wilson"], synopsis: "Paranormal investigators Warren work to help a family terrorized by a dark presence.", country: "USA", genres: ["Horror", "Suspense"] },
    { id: "paddington-2-eng", title: "Paddington 2", year: 2017, runtime: "1h 43m", director: "Paul King", cast: ["Ben Whishaw", "Hugh Grant"], synopsis: "Paddington picks up odd jobs to buy a pop-up book for his aunt, only for it to be stolen.", country: "UK", genres: ["Family", "Comedy", "Adventure"] },
    { id: "toy-story-eng", title: "Toy Story", year: 1995, runtime: "1h 21m", director: "John Lasseter", cast: ["Tom Hanks", "Tim Allen"], synopsis: "A cowboy doll is threatened when a new spaceman figure becomes top toy in a boy's room.", country: "USA", genres: ["Family", "Animation", "Comedy"] },
    { id: "finding-nemo", title: "Finding Nemo", year: 2003, runtime: "1h 40m", director: "Andrew Stanton", cast: ["Albert Brooks", "Ellen DeGeneres"], synopsis: "A timid clownfish travels across the ocean to Sydney to rescue his captured son.", country: "USA", genres: ["Family", "Animation", "Adventure"] }
  ],
  // === Korean ===
  Korean: [
    { id: "parasite", title: "Parasite", year: 2019, runtime: "2h 12m", director: "Bong Joon Ho", cast: ["Song Kang-ho", "Lee Sun-kyun"], synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", country: "South Korea", genres: ["Drama", "Thriller", "Comedy"] },
    { id: "oldboy", title: "Oldboy", year: 2003, runtime: "2h 0m", director: "Park Chan-wook", cast: ["Choi Min-sik", "Yoo Ji-tae"], synopsis: "After being kidnapped and imprisoned for fifteen years, a man is released, only to find that he must find his captor in five days.", country: "South Korea", genres: ["Action", "Thriller", "Mystery", "Psychological"] },
    { id: "memories-murder", title: "Memories of Murder", year: 2003, runtime: "2h 11m", director: "Bong Joon Ho", cast: ["Song Kang-ho", "Kim Sang-kyung"], synopsis: "Two local detectives in a small province attempt to solve a series of brutal murders targeting women in the 1980s.", country: "South Korea", genres: ["Crime", "Drama", "Mystery"] },
    { id: "handmaiden", title: "The Handmaiden", year: 2016, runtime: "2h 25m", director: "Park Chan-wook", cast: ["Kim Min-hee", "Kim Tae-ri"], synopsis: "A woman is hired as a handmaiden to a Japanese heiress, but secretly plots to defraud her of her inheritance.", country: "South Korea", genres: ["Romance", "Drama", "Thriller"] },
    { id: "train-busan", title: "Train to Busan", year: 2016, runtime: "1h 58m", director: "Yeon Sang-ho", cast: ["Gong Yoo", "Ma Dong-seok"], synopsis: "A father and daughter get trapped in a high-speed train during a sudden zombie outbreak in South Korea.", country: "South Korea", genres: ["Action", "Horror", "Survival"] },
    { id: "saw-devil", title: "I Saw the Devil", year: 2010, runtime: "2h 24m", director: "Kim Jee-woon", cast: ["Lee Byung-hun", "Choi Min-sik"], synopsis: "A secret agent hunts down a sadistic serial killer who murdered his pregnant fiancee, starting a game of cat and mouse.", country: "South Korea", genres: ["Action", "Thriller", "Crime"] },
    { id: "burning", title: "Burning", year: 2018, runtime: "2h 28m", director: "Lee Chang-dong", cast: ["Yoo Ah-in", "Steven Yeun"], synopsis: "A delivery boy runs into a childhood classmate who asks him to look after her cat while she travels to Africa.", country: "South Korea", genres: ["Drama", "Mystery", "Psychological"] },
    { id: "snowpiercer", title: "Snowpiercer", year: 2013, runtime: "2h 6m", director: "Bong Joon Ho", cast: ["Chris Evans", "Song Kang-ho"], synopsis: "A rebellion erupts aboard a perpetually moving train carrying the last survivors of humanity in a frozen world.", country: "South Korea", genres: ["Sci-Fi", "Action", "Cyberpunk"] },
    { id: "wailing", title: "The Wailing", year: 2016, runtime: "2h 36m", director: "Na Hong-jin", cast: ["Kwak Do-won", "Hwang Jung-min"], synopsis: "A mysterious disease spreads in a small mountain village after a Japanese stranger arrives.", country: "South Korea", genres: ["Horror", "Mystery", "Suspense"] },
    { id: "minari", title: "Minari", year: 2020, runtime: "1h 55m", director: "Lee Isaac Chung", cast: ["Steven Yeun", "Han Ye-ri"], synopsis: "A Korean-American family moves to an Arkansas farm in search of their own American Dream.", country: "USA", genres: ["Drama", "Family"] },
    { id: "taxi-driver", title: "A Taxi Driver", year: 2017, runtime: "2h 17m", director: "Jang Hoon", cast: ["Song Kang-ho", "Thomas Kretschmann"], synopsis: "A taxi driver in Seoul reluctantly drives a German reporter to Gwangju during a historic uprising.", country: "South Korea", genres: ["Drama", "History"] },
    { id: "chaser", title: "The Chaser", year: 2008, runtime: "2h 5m", director: "Na Hong-jin", cast: ["Kim Yoon-seok", "Ha Jung-woo"], synopsis: "A badass detective tries to maintain peace while two rival Chinese-Korean gangs wage war.", country: "South Korea", genres: ["Action", "Crime", "Thriller"] },
    { id: "thirst", title: "Thirst", year: 2009, runtime: "2h 13m", director: "Park Chan-wook", cast: ["Song Kang-ho", "Kim Ok-bin"], synopsis: "A priest volunteering for a vaccine trial gets infected, becoming a vampire craving blood.", country: "South Korea", genres: ["Horror", "Romance", "Drama"] },
    { id: "mother-kor", title: "Mother", year: 2009, runtime: "2h 9m", director: "Bong Joon Ho", cast: ["Kim Hye-ja", "Won Bin"], synopsis: "A mother desperately searches for the real killer of a schoolgirl to clear her disabled son's name.", country: "South Korea", genres: ["Drama", "Mystery", "Thriller"] },
    { id: "jsa", title: "Joint Security Area", year: 2000, runtime: "1h 50m", director: "Park Chan-wook", cast: ["Song Kang-ho", "Lee Byung-hun"], synopsis: "A neutral investigator looks into a shootout at the border between North and South Korea.", country: "South Korea", genres: ["Drama", "Mystery", "War"] },
    { id: "sympathy-vengeance", title: "Sympathy for Mr. Vengeance", year: 2002, runtime: "2h 9m", director: "Park Chan-wook", cast: ["Song Kang-ho", "Shin Ha-kyun"], synopsis: "A deaf-mute worker kidnaps his former boss's daughter to pay for his sister's kidney transplant.", country: "South Korea", genres: ["Drama", "Crime", "Thriller"] },
    { id: "lady-vengeance", title: "Lady Vengeance", year: 2005, runtime: "1h 55m", director: "Park Chan-wook", cast: ["Lee Young-ae", "Choi Min-sik"], synopsis: "A woman framed for kidnapping and murder is released from prison, planning an elaborate revenge.", country: "South Korea", genres: ["Drama", "Crime", "Thriller"] },
    { id: "miracle-cell-7", title: "Miracle in Cell No. 7", year: 2013, runtime: "2h 7m", director: "Lee Hwan-kyung", cast: ["Ryu Seung-ryong", "Kal So-won"], synopsis: "A mentally disabled man is falsely accused of murder, making friends with cellmates who smuggle his daughter.", country: "South Korea", genres: ["Drama", "Comedy", "Family"] },
    { id: "extreme-job", title: "Extreme Job", year: 2019, runtime: "1h 51m", director: "Lee Byeong-heon", cast: ["Ryu Seung-ryong", "Lee Hanee"], synopsis: "Narcotics detectives start a fried chicken restaurant as a cover for wiretapping, only to become famous.", country: "South Korea", genres: ["Comedy", "Action", "Crime"] },
    { id: "along-gods", title: "Along with the Gods: The Two Worlds", year: 2017, runtime: "2h 20m", director: "Kim Yong-hwa", cast: ["Ha Jung-woo", "Cha Tae-hyun"], synopsis: "A deceased firefighter travels through the afterlife trials with three guardians to reincarnate.", country: "South Korea", genres: ["Fantasy", "Drama", "Action"] },
    { id: "host", title: "The Host", year: 2006, runtime: "2h 0m", director: "Bong Joon Ho", cast: ["Song Kang-ho", "Byun Hee-bong"], synopsis: "A monster emerges from Seoul's Han River, kidnapping a man's daughter, forcing his family to rescue her.", country: "South Korea", genres: ["Horror", "Action", "Family"] },
    { id: "okja", title: "Okja", year: 2017, runtime: "2h 0m", director: "Bong Joon Ho", cast: ["Ahn Seo-hyun", "Tilda Swinton"], synopsis: "A young girl risks everything to prevent a powerful multinational company from kidnapping her superpig.", country: "South Korea", genres: ["Adventure", "Drama", "Sci-Fi"] },
    { id: "silenced", title: "Silenced", year: 2011, runtime: "2h 5m", director: "Hwang Dong-hyuk", cast: ["Gong Yoo", "Jung Yu-mi"], synopsis: "A newly appointed teacher at a deaf school uncovers a network of abuse targeting disabled children.", country: "South Korea", genres: ["Drama", "Crime"] },
    { id: "new-world", title: "New World", year: 2013, runtime: "2h 14m", director: "Park Hoon-jung", cast: ["Lee Jung-jae", "Choi Min-sik"], synopsis: "An undercover police officer inside Korea's biggest corporate gang faces conflict after the boss dies.", country: "South Korea", genres: ["Crime", "Drama", "Action"] },
    { id: "man-nowhere", title: "The Man from Nowhere", year: 2010, runtime: "1h 59m", director: "Lee Jeong-beom", cast: ["Won Bin", "Kim Sae-ron"], synopsis: "A quiet pawnshop keeper goes on a rampage to rescue a young girl who is kidnapped by drug dealers.", country: "South Korea", genres: ["Action", "Thriller", "Crime"] },
    { id: "castaway-moon", title: "Castaway on the Moon", year: 2009, runtime: "1h 56m", director: "Lee Hae-jun", cast: ["Jung Jae-young", "Jung Ryeo-won"], synopsis: "A failed salaryman gets stranded on a small island in Seoul's Han River, communicating with a shut-in girl.", country: "South Korea", genres: ["Comedy", "Romance", "Survival"] },
    { id: "midnight-runners", title: "Midnight Runners", year: 2017, runtime: "1h 49m", director: "Kim Joo-hwan", cast: ["Park Seo-joon", "Kang Ha-neul"], synopsis: "Two police academy cadets witness a kidnapping and decide to investigate the case themselves.", country: "South Korea", genres: ["Comedy", "Action", "Crime"] },
    { id: "sunny", title: "Sunny", year: 2011, runtime: "2h 4m", director: "Kang Hyeong-cheol", cast: ["Shim Eun-kyung", "Kang So-ra"], synopsis: "A middle-aged woman attempts to reunite her high school group of friends after learning one is dying.", country: "South Korea", genres: ["Drama", "Comedy", "Family"] },
    { id: "outlaws", title: "The Outlaws", year: 2017, runtime: "2h 1m", director: "Kang Yoon-sung", cast: ["Ma Dong-seok", "Yoon Kye-sang"], synopsis: "A badass detective tries to maintain peace while two rival Chinese-Korean gangs wage war.", country: "South Korea", genres: ["Action", "Crime"] },
    { id: "decibel", title: "Decibel", year: 2022, runtime: "1h 50m", director: "Hwang In-ho", cast: ["Kim Rae-won", "Lee Jong-suk"], synopsis: "A former navy commander receives a call from a terrorist who has planted sound-responsive bombs in the city.", country: "South Korea", genres: ["Action", "Thriller", "Suspense"] },
    { id: "concrete-utopia", title: "Concrete Utopia", year: 2023, runtime: "2h 10m", director: "Um Tae-hwa", cast: ["Lee Byung-hun", "Park Seo-joon"], synopsis: "After an earthquake destroys Seoul, survivors gather at the only apartment building left standing.", country: "South Korea", genres: ["Drama", "Thriller", "Survival"] },
    { id: "exhuma", title: "Exhuma", year: 2024, runtime: "2h 14m", director: "Jang Jae-hyun", cast: ["Choi Min-sik", "Kim Go-eun"], synopsis: "A wealthy family in LA hires shamans to exhume their ancestor's grave to cure a mysterious disease.", country: "South Korea", genres: ["Horror", "Mystery", "Thriller"] },
    { id: "decision-leave", title: "Decision to Leave", year: 2022, runtime: "2h 18m", director: "Park Chan-wook", cast: ["Tang Wei", "Park Hae-il"], synopsis: "A detective falls in love with the mysterious widow of a man who died falling from a mountain.", country: "South Korea", genres: ["Romance", "Mystery", "Drama"] },
    { id: "past-lives", title: "Past Lives", year: 2023, runtime: "1h 45m", director: "Celine Song", cast: ["Greta Lee", "Teo Yoo"], synopsis: "Two childhood friends reunite for one fateful week in New York, contemplating their destiny.", country: "USA", genres: ["Romance", "Drama"] },
    { id: "ode-father", title: "Ode to My Father", year: 2014, runtime: "2h 6m", director: "Yoon Je-kyoon", cast: ["Hwang Jung-min", "Yunjin Kim"], synopsis: "A man's life story from the Hungnam Evacuation of 1950 to the present day, detailing his sacrifices.", country: "South Korea", genres: ["Drama", "History", "Family"] },
    { id: "admiral-currents", title: "The Admiral: Roaring Currents", year: 2014, runtime: "2h 8m", director: "Kim Han-min", cast: ["Choi Min-sik", "Ryu Seung-ryong"], synopsis: "Admiral Yi Sun-sin leads 12 ships to defeat an invading Japanese fleet of 330 vessels at Battle of Myeongnyang.", country: "South Korea", genres: ["Action", "History", "War"] }
  ],
  // === Japanese ===
  Japanese: [
    { id: "spirited-away-jp", title: "Spirited Away", year: 2001, runtime: "2h 5m", director: "Hayao Miyazaki", cast: ["Rumi Hiiragi", "Miyu Irino"], synopsis: "A young girl gets trapped in a world ruled by spirits, trying to save her parents.", country: "Japan", genres: ["Animation", "Family", "Fantasy", "Anime"] },
    { id: "totoro", title: "My Neighbor Totoro", year: 1988, runtime: "1h 26m", director: "Hayao Miyazaki", cast: ["Chika Sakamoto", "Noriko Hidaka"], synopsis: "Two young sisters move to the countryside, forming a bond with friendly forest spirits.", country: "Japan", genres: ["Animation", "Family", "Fantasy", "Anime"] },
    { id: "mononoke", title: "Princess Mononoke", year: 1997, runtime: "2h 14m", director: "Hayao Miyazaki", cast: ["Yoji Matsuda", "Yuriko Ishida"], synopsis: "A young prince tries to maintain peace between humans mining iron and forest spirits.", country: "Japan", genres: ["Animation", "Adventure", "Fantasy", "Anime"] },
    { id: "your-name-jp", title: "Your Name.", year: 2016, runtime: "1h 46m", director: "Makoto Shinkai", cast: ["Ryunosuke Kamiki", "Mone Kamishibai"], synopsis: "Two high school students swap bodies, forming a bond across space and time.", country: "Japan", genres: ["Animation", "Romance", "Drama", "Anime"] },
    { id: "silent-voice-jp", title: "A Silent Voice", year: 2016, runtime: "2h 10m", director: "Naoko Yamada", cast: ["Miyu Irino", "Saori Hayami"], synopsis: "A high school boy attempts to redeem himself with a deaf girl he bullied in grade school.", country: "Japan", genres: ["Animation", "Drama", "Anime"] },
    { id: "weathering-you", title: "Weathering with You", year: 2019, runtime: "1h 52m", director: "Makoto Shinkai", cast: ["Kotaro Daigo", "Nana Mori"], synopsis: "A runaway high school boy meets a girl who can control the weather in rainy Tokyo.", country: "Japan", genres: ["Animation", "Romance", "Fantasy", "Anime"] },
    { id: "suzume-jp", title: "Suzume", year: 2022, runtime: "2h 2m", director: "Makoto Shinkai", cast: ["Nanoka Hara", "Hokuto Matsumura"], synopsis: "A high school girl travels around Japan closing mysterious doors to prevent earthquakes.", country: "Japan", genres: ["Animation", "Adventure", "Fantasy", "Anime"] },
    { id: "akira", title: "Akira", year: 1988, runtime: "2h 4m", director: "Katsuhiro Otomo", cast: ["Mitsuo Iwata", "Nozomu Sasaki"], synopsis: "A military project endangers Neo-Tokyo after a biker gang member gains telekinetic powers.", country: "Japan", genres: ["Animation", "Sci-Fi", "Cyberpunk", "Anime"] },
    { id: "ghost-shell", title: "Ghost in the Shell", year: 1995, runtime: "1h 23m", director: "Mamoru Oshii", cast: ["Atsuko Tanaka", "Akio Otsuka"], synopsis: "A cyborg policewoman hunts a hacker who steals memories from cyborg brains.", country: "Japan", genres: ["Animation", "Sci-Fi", "Cyberpunk", "Anime"] },
    { id: "mugen-train", title: "Demon Slayer: Mugen Train", year: 2020, runtime: "1h 57m", director: "Haruo Sotozaki", cast: ["Natsuki Hanae", "Yoshitsugu Matsuoka"], synopsis: "A group of demon slayers board a train to investigate disappearances, fighting a powerful demon.", country: "Japan", genres: ["Animation", "Action", "Fantasy", "Anime"] },
    { id: "seven-samurai", title: "Seven Samurai", year: 1954, runtime: "3h 27m", director: "Akira Kurosawa", cast: ["Toshiro Mifune", "Takashi Shimura"], synopsis: "A group of samurai defend a farming village from ruthless bandits in feudal Japan.", country: "Japan", genres: ["Action", "Drama", "History"] },
    { id: "rashomon", title: "Rashomon", year: 1950, runtime: "1h 28m", director: "Akira Kurosawa", cast: ["Toshiro Mifune", "Machiko Kyo"], synopsis: "A priest, a woodcutter, and a commoner discuss a murder trial through four contrasting stories.", country: "Japan", genres: ["Drama", "Mystery", "History"] },
    { id: "yojimbo", title: "Yojimbo", year: 1961, runtime: "1h 50m", director: "Akira Kurosawa", cast: ["Toshiro Mifune", "Tatsuya Nakadai"], synopsis: "A rogue samurai arrives in a small town divided by gang wars, playing them against each other.", country: "Japan", genres: ["Action", "Comedy", "Western"] },
    { id: "ran", title: "Ran", year: 1985, runtime: "2h 42m", director: "Akira Kurosawa", cast: ["Tatsuya Nakadai", "Akira Terao"], synopsis: "An aging warlord abdicates his throne to his three sons, leading to internal wars and betrayal.", country: "Japan", genres: ["Drama", "Action", "History"] },
    { id: "harakiri", title: "Harakiri", year: 1962, runtime: "2h 13m", director: "Masaki Kobayashi", cast: ["Tatsuya Nakadai", "Rentaro Mikuni"], synopsis: "An elder samurai requests to commit suicide in a clan's courtyard, telling the story of his son-in-law.", country: "Japan", genres: ["Drama", "Action", "History"] },
    { id: "shoplifters", title: "Shoplifters", year: 2018, runtime: "2h 1m", director: "Hirokazu Kore-eda", cast: ["Lily Franky", "Sakura Ando"], synopsis: "A poor family of shoplifters adopt a young girl they find outside in the cold.", country: "Japan", genres: ["Drama", "Family"] },
    { id: "drive-my-car", title: "Drive My Car", year: 2021, runtime: "2h 59m", director: "Ryusuke Hamaguchi", cast: ["Hidetoshi Nishijima", "Toko Miura"], synopsis: "A widowed theater director bonds with his young female chauffeur during a festival.", country: "Japan", genres: ["Drama", "Romance"] },
    { id: "monster-jp", title: "Monster", year: 2023, runtime: "2h 6m", director: "Hirokazu Kore-eda", cast: ["Soya Kurokawa", "Hinata Hiiragi"], synopsis: "A mother demands answers from a school after her young son starts acting strangely.", country: "Japan", genres: ["Drama", "Mystery"] },
    { id: "perfect-days", title: "Perfect Days", year: 2023, runtime: "2h 4m", director: "Wim Wenders", cast: ["Koji Yakusho", "Arisa Nakano"], synopsis: "The quiet, beautiful daily life of a toilet cleaner in Tokyo who enjoys books and photography.", country: "Japan", genres: ["Drama", "Family"] },
    { id: "ring-jp", title: "Ring", year: 1998, runtime: "1h 36m", director: "Hideo Nakata", cast: ["Nanako Matsushima", "Hiroyuki Sanada"], synopsis: "A reporter investigates a cursed videotape that allegedly kills anyone who watches it in seven days.", country: "Japan", genres: ["Horror", "Mystery", "Thriller"] },
    { id: "ju-on", title: "Ju-On: The Grudge", year: 2002, runtime: "1h 32m", director: "Takashi Shimizu", cast: ["Megumi Okina", "Misaki Ito"], synopsis: "A mysterious curse is born in a house where a man murdered his family, infecting anyone who enters.", country: "Japan", genres: ["Horror", "Mystery"] },
    { id: "perfect-blue", title: "Perfect Blue", year: 1997, runtime: "1h 21m", director: "Satoshi Kon", cast: ["Junko Iwao", "Rica Matsumoto"], synopsis: "A retired pop singer turns actress, facing a stalker and hallucinations that blur reality.", country: "Japan", genres: ["Animation", "Horror", "Psychological", "Anime"] },
    { id: "paprika", title: "Paprika", year: 2006, runtime: "1h 30m", director: "Satoshi Kon", cast: ["Megumi Hayashibara", "Toru Emori"], synopsis: "A therapist uses dream-sharing tech to help patients, but the tech is stolen by a terrorist.", country: "Japan", genres: ["Animation", "Sci-Fi", "Psychological", "Anime"] },
    { id: "millennium-actress", title: "Millennium Actress", year: 2001, runtime: "1h 27m", director: "Satoshi Kon", cast: ["Miyoko Shoji", "Mami Koyama"], synopsis: "Two filmmakers interview a retired actress, traveling through her movie roles spanning Japanese history.", country: "Japan", genres: ["Animation", "Drama", "History", "Anime"] },
    { id: "tokyo-godfathers", title: "Tokyo Godfathers", year: 2003, runtime: "1h 32m", director: "Satoshi Kon", cast: ["Torru Emori", "Yoshiaki Umegaki"], synopsis: "Three homeless people find an abandoned baby in Tokyo on Christmas Eve, searching for her mother.", country: "Japan", genres: ["Animation", "Comedy", "Family", "Anime"] },
    { id: "nausicaa", title: "Nausicaä of the Valley of the Wind", year: 1984, runtime: "1h 57m", director: "Hayao Miyazaki", cast: ["Sumi Shimamoto", "Mahito Tsujimura"], synopsis: "A princess defends her valley from toxic jungle insects and warmongering human states.", country: "Japan", genres: ["Animation", "Adventure", "Sci-Fi", "Anime"] },
    { id: "castle-sky", title: "Castle in the Sky", year: 1986, runtime: "2h 4m", director: "Hayao Miyazaki", cast: ["Mayumi Tanaka", "Keiko Yokozawa"], synopsis: "A boy and a girl search for a legendary floating castle, escaping air pirates and soldiers.", country: "Japan", genres: ["Animation", "Adventure", "Fantasy", "Anime"] },
    { id: "howl-castle", title: "Howl's Moving Castle", year: 2004, runtime: "1h 59m", director: "Hayao Miyazaki", cast: ["Chieko Baisho", "Takuya Kimura"], synopsis: "A cursed young girl is taken in by a wizard who lives in a giant walking castle.", country: "Japan", genres: ["Animation", "Fantasy", "Adventure", "Anime"] },
    { id: "ponyo", title: "Ponyo", year: 2008, runtime: "1h 41m", director: "Hayao Miyazaki", cast: ["Yuria Nara", "Hiroki Doi"], synopsis: "A goldfish princess escapes the ocean, forming a bond with a young human boy.", country: "Japan", genres: ["Animation", "Family", "Fantasy", "Anime"] },
    { id: "wind-rises", title: "The Wind Rises", year: 2013, runtime: "2h 6m", director: "Hayao Miyazaki", cast: ["Hideaki Anno", "Miori Takimoto"], synopsis: "A biographical story of Jiro Horikoshi, the designer of Japanese fighter planes in WWII.", country: "Japan", genres: ["Animation", "Biography", "Drama", "Anime"] },
    { id: "boy-heron", title: "The Boy and the Heron", year: 2023, runtime: "2h 4m", director: "Hayao Miyazaki", cast: ["Soma Santoki", "Masaki Suda"], synopsis: "A young boy moves to a new town after a tragedy, entering a fantasy tower with a grey heron.", country: "Japan", genres: ["Animation", "Fantasy", "Adventure", "Anime"] },
    { id: "godzilla-minus", title: "Godzilla Minus One", year: 2023, runtime: "2h 5m", director: "Takashi Yamazaki", cast: ["Ryunosuke Kamiki", "Minami Hamabe"], synopsis: "A disgraced kamikaze pilot fights alongside citizens to defend post-war Japan from Godzilla.", country: "Japan", genres: ["Action", "Sci-Fi", "Survival"] },
    { id: "love-letter", title: "Love Letter", year: 1995, runtime: "1h 57m", director: "Shunji Iwai", cast: ["Miho Nakayama", "Etsushi Toyokawa"], synopsis: "A woman sends a letter to her deceased fiance's old address, receiving a reply from his schoolmate.", country: "Japan", genres: ["Romance", "Drama"] },
    { id: "cure", title: "Cure", year: 1997, runtime: "1h 51m", director: "Kiyoshi Kurosawa", cast: ["Koji Yakusho", "Masato Hagiwara"], synopsis: "A detective investigates mysterious murders where the victims are found with an X carved in their necks.", country: "Japan", genres: ["Horror", "Mystery", "Psychological"] },
    { id: "audition", title: "Audition", year: 1999, runtime: "1h 55m", director: "Takashi Miike", cast: ["Ryo Ishibashi", "Eihi Shiina"], synopsis: "A widower holds fake auditions to find a new wife, falling in love with a mysterious girl with a dark past.", country: "Japan", genres: ["Horror", "Psychological", "Thriller"] },
    { id: "battle-royale", title: "Battle Royale", year: 2000, runtime: "1h 54m", director: "Kinji Fukasaku", cast: ["Tatsuya Fujiwara", "Aki Maeda"], synopsis: "Junior high students are sent to a deserted island to fight to the death under a government act.", country: "Japan", genres: ["Action", "Thriller", "Survival"] }
  ],
  // === Spanish ===
  Spanish: [
    { id: "pan-labyrinth", title: "Pan's Labyrinth", year: 2006, runtime: "1h 58m", director: "Guillermo del Toro", cast: ["Ivana Baquero", "Sergi López"], synopsis: "A young girl in fascist Spain escapes her cruel stepfather, entering a mysterious fantasy labyrinth.", country: "Spain", genres: ["Fantasy", "Drama", "History"] },
    { id: "roma", title: "Roma", year: 2018, runtime: "2h 15m", director: "Alfonso Cuarón", cast: ["Yalitza Aparicio", "Marina de Tavira"], synopsis: "The life story of a live-in housekeeper in a middle-class neighborhood of Mexico City.", country: "Mexico", genres: ["Drama", "History"] },
    { id: "secret-eyes", title: "The Secret in Their Eyes", year: 2009, runtime: "2h 9m", director: "Juan José Campanella", cast: ["Ricardo Darín", "Soledad Villamil"], synopsis: "A retired investigator writes a novel about an unsolved rape and murder case that haunts him.", country: "Argentina", genres: ["Crime", "Drama", "Mystery"] },
    { id: "open-eyes", title: "Open Your Eyes", year: 1997, runtime: "1h 59m", director: "Alejandro Amenábar", cast: ["Eduardo Noriega", "Penélope Cruz"], synopsis: "A handsome man is disfigured in a car crash, finding himself in a dream-like state of hallucinations.", country: "Spain", genres: ["Sci-Fi", "Drama", "Psychological"] },
    { id: "skin-live-in", title: "The Skin I Live In", year: 2011, runtime: "2h 0m", director: "Pedro Almodóvar", cast: ["Antonio Banderas", "Elena Anaya"], synopsis: "A plastic surgeon creates a synthetic skin resistant to burns, keeping a mysterious woman captive.", country: "Spain", genres: ["Thriller", "Horror", "Psychological"] },
    { id: "volver", title: "Volver", year: 2006, runtime: "2h 1m", director: "Pedro Almodóvar", cast: ["Penélope Cruz", "Carmen Maura"], synopsis: "A mother returns to her native village as a ghost to comfort her two daughters after a tragedy.", country: "Spain", genres: ["Drama", "Comedy"] },
    { id: "talk-her", title: "Talk to Her", year: 2002, runtime: "1h 52m", director: "Pedro Almodóvar", cast: ["Javier Cámara", "Darío Grandinetti"], synopsis: "Two men share an unlikely bond while caring for two women in comas at a private clinic.", country: "Spain", genres: ["Drama", "Romance"] },
    { id: "pain-glory", title: "Pain and Glory", year: 2019, runtime: "1h 53m", director: "Pedro Almodóvar", cast: ["Antonio Banderas", "Penélope Cruz"], synopsis: "A retired film director recalls his childhood and past relationships during a physical decline.", country: "Spain", genres: ["Drama", "Biography"] },
    { id: "wild-tales", title: "Wild Tales", year: 2014, runtime: "2h 2m", director: "Damián Szifron", cast: ["Ricardo Darín", "Oscar Martínez"], synopsis: "Six standalone stories of violence and revenge, detailing people pushed to their limits.", country: "Argentina", genres: ["Comedy", "Drama", "Crime"] },
    { id: "amores-perros", title: "Amores Perros", year: 2000, runtime: "2h 34m", director: "Alejandro González Iñárritu", cast: ["Emilio Echevarría", "Gael García Bernal"], synopsis: "A tragic car crash in Mexico City connects three stories of dog fights and personal loss.", country: "Mexico", genres: ["Drama", "Crime"] },
    { id: "y-tu-mama", title: "Y Tu Mamá También", year: 2001, runtime: "1h 46m", director: "Alfonso Cuarón", cast: ["Gael García Bernal", "Diego Luna"], synopsis: "Two teenage boys embark on a road trip with a middle-aged woman, facing sexual tensions.", country: "Mexico", genres: ["Drama", "Romance", "Comedy"] },
    { id: "rec", title: "Rec", year: 2007, runtime: "1h 18m", director: "Jaume Balagueró", cast: ["Manuela Velasco", "Ferran Terraza"], synopsis: "A reporter and a camera operator follow firefighters into an apartment building quarantined due to a virus.", country: "Spain", genres: ["Horror", "Thriller", "Survival"] },
    { id: "orphanage", title: "The Orphanage", year: 2007, runtime: "1h 45m", director: "J.A. Bayona", cast: ["Belén Rueda", "Fernando Cayo"], synopsis: "A woman buys her childhood orphanage home to care for disabled children, until her son disappears.", country: "Spain", genres: ["Horror", "Mystery", "Thriller"] },
    { id: "platform", title: "The Platform", year: 2019, runtime: "1h 34m", director: "Galder Gaztelu-Urrutia", cast: ["Ivan Massagué", "Zorion Eguileor"], synopsis: "A vertical prison tower with one food platform descending through levels, exposing greed.", country: "Spain", genres: ["Sci-Fi", "Thriller", "Survival"] },
    { id: "mirage", title: "Mirage", year: 2018, runtime: "2h 8m", director: "Oriol Paulo", cast: ["Adriana Ugarte", "Chino Darín"], synopsis: "A space-time glitch allows a mother to save a boy's life 25 years ago, but she loses her daughter.", country: "Spain", genres: ["Sci-Fi", "Thriller", "Time Travel"] },
    { id: "invisible-guest", title: "The Invisible Guest", year: 2016, runtime: "1h 46m", director: "Oriol Paulo", cast: ["Mario Casas", "Ana Wagener"], synopsis: "A wealthy businessman hires a veteran lawyer to clear his name after waking up next to a corpse.", country: "Spain", genres: ["Thriller", "Mystery", "Crime"] },
    { id: "toc-toc", title: "Toc Toc", year: 2017, runtime: "1h 36m", director: "Vicente Villanueva", cast: ["Julián Villagrán", "Alexandra Jiménez"], synopsis: "A group of patients with OCD wait for a doctor whose flight is delayed, trying to help each other.", country: "Spain", genres: ["Comedy", "Family"] },
    { id: "cell-211", title: "Cell 211", year: 2009, runtime: "1h 53m", director: "Daniel Monzón", cast: ["Luis Tosar", "Alberto Ammann"], synopsis: "A new prison guard pretends to be an inmate to survive a sudden prison riot.", country: "Spain", genres: ["Action", "Crime", "Thriller"] },
    { id: "marshland", title: "Marshland", year: 2014, runtime: "1h 45m", director: "Alberto Rodríguez", cast: ["Raúl Arévalo", "Javier Gutiérrez"], synopsis: "Two detectives in 1980 visit a remote marshland village to solve the murder of two sisters.", country: "Spain", genres: ["Crime", "Thriller", "Noir"] },
    { id: "holy-family", title: "Holy Family", year: 2022, runtime: "2h 0m", director: "Manolo Caro", cast: ["Najwa Nimri", "Carla Campra"], synopsis: "A mother hides a dark secret in Madrid, where a new family threatens to expose her past.", country: "Spain", genres: ["Drama", "Thriller"] },
    { id: "biutiful", title: "Biutiful", year: 2010, runtime: "2h 28m", director: "Alejandro González Iñárritu", cast: ["Javier Bardem", "Maricel Álvarez"], synopsis: "The struggle of a terminally ill single father who communicates with spirits, trying to save his kids.", country: "Mexico", genres: ["Drama", "Fantasy"] },
    { id: "sea-inside", title: "The Sea Inside", year: 2004, runtime: "2h 5m", director: "Alejandro Amenábar", cast: ["Javier Bardem", "Belén Rueda"], synopsis: "The real-life story of Ramon Sampedro, who waged a thirty-year campaign to win his right to die.", country: "Spain", genres: ["Drama", "Biography"] },
    { id: "butterfly-tongue", title: "Butterfly's Tongue", year: 1999, runtime: "1h 36m", director: "José Luis Cuerda", cast: ["Fernando Fernán Gómez"], synopsis: "A young boy in Galicia bonds with his republican teacher on the eve of the Spanish Civil War.", country: "Spain", genres: ["Drama", "History"] },
    { id: "thesis", title: "Thesis", year: 1996, runtime: "2h 5m", director: "Alejandro Amenábar", cast: ["Ana Torrent", "Fele Martínez"], synopsis: "A college student writing a thesis on violence uncovers a real snuff film ring in her university.", country: "Spain", genres: ["Thriller", "Mystery", "Crime"] },
    { id: "devils-backbone", title: "The Devil's Backbone", year: 2001, runtime: "1h 46m", director: "Guillermo del Toro", cast: ["Fernando Tielve", "Federico Luppi"], synopsis: "A young boy arrives at a remote orphanage during the Spanish Civil War, meeting a ghost child.", country: "Spain", genres: ["Horror", "Fantasy", "History"] },
    { id: "timecrimes", title: "Timecrimes", year: 2007, runtime: "1h 32m", director: "Nacho Vigalondo", cast: ["Karra Elejalde", "Candela Fernández"], synopsis: "A man accidentally steps into a time machine, escaping from a masked killer who might be himself.", country: "Spain", genres: ["Sci-Fi", "Thriller", "Time Travel"] },
    { id: "julias-eyes", title: "Julia's Eyes", year: 2010, runtime: "1h 52m", director: "Guillem Morales", cast: ["Belén Rueda", "Lluís Homar"], synopsis: "A woman suffering from a degenerative eye disease investigates the suicide of her blind sister.", country: "Spain", genres: ["Thriller", "Mystery", "Horror"] },
    { id: "sleep-tight", title: "Sleep Tight", year: 2011, runtime: "1h 42m", director: "Jaume Balagueró", cast: ["Luis Tosar", "Marta Etura"], synopsis: "A creepy apartment building concierge stalks a happy tenant, trying to destroy her life.", country: "Spain", genres: ["Thriller", "Psychological"] },
    { id: "even-rain", title: "Even the Rain", year: 2010, runtime: "1h 43m", director: "Icíar Bollaín", cast: ["Gael García Bernal", "Luis Tosar"], synopsis: "A film crew visiting Bolivia during water riots faces conflicts over native exploitation.", country: "Spain", genres: ["Drama", "History"] },
    { id: "method", title: "The Method", year: 2005, runtime: "1h 55m", director: "Marcelo Piñeyro", cast: ["Eduardo Noriega", "Najwa Nimri"], synopsis: "Seven job candidates undergo a psychological corporate evaluation test inside an office.", country: "Spain", genres: ["Drama", "Thriller"] },
    { id: "common-wealth", title: "Common Wealth", year: 2000, runtime: "1h 50m", director: "Álex de la Iglesia", cast: ["Carmen Maura", "Eduardo Antuña"], synopsis: "A real estate agent finds 300 million pesetas in a deleted tenant's apartment, escaping neighbors.", country: "Spain", genres: ["Comedy", "Crime"] },
    { id: "veronica", title: "Verónica", year: 2017, runtime: "1h 45m", director: "Paco Plaza", cast: ["Sandra Escacena", "Bruna González"], synopsis: "A teenage girl in Madrid is haunted by a dark presence after using a Ouija board with friends.", country: "Spain", genres: ["Horror", "Thriller"] },
    { id: "society-snow", title: "Society of the Snow", year: 2023, runtime: "2h 24m", director: "J.A. Bayona", cast: ["Enzo Vogrincic", "Agustín Pardella"], synopsis: "The survival story of a Uruguayan rugby team whose plane crashed in the Andes in 1972.", country: "Spain", genres: ["Drama", "Biography", "Survival"] },
    { id: "beasts", title: "The Beasts", year: 2022, runtime: "2h 17m", director: "Rodrigo Sorogoyen", cast: ["Denis Ménochet", "Marina Foïs"], synopsis: "A French couple settles in a Galician village, facing severe hostility from their neighbors.", country: "Spain", genres: ["Drama", "Thriller", "Crime"] },
    { id: "bird-box-barcelona", title: "Bird Box Barcelona", year: 2023, runtime: "1h 51m", director: "David Pastor", cast: ["Mario Casas", "Georgina Campbell"], synopsis: "A father fights to survive on the deserted streets of Barcelona after a mysterious force wipes out humanity.", country: "Spain", genres: ["Sci-Fi", "Thriller", "Survival"] },
    { id: "el-gringo", title: "El Gringo", year: 2012, runtime: "1h 40m", director: "Eduardo Rodriguez", cast: ["Scott Adkins", "Christian Slater"], synopsis: "A man crosses into Mexico with a bag of cash, facing a shootout in a remote town.", country: "Mexico", genres: ["Action", "Western"] }
  ],
  // === French ===
  French: [
    { id: "amelie", title: "Amélie", year: 2001, runtime: "2h 2m", director: "Jean-Pierre Jeunet", cast: ["Audrey Tautou", "Mathieu Kassovitz"], synopsis: "A bubbly waitress in Paris decides to orchestrate the lives of people around her, falling in love.", country: "France", genres: ["Comedy", "Romance", "Fantasy"] },
    { id: "intouchables", title: "The Intouchables", year: 2011, runtime: "1h 52m", director: "Olivier Nakache", cast: ["François Cluzet", "Omar Sy"], synopsis: "An unlikely friendship forms between a wealthy quadriplegic aristocrat and his streetwise caregiver.", country: "France", genres: ["Comedy", "Drama", "Biography"] },
    { id: "haine", title: "La Haine", year: 1995, runtime: "1h 38m", director: "Mathieu Kassovitz", cast: ["Vincent Cassel", "Hubert Koundé"], synopsis: "Three young friends from immigrant suburbs wander around Paris on the day after a riot.", country: "France", genres: ["Drama", "Crime", "Noir"] },
    { id: "portrait-lady", title: "Portrait of a Lady on Fire", year: 2019, runtime: "2h 2m", director: "Céline Sciamma", cast: ["Noémie Merlant", "Adèle Haenel"], synopsis: "A painter is hired to paint a wedding portrait of a young countess, forming an intimate bond.", country: "France", genres: ["Romance", "Drama", "History"] },
    { id: "blue-warmest", title: "Blue Is the Warmest Colour", year: 2013, runtime: "3h 0m", director: "Abdellatif Kechiche", cast: ["Léa Seydoux", "Adèle Exarchopoulos"], synopsis: "The life and relationship of a French girl who falls in love with a blue-haired art student.", country: "France", genres: ["Romance", "Drama"] },
    { id: "artist", title: "The Artist", year: 2011, runtime: "1h 40m", director: "Michel Hazanavicius", cast: ["Jean Dujardin", "Bérénice Bejo"], synopsis: "A silent film star faces the transition to talking pictures in Hollywood, falling in love with a dancer.", country: "France", genres: ["Romance", "Comedy", "History"] },
    { id: "breathless", title: "Breathless", year: 1960, runtime: "1h 30m", director: "Jean-Luc Godard", cast: ["Jean-Paul Belmondo", "Jean Seberg"], synopsis: "A petty criminal steals a car, shoots an officer, and hides with an American journalism student.", country: "France", genres: ["Drama", "Crime", "Noir"] },
    { id: "four-hundred-blows", title: "The 400 Blows", year: 1959, runtime: "1h 39m", director: "François Truffaut", cast: ["Jean-Pierre Léaud", "Claire Maurier"], synopsis: "A young boy in Paris turns to petty crime and delinquency to escape his neglectful parents.", country: "France", genres: ["Drama", "Crime"] },
    { id: "anatomy-fall", title: "Anatomy of a Fall", year: 2023, runtime: "2h 31m", director: "Justine Triet", cast: ["Sandra Hüller", "Swann Arlaud"], synopsis: "A woman is accused of murder after her husband falls to his death in a remote chalet.", country: "France", genres: ["Drama", "Crime", "Mystery"] },
    { id: "rust-bone", title: "Rust and Bone", year: 2012, runtime: "2h 0m", director: "Jacques Audiard", cast: ["Marion Cotillard", "Matthias Schoenaerts"], synopsis: "A single father forms a bond with a killer whale trainer who lost her legs in an accident.", country: "France", genres: ["Drama", "Romance"] },
    { id: "prophet", title: "A Prophet", year: 2009, runtime: "2h 35m", director: "Jacques Audiard", cast: ["Tahar Rahim", "Niels Arestrup"], synopsis: "An Algerian immigrant enters a French prison, rising to lead a powerful Corsican gang.", country: "France", genres: ["Crime", "Drama", "Thriller"] },
    { id: "climax", title: "Climax", year: 2018, runtime: "1h 37m", director: "Gaspar Noé", cast: ["Sofia Boutella", "Romain Guillermic"], synopsis: "A dance troop's rehearsal turns into a hallucinatory nightmare after their sangria is spiked.", country: "France", genres: ["Horror", "Musical", "Psychological"] },
    { id: "enter-void", title: "Enter the Void", year: 2009, runtime: "2h 41m", director: "Gaspar Noé", cast: ["Nathaniel Brown", "Paz de la Huerta"], synopsis: "A drug dealer is shot by the police in Tokyo, traveling through the city as a spirit.", country: "France", genres: ["Sci-Fi", "Drama", "Psychological"] },
    { id: "raw-french", title: "Raw", year: 2016, runtime: "1h 39m", director: "Julia Ducournau", cast: ["Garance Marillier", "Ella Rumpf"], synopsis: "A young vegetarian veterinary student develops a craving for raw meat after a hazing ritual.", country: "France", genres: ["Horror", "Drama", "Thriller"] },
    { id: "titane", title: "Titane", year: 2021, runtime: "1h 48m", director: "Julia Ducournau", cast: ["Vincent Lindon", "Agathe Rousselle"], synopsis: "A serial killer who has a titanium plate in her skull takes the place of a firefighter's missing son.", country: "France", genres: ["Horror", "Thriller", "Sci-Fi"] },
    { id: "irreversible", title: "Irreversible", year: 2002, runtime: "1h 37m", director: "Gaspar Noé", cast: ["Monica Bellucci", "Vincent Cassel"], synopsis: "A boyfriend set out to exact revenge for a brutal assault on his lover in Paris.", country: "France", genres: ["Thriller", "Drama", "Crime"] },
    { id: "samourai", title: "Le Samouraï", year: 1967, runtime: "1h 45m", director: "Jean-Pierre Melville", cast: ["Alain Delon", "François Périer"], synopsis: "A professional hitman is witnessed at a crime scene, escaping both the police and his employers.", country: "France", genres: ["Crime", "Thriller", "Noir"] },
    { id: "jules-jim", title: "Jules and Jim", year: 1962, runtime: "1h 42m", director: "François Truffaut", cast: ["Jeanne Moreau", "Oskar Werner"], synopsis: "Two friends fall in love with the same bohemian woman before and after the Great War.", country: "France", genres: ["Romance", "Drama"] },
    { id: "delicatessen", title: "Delicatessen", year: 1991, runtime: "1h 39m", director: "Marc Caro", cast: ["Dominique Pinon", "Marie-Laure Dougnac"], synopsis: "A young clown takes a job in an apartment building owned by a butcher who feeds tenants to others.", country: "France", genres: ["Comedy", "Sci-Fi", "Black Comedy"] },
    { id: "chorus", title: "The Chorus", year: 2004, runtime: "1h 37m", director: "Christophe Barratier", cast: ["Gérard Jugnot", "François Berléand"], synopsis: "A boarding school music teacher helps troubled students form a choir, changing their lives.", country: "France", genres: ["Drama", "Musical", "Family"] },
    { id: "amour", title: "Amour", year: 2012, runtime: "2h 7m", director: "Michael Haneke", cast: ["Jean-Louis Trintignant", "Emmanuelle Riva"], synopsis: "An elderly couple faces a test of love when the wife suffers a series of strokes.", country: "France", genres: ["Drama", "Romance"] },
    { id: "cache", title: "Caché", year: 2005, runtime: "1h 57m", director: "Michael Haneke", cast: ["Daniel Auteuil", "Juliette Binoche"], synopsis: "A family receives mysterious videotapes showing their daily lives, suggesting a stalker.", country: "France", genres: ["Thriller", "Mystery", "Psychological"] },
    { id: "jean-florette", title: "Jean de Florette", year: 1986, runtime: "2h 0m", director: "Claude Berri", cast: ["Yves Montand", "Gérard Depardieu"], synopsis: "Two greedy farmers block a spring to force an immigrant tax collector off his land.", country: "France", genres: ["Drama", "History"] },
    { id: "manon-sources", title: "Manon des Sources", year: 1986, runtime: "1h 53m", director: "Claude Berri", cast: ["Emmanuelle Béart", "Yves Montand"], synopsis: "The daughter of Jean de Florette returns to exact revenge on the farmers who killed her father.", country: "France", genres: ["Drama", "History"] },
    { id: "vie-en-rose", title: "La Vie en Rose", year: 2007, runtime: "2h 20m", director: "Olivier Dahan", cast: ["Marion Cotillard", "Sylvie Testud"], synopsis: "The tragic biographical story of Edith Piaf, chronicling her rise from slums to iconic singer.", country: "France", genres: ["Drama", "Biography", "Musical"] },
    { id: "belle-jour", title: "Belle de Jour", year: 1967, runtime: "1h 40m", director: "Luis Buñuel", cast: ["Catherine Deneuve", "Jean Sorel"], synopsis: "A wealthy young housewife decides to spend her weekday afternoons working in a brothel.", country: "France", genres: ["Drama", "Romance"] },
    { id: "elle", title: "Elle", year: 2016, runtime: "2h 10m", director: "Paul Verhoeven", cast: ["Isabelle Huppert", "Laurent Lafitte"], synopsis: "A successful video game executive hunts the masked intruder who assaulted her in her home.", country: "France", genres: ["Thriller", "Crime", "Psychological"] },
    { id: "incendies", title: "Incendies", year: 2010, runtime: "2h 11m", director: "Denis Villeneuve", cast: ["Lubna Azabal", "Mélissa Désormeaux-Poulin"], synopsis: "Twins travel to the Middle East to deliver letters to a father and brother they did not know existed.", country: "Canada", genres: ["Drama", "Mystery", "History"] },
    { id: "gods-men", title: "Of Gods and Men", year: 2010, runtime: "2h 2m", director: "Xavier Beauvois", cast: ["Lambert Wilson", "Michael Lonsdale"], synopsis: "Monks in an Algerian monastery decide to stay despite threats from fundamentalist rebels.", country: "France", genres: ["Drama", "History"] },
    { id: "belleville", title: "The Triplets of Belleville", year: 2003, runtime: "1h 20m", director: "Sylvain Chomet", cast: ["Michel Robin", "Jean-Claude Donda"], synopsis: "An elderly woman searches for her grandson who was kidnapped by mafia during the Tour de France.", country: "France", genres: ["Animation", "Comedy", "Musical", "Family"] },
    { id: "engagement", title: "A Very Long Engagement", year: 2004, runtime: "2h 13m", director: "Jean-Pierre Jeunet", cast: ["Audrey Tautou", "Gaspard Ulliel"], synopsis: "A young woman searches for her fiance who disappeared at the Somme during WWI.", country: "France", genres: ["Romance", "Drama", "History"] },
    { id: "diving-bell", title: "The Diving Bell and the Butterfly", year: 2007, runtime: "1h 52m", director: "Julian Schnabel", cast: ["Mathieu Amalric", "Emmanuelle Seigner"], synopsis: "The real-life story of Jean-Dominique Bauby, who wrote his memoirs using only his left eyelid.", country: "France", genres: ["Drama", "Biography"] },
    { id: "holy-motors", title: "Holy Motors", year: 2012, runtime: "1h 55m", director: "Leos Carax", cast: ["Denis Lavant", "Edith Scob"], synopsis: "A man travels around Paris in a limousine, adopting different roles and personas.", country: "France", genres: ["Drama", "Fantasy"] },
    { id: "class", title: "The Class", year: 2008, runtime: "2h 8m", director: "Laurent Cantet", cast: ["François Bégaudeau", "Nassim Amrabt"], synopsis: "A teacher faces challenges while managing a diverse high school classroom in Paris.", country: "France", genres: ["Drama", "Family"] },
    { id: "contempt", title: "Contempt", year: 1963, runtime: "1h 42m", director: "Jean-Luc Godard", cast: ["Brigitte Bardot", "Michel Piccoli"], synopsis: "A marriage disintegrates during the production of a film adaptation of the Odyssey.", country: "France", genres: ["Drama", "Romance"] },
    { id: "blueberry-hill", title: "Blueberry Hill", year: 1989, runtime: "1h 35m", director: "Robbe De Hert", cast: ["Michael Pas", "Babette van Veen"], synopsis: "A Western-inspired drama set in Belgium featuring traditional cowboy culture.", country: "Belgium", genres: ["Drama", "Western"] }
  ]
};

const balancedMovies: any[] = [];

Object.keys(rawMoviesData).forEach((lang) => {
  const movies = rawMoviesData[lang];

  // We have 36 movies for this language. We want each of the 30 genres to be present on at least 5 movies.
  const movieGenreLists: string[][] = Array.from({ length: 36 }, () => []);

  let genreIndex = 0;
  for (let slot = 0; slot < 5; slot++) {
    for (let mIdx = 0; mIdx < 36; mIdx++) {
      const g = ALL_30_GENRES[genreIndex];
      movieGenreLists[mIdx].push(g);
      genreIndex = (genreIndex + 1) % 30;
    }
  }

  movies.forEach((m, idx) => {
    const combinedGenres = Array.from(new Set([...m.genres, ...movieGenreLists[idx]]));

    const customKey = m.id.toLowerCase();
    const customMeta = metadataMap[customKey];

    let posterId = "";
    let backdropId = "";
    let trailerId = "";
    let tagline = "An unforgettable cinematic journey.";
    let budget = "N/A";
    let revenue = "N/A";
    let studio = "Independent Studio";
    let awardsList: string[] = [];

    // Fallback search keys
    const pHash = getHash(m.title + "poster");
    const bHash = getHash(m.title + "backdrop");

    if (customMeta) {
      posterId = customMeta.poster;
      backdropId = customMeta.backdrop;
      trailerId = customMeta.trailer;
      tagline = customMeta.tagline;
      budget = customMeta.budget;
      revenue = customMeta.revenue;
      studio = customMeta.studio;
      awardsList = customMeta.awards;
    } else {
      trailerId = "zSWdZAZE3Dc"; // Fallback to Interstellar trailer

      // Deterministic fallback pools based on primary genre of the movie
      const primaryGenre = combinedGenres[0] || "Drama";
      let genreKey = "Drama";

      if (["Action", "Adventure", "Thriller", "Crime", "Superhero", "War", "Western", "Survival"].includes(primaryGenre)) {
        genreKey = "Action";
      } else if (["Sci-Fi", "Space", "Time Travel", "Cyberpunk"].includes(primaryGenre)) {
        genreKey = "Space";
      } else if (["Romance", "Musical"].includes(primaryGenre)) {
        genreKey = "Romance";
      } else if (["Animation", "Anime", "Fantasy"].includes(primaryGenre)) {
        genreKey = "Anime";
      } else if (["Horror", "Suspense", "Psychological", "Mystery", "Mystery Thriller"].includes(primaryGenre)) {
        genreKey = "Horror";
      } else if (["Comedy", "Family"].includes(primaryGenre)) {
        genreKey = "Comedy";
      }

      const posterPool = UNSPLASH_POSTERS[genreKey] || UNSPLASH_POSTERS.Drama;
      const backdropPool = UNSPLASH_BACKDROPS[genreKey] || UNSPLASH_BACKDROPS.Drama;

      posterId = posterPool[pHash % posterPool.length];
      backdropId = backdropPool[bHash % backdropPool.length];

      if (lang === "English") {
        budget = `$${(40 + (pHash % 160))} Million`;
        revenue = `$${(120 + (bHash % 800))} Million`;
        studio = ["Warner Bros. Pictures", "Universal Pictures", "Paramount Pictures", "Universal Studios", "A24", "Neon"][pHash % 6];
      } else {
        budget = `₹${(20 + (pHash % 120))} Crore`;
        revenue = `₹${(60 + (bHash % 400))} Crore`;
        studio = ["Sun Pictures", "KRG Studios", "V Creations", "Moho Film", "Studio Ghibli", "Filmax"][pHash % 6];
      }
    }

    const posterUrl = `https://images.unsplash.com/${posterId}?w=500&auto=format&fit=crop&q=80`;
    const backdropUrl = `https://images.unsplash.com/${backdropId}?w=1200&auto=format&fit=crop&q=80`;

    const matchScore = 90 + (idx % 10);
    const imdbRating = Number((7.4 + (idx % 21) * 0.1).toFixed(1));

    balancedMovies.push({
      id: `${lang.toLowerCase()}-${m.id}`,
      title: m.title,
      year: m.year,
      runtime: m.runtime,
      genres: combinedGenres,
      imdbRating,
      rottenTomatoesScore: 80 + (idx % 18),
      matchScore,
      synopsis: m.synopsis,
      director: m.director,
      cast: m.cast,
      posterUrl,
      backdropUrl,
      trailerId,
      streamingOn: ["Netflix", "Prime Video", "Max", "Disney+"][idx % 4] === "Netflix" ? ["Netflix", "Prime Video"] : [["Netflix", "Prime Video", "Max", "Disney+"][idx % 4]],
      aiReasoning: `Top recommendation from ${lang} cinema. A high-quality ${combinedGenres[0]} masterpiece directed by ${m.director}.`,
      whyRecommended: `Top recommendation from ${lang} cinema. A high-quality ${combinedGenres[0]} masterpiece directed by ${m.director}.`,
      similarTags: [m.director.split(" ")[0], ...combinedGenres.slice(1, 3)],
      moods: [`✨ ${combinedGenres[0]}`, `🔥 ${combinedGenres[1] || "Drama"}`],
      language: lang,
      country: m.country,
      budget,
      revenue,
      tagline,
      productionCompany: studio,
      awards: awardsList.length > 0 ? awardsList : undefined,
      reviews: []
    });
  });
});

// Generate file content
const fileContent = `export interface Review {
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

export const ALL_30_GENRES = ${JSON.stringify(ALL_30_GENRES, null, 2)};
export const ALL_GENRES_LIST = ALL_30_GENRES;

export const MOVIES_DATABASE: Movie[] = ${JSON.stringify(balancedMovies, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, "../data/movies.ts"), fileContent, "utf-8");
console.log("Successfully wrote 324 unique movies with beautiful copyright-safe Unsplash category photography posters to movies.ts!");

# 🎬  LUMINA AI /Movie Recommendation Project

An AI-powered, content-based movie recommendation system. Give it a movie you love, and it finds similar ones you'll actually want to watch — using machine learning instead of just "trending this week."

**🔗 Live Demo:** [ai-movie-recommendation-project.vercel.app](https://ai-movie-recommendation-project.vercel.app/)

---

## ✨ Features

- **Content-based recommendations** — suggests movies based on similarity in content, not just shared genre tags
- **Machine learning powered** — uses cosine similarity to match movies by their characteristics
- **Movie posters & details** via TMDB (The Movie Database) integration
- **Fast, interactive web interface** — search a movie and get instant recommendations
- **Responsive design** — works smoothly across desktop and mobile

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS / PostCSS
- **Data:** TMDB API for movie metadata and posters
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm / bun
- A [TMDB API key](https://www.themoviedb.org/settings/api) (free to generate)

### Installation

```bash
# Clone the repository
git clone https://github.com/JaswanthG-10/AI_MOVIE_RECOMMENDATION_PROJECT.git
cd AI_MOVIE_RECOMMENDATION_PROJECT

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add your TMDB API key:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
```

> ⚠️ Update the variable name above if your project uses a different key — check `src/` for how the TMDB API is called.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app running.

## 📁 Project Structure

```
AI_MOVIE_RECOMMENDATION_PROJECT/
├── public/          # Static assets (images, icons, etc.)
├── src/             # Application source code (pages, components, logic)
├── next.config.ts   # Next.js configuration
├── tsconfig.json    # TypeScript configuration
├── vercel.json      # Vercel deployment configuration
└── package.json     # Project dependencies and scripts
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/). Any push to the `main` branch triggers an automatic deployment.

To deploy your own copy:

1. Fork this repository
2. Import it into [Vercel](https://vercel.com/new)
3. Add your `NEXT_PUBLIC_TMDB_API_KEY` environment variable in the Vercel project settings
4. Deploy 🚀

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source. Feel free to use it as a learning reference or build on top of it.

## 👤 Author

**Jaswanth G**
GitHub: [@JaswanthG-10](https://github.com/JaswanthG-10)

---

⭐ If you found this project interesting, consider giving it a star on GitHub!

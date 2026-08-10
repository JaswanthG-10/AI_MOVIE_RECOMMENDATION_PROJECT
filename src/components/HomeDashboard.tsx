"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE, VISUAL_MOODS, ALL_GENRES_LIST } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { 
  Sparkles, 
  Play, 
  Flame, 
  Search, 
  ChevronRight, 
  Clock, 
  Star, 
  Bookmark, 
  PieChart as PieIcon, 
  History,
  Compass,
  Film,
  Award,
  Gem,
  Globe2
} from "lucide-react";

interface HomeDashboardProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  watchlist: Movie[];
  onSearchSubmit: (query: string) => void;
  setActiveTab: (tab: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onSelectMovie,
  onToggleWatchlist,
  watchlist,
  onSearchSubmit,
  setActiveTab
}) => {
  const [heroSearch, setHeroSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenreFilter, setSelectedGenreFilter] = useState("All");

  const heroMovie = MOVIES_DATABASE[0]; // Inception
  const continueWatchingList = MOVIES_DATABASE.filter((m) => m.continueWatching);
  const recommendedForYou = MOVIES_DATABASE.slice(1, 7);
  const trendingThisWeek = MOVIES_DATABASE.slice(2, 8);
  const topRatedMovies = MOVIES_DATABASE.filter((m) => m.imdbRating >= 8.3);
  const recentlyReleased = MOVIES_DATABASE.filter((m) => m.year >= 2020 || m.isNewRelease);
  const hiddenGems = MOVIES_DATABASE.filter((m) => m.isHiddenGem || m.imdbRating >= 7.8);
  const awardWinners = MOVIES_DATABASE.filter((m) => m.isAwardWinner || m.imdbRating >= 8.5);
  const becauseYouWatchedInception = MOVIES_DATABASE.filter((m) =>
    m.genres.includes("Sci-Fi") || m.director === "Christopher Nolan"
  ).slice(1, 7);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onSearchSubmit(heroSearch);
        setActiveTab("ai-assistant");
      }, 500);
    }
  };

  return (
    <div className="space-y-12 pb-24 font-inter">
      {/* ========================================================================= */}
      {/* HERO SECTION: Compact (25-30% Viewport Height) */}
      {/* ========================================================================= */}
      <section className="relative h-[28vh] min-h-[220px] max-h-[280px] rounded-3xl overflow-hidden glass-panel border border-purple-500/30 flex flex-col justify-between p-5 sm:p-6 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMovie.backdropUrl}
            alt="Backdrop"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-[#09090b]"></div>
        </div>

        {/* Top Greeting */}
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white font-syne tracking-tight">
              Good Evening, UserX 👋
            </h1>
            <p className="text-xs text-purple-300 font-medium mt-0.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              Lumina AI has curated 12 personalized matches for you tonight
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-purple-500/40 text-xs text-purple-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-space font-bold text-[11px]">Neural Engine Live</span>
          </div>
        </div>

        {/* Centered AI Search Input Bar */}
        <form onSubmit={handleHeroSubmit} className="relative z-10 max-w-xl mx-auto w-full my-auto">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-purple-400 absolute left-4" />
            <input
              type="text"
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
              placeholder="Search natural language AI prompt (e.g. mind-bending thrillers, best sci-fi)..."
              className="w-full bg-zinc-950/90 text-xs text-white placeholder-zinc-500 rounded-full pl-11 pr-32 py-2.5 border border-purple-500/40 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none shadow-2xl transition-all"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-1 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold hover:from-purple-500 hover:to-blue-500 transition-all flex items-center gap-1 shadow-lg shadow-purple-950 disabled:opacity-50"
            >
              <Sparkles className="w-3 h-3" /> {isLoading ? "Searching..." : "AI Search"}
            </button>
          </div>
        </form>
      </section>


      {/* ========================================================================= */}
      {/* 1. CONTINUE WATCHING */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Clock className="w-5 h-5 text-purple-400" /> Continue Watching
          </h2>
          <button onClick={() => setActiveTab("continue-watching")} className="text-xs text-purple-400 hover:underline">
            View All
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {continueWatchingList.map((movie) => (
            <div
              key={movie.id}
              onClick={() => onSelectMovie(movie)}
              className="w-72 sm:w-80 glass-card rounded-2xl p-3 shrink-0 group cursor-pointer border border-zinc-800 hover:border-purple-500/50 transition-all flex gap-3 items-center"
            >
              <div className="w-20 h-24 rounded-xl overflow-hidden bg-zinc-950 shrink-0 relative">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>

              <div className="flex-1 min-w-0 space-y-1.5">
                <h4 className="font-bold text-sm text-white line-clamp-1 group-hover:text-purple-300">
                  {movie.title}
                </h4>
                <div className="text-[11px] text-zinc-400 flex items-center gap-2">
                  <span>{movie.continueWatching?.remainingTime}</span>
                  <span>•</span>
                  <span className="text-purple-400 font-medium">{movie.continueWatching?.lastWatched}</span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    style={{ width: `${movie.continueWatching?.progressPercent}%` }}
                  ></div>
                </div>

                <button className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-purple-600/30 text-purple-300 border border-purple-500/40 hover:bg-purple-600 hover:text-white transition-colors flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-current" /> Resume
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 2. RECOMMENDED FOR YOU */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Sparkles className="w-5 h-5 text-purple-400 fill-purple-400" /> Recommended For You
          </h2>
          <span className="text-xs text-purple-400 font-medium">Contextual Neural Match</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {recommendedForYou.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 3. TRENDING THIS WEEK */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Flame className="w-5 h-5 text-amber-400 fill-amber-400" /> Trending This Week
          </h2>
          <button onClick={() => setActiveTab("trending")} className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1">
            Explore All <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {trendingThisWeek.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
                showAiReasoning={false}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 4. TOP RATED */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Star className="w-5 h-5 text-amber-400 fill-amber-400" /> Top Rated Masterpieces
          </h2>
          <button onClick={() => setActiveTab("top-rated")} className="text-xs font-semibold text-purple-400 hover:underline">
            View All
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {topRatedMovies.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
                showAiReasoning={false}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 5. RECENTLY RELEASED */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Film className="w-5 h-5 text-emerald-400" /> Recently Released
          </h2>
          <span className="text-xs text-emerald-400 font-medium">2022 - 2024</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {recentlyReleased.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 6. MOVIES BASED ON YOUR MOOD */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <span>🎭</span> Movies Based on Your Mood
          </h2>
          <span className="text-xs text-purple-400 font-medium">Select a vibe card</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
          {VISUAL_MOODS.map((mood) => (
            <div
              key={mood.id}
              onClick={() => {
                onSearchSubmit(mood.query);
                setActiveTab("ai-assistant");
              }}
              className="relative h-28 sm:h-32 rounded-2xl overflow-hidden glass-card group cursor-pointer border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.03]"
            >
              <img
                src={mood.imageUrl}
                alt={mood.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${mood.color} opacity-80 group-hover:opacity-90 transition-opacity`}></div>

              <div className="absolute inset-0 p-3 flex flex-col justify-between z-10">
                <span className="text-2xl sm:text-3xl">{mood.emoji}</span>
                <div>
                  <h4 className="font-bold text-sm text-white font-syne">{mood.label}</h4>
                  <span className="text-[10px] text-zinc-200/80 font-medium">Explore matches →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 7. HIDDEN GEMS */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Gem className="w-5 h-5 text-cyan-400" /> Hidden Gems
          </h2>
          <span className="text-xs text-cyan-400 font-medium">Underrated Masterpieces</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {hiddenGems.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 8. AWARD WINNERS */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Award className="w-5 h-5 text-amber-400" /> Award Winners
          </h2>
          <span className="text-xs text-amber-400 font-medium">Oscars & Palme d'Or</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {awardWinners.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 9. BECAUSE YOU WATCHED INCEPTION */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Compass className="w-5 h-5 text-blue-400" /> Because You Watched Inception...
          </h2>
          <span className="text-xs text-purple-400 font-medium">Neural Crossover Matches</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {becauseYouWatchedInception.map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* 10. POPULAR IN YOUR REGION */}
      {/* ========================================================================= */}
      <section className="space-y-4 px-1 sm:px-2">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-poppins">
            <Globe2 className="w-5 h-5 text-purple-400" /> Popular in Your Region
          </h2>
          <span className="text-xs text-zinc-400">North America Top 10</span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
          {MOVIES_DATABASE.slice(0, 6).map((movie) => (
            <div key={movie.id} className="w-48 sm:w-56 shrink-0">
              <MovieCard
                movie={movie}
                onSelectMovie={onSelectMovie}
                onToggleWatchlist={onToggleWatchlist}
                isWatchlisted={watchlist.some((w) => w.id === movie.id)}
                showAiReasoning={false}
              />
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================================= */}
      {/* ALL 30 GENRES CAROUSEL SECTION */}
      {/* ========================================================================= */}
      <section className="space-y-8 px-1 sm:px-2 pt-6 border-t border-zinc-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-white font-poppins flex items-center gap-2">
            <span>🎞️</span> Browse All 30 Genre Collections
          </h2>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedGenreFilter("All")}
              className={`text-xs px-3 py-1 rounded-xl font-medium shrink-0 ${
                selectedGenreFilter === "All" ? "bg-purple-600 text-white" : "bg-zinc-900 text-zinc-400"
              }`}
            >
              All
            </button>
            {ALL_GENRES_LIST.slice(0, 8).map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGenreFilter(g)}
                className={`text-xs px-3 py-1 rounded-xl font-medium shrink-0 ${
                  selectedGenreFilter === g ? "bg-purple-600 text-white" : "bg-zinc-900 text-zinc-400"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {ALL_GENRES_LIST.map((genre) => {
          if (selectedGenreFilter !== "All" && selectedGenreFilter !== genre) return null;

          const genreMovies = MOVIES_DATABASE.filter((m) => m.genres.includes(genre));
          if (genreMovies.length === 0) return null;

          return (
            <div key={genre} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm sm:text-base font-bold text-white font-syne flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span> {genre} Collection
                </h3>
                <span className="text-xs text-zinc-500 font-medium">{genreMovies.length} titles</span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-none">
                {genreMovies.map((movie) => (
                  <div key={movie.id} className="w-48 sm:w-56 shrink-0">
                    <MovieCard
                      movie={movie}
                      onSelectMovie={onSelectMovie}
                      onToggleWatchlist={onToggleWatchlist}
                      isWatchlisted={watchlist.some((w) => w.id === movie.id)}
                      showAiReasoning={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

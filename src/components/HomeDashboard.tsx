"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { PlatformMetricsFooter } from "@/components/PlatformMetricsFooter";
import { Sparkles, Flame, Star, Trophy, Clapperboard, Play, Info, Search, Compass, Rocket, Zap, Brain } from "lucide-react";

interface HomeDashboardProps {
  selectedLanguage: string;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (movie: Movie) => void;
  onOpenAiModal?: () => void;
}

interface InfiniteCarouselRowProps {
  title: string;
  icon: React.ReactNode;
  badge?: string;
  movies: Movie[];
  direction?: "left" | "right";
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer?: (movie: Movie) => void;
}

const InfiniteCarouselRow: React.FC<InfiniteCarouselRowProps> = ({
  title,
  icon,
  badge,
  movies,
  direction = "left",
  onSelectMovie,
  onPlayTrailer,
}) => {
  if (!movies.length) return null;
  // Duplicate array so it loops infinitely without gaps
  const doubledMovies = [...movies, ...movies];

  return (
    <section className="space-y-4 animate-roll-on">
      {/* Row Header */}
      <div className="flex items-center justify-between px-2">
        <h3 className="font-heading text-xl font-extrabold flex items-center gap-2.5 text-white">
          {icon}
          {title}
        </h3>
        {badge && (
          <span className="text-[10px] font-mono-num font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30">
            {badge}
          </span>
        )}
      </div>

      {/* Infinite Rolling Outer Wrapper */}
      <div className="infinite-roll-container py-2">
        <div className={direction === "left" ? "infinite-roll-left" : "infinite-roll-right"}>
          {doubledMovies.map((m, idx) => (
            <div key={`${m.id}-${idx}`} className="w-52 shrink-0">
              <MovieCard
                movie={m}
                score={m.matchScore}
                onSelectMovie={onSelectMovie}
                onPlayTrailer={onPlayTrailer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  selectedLanguage,
  onSelectMovie,
  onPlayTrailer,
  onOpenAiModal,
}) => {
  const [heroPrompt, setHeroPrompt] = useState("");

  let movies = [...MOVIES_DATABASE];
  if (selectedLanguage !== "All") {
    movies = movies.filter(
      (m) => m.language.toLowerCase().trim() === selectedLanguage.toLowerCase().trim()
    );
  }

  const heroMovie = movies[0] || MOVIES_DATABASE[0];

  // Specific Categorized Rows strictly matching selectedLanguage
  const recommendedForYou = movies.slice(0, 8);
  const trendingNow = [...movies].sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 8);
  
  const regionalSpotlightTitle = selectedLanguage !== "All" ? `${selectedLanguage} Spotlight` : "Tamil Blockbusters & Thrillers";
  const regionalSpotlight = selectedLanguage !== "All" 
    ? movies.slice(0, 8) 
    : MOVIES_DATABASE.filter((m) => m.language === "Tamil").slice(0, 8);

  const becauseInterstellar = movies.filter(
    (m) => m.director === "Christopher Nolan" || m.genres.includes("Sci-Fi") || m.genres.includes("Drama")
  ).slice(0, 8);
  const finalBecauseInterstellar = becauseInterstellar.length > 0 ? becauseInterstellar : movies.slice(0, 8);

  const actionCyberpunk = movies.filter(
    (m) => m.genres.includes("Action") || m.genres.includes("Thriller") || m.genres.includes("Crime")
  ).slice(0, 8);
  const finalActionCyberpunk = actionCyberpunk.length > 0 ? actionCyberpunk : movies.slice(0, 8);

  const mindBendingSciFi = movies.filter((m) => m.genres.includes("Sci-Fi") || m.genres.includes("Thriller") || m.genres.includes("Mystery")).slice(0, 8);
  const finalMindBendingSciFi = mindBendingSciFi.length > 0 ? mindBendingSciFi : movies.slice(0, 8);

  const promptChips = [
    "Suggest a dark sci-fi movie with an intelligent storyline",
    "High octane Tamil action movies",
    "Mind-bending psychological thrillers",
    "Oscar winning cinematic masterpieces"
  ];

  return (
    <div className="space-y-16 p-4 sm:p-8 max-w-[1600px] mx-auto bg-transparent">
      
      {/* ══ HERO SECTION ══ */}
      <section
        className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-roll-on bg-[#070913]"
        style={{
          boxShadow: "0 0 100px rgba(139, 92, 246, 0.15), 0 0 150px rgba(236, 72, 153, 0.08), 0 32px 80px rgba(0,0,0,0.9)",
        }}
      >
        {/* Cinematic Backdrop with Radial Vignetting */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroMovie.backdropUrl}
            alt={heroMovie.title}
            className="w-full h-full object-cover opacity-40 scale-105 blur-[1px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 90% 90% at 50% 40%, rgba(7, 9, 19, 0.4) 0%, #070913 90%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[480px]">
          
          {/* Left Text & Search */}
          <div className="space-y-6 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-num font-bold text-purple-300 border border-purple-500/40 bg-purple-500/15 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-pink-400" />
              ✦ LUMINA AI NEURAL FILM SEARCH
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl text-white font-black leading-none tracking-tight">
              Curated Cinema, Engineered by Intelligence
            </h1>

            <p className="font-body text-sm sm:text-base text-zinc-300 leading-relaxed">
              Experience movie recommendations driven by high-dimensional vector embeddings, plot analysis, and your unique cinephile taste fingerprint.
            </p>

            {/* Natural Language Input & Prompt Chips */}
            <div className="space-y-3 pt-2">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (onOpenAiModal) onOpenAiModal();
                }}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={heroPrompt}
                  onChange={(e) => setHeroPrompt(e.target.value)}
                  placeholder="Ask Lumina AI for a movie recommendation..."
                  className="w-full font-body text-xs sm:text-sm rounded-2xl pl-11 pr-32 py-3.5 bg-black/70 border border-purple-500/40 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-400 backdrop-blur-md shadow-2xl"
                />
                <Search className="w-4 h-4 text-purple-400 absolute left-4 pointer-events-none" />
                <button
                  type="submit"
                  className="absolute right-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg hover:opacity-90 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" /> AI Search
                </button>
              </form>

              {/* AI Prompt Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {promptChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setHeroPrompt(chip);
                      if (onOpenAiModal) onOpenAiModal();
                    }}
                    className="text-[11px] font-space px-3 py-1 rounded-xl bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white transition-all cursor-pointer"
                  >
                    "{chip}"
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Featured Movie Spotlight Card */}
          <div
            className="shrink-0 cursor-pointer group animate-float"
            onClick={() => onSelectMovie(heroMovie)}
          >
            <div className="relative w-56 sm:w-64 p-3 rounded-2xl glass-card border border-purple-500/30">
              <img
                src={heroMovie.posterUrl}
                alt={heroMovie.title}
                className="w-full aspect-[2/3] object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Match Dial Overlay */}
              <div
                className="absolute top-5 right-5 match-dial"
                style={{ "--pct": heroMovie.matchScore, "--dial-size": "52px" } as React.CSSProperties}
              >
                <span className="match-dial-label">{heroMovie.matchScore}%</span>
              </div>

              {/* Short Info & CTA */}
              <div className="mt-3 space-y-2 text-left">
                <h4 className="font-bold text-sm text-white truncate group-hover:text-purple-300">
                  {heroMovie.title}
                </h4>
                <p className="text-[11px] text-zinc-400 italic line-clamp-2">
                  "{heroMovie.aiReasoning}"
                </p>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayTrailer(heroMovie);
                    }}
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white font-bold text-[10px] uppercase flex items-center justify-center gap-1 shadow-md hover:opacity-90"
                  >
                    <Play className="w-3 h-3 fill-white" /> Watch Trailer
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMovie(heroMovie);
                    }}
                    className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white font-bold text-[10px] uppercase hover:bg-white/20"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══ INFINITE ROLLING CAROUSELS ══ */}

      {/* 1. Recommended For You (Left) */}
      <InfiniteCarouselRow
        title="Recommended For You"
        icon={<Sparkles className="w-5 h-5 text-purple-400" />}
        badge="95%+ Neural Match"
        movies={recommendedForYou}
        direction="left"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* 2. Trending Now (Right) */}
      <InfiniteCarouselRow
        title="Trending Now"
        icon={<Flame className="w-5 h-5 text-pink-500" />}
        badge="🔥 Top Streamed"
        movies={trendingNow}
        direction="right"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* 3. Regional / Language Spotlight (Left) */}
      <InfiniteCarouselRow
        title={regionalSpotlightTitle}
        icon={<Clapperboard className="w-5 h-5 text-[#60A5FA]" />}
        badge={selectedLanguage !== "All" ? `${selectedLanguage} Vault` : "Kollywood Vault"}
        movies={regionalSpotlight}
        direction="left"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* 4. Because You Watched Interstellar (Right) */}
      <InfiniteCarouselRow
        title="Because You Watched Interstellar"
        icon={<Rocket className="w-5 h-5 text-indigo-400" />}
        badge="Cosmic & Auteur"
        movies={finalBecauseInterstellar}
        direction="right"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* 5. High Kinetic Action & Cyberpunk (Left) */}
      <InfiniteCarouselRow
        title="High Kinetic Action & Cyberpunk"
        icon={<Zap className="w-5 h-5 text-amber-400" />}
        badge="Adrenaline"
        movies={finalActionCyberpunk}
        direction="left"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* 6. Mind-Bending Sci-Fi (Right) */}
      <InfiniteCarouselRow
        title="Mind-Bending Sci-Fi"
        icon={<Brain className="w-5 h-5 text-emerald-400" />}
        badge="High Concept"
        movies={finalMindBendingSciFi}
        direction="right"
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {/* ══ PLATFORM METRICS & FOOTER ══ */}
      <PlatformMetricsFooter />

    </div>
  );
};

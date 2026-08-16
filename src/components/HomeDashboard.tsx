"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Sparkles, Flame, Star, Trophy, Clapperboard, Play, Info } from "lucide-react";

interface HomeDashboardProps {
  selectedLanguage: string;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (movie: Movie) => void;
}

interface RowProps {
  title: string;
  icon: React.ReactNode;
  badge?: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer?: (movie: Movie) => void;
}

const CarouselRow: React.FC<RowProps> = ({ title, icon, badge, movies, onSelectMovie, onPlayTrailer }) => {
  if (!movies.length) return null;
  return (
    <section className="space-y-4 animate-roll-on">
      {/* Row header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="font-heading text-xl font-bold flex items-center gap-2 text-[#F1F3FA]">
          {icon}
          {title}
        </h3>
        {badge && (
          <span className="text-[10px] font-mono-num font-bold px-2.5 py-1 rounded-lg bg-[#2563EB]/15 text-[#60A5FA] border border-[#2563EB]/35">
            {badge}
          </span>
        )}
      </div>

      {/* Sprocket decorative strip */}
      <div className="sprocket-strip mb-2 opacity-50" />

      {/* Horizontal scroll */}
      <div className="carousel-row gap-6">
        {movies.map((m) => (
          <div key={m.id} className="w-48 sm:w-52 shrink-0">
            <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} onPlayTrailer={onPlayTrailer} />
          </div>
        ))}
      </div>
    </section>
  );
};

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  selectedLanguage,
  onSelectMovie,
  onPlayTrailer,
}) => {
  let movies = [...MOVIES_DATABASE];
  if (selectedLanguage !== "All") {
    movies = movies.filter((m) =>
      m.language.toLowerCase().includes(selectedLanguage.toLowerCase())
    );
  }

  const heroMovie     = movies[0] || MOVIES_DATABASE[0];
  const popularTamil  = MOVIES_DATABASE.filter((m) => m.language === "Tamil");
  const topRated      = [...movies].sort((a, b) => b.imdbRating - a.imdbRating).slice(0, 12);
  const lcuCollection = MOVIES_DATABASE.filter((m) => m.director === "Lokesh Kanagaraj");
  const oscarWinners  = MOVIES_DATABASE.filter((m) => m.isOscarWinner);
  const trending      = [...movies].filter((m) => m.matchScore >= 95).slice(0, 10);
  const nolanFilms    = MOVIES_DATABASE.filter((m) => m.director === "Christopher Nolan");

  return (
    <div className="space-y-16 p-6 sm:p-10 max-w-[1600px] mx-auto bg-transparent">

      {/* ══ HERO BANNER ══ */}
      <section
        className="relative rounded-3xl overflow-hidden shadow-2xl animate-roll-on border"
        style={{
          borderColor: "rgba(37, 99, 235, 0.35)",
          boxShadow: "0 0 80px rgba(37, 99, 235, 0.15), 0 0 120px rgba(236, 72, 153, 0.08), 0 32px 80px rgba(0,0,0,0.9)",
          background: "#060813"
        }}
      >
        {/* Backdrop Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroMovie.backdropUrl}
            alt={heroMovie.title}
            className="w-full h-full object-cover opacity-35 scale-105 blur-[2px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #060813 0%, rgba(6, 8, 19, 0.85) 55%, rgba(6, 8, 19, 0.4) 100%)"
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #060813 0%, transparent 60%)"
            }}
          />
        </div>

        {/* Sprocket top */}
        <div className="sprocket-strip absolute top-0 left-0 right-0 z-10 opacity-60" />

        {/* Content */}
        <div className="relative z-10 p-8 sm:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 min-h-[380px]">
          {/* Left: Text */}
          <div className="space-y-5 max-w-2xl stagger-1 animate-fade-up">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-num font-bold text-[#F472B6] border border-[#EC4899]/40 bg-[#EC4899]/15"
              style={{ boxShadow: "0 0 20px rgba(236, 72, 153, 0.2)" }}
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#EC4899]" />
              Lumina AI Spotlight Feature
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-[#F1F3FA] leading-none tracking-tight font-extrabold">
              {heroMovie.title}
            </h2>

            <p className="font-body text-sm text-[#B0B6D0] line-clamp-2 leading-relaxed max-w-lg">
              {heroMovie.synopsis}
            </p>

            {/* AI reasoning box */}
            <div
              className="flex items-start gap-3 p-4 rounded-2xl max-w-lg"
              style={{
                background: "linear-gradient(90deg, rgba(37,99,235,0.12), rgba(236,72,153,0.06))",
                border: "1px solid rgba(37, 99, 235, 0.3)"
              }}
            >
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5 animate-pulse text-[#EC4899]" />
              <p className="font-body text-xs italic leading-relaxed text-[#B0B6D0]">
                "{heroMovie.aiReasoning}"
              </p>
            </div>

            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-3 font-mono-num text-xs text-[#B0B6D0]">
              <span className="flex items-center gap-1 font-bold text-[#FBBF24]">
                <Star className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                {heroMovie.imdbRating} IMDb
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/40" />
              <span>{heroMovie.year}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/40" />
              <span>{heroMovie.runtime}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/40" />
              <span className="px-2 py-0.5 rounded bg-[#2563EB]/15 text-[#60A5FA] border border-[#2563EB]/30 font-bold uppercase text-[10px]">
                {heroMovie.language}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onPlayTrailer(heroMovie)}
                className="px-6 py-3.5 rounded-xl font-heading text-xs font-bold text-[#F1F3FA] flex items-center gap-2 cursor-pointer shadow-2xl transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #EC4899 100%)",
                  boxShadow: "0 4px 24px rgba(236, 72, 153, 0.4)"
                }}
              >
                <Play className="w-4.5 h-4.5 fill-[#F1F3FA] text-[#F1F3FA]" /> Play Trailer
              </button>
              <button
                onClick={() => onSelectMovie(heroMovie)}
                className="px-6 py-3.5 rounded-xl font-heading text-xs font-bold text-[#F1F3FA] flex items-center gap-2 cursor-pointer bg-[#111530] border border-[#2563EB]/35 hover:border-[#EC4899]/50 transition-all hover:scale-105"
              >
                <Info className="w-4 h-4 text-[#60A5FA]" /> View Details
              </button>
            </div>
          </div>

          {/* Right: Poster */}
          <div
            className="shrink-0 cursor-pointer group animate-float"
            onClick={() => onSelectMovie(heroMovie)}
          >
            <div className="relative w-44 sm:w-56">
              <img
                src={heroMovie.posterUrl}
                alt={heroMovie.title}
                className="w-full aspect-[2/3] object-cover rounded-2xl shadow-2xl border transition-all duration-300 group-hover:scale-105"
                style={{
                  borderColor: "rgba(236, 72, 153, 0.35)",
                  boxShadow: "0 0 30px rgba(236, 72, 153, 0.2)"
                }}
              />
              {/* Match score dial */}
              <div
                className="absolute -top-4 -right-4 match-dial"
                style={{ "--pct": heroMovie.matchScore, "--dial-size": "54px" } as React.CSSProperties}
              >
                <span className="match-dial-label">{heroMovie.matchScore}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprocket bottom */}
        <div className="sprocket-strip absolute bottom-0 left-0 right-0 z-10 opacity-60" />
      </section>

      {/* ══ CONTENT ROWS ══ */}

      <CarouselRow
        title="Popular Tamil Cinema (Kollywood)"
        icon={<Flame className="w-5 h-5 text-[#EC4899]" />}
        badge={`${popularTamil.length} Films`}
        movies={popularTamil}
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      <CarouselRow
        title="Lokesh Cinematic Universe"
        icon={<Clapperboard className="w-5 h-5 text-[#60A5FA]" />}
        badge="Vikram · Leo · Kaithi"
        movies={lcuCollection}
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {trending.length > 0 && (
        <CarouselRow
          title="Trending Today"
          icon={<Flame className="w-5 h-5 text-[#EC4899]" />}
          badge="🔥 Hot"
          movies={trending}
          onSelectMovie={onSelectMovie}
          onPlayTrailer={onPlayTrailer}
        />
      )}

      <CarouselRow
        title="IMDb Top Rated Masterpieces"
        icon={<Star className="w-5 h-5 text-[#FBBF24]" />}
        badge="Score 8.0+"
        movies={topRated}
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />

      {nolanFilms.length > 0 && (
        <CarouselRow
          title="Christopher Nolan Collection"
          icon={<Clapperboard className="w-5 h-5 text-[#60A5FA]" />}
          movies={nolanFilms}
          onSelectMovie={onSelectMovie}
          onPlayTrailer={onPlayTrailer}
        />
      )}

      <CarouselRow
        title="Oscar & National Award Winners"
        icon={<Trophy className="w-5 h-5 text-[#FBBF24]" />}
        movies={oscarWinners}
        onSelectMovie={onSelectMovie}
        onPlayTrailer={onPlayTrailer}
      />
    </div>
  );
};

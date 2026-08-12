"use client";

import React from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Sparkles, Flame, Star, Trophy, Clapperboard, Crown } from "lucide-react";

interface HomeDashboardProps {
  selectedLanguage: string;
  onSelectMovie: (movie: Movie) => void;
  onPlayTrailer: (trailerId: string) => void;
}

interface RowProps {
  title: string;
  icon: React.ReactNode;
  badge?: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const CarouselRow: React.FC<RowProps> = ({ title, icon, badge, movies, onSelectMovie }) => {
  if (!movies.length) return null;
  return (
    <section className="space-y-3 animate-roll-on">
      {/* Row header */}
      <div className="flex items-center justify-between px-1">
        <h3 className="font-heading text-base flex items-center gap-2" style={{ color: '#F0ECFF' }}>
          {icon}
          {title}
        </h3>
        {badge && (
          <span className="badge-teal">{badge}</span>
        )}
      </div>

      {/* Sprocket decorative strip */}
      <div className="sprocket-strip" />

      {/* Horizontal scroll */}
      <div className="carousel-row">
        {movies.map((m) => (
          <div key={m.id} className="w-44 sm:w-48 shrink-0">
            <MovieCard movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
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
  const lcuCollection = MOVIES_DATABASE.filter((m) => m.collection === "Lokesh Cinematic Universe");
  const oscarWinners  = MOVIES_DATABASE.filter((m) => m.isOscarWinner);
  const trending      = [...movies].filter((m) => m.matchScore >= 95).slice(0, 10);
  const nolanFilms    = MOVIES_DATABASE.filter((m) => m.collection === "Christopher Nolan Collection");

  return (
    <div className="space-y-12 p-4 sm:p-8 max-w-[1600px] mx-auto" style={{ background: 'transparent' }}>

      {/* ══ HERO BANNER ══ */}
      <section className="relative rounded-2xl overflow-hidden shadow-2xl animate-roll-on" style={{ border: '1px solid rgba(147,51,234,0.3)', boxShadow: '0 0 80px rgba(147,51,234,0.08), 0 32px 80px rgba(0,0,0,0.7)' }}>
        {/* Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroMovie.backdropUrl}
            alt={heroMovie.title}
            className="w-full h-full object-cover opacity-20 scale-110 blur-sm"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #07050F 0%, rgba(7,5,15,0.88) 55%, rgba(13,10,30,0.4) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #07050F 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 10% 50%, rgba(147,51,234,0.06) 0%, transparent 70%)' }} />
        </div>

        {/* Sprocket top */}
        <div className="sprocket-strip absolute top-0 left-0 right-0 z-10" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 min-h-[300px]">
          {/* Left: Text */}
          <div className="space-y-4 max-w-2xl stagger-1 animate-fade-up">
            <div className="badge-amber" style={{ boxShadow: '0 0 20px rgba(212,175,55,0.2)' }}>
              <Sparkles className="w-3 h-3 animate-pulse" />
              Lumina AI — Featured Spotlight
            </div>

            <h2 className="font-heading text-4xl sm:text-6xl text-[#F2F0E6] leading-none tracking-wide">
              {heroMovie.title}
            </h2>

            <p className="font-body text-sm text-[#A9AABF] line-clamp-2 leading-relaxed max-w-lg">
              {heroMovie.synopsis}
            </p>

            {/* AI reasoning box */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl max-w-lg" style={{ background: 'rgba(147,51,234,0.08)', border: '1px solid rgba(147,51,234,0.28)' }}>
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5 animate-pulse" style={{ color: '#C084FC' }} />
              <p className="font-body text-xs italic leading-relaxed" style={{ color: 'rgba(240,236,255,0.85)' }}>
                "{heroMovie.aiReasoning}"
              </p>
            </div>

            {/* Metadata row */}
            <div className="flex items-center gap-3 font-mono-num text-xs text-[#6B6E8A]">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-[#E8A33D] fill-[#E8A33D]" />
                {heroMovie.imdbRating} IMDb
              </span>
              <span className="w-1 h-1 rounded-full bg-[#33395a]" />
              <span>{heroMovie.year}</span>
              <span className="w-1 h-1 rounded-full bg-[#33395a]" />
              <span>{heroMovie.runtime}</span>
              <span className="w-1 h-1 rounded-full bg-[#33395a]" />
              <span>{heroMovie.language}</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => onPlayTrailer(heroMovie.trailerId)}
                className="btn-primary"
              >
                ▶ Watch Trailer
              </button>
              <button
                onClick={() => onSelectMovie(heroMovie)}
                className="btn-ghost"
              >
                View Details
              </button>
            </div>
          </div>

          {/* Right: Poster */}
          <div
            className="shrink-0 cursor-pointer group animate-float"
            onClick={() => onSelectMovie(heroMovie)}
          >
            <div className="relative w-40 sm:w-52">
              <img
                src={heroMovie.posterUrl}
                alt={heroMovie.title}
                className="w-full aspect-[2/3] object-cover rounded-xl shadow-2xl border border-[#33395a] group-hover:border-[#E8A33D]/50 group-hover:scale-[1.02] transition-all duration-300"
              />
              {/* Match score overlay on poster */}
              <div
                className="absolute -top-4 -right-4 match-dial"
                style={{ "--pct": heroMovie.matchScore, "--dial-size": "52px" } as React.CSSProperties}
              >
                <span className="match-dial-label">{heroMovie.matchScore}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sprocket bottom */}
        <div className="sprocket-strip absolute bottom-0 left-0 right-0 z-10" />
      </section>

      {/* ══ CONTENT ROWS ══ */}

      <CarouselRow
        title="Popular Tamil Cinema (Kollywood)"
        icon={<Flame className="w-5 h-5 text-[#E8A33D]" />}
        badge={`${popularTamil.length} Films`}
        movies={popularTamil}
        onSelectMovie={onSelectMovie}
      />

      <CarouselRow
        title="Lokesh Cinematic Universe"
        icon={<Clapperboard className="w-5 h-5 text-[#3FA796]" />}
        badge="Vikram · Leo · Kaithi"
        movies={lcuCollection}
        onSelectMovie={onSelectMovie}
      />

      {trending.length > 0 && (
        <CarouselRow
          title="Trending Today"
          icon={<Flame className="w-5 h-5 text-[#C75146]" />}
          badge="🔥 Hot"
          movies={trending}
          onSelectMovie={onSelectMovie}
        />
      )}

      <CarouselRow
        title="IMDb Top Rated Masterpieces"
        icon={<Star className="w-5 h-5 text-[#E8A33D]" />}
        badge="Score 8.0+"
        movies={topRated}
        onSelectMovie={onSelectMovie}
      />

      {nolanFilms.length > 0 && (
        <CarouselRow
          title="Christopher Nolan Collection"
          icon={<Clapperboard className="w-5 h-5 text-[#A9AABF]" />}
          movies={nolanFilms}
          onSelectMovie={onSelectMovie}
        />
      )}

      <CarouselRow
        title="Oscar & National Award Winners"
        icon={<Trophy className="w-5 h-5 text-[#E8A33D]" />}
        movies={oscarWinners}
        onSelectMovie={onSelectMovie}
      />
    </div>
  );
};

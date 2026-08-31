"use client";

import React, { useState, useEffect } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { HomeDashboard } from "@/components/HomeDashboard";
import { DiscoverView } from "@/components/DiscoverView";
import { ChatInterface } from "@/components/ChatInterface";
import { MovieDetailsModal } from "@/components/MovieDetailsModal";
import { TrailerPlayerModal } from "@/components/TrailerPlayerModal";
import { SpinWheelModal } from "@/components/SpinWheelModal";
import { MovieComparisonModal } from "@/components/MovieComparisonModal";
import { AiRecommendationModal } from "@/components/AiRecommendationModal";
import { NotificationsModal } from "@/components/NotificationsModal";
import { WatchlistView } from "@/components/WatchlistView";
import { SettingsView } from "@/components/SettingsView";
import { TasteProfileView } from "@/components/TasteProfileView";
import { TopRatedView } from "@/components/TopRatedView";
import { MovieOfTheDayView } from "@/components/MovieOfTheDayView";
import { WatchHistoryView } from "@/components/WatchHistoryView";
import { MobileNav } from "@/components/MobileNav";

interface HomeProps {
  initialTab?: string;
  initialMovieId?: string;
  autoOpenAiModal?: boolean;
}

export default function Home({ initialTab = "home", initialMovieId, autoOpenAiModal = false }: HomeProps) {
  const [activeTab, setActiveTab] = useState<string>(initialTab);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(() => {
    if (initialMovieId) {
      return MOVIES_DATABASE.find((m) => m.id === initialMovieId) || null;
    }
    return null;
  });
  const [trailerMovie, setTrailerMovie] = useState<Movie | null>(null);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState<boolean>(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState<boolean>(autoOpenAiModal);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState<boolean>(false);
  
  const [watchlistIds, setWatchlistIds] = useState<string[]>([
    "tamil-vikram",
    "english-inception",
    "english-interstellar"
  ]);

  useEffect(() => {
    if (initialMovieId) {
      const match = MOVIES_DATABASE.find((m) => m.id === initialMovieId);
      if (match) setSelectedMovie(match);
    }
  }, [initialMovieId]);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlistIds((prev) =>
      prev.includes(movie.id) ? prev.filter((id) => id !== movie.id) : [...prev, movie.id]
    );
  };

  const handlePlayTrailer = (movie: Movie) => {
    const ytUrl = movie.trailerId 
      ? `https://www.youtube.com/watch?v=${movie.trailerId}` 
      : `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + " " + movie.year + " official trailer")}`;
    window.open(ytUrl, "_blank");
  };

  const watchlistMovies = MOVIES_DATABASE.filter((m) => watchlistIds.includes(m.id));

  return (
    <div className="min-h-screen flex font-body" style={{ background: "#060813", color: "#F1F3FA" }}>
      {/* Collapsible Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        onOpenComparison={() => setIsComparisonOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          onSearchSubmit={(q) => setActiveTab("search")}
          onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
          onOpenAiModal={() => setIsAiModalOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />

        <main className="flex-1 pb-20 md:pb-16">
          {activeTab === "home" && (
            <HomeDashboard
              selectedLanguage={selectedLanguage}
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={handlePlayTrailer}
              onOpenAiModal={() => setIsAiModalOpen(true)}
            />
          )}

          {activeTab === "search" && (
            <ChatInterface onSelectMovie={setSelectedMovie} />
          )}

          {(activeTab === "discover" || activeTab === "genres") && (
            <DiscoverView onSelectMovie={setSelectedMovie} onPlayTrailer={handlePlayTrailer} />
          )}

          {(activeTab === "trending" || activeTab === "continue") && (
            <HomeDashboard
              selectedLanguage={selectedLanguage}
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={handlePlayTrailer}
              onOpenAiModal={() => setIsAiModalOpen(true)}
            />
          )}

          {activeTab === "top-rated" && (
            <TopRatedView
              onSelectMovie={setSelectedMovie}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlistMovies}
              onPlayTrailer={handlePlayTrailer}
            />
          )}

          {activeTab === "motd" && (
            <MovieOfTheDayView
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={handlePlayTrailer}
            />
          )}

          {activeTab === "history" && (
            <WatchHistoryView
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={handlePlayTrailer}
            />
          )}

          {activeTab === "watchlist" && (
            <WatchlistView
              watchlist={watchlistMovies}
              onSelectMovie={setSelectedMovie}
              onToggleWatchlist={handleToggleWatchlist}
              setActiveTab={setActiveTab}
              onPlayTrailer={handlePlayTrailer}
            />
          )}

          {activeTab === "settings" && <SettingsView />}

          {activeTab === "profile" && <TasteProfileView />}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlistMovies.length}
      />

      {/* Overlays & Modals */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onToggleWatchlist={handleToggleWatchlist}
          isWatchlisted={watchlistIds.includes(selectedMovie.id)}
          onSelectMovie={setSelectedMovie}
        />
      )}

      {trailerMovie && (
        <TrailerPlayerModal
          movie={trailerMovie}
          onClose={() => setTrailerMovie(null)}
          onViewDetails={(movie) => {
            setTrailerMovie(null);
            setSelectedMovie(movie);
          }}
        />
      )}

      {isSpinWheelOpen && (
        <SpinWheelModal
          onClose={() => setIsSpinWheelOpen(false)}
          onSelectMovie={setSelectedMovie}
        />
      )}

      {isComparisonOpen && (
        <MovieComparisonModal onClose={() => setIsComparisonOpen(false)} />
      )}

      {isAiModalOpen && (
        <AiRecommendationModal
          onClose={() => setIsAiModalOpen(false)}
          onSelectMovie={setSelectedMovie}
          onPlayTrailer={handlePlayTrailer}
        />
      )}

      {isNotificationsOpen && (
        <NotificationsModal
          onClose={() => setIsNotificationsOpen(false)}
          onSelectMovie={setSelectedMovie}
        />
      )}
    </div>
  );
}

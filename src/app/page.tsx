"use client";

import React, { useState } from "react";
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
import { WatchlistView } from "@/components/WatchlistView";
import { SettingsView } from "@/components/SettingsView";
import { TasteProfileView } from "@/components/TasteProfileView";
import { TopRatedView } from "@/components/TopRatedView";
import { MovieOfTheDayView } from "@/components/MovieOfTheDayView";
import { WatchHistoryView } from "@/components/WatchHistoryView";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerId, setTrailerId] = useState<string | null>(null);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState<boolean>(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [watchlistIds, setWatchlistIds] = useState<string[]>([
    "tamil-vikram",
    "english-inception",
    "english-interstellar"
  ]);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlistIds((prev) =>
      prev.includes(movie.id) ? prev.filter((id) => id !== movie.id) : [...prev, movie.id]
    );
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
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          onSearchSubmit={(q) => setActiveTab("search")}
          onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
        />

        <main className="flex-1 pb-16">
          {activeTab === "home" && (
            <HomeDashboard
              selectedLanguage={selectedLanguage}
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={setTrailerId}
            />
          )}

          {activeTab === "search" && (
            <ChatInterface onSelectMovie={setSelectedMovie} />
          )}

          {(activeTab === "discover" || activeTab === "genres") && (
            <DiscoverView onSelectMovie={setSelectedMovie} />
          )}

          {(activeTab === "trending" || activeTab === "continue") && (
            <HomeDashboard
              selectedLanguage={selectedLanguage}
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={setTrailerId}
            />
          )}

          {activeTab === "top-rated" && (
            <TopRatedView
              onSelectMovie={setSelectedMovie}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlistMovies}
            />
          )}

          {activeTab === "motd" && (
            <MovieOfTheDayView
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={setTrailerId}
            />
          )}

          {activeTab === "history" && (
            <WatchHistoryView
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={setTrailerId}
            />
          )}

          {activeTab === "watchlist" && (
            <WatchlistView
              watchlist={watchlistMovies}
              onSelectMovie={setSelectedMovie}
              onToggleWatchlist={handleToggleWatchlist}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "settings" && <SettingsView />}

          {activeTab === "profile" && <TasteProfileView />}
        </main>
      </div>

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

      {trailerId && (
        <TrailerPlayerModal
          trailerId={trailerId}
          onClose={() => setTrailerId(null)}
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
    </div>
  );
}

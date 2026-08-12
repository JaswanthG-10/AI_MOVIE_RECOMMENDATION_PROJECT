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

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [trailerId, setTrailerId] = useState<string | null>(null);
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState<boolean>(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);
  const [watchlistIds, setWatchlistIds] = useState<string[]>(["vikram", "inception"]);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlistIds((prev) =>
      prev.includes(movie.id) ? prev.filter((id) => id !== movie.id) : [...prev, movie.id]
    );
  };

  return (
    <div className="min-h-screen bg-[#0F1220] text-[#F2F0E6] flex font-sora">
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

          {activeTab === "discover" && (
            <DiscoverView onSelectMovie={setSelectedMovie} />
          )}

          {(activeTab === "trending" || activeTab === "latest" || activeTab === "collections") && (
            <HomeDashboard
              selectedLanguage={selectedLanguage}
              onSelectMovie={setSelectedMovie}
              onPlayTrailer={setTrailerId}
            />
          )}

          {activeTab === "top-rated" && (
            <TopRatedView onSelectMovie={setSelectedMovie} />
          )}

          {(activeTab === "watchlist" || activeTab === "favorites" || activeTab === "history") && (
            <WatchlistView onSelectMovie={setSelectedMovie} />
          )}

          {activeTab === "settings" && <SettingsView />}

          {activeTab === "profile" && <TasteProfileView />}
        </main>
      </div>

      {/* Modals & Overlays */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onToggleWatchlist={handleToggleWatchlist}
          isWatchlisted={watchlistIds.includes(selectedMovie.id)}
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

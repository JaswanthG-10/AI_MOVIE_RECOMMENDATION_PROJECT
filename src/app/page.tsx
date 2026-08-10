"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { HomeDashboard } from "@/components/HomeDashboard";
import { ChatInterface } from "@/components/ChatInterface";
import { TasteProfileView } from "@/components/TasteProfileView";
import { WatchlistView } from "@/components/WatchlistView";
import { DiscoverView } from "@/components/DiscoverView";
import { TopRatedView } from "@/components/TopRatedView";
import { WatchHistoryView } from "@/components/WatchHistoryView";
import { MovieOfTheDayView } from "@/components/MovieOfTheDayView";
import { SettingsView } from "@/components/SettingsView";
import { MovieDetailsModal } from "@/components/MovieDetailsModal";
import { NotificationsModal } from "@/components/NotificationsModal";
import { FloatingAiChat } from "@/components/FloatingAiChat";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [watchlist, setWatchlist] = useState<Movie[]>([
    MOVIES_DATABASE[0], // Inception
    MOVIES_DATABASE[1]  // Interstellar
  ]);
  const [aiQuery, setAiQuery] = useState<string>("");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      const exists = prev.some((item) => item.id === movie.id);
      if (exists) {
        return prev.filter((item) => item.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const handleSearchSubmit = (query: string) => {
    setAiQuery(query);
    setActiveTab("ai-assistant");
  };

  return (
    <div className="flex min-h-screen bg-[#09090b] text-zinc-100 selection:bg-purple-600 selection:text-white font-inter">
      {/* Permanent Desktop Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlist.length}
        onSearchSubmit={handleSearchSubmit}
        onOpenProfileDropdown={() => setActiveTab("settings")}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <Header
          onSearchSubmit={handleSearchSubmit}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
        />

        {/* Dynamic Main View */}
        <main className="flex-1 overflow-y-auto p-3 sm:p-6 lg:p-8">
          {activeTab === "home" && (
            <HomeDashboard
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
              onSearchSubmit={handleSearchSubmit}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "discover" && (
            <DiscoverView
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
            />
          )}

          {activeTab === "ai-assistant" && (
            <ChatInterface
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
              initialQuery={aiQuery}
            />
          )}

          {activeTab === "trending" && (
            <DiscoverView
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
            />
          )}

          {activeTab === "top-rated" && (
            <TopRatedView
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
            />
          )}

          {(activeTab === "watch-history" || activeTab === "continue-watching") && (
            <WatchHistoryView
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              watchlist={watchlist}
            />
          )}

          {activeTab === "watchlist" && (
            <WatchlistView
              watchlist={watchlist}
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === "movie-of-the-day" && (
            <MovieOfTheDayView
              onSelectMovie={(movie) => setSelectedMovie(movie)}
              onToggleWatchlist={handleToggleWatchlist}
              isWatchlisted={watchlist.some((w) => w.id === MOVIES_DATABASE[1].id)}
            />
          )}

          {activeTab === "settings" && <SettingsView />}

          {activeTab === "taste-profile" && <TasteProfileView />}
        </main>
      </div>

      {/* Notifications Modal Popover */}
      {isNotificationsOpen && (
        <NotificationsModal
          onClose={() => setIsNotificationsOpen(false)}
          onNavigateTab={(tab) => setActiveTab(tab)}
        />
      )}

      {/* Floating AI Chat Popover Button */}
      <FloatingAiChat
        onSelectMovie={(movie) => setSelectedMovie(movie)}
        onToggleWatchlist={handleToggleWatchlist}
        watchlist={watchlist}
      />

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        watchlistCount={watchlist.length}
      />

      {/* Full Movie Details & Embedded YouTube Trailer Modal */}
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onToggleWatchlist={handleToggleWatchlist}
          isWatchlisted={watchlist.some((w) => w.id === selectedMovie.id)}
        />
      )}
    </div>
  );
}

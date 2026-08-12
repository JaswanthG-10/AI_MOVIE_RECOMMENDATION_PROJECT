"use client";

import React, { useState } from "react";
import { Movie, MOVIES_DATABASE } from "@/data/movies";
import { filterAndRankMovies } from "@/lib/recommendEngine";
import { MovieCard } from "@/components/MovieCard";
import { Sparkles, MessageSquare, Send, Bot, User } from "lucide-react";

interface ChatInterfaceProps {
  onSelectMovie: (movie: Movie) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSelectMovie }) => {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const promptChips = [
    "Best Tamil action movies",
    "Mind bending thrillers like Inception",
    "Emotional breakup tearjerkers",
    "Movies to watch with family",
    "Plot twist crime mysteries"
  ];

  const handleSearch = (textToSearch: string) => {
    if (!textToSearch.trim()) return;
    const matches = filterAndRankMovies({ query: textToSearch });
    setResults(matches);
    setHasSearched(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-4 sm:p-8 font-sora">
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl text-[#F2F0E6]">
          Lumina <span className="text-[#E8A33D]">Conversational AI Assistant</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#A9AABF]">
          Ask natural language questions. Lumina AI analyzes mood, genre, and storytelling intent to explain why each movie fits.
        </p>
      </div>

      {/* Suggested Chips */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {promptChips.map((chip) => (
          <button
            key={chip}
            onClick={() => {
              setPrompt(chip);
              handleSearch(chip);
            }}
            className="px-3.5 py-1.5 rounded-full bg-[#171B2E] border border-[#33395a] text-xs text-[#A9AABF] hover:border-[#E8A33D] hover:text-[#F2F0E6] transition-all flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#3FA796]" /> {chip}
          </button>
        ))}
      </div>

      {/* Search Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(prompt);
        }}
        className="relative max-w-2xl mx-auto"
      >
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='e.g. "I am sad and want emotional movies" or "High octane Tamil action"...'
          className="w-full bg-[#171B2E] text-xs sm:text-sm text-[#F2F0E6] placeholder-[#6B6E8A] rounded-xl pl-4 pr-12 py-3.5 border border-[#33395a] focus:border-[#E8A33D] outline-none shadow-xl"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-[#E8A33D] text-[#0F1220] hover:bg-[#E8A33D]/90"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Search Results with AI Explanation */}
      {hasSearched && (
        <div className="space-y-6 pt-4 border-t border-[#33395a] animate-in fade-in">
          <div className="p-4 rounded-xl bg-[#171B2E] border border-[#3FA796]/40 flex items-start gap-3">
            <Bot className="w-5 h-5 text-[#3FA796] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-heading text-sm text-[#3FA796]">Lumina AI Recommendation Synthesis</h4>
              <p className="text-xs text-[#F2F0E6] mt-1">
                Analyzed your intent for "{prompt}". Returned {results.length} recommendations filtered strictly by mood and genre relevance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {results.map((m) => (
              <MovieCard key={m.id} movie={m} score={m.matchScore} onSelectMovie={onSelectMovie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

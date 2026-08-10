"use client";

import React, { useState } from "react";
import { Movie } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { Sparkles, Send, Bot, User, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  recommendations?: Movie[];
}

interface ChatInterfaceProps {
  onSelectMovie: (movie: Movie) => void;
  onToggleWatchlist: (movie: Movie) => void;
  watchlist: Movie[];
  initialQuery?: string;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  onSelectMovie,
  onToggleWatchlist,
  watchlist,
  initialQuery = ""
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello Marcus! I'm Lumina AI, your personal film concierge. Tell me what mood you're in, your favorite movies, or what specific experience you're seeking today!"
    }
  ]);
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);

  const samplePrompts = [
    "I want an emotional movie with a happy ending",
    "Mind-bending sci-fi thriller like Inception",
    "Hilarious comedy for a rainy family night",
    "Hidden sci-fi gems with visual masterpiece scenes",
    "Oscar-winning psychological dramas"
  ];

  const handleSendMessage = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    const userMsgId = Date.now().toString();
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: "user", text: queryText }
    ];

    setMessages(newMessages);
    setInputQuery("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: queryText })
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.recommendations && data.recommendations.length > 0) {
        setMessages([
          ...newMessages,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: `Based on your request "${queryText}", I analyzed over 5,000 films and selected these top matches tailored to your specific vibe:`,
            recommendations: data.recommendations
          }
        ]);
      } else {
        setMessages([
          ...newMessages,
          {
            id: (Date.now() + 1).toString(),
            sender: "ai",
            text: "I couldn't find an exact match for that specific prompt. Could you try rephrasing your mood or mentioning a movie title you enjoy?"
          }
        ]);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      setMessages([
        ...newMessages,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Apologies, I encountered a temporary connection issue. Please try again!"
        }
      ]);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-65px)] max-w-6xl mx-auto p-4 sm:p-6">
      {/* Chat Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-6 pr-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 sm:gap-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && (
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-950/60">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-4xl rounded-2xl p-4 ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white rounded-tr-none shadow-lg shadow-purple-950/40"
                  : "glass-card text-zinc-100 rounded-tl-none border-zinc-800"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>

              {/* Inline Movie Recommendation Cards Grid */}
              {msg.recommendations && msg.recommendations.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {msg.recommendations.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onSelectMovie={onSelectMovie}
                      onToggleWatchlist={onToggleWatchlist}
                      isWatchlisted={watchlist.some((w) => w.id === movie.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {msg.sender === "user" && (
              <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center text-white shrink-0 animate-spin">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div className="glass-card rounded-2xl px-4 py-3 text-xs text-purple-300 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-purple-400" />
              <span>Lumina AI is analyzing neural movie clusters...</span>
            </div>
          </div>
        )}
      </div>

      {/* Preset Prompts Chips */}
      <div className="py-3 flex flex-wrap gap-2 overflow-x-auto">
        {samplePrompts.map((promptText) => (
          <button
            key={promptText}
            onClick={() => handleSendMessage(promptText)}
            className="text-xs px-3 py-1.5 rounded-full bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-purple-500/50 hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3 h-3 text-purple-400" /> {promptText}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputQuery);
        }}
        className="mt-2 relative flex items-center"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Describe your mood, favorite directors, or what you want to watch..."
          className="w-full bg-zinc-900/90 text-sm text-white placeholder-zinc-500 rounded-full pl-5 pr-14 py-3.5 border border-zinc-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all shadow-inner"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || isLoading}
          className="absolute right-2 p-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-purple-950"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

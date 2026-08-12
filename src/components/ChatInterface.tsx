"use client";

import React, { useState, useRef, useEffect } from "react";
import { Movie } from "@/data/movies";
import { filterAndRankMovies } from "@/lib/recommendEngine";
import { MovieCard } from "@/components/MovieCard";
import {
  Sparkles, Send, Bot, ThumbsUp, ThumbsDown, RotateCcw,
  Zap, Brain, Film, Heart, Flame, Star
} from "lucide-react";

interface ChatInterfaceProps {
  onSelectMovie: (movie: Movie) => void;
}

// ── Staggered query chip data ──────────────────────────────
const PROMPT_CHIPS = [
  { label: "Best Tamil action",        icon: Flame,   color: "text-[#D4AF6A]" },
  { label: "Mind-bending thrillers",   icon: Brain,   color: "text-[#E8C27D]" },
  { label: "Emotional tearjerkers",    icon: Heart,   color: "text-[#7A2E3A]" },
  { label: "Family movies tonight",    icon: Film,    color: "text-[#E8C27D]" },
  { label: "Best sci-fi of all time",  icon: Zap,     color: "text-[#D4AF6A]" },
  { label: "Top IMDb crime dramas",    icon: Star,    color: "text-[#C5C2B9]" },
];

// ── Typing dot component ───────────────────────────────────
const ThinkingDots = () => (
  <div className="flex items-center gap-1.5 py-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-[#EC4899] opacity-70"
        style={{
          animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
        }}
      />
    ))}
    <span className="font-mono-num text-[10px] text-[#EC4899] ml-1 tracking-wider">
      LUMINA AI IS ANALYZING FILM ARCHIVES...
    </span>
  </div>
);

// ── Skeleton card placeholder ──────────────────────────────
const SkeletonCard = ({ delay }: { delay: number }) => (
  <div
    className="rounded-xl overflow-hidden border"
    style={{
      animationDelay: `${delay}ms`,
      borderColor: "rgba(212, 175, 106, 0.12)"
    }}
  >
    <div className="aspect-[2/3] shimmer" />
    <div className="p-3.5 space-y-2 bg-[#121115]">
      <div className="h-2.5 w-3/4 rounded shimmer" />
      <div className="h-2 w-1/2 rounded shimmer" />
    </div>
  </div>
);

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ onSelectMovie }) => {
  const [prompt, setPrompt]           = useState("");
  const [results, setResults]         = useState<Movie[]>([]);
  const [lastQuery, setLastQuery]     = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isThinking, setIsThinking]   = useState(false);
  const [isStreaming, setIsStreaming]  = useState(false);
  const [feedback, setFeedback]       = useState<"up" | "down" | null>(null);
  const [chipsVisible, setChipsVisible] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Stagger chip entrance on mount
  useEffect(() => {
    const t = setTimeout(() => setChipsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleSearch = async (text: string) => {
    if (!text.trim()) return;
    setLastQuery(text);
    setHasSearched(true);
    setFeedback(null);
    setIsThinking(true);
    setIsStreaming(false);
    setResults([]);

    // Simulate AI "thinking" delay (600ms)
    await new Promise((r) => setTimeout(r, 600));
    setIsThinking(false);
    setIsStreaming(true);

    // Stream cards in progressively
    const matches = filterAndRankMovies({ query: text });
    const batchSize = 3;
    for (let i = 0; i < matches.length; i += batchSize) {
      await new Promise((r) => setTimeout(r, 220));
      setResults((prev) => [...prev, ...matches.slice(i, i + batchSize)]);
    }
    setIsStreaming(false);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  const handleRegenerate = () => {
    setPrompt(lastQuery);
    handleSearch(lastQuery);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 p-6 sm:p-10">

      {/* ── Hero header ── */}
      <div className="text-center space-y-3 max-w-2xl mx-auto animate-roll-on">
        <div className="inline-flex items-center gap-2 badge-teal mb-2">
          <Sparkles className="w-3 h-3 animate-pulse text-[#F472B6]" />
          Lumina Deep Recommendation Engine
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl text-[#F1F3FA] leading-none tracking-tight">
          LUMINA <span className="text-gradient-amber">CONVERSATIONAL AI</span>
        </h2>
        <p className="font-body text-sm text-[#B0B6D0] leading-relaxed">
          Describe your mood, craving, or vibe in plain language.
          Lumina AI analyzes intent and surfaces the perfect films — never the same list twice.
        </p>
      </div>

      {/* ── Staggered query chips ── */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {PROMPT_CHIPS.map((chip, i) => {
          const Icon = chip.icon;
          return (
            <button
              key={chip.label}
              onClick={() => { setPrompt(chip.label); handleSearch(chip.label); }}
              className="px-3.5 py-2 rounded-full bg-[#111530] border text-xs font-body text-[#B0B6D0]
                         hover:border-[#EC4899]/60 hover:text-[#F1F3FA] hover:bg-[#181E40]
                         transition-all duration-200 flex items-center gap-1.5 animate-fade-up cursor-pointer"
              style={{
                borderColor: "rgba(37, 99, 235, 0.25)",
                animationDelay: `${i * 55}ms`,
                opacity: chipsVisible ? 1 : 0,
              }}
            >
              <Icon className={`w-3 h-3 ${chip.color}`} />
              {chip.label}
            </button>
          );
        })}
      </div>

      {/* ── AI Search bar (glass pill with animated gradient border) ── */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleSearch(prompt); }}
        className="relative max-w-2xl mx-auto ai-border rounded-xl animate-roll-on stagger-3"
      >
        <div className="relative flex items-center">
          <Bot className="w-4 h-4 text-[#EC4899] absolute left-4 shrink-0 animate-pulse" />
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='"I want emotional Tamil dramas" · "Mind-bending sci-fi" · "90s comedies"...'
            className="glass-input w-full font-body text-xs sm:text-sm text-[#F1F3FA] placeholder-[#6A7194]
                       rounded-xl pl-10 pr-28 py-4"
          />
          <button
            type="submit"
            disabled={isThinking}
            className="absolute right-2 btn-primary !py-2 !px-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isThinking
              ? <span className="animate-pulse font-mono-num text-[10px]">...</span>
              : <><Send className="w-3.5 h-3.5" /> <span>ASK AI</span></>
            }
          </button>
        </div>

        {/* Thinking indicator below input */}
        {isThinking && (
          <div className="px-4 pb-3 pt-1">
            <ThinkingDots />
          </div>
        )}
      </form>

      {/* ── Results area ── */}
      {hasSearched && (
        <div ref={resultsRef} className="space-y-6 pt-4" style={{ borderTop: "1px solid rgba(212, 175, 106, 0.15)" }}>

          {/* AI synthesis banner */}
          {!isThinking && (
            <div
              className="p-4 rounded-xl flex items-start gap-3 animate-roll-on border"
              style={{
                background: "rgba(18, 17, 21, 0.95)",
                borderColor: "rgba(212, 175, 106, 0.18)"
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-[#7A2E3A]/20 border border-[#7A2E3A]/40 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-[#E8C27D]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h4 className="font-heading text-sm text-[#EC4899] tracking-wide">
                    LUMINA AI — RECOMMENDATION SYNTHESIS
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono-num text-[10px] text-[#87847B]">{results.length} results</span>
                    {isStreaming && (
                      <span className="badge-teal text-[9px] animate-pulse">STREAMING</span>
                    )}
                  </div>
                </div>
                <p className="font-body text-xs text-[#C5C2B9] mt-1.5 leading-relaxed">
                  Query interpreted: <span className="text-[#F7F5F0] italic">"{lastQuery}"</span>
                  {" — "} surfaced {results.length} films ranked by mood, genre, and contextual relevance.
                  Each result is unique to your exact phrasing.
                </p>
              </div>
            </div>
          )}

          {/* Streaming skeleton placeholders */}
          {isStreaming && results.length < 3 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[0, 1, 2, 3, 4].map((i) => (
                <SkeletonCard key={i} delay={i * 80} />
              ))}
            </div>
          )}

          {/* Results grid — cards stream in */}
          {results.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {results.map((m, i) => (
                <div
                  key={m.id}
                  className="animate-roll-on"
                  style={{ animationDelay: `${(i % 3) * 60}ms` }}
                >
                  <MovieCard
                    movie={m}
                    score={m.matchScore}
                    onSelectMovie={onSelectMovie}
                    showAiReasoning={true} // In AI search view we show the details
                  />
                </div>
              ))}
            </div>
          )}

          {/* Zero state */}
          {!isThinking && !isStreaming && results.length === 0 && (
            <div className="text-center py-16 space-y-3 animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-[#121115] border border-[#33303A] flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7 text-[#87847B]" />
              </div>
              <p className="font-heading text-lg text-[#C5C2B9]">No confident matches found</p>
              <p className="font-body text-xs text-[#87847B] max-w-xs mx-auto">
                Try rephrasing your query, adding a genre, or using one of the suggestion chips above.
              </p>
            </div>
          )}

          {/* ── Feedback loop ── */}
          {!isThinking && !isStreaming && results.length > 0 && (
            <div className="flex items-center justify-center gap-4 pt-4 animate-fade-up flex-wrap">
              <span className="font-mono-num text-[10px] text-[#87847B] uppercase tracking-wider">
                Were these recommendations helpful?
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFeedback("up")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-body transition-all cursor-pointer"
                  style={{
                    background: feedback === "up" ? "rgba(236, 72, 153, 0.15)" : "rgba(18, 17, 21, 0.6)",
                    borderColor: feedback === "up" ? "#EC4899" : "rgba(37, 99, 235, 0.2)",
                    color: feedback === "up" ? "#EC4899" : "#B0B6D0"
                  }}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${feedback === "up" ? "fill-current" : ""}`} />
                  Yes
                </button>
                <button
                  onClick={() => setFeedback("down")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-body transition-all cursor-pointer"
                  style={{
                    background: feedback === "down" ? "rgba(37, 99, 235, 0.15)" : "rgba(18, 17, 21, 0.6)",
                    borderColor: feedback === "down" ? "#2563EB" : "rgba(37, 99, 235, 0.2)",
                    color: feedback === "down" ? "#60A5FA" : "#B0B6D0"
                  }}
                >
                  <ThumbsDown className={`w-3.5 h-3.5 ${feedback === "down" ? "fill-current" : ""}`} />
                  No
                </button>
                <button
                  onClick={handleRegenerate}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-[#111530] text-[#B0B6D0] hover:text-[#EC4899] text-xs font-body transition-all cursor-pointer"
                  style={{ borderColor: "rgba(37, 99, 235, 0.25)" }}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Regenerate
                </button>
              </div>
              {feedback && (
                <span className="font-mono-num text-[10px] text-[#EC4899] animate-fade-up">
                  {feedback === "up" ? "✓ Thanks! Lumina AI will refine its search." : "↻ Got it — we'll improve."}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

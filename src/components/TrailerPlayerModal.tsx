"use client";

import React, { useEffect, useState } from 'react';
import { X, Play, Film, Star, Clock, ExternalLink, Info } from 'lucide-react';
import { fetchTrailerForMovie, TrailerResult } from '@/lib/trailerService';
// Ensure this path matches the actual Movie type location in the project
import { Movie } from '@/data/movies';

interface TrailerPlayerModalProps {
  movie: Movie;
  onClose: () => void;
  onViewDetails?: (movie: Movie) => void;
}

export const TrailerPlayerModal: React.FC<TrailerPlayerModalProps> = ({ movie, onClose, onViewDetails }) => {
  const [trailerState, setTrailerState] = useState<'loading' | 'playing' | 'unavailable'>('loading');
  const [trailerData, setTrailerData] = useState<TrailerResult | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadTrailer() {
      const result = await fetchTrailerForMovie(
        movie.title, 
        movie.year, 
        movie.language || '', 
        movie.trailerId
      );
      
      if (isMounted) {
        if (result.youtubeKey) {
          setTrailerData(result);
          setTrailerState('playing');
        } else {
          setTrailerState('unavailable');
        }
      }
    }

    loadTrailer();

    return () => {
      isMounted = false;
    };
  }, [movie]);

  const handleClose = () => {
    setIsClosing(true);
    setTrailerState('loading'); // Clear iframe effectively by stopping rendering it
    setTimeout(() => {
      onClose();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchYoutube = () => {
    const query = encodeURIComponent(`${movie.title} ${movie.year} official trailer`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  return (
    <div 
      className={`fixed inset-0 z-[60] bg-black/92 backdrop-blur-xl flex items-center justify-center p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleClose}
    >
      <div 
        className={`max-w-[1100px] w-full mx-auto bg-[#0B0E20] border border-[#2563EB]/30 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`}
        style={{ boxShadow: '0 0 60px rgba(37, 99, 235, 0.15), 0 0 120px rgba(236, 72, 153, 0.08)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#2563EB]/20">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl text-[#F1F3FA] flex items-center gap-3">
              {movie.title}
              {trailerState === 'playing' && trailerData?.type && (
                <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/30 font-mono-num">
                  {trailerData.type}
                </span>
              )}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-[#B0B6D0] font-mono-num">
              <span>{movie.year}</span>
              
              {movie.runtime && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#B0B6D0]/50" />
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {movie.runtime}</span>
                </>
              )}
              
              {movie.imdbRating && (
                <>
                  <span className="w-1 h-1 rounded-full bg-[#B0B6D0]/50" />
                  <span className="flex items-center gap-1 text-[#F59E0B]"><Star className="w-3 h-3 fill-current" /> {movie.imdbRating}/10</span>
                </>
              )}
              
              {movie.genres && movie.genres.length > 0 && (
                <div className="flex gap-2 ml-2">
                  {movie.genres.slice(0, 3).map(g => (
                    <span key={g} className="text-[10px] px-2.5 py-1 rounded-lg bg-[#2563EB]/10 text-[#60A5FA] border border-[#2563EB]/30 font-body">
                      {g}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#111530]/80 border border-[#2563EB]/30 hover:border-[#EC4899] text-[#B0B6D0] hover:text-[#F1F3FA] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player / States */}
        <div className="relative bg-black w-full aspect-video">
          
          {trailerState === 'loading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060813] animate-pulse">
              <Film className="w-12 h-12 text-[#2563EB]/40 mb-4" />
              <div className="h-4 w-32 bg-[#2563EB]/20 rounded mb-2"></div>
              <div className="h-3 w-48 bg-[#111530] rounded"></div>
            </div>
          )}

          {trailerState === 'playing' && trailerData?.youtubeKey && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${trailerData.youtubeKey}?autoplay=1&rel=0&modestbranding=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
            ></iframe>
          )}

          {trailerState === 'unavailable' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060813] p-6 text-center">
              <Film className="w-16 h-16 text-[#B0B6D0]/30 mb-4" />
              <h3 className="font-heading text-xl text-[#F1F3FA] mb-2">Official trailer not available</h3>
              <p className="font-body text-[#B0B6D0] mb-8 max-w-md">
                We couldn't find an official trailer for this title
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleSearchYoutube}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#EC4899] text-white font-body hover:opacity-90 transition-opacity"
                >
                  <Play className="w-4 h-4" /> Search on YouTube
                </button>
                
                {onViewDetails && (
                  <button 
                    onClick={() => {
                      handleClose();
                      // Wait for close animation
                      setTimeout(() => onViewDetails(movie), 300);
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#2563EB]/30 text-[#F1F3FA] font-body hover:bg-[#2563EB]/10 transition-colors"
                  >
                    <Info className="w-4 h-4" /> View Movie Details
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {trailerState === 'playing' && (
          <div className="px-6 py-3 bg-[#060813] text-right">
            <p className="text-[10px] text-[#B0B6D0]/50 font-body">Powered by TMDB</p>
          </div>
        )}
      </div>
    </div>
  );
}

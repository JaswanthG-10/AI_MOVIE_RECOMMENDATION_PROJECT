export interface TrailerResult {
  youtubeKey: string | null;
  videoTitle: string;
  type: string;
  source: 'cache' | 'api' | 'fallback';
}

const CACHE_PREFIX = 'lum_trailer_';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}

function getCacheKey(title: string, year: number): string {
  return `${CACHE_PREFIX}${normalizeTitle(title)}_${year}`;
}

export function getCachedTrailer(title: string, year: number): TrailerResult | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const key = getCacheKey(title, year);
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsed = JSON.parse(item);
    if (parsed.expiry && parsed.expiry > Date.now()) {
      return { ...parsed.data, source: 'cache' };
    }
    // Expired cache entry
    localStorage.removeItem(key);
  } catch (e) {
    // Ignore parse errors, just return null
  }
  return null;
}

export async function fetchTrailerForMovie(
  title: string,
  year: number,
  language: string,
  fallbackTrailerId?: string
): Promise<TrailerResult> {
  const cached = getCachedTrailer(title, year);
  if (cached) return cached;

  try {
    const url = new URL('/api/trailer', window.location.origin);
    url.searchParams.set('title', title);
    if (year) url.searchParams.set('year', year.toString());
    if (language) url.searchParams.set('language', language);

    const response = await fetch(url.toString());
    if (response.ok) {
      const data = await response.json();
      
      if (data.youtubeKey) {
        const result: TrailerResult = {
          youtubeKey: data.youtubeKey,
          videoTitle: data.videoTitle || `${title} Official Trailer`,
          type: data.type || 'Trailer',
          source: 'api'
        };

        if (typeof window !== 'undefined') {
          localStorage.setItem(getCacheKey(title, year), JSON.stringify({
            data: result,
            expiry: Date.now() + CACHE_TTL
          }));
        }
        
        return result;
      }
    }
  } catch (e) {
    console.error('Failed to fetch trailer from API', e);
  }

  // Fallback to provided trailer ID if API fails or returns no video
  let fallbackKey = fallbackTrailerId || "0vxOhge_12k";
  if (fallbackKey === "zSWdZAZE3Dc") fallbackKey = "0vxOhge_12k";

  return {
    youtubeKey: fallbackKey,
    videoTitle: `${title} Trailer`,
    type: 'Trailer',
    source: 'fallback'
  };
}

export function prefetchTrailers(movies: Array<{title: string; year: number; language: string}>): void {
  if (typeof window === 'undefined') return;

  const toFetch = movies.filter(m => !getCachedTrailer(m.title, m.year));
  if (toFetch.length === 0) return;

  toFetch.forEach((movie, index) => {
    setTimeout(() => {
      Promise.allSettled([
        fetchTrailerForMovie(movie.title, movie.year, movie.language)
      ]);
    }, index * 100); // 100ms stagger between calls
  });
}

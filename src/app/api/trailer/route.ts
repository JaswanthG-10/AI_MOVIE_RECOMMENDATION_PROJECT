import { NextResponse } from 'next/server';

// In-memory cache for TMDB responses
interface CacheEntry {
  data: any;
  expiry: number;
}
const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hour

const LANG_MAP: Record<string, string> = {
  'tamil': 'ta',
  'hindi': 'hi',
  'telugu': 'te',
  'malayalam': 'ml',
  'korean': 'ko',
  'japanese': 'ja',
  'spanish': 'es',
  'french': 'fr',
  'english': 'en'
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title');
    const year = searchParams.get('year');
    const language = searchParams.get('language');

    if (!title) {
      return NextResponse.json({ youtubeKey: null, error: 'Missing title parameter' }, { status: 200 });
    }

    const tmdbKey = process.env.TMDB_API_KEY;
    if (!tmdbKey) {
      return NextResponse.json({ youtubeKey: null, error: 'TMDB API key not configured' }, { status: 200 });
    }

    // Cache check
    const cacheKey = `${title}_${year || ''}_${language || ''}`;
    const cached = cache.get(cacheKey);
    if (cached && cached.expiry > Date.now()) {
      return NextResponse.json(cached.data);
    }

    // Resolve language code
    let langCode = '';
    if (language) {
      const lowerLang = language.toLowerCase();
      langCode = LANG_MAP[lowerLang] || language;
    }

    // 1. Search for the movie
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&api_key=${tmdbKey}`;
    if (year) searchUrl += `&year=${year}`;
    if (langCode) searchUrl += `&language=${langCode}`;

    let searchRes = await fetch(searchUrl);
    let searchData = await searchRes.json();

    // Fallback: If no results and language was used, try without language filter
    if ((!searchData.results || searchData.results.length === 0) && langCode) {
      let fallbackUrl = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(title)}&api_key=${tmdbKey}`;
      if (year) fallbackUrl += `&year=${year}`;
      searchRes = await fetch(fallbackUrl);
      searchData = await searchRes.json();
    }

    if (!searchData.results || searchData.results.length === 0) {
      const result = { youtubeKey: null, error: 'Movie not found on TMDB' };
      cache.set(cacheKey, { data: result, expiry: Date.now() + CACHE_TTL });
      return NextResponse.json(result);
    }

    const tmdbId = searchData.results[0].id;

    // 2. Fetch videos for the movie
    let videosUrl = `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${tmdbKey}`;
    if (langCode) videosUrl += `&language=${langCode}`;

    let videosRes = await fetch(videosUrl);
    let videosData = await videosRes.json();

    // Fallback: If no videos and language was used, try without language
    if ((!videosData.results || videosData.results.length === 0) && langCode) {
      const fallbackVideosUrl = `https://api.themoviedb.org/3/movie/${tmdbId}/videos?api_key=${tmdbKey}`;
      videosRes = await fetch(fallbackVideosUrl);
      videosData = await videosRes.json();
    }

    const videos = videosData.results || [];

    if (videos.length === 0) {
      const result = { youtubeKey: null, error: 'No videos found for this movie' };
      cache.set(cacheKey, { data: result, expiry: Date.now() + CACHE_TTL });
      return NextResponse.json(result);
    }

    // 3. Priority filter for YouTube trailers
    const officialTrailer = videos.find((v: any) => v.official === true && v.type === 'Trailer' && v.site === 'YouTube');
    const anyTrailer = videos.find((v: any) => v.type === 'Trailer' && v.site === 'YouTube');
    const teaser = videos.find((v: any) => v.type === 'Teaser' && v.site === 'YouTube');
    const anyYoutube = videos.find((v: any) => v.site === 'YouTube');

    const selectedVideo = officialTrailer || anyTrailer || teaser || anyYoutube;

    if (selectedVideo) {
      const result = {
        youtubeKey: selectedVideo.key,
        videoTitle: selectedVideo.name,
        type: selectedVideo.type
      };
      cache.set(cacheKey, { data: result, expiry: Date.now() + CACHE_TTL });
      return NextResponse.json(result);
    }

    const result = { youtubeKey: null, error: 'No YouTube videos found' };
    cache.set(cacheKey, { data: result, expiry: Date.now() + CACHE_TTL });
    return NextResponse.json(result);

  } catch (error: any) {
    return NextResponse.json({ youtubeKey: null, error: error.message || 'Internal server error' }, { status: 200 });
  }
}

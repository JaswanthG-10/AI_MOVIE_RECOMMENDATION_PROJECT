"use client";

import { use } from "react";
import Home from "../../page";

interface MoviePageProps {
  params: Promise<{ id: string }>;
}

export default function MoviePage({ params }: MoviePageProps) {
  const resolvedParams = use(params);
  return <Home initialTab="home" initialMovieId={resolvedParams.id} />;
}

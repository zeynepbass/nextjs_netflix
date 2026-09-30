import { GenreNavSkeleton } from "@/components/genre-nav";
import { HeroSkeleton } from "@/components/hero";
import { MovieGridSkeleton } from "@/components/movie-grid";

export default function Loading() {
  return (
    <>
      <HeroSkeleton />
      <div className="container content">
        <GenreNavSkeleton />
        <MovieGridSkeleton />
      </div>
    </>
  );
}

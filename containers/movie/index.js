// Eski
// import React from 'react';

import  FeaturedMovie  from "@/components/featured-movie";

const MoviesContainer = ({ movie }) => {
  if (!movie) {
    console.error('Movie prop is undefined or null:', movie);
    return <div>Movie not available</div>;
  }

  return <FeaturedMovie movie={movie} isCompact={false}></FeaturedMovie>;
};

export default MoviesContainer;

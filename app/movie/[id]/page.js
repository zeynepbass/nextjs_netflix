import React from 'react'
import MoviesContainer from "@/containers/movie"
import {notFound}  from "next/navigation"
import Movies from "@/mocks/movies.json"
async function delay(ms){
  return new Promise((resolve)=>setTimeout (resolve,ms));
}

async function MoviePage({params,searchParams}) {
  await delay(2000);
  const movieDetail=Movies.results.find((movie)=>movie.id.toString() === params.id)
  if(!movieDetail){
    notFound();
  }

  if(searchParams.error==="true"){
    throw new Error("Error happened");

  }
  return (
    <div><MoviesContainer movie={movieDetail}/></div>
  )
}

export default MoviePage
import "server-only";

import { createApiSource } from "./api-source";
import { fixtureSource } from "./fixture-source";

const apiKey = process.env.TMDB_API_KEY;

export const tmdb = apiKey ? createApiSource(apiKey) : fixtureSource;

export type { Genre, Movie, MovieDetails } from "./types";

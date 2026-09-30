const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export type PosterSize = "w342" | "w500" | "w780";
export type BackdropSize = "w780" | "w1280" | "original";

export function tmdbImage(path: string, size: PosterSize | BackdropSize) {
  return `${IMAGE_BASE_URL}/${size}${path}`;
}

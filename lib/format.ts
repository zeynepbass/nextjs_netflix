export function releaseYear(date: string) {
  return date ? new Date(date).getFullYear().toString() : null;
}

export function formatRating(voteAverage: number) {
  return voteAverage > 0 ? voteAverage.toFixed(1) : null;
}

export function formatRuntime(minutes: number | null) {
  if (!minutes) return null;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return hours ? `${hours}h ${rest}m` : `${rest}m`;
}

export function parseId(value: string) {
  return /^\d+$/.test(value) ? Number(value) : null;
}

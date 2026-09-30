# Netfilms

A Netflix-inspired movie discovery app built with the Next.js App Router, React Server Components and The Movie Database (TMDB) API. It is fully responsive from 320px phones to wide desktop screens.

![Home page](docs/screenshots/home-desktop.jpg)

## Features

- **Featured hero:** a full-bleed backdrop that highlights the most popular movie
- **Popular and Top Rated** sections in a responsive poster grid
- **Genre browsing:** every TMDB genre is a chip. On mobile the chips scroll sideways, and on desktop they wrap onto more lines
- **Movie details:** poster, rating, release year, runtime, tagline, genres and overview
- **Loading skeletons** for every route, plus custom error and 404 pages
- **Per-page SEO metadata,** including Open Graph images on movie pages
- **Accessibility:** semantic HTML, keyboard focus styles and support for `prefers-reduced-motion`
- **Offline data:** without an API key the app runs on bundled fixture data, so it works out of the box

## Screenshots

| Genre | Movie details |
| --- | --- |
| ![Genre page](docs/screenshots/genre-desktop.jpg) | ![Movie details page](docs/screenshots/movie-desktop.jpg) |

| Home (mobile) | Movie details (mobile) |
| --- | --- |
| <img src="docs/screenshots/home-mobile.jpg" alt="Home page on mobile" width="300" /> | <img src="docs/screenshots/movie-mobile.jpg" alt="Movie details page on mobile" width="300" /> |

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- CSS Modules with design tokens in CSS custom properties
- [next/image](https://nextjs.org/docs/app/api-reference/components/image) and [next/font](https://nextjs.org/docs/app/api-reference/components/font)
- [React Icons](https://react-icons.github.io/react-icons)

## Getting Started

### Requirements

- Node.js 20.9 or newer

### Installation

```bash
git clone https://github.com/<your-username>/nextjs_netflix.git
cd nextjs_netflix
npm install
```

### Environment Variables

Copy the example file and add your [TMDB API key](https://www.themoviedb.org/settings/api):

```bash
cp .env.example .env.local
```

```env
TMDB_API_KEY=your_tmdb_api_key
```

If you leave `TMDB_API_KEY` empty, the app uses the bundled fixture data in `lib/tmdb/fixtures`.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server at http://localhost:3000 |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Project Structure

```
app/
  layout.tsx            Root layout, fonts and metadata
  page.tsx              Home page
  genre/[id]/page.tsx   Movies filtered by genre
  movie/[id]/page.tsx   Movie details
  loading.tsx           Route-level skeletons
  error.tsx             Error boundary
  not-found.tsx         404 page
components/             Reusable UI components (one folder each, with CSS Modules)
lib/
  format.ts             Formatting helpers
  tmdb/
    index.ts            Chooses the data source based on the environment
    api-source.ts       TMDB REST client with ISR caching
    fixture-source.ts   Offline data source built from the fixtures
    image.ts            TMDB image URL builder
    types.ts            Shared domain types
```

## Architecture Notes

- **Data source abstraction:** pages depend on the `MovieSource` interface. The live TMDB client and the fixture source both implement it, so pages never need to know where the data comes from.
- **Server-only data access:** the TMDB layer is marked `server-only`, so the API key never reaches the client bundle.
- **Caching:** TMDB responses are revalidated every hour through `fetch` with `next.revalidate`.
- **Responsive layout:** fluid spacing and typography use `clamp()`. The poster grid uses `auto-fill` columns, so no fixed breakpoints are needed.

## Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB.

## License

[MIT](LICENSE)

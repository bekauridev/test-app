// import { useEffect, useState } from "react";
// import styles from "./MoviesPage.module.css";
// import MoviesList from "../components/MoviesList";
// import Loader from "../components/Loader";
// import ErrorMessage from "../components/ErrorMessage";

// const KEY = "64b41325";
// function MoviesPage() {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(
//     function () {
//       const controller = new AbortController();
//       const clearQuery = query.trim();
//       async function fetchMovies() {
//         try {
//           setIsLoading(true);
//           setError("");
//           const res = await fetch(
//             `http://www.omdbapi.com/?apikey=${KEY}&s=${clearQuery}`,
//             {
//               signal: controller.signal,
//             }
//           );

//           if (!res.ok) throw new Error("Something went wrong with fetching movies");

//           const data = await res.json();

//           if (data.Response === "False") throw new Error("Movie not found");
//           setMovies(data.Search);
//           setError("");
//         } catch (err) {
//           console.log(err.message);
//           if (err.name !== "AbortError") {
//             setError(err.message);
//           }
//         } finally {
//           setIsLoading(false);
//         }
//       }

//       if (query.length < 3) {
//         setMovies([]);
//         setError("");
//         return;
//       }

//       fetchMovies();

//       return function () {
//         controller.abort();
//       };
//     },
//     [query]
//   );
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Search Movies</h1>
//       <input
//         className={styles.input}
//         type="text"
//         value={query}
//         placeholder="Movie.."
//         onChange={(e) => setQuery(e.target.value)}
//       />

//       {isLoading && <Loader />}
//       {!isLoading && !error && <MoviesList movies={movies} />}
//       {error && <ErrorMessage message={error} />}
//     </div>
//   );
// }

// export default MoviesPage;

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { useEffect, useState } from "react";
import styles from "./MoviesPage.module.css";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const KEY = "64b41325";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedResults = localStorage.getItem("searchResults");
    if (savedResults) {
      setMovies(JSON.parse(savedResults));
      console.log(JSON.parse(savedResults));
    }
  }, []);

  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    const controller = new AbortController();
    const clearQuery = query.trim();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${clearQuery}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        localStorage.setItem("searchResults", JSON.stringify(data.Search));
        setError("");
      } catch (err) {
        console.log(err.message);
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search Movies</h1>
      <input
        className={styles.input}
        type="text"
        value={query}
        placeholder="Movie.."
        onChange={(e) => setQuery(e.target.value)}
      />

      {isLoading && <Loader />}
      {!isLoading && !error && <MoviesList movies={movies} />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

export default MoviesPage;

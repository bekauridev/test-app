import Movie from "../components/Movie";

function MoviesList({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
}

export default MoviesList;

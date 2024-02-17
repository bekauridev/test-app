import styles from "./Movie.module.css";
function Movie({ movie }) {
  const { Title, Poster, Year } = movie;
  return (
    <div className={styles.movieContainer}>
      <img className={styles.moviePoster} src={Poster} alt={`Movie ${Title}`} />
      <div>
        <p className={styles.year}>{Year}</p>
        <p className={styles.tittle}>{Title}</p>
      </div>
    </div>
  );
}

export default Movie;

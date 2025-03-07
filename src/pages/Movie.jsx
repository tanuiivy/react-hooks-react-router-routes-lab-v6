import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`) 
      .then((res) => res.json())
      .then(setMovie)
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar/>
      </header>
      <main>
        {/* Movie info here! */}
        <h2>{movie.title}</h2>
        <p><strong>Duration:</strong> {movie.time} minutes</p>
        <p><strong>Genres:</strong> {movie.genres.join(", ")}</p>
      </main>
    </>
  );
};

export default Movie;

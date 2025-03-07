import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies") 
      .then((res) => res.json())
      .then(setMovies);
  }, []);

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        <section>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} id={movie.id} title={movie.title} />
            ))
          ) : (
            <p>Loading movies...</p>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;

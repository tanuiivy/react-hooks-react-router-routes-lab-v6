import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then(setActors)
      .catch((error) => console.error("Error fetching actors:", error));
  }, []);
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h2>Actors</h2>
        {actors.length === 0 ? (
          <p>Loading...</p>
        ) : (
          actors.map((actor) => (
            <div key={actor.id}>
              <h3>{actor.name}</h3>
              <p><strong>Movies:</strong> {actor.movies.join(", ")}</p>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Actors;

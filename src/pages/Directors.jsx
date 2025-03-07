import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors]= useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then(setDirectors)
      .catch((error) => console.error("Error fetching directors:", error));
  }, []);


  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h2>Directors</h2>
        {directors.length === 0 ? (
          <p>Loading...</p>
        ) : (
          directors.map((director) => (
            <div key={director.id}>
              <h3>{director.name}</h3>
              <p><strong>Movies:</strong> {director.movies.join(", ")}</p>
            </div>
          ))
        )}
      </main>
    </>
  );
};

export default Directors;

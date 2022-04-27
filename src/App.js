import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

import { data } from "./data";
import MovieCard from "./components/MovieCard";
import MovieInput from "./components/MovieInput";

function App() {
  const [movies, setMovies] = useState(data);
  const [input, setInput] = useState("");
  const [details, setDetails] = useState([]);

  const getInput = (getInput) => {
    setInput(getInput.target.value);
  };

  const getTitle = (getTitle) => {
    console.log(getTitle.currentTarget.title);

    let title = getTitle.currentTarget.title;

    const filterObj = data.filter((e) => e.Title == title);
    setDetails(filterObj);
    console.log(details);
  };

  useEffect(() => {});

  useEffect(() => {
    if (input.length > 1) {
      let filteredMovies = data.filter(
        (movie) =>
          movie.Title.toLowerCase().includes(input.toLowerCase()) ||
          movie.Actors.toLowerCase().includes(input.toLowerCase()) ||
          movie.Director.toLowerCase().includes(input.toLowerCase())
      );
      setMovies(filteredMovies);
      console.log("useEffect");
    } else {
      setMovies(data);
      console.log("reset");
    }
  }, [input]);

  return (
    <div className="App container-fluid">
      <div className="row d-flex my-4 justify-content-end align-items-center">
        <div className="col">
          <h1>React Movie App</h1>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <p>{input}</p>
        </div>
        <MovieInput getInput={getInput} />
      </div>
      <div className="row">
        <MovieCard data={movies} getTitle={getTitle} />
      </div>
      {details.map((detail) => (
        <>
          <p>{detail.Title}</p>
          <p>{detail.Actors}</p>
          <p>{detail.Awards}</p>
        </>
      ))}
    </div>
  );
}

export default App;

import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

import { data } from "./data";
import MovieCard from "./components/MovieCard";
import { MovieHeader } from "./components/header/MovieHeader";

function App() {
  const [movies, setMovies] = useState(data);
  const [input, setInput] = useState("");
  const [details, setDetails] = useState([]);

  // const getInput = (getInput) => {
  //   setInput(getInput.target.value);
  // };

  // get title from clicked element using function
  const getDetails = (title) => {
    let detailTitle = title;

    const filteredDetails = data.filter((movie) => movie.Title == detailTitle);
    setDetails(filteredDetails);
  };

  useEffect(() => {});

  // set movies from typed input using useEffect
  useEffect(() => {
    if (input.length > 0) {
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
      setDetails([]);
    }
  }, [input]);

  return (
    <div className="App container-fluid">
      <MovieHeader getInput={(e) => setInput(e.target.value)} />
      <MovieCard data={movies} handleClick={getDetails} />
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

import "./App.css";

import { useState } from "react";

import { data } from "./data";
import MovieCard from "./components/MovieCard";
import MovieInput from "./components/MovieInput";

function App() {
  console.log(data);

  const [movies, setMovies] = useState(data);
  const [input, setInput] = useState("");

  const getInput = (getInput) => {
    setInput(getInput.target.value);

    if (input.length > 2) {
      const filteredMovies = data.filter((title) =>
        title.Title.toLowerCase().includes(input.toLowerCase())
      );
      setMovies(filteredMovies);
      console.log(movies);
    } else {
      setMovies(data);
    }
    console.log(input.length);
  };

  return (
    <div className="App">
      <h1>React Movie App</h1>
      <p>{input}</p>
      <MovieInput getInput={getInput} />
      <MovieCard data={movies} />
    </div>
  );
}

export default App;

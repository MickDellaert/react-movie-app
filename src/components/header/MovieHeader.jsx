import React from "react";
import MovieInput from "./MovieInput";
import MovieTitle from "./MovieTitle";

export const MovieHeader = ({ getInput, resetInput, input }) => {
  return (
    <>
          <header className="row d-flex my-4 justify-content-end align-items-center">

      <MovieTitle input={input} />
      <MovieInput getInput={getInput} resetInput={resetInput}/>
      </header>
    </>
  );
};

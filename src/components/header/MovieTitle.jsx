const MovieTitle = ({ input }) => {
  return (
    <>
      <div className="col">
        <h1>React Movie App</h1>
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <p>{input}</p>
      </div>
    </>
  );
};

export default MovieTitle;

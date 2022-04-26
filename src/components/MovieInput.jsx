const MovieInput = ({ getInput }) => {
  return (
    <div className="col d-flex justify-content-end">
      <input type="text" onChange={(event) => getInput(event)} />
    </div>
  );
};

export default MovieInput;

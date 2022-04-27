const MovieInput = ({ getInput }) => {
  return (
    <>
      {/* <div className="col d-flex justify-content-end">
        <input
          className="input"
          type="text"
          onChange={(event) => getInput(event)}
        />
      </div> */}
      <div className="input-group input">
        <input
          className="form-control border-end-0 border"
          type="search"
          placeholder="search"
          id="example-search-input"
          onChange={(event) => getInput(event)}
        />
        <span className="input-group-append">
          <button
            className="btn btn-outline-secondary bg-white border-start-0 border-bottom-0 border ms-n5"
            type="button"
          >
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </>
  );
};

export default MovieInput;

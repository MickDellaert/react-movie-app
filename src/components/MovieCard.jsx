const MovieCard = ({ data, handleClick }) => {
  return (
    <div className="row">
      {data.map((titles) => (
        <div
          onClick={(event) => handleClick(event.currentTarget.title)}
          key={titles.Poster}
          className="d-flex my-2 px-2 col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
          title={titles.Title}
        >
          <img
            className="img-fluid w-100"
            src={titles.Poster}
            alt={titles.Title}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

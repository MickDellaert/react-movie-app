const MovieCard = ({ data }) => {
  return data.map((titles, index) => (
    <div className="d-flex my-3 px-3 col-sm-12 col-md-4 col-lg-3 col-xl-2">
      <img
        className="img-fluid w-100"
        key={index}
        src={titles.Poster}
        alt={titles.Title}
      />
    </div>
  ));
};

export default MovieCard;

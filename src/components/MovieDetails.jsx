const MovieDetails = ({ details }) => {
  return details.map((detail, index) => (
    <div key={index} className="movie-details">
      <p>{detail.Title}</p>
      <p>{detail.Actors}</p>
      <p>{detail.Awards}</p>
    </div>
  ));
};

export default MovieDetails;

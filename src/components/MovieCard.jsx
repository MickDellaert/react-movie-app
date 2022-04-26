const MovieCard = ({ data }) => {
  return (
    <div>
      <h2>MovieCard</h2>
      {data.map((titles) => (
        <p>{titles.Title}</p>
      ))}
    </div>
  );
};

export default MovieCard;

const MovieInput = ({getInput}) => {
  return <input type="text" onChange={(event)=> getInput(event)} />;
}
 
export default MovieInput;
import { useParams } from "react-router-dom";

import { getMovieByAlias, getFlims } from "../../db/NewFilm";

const Film = () => {
  const params = useParams();
  console.log(params.alias);

  const movie = getMovieByAlias(params.alias);
  console.log(movie);
  if (!movie) return <p>404 Page Not Found</p>;

  return (
    <>
      <h1>Film: {movie.title}</h1>
      <img src={movie.image} alt="" />
    </>
  );
};

export default Film;

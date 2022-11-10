import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    //console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>영화 정보 불러오는중...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} />
          <h2>
            {movie.title} ({movie.language})
          </h2>
          <hr />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

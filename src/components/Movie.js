import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id,coverImg, title, summary, genres }) {
    return <div>
        <img src={coverImg} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* a태그를 사용해도 되지만 페이지가 전체 세로고침이된다.
            <Link to=""> router-dom 을 사용해 페이지 이동후에도 페이지 의 새로고침을 막는다.
        */}
        <p>{summary}</p>
        <ul>
            {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
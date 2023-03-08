import { IMovie } from "../types/movie";
import DefaultMovie from "../assets/image/movie.png";

const MovieDetail = ({ detail }: { detail: IMovie }) => {
  return (
    <div className="movie-detail">
      {detail ? (
        <>
          <div className="movie-detail-image">
            <img src={detail.backdrop ? detail.backdrop : DefaultMovie} alt="backdrop" />
          </div>
          <div className="movie-detail-title">
            <span>{detail.title}</span>
          </div>
          <div className="movie-detail-overview">{detail.overview}</div>
        </>
      ) : (
        <div className="movie-not-found">No movie detail found</div>
      )}
    </div>
  );
};

export default MovieDetail;

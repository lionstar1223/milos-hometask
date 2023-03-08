import { IMovie } from "../types/movie";
import DefaultMovie from "../assets/image/movie.png";
import MovieDetail from "./MovieDetail";

const MovieItem = ({ movie }: {movie: IMovie}) => {
  return (
    <div className="movie-item">
      <div className="movie-item-content">
        <div className="movie-item-detail">
          <MovieDetail detail={movie} />
        </div>
        {movie.poster ? (
          <img src={movie.poster} className="movie-item-image" alt="movie" />
        ) : (
          <div className="movie-item-default">
            <img src={DefaultMovie} alt='movie' />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieItem;

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { IMovie } from "../types/movie";
import { GET_MOVIES } from "../gql/gql/movie";
import MovieItem from "../components/MovieItem";
import Loading from "../components/Loading";

interface IEdge {
  __typeName: string;
  node: IMovie;
}

const MovieContainer = ({ term }: { term: string }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const { loading } = useQuery(GET_MOVIES, {
    variables: { term: term },
    onCompleted: (data) => {
      const searchResults = data.search.edges;
      const moviesList: IMovie[] = [];
      searchResults.forEach((item: IEdge) => {
        if (item.node && item.node.__typename === "Movie")
          moviesList.push(item.node);
      });

      setMovies(moviesList);
    },
  });

  return (
    <>
      <div className="movie-container-title">
        Matching Movies
        {movies.length > 0 && <span className="movie-search-result">({movies.length} movies found)</span>}
      </div>
      {loading ? (
        <Loading loading={loading} />
      ) : movies.length > 0 ? (
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="movie-not-found">No movies found</div>
      )}
    </>
  );
};

export default MovieContainer;

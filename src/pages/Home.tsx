import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieContainer from "../components/MovieContainer";
import "../assets/styles/movie.css";

const Home = () => {
  const [term, setTerm] = useState<string>('');

  return (
    <div className="container">
      <SearchBar setTerm={setTerm} />
      <MovieContainer term={term} />
    </div>
  );
}

export default Home;

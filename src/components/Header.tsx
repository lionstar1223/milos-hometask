import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>TMDB Search</Link>
    </div>
  );
};

export default Header;

import "../assets/styles/loader.css";

const Arr = Array.from(Array(10).keys());

const Loading = ({ loading }: { loading?: boolean }) => {
  return (
    <div className="movie-container">
      {loading &&
        Arr.map((arr) => (
          <div className="movie-item" key={arr}>
            <div className="movie-item-content loader"></div>
          </div>
        ))}
    </div>
  );
};

export default Loading;

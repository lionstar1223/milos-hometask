import { useState, ChangeEvent, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

const Search = ({ setTerm }: { setTerm: (term: string) => void }) => {
  const [keyword, setKeyword] = useState<string>("");

  const debouncedSearchTerm: string = useDebounce<string>(keyword, 500);

  useEffect(() => {
    setTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setTerm]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <div className="search">
      <input type="search" value={keyword} onChange={handleChange} />
    </div>
  );
};

export default Search;

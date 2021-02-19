import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../utils/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMovies } from "../state/ducks/movies";
import { fetchTv } from "../state/ducks/tv";
import { fetchPeople } from "../state/ducks/people";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ search, setSearch }) => {
  const router = useRouter();
  const showType = router.pathname.split("/")[1];
  const dispatch = useDispatch();
  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    if (showType === "movies") {
      dispatch(
        fetchMovies(
          `api/movies?search=${debouncedSearch}&page=1`,
          "READ_MOVIES"
        )
      );
    } else if (showType === "tv") {
      dispatch(
        fetchTv(`api/tv?search=${debouncedSearch}&page=1`, "READ_SHOWS")
      );
    } else {
      dispatch(
        fetchPeople(
          `/api/people?search=${debouncedSearch}&page=1`,
          "READ_PEOPLE"
        )
      );
    }
  }, [debouncedSearch]);

  return (
    <div className="navigation">
      <div className="navigation__icon">
        <FontAwesomeIcon size="2x" color="gray" icon={faSearch} />
      </div>
      <input
        className="navigation__search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search ${showType}`}
      />
    </div>
  );
};

export default Navigation;

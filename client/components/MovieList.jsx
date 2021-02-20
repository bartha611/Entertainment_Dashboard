import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchMovies } from "../state/ducks/movies";
import usePaginate from "../utils/usePaginate";
import Show from "./Show";

const MovieList = ({ search, personId }) => {
  const router = useRouter();
  const { type = "popular" } = router.query;
  const { movies, page } = useSelector((state) => state.movies);
  const path = `/api/movies?type=${type}&page=${page}&search=${search}&personId=${personId}`;

  usePaginate(path, "PAGINATE", page, fetchMovies);

  return (
    <div className="shows">
      {movies.length > 0 &&
        movies.map((movie, index) => {
          return (
            <Show show={movie} index={index} showType="movies" width={20} />
          );
        })}
    </div>
  );
};

export default MovieList;

import React, { useEffect, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";
import Show from "./Show";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../state/ducks/movies";

const PersonPage = ({ person }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  const { personId } = router.query;
  const getFullDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  useEffect(() => {
    dispatch(
      fetchMovies(`/api/movies?personId=${personId}&page=1`, "READ_MOVIES")
    );
  }, []);

  return (
    <div className="personPage">
      <div className="personPage__content">
        <img
          className="personPage__profile"
          src={person.profile}
          alt="Poster for personPage"
        />
        <div className="personPage__information">
          <div>
            <span className="personPage__name">{person.name}</span>
          </div>
          <div className="personPage__biography">
            {person.biography.split("\n\n").map((paragraph, index) => {
              return <div className="personPage__paragraph">{paragraph}</div>;
            })}
          </div>
        </div>
      </div>
      <TransitionGroup className="personPage__shows">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return <Show show={movie} index={index} showType="movies" />;
          })}
      </TransitionGroup>
    </div>
  );
};

export default PersonPage;

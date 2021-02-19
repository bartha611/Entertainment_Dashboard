import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../state/ducks/movies";
import Show from "./Show";
import FilterDropdown from "./FilterDropdown";

const PersonPage = ({ person }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [department, setDepartment] = useState("Cast & Crew");
  const [showType, setShowType] = useState("movie");
  const { movies } = useSelector((state) => state.movies);
  const { personId } = router.query;

  const getFullDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  useEffect(() => {
    const formattedDepartment =
      department === "Cast & Crew"
        ? "with_people"
        : department === "Cast"
        ? "with_cast"
        : "with_crew";
    dispatch(
      fetchMovies(
        `/api/people/${personId}?&department=${formattedDepartment}&showType=${showType}`,
        "READ_MOVIES"
      )
    );
  }, [showType, department]);

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
      <FilterDropdown
        setShowType={setShowType}
        showType={showType}
        setDepartment={setDepartment}
        department={department}
      />
      <div className="personPage__shows">
        {movies.length > 0 &&
          movies.map((movie, index) => {
            return <Show show={movie} index={index} showType="movies" />;
          })}
      </div>
    </div>
  );
};

export default PersonPage;

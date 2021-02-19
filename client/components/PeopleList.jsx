import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchPeople } from "../state/ducks/people";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import usePaginate from "../utils/usePaginate";

const PeopleList = ({ search }) => {
  const router = useRouter();
  const { people, page } = useSelector((state) => state.people);
  const path = `/api/people?&page=${page}&search=${search}`;

  usePaginate(path, "PAGINATE", page, fetchPeople);

  return (
    <TransitionGroup className="shows">
      {people.length > 0 &&
        people.map((person, index) => {
          return (
            <CSSTransition
              key={person.id}
              classNames="show"
              timeout={100 + (index % 20) * 100}
            >
              <div key={person.id} className="show__item">
                {person.profile && (
                  <img
                    className="show__poster"
                    src={person.profile}
                    alt={person.name}
                    onClick={() => router.push(`/people/${person.id}`)}
                  />
                )}
                {!person.profile && (
                  <div className="show__poster show__poster--empty">
                    <FontAwesomeIcon icon={faUser} size="3x" />
                  </div>
                )}
                <div className="show__title">{person.name}</div>
              </div>
            </CSSTransition>
          );
        })}
    </TransitionGroup>
  );
};

export default PeopleList;

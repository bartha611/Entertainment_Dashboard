import React from "react";
import { useRouter } from "next/router";
import CirclePercentage from "./CirclePercentage";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faUser, faTv } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @param {Object} props - Props of component
 * @param {Object} props.show - Movies type returned by TMDB database
 * @param {Boolean} props.show.adult - Determines whether film is adult or not
 * @param {Number} props.show.id - Movie id
 * @param {String} props.show.overview - Overview of show
 * @param {String} props.show.poster - Poster path for show
 * @param {String} props.show.title - Title of show
 * @param {String} props.show.release_date - Release date of the film
 * @param {Number} props.show.vote_average - Vote average of show
 *
 */

const Show = ({ show, showType, index }) => {
  const router = useRouter();
  const icon =
    showType === "movies" ? faFilm : showType === "tv" ? faTv : faUser;

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toDateString().split(" ").slice(1, 4).join(" ");
  };

  return (
    <div key={show.id} className="show" timeout={100 + (index % 20) * 100}>
      <div key={show.id} className="show__item">
        {show.poster && (
          <img
            className="show__poster"
            alt={show.title}
            src={show.poster}
            onClick={() => router.push(`/${showType}/${show.id}`)}
          />
        )}
        {!show.poster && (
          <div
            className="show__poster show__poster--empty"
            onClick={() => router.push(`'${showType}/${show.id}`)}
          >
            <FontAwesomeIcon icon={icon} size="4x" />
          </div>
        )}
        <div className="show__title">{show.title}</div>
        <div className="show__date">{formatDate(show.release_date)}</div>
        <div className="show__rating">
          <CirclePercentage value={show.vote_average * 10} radius={25} />
        </div>
      </div>
    </div>
  );
};

export default Show;

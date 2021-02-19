import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  faFilm,
  faTv,
  faInfo,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const router = useRouter();
  const type = router.pathname.split("/")[1];
  return (
    <div className="sidebar">
      <div
        onClick={() => router.push("/movies")}
        className={`sidebar__item sidebar__item--${
          type === "movies" ? "active" : "inactive"
        }`}
      >
        <FontAwesomeIcon size="2x" icon={faFilm} />
      </div>
      <div
        onClick={() => router.push("/tv")}
        className={`sidebar__item sidebar__item--${
          type === "tv" ? "active" : "inactive"
        }`}
      >
        <FontAwesomeIcon size="2x" icon={faTv} />
      </div>
      <div className="sidebar__item" onClick={() => router.push("/people")}>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
      <div
        className={`sidebar__item sidebar__item--${
          type === "about" ? "active" : "inactive"
        }`}
        onClick={() => router.push("/about")}
      >
        <FontAwesomeIcon icon={faInfo} size="2x" />
      </div>
    </div>
  );
};

export default Sidebar;

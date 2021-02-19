import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>Film and TV data</h2>
      <p>
        All film and TV data is supplied by{" "}
        <a
          className="about__link"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          The Movie Db.
        </a>
      </p>
      <img className="about__image" src="/tmdb.jpg" alt="Movie db logo" />
      <p>
        This product uses the TMDB api, but is not endorsed or certified by TMDB
      </p>
    </div>
  );
};

export default About;

import React from "react";
import Head from "next/head";
import Rating from "./Rating";
import Actor from "./Actor";

const ShowPage = ({ show, cast }) => {
  const formatGenres = (genres) => {
    return genres.map((genre) => genre.name).join(", ");
  };

  const getFullDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  const formatRuntime = (runtime) => {
    return `${Math.floor(runtime / 60)}h ${runtime % 60}m`;
  };

  return (
    <div className="showPage">
      <Head>
        <title>{show.title}</title>
      </Head>
      <div
        className="showPage__background"
        style={{
          backgroundImage: `url(${show.backdrop})`
        }}
      >
        <div className="showPage__overlay">
          <div className="showPage__content">
            <img
              className="showPage__poster"
              src={show.poster}
              alt="Poster for showPage"
            />
            <div className="showPage__information">
              <div>
                <span className="showPage__title">{show.title} </span>
                <span className="showPage__year">
                  ({getYear(show.release_date)})
                </span>
              </div>
              <div className="showPage__extraInfo">
                <span className="showPage__rated">{show.rated}</span>
                <span className="showPage__date">
                  {getFullDate(show.release_date)}
                </span>
                <span className="showPage__genres">
                  {formatGenres(show.genres)}
                </span>
                {show.runtime && (
                  <span className="showPage__runtime">
                    {formatRuntime(show.runtime)}
                  </span>
                )}
              </div>
              <div className="showPage__reviews">
                {show.ratings &&
                  show.ratings?.map((rating) => {
                    return <Rating rating={rating} />;
                  })}
              </div>
              <div className="showPage__overview">{show.overview}</div>
              <h1>Cast</h1>
              <div className="showPage__cast">
                {cast?.map((actor) => {
                  return <Actor actor={actor} width={13} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;

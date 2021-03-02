import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Actor = ({ actor, width }) => {
  const router = useRouter();
  return (
    <div key={actor.id} className="actor">
      <div key={actor.id} className="actor__item">
        {actor.profile && (
          <img
            className="actor__poster"
            src={actor.profile}
            alt={actor.name}
            style={{
              width: `${!width ? "20" : width}rem`,
              height: `${!width ? "30" : width * 1.5}rem`
            }}
            onClick={() => router.push(`/people/${actor.id}`)}
          />
        )}
        {!actor.profile && (
          <div
            className="actor__poster actor__poster--empty"
            style={{
              width: `${!width ? "20" : width}rem`,
              height: `${!width ? "30" : width * 1.5}rem`
            }}
          >
            <FontAwesomeIcon icon={faUser} size="3x" />
          </div>
        )}
        <div className="actor__title">{actor.name}</div>
        {actor.character && (
          <div className="actor__character">{actor.character}</div>
        )}
      </div>
    </div>
  );
};

export default Actor;

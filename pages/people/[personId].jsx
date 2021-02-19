import axios from "axios";
import Sidebar from "../../client/components/Sidebar";
import PersonPage from "../../client/components/PersonPage";
import PersonCollection from "../../client/state/utils/PersonCollection";

export default function Person({ person }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        minWidth: "100vw",
        overflow: "hidden"
      }}
    >
      <Sidebar />
      <PersonPage person={person} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { personId } = context.query;
  const tmdb = process.env.api_key;
  const tmdb_url = `https://api.themoviedb.org/3/person/${personId}?api_key=${tmdb}`;
  try {
    const { data: person } = await axios.get(tmdb_url);
    return {
      props: {
        person: PersonCollection(person)
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
}

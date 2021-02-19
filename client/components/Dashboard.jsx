import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navigation from "./Navigation";
import MovieList from "./MovieList";
import TvList from "./TvList";
import PeopleList from "./PeopleList";
import About from "./About";

const Dashboard = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const showType = router.pathname.split("/")[1];

  useEffect(() => {
    const element = document.querySelector(".shows");
    if (element) {
      element.scrollTo(0, 0);
    }
  }, [search]);

  return (
    <div className="dashboard" style={{ backgroundImage: "url(/Outside.jpg)" }}>
      <div className="dashboard__overlay">
        <div className="dashboard__box">
          <Sidebar />
          <div className="dashboard__content">
            <Navigation search={search} setSearch={setSearch} />
            {showType === "movies" && <MovieList search={search} personId="" />}
            {showType === "tv" && <TvList search={search} />}
            {showType === "about" && <About />}
            {showType === "people" && <PeopleList search={search} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

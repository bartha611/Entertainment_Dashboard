import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchTv } from "../state/ducks/tv";
import usePaginate from "../utils/usePaginate";
import Show from "./Show";

const TvList = ({ search }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { type = "popular" } = router.query;
  const { tvShows, page } = useSelector((state) => state.tv);
  const path = `/api/tv?type=${type}&page=${page}&search=${search}`;

  useEffect(() => {
    if (router.asPath !== router.query) {
      dispatch(fetchTv(`/api/tv?type=${type}&page=1`, "READ_SHOWS"));
    }
  }, [router, dispatch]);

  usePaginate(path, "PAGINATE", page, fetchTv);

  return (
    <div className="shows">
      {tvShows.length > 0 &&
        tvShows.map((show, index) => {
          return <Show show={show} index={index} showType="tv" width={20} />;
        })}
    </div>
  );
};

export default TvList;

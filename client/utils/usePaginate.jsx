import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const usePaginate = (path, operation, page, thunkFunction) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleScroll = async () => {
    const element = document.querySelector(".shows");
    if (
      element.scrollHeight - element.scrollTop - element.clientHeight > 75 ||
      !page ||
      loading
    ) {
      return;
    }
    setLoading(true);
    await dispatch(thunkFunction(path, operation));
    setLoading(false);
  };

  useEffect(() => {
    const element = document.querySelector(".shows");
    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  });
};

export default usePaginate;

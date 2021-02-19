import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePaginate = (path, operation, page, thunkFunction) => {
  const dispatch = useDispatch();

  const handleScroll = () => {
    const element = document.querySelector(".shows");
    if (
      element.scrollHeight - element.scrollTop - element.clientHeight > 1 ||
      !page
    ) {
      return;
    }
    dispatch(thunkFunction(path, operation));
  };

  useEffect(() => {
    const element = document.querySelector(".shows");
    element.addEventListener("scroll", handleScroll);
    return () => element.removeEventListener("scroll", handleScroll);
  });
};

export default usePaginate;

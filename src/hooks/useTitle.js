import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Aspirant Chef`;
  }, []);
};

export default useTitle;

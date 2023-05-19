import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Toy World`;
  }, []);
};

export default useTitle;

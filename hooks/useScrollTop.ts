import { useEffect, useState } from "react";

const useScrollTop = () => {
  const [isScrollTop, setIsScrollTop] = useState(true);

  const updateIsScrollTop = () => {
    const scrollY = window.pageYOffset;
    setIsScrollTop(scrollY === 0);
  };

  useEffect(() => {
    updateIsScrollTop();
  });

  useEffect(() => {
    window.addEventListener("scroll", updateIsScrollTop);
    return () => window.removeEventListener("scroll", updateIsScrollTop);
  }, [isScrollTop]);

  return isScrollTop;
};

export default useScrollTop;

import { useEffect, useState } from "react";

const useResizeWindow = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return { windowWidth };
};

export default useResizeWindow;

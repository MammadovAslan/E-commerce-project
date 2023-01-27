import { createContext, useEffect, useState } from "react";

export interface Size{
    innerHeight:number,
    innerWidth:number
}

export const WindowSizeContext = createContext({});

 const WindowSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }


  return <WindowSizeContext.Provider value={windowSize}>{children}</WindowSizeContext.Provider>;
};

export default WindowSizeProvider;

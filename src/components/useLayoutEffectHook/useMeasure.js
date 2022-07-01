import { useState, useRef, useLayoutEffect } from "react";

export const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
    /* eslint-disable */
  }, deps);

  return [rect, myRef];
};

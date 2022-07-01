import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useMeasure } from "../useLayoutEffectHook/useMeasure";
import { useFetch } from "./useFetch";

const Hello = () => {
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const renders = useRef(0);

  // this would just show 0 all the time
  // console.log("hello renders: ", renders.current);
  // so here we can update value of current and it will not cause a re render
  // console.log("hello renders: ", renders.current++);

  // React.useEffect(() => {
  //   console.log("hello render");

  //   return () => {
  //     console.log("Hello cleanup");
  //   };
  // }, []);

  // const rect = useMeasure(divRef, [data]);
  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};

export default Hello;

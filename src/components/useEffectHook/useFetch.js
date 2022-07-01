import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  // this is in the useRef tut
  // when we unmount a component and then call setState on that component then react will show warning cant perform state update on component thats unmounted
  // to test this we use setTimeout to delay setState

  const isCurrent = useRef(true);

  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      // only called when component is going to unmount
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // now ben in his video created an increment button which would change increment url id to new numbers to fetch new data
    // and so data would be null when request for new data was made to transition wasnt smooth so...
    // setState({ data: null, loading: true });
    // this makes the data for new request as the old one so transition is smooth check video out for demo 31:54
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        // we are doing this for useRef tutorial
        setTimeout(() => {
          // basically telling it to not call setState if component is going to unmount
          if (isCurrent.current) {
            setState({ data: y, loading: false });
          }
        }, 2000);
      });
    // not giving url in dep array would not make useFetch work since its mounted in the UseEffect component and if url changes it wont trigger the above useEffect since it already ran once
  }, [url, setState]);

  return state;
};

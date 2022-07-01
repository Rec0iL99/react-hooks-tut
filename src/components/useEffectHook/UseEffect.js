import React, { useEffect, useState } from "react";
import { useForm } from "../useStateHook/useForm";
import Hello from "./Hello";
import { useFetch } from "./useFetch";

const UseEffect = () => {
  const [values, handleChange] = useForm({
    username: "",
    password: "",
    firstname: "",
  });

  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");

  const [showHello, setShowHello] = useState(true);

  // useEffect -> everytime this component is rendered the useEffect is called
  useEffect(() => {
    console.log("render");
    // with dependency array only when values in array change will the function run
    // it does a shallow comparision...meaning if we give the whole object values in array then on every render the funct will run since new object is created by js on every new render
  }, [values.email, values.password]);

  // this console will run only once when component mounts
  useEffect(() => {
    console.log("this will run only once");
  }, []);

  useEffect(() => {
    console.log("cleanup function");

    // cleanup function
    return () => {
      console.log("unmount");
    };
    // so here when value of email changes useEffect will run the cleanup function to cleanup old value
  }, [values.email]);

  useEffect(() => {
    const onMouseMove = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // useEffects will fire off in order

  // this works but on every render lStorageCount will be initialized with value from localstorage so we use initializer function
  // const [lStorageCount, setLStorageCount] = useState(
  //   JSON.parse(localStorage.getItem("count"))
  // );
  const [lStorageCount, setLStorageCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(lStorageCount));
  }, [lStorageCount]);

  return (
    <>
      <div>{loading ? "loading..." : data}</div>
      {/* <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
      {showHello && <Hello />} */}
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        name="firstname"
        type="text"
        placeholder="firstname"
        value={values.firstname}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
    </>
  );
};

export default UseEffect;

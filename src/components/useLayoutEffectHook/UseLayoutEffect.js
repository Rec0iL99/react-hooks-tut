import { useLayoutEffect, useRef } from "react";
import Hello from "../useEffectHook/Hello";
import { useForm } from "../useStateHook/useForm";

const UseLayoutEffect = () => {
  const inputRef = useRef();
  const [values, handleChange] = useForm({
    email: "",
  });

  // useLayouteffect can be used to find measurements of dom elements
  useLayoutEffect(() => {
    // will run on first mount
    // this will give the dimensions of the dom element here inputRef
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  // continued in hello component

  return (
    <>
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <Hello />
    </>
  );
};

export default UseLayoutEffect;

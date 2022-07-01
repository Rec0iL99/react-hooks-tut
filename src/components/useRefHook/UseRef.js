import { useRef, useState } from "react";
import Hello from "../useEffectHook/Hello";
import { useForm } from "../useStateHook/useForm";

const UseRef = () => {
  const [showHello, setShowHello] = useState(true);
  // basically we can use useRef to store dom nodes
  // we can also store other items like numbers
  // another use case is to store number of renders of a component
  const [values, handleChange] = useForm({
    email: "",
  });

  const inputRef = useRef();
  // we can put function also in useRef
  const hello = useRef(() => console.log("hello"));

  return (
    <>
      <button onClick={() => setShowHello(!showHello)}>show hello</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
    </>
  );
};

export default UseRef;

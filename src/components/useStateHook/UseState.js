import React, { useState } from "react";
import Form from "./Form";

function expensiveInitialState() {
  return 10;
}

const UseState = () => {
  //   useState(10);
  //  we are using function here since we want this to run only the first time and not initial 10 to useState everytime we render
  //   const [count, setCount] = useState(() => expensiveInitialState());

  const [count, setCount] = useState(10);

  const [{ nCount, nCount2 }, setNCount] = useState({
    nCount: 10,
    nCount2: 20,
  });

  return (
    <div>
      {/* two methods to pass values to setCount */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* the updater function helps avoid race condition things, two updates happening at the same time */}
      <button
        onClick={() => {
          setCount((currentCount) => currentCount + 1);
          // if i run the below code snippet nCount2 will become empty since we are not merging the objects
          //   setNCount((currentState) => ({
          //     nCount: currentState.nCount + 1,
          //   }));
          // we have to do this
          setNCount((currentState) => ({
            ...currentState,
            nCount: currentState.nCount + 1,
          }));
        }}
      >
        +
      </button>
      <div>count: {count}</div>
      <div>nCount: {nCount}</div>
      <div>nCount2: {nCount2}</div>
      <Form />
    </div>
  );
};

export default UseState;

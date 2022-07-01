import React from "react";
import UseEffect from "./components/useEffectHook/UseEffect";
import UseLayoutEffect from "./components/useLayoutEffectHook/UseLayoutEffect";
import UseRef from "./components/useRefHook/UseRef";
import UseState from "./components/useStateHook/UseState";

// hooks cannot be called in loops, conditionals or nested functions

function App() {
  return (
    <>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      <UseLayoutEffect />
    </>
  );
}

export default App;

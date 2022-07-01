import React from "react";
// import { useCountRenders } from "../useCountRenders";

// by default react will always re render this component if the parent is changed (UseCallback setCount())
// React.memo will make this component render only when props are changed in this case increment
export const CallHello = React.memo(({ increment }) => {
  //   useCountRenders();

  return <button onClick={() => increment(5)}>Hello</button>;
});

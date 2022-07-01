import { useCallback, useState } from "react";
import { CallHello } from "./CallHello";
import { Square } from "./Square";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const favouriteNums = [6, 78, 34];

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
      // so how useCallback works is whenever the deps change this function will be created or re created and put into the variable increment
      // now if you give count in deps then useCallback will create function for increment which we do not want, so use c => c + 1 and remove count from deps
      // so places to use useCallback is when you pass a function as props to a component wrapped in React.memo, next point below
      // In useEffect with dep as a function, because when component is re rendered function is created again and this keeps triggering the useEffect unnecessarily
      // useEffect(() => {

      // }, [increment])
      // we can also return some value, but at most cases not needed but is an option
    },
    [setCount]
  );

  return (
    <div>
      {/* everytime UseCallback (component) is rendered the below function is going to be recreated */}
      {/* this function is being created on every render */}
      {/* with the code we have here not a problem, but problem arises when we want to wrap the CallHello component in a useMemo hook, so that we want component to re render only when increment changes */}
      {/* so the problem is increment is changing all the time */}
      <CallHello increment={increment} />
      <div>count: {count}</div>
      {favouriteNums.map((n) => {
        // in this method still the component renders event though we are using useCallback
        // here we are creating a function so it is causing a render even though having a prop named onClick is standard
        // what was happening is that everytime we clicked on square it caused the component to render which shouldnt be the case since we are using React.memo in Square
        // return <Square onClick={() => increment(n)} n={n} key={n} />;
        // so use the below method and pass the increment function as prop like Callhello example
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
};

export default UseCallback;

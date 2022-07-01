import { useMemo, useState } from "react";
import { useFetch } from "../useEffectHook/useFetch";

// this is what ben would call a computed value, computed based on data
// whats the problem here? every time we render this component it will computeLongestWord which is not necessary since we already know the longest word
// in this situation ben doesnt see any performance lags, so its not advised to use useMemo everywhere...use it only when necessary (performance issues)
const computeLongestWord = (arr) => {
  if (!arr) {
    return [];
  }

  console.log("computing longest word");

  let longestWord = "";

  // why JSON.parse because in useFetch we are doing data.text()
  JSON.parse(arr).forEach((sentence) =>
    sentence.split(" ").forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    })
  );

  return longestWord;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  // so the function passed as arg to useMemo will be the function that will return the computed value
  // problem with giving computeLongestWord func in dep is that its a function and on every render a new instance which causes useMemo to work again and again defeating its purpose
  // jeez why not just remove computeLongestWord from dep...recommended by ben to keep in dep since we are using in the function
  // computeLongestWord was first inside the component, but we moved it outside since it can be considered a outside function
  // we removed computeLongestWord from dep since we moved it outside the component, we can use func in component itself see 1:15:20 ben react hooks vid
  const longestWord = useMemo(() => computeLongestWord(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {/* longestWord will store whatever value was returned in the function passed as arg in useMemo */}
      <div>{longestWord}</div>
    </div>
  );
};

export default UseMemo;

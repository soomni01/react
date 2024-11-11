import React, { createContext, useContext, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyComp1() {
  return <MyButton />;
}
function MyButton() {
  const count = useContext(CountContext);
  const updateCount = useContext(UpdateCountContext);
  return (
    <Button onClick={() => updateCount(count + 1)}>count : {count}</Button>
  );
}
function MyBox() {
  const count = useContext(CountContext);
  return <Box>in box : {count}</Box>;
}
function MyComp2() {
  return <MyBox />;
}

// step1 : context 만들기
const CountContext = createContext(0);
const UpdateCountContext = createContext(null);

function App51(props) {
  const [count, setCount] = useState(0);
  const updateCount = (c) => setCount(c);

  return (
    <div>
      {/* step3 : 값 전달하기 */}
      <CountContext.Provider value={count}>
        <UpdateCountContext.Provider value={updateCount}>
          <MyComp1 />
        </UpdateCountContext.Provider>
        <MyComp2 />
      </CountContext.Provider>
    </div>
  );
}

export default App51;

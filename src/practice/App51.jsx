import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyComp1(props) {
  return <MyButton {...props} />;
}
function MyButton({ count, updateCount }) {
  return (
    <Button onClick={() => updateCount(count + 1)}>count : {count}</Button>
  );
}
function MyBox({ count }) {
  return <Box>in box : {count}</Box>;
}
function MyComp2({ count }) {
  return <MyBox count={count} />;
}
function App51(props) {
  const [count, setCount] = useState(0);
  const updateCount = (c) => setCount(c);

  return (
    <div>
      <MyComp1 count={count} updateCount={updateCount} />
      <MyComp2 count={count} />
    </div>
  );
}

export default App51;

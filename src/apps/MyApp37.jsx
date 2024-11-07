import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp37(props) {
  const [number, setNumber] = useState(0);

  function fun1() {
    setNumber(number + 1);
  }
  function fun2() {
    setNumber(number - 1);
  }
  return (
    <div>
      <Button onClick={fun1}>값 증가</Button>
      <Button onClick={fun2}>값 감소</Button>
      <Box>number : {number}</Box>
    </div>
  );
}

export default MyApp37;

import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function App39(props) {
  const [show, setShow] = useState(true);
  const [number, setNumber] = useState(1);

  function handleButton() {
    if (number === 1) {
    }
  }
  return (
    <div>
      <Button onClick={handleButton()}>{number}</Button>
      <Box display={show ? "block" : "none"} h={20} bg={"blue.300"}>
        1
      </Box>
      <Box display={show ? "block" : "none"} h={20} bg={"red.300"}>
        2
      </Box>
      <Box display={show ? "block" : "none"} h={20} bg={"yellow.300"}>
        3
      </Box>
    </div>
  );
}

export default App39;

import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp39(props) {
  const [text, setText] = useState("숨기기");
  const [show, setShow] = useState(true);

  function handleButtonClick() {
    if (text === "숨기기") {
      setText("보이기");
    } else {
      setText("숨기기");
    }

    setShow(!show);
  }
  return (
    <div>
      <Button onClick={handleButtonClick}>{text}</Button>
      <Box display={show ? "block" : "none"} h={20} bg={"blue.200"}>
        박스
      </Box>
    </div>
  );
}

export default MyApp39;

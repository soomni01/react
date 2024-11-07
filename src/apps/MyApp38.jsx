import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyApp38(props) {
  const [boxColor, setBoxColor] = useState("gray.200");
  return (
    <div>
      <Button onClick={() => setBoxColor("red.500")} colorPalette={"red"}>
        빨강
      </Button>
      <Button onClick={() => setBoxColor("blue.500")} colorPalette={"blue"}>
        파랑
      </Button>
      <Button onClick={() => setBoxColor("yellow.500")} colorPalette={"yellow"}>
        노랑
      </Button>

      <Box bg={boxColor} h={20}>
        박스
      </Box>
    </div>
  );
}

export default MyApp38;

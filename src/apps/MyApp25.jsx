import React from "react";
import { Button } from "@chakra-ui/react";

function MyApp25(props) {
  return (
    <div>
      <Button colorPalette="blue">클릭</Button>
      <Button colorPalette="teal">클릭</Button>
      <Button colorPalette="purple">클릭</Button>
      <Button colorPalette="pink">클릭</Button>

      <Button colorPalette="blue" variant="outline">
        클릭
      </Button>
      <Button colorPalette="teal" variant="surface">
        클릭
      </Button>
      <Button colorPalette="purple" variant="subtle">
        클릭
      </Button>
      <Button colorPalette="pink" variant="subtle">
        클릭
      </Button>
    </div>
  );
}

export default MyApp25;

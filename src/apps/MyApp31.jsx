import React from "react";
import { Box } from "@chakra-ui/react";

function MyApp31(props) {
  return (
    <div>
      <h5>반응형 responsive design</h5>
      <Box
        h={5}
        bgColor={{
          base: "gray",
          sm: "teal.400",
          md: "orange",
          lg: "blue.subtle",
          xl: "red.muted",
          "2xl": "purple",
        }}
      ></Box>
      <Box
        h={5}
        w={{
          base: "100%",
          sm: "5/6",
          md: "2/3",
          lg: "2/4",
          xl: "1/3",
          "2xl": "1/4",
        }}
        bgColor={"orangered"}
      ></Box>
    </div>
  );
}

export default MyApp31;

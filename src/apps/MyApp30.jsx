import React from "react";
import { Box } from "@chakra-ui/react";

function MyApp30(props) {
  return (
    <div>
      <h5>컴포넌트 색</h5>
      <Box h={5} bgColor="cyan"></Box>
      <Box h={5} bgColor="pink.fg"></Box>
      <Box h={5} bgColor="blue"></Box>
      <Box h={5} bgColor="blue.700"></Box>
      <Box h={5} bgColor="pink.200"></Box>
      <Box h={5} bgColor="teal.muted"></Box>
      <h5>컴포넌트 크기</h5>
      <Box bgColor={"green"} h={"5"} w={"1/3"}></Box>
      <Box bgColor={"orange"} h={"5"} w={"1/4"}></Box>
      <Box bgColor={"gray"} h={"5"} w={"1/5"}></Box>
      <Box bgColor={"purple"} h={"5"} w={"1/6"}></Box>
      <Box w={"200px"} h={"100px"} ml={5} p={2.5} bg={"red"}>
        차크라UIBox
      </Box>
      <Box w={"200px"} h={"100px"} ml={"20px"} p={"10px"} bg={"yellow"}>
        차크라UIBox
      </Box>
      <div
        style={{
          width: "200px",
          height: "100px",
          marginLeft: "20px",
          padding: "10px",
          backgroundColor: "green",
        }}
      >
        컴포넌트
      </div>
    </div>
  );
}

export default MyApp30;

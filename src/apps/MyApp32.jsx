import React from "react";
import { Box, Flex, HStack, Stack } from "@chakra-ui/react";

function MyBox({ color }) {
  return (
    <>
      <Box
        w={{
          base: "100%",
          md: "3/6",
          lg: "1/3",
        }}
        style={{ height: "80px", backgroundColor: color }}
      ></Box>
    </>
  );
}
function MyApp32(props) {
  return (
    <div>
      <h5>컴포넌트 배치</h5>
      <HStack>
        <Box border={"5px solid black"} w={"1/3"}>
          가
        </Box>
        <Box border={"5px solid black"} w={"1/3"}>
          나
        </Box>
        <Box border={"5px solid black"} w={"1/3"}>
          다
        </Box>
      </HStack>
      <Stack direction={{ base: "column", md: "row" }}>
        <Box flex={1} h={20} bg={"orange"}>
          A
        </Box>
        <Box flex={1} h={20} bg={"skyblue"}>
          B
        </Box>
        <Box flex={1} h={20} bg={"gray"}>
          C
        </Box>
      </Stack>
      <hr />
      <Flex wrap={"wrap"}>
        <MyBox color={"orange"} />
        <MyBox color={"skyblue"} />
        <MyBox color={"gray"} />
      </Flex>
      <hr />
      <Flex wrap={"wrap"}>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "orange" }}
        >
          1
        </Box>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "skyblue" }}
        >
          2
        </Box>
        <Box
          w={{
            base: "100%",
            md: "3/6",
            lg: "1/3",
          }}
          style={{ height: "80px", backgroundColor: "gray" }}
        >
          3
        </Box>
      </Flex>
      <hr />
      <Flex justify={"space-between"}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
      </Flex>
      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
        <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
        <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
      </div>
      <hr />
      <div style={{ height: "80px", backgroundColor: "orange" }}>1</div>
      <div style={{ height: "80px", backgroundColor: "skyblue" }}>2</div>
      <div style={{ height: "80px", backgroundColor: "gray" }}>3</div>
    </div>
  );
}

export default MyApp32;

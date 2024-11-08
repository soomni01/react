import React, { createContext, useContext, useState } from "react";
import { Box, Input } from "@chakra-ui/react";

function Comp2() {
  // step2 : context 사용하기
  const message = useContext(MessageContext);

  return <Box>{message}</Box>;
}
function Comp1() {
  return (
    <Box>
      <Comp2 />
    </Box>
  );
}

// step1: Context 만들기
const MessageContext = createContext("");

function MyApp49(props) {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Input onChange={(e) => setMessage(e.target.value)} />
      {/* step3 : context 제공하기 */}
      <MessageContext.Provider value={message}>
        <Comp1 />
      </MessageContext.Provider>
    </div>
  );
}

export default MyApp49;

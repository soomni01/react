import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function Comp1({ updateMessage }) {
  return (
    <Box bg={"red.300"} h={50}>
      <Field>
        <Input onChange={(e) => updateMessage(e.target.value)} />
      </Field>
    </Box>
  );
}
function Comp2({ message }) {
  return (
    <Box bg={"blue.300"} h={50}>
      {message}
    </Box>
  );
}

function MyApp48(props) {
  const [message, setMessage] = useState("");

  // 관습상 상태관리하는 메소드를 구현한 후 함수를 넘겨줌
  function updateMessage(p) {
    setMessage(p);
  }

  return (
    <div>
      <Comp1 updateMessage={updateMessage} />
      <Comp2 message={message} />
    </div>
  );
}

export default MyApp48;

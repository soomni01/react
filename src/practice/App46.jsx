import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function Comp({ text }) {
  return (
    <div>
      <Box h={20} bg={"yellow.300"}>
        {text}
      </Box>
    </div>
  );
}
function App46(props) {
  const [text, setText] = useState();
  return (
    <div>
      <Field label={"자기소개"}>
        <Input onKeyUp={(e) => setText(e.target.value)} />
      </Field>
      <Comp text={text} />
    </div>
  );
}

export default App46;

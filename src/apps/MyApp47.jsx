import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function MyApp47(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Field label={"소개"}>
        <Input onChange={(e) => setText(e.target.value)} />
      </Field>
      <Comp text={text} />
      <Comp2 message={text} />
      <Comp3 message={text} />
    </div>
  );
}
function Comp4({ message }) {
  return (
    <Box>
      <h3>comp4</h3>
      <Box>{message}</Box>
    </Box>
  );
}
function Comp5({ message }) {
  return (
    <Box>
      <h3>comp5</h3>
      <Box>{message}</Box>
    </Box>
  );
}
function Comp3(props) {
  return (
    <>
      <h3>comp3</h3>
      <Comp4 message={props.message} />
      <Comp5 {...props} />
    </>
  );
}
function Comp2({ message }) {
  return <Box>{message}</Box>;
}

function Comp({ text }) {
  return <Box>{text}</Box>;
}

export default MyApp47;

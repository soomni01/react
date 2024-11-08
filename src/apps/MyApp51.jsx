import React, { createContext, useContext, useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function MyBox2() {
  const message = useContext(MessageContext);
  return (
    <Box>
      <p>message: {message}</p>
    </Box>
  );
}
function MyForm2() {
  const updateMessage = useContext(UpdateMessageContext);

  return (
    <>
      <Field label={"메시지"}>
        <Input onChange={(e) => updateMessage(e.target.value)} />
      </Field>
    </>
  );
}
function MyForm1() {
  return <MyForm2 />;
}
function MyBox1() {
  return <MyBox2 />;
}
const UpdateMessageContext = createContext(null);
const MessageContext = createContext("");

function MyApp51(props) {
  const [message, setMessage] = useState("");

  const updateMessage = (message) => {
    setMessage(message);
  };
  return (
    <div>
      <UpdateMessageContext.Provider value={updateMessage}>
        <MyForm1 />
      </UpdateMessageContext.Provider>
      <MessageContext.Provider value={message}>
        <MyBox1 />
      </MessageContext.Provider>
    </div>
  );
}

export default MyApp51;

import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [message, setMessage] = useState();

  function fun1(e) {
    setMessage(e.target.value);
  }
  return (
    <div>
      <Input onKeyUp={fun1} />
      <p>{message}</p>
    </div>
  );
}

export default App37;

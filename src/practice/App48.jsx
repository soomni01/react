import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyForm({ updateName, updateAddress }) {
  return (
    <Box>
      <Field label={"이름"}>
        <Input onChange={(e) => updateName(e.target.value)} />
      </Field>
      <Field label={"주소"}>
        <Input onChange={(e) => updateAddress(e.target.value)} />
      </Field>
    </Box>
  );
}

function MyBox({ name, address }) {
  return (
    <Box>
      <p>이름 : {name}</p>
      <p>주소 : {address}</p>
    </Box>
  );
}

function App48(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  // const [person, setPerson] = useState({ name: "", address: "" });

  function updateName(n) {
    setName(n);
  }
  function updateAddress(a) {
    setAddress(a);
  }

  return (
    <div>
      <MyForm updateName={updateName} updateAddress={updateAddress} />
      <MyBox name={name} address={address} />
      {/*<MyForm updateName={updateName} updateAddress={updateAddress} />*/}
      {/*<MyBox {...person} />*/}
    </div>
  );
}

export default App48;

import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";

function MyApp41(props) {
  const [person, setPerson] = useState({ name: "", address: "" });
  const handleNameInputKeyUp = (e) => {
    const newPerson = { ...person, name: e.target.value };
    setPerson(newPerson);
  };
  const handleAddressInputKeyUp = (e) => {
    const newAddress = { ...person, address: e.target.value };
    setPerson(newAddress);
  };
  return (
    <div>
      <Field label={"이름"}>
        <Input onKeyUp={handleNameInputKeyUp} />
      </Field>
      <Field label={"주소"}>
        <Input onKeyUp={handleAddressInputKeyUp} />
      </Field>

      <hr />
      <ul>
        <li>이름 : {person.name}</li>
        <li>주소 : {person.address}</li>
      </ul>
    </div>
  );
}

export default MyApp41;

import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originPerson = {
  name: "홍길동",
  info: {
    address: "서울",
    email: "gmail",
    description: "자기소개",
  },
};
function App43(props) {
  const [person, setPerson] = useState(originPerson);

  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            setPerson({
              ...person,
              info: { ...person.info },
              name: e.target.value,
            });
          }}
          value={person.name}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          onChange={(e) => {
            setPerson({
              ...person,
              info: { ...person.info, address: e.target.value },
            });
          }}
          value={person.info.address}
        />
      </Field>
      <Field
        onChange={(e) => {
          setPerson({
            ...person,
            info: { ...person.info, email: e.target.value },
          });
        }}
        label={"이메일"}
      >
        <Input value={person.info.email} />
      </Field>
      <Field label={"자기소개"}>
        <Textarea
          onChange={(e) => {
            setPerson({
              ...person,
              info: { ...person.info, description: e.target.value },
            });
          }}
          value={person.info.description}
        />
      </Field>
      <Button
        onClick={() => setPerson(originPerson)}
        colorPalette={"red"}
        variant={"surface"}
      >
        리셋
      </Button>
    </div>
  );
}

export default App43;

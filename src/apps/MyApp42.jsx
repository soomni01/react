import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originPerson = { name: "홍길동", address: "서울" };

function MyApp42(props) {
  const [person, setPerson] = useState(originPerson);
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
          value={person.name}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
          value={person.address}
        />
      </Field>
      <Button onClick={() => setPerson(originPerson)}>리셋</Button>
    </div>
  );
}

export default MyApp42;

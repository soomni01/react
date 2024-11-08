import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originPerson = { name: "홍길동", items: ["키보드", "모니터"] };
function MyApp43(props) {
  const [person, setPerson] = useState(originPerson);

  const handleButtonClick = (item) => {
    const nextPerson = { ...person }; // 얕은 복사
    nextPerson.items = [...person.items]; // 깊은 복사
    nextPerson.items.push(item);
    setPerson(nextPerson);
  };
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            const nextPerson = { ...person, name: e.target.value }; // 얕은 복사
            nextPerson.items = [...person.items]; // 깊은 복사
            setPerson(nextPerson);
          }}
          value={person.name}
        />
      </Field>
      <Button onClick={() => handleButtonClick("핸드폰")}>핸드폰</Button>
      <Button onClick={() => handleButtonClick("자동차")}>자동차</Button>
      <Button onClick={() => handleButtonClick("CPU")}>CPU</Button>
      <hr />
      <Button colorPalette={"red"} onClick={() => setPerson(originPerson)}>
        리셋
      </Button>

      <hr />

      <ul>
        {person.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyApp43;

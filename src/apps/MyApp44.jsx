import React from "react";
import { useImmer } from "use-immer";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originPerson = {
  name: "홍길동",
  info: {
    email: "gmail",
    address: "서울",
    description: "자기소개",
  },
};
function MyApp44(props) {
  // const [person, setPerson] = useState(originPerson);
  const [person, updatePerson] = useImmer(originPerson);
  return (
    <div>
      <Field label={"이름"}>
        <Input
          onChange={(e) => {
            updatePerson((draft) => {
              draft.name = e.target.value;
            });
          }}
          value={person.name}
        />
      </Field>
      <Field label={"주소"}>
        <Input
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.address = e.target.value;
            });
          }}
          value={person.info.address}
        />
      </Field>
      <Field label={"이메일"}>
        <Input
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.email = e.target.value;
            });
          }}
          value={person.info.email}
        />
      </Field>
      <Field label={"자기소개"}>
        <Textarea
          onChange={(e) => {
            updatePerson((draft) => {
              draft.info.description = e.target.value;
            });
          }}
          value={person.info.description}
        />
      </Field>
      <Button
        onClick={() => updatePerson(originPerson)}
        colorPalette={"red"}
        variant={"surface"}
      >
        리셋
      </Button>
    </div>
  );
}

export default MyApp44;

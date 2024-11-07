import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <hr />
      <Textarea placeholder="자기소개 1000자 제한" variant="flushed"></Textarea>
      <hr />
      <Field label="Email" required helperText="이메일을 입력해주세요.">
        <Input />
      </Field>
      <Input variant="subtle" placeholder="이메일을 입력해주세요." />
      <Input variant="outline" placeholder="이메일을 입력해주세요." />
      <Input variant="flushed" placeholder="이메일을 입력해주세요." />
      <hr />
      <input type="text" placeholder="이메일을 입력해주세요." />
    </div>
  );
}

export default MyApp28;

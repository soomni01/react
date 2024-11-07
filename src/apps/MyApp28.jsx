import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { HiOutlinePlus } from "react-icons/hi2";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>checkbox</h5>
      <Checkbox icon={<HiOutlinePlus />}>동의</Checkbox>
      <Checkbox variant="outline" checked>
        {" "}
        동의
      </Checkbox>
      <hr />
      <Checkbox variant="solid"> 동의</Checkbox>
      <hr />
      <Checkbox variant="subtle"> 동의</Checkbox>
      <hr />
      <input type="checkbox" id="check1" />
      <label htmlFor="check1">동의</label>
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

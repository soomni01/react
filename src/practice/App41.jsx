import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  const [book, setBook] = useState({ title: "", content: "" });
  function titleField(e) {
    const title2 = { ...book, title: e.target.value };
    setBook(title2);
  }
  function contentField(e) {
    const content2 = { ...book, content: e.target.value };
    setBook(content2);
  }

  return (
    <div>
      <Field label={"제목"}>
        <Input onKeyUp={titleField} />
      </Field>
      <Field label={"본문"}>
        <Textarea onKeyUp={contentField} />
      </Field>
      <hr />
      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>
      <Field label={"본문"} readOnly>
        <Textarea value={book.content} />
      </Field>
    </div>
  );
}

export default App41;

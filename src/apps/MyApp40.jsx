import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyApp40(props) {
  const [text, setText] = useState();
  const [list, setList] = useState(["latte", "americano", "mocha"]);
  const [items, setItems] = useState(["pizza", "돈까스", "우동"]);

  function handleKeyUp(e) {
    setText(e.target.value);
  }
  function handleButtonClick() {
    // state가 객체면
    // 새객체(참조값)를 만들어서 상태를 변경해야함
    list.push("바닐라 라떼");
    console.log(list);
    setList(list);
  }
  function handleButtonClick2() {
    const nextItems = [...items, "라멘"];
    setItems(nextItems);
  }
  return (
    <div>
      <Button onClick={handleButtonClick2}>add</Button>
      <ul>
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <hr />
      <Button onClick={handleButtonClick}>add</Button>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
      <hr />
      <Input onKeyUp={handleKeyUp} />
      <p>{text}</p>
    </div>
  );
}

export default MyApp40;

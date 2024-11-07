import React from "react";
import { Button } from "../components/ui/button.jsx";
import { Input } from "@chakra-ui/react";

function MyApp35(props) {
  function fun1(e) {
    console.log("버튼 클릭됨");
    console.log(e.target);
  }
  function fun2(e) {
    // console.log("키업 이벤트");
    console.log(e.target.value);
  }
  return (
    <div>
      <Input onKeyUp={(e) => console.log(e.target.value)} />
      <hr />
      <Input onKeyUp={fun2} />
      <Input onKeyUp={fun2} />
      <Input onKeyUp={fun2} />
      <hr />
      <Button onClick={fun1}>버튼1</Button>
      <Button onClick={fun1}>버튼2</Button>
      <Button onClick={fun1}>버튼3</Button>
    </div>
  );
}

export default MyApp35;

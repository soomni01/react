import React from "react";
import { Button } from "../components/ui/button.jsx";
import { Textarea } from "@chakra-ui/react";

function App33(props) {
  function fun1() {
    console.log("input 에 keyup 이벤트");
  }
  function fun2() {
    console.log("버튼 클릭 메시지");
  }
  function fun3() {
    console.log("textarea 메시지");
  }
  return (
    <div>
      {/* input에 keyup 이벤트 발생 시 로그로 메시지 출력 */}
      <input onKeyUp={fun1} />
      <hr />
      {/* 버튼이 클릭되면 로그로 메시지 출력 */}
      <Button onClick={fun2}>클릭</Button>
      <hr />
      {/* textarea에 mouseEnter, mouseLeave이멘트 발생시 메시지 출력*/}
      <Textarea onMouseEnter={fun3} onMouseLeave={fun3} />
    </div>
  );
}

export default App33;

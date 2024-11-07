import React from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp33(props) {
  function fun1() {
    console.log("버튼 클릭됨!");
  }

  const fun2 = function () {
    console.log("펀 2 함수");
  };

  const fun3 = () => {
    console.log("펀 3 함수");
  };
  return (
    <div>
      <Button onClick={fun3}>차크라 ui 버튼</Button>
      <button onClick={fun1}>다른 버튼</button>
      <button onClick={fun1}>버튼1</button>
      <button
        onClick={function () {
          console.log("두번째 버튼 클릭됨!");
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          console.log("세번재 버튼 클릭됨!");
        }}
      >
        버튼3
      </button>
    </div>
  );
}

export default MyApp33;

import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp45(props) {
  const [number, setNumber] = useState(0);

  console.log("함수 호출됨");

  const handleClick = () => {
    // react 는 상태를 비교해서 적절한 순간에 re-render 함
    setNumber(number + 1);
    setNumber(number + 2);
    setNumber(number + 3); // -> 값은 마지막인 3만 증가하지고 log(함수호출)은 한 번만 일어남
  };
  return (
    <div>
      <Button onClick={handleClick}>증가 {number}</Button>
    </div>
  );
}

export default MyApp45;

import React from "react";

function MyApp16(props) {
  return (
    <div>
      <Comp1 name="son" age={33} />
      <Comp1 />
      <Comp1 name="lee" />
      <Comp1 age={44} />
    </div>
  );
}

function Comp1(param) {
  console.log(param);
  return (
    <div>
      com1
      <h3>
        이름: {param.name}, 나이: {param.age}
      </h3>
    </div>
  );
}

export default MyApp16;

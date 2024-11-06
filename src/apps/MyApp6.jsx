import React from "react";

function MyApp6(props) {
  return (
    <div>
      <Comp1 />
      <Comp2 />
      <Comp3 />
    </div>
  );
}

function Comp1() {
  console.log("자바스크립트 코드");

  // jsx 내에서 자바스크립트 사용 가능
  // {}를 사용
  // 출력용

  const a = "hello";
  const b = 3.14;
  const c = ["son", "rose"];
  const d = { name: "son", age: 30 };
  return (
    <div>
      comp1
      {console.log("jsx내의 js 코드")}
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{c}</h1>
      <h1>{d.name}</h1>
      <h1>{d.age}</h1>
      <h1>d.name</h1>
    </div>
  );
}

function Comp2() {
  const a = "donald";
  const b = 123.456;
  const c = ["apt", "black", "pink"];
  const d = {
    name: "rose",
    city: "seoul",
  };

  return (
    <div>
      <ul>
        <li>{a}</li>
        <li>{b}</li>
        <li>{c[0]}</li>
        <li>{c[1]}</li>
        <li>{c[2]}</li>
        <li>{d.name}</li>
        <li>{d.city}</li>
      </ul>
    </div>
  );
}

function Comp3() {
  const a = "note";
  const b = 3.14;

  // property(prop) 의 값으로 사용 가능
  // prop - className, value...
  return (
    <div>
      <h1>{a}</h1>
      <h1 className={a}>Lorem.</h1>
      <h1 className="error">Lorem.</h1>
      <h1 className={"error"}>Lorem.</h1>
      <input type="text" value={b} />
      <input type="text" value="9.99" />
      <input type="text" value={"9.99"} />
    </div>
  );
}

export default MyApp6;

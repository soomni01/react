import React from "react";

function MyApp7(props) {
  const a = "hello";
  const b = 3.14;
  const c = true;
  const d = false;
  // boolean 은 {}로 출력안됨
  //  :prop와 사용시 attribute 적용 여부

  const e = <Comp1 />;
  return (
    <div>
      <li>{a}</li>
      <li>{b}</li>
      <li>{c}</li>
      <li>{d}</li>
      <li>{c.toString()}</li>
      <li>{d.toString()}</li>
      <input type="text" readOnly={c} />
      <br />
      <input type="text" readOnly={d} />
      <br />
      {e}
      <br />
      {e}
      <br />
      <Comp1 />
    </div>
  );
}

function Comp1() {
  return (
    <div>
      <h1> 컴포넌트1 </h1>
    </div>
  );
}

export default MyApp7;

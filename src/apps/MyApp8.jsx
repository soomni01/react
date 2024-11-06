import React from "react";

function Comp1() {
  const a = {
    name: "son",
    married: true,
  };
  const b = {
    name: "rose",
    married: false,
  };
  const c = {
    name: "bruno",
    married: true,
  };

  return (
    <div>
      {/* && (and) true이면... */}
      <li>{a.married && a.name}</li>
      <li>{b.married && b.name}</li>
      <li>{c.married && c.name}</li>
      <hr />
      {/* || (or) true가 아니면... */}
      <li>{a.married || a.name}</li>
      <li>{b.married || b.name}</li>
      <li>{c.married || c.name}</li>
      <hr />
      {a.married && <li>{a.name}</li>}
      {b.married && <li>{b.name}</li>}
      {c.married && <li>{c.name}</li>}
      <hr />
      {a.married || <li>{a.name}</li>}
      {b.married || <li>{b.name}</li>}
      {c.married || <li>{c.name}</li>}
      {/* 삼항 연산자 사용 */}
      <li>{a.married ? a.name : ""}</li>
      <li>{b.married ? b.name : ""}</li>
      <li>{c.married ? c.name : ""}</li>
    </div>
  );
}

function MyApp8(props) {
  const a = "hi";
  const b = 3;
  const c = 5;
  const d = "son";
  return (
    <div>
      <Comp1 />
      <h1>{a}</h1>
      <h1>{b + c}</h1>
      <h1>
        {b} + {c} = {b + c}
      </h1>
      <h1>{d}</h1>
      <h1>{true && d}</h1>
      <h1>{false || d}</h1>
      <h1>{true ? d : ""}</h1>
      <h1>{false ? "" : d}</h1>
    </div>
  );
}

export default MyApp8;

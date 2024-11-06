import React from "react";

function App10(props) {
  const a = [
    { name: "son", age: 30 },
    { name: "rose", age: 10 },
    { name: "faker", age: 40 },
    { name: "hankang", age: 50 },
    { name: "lee", age: 20 },
    { name: "kim", age: 70 },
  ];

  // 30세 이상인 사람의 이름만 출력
  return (
    <div>
      {a
        .filter((e) => e.age >= 30)
        .map((h1) => (
          <h1>{h1.name}</h1>
        ))}
    </div>
  );
}

export default App10;

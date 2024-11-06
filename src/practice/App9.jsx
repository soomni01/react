import React from "react";

function App9(props) {
  const a = ["black", "pink", "faker", "hankang"];

  return (
    <div>
      {a.map((e) => (
        <h1>{e}</h1>
      ))}
    </div>
  );
}

export default App9;

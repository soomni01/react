import React from "react";

function MyApp79(props) {
  const list = ["coffee", "latte", "mocha"];
  return (
    <div>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default MyApp79;

import React from "react";

function MyApp24(props) {
  return (
    <div>
      <Box color="yellow" bg="blcak" text="대통령은 누굴까?" />
      <hr />
      <Box color="red" bg="#eee" text="해리스? 트럼프?" />
    </div>
  );
}

function Box({ color, bg, text }) {
  return (
    <div
      style={{
        color: color,
        backgroundColor: bg,
      }}
    >
      {text}
    </div>
  );
}

export default MyApp24;

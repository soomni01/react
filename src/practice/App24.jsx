import React from "react";

function App24(props) {
  return (
    <div>
      <MyButton color="black">클릭하세요</MyButton>
      <hr />
      <MyButton color="yellow">다시 클릭하세요.</MyButton>
    </div>
  );
}

function MyButton({ color, children }) {
  return (
    <div>
      <button
        style={{
          color: color === "black" ? "yellow" : "black",
          backgroundColor: "darkseagreen",
        }}
      >
        {children}
      </button>
    </div>
  );
}

export default App24;

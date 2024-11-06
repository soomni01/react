import React from "react";

function MyApp18(props) {
  return (
    <div>
      <Comp1 address={"seoul"} score={3.14} />
      <Comp2 address={"busan"} score={9.88} />
    </div>
  );
}

function Comp1(props) {
  return (
    <div>
      <h3>주소: {props.address}</h3>
      <h3>점수: {props.score}</h3>
    </div>
  );
}

function Comp2({ address, score }) {
  return (
    <div>
      <h3>주소: {address}</h3>
      <h3>점수: {score}</h3>
    </div>
  );
}

export default MyApp18;

import React from "react";

function MyApp21(props) {
  return (
    <div>
      <Comp1 name={"son"} age={33} team={"토트넘"} />
    </div>
  );
}
function Comp1(props) {
  return (
    <div>
      <Comp2 name={props.name} age={props.age} team={props.team} />
      <Comp2 {...props} />
    </div>
  );
}

function Comp2({ name, age, team }) {
  return (
    <div>
      <h3>comp2</h3>
      <li>{name}</li>
      <li>{age}</li>
      <li>{team}</li>
    </div>
  );
}

export default MyApp21;

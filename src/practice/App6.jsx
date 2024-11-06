import React from "react";

function App6(props) {
  const a = "note";
  const b = 123.456;
  const c = {
    name: "rose",
    city: "seoul",
  };

  /*
  <h1 class="note"> hello </h1>
  <h3> note </h3>
  <input type="number" step="0.001" value="123.456" />
  <br />
  <h3 class="seoul"> rose </h3>


   */

  return (
    <div>
      <h1 className={a}>hello</h1>
      <h3>{a}</h3>
      <input type="number" step={0.001} value={b} />
      <br />
      <h3 className={c.city}>{c.name}</h3>
    </div>
  );
}

export default App6;

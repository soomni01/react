import React from "react";

function MyApp10(props) {
  const a = [
    { product: "milk", expired: false },
    { product: "chocolate", expired: true },
    { product: "pizza", expired: false },
    { product: "coffee", expired: true },
  ];

  const b = a.filter((item) => item.expired);

  const c = b.map((item) => <h1>{item.product}</h1>);

  return (
    <div>
      {a
        .filter((item) => item.expired)
        .map((item) => (
          <h1>{item.product}</h1>
        ))}
      <hr />
      {c}
    </div>
  );
}

export default MyApp10;

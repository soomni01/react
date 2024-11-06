import React from "react";

function MyApp20(props) {
  const obj = {
    title: "채식주의자",
    price: 5000,
  };

  return (
    <div>
      <Comp title={obj.title} price={obj.price} />
      <Comp {...obj} />
      <Comp {...obj} author={"한강"} />
    </div>
  );
}
function Comp({ price, title, author = "무명" }) {
  return (
    <div>
      <h3>comp</h3>
      <li>{title}</li>
      <li>{price}</li>
      <li>{author}</li>
    </div>
  );
}

export default MyApp20;

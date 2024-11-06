import React from "react";

function Comp({ product, title, content, author }) {
  return (
    <div>
      <h3>comp</h3>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author}</li>
    </div>
  );
}

function App18(props) {
  return (
    <div>
      <Comp
        product={{ name: "pizza", price: 3000 }}
        title="소년이온다"
        content="518"
        author="한강"
      />
    </div>
  );
}

export default App18;

import React from "react";

function MyCom(props) {
  props.fun1();

  return (
    <div>
      <h3>주소 : {props.address}</h3>
      <h3>나이 : {props.age}</h3>
      <input type="text" readOnly={props.readonly} />
      <ul>
        {props.list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <hr />
      <h3>상품명 : {props.product.name}</h3>
      <h3>가격 : {props.product.price}원</h3>
    </div>
  );
}

function App17(props) {
  return (
    <div>
      <MyCom
        fun1={() => {
          console.log("fun1 함수");
        }}
        address="서울"
        age={30}
        readonly={true}
        list={["donald", "harris"]}
        product={{
          name: "컴퓨터",
          price: 300,
        }}
      />
    </div>
  );
}

export default App17;

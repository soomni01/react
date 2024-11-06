import React from "react";

function App22(props) {
  return (
    <div>
      <Comp1>
        <h3>Lorem ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet
          consequatur debitis dolores ducimus excepturi illum ipsa nisi quia
          quos ullam, unde veniam voluptatem. Aperiam cupiditate dolore minima
          molestias praesentium.
        </p>
      </Comp1>
      <hr />
      <Comp2>
        <li>Lorem ipsum dolor.</li>
        <li>Aperiam consectetur, unde.</li>
        <li>Commodi, quod vel?</li>
      </Comp2>
    </div>
  );
}
// Comp1 만들기 App22에서 넘겨준 children 두번 출력하기
function Comp1({ children }) {
  return (
    <div>
      {children}
      {children}
    </div>
  );
}

function Comp2({ children }) {
  return (
    <div>
      <h1>com2</h1>
      {/* 세 개의 li 출력되도록 16번째 줄 코드 작성*/}
      {children}
    </div>
  );
}

export default App22;

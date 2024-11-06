import React from "react";

function MyApp22(props) {
  return (
    <div>
      <Comp score={99} name={"faker"} />
      <hr />
      {/* content는 children prop으로 전달 */}
      <Comp>some content</Comp>

      <hr />
      <Comp2 city={"런던"} mail={"야후"}>
        hello
      </Comp2>
      <hr />
      <Com3>
        {/*h2>lorem3^p>lorem*/}
        <h2>Lorem ipsum dolor.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          dignissimos distinctio doloribus et, explicabo facilis ut vel. A hic
          nisi quas sunt. Aliquam dicta illum magni placeat possimus! Accusamus,
          quas?
        </p>
      </Com3>
    </div>
  );
}

function Comp(props) {
  return (
    <div>
      <li>{props.score}</li>
      <li>{props.name}</li>
      <li>{props.children}</li>
    </div>
  );
}

function Comp2({ city, mail, children }) {
  return (
    <div>
      <li>{city}</li>
      <li>{mail}</li>
      <li>{children}</li>
    </div>
  );
}

function Com3(props) {
  return (
    <div>
      <h2>com3 </h2>
      {props.children}
    </div>
  );
}

export default MyApp22;

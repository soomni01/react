import React from "react";
import zx, { a, b, f as fa } from "./MyApp13.jsx";
// zx는 default export 이므로 아무렇게 받기 가능
// 관습상 동일한 이름 사용 권장
import { d, e as ea, f as fb } from "./MyApp15.jsx";

function MyApp14(props) {
  return (
    <div>
      <h1>myapp 14</h1>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <h1>{zx}</h1>
      <h1>{d}</h1>
      <h1>{ea}</h1>
      <h1>
        {fa}, {fb}
      </h1>
    </div>
  );
}

export default MyApp14;

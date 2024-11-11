import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import { Switch } from "../components/ui/switch.jsx";

// 컴포넌트의 lifecycle
// initial render (mount)
// re-render(update)
// unmount

function MyApp52(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Switch
        checked={show}
        onCheckedChange={(e) => setShow(e.checked)}
      ></Switch>
      {/* 아래는 unmount 된 것이기 때문에 새로고침 효과와 같음 -> 값 초기화 */}
      {/*{show && <MyComp1 />}*/}

      <hr />
      {/* unmount 가 아닌 그냥 숨긴 것이기 때문에 값 유지됨*/}
      <Box display={show ? "block" : "none"}>
        <MyComp1 />
      </Box>
    </div>
  );
}

function MyComp1() {
  const [count, setCount] = useState(0);

  console.log("그림");
  return (
    <Box>
      <Button onClick={() => setCount(count + 1)}> count : {count}</Button>
    </Box>
  );
}

export default MyApp52;

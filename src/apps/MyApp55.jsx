import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Switch } from "../components/ui/switch.jsx";

function MyApp55() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Switch checked={show} onCheckedChange={(e) => setShow(e.checked)} />
      {show && <Comp1 />}
    </>
  );
}
function Comp1(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("effect 사용");
    return () => {
      console.log("clean up");
    };
  }, [count]);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
    </div>
  );
}

export default MyApp55;

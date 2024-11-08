import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function Comp({ count }) {
  return (
    <div>
      <Box bg={"red.300"}>{count}</Box>
    </div>
  );
}
function MyApp46(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>count: {count}</Button>
      <Comp count={count} />
    </div>
  );
}

export default MyApp46;

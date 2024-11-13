import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [params, setParams] = useSearchParams();

  return (
    <Box>
      <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("keyword", keyword);
          setParams(p);
        }}
      >
        검색
      </Button>
      <hr />
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 1);
          setParams(p);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 2);
          setParams(p);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams(params);
          p.set("page", 3);
          setParams(p);
        }}
      >
        3
      </Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
  },
]);

function App76(props) {
  return <RouterProvider router={router} />;
}

export default App76;

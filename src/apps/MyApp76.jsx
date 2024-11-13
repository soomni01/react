import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function MyHome() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();

  console.log(params.toString());
  return (
    <Box>
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("page", 1);
          setParams(p);
        }}
      >
        1
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("page", 2);
          setParams(p);
        }}
      >
        2
      </Button>
      <Button
        onClick={() => {
          const p = new URLSearchParams();
          p.append("page", 3);
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
    path: "/",
    element: <MyHome />,
  },
]);
function MyApp76(props) {
  return <RouterProvider router={router} />;
}

export default MyApp76;

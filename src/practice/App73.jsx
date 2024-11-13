import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
    children: [
      { index: true, element: <div>home</div> },
      { path: "add", element: <div>추가하기</div> },
      { path: "view", element: <div>보기</div> },
    ],
  },
]);

function WholePage() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Button onClick={navigate("/")}>home</Button>
          </Box>
          <Box>
            <Button onClick={navigate("/add")}>add</Button>
          </Box>
          <Box>
            <Button onClick={navigate("/view")}>view</Button>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function App73(props) {
  return <RouterProvider router={router} />;
}

export default App73;

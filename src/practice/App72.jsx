import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

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
  return (
    <Box>
      <Box>
        <Flex gap={5}>
          <Box>
            <Link to="/">home</Link>
          </Box>
          <Box>
            <Link to="/add">add</Link>
          </Box>
          <Box>
            <Link to="/view">view</Link>
          </Box>
        </Flex>
      </Box>
      <hr />
      <Outlet />
    </Box>
  );
}

function App72(props) {
  return <RouterProvider router={router} />;
}

export default App72;

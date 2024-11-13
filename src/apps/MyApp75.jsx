import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();

  // console.log("location", location.search);
  // console.log("params", params);
  console.log("params", params.toString());
  params.append("age", 33);
  params.append("name", "son");
  params.append("name", "kim");
  params.append("name", "손흥민");
  console.log("params", params.toString());

  const handleClick = () => {
    const p = new URLSearchParams();
    p.append("page", 1);
    p.append("keyword", "한강");
    p.append("type", "author");

    axios.get("/api/main9/list?{p}");
    // axios.get("/api/main9/list?page=1&keyword=한강&type=author")
  };

  return (
    <Box>
      <Button onClick={() => navigate("/?page=1")}>1</Button>
      <Button onClick={() => navigate("/?page=2")}>2</Button>
      <Button onClick={() => navigate("/?page=3")}>3</Button>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyHome />,
  },
]);
function MyApp75(props) {
  return <RouterProvider router={router} />;
}

export default MyApp75;

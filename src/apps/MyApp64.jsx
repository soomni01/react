import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp64(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub2/777");
        }}
      >
        경로 데이터 number
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/9000");
        }}
      >
        경로 데이터 number
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/kim");
        }}
      >
        경로 데이터
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main4/sub1/son");
        }}
      >
        경로 데이터(path variable)
      </Button>
    </div>
  );
}

export default MyApp64;

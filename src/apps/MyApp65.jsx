import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main5/sub1").then((response) => {
            console.log(response);
            console.log(response.data);
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp65;

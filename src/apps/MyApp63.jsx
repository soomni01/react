import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp63(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub8", {
            data: {
              id: 10,
              name: "park",
            },
          });
        }}
      >
        delete
      </Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub7", { name: "lee", age: 55 });
        }}
      >
        put
      </Button>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub6", {
            data: {
              id: 5,
              name: "kim",
            },
          });
        }}
      >
        delete (w/ json)
      </Button>
      <Button
        onClick={() => {
          axios.delete("/api/main3/sub5");
        }}
      >
        delete1
      </Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub4", { title: "제목", author: "한강" });
        }}
      >
        put (w/ json)
      </Button>
      <Button
        onClick={() => {
          axios.put("/api/main3/sub3");
        }}
      >
        put1
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main3/sub2", { name: "son", age: 99 });
        }}
      >
        post1
      </Button>
      <Button onClick={() => axios.get("/api/main3/sub1")}>get1</Button>
    </div>
  );
}

export default MyApp63;

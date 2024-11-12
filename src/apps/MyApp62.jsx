import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub7", [
            {
              title: "제목1",
              author: "작가1",
              content: "내용1",
              price: 1,
              quantity: 1,
            },
            {
              title: "제목2",
              author: "작가2",
              content: "내용2",
              price: 2,
              quantity: 2,
            },
            {
              title: "제목3",
              author: "작가3",
              content: "내용3",
              price: 3,
              quantity: 3,
            },
          ]);
        }}
      >
        btn7
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "son", age: 11 },
            { name: "han", age: 22 },
            { name: "faker", age: 33 },
          ]);
        }}
      >
        btn6
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub5", ["coffee", "latte", "mocha"]);
        }}
      >
        btn5
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub4", {
            id: 1,
            name: "상품1",
            available: true,
            shops: ["가게1", "가게2", "가게3"],
            attribute: {
              name: "name",
              value: "value",
            },
          });
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          axios.post("api/main2/sub3", {
            name: "son",
            age: 99,
            married: true,
            items: ["coffe", "milk", "cola"],
            team: {
              name: "토트넘",
              location: "런던",
            },
          });
        }}
      >
        btn3
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub2", {
            title: "제목",
            author: "작가",
            content: "내용",
            price: 4000,
            quantity: 5,
          });
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main2/sub1", { name: "son", age: 99 });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp62;

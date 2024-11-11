import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp57(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/hi");
        }}
      >
        get 요청
      </Button>
      <Button
        onClick={() => {
          axios.post("/hello");
        }}
      >
        post 요청
      </Button>
      <hr />
      {/*javascript 사용*/}
      <Button
        onClick={() => {
          axios.request({
            method: "get",
            url: "/hi",
          });
        }}
      >
        get 요청
      </Button>
      <Button
        onClick={() => {
          axios.request({
            method: "post",
            url: "/hello",
          });
        }}
      >
        post 요청
      </Button>
      <hr />
      {/* html 요소 이용 (a, form) */}
      {/* get */}
      <a href="/hi">to hi</a>
      <hr />
      <form action="/hello" method="get">
        <button>전송</button>
      </form>
      <hr />
      {/*  post */}
      <form action="/greeting" method="post">
        <button>전송</button>
      </form>
    </div>
  );
}

export default MyApp57;

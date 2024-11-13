import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp68(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main7/sub12")
            .then((res) => res.data)
            .then((data) => console.log(data))
            // 200번대가 아니면 catch로 받은 함수 실행
            .catch((error) => {
              console.log("200번 대 아님");
              console.log(error);
              console.log(error.response.status); // 상태코드
              console.log(error.response.data); // 응답본문
              console.log(error.response.data.name); // 응답본문의 속성
              console.log(error.response.data.age); // 응답본문의 속성
            });
        }}
      >
        405 응답
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub11");
        }}
      >
        sub11경로 : 403
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub10");
        }}
      >
        sub10경로 : 202
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub9");
        }}
      >
        sub9경로 : 405
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub8");
        }}
      >
        no content
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub7");
        }}
      >
        not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub6");
        }}
      >
        ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub5");
        }}
      >
        500 server error
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub4");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub3");
        }}
      >
        200 ok
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub2");
        }}
      >
        404 not found
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main7/sub1");
        }}
      >
        200 ok
      </Button>
    </div>
  );
}

export default MyApp68;

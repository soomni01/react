import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function MyApp80(props) {
  return (
    <div>
      <Button
        onClick={() => {
          const token = localStorage.getItem("token");
          const decoded = jwtDecode(token);
          console.log(decoded);
          console.log("id", decoded.sub);
          console.log("권한", decoded.scope);
          console.log("유효기간", Date(decoded.exp));
        }}
      >
        jwt 디코딩 해서 보기
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main9/sub10", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        사용자 정보
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main9/sub4").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        어드민
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub5").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        매니저
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub6").then((res) => {
            localStorage.setItem("token", res.data);
          });
        }}
      >
        어드민 매니저
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub7", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        어드민만 가능 요청
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub8", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        매니저만 가능 요청
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub9", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        어드민/매니저만 가능 요청
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.get("/api/main9/sub1").then((res) => {
            const token = res.data;
            // console.log(token);
            localStorage.setItem("token", token);
          });
        }}
      >
        jwt 얻기(로그인)
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub2");
        }}
      >
        누구나 접근
      </Button>
      <Button
        onClick={() => {
          axios.get("/api/main9/sub3", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
        }}
      >
        로그인 유저만 접근
      </Button>
      <Button
        onClick={() => {
          localStorage.removeItem("token");
        }}
      ></Button>
    </div>
  );
}

export default MyApp80;

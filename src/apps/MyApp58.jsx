import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  // URLSearchParams
  const p = new URLSearchParams();
  p.append("name", "hankang"); // name=hankang
  p.append("age", 55); // name=hankang&age=55
  p.append("city", "서울"); // name=hankang&age=55&city=서울
  p.append("city", "부산"); // name=hankang&age=55&city=서울&city=부산
  p.set("city", "제주"); // name=hankang&age=55&city=제주

  const q = new URLSearchParams();
  q.append("email", "gmail");
  q.append("title", "소년이 온다");
  q.append("author", "한강");
  return (
    <div>
      <Button
        onClick={() => {
          // /hi로 get 요청 보내기
          //  요청파라미터 email: gmail
          //            title : 소년이 온다
          //           author : 한강
          axios.get(`/hi?${q}`);
        }}
      >
        btn5
      </Button>
      <Button
        onClick={() => {
          axios.get(`/hello?${p}`);
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: p,
          });
        }}
      >
        btn3
      </Button>
      {/* /hello 로  address는 "신촌", city 는 "서울" get 요청 전송*/}
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: {
              address: "신촌",
              city: "서울",
            },
          });
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.get("/hi", {
            params: {
              name: "son",
              age: 5,
            },
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp58;

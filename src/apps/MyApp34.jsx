import React from "react";
import { Button } from "../components/ui/button.jsx";
import { toaster } from "../components/ui/toaster.jsx";

function MyApp34(props) {
  return (
    <div>
      <Button
        onClick={() => {
          toaster.create({
            description: "안내메세지",
            type: "success",
            duration: 10000,
          });
        }}
      >
        성공
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메세지", type: "error" });
        }}
      >
        실패
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메세지", type: "info" });
        }}
      >
        정보
      </Button>
      <Button
        onClick={() => {
          toaster.create({ description: "안내메세지", type: "warning" });
        }}
      >
        주의
      </Button>

      <hr />
      <Button
        onClick={() => {
          toaster.create({
            description: "안내 메세지!!!!",
          });
        }}
      >
        토스트1
      </Button>
    </div>
  );
}

export default MyApp34;

import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp60(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("", {});
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp60;

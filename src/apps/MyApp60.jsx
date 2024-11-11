import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";

function MyApp60(props) {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const handleClick = () => {
    axios.post("/api/main1/sub3", { address: address, city: city });
  };
  return (
    <div>
      <Field label={"주소"}>
        <Input onChange={(e) => setAddress(e.target.value)} value={address} />
      </Field>
      <Field label={"도시"}>
        <Input onChange={(e) => setCity(e.target.value)} value={city} />
      </Field>
      <Button onClick={handleClick} colorPalette={"blue"}>
        전송
      </Button>
      <hr />
      <Button
        onClick={() => {
          // `{"name": "son", "age": 33}`
          axios.post("/api/main1/sub2", { name: "son", age: 33 });
        }}
      >
        btn2
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main1/sub1", {});
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp60;

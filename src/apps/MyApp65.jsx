import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub9")
            .then((res) => res.data)
            .then((data) => {
              console.log(data.name);
              console.log(data.address);
              console.log(data.married);
              console.log(data.items[0]);
              console.log(data.items[1]);
              console.log(data.items[1]);
              console.log(data.company.name);
              console.log(data.company.location);
            });
        }}
      >
        btn9
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub8")
            .then((res) => res.data)
            .then((data) => console.log(data));
        }}
      >
        btn8
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub7")
            .then((res) => res.data)
            .then((d) => {
              console.log(d.product.name);
              console.log(d.product.price);
              console.log(d.product.location[0]);
              console.log(d.product.location[1]);
              console.log(d.product.quantity);
            });
        }}
      >
        btn7
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub6")
            .then((response) => response.data)
            .then((data) => {
              console.log(data.name);
              console.log(data.items[0]);
              console.log(data.items[1]);
              console.log(data.items[2]);
              console.log(data.team.name);
              console.log(data.team.location);
            });
        }}
      >
        btn6
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub5")
            .then((response) => response.data)
            .then((book) => {
              console.log(book);
              console.log(book.title);
              console.log(book.content);
              console.log(book.price);
              console.log(book.available);
            });
        }}
      >
        btn5
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((response) => response.data)
            .then((data) => {
              console.log(data);
              console.log(data.name);
              console.log(data.age);
            });
        }}
      >
        btn4
      </Button>
      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub3")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn3
      </Button>
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

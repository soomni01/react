import React, { useState } from "react";
import axios from "axios";

function MyApp69(props) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState(undefined);

  const handleClick = () => {
    // file 전송시 postForm 사용
    axios.postForm("/api/main8/sub1", {
      city: city,
      country: country,
      file: file,
    });
  };

  return (
    <div>
      <input
        placeholder={"도시"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <input
        placeholder={"국가"}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default MyApp69;

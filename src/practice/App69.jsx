import React, { useState } from "react";
import axios from "axios";

function App69(props) {
  const [title, setTitle] = useState("");
  const [attached, setAttached] = useState(undefined);

  const handleClick = () => {
    axios.postForm("/api/main8/sub2", {
      title: title,
      attached: attached,
    });
  };
  return (
    <div>
      <input
        placeholder={"제목"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setAttached(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>전송</button>
    </div>
  );
}

export default App69;

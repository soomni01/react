import React, { useState } from "react";
import axios from "axios";

function App70(props) {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);

  const handleClcik = () => {
    axios.postForm("/api/main8/sub4", {
      name: name,
      attached: files,
    });
  };

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        accept={"image/*"}
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />
      <br />
      <button onClick={handleClcik}>전송</button>
    </div>
  );
}

export default App70;

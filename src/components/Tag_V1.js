import React, { useState } from "react";
import useGif from "../components/useGif";
const Tag_V1 = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img width="300" src={gif} alt="random gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>New Gif</button>
    </div>
  );
};

export default Tag_V1;

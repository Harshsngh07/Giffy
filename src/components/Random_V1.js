import React from "react";
import useGif from "../components/useGif";
const Random_V1 = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random</h1>
      <img width="300" src={gif} alt="random gif" />
      <button onClick={fetchGif}>New Gif</button>
    </div>
  );
};

export default Random_V1;

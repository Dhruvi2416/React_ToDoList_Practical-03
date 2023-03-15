import React from "react";

export default function Image(props) {
  return (
    <>
      <img src="./image1.png" alt="img2" onClick={props.imageDisplay} />
    </>
  );
}

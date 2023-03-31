import React from "react";

export default function Button(props) {
  return (
    <>
      <div className="plus">
        <button onClick={props.clicked}>+</button>
      </div>
    </>
  );
}

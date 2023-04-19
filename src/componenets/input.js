import React from "react";
import { useState } from "react";

export default function Input(props) {
  let [newTask, setNewTask] = useState(""); //whatever is written on input text is sotred in newTask and setNewTask will change value

  const itemEvent = (event) => {
    if (event.key == "Enter") {
      if (event.target.value == "") {
        alert("Enter any task or to move back Press ESC");
      } else {
        //setNewTask(""); not necessary as each and every time component will be rendered as a fresh start, it is needed in display none,block
        props.entered(newTask);
      } //written on input text
    } else if (event.key === "Escape") {
      props.escaped();
    } else {
      setNewTask(event.target.value);
    }
  };

  return (
    <>
      <div className="input">
        <input
          type="text"
          value={newTask}
          placeholder="Enter task"
          onChange={itemEvent}
          onKeyDown={itemEvent}
        />
      </div>
    </>
  );
}

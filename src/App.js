import React, { useEffect } from "react";
import Dates from "./componenets/date";
import Input from "./componenets/input";
import Button from "./componenets/button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState } from "react";
export default function App() {
  // Date stored in localStorage and is checked so that one can get new empty list on another day
  useEffect(() => {
    const todayDate = new Date();

    const dateInLocalStorage = localStorage.getItem("date");
    if (dateInLocalStorage == null) {
      localStorage.setItem("date", todayDate);
    } else {
      //converted Date in string to object as todayDate is object and hence have to compare object with object
      const dateObject = new Date(dateInLocalStorage);
      //date comparision
      if (
        dateObject.getFullYear() != todayDate.getFullYear() ||
        dateObject.getMonth() != todayDate.getMonth() ||
        dateObject.getDate() != todayDate.getDate()
      ) {
        localStorage.setItem("doneList", JSON.stringify([]));
        localStorage.setItem("itemList", JSON.stringify([]));
        localStorage.setItem("date", todayDate);
        if (items.length > 0) {
          setItems([]);
          setIsComplete([]);
        }
      }
    }
  });
  // list store for a day and if started first at render than will initialize with empty array
  const getStoredList = JSON.parse(localStorage.getItem("itemList"));
  const [items, setItems] = useState(
    getStoredList !== null ? getStoredList : []
  );

  const [shouldDisplay, setShouldDisplay] = useState(false);
  //set should siplay true for input field on clicking button
  function handleClick() {
    setShouldDisplay(true);
  }
  // enter key submission
  function handleEnterKey(newTask) {
    setShouldDisplay(false);
    setItems([...items, newTask]);
    setIsComplete([...isComplete, false]);
    localStorage.setItem("itemList", JSON.stringify([...items, newTask]));
    localStorage.setItem("doneList", JSON.stringify([...isComplete, false]));

    setTimeout(() => {
      alert("Task Added sucessfully");
    });
  }
  // escape key
  function handleEscapeKey() {
    setShouldDisplay(false);
  }
  // storing the value of checkbox done or undone
  const getCheckedValues = JSON.parse(localStorage.getItem("doneList"));
  const [isComplete, setIsComplete] = useState(
    getCheckedValues !== null ? getCheckedValues : []
  );

  // setting event of checkbox in array
  function handleCheck(event, i) {
    const array = [...isComplete];
    array[i] = event.target.checked;
    setIsComplete(array);
    localStorage.setItem("doneList", JSON.stringify(array));
  }

  return (
    <>
      {process.env.REACT_APP_PORT}
      <div className="container">
        <div className="box col-lg-12">
          <Dates />
          <div className="input-list">
            <ul>
              {items.map((itemValue, i) => {
                return (
                  <div className="list d-flex" key={i}>
                    <div className="task-write">
                      <h4
                        className={
                          isComplete[i] == true ? "complete" : "incomplete"
                        }
                      >
                        <li>{itemValue}</li>
                      </h4>
                    </div>
                    <div className="round">
                      <input
                        type="checkbox"
                        id={`checkbox${i}`}
                        // index to access particular checkbox
                        checked={isComplete[i] == true ? true : false}
                        onChange={(event) => {
                          handleCheck(event, i);
                        }}
                      />
                      <label htmlFor={`checkbox${i}`}></label>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
          {shouldDisplay ? (
            <Input entered={handleEnterKey} escaped={handleEscapeKey} />
          ) : null}
        </div>

        {shouldDisplay ? null : <Button clicked={handleClick} />}
      </div>
    </>
  );
}

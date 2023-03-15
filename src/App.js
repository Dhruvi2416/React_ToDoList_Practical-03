import React, { useEffect } from "react";
import Dates from "./date";
import Input from "./input";
import Button from "./button";
import image1 from "./image0.png";
import image2 from "./image1.png";
import { useState } from "react";
export default function App() {
  useEffect(() => {
    const todayDate = new Date();

    const dateInLocalStorage = localStorage.getItem("date");
    if (dateInLocalStorage == null) {
      localStorage.setItem("date", todayDate);
    } else {
      const dateObject = new Date(dateInLocalStorage);

      console.log(dateObject.getDate());

      if (
        dateObject.getFullYear() <= todayDate.getFullYear() &&
        dateObject.getMonth() <= todayDate.getMonth() &&
        dateObject.getDate() < todayDate.getDate()
      ) {
        localStorage.setItem("imageList", JSON.stringify([]));
        localStorage.setItem("itemList", JSON.stringify([]));
        localStorage.setItem("date", todayDate);
        setItems([]);
        setImages([]);
      }
    }
  });

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("itemList")) !== null
      ? JSON.parse(localStorage.getItem("itemList"))
      : []
  );

  const [shouldDisplay, setShouldDisplay] = useState(false);

  function handleClick() {
    setShouldDisplay(true);
  }

  function handleEnterKey(newTask) {
    setShouldDisplay(false);
    setItems([...items, newTask]);
    setImages([...images, false]);
    localStorage.setItem("itemList", JSON.stringify([...items, newTask]));
    localStorage.setItem("imageList", JSON.stringify([...images, false]));

    setTimeout(() => {
      alert("Task Added sucessfully");
    });
  }

  function handleEscapeKey() {
    setShouldDisplay(false);
  }

  const [images, setImages] = useState(
    JSON.parse(localStorage.getItem("imageList")) !== null
      ? JSON.parse(localStorage.getItem("imageList"))
      : []
  );
  function handleImage(i) {
    const array = [...images];
    array[i] = true;
    setImages(array);
    localStorage.setItem("imageList", JSON.stringify(array));
  }

  return (
    <>
      <div className="container">
        <div className="box col-lg-12">
          <Dates />
          <div className="input-list">
            <ul>
              {items.map((itemvalue, i) => {
                return (
                  <div className="list d-flex">
                    <div className="task-write">
                      <h4
                        className={
                          images[i] == true ? "complete" : "incomplete"
                        }
                      >
                        <li key={i}>{itemvalue}</li>
                      </h4>
                    </div>
                    <div className="image">
                      {images[i] ? (
                        <img src={image2} alt="img2" />
                      ) : (
                        <img
                          src={image1}
                          alt="img1"
                          onClick={() => handleImage(i)}
                        />
                      )}

                      {/* {image ? (
                        <img
                          src="image2.png"
                          alt="img1"
                          onClick={handleImage}
                          key={i}
                        />
                      ) : (
                        <img src="./image1.png" alt="img2" />
                      )} */}
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

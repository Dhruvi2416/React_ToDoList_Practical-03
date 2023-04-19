import React from "react";

const day = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THRUSDAY",
  "FRIDAY",
  "SATURDAY",
];
const month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default class Dates extends React.Component {
  render() {
    const time = new Date();
    return (
      <>
        <div className="time d-flex">
          <div className="date-month-year d-flex">
            <div className="date">
              <h1>{time.getDate()}</h1>
            </div>

            <div className="month-year">
              <div className="month">{month[time.getMonth()]}</div>
              <div className="year">{time.getFullYear()}</div>
            </div>
          </div>

          <div className="day">{day[time.getDay()]}</div>
        </div>
      </>
    );
  }
}

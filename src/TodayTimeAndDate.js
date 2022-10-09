import React from "react";

export default function TodayTimeAndDate(props) {
  let currentDate = new Date();
  let timezone = props.timezone;

  const localTime = currentDate.getTime();
  const localOffset = currentDate.getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  let cityDateCode = utc + 1000 * timezone;
  let cityDate = new Date(cityDateCode);

  let days = [
    "Sunday",
    "Monday",
    "Thusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let hour = cityDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = cityDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[cityDate.getDay()];
  let date = cityDate.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = cityDate.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let year = cityDate.getFullYear();
  
  return (
    <div>
      <h4>
        {day} {hour}:{minutes}
      </h4>
      <h6>
        {date}/{month}/{year}
      </h6>
    </div>
  );
}

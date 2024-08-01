"use client";
import React, { useState, useEffect, useCallback } from "react";

export default function ComingSoon() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const deadline = "December 31, 2024";

  const getTime = useCallback(() => {
    let time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, [deadline]);

  useEffect(() => {
    let interval = setInterval(getTime, 1000);

    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <ul className="count-down list-unstyled">
      <li id="days" className="count-number list-inline-item m-2">
        {days}
        <p className="count-head">Days</p>
      </li>
      <li id="hours" className="count-number list-inline-item">
        {hours}
        <p className="count-head">Hours</p>
      </li>
      <li id="mins" className="count-number list-inline-item">
        {minutes}
        <p className="count-head">Mins</p>
      </li>
      <li id="secs" className="count-number list-inline-item">
        {seconds}
        <p className="count-head">Secs</p>
      </li>
      <li id="end" className="h1"></li>
    </ul>
  );
}

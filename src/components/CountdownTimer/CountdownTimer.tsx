import React, { useState, useEffect } from "react";

function CountdownTimer({ eventDate }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // const [targetDate, setTargetDate] = useState(new Date(eventDateStr)); // Target date and time

  const [targetDate, setTargetDate] = useState(new Date("2024-05-10T10:00:00")); // Target date and time THAT WORKDS

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  const getTimeRemaining = () => {
    const days2 = Math.floor(
      ((currentTime.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24)) *
        -1
    );

    const hours2 = Math.floor(
      (((currentTime.getTime() - eventDate.getTime()) / (1000 * 60 * 60)) %
        24) *
        -1
    );

    const seconds2 = Math.floor(
      (-1 * ((currentTime.getTime() - eventDate.getTime()) / 1000)) % 60
    );

    const minutes2 = Math.floor(
      (-1 * ((currentTime.getTime() - eventDate.getTime()) / (1000 * 60))) % 60
    );

    return {
      days2,

      hours2,

      minutes2,
      seconds2,
    };
  };

  const { days2, hours2, minutes2, seconds2 } = getTimeRemaining();

  return (
    <div>
      {/* <h1>{eventDate.toLocaleDateString()}</h1>
      <h2>days diff using eventDate: {days2}</h2>
      <h2>hours diff using eventDate: {hours2}</h2> */}
      <div>
        {days2 < 0 ? (
          <span>This event has elapsed</span>
        ) : (
          <>
            {days2 > 0 && <span>In {days2} days </span>}
            {hours2 > 0 && <span>{hours2.toString().padStart(2, "0")}:</span>}
            <span>{minutes2.toString().padStart(2, "0")}:</span>
            <span>{seconds2.toString().padStart(2, "0")}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default CountdownTimer;

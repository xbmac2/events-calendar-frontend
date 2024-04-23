import { useState } from "react";
import { months, weekdays } from "../../helpers/calendar-helpers";
import CalendarDays from "../CalendarDays/CalendarDays";
import styles from "./Calendar.module.scss";

const Calendar = ({ openModal }) => {
  const theDate = new Date();
  const [theCurrentDate, setTheCurrentDate] = useState(theDate);

  const goPreviousMonth = () => {
    const prevMonthDate = new Date(
      theCurrentDate.getFullYear(),
      theCurrentDate.getMonth() - 1
    );
    setTheCurrentDate(prevMonthDate);
    console.log(prevMonthDate);
  };

  const goNextMonth = () => {
    const nextMonthDate = new Date(
      theCurrentDate.getFullYear(),
      theCurrentDate.getMonth() + 1
    );
    setTheCurrentDate(nextMonthDate);
    console.log(nextMonthDate);
  };
  return (
    <div>
      <div className={styles.months_header}>
        <button onClick={goPreviousMonth}>&#x2190;</button>
        <h1>
          {months[theCurrentDate.getMonth()]} {theCurrentDate.getFullYear()}
        </h1>
        <button onClick={goNextMonth}>&#x2192;</button>
      </div>
      <div className={styles.weekdays_header}>
        {weekdays.map((weekday) => {
          return (
            <div key={weekday}>
              <p>{weekday}</p>
            </div>
          );
        })}
      </div>
      <CalendarDays theCurrentDate={theCurrentDate} openModal={openModal} />
    </div>
  );
};

export default Calendar;

import { useState } from "react";
import { months, weekdays } from "../../helpers/calendar-helpers";
import CalendarDays from "../CalendarDays/CalendarDays";
import styles from "./Calendar.module.scss";

const Calendar = ({ openModal }) => {
  const theDate = new Date();
  const [theCurrentDate, setTheCurrentDate] = useState(theDate);

  const goPreviousMonth = () => {
    const prevMonthDate = new Date(
      theDate.getFullYear(),
      theDate.getMonth() - 1
    );
    setTheCurrentDate(prevMonthDate);
    console.log(prevMonthDate);
  };
  return (
    <div>
      <div className={styles.months_header}>
        <button onClick={goPreviousMonth}>&#x2190;</button>
        <h1>
          {months[theCurrentDate.getMonth()]} {theCurrentDate.getFullYear()}
        </h1>
        <button>&#x2192;</button>
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
      <CalendarDays openModal={openModal} />
    </div>
  );
};

export default Calendar;

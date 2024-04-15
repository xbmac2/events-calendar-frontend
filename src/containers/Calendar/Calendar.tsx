import { weekdays } from "../../helpers/calendar-helpers";
import CalendarDays from "../CalendarDays/CalendarDays";
import styles from "./Calendar.module.scss";

const Calendar = () => {
  //const currentDay = new Date();
  return (
    <div>
      <h1>April 2024</h1>
      <div className={styles.weekdays_header}>
        {weekdays.map((weekday) => {
          return (
            <div key={weekday}>
              <p>{weekday}</p>
            </div>
          );
        })}
      </div>
      <CalendarDays />
    </div>
  );
};

export default Calendar;

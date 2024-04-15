import styles from "./CalendarDays.module.scss";

export interface CalendarDaysProps {
  props: Date;
}

const CalendarDays = () => {
  const theDate = new Date();
  const firstDayOfMonth = new Date(
    theDate.getFullYear(),
    theDate.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === theDate.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === theDate.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }
  return (
    <div>
      {/* <p>CalendarDays</p> */}
      <div className={styles.table_content}>
        {/* <p>{firstDayOfMonth.toDateString()}</p> */}
        {currentDays.map((day) => {
          return (
            <div key={day.date.toDateString()} className={styles.calendar_day}>
              <p>{day.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarDays;

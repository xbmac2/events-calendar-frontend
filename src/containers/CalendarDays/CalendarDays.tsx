import styles from "./CalendarDays.module.scss";

export interface CalendarDaysProps {
  theCurrentDate: Date;
  openModal: (date: any) => unknown;
}

const CalendarDays = ({ theCurrentDate, openModal }: CalendarDaysProps) => {
  const theDate = theCurrentDate; //new Date();
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
            <div
              onClick={() => openModal(day.date)}
              key={day.date.toDateString()}
              className={
                `${styles.calendar_day}` +
                (day.currentMonth
                  ? ` ${styles.current}`
                  : ` ${styles.not_current}`)
              }
            >
              <p>{day.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarDays;

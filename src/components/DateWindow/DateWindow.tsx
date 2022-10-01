import DatePicker from "react-datepicker";
import { Moment } from "moment";
import styles from "./DateWindow.module.css";

interface DateWindowProps {
  getDate: (e: Date | null) => void;
  selectedDate: Moment;
  getToday: () => void;
  getTomorrow: () => void;
  daySelectButtonStyle: string | null;
}

const DateWindow = ({
  getDate,
  selectedDate,
  getToday,
  getTomorrow,
  daySelectButtonStyle,
}: DateWindowProps) => {
  return (
    <div className={styles.container}>
      <button
        className={
          daySelectButtonStyle === "today"
            ? styles["click-date-button"]
            : styles["date-button"]
        }
        onClick={getToday}
      >
        Сегодня
      </button>
      <button
        className={
          daySelectButtonStyle === "tomorrow"
            ? styles["click-date-button"]
            : styles["date-button"]
        }
        onClick={getTomorrow}
      >
        Завтра
      </button>

      <button className={styles["date-button"]}>
        {selectedDate.format("DD.MM")}
      </button>

      <DatePicker
        wrapperClassName={styles.datePicker}
        selected={selectedDate.toDate()}
        onChange={(date) => getDate(date)}
        dateFormat="dd/MM/yyyy"
        customInput={
          <button className={styles["all-dates-button"]}>Все даты</button>
        }
      />
    </div>
  );
};

export default DateWindow;

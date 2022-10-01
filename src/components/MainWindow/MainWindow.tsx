import { useState } from "react";
import moment from "moment";
import DateWindow from "../DateWindow/DateWindow";
import TimeWindow from "../TimeWindow/TimeWindow";
import styles from "./MainWindow.module.css";

const today = moment();
const tomorrow = moment().add("day", 1);

const MainWindow = () => {
  const [selectedDate, setDate] = useState(today);
  const [selectedTime, setselectedTime] = useState<string | null>(null);
  const [daySelectButtonStyle, setDaySelectButtonStyle] = useState<
    string | null
  >("today");

  const getToday = () => {
    setDaySelectButtonStyle("today");
    setDate(today);

    if (!selectedDate.isSame(today, "day")) {
      setselectedTime(null);
    }
  };

  const getTomorrow = () => {
    setDaySelectButtonStyle("tomorrow");
    setDate(tomorrow);

    if (!selectedDate.isSame(tomorrow, "day")) {
      setselectedTime(null);
    }
  };

  const getDate = (date: Date | null) => {
    const nextDate = moment(date);

    setDate(nextDate);

    if (!selectedDate.isSame(nextDate, "day")) {
      setselectedTime(null);
    }

    if (nextDate.isSame(tomorrow, "day")) {
      setDaySelectButtonStyle("tomorrow");
      return;
    }

    if (nextDate.isSame(today, "day")) {
      setDaySelectButtonStyle("today");
      return;
    }

    setDaySelectButtonStyle(null);
  };

  const getClick = (e: string) => {
    setselectedTime(e);
  };

  return (
    <div className={styles.container}>
      <DateWindow
        getDate={getDate}
        selectedDate={selectedDate}
        getToday={getToday}
        getTomorrow={getTomorrow}
        daySelectButtonStyle={daySelectButtonStyle}
      />
      <TimeWindow getClick={getClick} selectedTime={selectedTime} />
      <button className={styles["record-button"]}>
        Записаться на консультацию
      </button>
    </div>
  );
};

export default MainWindow;

import { useState } from "react";
import styles from "./TimeWindow.module.css";
import timeData from "../../data";

interface TimeWindowProps {
  getClick: (e: string) => void;
  selectedTime: string | null;
}

const TimeWindow = ({ getClick, selectedTime }: TimeWindowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      {timeData.map((el, index) => {
        if (index > 8 && !isOpen) return undefined;
        return (
          <button
            className={
              el === selectedTime
                ? styles["click-time-button"]
                : styles["time-button"]
            }
            key={index}
            onClick={() => getClick(el)}
          >
            {el}
          </button>
        );
      })}
      <button className={styles["time-button"]} onClick={getSelect}>
        {isOpen ? "⬆" : "⬇"}
      </button>
    </div>
  );
};

export default TimeWindow;

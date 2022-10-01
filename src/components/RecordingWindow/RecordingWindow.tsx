import styles from "./RecordingWindow.module.css";
import HeaderWindow from "../HeaderWindow/HeaderWindow";
import MainWindow from "../MainWindow/MainWindow";

const RecordingWindow = () => {
  return (
    <div className={styles.window}>
      <HeaderWindow />
      <MainWindow />
    </div>
  );
};

export default RecordingWindow;

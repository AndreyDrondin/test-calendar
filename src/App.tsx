import RecordingWindow from "./components/RecordingWindow/RecordingWindow";
import styles from "./App.module.css";

import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className={styles.container}>
      <RecordingWindow />
    </div>
  );
}

export default App;

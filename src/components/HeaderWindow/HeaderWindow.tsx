import styles from "./HeaderWindow.module.css";

const HeaderWindow = () => {
  return (
    <div className={styles.header}>
      <div>Онлайн-консультация</div>
      <div>1200 ₽</div>
    </div>
  );
};

export default HeaderWindow;

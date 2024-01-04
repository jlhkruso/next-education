// style
import styles from "./userValid.module.scss";
import styleGrid from "@/styles/base/grid.module.scss";

export const UserValid = async () => {
  return (
    <div className={`${styles.userValid} ${styleGrid.row}`}>
      <div
        className={`${styleGrid.col12} ${styleGrid.colsm6} ${styles.userValid__new}`}
      >
        <h2>New :user-valid pseudo</h2>
        <form>
          <div className={`${styles.userValid__field}`}>
            <label htmlFor="input">Input</label>
            <input id="input" aria-describedby="input-message" required />
          </div>
        </form>
      </div>
      <div
        className={`${styleGrid.col12} ${styleGrid.colsm6} ${styles.userValid__old}`}
      >
        <h2>Old :valid pseudo</h2>
        <form>
          <div className={`${styles.userValid__field}`}>
            <label htmlFor="input">Input</label>
            <input id="input" aria-describedby="input-message" required />
          </div>
        </form>
      </div>
    </div>
  );
};

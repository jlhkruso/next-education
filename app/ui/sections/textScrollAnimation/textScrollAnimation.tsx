// style
import styles from "./textScrollAnimation.module.scss";
import styleGrid from "@/styles/base/grid.module.scss";

export const TextScrollAnimation = async () => {
  return (
    <div className={`${styles.userValid} ${styleGrid.row}`}>
      <div className={`${styleGrid.col12} ${styles.textScrollAnimation}`}>
        {/* <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span> */}
      </div>
    </div>
  );
};

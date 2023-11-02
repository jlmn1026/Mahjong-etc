import tileText, { LetterTileNum, NumberTileNum } from "@/components/tileText";
import styles from "./sample.module.css";

const SampleIndex = () => {
  return (
    <div className={styles.mainContainber}>
      <div className={styles.mainContent}>
        <div className={styles.tileContainer}>
          {Array.from({ length: 9 }).map((item, index) => {
            return tileText<"manz">("manz", (index + 1) as NumberTileNum);
          })}
        </div>
        <div className={styles.tileContainer}>
          {Array.from({ length: 9 }).map((item, index) => {
            return tileText<"pinz">("pinz", (index + 1) as NumberTileNum);
          })}
        </div>
        <div className={styles.tileContainer}>
          {Array.from({ length: 9 }).map((item, index) => {
            return tileText<"souz">("souz", (index + 1) as NumberTileNum);
          })}
        </div>
        <div className={styles.tileContainer}>
          {Array.from({ length: 7 }).map((item, index) => {
            return tileText<"ji">("ji", (index + 1) as LetterTileNum);
          })}
        </div>
      </div>
    </div>
  );
};

export default SampleIndex;

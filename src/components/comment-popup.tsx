import { FunctionComponent } from "react";
import styles from "./comment-popup.module.css";

type CommentPopupType = {
  onClose?: () => void;
};

const CommentPopup: FunctionComponent<CommentPopupType> = ({ onClose }) => {
  return (
    <div className={styles.commentPopup}>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon11@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.fanParent}>
            <b className={styles.fan}>fan</b>
            <div className={styles.div}>30분</div>
          </div>
          <div className={styles.sheIsSuch}>
            She is such a talented performer! Her stage presence is amazing.
          </div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <div className={styles.icon1} />
        <div className={styles.frameParent}>
          <div className={styles.fanParent}>
            <b className={styles.fan}>jenny-love</b>
            <div className={styles.div}>28분</div>
          </div>
          <div className={styles.sheIsSuch}>
            Her charm and charisma captivate audiences everywhere. She truly
            owns the stage
          </div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon2@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.fanParent}>
            <b className={styles.fan}>fanfany</b>
            <div className={styles.div}>25분</div>
          </div>
          <div className={styles.sheIsSuch}>
            She is such a talented performer! Her stage presence is amazing.
          </div>
        </div>
      </div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="" src="/icon3@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.fanParent}>
            <b className={styles.fan}>1324</b>
            <div className={styles.div}>20분</div>
          </div>
          <div className={styles.sheIsSuch}>
            Her charm and charisma captivate audiences everywhere. She truly
            owns the stage
          </div>
        </div>
      </div>
      <div className={styles.inputfieldParent}>
        <input className={styles.inputfield} type="text" />
        <button className={styles.send}>
          <img className={styles.vectorIcon} alt="" src="/vector31.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
        </button>
      </div>
    </div>
  );
};

export default CommentPopup;

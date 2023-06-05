import { FunctionComponent } from "react";
import styles from "./password-error-popup.module.css";

type PasswordErrorPopupType = {
  onClose?: () => void;
};

const PasswordErrorPopup: FunctionComponent<PasswordErrorPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.passwordErrorPopup}>
      <div className={styles.div}>
        <div className={styles.errorText}>
          존재하지 않은 계정입니다. 새 계정을 생성해주세요.
        </div>
      </div>
    </div>
  );
};

export default PasswordErrorPopup;

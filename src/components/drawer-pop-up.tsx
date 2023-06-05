import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./drawer-pop-up.module.css";

type DrawerPopUpType = {
  onClose?: () => void;
};

const DrawerPopUp: FunctionComponent<DrawerPopUpType> = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onAboutClick = useCallback(() => {
    navigate("/intro");
  }, [navigate]);

  const onConcertClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onFestivalClick = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onExhibitionExperienceClick = useCallback(() => {
    navigate("/eventexhibitionexperience");
  }, [navigate]);

  const onCustomerServiceClick = useCallback(() => {
    navigate("/customerservicenotice");
  }, [navigate]);

  return (
    <div className={styles.drawerPopUp} data-animate-on-scroll>
      <div className={styles.drawerPopUpInner}>
        <div className={styles.aboutParent}>
          <button className={styles.about} onClick={onAboutClick}>
            About
          </button>
          <div className={styles.eventParent}>
            <button className={styles.event}>Event</button>
            <div className={styles.concertParent}>
              <button className={styles.concert} onClick={onConcertClick}>
                Concert
              </button>
              <button className={styles.concert} onClick={onFestivalClick}>
                Festival
              </button>
              <button
                className={styles.concert}
                onClick={onExhibitionExperienceClick}
              >
                exhibition / experience
              </button>
            </div>
          </div>
          <button className={styles.about} onClick={onCustomerServiceClick}>
            Customer service
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerPopUp;

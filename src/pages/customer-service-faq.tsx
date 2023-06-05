import { FunctionComponent, useState, useCallback, useEffect } from "react";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import DrawerPopUp from "../components/drawer-pop-up";
import PortalDrawer from "../components/portal-drawer";
import styles from "./customer-service-faq.module.css";
const CustomerServiceFaq: FunctionComponent = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isDrawerPopUpOpen, setDrawerPopUpOpen] = useState(false);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onIntroClick = useCallback(() => {
    navigate("/intro");
  }, [navigate]);

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

  const onConcertClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onFestivalClick = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onExhibitionExperienceClick = useCallback(() => {
    navigate("/eventexhibitionexperience");
  }, [navigate]);

  const onCustomerServiceTextClick = useCallback(() => {
    navigate("/customerservicenotice");
  }, [navigate]);

  const openDrawerPopUp = useCallback(() => {
    setDrawerPopUpOpen(true);
  }, []);

  const closeDrawerPopUp = useCallback(() => {
    setDrawerPopUpOpen(false);
  }, []);

  const onNoticeClick = useCallback(() => {
    navigate("/customerservicenotice");
  }, [navigate]);

  const onFaqClick = useCallback(() => {
    navigate("/eventfestival");
  }, [navigate]);

  const onInquiryTextClick = useCallback(() => {
    navigate("/customerserviceinquiry");
  }, [navigate]);

  const onLinkText5Click = useCallback(() => {
    navigate("/termsconditions");
  }, [navigate]);

  const onLinkText6Click = useCallback(() => {
    navigate("/personalinformationpolicy");
  }, [navigate]);

  const onInstaClick = useCallback(() => {
    window.open("https://www.instagram.com/");
  }, []);

  const onFaceBookClick = useCallback(() => {
    window.open("https://www.facebook.com/");
  }, []);

  const onPinterClick = useCallback(() => {
    window.open("https://www.pinterest.co.kr/");
  }, []);

  return (
    <>
      <div className={styles.customerServiceFaq}>
        <nav className={styles.naviDiv}>
          <header className={styles.headerNavigation}>
            <div className={styles.logo} onClick={onLogoContainerClick}>
              <img
                className={styles.logoBackgroundIcon}
                alt=""
                src="/logobackground@2x.png"
              />
              <div className={styles.kCulturePass}>K-Culture Pass</div>
            </div>
            <div className={styles.navigationMenu}>
              <a className={styles.navigationLink}>
                <h2 className={styles.intro} onClick={onIntroClick}>
                  About
                </h2>
                <div className={styles.event}>
                  <div
                    className={styles.memberSectionSubmenu}
                    data-animate-on-scroll
                  >
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                    <div className={styles.menuList}>
                      <button
                        className={styles.concert}
                        onClick={onConcertClick}
                      >
                        Concert
                      </button>
                      <button
                        className={styles.concert}
                        onClick={onFestivalClick}
                      >
                        Festival
                      </button>
                      <button
                        className={styles.exhibitionExperience}
                        onClick={onExhibitionExperienceClick}
                      >
                        <p className={styles.exhibition}>Exhibition</p>
                        <p className={styles.exhibition}>Experience</p>
                      </button>
                    </div>
                  </div>
                  <b className={styles.event1}>Event</b>
                </div>
                <b
                  className={styles.customerService}
                  onClick={onCustomerServiceTextClick}
                >
                  Customer service
                </b>
              </a>
              <div className={styles.memberSection} onClick={openLoginPopup}>
                <button className={styles.button}>
                  <div className={styles.register}>Sign in</div>
                </button>
                <button className={styles.button1}>
                  <div className={styles.logIn}>Log in</div>
                </button>
              </div>
            </div>
            <img
              className={styles.hambugerMenuIcon}
              alt=""
              src="/hambugermenu.svg"
              onClick={openDrawerPopUp}
            />
          </header>
        </nav>
        <div className={styles.headerTitle}>
          <div className={styles.div}>
            <div className={styles.title}>
              <div className={styles.customerService1}>
                <b className={styles.questionTitle}>Customer service</b>
              </div>
            </div>
            <div className={styles.menu}>
              <div className={styles.notice} onClick={onNoticeClick}>
                공지사항
              </div>
              <div className={styles.faq} onClick={onFaqClick}>
                FAQ
              </div>
              <div className={styles.inquiry} onClick={onInquiryTextClick}>
                문의하기
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.div1}>
            <div className={styles.titleSection}>
              <div className={styles.title1}>자주 묻는 질문</div>
              <div className={styles.filter}>
                <div className={styles.all}>전체</div>
                <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
              </div>
            </div>
            <div className={styles.questionList}>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [About] 어떤 서비스인가요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 구매방법은?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 구매 후 환불 할 수 있나요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 최대 구매 수량은?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 해외카드 결제할수 있나요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [About] 어떤 서비스인가요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 구매방법은?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 구매 후 환불 할 수 있나요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 티켓 최대 구매 수량은?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
              <div className={styles.row}>
                <div className={styles.questionTitle}>
                  [Event] 해외카드 결제할수 있나요?
                </div>
                <img className={styles.plusIcon} alt="" src="/plus.svg" />
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.more}>More</div>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.columns}>
            <div className={styles.columnParent}>
              <div className={styles.column}>
                <div className={styles.logo1}>
                  <img
                    className={styles.logoBackgroundIcon}
                    alt=""
                    src="/logobackground1@2x.png"
                  />
                  <div className={styles.kCulturePass}>K-Culture Pass</div>
                </div>
              </div>
              <div className={styles.column1}>
                <div className={styles.footerLinks}>
                  <b className={styles.link}>{`주식회사 케이컬처패스   `}</b>
                  <div className={styles.link1}>대표 홍길동</div>
                  <div className={styles.link1}>사업자번호 123-45-67890</div>
                  <div className={styles.link3}>전화번호 070-1234-5678</div>
                  <div className={styles.link4}>
                    이메일 info@kculturepass.co.kr
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.columnWrapper}>
              <div className={styles.column2}>
                <div className={styles.footerLinks1}>
                  <div className={styles.link5} onClick={onLinkText5Click}>
                    서비스이용약관
                  </div>
                  <div className={styles.link5} onClick={onLinkText6Click}>
                    개인정보취급방침
                  </div>
                  <div className={styles.div2}>
                    통신판매업 신고번호 제2023-서울강동-1234호
                  </div>
                  <div className={styles.div2}>
                    주소 서울특별시 송파구 송파동 송파대로 123, 7층 701-가호
                    비지니스 센터 A실 (송파빌딩)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <div className={styles.snsParent}>
              <div className={styles.sns}>
                <button className={styles.insta} onClick={onInstaClick} />
                <button className={styles.faceBook} onClick={onFaceBookClick} />
                <button className={styles.pinter} onClick={onPinterClick} />
              </div>
              <div className={styles.licenseMark}>
                <div className={styles.license}>
                  © 2023 by Powered and secured by Crazyupinc.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {isLoginPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <LoginPopup onClose={closeLoginPopup} />
        </PortalPopup>
      )}
      {isDrawerPopUpOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeDrawerPopUp}
        >
          <DrawerPopUp onClose={closeDrawerPopUp} />
        </PortalDrawer>
      )}
    </>
  );
};

export default CustomerServiceFaq;

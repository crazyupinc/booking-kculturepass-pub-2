import { FunctionComponent, useState, useCallback, useEffect } from "react";
import CommentPopup from "../components/comment-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import DrawerPopUp from "../components/drawer-pop-up";
import PortalDrawer from "../components/portal-drawer";
import styles from "./my-artist-home.module.css";
const MyArtistHome: FunctionComponent = () => {
  const [isCommentPopupOpen, setCommentPopupOpen] = useState(false);
  const [isCommentPopup1Open, setCommentPopup1Open] = useState(false);
  const navigate = useNavigate();
  const [isDrawerPopUpOpen, setDrawerPopUpOpen] = useState(false);

  const openCommentPopup = useCallback(() => {
    setCommentPopupOpen(true);
  }, []);

  const closeCommentPopup = useCallback(() => {
    setCommentPopupOpen(false);
  }, []);

  const openCommentPopup1 = useCallback(() => {
    setCommentPopup1Open(true);
  }, []);

  const closeCommentPopup1 = useCallback(() => {
    setCommentPopup1Open(false);
  }, []);

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

  const onEventTextClick = useCallback(() => {
    navigate("/eventconcert");
  }, [navigate]);

  const onCustomerServiceTextClick = useCallback(() => {
    navigate("/customerservicenotice");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/myartist");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/registerprofile");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/cartempty");
  }, [navigate]);

  const openDrawerPopUp = useCallback(() => {
    setDrawerPopUpOpen(true);
  }, []);

  const closeDrawerPopUp = useCallback(() => {
    setDrawerPopUpOpen(false);
  }, []);

  const onVideoClick = useCallback(() => {
    navigate("/myartistvideo");
  }, [navigate]);

  const onDivContainer2Click = useCallback(() => {
    navigate("/myartistmessage");
  }, [navigate]);

  const onMessageClick = useCallback(() => {
    navigate("/myartistmessage");
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
      <div className={styles.myArtistHome}>
        <nav className={styles.naviDiv}>
          <header className={styles.headerNavigation}>
            <div className={styles.logo}>
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
                    <img
                      className={styles.frameIcon}
                      alt=""
                      src="/frame1.svg"
                    />
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
                  <b className={styles.event1} onClick={onEventTextClick}>
                    Event
                  </b>
                </div>
                <b
                  className={styles.customerService}
                  onClick={onCustomerServiceTextClick}
                >
                  Customer service
                </b>
              </a>
              <div className={styles.memberSectionLogin}>
                <button className={styles.icon}>
                  <img className={styles.vectorIcon} alt="" src="/icon1.svg" />
                </button>
                <div className={styles.customerService1}>crazyupinc</div>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
                <div
                  className={styles.memberSectionSubmenu1}
                  data-animate-on-scroll
                >
                  <img className={styles.frameIcon1} alt="" src="/frame2.svg" />
                  <div className={styles.menuList}>
                    <button className={styles.concert} onClick={onButtonClick}>
                      나의 아티스트
                    </button>
                    <button className={styles.concert} onClick={onButton1Click}>
                      나의 프로필
                    </button>
                    <button className={styles.concert} onClick={onButton2Click}>
                      장바구니
                    </button>
                    <button className={styles.concert}>주문내역</button>
                    <div className={styles.div}>로그아웃</div>
                  </div>
                </div>
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
          <div className={styles.div1}>
            <div className={styles.title}>
              <div className={styles.myArtist}>
                <div className={styles.myArtist1}>나의 아티스트</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.artistName}>BLACKPINK</b>
            </div>
          </div>
        </div>
        <div className={styles.menu1}>
          <div className={styles.div2}>
            <div className={styles.div3}>
              <b className={styles.home}>Home</b>
              <b className={styles.video} onClick={onVideoClick}>
                Video
              </b>
            </div>
            <div className={styles.div4} onClick={onDivContainer2Click}>
              <b className={styles.message} onClick={onMessageClick}>
                Message
              </b>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.div5}>
            <div className={styles.writer}>
              <img className={styles.icon1} alt="" src="/icon4@2x.png" />
              <b className={styles.id}>K-Culture pass</b>
              <div className={styles.time}>1시간</div>
            </div>
            <img className={styles.imgIcon} alt="" src="/image-20@2x.png" />
            <div className={styles.div6}>
              <button className={styles.thumbsUp}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector21.svg"
                />
              </button>
              <button
                className={styles.messageCircle}
                onClick={openCommentPopup}
              >
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector311.svg"
                />
              </button>
            </div>
            <div className={styles.comment}>
              <b className={styles.id1}>K-Culture pass</b>
              <b className={styles.text}>
                <span className={styles.textTxt}>
                  {`Jennie is performing at the `}
                  <a
                    className={styles.chanel}
                    href="https://www.instagram.com/explore/tags/chanel/"
                    target="_blank"
                  >
                    <span className={styles.chanel1}>#Chanel</span>
                  </a>{" "}
                  afterparty! She first performed a cover of Fly Me To The Moon
                  by Frank Sinatra, and...
                </span>
              </b>
            </div>
          </div>
          <div className={styles.div5}>
            <div className={styles.writer}>
              <img className={styles.icon1} alt="" src="/icon4@2x.png" />
              <b className={styles.id}>K-Culture pass</b>
              <div className={styles.time1}>1시간</div>
            </div>
            <img className={styles.imgIcon1} alt="" src="/image-23@2x.png" />
            <div className={styles.div6}>
              <button className={styles.thumbsUp}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="/vector21.svg"
                />
              </button>
              <button
                className={styles.messageCircle}
                onClick={openCommentPopup1}
              >
                <img
                  className={styles.vectorIcon2}
                  alt=""
                  src="/vector311.svg"
                />
              </button>
            </div>
            <div className={styles.comment}>
              <b className={styles.id1}>K-Culture pass</b>
              <b className={styles.text}>
                <span className={styles.textTxt}>
                  {`Jennie is performing at the `}
                  <a
                    className={styles.chanel}
                    href="https://www.instagram.com/explore/tags/chanel/"
                    target="_blank"
                  >
                    <span className={styles.chanel1}>#Chanel</span>
                  </a>{" "}
                  afterparty! She first performed a cover of Fly Me To The Moon
                  by Frank Sinatra, and...
                </span>
              </b>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.columns}>
            <div className={styles.columnParent}>
              <div className={styles.column}>
                <div className={styles.logo}>
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
                  <div className={styles.div9}>
                    통신판매업 신고번호 제2023-서울강동-1234호
                  </div>
                  <div className={styles.div9}>
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
      {isCommentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCommentPopup}
        >
          <CommentPopup onClose={closeCommentPopup} />
        </PortalPopup>
      )}
      {isCommentPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCommentPopup1}
        >
          <CommentPopup onClose={closeCommentPopup1} />
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

export default MyArtistHome;

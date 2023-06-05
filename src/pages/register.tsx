import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DrawerPopUp from "../components/drawer-pop-up";
import PortalDrawer from "../components/portal-drawer";
import styles from "./register.module.css";
const Register: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerPopUpOpen, setDrawerPopUpOpen] = useState(false);

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

  const onLandingProfilepageButtonClick = useCallback(() => {
    navigate("/registerprofile");
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
      <div className={styles.register}>
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
                      src="/frame11.svg"
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
                  <img
                    className={styles.frameIcon1}
                    alt=""
                    src="/frame21.svg"
                  />
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
        <div className={styles.contents}>
          <div className={styles.titleSection}>
            <div className={styles.text}>
              <p className={styles.exhibition}>
                <b>{`회원가입이 완료되었습니다! `}</b>
              </p>
              <p className={styles.p1}>
                <span>
                  <span className={styles.span}>프로필</span>
                  <span>을 공유해주세요</span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.cardSection1}>
            <div className={styles.question}>
              <div className={styles.favoriteMusic}>내가 좋아하는 음악은</div>
            </div>
            <div className={styles.div1}>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>Pop</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>Hip-hop</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>Rock</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>{`R&B`}</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>Jazz</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>Classical</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer1}>EDM</div>
              </div>
            </div>
          </div>
          <div className={styles.cardSection1}>
            <div className={styles.question}>
              <div className={styles.favoriteMusic}>나의 취향은</div>
            </div>
            <div className={styles.div2}>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer15}>Movies</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer17}>Reading</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer19}>Travel</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer21}>Cooking</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer23}>Sports</div>
              </div>
              <div className={styles.answer}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer25}>Art</div>
              </div>
            </div>
          </div>
          <div className={styles.cardSection1}>
            <div className={styles.question}>
              <div className={styles.favoriteMusic}>나의 라이프 스타일은</div>
            </div>
            <div className={styles.div3}>
              <div className={styles.div4}>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Health and Fitness</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Fashion and Beauty</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Technology and Gadgets</div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Travel and Adventure</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Travel and Adventure</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer27}>Food and Cuisine</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardSection1}>
            <div className={styles.question}>
              <div className={styles.favoriteMusic}>관심 있는 IT 분야</div>
            </div>
            <div className={styles.div6}>
              <div className={styles.answer38}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer39}>App</div>
              </div>
              <div className={styles.answer38}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer41}>Web</div>
              </div>
              <div className={styles.answer38}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer43}>Data Analysis</div>
              </div>
              <div className={styles.answer38}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer45}>Artificial Intelligence</div>
              </div>
              <div className={styles.answer46}>
                <input className={styles.disc} type="radio" />
                <div className={styles.answer47}>Cybersecurity</div>
              </div>
            </div>
          </div>
          <div className={styles.cardSection1}>
            <div className={styles.question}>
              <div className={styles.favoriteMusic}>
                좋아하는 KPOP 아티스트 (다중선택 가능)
              </div>
            </div>
            <div className={styles.div7}>
              <div className={styles.div4}>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer49}>BTS</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer51}>BLACKPINK</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer39}>EXO</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer55}>TWICE</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer57}>NCT</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer59}>Red Velvet</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer61}>GOT7</div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer63}>Seventeen</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer65}>IU</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer67}>TXT</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer69}>Stray Kids</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer71}>Mamamoo</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer73}>MONSTA X</div>
                </div>
                <div className={styles.answer46}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer17}>(G)I-DLE</div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer77}>ITZY</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer65}>IU</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer67}>TXT</div>
                </div>
                <div className={styles.answer}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer69}>Stray Kids</div>
                </div>
                <div className={styles.answer84}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer71}>Mamamoo</div>
                </div>
                <div className={styles.answer84}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer73}>MONSTA X</div>
                </div>
                <div className={styles.answer84}>
                  <input className={styles.disc} type="radio" />
                  <div className={styles.answer17}>(G)I-DLE</div>
                </div>
              </div>
            </div>
          </div>
          <button
            className={styles.landingProfilepageButton}
            onClick={onLandingProfilepageButtonClick}
          >
            <div className={styles.next}>다음</div>
          </button>
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
                  <div className={styles.div11}>
                    통신판매업 신고번호 제2023-서울강동-1234호
                  </div>
                  <div className={styles.div11}>
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

export default Register;

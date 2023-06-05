import { FunctionComponent, useState, useCallback, useEffect } from "react";
import LoginPopup from "../components/login-popup";
import PortalPopup from "../components/portal-popup";
import { useNavigate } from "react-router-dom";
import DrawerPopUp from "../components/drawer-pop-up";
import PortalDrawer from "../components/portal-drawer";
import styles from "./cart-added.module.css";
const CartAdded: FunctionComponent = () => {
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
      <div className={styles.cartAdded}>
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
              <div className={styles.div1}>
                <div className={styles.cart}>Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.addedProducts}>
            <div className={styles.menu}>
              <div className={styles.menu1}>
                <div className={styles.checkBox}>
                  <input className={styles.square} type="checkbox" />
                </div>
                <div className={styles.selectAll}>전체선택</div>
                <button className={styles.buttonDeleteSelection}>
                  <div className={styles.deleteSelection}>선택 삭제</div>
                </button>
              </div>
            </div>
            <div className={styles.addedProductsList}>
              <input className={styles.square} type="checkbox" />
              <div className={styles.products}>
                <img
                  className={styles.imgIcon}
                  alt=""
                  src="/-20230601--1126-1@2x.png"
                />
                <div className={styles.productsInfo}>
                  <div className={styles.name}>
                    <div className={styles.total}>
                      딜레이 스트리밍 (5/18 오사카 공연)
                    </div>
                    <div className={styles.timeDate}>
                      6월 3일 (토) 오전 10:00 KST
                    </div>
                  </div>
                  <div className={styles.div2}>
                    <input
                      className={styles.quantityInput}
                      type="number"
                      placeholder="1"
                      min={1}
                      max={4}
                    />
                  </div>
                  <div className={styles.div3}>
                    <div className={styles.price}>7,5000원</div>
                  </div>
                </div>
              </div>
              <button className={styles.delete}>
                <button className={styles.xSquare}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector5.svg"
                  />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector6.svg"
                  />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector7.svg"
                  />
                </button>
              </button>
            </div>
          </div>
          <div className={styles.div4}>
            <div className={styles.div5}>
              <div className={styles.paymentMethod}>결제 방법 선택</div>
              <div className={styles.line}>
                <div className={styles.line1} />
              </div>
              <div className={styles.div6}>
                <div className={styles.radioButton}>
                  <img className={styles.discIcon} alt="" src="/disc.svg" />
                </div>
                <div className={styles.creditCardPayment}>카드결제</div>
              </div>
            </div>
          </div>
          <div className={styles.purchaseInfo1}>
            <div className={styles.buyerInfo}>
              <div className={styles.buyerInfo1}>구매자 정보</div>
              <div className={styles.selectAll}>
                한국 발행 카드만 사용 가능합니다. / Korea issued credit or debit
                cards only
              </div>
              <div className={styles.selectAll}>
                <span>{`구매자명 `}</span>
                <span className={styles.cardHoldersName}>
                  Card holder’s name
                </span>
              </div>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="HONG GIL DONG"
              />
              <div className={styles.guideText1}>
                <div className={styles.selectAll}>생년월일 또는 사업자번호</div>
                <div className={styles.birthDate1}>
                  Birth date or Business number
                </div>
              </div>
              <input
                className={styles.inputBox1}
                type="text"
                placeholder="900101"
              />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.total}>카드 정보</div>
              <div className={styles.cardNumber}>
                <span>카드번호</span>
                <span className={styles.cardHoldersName}> Card number</span>
              </div>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="- 제외한 숫자만 입력"
              />
            </div>
          </div>
          <div className={styles.purchaseInfo2}>
            <div className={styles.point}>포인트</div>
            <div className={styles.div7}>
              <div className={styles.div8}>
                <div className={styles.selectAll}>
                  <p className={styles.exhibition}>보유 포인트</p>
                  <p className={styles.yourPoint1}>Your Point</p>
                </div>
                <input
                  className={styles.inputBox1}
                  type="text"
                  placeholder="0"
                />
              </div>
              <div className={styles.div8}>
                <div className={styles.selectAll}>
                  <p className={styles.exhibition}>사용 포인트</p>
                  <p className={styles.yourPoint1}>Use Point</p>
                </div>
                <input
                  className={styles.inputBox1}
                  type="text"
                  placeholder="0"
                />
                <div className={styles.birthDate1}>
                  포인트 사용을 위해 100원 이상 결제가 필요합니다.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.totalPrice}>
            <div className={styles.div10}>
              <div className={styles.div11}>
                <div className={styles.totalPrice1}>
                  <b className={styles.total}>합계</b>
                  <b className={styles.price1}>75,000원</b>
                </div>
                <div className={styles.guideText3}>VAT 포함 금액입니다.</div>
              </div>
              <button className={styles.buttonPayment}>
                <div className={styles.paying}>결제하기</div>
              </button>
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
                  <div className={styles.point}>
                    통신판매업 신고번호 제2023-서울강동-1234호
                  </div>
                  <div className={styles.point}>
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

export default CartAdded;

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/main";
import TermsConditions from "./pages/terms-conditions";
import PersonalInformationPolicy from "./pages/personal-information-policy";
import CustomerServiceInquiry from "./pages/customer-service-inquiry";
import CustomerServiceFaq from "./pages/customer-service-faq";
import CustomerServiceNotice from "./pages/customer-service-notice";
import MyArtistMessage from "./pages/my-artist-message";
import MyArtistVideo from "./pages/my-artist-video";
import MyArtistHome from "./pages/my-artist-home";
import FindPassword from "./pages/find-password";
import MyArtist from "./pages/my-artist";
import Profile from "./pages/profile";
import Register from "./pages/register";
import CartEmpty from "./pages/cart-empty";
import CartAdded from "./pages/cart-added";
import EventDetail from "./pages/event-detail";
import EventExhibitionExperience from "./pages/event-exhibition-experience";
import EventFestival from "./pages/event-festival";
import EventConcert from "./pages/event-concert";
import Intro from "./pages/intro";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/termsconditions":
        title = "";
        metaDescription = "";
        break;
      case "/personalinformationpolicy":
        title = "";
        metaDescription = "";
        break;
      case "/customerserviceinquiry":
        title = "";
        metaDescription = "";
        break;
      case "/customerservicefaq":
        title = "";
        metaDescription = "";
        break;
      case "/customerservicenotice":
        title = "";
        metaDescription = "";
        break;
      case "/myartistmessage":
        title = "";
        metaDescription = "";
        break;
      case "/myartistvideo":
        title = "";
        metaDescription = "";
        break;
      case "/myartisthome":
        title = "";
        metaDescription = "";
        break;
      case "/findpassword":
        title = "";
        metaDescription = "";
        break;
      case "/myartist":
        title = "";
        metaDescription = "";
        break;
      case "/registerprofile":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/cartempty":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/eventdetail":
        title = "";
        metaDescription = "";
        break;
      case "/eventexhibitionexperience":
        title = "";
        metaDescription = "";
        break;
      case "/eventfestival":
        title = "";
        metaDescription = "";
        break;
      case "/eventconcert":
        title = "";
        metaDescription = "";
        break;
      case "/intro":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/termsconditions" element={<TermsConditions />} />
      <Route
        path="/personalinformationpolicy"
        element={<PersonalInformationPolicy />}
      />
      <Route
        path="/customerserviceinquiry"
        element={<CustomerServiceInquiry />}
      />
      <Route path="/customerservicefaq" element={<CustomerServiceFaq />} />
      <Route
        path="/customerservicenotice"
        element={<CustomerServiceNotice />}
      />
      <Route path="/myartistmessage" element={<MyArtistMessage />} />
      <Route path="/myartistvideo" element={<MyArtistVideo />} />
      <Route path="/myartisthome" element={<MyArtistHome />} />
      <Route path="/findpassword" element={<FindPassword />} />
      <Route path="/myartist" element={<MyArtist />} />
      <Route path="/registerprofile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cartempty" element={<CartEmpty />} />
      <Route path="/cart" element={<CartAdded />} />
      <Route path="/eventdetail" element={<EventDetail />} />
      <Route
        path="/eventexhibitionexperience"
        element={<EventExhibitionExperience />}
      />
      <Route path="/eventfestival" element={<EventFestival />} />
      <Route path="/eventconcert" element={<EventConcert />} />
      <Route path="/intro" element={<Intro />} />
    </Routes>
  );
}
export default App;

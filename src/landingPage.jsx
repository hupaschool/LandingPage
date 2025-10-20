import airForce from "./assets/airforcesymbol.svg";
import kanaf from "./assets/kanaf.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingPage = () => {
  let slidesInfo = [
    {
      text: 'לקיחת חלק בגרעין הקמה של יחידה מיוחדת שמעולם לא הייתה בצה"ל, תחת כנף כוחות אוויר מיוחדים.',
      page: "1/9",
    },
    {
      text: 'היחידה אחראית על תגובה מיידית באירועי קיצון ומשתלבת בכוחות המיוחדים של חה"א לצד שלד"ג ו-669. פעילות חשאית מול התראות וכוח התערבות בעת אירועי קיצון וטרור.',
      page: "2/9",
    },
    { text: "השתלבות בתעסוקה מבצעית.", page: "3/9" },
    {
      text: "בעת אירוע אמת - הגעה למקום במסוק או כלי רכב מיוחדים.",
      page: "4/9",
    },
    {
      text: "רכישת מיומנויות ייחודיות במלהך המסלול בעולמות תוכן ייחודיים - צליפה, רחפנים, רפואה, לוחמה בשטח בנוי, מארבים, מרדפים עם מסוקים, איסוף מודיעין מהקרקע ומהאוויר.",
      page: "5/9",
    },
    {
      text: "הכשרה במתכונת ייחודית שמתבססת על קירוב למצב אמת - שטח, אוויר, פעילות מאחור, לוחמה משטח בנוי, איסוף מודיעין, הסתערות, עבודה בגבולות המדינה והבסיסים.",
      page: "6/9",
    },
    {
      text: 'שיתוף פעולה עם כוחות חיצוניים - שב"כ, משטרה, חיל הגנת הגבולות, יחידות נוספות בחיל האוויר.',
      page: "7/9",
    },
    {
      text: "בואי להיות חלק מצוות הקמה של יחידה חדשה עם קסם ייחודי.",
      page: "8/9",
    },
    { text: "חלק מהעיסוקים מסווגים ועל כן לא ניתן להרחיב", page: "9/9" },
  ];
  return (
    <div className="box-content">
      <div className="header">
        <img
          className="logo"
          id="iaf-logo"
          src={airForce}
          alt="Air Force Symbol"
        />
        <img className="logo" id="kanaf-logo" src={kanaf} alt="kanaf symbol" />
      </div>
      <div className="page-content">
        <div className="carousel">
          <button className="swiper-button-next-custom"></button>
          <Swiper
            dir="rtl"
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="slides"
          >
            {slidesInfo.map((slide) => (
              <SwiperSlide>
                <div className="slide" key={slide.id}>
                  <div className="slide-text-box">
                    <div className="slide-text">{slide.text}</div>
                  </div>
                  <div className="bottom-slide">
                    <div className="slide-text slide-number">{slide.page}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev-custom"></button>
        </div>
        <div className="lower-text" dir="rtl">
          <div className="lower-text-content">
            אם את מחפשת לקום כל בוקר לאירוע חדש, <br />
            להפעיל את הראש ולתת מעצמך בכדי <br />
            שההפתעה הבאה של ה-7.10 לא תתממש
          </div>
          <div className="lower-title"> מקומך איתנו.</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

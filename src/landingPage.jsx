import airForce from "./assets/airforcesymbol.svg";
import kanaf from "./assets/kanaf.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LandingPage = () => {
  let slidesInfo = [
    {text: '', page: '', className: 'slide first-slide'},
    {
      text: 'לקיחת חלק בהקמת היחידה המבצעית החדשה של ח"א תחת כנף כוחות אוויר מיוחדים',
      page: "1/8",
      className: "slide"
    },
    {
      text: 'היחידה אחראית על תגובה מיידית לאירועים מורכבים וקיצוניים. פעילות היחידה משתלבת יחד עם יחידות הכנף',
      page: "2/8",
      className: "slide"

    },
    { text: "השתלבות בתעסוקה מבצעית", page: "3/8", className: "slide" },
    {
      text:'מסלול השירות כולל יציאה לפיקוד ולהכשרות מקצועיות נוספות',
      page: "4/8",
      className: "slide"

    },
    {
      text: 'רכישת מיומנויות ייחודיות במהלך המסלול בעולמות תוכן יחודיים - צליפה, רחפנים, רפואה, לוחמה בשטח בנוי, יכולות מוסקות, איסוף מודיעין מהקרקע ומהאוויר',
      page: "5/8",
      className: "slide"

    },
    {
      text: "הכשרה במתכונת ייחודית שמתבססת על קירוב למצב אמת - שטח, אוויר, פעילות מרחוק, לוחמה בשטח בנוי, איסוף מודיעין, הסתערות, עבודה בגבולות המדינה והבסיסים",
      page: "6/8",
      className: "slide"

    },
    {
      text: 'שיתוף פעולה עם כוחות חיצוניים - שב"כ, משטרה, חיל הגנת הגבולות, יחידות נוספות בחיל האוויר',
      page: "7/8",
      className: "slide"

    },
    { text: " חלק מהעיסוקים מסווגים ועל כן לא ניתן להרחיב מעבר", page: "8/8", className: "slide" },
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
        <div className="title"> לוחמת כנף 7</div>

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
                <div className={slide.className}>
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
        <div className="footer">
          <div className="regular-text"> 
            <a href="https://docs.google.com/spreadsheets/d/1yKGOgawlMU2Csy3essWKGx-mwPHDfLVevcyXYXXoDzQ/edit?usp=sharing">להרשמה לחצי</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;

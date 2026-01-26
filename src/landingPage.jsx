import airForce from "./assets/airforcesymbol.svg";
import kanaf from "./assets/kanaf.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const LandingPage = () => {
  const [eng, setEng] = useState(false);

  const slidesInfo = [
    {
      text: "יחידת אופיר",
      additionalText: "כנף 7 - כוחות אוויר מיוחדים",
      page: "",
      className: "slide first-slide",
    },
    {
      text: "",
      additionalText: "הרכב כנף 7",
      page: "",
      className: "slide second-slide",
    },
    {
      text: "היחידה אחראית על תגובה מיידית לאירועים מורכבים וקיצוניים. פעילות היחידה משתלבת יחד עם יחידות הכנף",
      page: "1/7",
      additionalText: "",
      className: "slide",
    },
    { text: "השתלבות בתעסוקה מבצעית", page: "2/7", className: "slide" },
    {
      text: "מסלול השירות כולל יציאה לפיקוד ולהכשרות מקצועיות נוספות",
      additionalText: "",
      page: "3/7",
      className: "slide",
    },
    {
      text: "רכישת מיומנויות ייחודיות במהלך המסלול בעולמות תוכן יחודיים - צליפה, רחפנים, רפואה, לוחמה בשטח בנוי, יכולות מוסקות, איסוף מודיעין מהקרקע ומהאוויר",
      additionalText: "",
      page: "4/7",
      className: "slide",
    },
    {
      text: "הכשרה במתכונת ייחודית שמתבססת על קירוב למצב אמת - שטח, אוויר, פעילות מרחוק, לוחמה בשטח בנוי, איסוף מודיעין, הסתערות, עבודה בגבולות המדינה והבסיסים",
      additionalText: "",
      page: "5/7",
      className: "slide",
    },
    {
      text: 'שיתוף פעולה עם כוחות חיצוניים - שב"כ, משטרה, חיל הגנת הגבולות, יחידות נוספות בחיל האוויר',
      additionalText: "",
      page: "6/7",
      className: "slide",
    },
    {
      text: " חלק מהעיסוקים מסווגים ועל כן לא ניתן להרחיב מעבר",
      additionalText: "",
      page: "7/7",
      className: "slide",
    },
  ];
  const slidesInfoEng = [
    {
      text: "Ofir Unit",
      additionalText: "7th Wing- Special Air Forces",
      page: "",
      className: "slide first-slide",
    },
    {
      text: "",
      additionalText: "7th Wing Units",
      page: "",
      className: "slide second-slide",
    },
    {
      text: "The unit is responisble for providing an immediate response to complex and extreme incidents. The unit's operations are carried out in coordination with the wing's units.",
      page: "1/7",
      additionalText: "",
      className: "slide",
    },
    {
      text: "Integration into operational service",
      page: "2/7",
      className: "slide",
    },
    {
      text: "The service track includes deployment to command and officer roles, as well as additional professional training",
      additionalText: "",
      page: "3/7",
      className: "slide",
    },
    {
      text: "Acquirement of unique skills in various fields - sniping, drones, medicine, urban warfare, air and ground intelligence gathering",
      additionalText: "",
      page: "4/7",
      className: "slide",
    },
    {
      text: "Training in a unique curriculum based on approximation to real situations - ground, air, remote activity, urban warfare, intelligence gathering, reconnaissance, work at the country's borders and bases",
      additionalText: "",
      page: "5/7",
      className: "slide",
    },
    {
      text: "Working in a collaboration with external forces - GSS, police, border defense corps, additional air force units",
      additionalText: "",
      page: "6/7",
      className: "slide",
    },
    {
      text: " Part of the positions are classified and therefore cannot be expanded further",
      additionalText: "",
      page: "7/7",
      className: "slide",
    },
  ];

  const slides = eng ? slidesInfoEng : slidesInfo;

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
        <div className="title">{eng ? "7th Wing Combat Soldier": "לוחמת כנף 7"}</div>
        <div className="language-switch">
          <select
            value={eng ? "english" : "hebrew"}
            onChange={(e) => setEng(e.target.value === "english")}
          >
            <option value="hebrew">עברית</option>
            <option value="english">English</option>
          </select>
        </div>
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
            {slides.map((slide, index) => (
              <SwiperSlide>
                <div className={`slide ${eng && index === 1? "second-slide-eng":slide.className} ${eng && index !== 1 ? "english-slide": ""}`} >
                  <div className="slide-text-box">
                    <div className={`${eng ? "english-slide-add" :"slide-additional-text"}`}>
                      {slide.additionalText}
                    </div>
                    <div
                      className={`${eng && index=== 0 ? "slide-text--big": index === 0 ? "slide-text--big" : eng ? "english-slide-text" : "slide-text"} `}
                    >
                      {slide.text}
                    </div>
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
            {/* <a href="https://docs.google.com/spreadsheets/d/1yKGOgawlMU2Csy3essWKGx-mwPHDfLVevcyXYXXoDzQ/edit?usp=sharing">להרשמה לחצו כאן</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

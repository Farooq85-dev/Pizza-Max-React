import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Days_Banner1 from "../Assets/Images/discount-banner.png";
import Days_Banner2 from "../Assets/Images/launch-deal-banner.jpg";
import Days_Banner3 from "../Assets/Images/midnight-deals-banner.jpg";

const SliderComp = () => {
  return (
    <Swiper
      className="mt-20"
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation
      speed={1200}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        <img src={Days_Banner1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Days_Banner2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Days_Banner3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderComp;

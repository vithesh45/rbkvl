import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TopBanner() {
  const bannerImages = [
    "/images/temple.jpeg", 
    "/images/temple-2.jpg",
    
    
  ];

  return (
    <section className="top-banner">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true} // This makes it infinite
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="banner-slide-wrapper">
              <img src={src} alt={`Banner ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
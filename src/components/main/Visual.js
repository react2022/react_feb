import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Visual(){ 
  return (
    <figure className='myScroll'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={'auto'}   
        loop  
        navigation 
        pagination={{clickable:true}}
      >
        <SwiperSlide><video src={process.env.PUBLIC_URL+'/img/vid1.mp4'} loop autoplay muted></video></SwiperSlide>
        <SwiperSlide><video src={process.env.PUBLIC_URL+'/img/vid2.mp4'} loop autoplay muted></video></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>   
      </Swiper>
    </figure>
  )
}
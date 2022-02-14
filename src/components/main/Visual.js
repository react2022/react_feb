import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Visual(){ 
  return (
    <figure className='myScroll'>
      <Swiper
        spaceBetween={0}
        slidesPerView={'auto'}   
        loop   
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>   
      </Swiper>
    </figure>
  )
}
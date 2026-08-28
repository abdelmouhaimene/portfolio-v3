'use client'
import React from 'react'
import TestimonialsCard from './TestimonialsCard'
import { testimonialData } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional navigation module styles
import 'swiper/css/pagination'; // Optional pagination module styles
import { Pagination, Autoplay } from 'swiper/modules';
const TestimonialsCaroussel = () => {
  return (
    <Swiper
      modules={[ Pagination,Autoplay]}
      spaceBetween={45}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{draggable: true}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop
      className='md:mt-10 mt-6 px-6! py-10!'
      style={{'--swiper-pagination-color' : '#d605a4'} as React.CSSProperties }
      breakpoints={{
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
        },
      }}
    >
        {testimonialData.map((testimonial,index) => (
            <SwiperSlide key={index}>
                <TestimonialsCard testimonial={testimonial}  />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default TestimonialsCaroussel
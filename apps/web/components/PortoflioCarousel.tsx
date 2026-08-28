import React from 'react'
import { PortfolioCategoryType } from '../dataTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Optional navigation module styles
import 'swiper/css/pagination'; // Optional pagination module styles
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import PortfolioCard from './PortfolioCard';

const PortoflioCarousel = ({selectedTab} : {selectedTab : PortfolioCategoryType}) => {


  return (
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{draggable: true}}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        className='md:mt-10 mt-6 p-10!'
        style={
          {
          '--swiper-pagination-color' : '#d605a4',
          '--swiper-navigation-color' : '#d605a4'
          } as React.CSSProperties
        }
        breakpoints={{
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // When window width is >= 768px
          768: {
            slidesPerView: 3,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {selectedTab.projects.map((project,index) => (
          <SwiperSlide key={index} >
            <PortfolioCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default PortoflioCarousel
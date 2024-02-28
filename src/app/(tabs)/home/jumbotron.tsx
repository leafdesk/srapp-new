'use client'

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore from 'swiper' // ?
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css' // 필수 CSS. 없으면 스와이퍼 깨짐.
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import SundaySermon from '@/components/home/SundaySermon'

/**
 * 어플 메인 배너.
 */
export default function Jumbotron() {
  const [height, setHeight] = useState<number | null>(null) // 점보트론 높이 설정.

  useEffect(() => {
    setHeight(() => window.innerWidth * 1.333325)
    initBulletStyle()
  }, [])

  // 스와이퍼 불렛 스타일 초기화.
  function initBulletStyle() {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet')

    bullets.forEach((bullet) => {
      const bulletElement = bullet as HTMLElement
      bulletElement.style.backgroundColor = 'white'
      bulletElement.style.opacity = '0.7'
      bulletElement.style.width = '8px'
      bulletElement.style.transition = 'all 0.3s ease'
    })

    const activeBullet = document.querySelector(
      '.swiper-pagination-bullet-active',
    ) as HTMLElement | null

    if (activeBullet) {
      activeBullet.style.backgroundColor = 'white'
      activeBullet.style.opacity = '1'
      activeBullet.style.width = '20px'
      activeBullet.style.borderRadius = '10px'
    }
  }

  // SwiperCore.use([
  //   Autoplay, // 스와이퍼 자동 넘김 설정.
  // ])

  return (
    <Swiper
      className="w-screen"
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true} // 슬라이드가 1개인 경우 false. 2개 이상은 true.
      onSlideChange={initBulletStyle}
      autoplay={{
        delay: 5000, // 5초(delay: 5000)마다 자동으로 슬라이드 넘김.
        disableOnInteraction: false,
      }}
    >
      {/* 고난주간 배너 */}
      <SwiperSlide key={2}>
        <img
          className="w-full bg-no-repeat bg-cover bg-center"
          src="images/banner_15.jpg"
          alt="고난주간 배너"
        />
      </SwiperSlide>

      {/* 부활절 배너 */}
      <SwiperSlide key={3}>
        <img
          className="w-full bg-no-repeat bg-cover bg-center"
          src="images/banner_16.jpg"
          alt="부활절 배너"
        />
      </SwiperSlide>

      {/* 메인 배너 */}
      <SwiperSlide key={1}>
        <img
          className="w-full bg-no-repeat bg-cover bg-center"
          src="images/banner_9.jpeg"
          alt="메인 배너"
        />
      </SwiperSlide>

      {/* 주일 설교 */}
      <SwiperSlide key={5} className={`h-[${height}px]`}>
        {/* <SundaySermon /> */}
      </SwiperSlide>

      {/* 무화과 카페 */}
      <SwiperSlide key={4}>
        <img
          className="w-full bg-no-repeat bg-cover bg-center"
          src="images/banner_7.jpg"
          alt="무화과 카페"
        />
      </SwiperSlide>
    </Swiper>
  )
}

'use client'

import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper/modules';

const reviewData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richard Thompson',
    job: 'Chef',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Interior Designer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'John Doe',
    job: 'Game Dev',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Therapist',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mason Wilson',
    job: 'Video Editor',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium illum voluptatem vel cum! Omnis minima atque soluta architecto iusto saepe.'
  },
]

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper slidesPerView={1} breakpoints={{
          640: { slidesPerView: 2 },
          1400: { slidesPerView: 3 },

        }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]">
          {reviewData.map((client, index) => {

            const { avatar, name, job, review } = client;

            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image src={avatar} width={70} height={70} alt="" priority />
                      {/* Name */}
                      <div className="flex flex-col">
                        <CardTitle>{name}</CardTitle>
                        <p>{job}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardDescription className='text-lg text-muted-foreground'>{review}</CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews;
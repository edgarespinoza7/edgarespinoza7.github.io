'use client';
import Link from "next/link";
import { Button } from "./ui/button";

// Import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

// Import required modules
import { Pagination } from 'swiper/modules';

// Components
import ProjectCard from '@/components/ProjectCard';


const ProjectData = [
  {
    image: '/work/landing-page.png',
    category: 'next js',
    name: 'NextG',
    description: 'A fully responsive landing page built with Next.js 14, Tailwind, and shadcn/ui.',
    link: 'https://startup-landing-page-six.vercel.app/',
    github: 'https://github.com/edgarespinoza7/startup-landing-page',
  },
  {
    image: '/work/portfolio-website.png',
    category: 'next js',
    name: 'Portfolio Website',
    description: 'A fully responsive portfolio website built with Next.js 14, Tailwind, and Framer Motion.',
    link: 'https://www.edgarespinoza.com/',
    github: 'https://github.com/edgarespinoza7/edgarespinoza7.github.io',
  },
  {
    image: '/work/country-search-app-light.png',
    category: 'next js',
    name: 'Country Search App',
    description: 'A REST API-powered web app built with Next.js 14 that allows users to search and filter results.',
    link: '/',
    github: 'https://github.com/edgarespinoza7/country-search-app',
  },
  {
    image: '/work/fun-fact-calculator.png',
    category: 'react',
    name: 'Fun-facts Calculator',
    description: 'An API-powered calculator that enables users to discover interesting facts about numbers.',
    link: '/',
    github: 'https://github.com/edgarespinoza7/fun-react-calculator',
  },
  // {
  //   image: '/work/1.png',
  //   category: 'next js',
  //   name: 'Evolve Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/3.png',
  //   category: 'next js',
  //   name: 'Ignite Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/4.png',
  //   category: 'next js',
  //   name: 'Envision Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/1.png',
  //   category: 'fullstack',
  //   name: 'Serenity Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/3.png',
  //   category: 'fullstack',
  //   name: 'Nova Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
  // {
  //   image: '/work/2.png',
  //   category: 'fullstack',
  //   name: 'Zenith Website',
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //   link: '/',
  //   github: '/',
  // },
];


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* Text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Here's a sample of my work, both professional and personal</p>
          <Link href='/projects'>
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{
            640: {
              slidesPerView: 2
            }
          }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
            {/* Show only the first 4 projects for the slides */}
            {ProjectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work;
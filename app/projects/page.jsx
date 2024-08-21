'use client';

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const ProjectData = [
  {
    image: '/work/iphone-website.png',
    category: 'react',
    name: 'iPhone 15 Pro website',
    description: "A clone of Apple's iPhone 15 Pro website built with React, Tailwind, GSAP, and Three.js.",
    link: 'https://iphone-website-seven.vercel.app/',
    github: 'https://github.com/edgarespinoza7/iphone-website',
  },
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
    description: 'A REST API-powered web app built with Next.js 14.',
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

// Remove caregory duplicates
const uniqueCategories = ['all projects', ...new Set(ProjectData.map(item => item.category))];

const Projects = () => {

  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = ProjectData.filter(project => {
    // If category is 'all projects' return all projects, else filter by category
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* Tabs Content */}
          <div
            className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index} className="relative">
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
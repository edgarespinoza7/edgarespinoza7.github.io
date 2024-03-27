import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  MailIcon,
  PhoneCall,
  GraduationCap,
  MapPin,
  Briefcase,
  User2,
  BadgeCheck,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Edgar Espinoza',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+34 613 52 3930',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'edgarespinoza7@gmail.com',
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.S. in Business Administration Management",
  },
  {
    icon: <MapPin size={20} />,
    text: 'Valencia, Spain',
  },
  {
    icon: <BadgeCheck size={20} />,
    text: 'Eligible to work in the EU',
  },
  

];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Udemy',
        qualification: 'The Complete 2024 Web Development Bootcamp',
        years: '2024',
      },
      {
        university: 'Google',
        qualification: 'Foundations of UX Design',
        years: '2019 - 2021',
      },
      {
        university: 'freeCodeCamp',
        qualification: 'Responsive Web Design Certification',
        years: '2020',
      },
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Freelance',
        role: 'Web Developer',
        years: '2021 - Present',
      },
      {
        company: 'Freelance',
        role: 'Content Manager',
        years: '2019 - 2021',
      },
      {
        company: 'RIA Novosti',
        role: 'Copyeditor',
        years: '2015 - 2019',
      },

    ]
  }

];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'UX/UI Design Systems',
      },
      {
        name: 'JavaScript / TypeScript',
      },
        {
        name: 'Node.js',
      },
      {
        name: 'React',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Tailwind',
      },
      {
        name: 'NPM',
      },
      {
        name: 'Git',
      },
      {
        name: 'REST APIs',
      },
    ]

  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/google-chrome-logo.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/github-mark.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
    ],
  },
];

const About = () => {

  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto mb-12">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" imgSrc="/about/developer-2.png" />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:auto" value="personal">Personal Info</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:auto" value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger className="w-[162px] xl:auto" value="skills">Skills</TabsTrigger>
              </TabsList>

              {/* Tabs Content */}

              <div className="text-lg mt-12 xl:mt-8 xl:text-left">

                {/* Personal Info */}
                
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Endless Curiosity <span className="font-bold text-primary px-2">+</span> Problem-Solving Mindset</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I'm a self-taught Front-end Developer passionate about creating web experiences that seamlessly integrate <span className="text-primary font-bold dark:text-white">Design, Technology, and Business Acumen</span>. Every line of code I write serves a greater purpose, resulting in digital products that delight users while fulfilling business goals.</p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      })}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Languages</div>
                      <div className="border-b border-border"></div>
                      <div>Spanish, English & Russian. </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8">My <span className="line-through decoration-primary/50 decoration-8 decoration-solid">Atypical</span> Journey</h3>
                    {/* Experience and Education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>

                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Things I Know</h3>
                    {/* Skills */}
                    <div className="mb-10">
                      {/* <h4 className="text-xl font-semibold mb-2">Technologies</h4> */}
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill List */}
                      <div>
                        {getData(skillData, 'skills').data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="text-lg text-muted-foreground mb-1">{name}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                    <h3 className="h3 mb-4">Tools I Use</h3>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tool List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={42} height={42} alt="" priority />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
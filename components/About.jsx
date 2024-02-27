// import DevImg from "./Devimg";
// import Image from "next/image";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
    user2,
    MailIcon,
    HomeIcon,
    PhoneCall,
    GraduationCap,
    Calendar,
    Briefcase,
    User2,
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Edgar Espinoza',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+34 631 37 6567',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'youremail@email.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 30 Sep, 1982',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Master on Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '321 Blue Avenue, NY, USA',
    },

];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor of Science',
                years: '2015 - 2018',
            },
            {
                university: 'Another University',
                qualification: 'Master of Arts',
                years: '2019 - 2021',
            },
            {
                university: 'Yet Another University',
                qualification: 'Ph.D in Computer Science',
                years: '2021 - 2025',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc.',
                role: 'Software Engineer',
                years: '2018 - 2020',
            },
            {
                company: 'XYZ Corporation',
                role: 'Senior Developer',
                years: '2020 - 2022',
            },
            {
                company: 'Tech Innovators',
                role: 'Lead Developer',
                years: '2022 - Present',
            },

        ]
    }

];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'JavaScript, PHP',
            },
            {
                name: 'Back-end Development',
            }
        ]

    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
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
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                
            </div>
        </section>
    )
}

export default About;
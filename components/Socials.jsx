'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

// Icons

const icons = [
  // {
  //   path: '/',
  //   name: <RiYoutubeFill />,
  // },
  {
    path: 'https://www.linkedin.com/in/edgarespinozahuizzi/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/edgarespinoza7',
    name: <RiGithubFill />,
  },
  // {
  //   path: '/',
  //   name: <RiFacebookFill />,
  // },
  // {
  //   path: '/',
  //   name: <RiInstagramFill />,
  // },

]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
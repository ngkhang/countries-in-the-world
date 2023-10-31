import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaSistrix,
  FaHouse,
  FaInfo,
} from 'react-icons/fa6';
import { IoEarth } from 'react-icons/io5';

interface KeyofVal {
  [key: PropertyKey]: (className?: string) => React.ReactElement;
}

const Icons: KeyofVal = {
  Earth: (className) => <IoEarth className={className} />,
  Home: (className) => <FaHouse className={className} />,
  About: (className) => <FaInfo className={className} />,
  Search: (className) => <FaSistrix className={className} />,
  Github: (className) => <FaGithub className={className} />,
  Linkedin: (className) => <FaLinkedinIn className={className} />,
};

export default Icons;

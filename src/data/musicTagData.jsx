import {
  FaDrum,
  FaDrumSteelpan,
  FaDrumstickBite,
  FaGlobe,
  FaGuitar,
  FaJedi,
  FaMicrochip,
  FaMicrophone,
  FaMix,
  FaMusic
} from "react-icons/fa";

import {MdKeyboard} from 'react-icons/md'
const musicTagData = [
  {
    id: 1,
    genere: "pop",
    icon: <FaMusic />
  },
  {
    id: 2,
    genere: "blues",
    icon: <FaDrum />
  },
  {
    id: 3,
    genere: "rap",
    icon: <FaDrumSteelpan />
  },
  {
    id: 4,
    genere: "country",
    icon: <FaGuitar />
  },
  {
    id: 5,
    genere: "jazz",
    icon: <FaDrumstickBite />
  },
  {
    id: 6,
    genere: "reggae",
    icon: <FaMix />
  },
  {
    id: 7,
    genere: "classic",
    icon: <FaMicrophone />
  },
  {
    id: 8,
    genere: "r&b",
    icon: <FaGlobe />
  },
  {
    id: 9,
    genere: "rock",
    icon: <FaMicrochip />
  },
  {
    id: 10,
    genere: "piano",
    icon: <FaJedi />
  },
  {
    id: 11,
    genere: "instrumental",
    icon: <MdKeyboard />
  }
];
export default musicTagData;

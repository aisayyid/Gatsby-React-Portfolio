import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Alex Isayyid',
  subtitle: 'A Jr. Web Developer and Musician',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpg',
  paragraphOne:
    'A junior web developer with the heart of an inherent creative and musician. With acquired skills such as JavaScript, React, Express, MongoDB, and Node.js, a certificate in Full-Stack Web Development from the University of Central Florida, and a lifelong study of music, I will continue bringing my out of the box thinking, adaptiveness, and intense passion for artistry to develop practical web applications that inspire its users.',
  paragraphTwo:
    'From producing albums, composing film and game soundtracks, to creating web applications , I am driven through the vision for the complete product. I have experienced projects from its inception to completion as both a leader, collaborator, and contributor. The critical qualities I carried from those moments are clear and benevolent communication, focus, perseverance, and leading by example.',
  paragraphThree:
    'I will carry these qualities into the artistry of web development, always striving to be an essential and pleasant team member, with the intrinsic goal of creation. ',
  resume:
    'https://docs.google.com/document/d/1EXyNMKWoSZ1n3Ml2sLQ0bkQ2Fwz8Kw66sWwZCkbg4iM/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dvsearchwithimages.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ggtogether.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NightLife_Screenshot.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

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
    title: 'Design Vision',
    info:
      'Design Vision aims to creatively solve the shortcomings that can come with an unorganized art assets database and making it artist friendly through the use of image recognition technology instead of a keyword based search.',
    info2:
      'MERN Project, Javascript, Google’s Vision AI, Amazon S3, Multer, Bootstrap,  NPM Packages.',
    url: 'https://designvision.herokuapp.com/',
    repo: 'https://github.com/aisayyid/Design_Vision', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ggtogether.png',
    title: 'GitGud Together',
    info:
      'An app with the goal of uniting gamers who need a group of people with common interests and games played.  Browse user profiles and get good together.',
    info2:
      'MySql, Express, Node.js, Handlebars.js, JavaScript, jQuery, Passport, Bootstrap, HTML/CSS.',
    url: 'https://gitgudtogether.herokuapp.com/',
    repo: 'https://github.com/aisayyid/GitGud-Together', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'NightLife_Screenshot.jpg',
    title: 'NightLife',
    info:
      'Nightlife presents its users with the opportunity to plan their night with the convenience of having all they can do on one application instead of  multitude of searches',
    info2: 'Zurb Foundation Framework, jQuery, AJAX, HTML, CSS.',
    url: 'https://boaardz56.github.io/Nightlife/',
    repo: 'https://github.com/aisayyid/Nightlife', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'alexisayyid@gmail.com | 407-690-3366',
  btn: 'Reach Out',
  email: 'alexisayyid@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alex-isayyid/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aisayyid',
    },
  ],
  img: 'techlogos.png',
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

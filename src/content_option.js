import logo from "./pages/portfolio/weatherapp.png";
import bmi from "./pages/portfolio/bmi1.png";
import newsapp from "./pages/portfolio/newsapp.png";
import musicplayer from './pages/portfolio/musicplayer.png';
const logotext = "MIHIR";
const meta = {
  title: "Mihir Bangia",
  description:
    "I’m Mihir Bangia Full stack Web Devloper,currently working in Ahmedabad",
};

const introdata = {
  title: "I’m Mihir Bangia",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    // third: "I develop mobile apps",
  },
  description:
    "Hey..I'm Mihir Bangia, a Full Stack Web Developer who is passionate for coding and converting my creative ideas into programming..",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "a bit about my self",
  aboutme:
    "Hey, I'm Mihir Bangia. I am a Full Stack Web Developer.Passionate about Coding and I'm always curious to learn more about new technologies and creative coding.",
};
// const worktimeline = [{
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
//     },
// ];

const skills = [
  {
    name: "Magento",
    value: 75,
  },
  {
    name: "Javascript",
    value: 85,
  },
  {
    name: "React Js",
    value: 85,
  },
  {
    name: "Node Js",
    value: 75,
  },
];

const services = [
  {
    title: "eCommerce Websites",
    description:
      "",
  },
  {
    title: "Progressive Web Apps",
    description:
      "",
  },
  {
    title:"Customised Websites"
  },
];

const dataportfolio = [
  {
    img: logo,
    description: "Weather Forecasting website using Node",
    link: "https://myweatherapp.mihirbangia.repl.co/",
  },
  {
    img: bmi,
    description: "A Body Mass Index Calculator Made with reactjs",
    link: "https://mihirbmicalculator.vercel.app/",
  },
  {
    img: newsapp,
    description: "A Simple News app made with reactjs",
    link: "https://newsapp-alpha-liard.vercel.app/",
  },
  {
    img: musicplayer,
    description:
      "Music Player Created with React and Node JS",
    link: "https://musicplayer-wheat.vercel.app/",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },

  {
    img: "https://picsum.photos/400/600/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/550/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/700/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
];

const contactConfig = {
  YOUR_EMAIL: "mihirbangia30@gmail.com",
  YOUR_FONE: "+91 7567116583",
  description:
    "",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_2324pfy",
  YOUR_TEMPLATE_ID: "template_pu6wzkc",
  YOUR_USER_ID: "CshuwrPAPQ6U6g__v",
};

const socialprofils = {
  github: "https://github.com/MihirBangia",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/mihir-bangia-a948b9186/",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  // worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};

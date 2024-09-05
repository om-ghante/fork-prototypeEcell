import { desktop, growth, innovation } from "./Icons";
import { Londrina_Outline } from "next/font/google";

const bungee = Londrina_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

interface IService {
  title: string;
  icon: any;
  description: string;
  bulletPoints: string[];
}

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About us",
    url: "#",
  },
  {
    name: "Galery",
    url: "#",
  },
  {
    name: "FAQs",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];

export const services: IService[] = [
  {
    title: "Learn",
    icon: growth,
    description:
      "Develop a robust digital strategy that aligns with your business goals. Our expert consultants will guide you through the process, ensuring your brand stays ahead in the digital landscape.",
    bulletPoints: [
      "Through our Programmes like E-Mentorship and Learn Together",
      "we teach the students about all aspects of entrepreneurial journey!",
    ],
  },
  {
    title: "Build",
    icon: desktop,
    description:
      "Create a seamless user experience with our expert UX/UI design and web development services. We craft visually stunning and highly functional websites that engage users and drive conversions.",
    bulletPoints: [
      "Build With Us: Collaborate with experts to craft tomorrow’s solutions.",
      "Startup 101: Learn the essentials to launch and grow your startup.",
    ],
  },
  {
    title: "Scale",
    icon: innovation,
    description:
      "Transform your ideas into market-ready products. Our team specializes in creating innovative solutions that drive growth and give you a competitive edge.",
    bulletPoints: [
      "Network with alumni founders and join our incubators to accelerate your startup",
      "Pitch your ideas directly to Angel Investors and VCs for funding opportunities.",
    ],
  },
];

export const aboutStats = [
  {
    title: "STARTUPS",
    count: 50,
    ff: bungee.className,
  },
  {
    title: "INVESTORS",
    count: 150,
  },
  {
    title: "MENTORS",
    count: 90,
    ff: bungee.className,
  },
  {
    title: "SPEAKERS",
    count: 60,
  },
];

export const baseText = [
  {
    text: "Nutanix",
  },
  { text: "Google", outline: bungee.className },
  { text: "Microsoft" },
  { text: "Amazon", outline: bungee.className },
];

export const awards = [
  {
    date: "January 2024",
    companyLogo: "/images/logos/logo--behance.png",
    category: "Best UX",
    link: "https://www.behance.net/",
  },
  {
    date: "June 2021",
    companyLogo: "/images/logos/logo--awwwards.png",
    category: "Site of the Day",
    link: "https://www.awwwards.com/",
  },
  {
    date: "March 2022",
    companyLogo: "/images/logos/logo--dribble.png",
    category: "Best Design",
    link: "https://dribbble.com/",
  },
  {
    date: "June 2021",
    companyLogo: "/images/logos/logo--awwwards.png",
    category: "Site of the Day",
    link: "https://www.awwwards.com/",
  },
];

export const faqs = [
  {
    question: "What is the E-Cell",
    answer:
      "The E-Cell is a platform that supports students in developing entrepreneurial skills and launching startups.",
  },
  {
    question: "Who can join the E-Cell?",
    answer:
      "Any student with an interest in entrepreneurship can join, regardless of their background.",
  },
  {
    question: "What benefits do members receive?",
    answer:
      "Members get access to workshops, mentorship, networking events, and potential funding for their startups.",
  },
  {
    question: "Can I get mentorship for my startup idea",
    answer:
      "Absolutely! We provide mentorship from experienced entrepreneurs and industry experts.",
  },
  {
    question: "Does the E-Cell provide startup funding?",
    answer:
      "Yes, we offer seed funding and connect members with potential investors.",
  },
  {
    question: "How do I join the E-Cell?",
    answer:
      "You can contact us through our website or attending one of our introductory events.",
  },
];

export const footerNavLinks = [
  {
    title: "About Us",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About us",
        url: "#",
      },
      {
        name: "Galery",
        url: "#",
      },
      {
        name: "FAQs",
        url: "#",
      },
      {
        name: "",
        url: "#",
      },
      {
        name: "Contact",
        url: "#",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        name: "Mentor Network",
        url: "/Network",
      },
      {
        name: "Startup Bootcamps",
        url: "/Startup Bootcamps",
      },
      {
        name: "Incubation Support",
        url: "/Incubation Support",
      },
      {
        name: "Pitching Events",
        url: "/Pitching Events",
      },
      {
        name: "Alumni Network",
        url: "/Alumni Network",
      },
    ],
  },
  {
    title: "Contact Info",
    links: [
      {
        name: "aadilinamdar27@gmail.com",
        email: "aadilinamdar27@gmail.com",
      },
      {
        name: "+919011156314",
        phone: "+91 9011156314",
      },
      {
        name: "Kolhapur Maharashtra india ",
        address: "123, Street Name, City, Country",
      },
    ],
  },
];

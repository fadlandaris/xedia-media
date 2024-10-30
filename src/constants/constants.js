import { IoIosArrowRoundForward } from "react-icons/io";
import { BsPhone, BsPerson } from "react-icons/bs";
import { BiHome, BiCollection, } from "react-icons/bi";
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";

import { p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, port_img1, port_img2, port_img3, port_img4, port_img5, port_img6, port_img7, port_img8, port_img9, port_img10, port_img11, port_img12, port_img13, port_img14, port_img15, port_img16, port_img17, port_img18, port_img19, port_img20, port_img21, port_img22, port_img23, port_img24, port_img25, port_img26, port_img27, port_img28, port_img29 } from "../assets/assets";


export const navLinks = [
  {
    id: '2',
    link: 'home',
    nav: "Home",
    icon: BiHome
  },
  {
    id: '3',
    link: 'collection',
    nav: "Collection",
    icon: BiCollection
  },
  {
    id: '4',
    link: 'about-us',
    nav: "About",
    icon: BsPerson
  },
  {
    id: '5',
    link: 'contact',
    nav: "Contact",
    icon: BsPhone
  },
]

export const heroData = [
  {
    id: "1",
    header: [
      {
        rating: "4.8/5.0",
        title: "Make Your Content",
        subTitle:"Feels Alive ",
        thirdTitle: "With Us",
        desc: "We create and design applications, website, or other digital product with professionalism",
        button: "Get Started",
        icon: IoIosArrowRoundForward,
        service: [
          {serv: "Company Profile Creation"},
          {serv: "Digital Advertising "},
          {serv: "Logo Design Service"},
          {serv: "Social Media Management"},
          {serv: "Website Development"},
          {serv: "Instagram Feeds Design"},
          {serv: "Video Production"},
        ]
      },
    ],
  },
  {
    id: '2',
    projectData: [
      { data: '50K+ ', desc: "Clients",},
      { data: '13+', desc: "Experience"},
      { data: '20+ ', desc: "Designer"},
      { data: '10K+ ', desc: "Product"}
    ]
  },
]

export const aboutData = [
  {
    id: '1',
    header: "About Us",
    title: "🦁We are a Local leader in Creative Solutions and Design Services",
    subTitle: "Committed to delivering innovative and impactful solutions across the creative landscape"
  },
  {
    id: '2',
    statsData: [
      {title: 'Completion Rate', data: '99%', desc: "On-time project Delivery accross various global market"},
      {title: 'Client Statisfication', data: '95%', desc: "Driven by our commitment to quality and innovation"},
      {title: 'Cost Efficiency', data: '20%', desc: "Cost saving for clients through optimized engineering processes"},
    ]
  },
]

export const servicesData = [
  {
    id: '1',
    header: "Services",
    title: "💻We provide end-to-end EPC services that",
    subTitle: "ensure the success of your project"
  },
  {
    id: '2',
    serviceData: [
      {
        title: 'Company Profile Creation',
        content: [
          {
            desc: "We develop in-depth company profiles that showcase your brand’s core values, mission, and vision in a way that captivates and builds lasting credibility among audiences",
            img: p_img1,
            point: ['Brand Storytelling', 'Mission Articulation', 'Audience Connection']
          }
        ]
      }
    ]
  },
  {
    id: '3',
    serviceData: [
      {
        title: 'Digital Advertising',
        content: [
          {
            desc: "Our digital advertising strategies enhance your brand’s online presence by reaching target audiences effectively, delivering impactful ad campaigns with measurable results",
            img: p_img2,
            point: ['Targeted Outreach', 'Campaign Optimization', 'Performance Tracking']
          }
        ]
      }
    ]
  },
  {
    id: '4',
    serviceData: [
      {
        title: 'Logo Design',
        content: [
          {
            desc: "We create distinctive, memorable logos that reflect your brand’s essence, ensuring a strong visual presence that resonates with audiences and builds brand recognition",
            img: p_img3,
            point: ['Brand Identity', 'Creative Concepts', 'Visual Impact']
          }
        ]
      }
    ]
  },
  {
    id: '5',
    serviceData: [
      {
        title: 'Social Media Management',
        content: [
          {
            desc: "Our team manages your social media, fostering audience engagement and growth through customized content, consistent interaction, and insightful analytics reporting",
            img: p_img4,
            point: ['Content Strategy', 'Engagement Boosting', 'Analytics Insights']
          }
        ]
      }
    ]
  },
  {
    id: '6',
    serviceData: [
      {
        title: 'Website Development',
        content: [
          {
            desc: "We design and build SEO-optimized, user-friendly websites that enhance client experiences and seamlessly convert visitors into loyal customers through effective functionality",
            img: p_img5,
            point: ['Responsive Design', 'SEO Integration', 'User-Centric Features']
          }
        ]
      }
    ]
  },
  {
    id: '7',
    serviceData: [
      {
        title: 'Instagram Feeds Design',
        content: [
          {
            desc: "Our Instagram feed design service helps create visually appealing and cohesive profiles that reflect your brand identity, drawing in and engaging new followers effectively",
            img: p_img6,
            point: ['Aesthetic Consistency', 'Brand Voice', 'Follower Engagement']
          }
        ]
      }
    ]
  },
  {
    id: '8',
    serviceData: [
      {
        title: 'Video Production',
        content: [
          {
            desc: "We produce high-quality, engaging videos that effectively convey your brand’s story and message, creating a lasting impact and deepening connections with your audience",
            img: p_img7,
            point: ['Concept Development', 'Professional Filming', 'Impactful Editing']
          }
        ]
      }
    ]
  }
];

export const clientsData = [
  {
    id: '1',
    header: "Clients",
    title: "🚚We known in delivering exceptional creative and design services",
    subTitle: "Our focus is on creating impactful solutions that drive success"
  },
  {
    id: '2',
    statsData: [
      {name: 'Raka Eldiansyah', company: "CEO FintechHub", desc: `Xedia Media memberikan wawasan membantu kami melihat strategi marketing secara terarah dan menarik perhatian pengguna baru.      `},
      {name: 'Rayhan Aulia', company: "Founder of DigiMarket", desc: `Pendekatan kreatif Xedia Media membantu kami menciptakan kehadiran brand yang relevan dan mudah diingat di kalangan pelanggan  `},
      {name: 'Fadlan Daris', company: "Director at BizInnovate", desc: `Dengan strategi inovatif dan disesuaikan, Xedia Media membawa perubahan dalam pertumbuhan pasar dan meningkatkan engagement kami. `},
      {name: 'Nabila Pratiwi', company: "CTO at HealthPlus", desc: `Kolaborasi dengan Xedia Media optimalkan strategi digital dengan solusi yang terarah dan berkelanjutan memberikan dampak yang kuat    `},
      {name: 'Andi Wijaya', company: "CEO of RetailHub", desc: `Xedia Media menunjukkan profesionalitas dan kreativitas dalam membantu kami mencapai hasil yang lebih baik dalam kampanye marketing    `},
      {name: 'Sari Kusuma', company: "Manager at FoodieWay", desc: `Kami sangat puas dengan hasil yang diberikan oleh Xedia Media dalam pengembangan strategi pemasaran yang lebih efektif dan kreatif     `},
    ]
  },
];

export const portofolioData = [
  {
    id: '1',
    header: "Our Portfolio",
    title: "🌟We Shine in Delivering Exceptional Creative and Design Services!",
    subTitle: "Our Passion is Crafting Impactful Solutions That Propel Your Success!"
  },  
  {
    id: '2',
    serviceData: [
      {
        title: 'Company Profile Creation',
        icon: FaBuildingCircleCheck,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          // { img: port_img9 },
          // { img: port_img10 },
          // { img: port_img11 },
          // { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '3',
    serviceData: [
      {
        title: 'Digital Advertising',
        icon: FaMoneyCheckAlt,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          // { img: port_img9 },
          // { img: port_img10 },
          // { img: port_img11 },
          // { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '4',
    serviceData: [
      {
        title: 'Logo Design',
        icon: IoLogoDesignernews,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          { img: port_img9 },
          { img: port_img10 },
          { img: port_img11 },
          { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '5',
    serviceData: [
      {
        title: 'Social Media Management',
        icon: IoPhonePortrait,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          // { img: port_img9 },
          // { img: port_img10 },
          // { img: port_img11 },
          // { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '6',
    serviceData: [
      {
        title: 'Website Development',
        icon: FaLaptopCode,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          // { img: port_img7 },
          // { img: port_img8 },
          // { img: port_img9 },
          // { img: port_img10 },
          // { img: port_img11 },
          // { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '7',
    serviceData: [
      {
        title: 'Instagram Feeds Design',
        icon: RiInstagramFill,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          // { img: port_img9 },
          // { img: port_img10 },
          // { img: port_img11 },
          // { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  },
  {
    id: '8',
    serviceData: [
      {
        title: 'Video Production',
        icon: FaVideo,
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
          { img: port_img7 },
          { img: port_img8 },
          { img: port_img9 },
          { img: port_img10 },
          { img: port_img11 },
          { img: port_img12 },
          // { img: port_img13 },
          // { img: port_img14 },
          // { img: port_img15 },
          // { img: port_img16 },
          // { img: port_img17 },
          // { img: port_img18 },
          // { img: port_img19 },
          // { img: port_img20 },
          // { img: port_img21 },
          // { img: port_img22 },
          // { img: port_img23 },
          // { img: port_img24 },
          // { img: port_img25 },
          // { img: port_img26 },
          // { img: port_img27 },
          // { img: port_img28 },
          // { img: port_img29 },
        ]
      }
    ]
  }
];

export const locationData = [
  {
    id: '1',
    header: "Location",
    title: "🗺️ Let's Discover Our Vibrant Location",
    subTitle: "Connect with us in the heart of the action"
  },
  {},
];












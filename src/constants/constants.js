import { IoIosArrowRoundForward } from "react-icons/io";

export {
  IoIosArrowRoundForward
}

import { p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7 } from "../assets/assets";

export const navLinks = [
  {
    id: "1",
    header: [
      {title: 'Home', link: 'home'},
      {title: 'About Us', link: 'about'}
    ]
  },
  {
    id: '2',
    title: 'Xedia media'
  },
  {
    id: "3",
    header: [
      {title: 'Our Work', link: 'our-work'},
      {title: 'Our Team', link: 'our-team'},
    ]
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
      { data: '13+ ', desc: "Experience"},
      { data: '20+ ', desc: "Designer"},
      { data: '10K+ ', desc: "Product"}
    ]
  },
]

export const aboutData = [
  {
    id: '1',
    header: "About Us",
    title: "We are a Local leader in Creative Solutions and Design Services",
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
    title: "We provide end-to-end EPC services that",
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




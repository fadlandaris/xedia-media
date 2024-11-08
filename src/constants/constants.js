import { IoIosArrowRoundForward } from "react-icons/io";
import { FaInstagram, FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


import {  p_img1, p_img2, p_img3, p_img4, p_img5, p_img6, p_img7, p_img8, p_img9, port_img1, port_img2, port_img3, port_img4, port_img5, port_img6, port_img7, port_img8, port_img9, port_img10, port_img11, port_img12, port_img13, port_img14, port_img15, port_img16, port_img17, port_img18, port_img19, port_img20, if_1, if_2, if_3, if_4, client_1, client_2, client_3, client_4, client_6, client_7, client_9, client_10, client_13, web_1, web_2, web_3, sos_1, sos_2, sos_3, sos_4, sos_5 } from "../assets/assets";

export const portofolioData = [
  {
    id: '1',
    header: "Portfolio",
    title: "✨We Shine in Delivering Creative and Design Services",
    subTitle: "Crafting Impactful Solutions That Propel Your Success"
  },  
  {
    id: '8',
    serviceData: [
      {
        title: 'Video Production',
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
          { img: port_img13 },
          { img: port_img14 },
          { img: port_img15 },
          { img: port_img16 },
          { img: port_img17 },
          { img: port_img18 },
          { img: port_img19 },
          { img: port_img20 },
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
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
        ]
      }
    ]
  },
  {
    id: '4',
    serviceData: [
      {
        title: 'Logo Design Service',
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
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
          { img: sos_1 },
          { img: sos_2 },
          { img: sos_3 },
          { img: sos_4 },
          { img: sos_5 },
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
          { img: web_1 },
          { img: web_2 },
          { img: web_3 },
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
          { img: if_1 },
          { img: if_2 },
          { img: if_3 },
          { img: if_4 },
        ]
      }
    ]
  },
   {
    id: '2',
    serviceData: [
      {
        title: 'Company Profile Creation',
        content: [
          { img: port_img1 },
        ]
      }
    ]
  },
  {
    id: '9',
    serviceData: [
      {
        title: 'Management Marketplace',
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
          { img: port_img4 },
          { img: port_img5 },
          { img: port_img6 },
        ]
      }
    ]
  },
  {
    id: '10',
    serviceData: [
      {
        title: 'Online Media News',
        content: [
          { img: port_img1 },
          { img: port_img2 },
          { img: port_img3 },
        ]
      }
    ]
  },
];

export const navLinks = [
  {
    id: '1',
    link: 'home',
    nav: "Home",
  },
  {
    id: '2',
    link: 'about-us',
    nav: "About",
  },
  {
    id: '3',
    link: 'our-services',
    nav: "Services",
  },
  {
    id: '4',
    link: 'our-clients',
    nav: "Clients",
  },
  {
    id: '5',
    link: 'our-portofolio',
    nav: "Portofolio",
  },
  {
    id: '6',
    link: 'our-location',
    nav: "Location",
  },
  {
    id: '6',
    link: 'our-team',
    nav: "👨🏻‍💻Our Team",
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
        button: "Contact Us",
        icon: IoIosArrowRoundForward,
        service: [
          {serv: "Company Profile Creation"},
          {serv: "Digital Advertising "},
          {serv: "Logo Design Service"},
          {serv: "Social Media Management"},
          {serv: "Website Development"},
          {serv: "Instagram Feeds Design"},
          {serv: "Video Production Service"},
          {serv: "Management Marketplace"},
          {serv: "Online Media News"},
        ]
      },
    ],
  },
  {
    id: '2',
    projectData: [
      { data: '100 + ', desc: "Clients",},
      { data: '1 +', desc: "Experience"},
      { data: '20+ ', desc: "Designer"},
      { data: '100 + ', desc: "Product"}
    ]
  },
]

export const aboutData = [
  {
    id: '1',
    header: "About Us",
    title: "🏅We are a Local leader in Creative Solutions and Design Services",
    subTitle: "Innovative and Impactful Solutions Across the Industry"
  },
  {
    id: '2',
    statsData: [
      {title: 'Completion Rate', data: '100%', desc: "On-time project Delivery "},
      {title: 'Client Statisfication', data: '95%', desc: "commitment to quality"},
      {title: 'Cost Efficiency', data: '20%', desc: "Cost saving for clients "},
    ]
  },
]

export const servicesData = [
  {
    id: '1',
    header: "Services",
    title: "👨‍🔧We Provide end-to-end EPC Services that",
    subTitle: "Ensure the Success of Your Project"
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
        title: 'Logo Design Service',
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
  },
  {
    id: '9',
    serviceData: [
      {
        title: 'Management Marketplace',
        content: [
          {
            desc: "e provide top-tier management services that connect your brand with the right market, crafting strategies that amplify your message and drive meaningful engagement with your audience",
            img: p_img8,
            point: ['Comprehensive Strategy Development', 'Professional Vendor & Product Management', 'Effective Branding & Market Positioning']
          }
        ]
      }
    ]
  },
  {
    id: '10',
    serviceData: [
      {
        title: 'Online Media News',
        content: [
          {
            desc: "We produce high-quality, engaging videos that effectively convey your brand’s story and message, creating a lasting impact and deepening connections with your audience",
            img: p_img9,
            point: ['Concept Development', 'Professional Filming', 'Impactful Editing']
          }
        ]
      }
    ]
  },
];

export const clientsData = [
  {
    id: '1',
    header: "Clients",
    title: "🤝Delivering Exceptional Creative and Solutions Services",
    subTitle: "to Create Impactful Solutions that Drive Success"
  },
  {
    id: '2',
    statsData: [
      { id: 1, name: 'Mahkota Enterprise', img: client_1, desc: `Xedia Media benar-benar membantu memperkuat kehadiran kami di dunia digital. Dalam waktu enam bulan, leads kami meningkat hingga 50%, dan banyak calon klien yang lebih mudah menemukan kami` },
      { id: 2, name: 'Ave Salon', img: client_2, desc: `Dengan strategi yang tepat dari Xedia, AVÉ kami mampu memperluas pasar kami di luar area lokal. Kini, salon kami dikenal Hair & Beauty Salon lebih luas, dan peluang bisnis baru terus bermunculan` },
      { id: 3, name: 'Heli Jateng', img: client_3, desc: `Xedia Media berhasil membantu kami HELITE memperkenalkan layanan helikopter kami dengan pendekatan digital yang tepat, menjangkau pasar yang sebelumnya sulit kami capai` },
      { id: 4, name: 'Galaxy Decoration', img: client_4, desc: `Melalui kerja sama dengan Xedia, kami GALAXY mendapatkan visibilitas yang lebih tinggi dalam industri dekorasi. Klien kami meningkat, terutama dari segmen acara besar` },
      { id: 5, name: 'The Facial', desc: `Xedia Media membantu kami Amembangun branding yang kuat di media sosial, sehingga layanan kecantikan kami semakin dikenal luas oleh banyak orang` },
      { id: 6, name: 'Pusat Aquatic', img: client_6, desc: `Dengan strategi pemasaran digital dari Xedia, kami berhasil meningkatkan PUSAT penjualan keperluan aquarium serta memperkuat relasi dengan klien-klien baru` },
      { id: 7, name: 'United E-Motor Jateng & DIY', img: client_7, desc: `Berkat Xedia Media, kami bisa memperkenalkan produk motor listrik UNITED kami ke lebih banyak calon pelanggan, meningkatkan penjualan dan memperkuat posisi kami di pasar kendaraan ramah lingkungan` },
      { id: 8, name: 'Reza Lunar Lighting', desc: `Xedia membantu kami memperluas LUNAR jangkauan pasar kami di sektor pencahayaan, dan hasilnya, kami mendapatkan banyak proyek baru dan memperkuat hubungan dengan klien lama` },
      { id: 9, name: 'PT Segara Alam Sinergi', img: client_9, desc: `Bekerja sama dengan Xedia Media telah membantu kami merancang strategi pemasaran yang efektif untuk memperkenalkan produk energi biomass kami ke pasar yang lebih luas, baik di tingkat lokal, nasional, maupun internasional` },
      { id: 10, name: 'Virenze Interior', img: client_10, desc: `Xedia Media membantu kami memperkuat citra merek di sektor desain interior. Berkat strategi pemasaran yang tepat, proyek kami kini lebih mudah ditemukan oleh klien potensial, dan permintaan untuk layanan kami meningkat secara signifikan` },
      { id: 11, name: 'Satset Indonesia', desc: `Berkat dukungan dari Xedia, bisnis kami semakin dikenal di berbagai wilayah. Kami melihat peningkatan signifikan dalam jumlah pelanggan yang menggunakan layanan kebersihan kami, baik untuk rumah tangga maupun bisnis.` },
      { id: 12, name: 'Aquaone', desc: `Xedia Media membantu kami dalam A UA membangun brand awareness di industri pipa, sehingga produk kami semakin dikenal dan diandalkan oleh para kontraktor dan perusahaan besar` },
      { id: 13, name: 'Sate Cempe Manis', desc: `Berkat Xedia Media, branding Sate Cempe Manis naik kelas! Kehadiran kami di media sosial semakin kuat, dan pelanggan semakin banyak yang penasaran untuk mencoba kelezatan sate kami` },
      { id: 14, name: 'Puma Production', desc: `Bekerja sama dengan Xedia Media benar-benar mengangkat citra kami sebagai event organizer. Dengan strategi branding mereka, kami berhasil menarik lebih banyak klien dan menjadikan setiap acara lebih berkesan serta profesional` },
      { id: 15, name: 'Tiara Wedding Organizer', desc: `Xedia Media sangat memahami keunikan pernikahan tradisional. Mereka membantu kami menampilkan sisi elegan dan otentik dari budaya lokal, sehingga semakin banyak pasangan yang memilih kami untuk merayakan hari istimewa mereka` },
      { id: 16, name: 'Ave Bridal', desc: `Dengan bantuan Xedia Media, Ave Bridal berhasil menarik lebih banyak calon pengantin. Desain konten yang fresh dan menarik membuat kami semakin dikenal sebagai penyedia gaun pernikahan yang elegan dan berkualitas` },
      { id: 17, name: 'Marabunta', desc: `Xedia Media memberikan kami solusi branding yang sangat efektif, membuat restoran kami semakin dikenal sebagai salah satu destinasi kuliner ikonik. Peningkatan kunjungan dan reservasi semakin terasa sejak bekerja sama dengan mereka` },
      { id: 18, name: 'The Arena Mini Soccer', desc: `Dengan dukungan Xedia Media, The Arena Mini Soccer kini semakin dikenal sebagai tempat favorit bagi komunitas sepak bola mini. Branding yang kuat dan konten menarik meningkatkan kunjungan dan pemesanan lapangan secara signifikan` },
    ]
  },
];



export const locationData = [
  {
    id: '1',
    header: "Location",
    title: "🧭Let's Discover Our Vibrant Location",
    subTitle: "Connect with us in the heart of the action"
  },
];

export const footerData = [
  {
    id: '1',
    title: "Xedia Media",
    contact: [
      {
        id: '1',
        stat: 'Jl. Pandan Biru III, Blok C No 03, Pandanaran Hills, Mangunharjo, Kec. Tembalang, Kota Semarang, Jawa Tengah 50272',
        icon: FaLocationDot,
      },
      {
        id: '2',
        stat: 'CP + 0872348972349',
        icon: FaPhone,
      },
    ]
  },
  {
    id: '2',
    title: 'Navlinks',
    stat: [
      { id: '1', text: 'Home', link: 'home' },
      { id: '2', text: 'About', link: 'about-us' },
      { id: '3', text: 'Services', link: 'our-services' },
      { id: '4', text: 'Clients', link: 'our-clients' },
      { id: '5', text: 'Portofolio', link: 'our-portofolio' },
    ]
  },
  {
    id: '3',
    title: 'Socmed',
    stat: [
      { id: '1', icon: FaFacebookF, link: '' },
      { id: '2', icon: FaInstagram, link: '' },
      { id: '3', icon: FaTiktok, link: '' },
      { id: '4', icon: FaYoutube, link: '' },
      { id: '5', icon: FaSquareXTwitter, link: '' },
    ]
  },
];



export const teamData = [
  {
    id: '1',
  },
];












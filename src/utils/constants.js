export const PROFILE_DATA = {
  name: "Aldan Prayogi",
  role: "Automation Engineer",
  description: "A passionate professional with strong collaboration skills and experience working in cross-disciplinary teams. Strong listening abilities support a deep understanding of diverse team perspectives and needs. Believes that effective teamwork and clear communication are essential to achieving outstanding results, with a commitment to contributing and continuously learning to reach shared goals.",
  email: "aldanprayogi@example.com", 
  resume: "/CV_Aldan_Prayogi.pdf", // Placeholder name, assuming it will be in public folder
  socials: [
    { name: "Instagram", url: "https://instagram.com/", icon: "/src/assets/Instagram.png" },
    { name: "LinkedIn", url: "https://linkedin.com/in/", icon: "/src/assets/linkedin.png" },
    { name: "Github", url: "https://github.com/alldone03", icon: "/src/assets/Github.png" },
  ],
  skills: {
    hard: [
      "Web Development (Laravel)", "Python Programming", "3D Designer", "Instrumentation & Control Engineer", 
      "Design PCB", "Electrical Wiring", "Flutter Android Development", "PLC-Based Control", 
      "Toyota Production System (TPS)", "DCS (Yokogawa)", "Image Processing (OpenCV)", "YOLOv8"
    ],
    soft: [
      "Collaboration & Teamwork", "Adaptability", "Attention to Detail", "Critical Thinking", "Curiosity & Willingness to Learn"
    ]
  },
  experience: [
    {
      company: "Toyota Motor Manufacturing Indonesia",
      role: "Internship",
      period: "Aug 2024 - Aug 2025",
      description: "Built an object detection pipeline using YOLOv8 to classify automotive components and automate annotation, reducing labeling time by over 70% and achieving 98.87% accuracy."
    },
    {
      company: "Research Egrek Digital (ITS)",
      role: "Researcher",
      period: "Mar 2024 - Jul 2024",
      description: "Developed image processing scripts and an Android classification app (Flutter) with 90%+ accuracy for palm oil harvesting efficiency."
    },
    {
      company: "Hysage (ITS)",
      role: "Project Management",
      period: "Aug 2023 - Dec 2023",
      description: "Designed electrical wiring and developed real-time IoT monitoring systems using Laravel for hydroponics management."
    },
    {
      company: "Elmech Technology",
      role: "Part Time",
      period: "Jan 2022 - Aug 2022",
      description: "Designed custom PCBs, assembled electronic components, and programmed Arduino microcontrollers in C++ for machine prototypes."
    }
  ],
  projects: [
    {
      title: "Quality Inspection With Image Processing",
      description: "Advanced model for automotive component inspection at TMMIN using YOLOv8, improving F1 score from 0.07 to 0.98.",
      details: "Detailed breakdown: This project involved collecting thousands of images from the production line, labeling them using CVAT, and training a YOLOv8 model. The model was then deployed on an industrial PC to provide real-time feedback to operators.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
      ],
      link_visitsite: "https://example.com",
      link_sourcecode: "https://github.com",
      tags: ["YOLOv8", "Python", "TMMIN"]
    },
    {
      title: "Egrek Digital",
      description: "Palm oil harvesting efficiency research involving image classification and real-time monitoring with Raspberry Pi.",
      details: "The Egrek Digital project aimed to modernize traditional harvesting. I developed a Flutter app that communicates with a Raspberry Pi via MQTT to monitor harvest yields and tree conditions in real-time.",
      image: "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1473960154316-0ee418ae3490?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bbb9e34a690e?q=80&w=2070&auto=format&fit=crop"
      ],
      link_sourcecode: "https://github.com",
      tags: ["Flutter", "Python", "OpenCV"]
    },
    {
      title: "Hydroponics Management System",
      description: "Integrated IoT system for monitoring pH, TDS, and temperature using Laravel and multiple environmental sensors.",
      details: "Built using Laravel for the backend and React for the frontend dashboard. The hardware uses an ESP32 to push sensor data through a REST API every 60 seconds.",
      image: "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1585144860106-9983ed736277?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["IoT", "Laravel", "Automation"]
    },
    {
      title: "Monitoring 3 Phase Motor",
      description: "Industrial IoT solution for real-time monitoring of three-phase motor health and power consumption.",
      details: "Used CT sensors and an STM32 microcontroller to monitor current draw and vibrations. Data is visualized on a local SCADA screen.",
      image: "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["IoT", "STM32", "Instrumentation"]
    },
    {
      title: "Line Tracer Analog",
      description: "High-speed analog robot designed for precise line following using PID control.",
      details: "This project focused on analog circuit design, using op-amps for PID calculation instead of a digital microcontroller, achieving extremely low latency.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Analog", "Robotics", "PCB Design"]
    }
  ],
  certifications: [
    {
      year: "2025",
      title: "Master Integrated Automation",
      issuer: "PT Yokogawa Indonesia",
      description: "From sensor to Smart Decision DCS.",
      link: "#", // placeholder for now
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    },
    {
      year: "2020",
      title: "PLC-Based Control Installation",
      issuer: "BNSP",
      description: "Installation technician certification for industrial PLC systems.",
      link: "#",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      year: "2019",
      title: "Simple Building Electrical Installation",
      issuer: "BNSP",
      description: "Fundamental electrical wiring and installation safety.",
      link: "#",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
    }
  ],
  intellectualProperty: [
    {
      type: "Paten",
      title: "Sistem Pengering Gabah Berbasis IoT",
      number: "P00202301234", // placeholder
      status: "Granted",
      year: "2023",
      description: "Inovasi sistem pengeringan otomatis dengan kontrol suhu dan kelembaban real-time."
    },
    {
      type: "HAKI - Hak Cipta",
      title: "Software Monitoring Smart Hydroponic",
      number: "EC00202312345", // placeholder
      status: "Registered",
      year: "2023",
      description: "Program komputer untuk manajemen nutrisi dan lingkungan tanaman hidroponik."
    }
  ]
};


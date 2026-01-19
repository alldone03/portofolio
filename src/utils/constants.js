import instagramIcon from "../assets/Instagram.webp";
import linkedinIcon from "../assets/linkedin.webp";
import githubIcon from "../assets/Github.webp";
import websiteIcon from "../assets/website.webp";
import Insamo1 from "../assets/Insamo/20251105_151227.webp";
import Insamo2 from "../assets/Insamo/20251105_151248.webp";
import Insamo3 from "../assets/Insamo/20251105_151302.webp";

// const cogniva = Array.from({ length: 23 }, (i) =>
//   require(`../assets/Cogniva AI Assesment System/Slide${i + 1}.webp`)
// );

const cogniva = Object.entries(
  import.meta.glob("../assets/Cogniva AI Assesment System/*.webp", {
    eager: true,
  })
)
  .sort((a, b) => a[0].localeCompare(b[0])) // urut Slide1, Slide2, ...
  .map(([, img]) => img.default);

export const PROFILE_DATA = {
  name: "Aldan Prayogi",
  role: "Automation Engineer",
  email: "prayogialdan@gmail.com",
  socials: [
    {
      name: "Instagram",
      url: "https://instagram.com/aldan_prayogi",
      icon: instagramIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aldan-prayogi",
      icon: linkedinIcon,
    },
    {
      name: "Github",
      url: "https://github.com/alldone03",
      icon: githubIcon,
    },
    {
      name: "Website",
      url: "https://alldone03.github.io/portofolio",
      icon: websiteIcon,
    },
  ],
};

const en = {
  nav: {
    home: "Home",
    about: "About",
    education: "Education",
    organization: "Organization",
    skills: "Skills",
    projects: "Projects",
    ip: "IP / HAKI",
    certifications: "Certifications",
    resume: "Resume",
    contact: "Contact",
    hire_me: "Hire Me",
  },
  hero: {
    greeting: "Hello, I'm",
    download_cv: "Download CV",
    contact_me: "Contact Me",
  },
  cv: {
    summary: "Professional Summary",
    experience: "Work Experience",
    education: "Education",
    organization: "Organization Experience",
    skills: "Technical Skills",
    projects: "Key Projects",
    certifications: "Certifications",
    skills_hard: "Hard Skills",
    skills_soft: "Soft Skills",
  },
  about_section: {
    title: "About Me",
    subtitle: "Software That Drives Efficiency",
    professional_journey: "Professional Journey",
    key_experiences: "Key Experiences",
    projects_completed: "Projects Completed",
  },
  profile: {
    name: "Aldan Prayogi",
    role: "Automation Engineer",
    description:
      "A passionate professional with strong collaboration skills and experience working in cross-disciplinary teams. Strong listening abilities support a deep understanding of diverse team perspectives and needs. Believes that effective teamwork and clear communication are essential to achieving outstanding results, with a commitment to contributing and continuously learning to reach shared goals.",
  },
  skills: {
    title: "Skills",
    hard: [
      "Web Development (Laravel)",
      "Python Programming",
      "Design 3D (Fusion 360)",
      "Instrumentation & Control Engineer",
      "Design PCB",
      "Electrical Wiring",
      "Flutter Android Development",
      "PLC-Based Control",
      "Toyota Production System (TPS)",
      "DCS (Yokogawa)",
      "Image Processing (OpenCV)",
      "YOLOv8",
      "Canva",
    ],
    soft: [
      "Collaboration & Teamwork",
      "Adaptability",
      "Attention to Detail",
      "Critical Thinking",
      "Curiosity & Willingness to Learn",
      "Data Driven Decision Making",
      "Public Speaking",
    ],
  },
  education_section: {
    subtitle: "Academic Background",
    key_achievements: "Key Achievements",
  },
  education: {
    title: "Education",
    items: [
      {
        school: "Institut Teknologi Sepuluh Nopember (ITS)",
        degree: "Bachelor of Applied Science in Automation Engineering",
        period: "2022 - Present",
        gpa: "3.60/4.00",
        description:
          "Focused on Industrial Automation, PLC, IoT, and Embedded Systems. Active in robotics and research projects, maintaining a strong academic record.",
        achievements: [
          "Published Research on Palm Oil Harvesting Efficiency",
          "Lead Developer for multiple campus digitalization projects",
        ],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Direktorat Sumber Daya Manusia dan Organisasi ITS",
        role: "Software Engineer",
        period: "Oct 2025 - Present",
        description:
          "Designed and implemented a full-stack web-based assessment platform with dynamic question difficulty, scoring logic, and learning recommendations. Built REST APIs, structured relational databases, and React-based dashboards for admins and users.",
      },
      {
        company:
          "Pusat Studi Mitigasi Kebencanaan dan Perubahan Iklim (MKPI) ITS",
        role: "Researcher",
        period: "Aug 2025 - Present",
        description: [
          "Developed earthquake prediction models using machine learning and deep learning techniques, Long Short-Term Memory (LSTM). Implemented data preprocessing, feature extraction, and model training using Python and TensorFlow, achieving high prediction accuracy and providing valuable insights for earthquake risk assessment.",
          "Developed Flood detector using ultrasonic sensor and microcontroller",
        ],
      },
      {
        company: "PLN Nusantara Power And Services",
        role: "Internship",
        period: "Aug 2025 - Jan 2025",
        description:
          "Built an object crack detection system for concrete structures using image processing and YOLOv8, achieving 95% accuracy and enhancing maintenance efficiency.",
      },
      {
        company: "Toyota Motor Manufacturing Indonesia",
        role: "Internship",
        period: "Aug 2024 - Aug 2025",
        description:
          "Built an object detection pipeline using YOLOv8 to classify automotive components and automate annotation, reducing labeling time by over 70% and achieving 98.87% accuracy.",
      },
      {
        company: "Research Egrek Digital (ITS)",
        role: "Researcher",
        period: "Mar 2024 - Jul 2024",
        description:
          "Developed image processing scripts and an Android classification app (Flutter) with 90%+ accuracy for palm oil harvesting efficiency.",
      },
      {
        company: "Hysage (ITS)",
        role: "Project Management",
        period: "Aug 2023 - Dec 2023",
        description:
          "Designed electrical wiring and developed real-time IoT monitoring systems using Laravel for hydroponics management.",
      },
      {
        company: "Elmech Technology",
        role: "Part Time",
        period: "Jan 2022 - Aug 2022",
        description:
          "Designed custom PCBs, assembled electronic components, and programmed Arduino microcontrollers in C++ for machine prototypes.",
      },
    ],
  },
  organization: {
    title: "Organization Experience",
    items: [
      {
        name: "Himpunan Mahasiswa Departemen Teknik Elektro Otomasi (HMDTEO)",
        role: "Staff profession and science",
        period: "2023 - 2024",
        description:
          "Led the research division to foster innovation and technical skills among students. Organized workshops on microcontroller programming and IoT, managing a team of 15 staff members and multiple student projects.",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    view_project: "View Project",
    source_code: "Source Code",
    items: [
      {
        title: "Cogniva AI Assessment System",
        year: "2026",
        description:
          "This project is about AI Adaptive learning by Assessment of the user. AI have to give recomendation to user based on their wrong answer and refer to where the document have to study.",
        details: "",
        image: cogniva[0],
        images: [...cogniva],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["python Flask", "React", "Docker"],
      },
      {
        title: "Insamo Earthquake detection and Insamo Flood detection",
        year: "2025",
        description: "",
        details:
          "Detailed breakdown: This project involved collecting thousands of images from the production line, labeling them using CVAT, and training a YOLOv8 model. The model was then deployed on an industrial PC to provide real-time feedback to operators.",
        image: Insamo1,
        images: [Insamo1, Insamo2, Insamo3],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["ESP32", "Microcontroller", "MQTT"],
      },
      {
        title: "Quality Inspection With Image Processing",
        year: "2024",
        description:
          "Advanced model for automotive component inspection at TMMIN using YOLOv8, improving F1 score from 0.07 to 0.98.",
        details:
          "Detailed breakdown: This project involved collecting thousands of images from the production line, labeling them using CVAT, and training a YOLOv8 model. The model was then deployed on an industrial PC to provide real-time feedback to operators.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        ],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["YOLOv8", "Python", "TMMIN"],
      },
      {
        title: "Egrek Digital",
        year: "2024",
        description:
          "Palm oil harvesting efficiency research involving image classification and real-time monitoring with Raspberry Pi.",
        details:
          "The Egrek Digital project aimed to modernize traditional harvesting. I developed a Flutter app that communicates with a Raspberry Pi via MQTT to monitor harvest yields and tree conditions in real-time.",
        image:
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473960154316-0ee418ae3490?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bbb9e34a690e?q=80&w=2070&auto=format&fit=crop",
        ],
        link_sourcecode: "https://github.com",
        tags: ["Flutter", "Python", "OpenCV"],
      },
      {
        title: "Hydroponics Management System",
        year: "2023",
        description:
          "Integrated IoT system for monitoring pH, TDS, and temperature using Laravel and multiple environmental sensors.",
        details:
          "Built using Laravel for the backend and React for the frontend dashboard. The hardware uses an ESP32 to push sensor data through a REST API every 60 seconds.",
        image:
          "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585144860106-9983ed736277?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "Laravel", "Automation"],
      },
      {
        title: "Monitoring 3 Phase Motor",
        year: "2023",
        description:
          "Industrial IoT solution for real-time monitoring of three-phase motor health and power consumption.",
        details:
          "Used CT sensors and an STM32 microcontroller to monitor current draw and vibrations. Data is visualized on a local SCADA screen.",
        image:
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "STM32", "Instrumentation"],
      },
      {
        title: "Line Tracer Analog",
        year: "2022",
        description:
          "Analog circuit-based line tracer robot using op-amps for signal processing and motor control.",
        details:
          "This project focused on analog circuit design, using op-amps to achieving robot follow the track.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["Analog", "Robotics", "PCB Design"],
      },
    ],
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        year: "2025",
        title: "Master Integrated Automation",
        issuer: "PT Yokogawa Indonesia",
        description: "From sensor to Smart Decision DCS.",
        link: "https://www.yokogawa.co.id/",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      },
      {
        year: "2020",
        title: "PLC-Based Control Installation",
        issuer: "BNSP",
        description:
          "Installation technician certification for industrial PLC systems.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070&auto=format&fit=crop",
      },
      {
        year: "2019",
        title: "Simple Building Electrical Installation",
        issuer: "BNSP",
        description: "Fundamental electrical wiring and installation safety.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  intellectualProperty: {
    title: "Intellectual Property",
    items: [
      {
        type: "Paten",
        title: "Sistem Pengering Gabah Berbasis IoT",
        number: "P00202301234",
        status: "Granted",
        year: "2023",
        description:
          "Inovasi sistem pengeringan otomatis dengan kontrol suhu dan kelembaban real-time.",
      },
      {
        type: "HAKI - Hak Cipta",
        title: "Software Monitoring Smart Hydroponic",
        number: "EC00202312345",
        status: "Registered",
        year: "2023",
        description:
          "Program komputer untuk manajemen nutrisi dan lingkungan tanaman hidroponik.",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's work together",
    email: "Email",
    socials: "Socials",
    send_message: "Send Message",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
    },
  },
};

const id = {
  nav: {
    home: "Beranda",
    about: "Tentang",
    education: "Pendidikan",
    organization: "Organisasi",
    skills: "Keahlian",
    projects: "Proyek",
    ip: "IP / HAKI",
    certifications: "Sertifikasi",
    resume: "Resume",
    contact: "Kontak",
    hire_me: "Rekrut Saya",
  },
  hero: {
    greeting: "Halo, saya",
    download_cv: "Unduh CV",
    contact_me: "Hubungi Saya",
  },
  cv: {
    summary: "Ringkasan Profesional",
    experience: "Pengalaman Kerja",
    education: "Pendidikan",
    organization: "Pengalaman Organisasi",
    skills: "Keahlian Teknis",
    projects: "Proyek Utama",
    certifications: "Sertifikasi",
    skills_hard: "Hard Skills",
    skills_soft: "Soft Skills",
  },
  about_section: {
    title: "Tentang Saya",
    subtitle: "Software Pendorong Efisiensi",
    professional_journey: "Perjalanan Profesional",
    key_experiences: "Pengalaman Utama",
    projects_completed: "Proyek Selesai",
  },
  profile: {
    name: "Aldan Prayogi",
    role: "Automation Engineer",
    description:
      "Seorang profesional yang penuh semangat dengan kemampuan kolaborasi yang kuat dan pengalaman bekerja dalam tim lintas disiplin. Kemampuan mendengarkan yang kuat mendukung pemahaman mendalam tentang beragam perspektif dan kebutuhan tim. Percaya bahwa kerja tim yang efektif dan komunikasi yang jelas sangat penting untuk mencapai hasil yang luar biasa, dengan komitmen untuk berkontribusi dan terus belajar demi mencapai tujuan bersama.",
  },
  skills: {
    title: "Keahlian",
    hard: [
      "Pengembangan Web (Laravel)",
      "Pemrograman Python",
      "Desain 3D (Fusion 360)",
      "Teknik Instrumentasi & Kontrol",
      "Desain PCB",
      "Wiring Elektrik",
      "Pengembangan Android Flutter",
      "Kontrol Berbasis PLC",
      "Sistem Produksi Toyota (TPS)",
      "DCS (Yokogawa)",
      "Pemrosesan Citra (OpenCV)",
      "YOLOv8",
    ],
    soft: [
      "Kolaborasi & Kerja Tim",
      "Adaptabilitas",
      "Perhatian terhadap Detail",
      "Berpikir Kritis",
      "Keingintahuan & Kemauan Belajar",
      "Pengambilan Keputusan Berbasis Data",
      "Public Speaking",
    ],
  },
  education_section: {
    subtitle: "Latar Belakang Akademik",
    key_achievements: "Pencapaian Utama",
  },
  education: {
    title: "Pendidikan",
    items: [
      {
        school: "Institut Teknologi Sepuluh Nopember (ITS)",
        degree: "Sarjana Terapan Teknik Otomasi",
        period: "2022 - Sekarang",
        gpa: "3.60/4.00",
        description:
          "Fokus pada Otomasi Industri, PLC, IoT, dan Sistem Tertanam. Aktif dalam proyek robotika dan penelitian, mempertahankan catatan akademik yang kuat.",
        achievements: [
          "Mempublikasikan Penelitian tentang Efisiensi Pemanenan Kelapa Sawit",
          "Pengembang Utama untuk beberapa proyek digitalisasi kampus",
        ],
      },
    ],
  },
  experience: {
    title: "Pengalaman",
    items: [
      {
        company: "Direktorat Sumber Daya Manusia dan Organisasi ITS",
        role: "Software Engineer",
        period: "Okt 2025 - Sekarang",
        description:
          "Merancang dan mengimplementasikan platform penilaian berbasis web full-stack dengan tingkat kesulitan soal dinamis, logika penilaian, dan rekomendasi pembelajaran. Membangun REST API, database relasional terstruktur, dan dashboard berbasis React untuk admin dan pengguna.",
      },
      {
        company:
          "Pusat Studi Mitigasi Kebencanaan dan Perubahan Iklim (MKPI) ITS",
        role: "Peneliti",
        period: "Agt 2025 - Sekarang",
        description: [
          "Mengembangkan model prediksi gempa menggunakan teknik machine learning dan deep learning, Long Short-Term Memory (LSTM). Melakukan pra-pemrosesan data, ekstraksi fitur, dan pelatihan model menggunakan Python dan TensorFlow, mencapai akurasi prediksi tinggi dan memberikan wawasan berharga untuk penilaian risiko gempa.",
          "Mengembangkan detektor banjir menggunakan sensor ultrasonik dan mikrokontroler",
        ],
      },
      {
        company: "PLN Nusantara Power And Services",
        role: "Magang",
        period: "Agt 2025 - Jan 2025",
        description:
          "Membangun sistem deteksi retak objek untuk struktur beton menggunakan pemrosesan citra dan YOLOv8, mencapai akurasi 95% dan meningkatkan efisiensi pemeliharaan.",
      },
      {
        company: "Toyota Motor Manufacturing Indonesia",
        role: "Magang",
        period: "Agt 2024 - Agt 2025",
        description:
          "Membangun pipeline deteksi objek menggunakan YOLOv8 untuk mengklasifikasikan komponen otomotif dan mengotomatiskan anotasi, mengurangi waktu pelabelan lebih dari 70% dan mencapai akurasi 98,87%.",
      },
      {
        company: "Research Egrek Digital (ITS)",
        role: "Peneliti",
        period: "Mar 2024 - Jul 2024",
        description:
          "Mengembangkan skrip pemrosesan citra dan aplikasi klasifikasi Android (Flutter) dengan akurasi 90%+ untuk efisiensi pemanenan kelapa sawit.",
      },
      {
        company: "Hysage (ITS)",
        role: "Project Management",
        period: "Agt 2023 - Des 2023",
        description:
          "Merancang wiring elektrik dan mengembangkan sistem pemantauan IoT real-time menggunakan Laravel untuk manajemen hidroponik.",
      },
      {
        company: "Elmech Technology",
        role: "Paruh Waktu",
        period: "Jan 2022 - Agt 2022",
        description:
          "Merancang PCB kustom, merakit komponen elektronik, dan memprogram mikrokontroler Arduino dalam C++ untuk prototipe mesin.",
      },
    ],
  },
  organization: {
    title: "Pengalaman Organisasi",
    items: [
      {
        name: "Himpunan Mahasiswa Departemen Teknik Elektro Otomasi (HMDTEO)",
        role: "Staf Profesi dan Keilmiahan",
        period: "2023 - 2024",
        description:
          "Memimpin divisi riset untuk menumbuhkan inovasi dan keterampilan teknis di kalangan mahasiswa. Menyelenggarakan lokakarya tentang pemrograman mikrokontroler dan IoT, mengelola tim yang terdiri dari 15 staf dan berbagai proyek mahasiswa.",
      },
    ],
  },
  projects: {
    title: "Proyek Unggulan",
    view_project: "Lihat Proyek",
    source_code: "Kode Sumber",
    items: [
      {
        title: "Quality Inspection With Image Processing",
        year: "2024",
        description:
          "Model canggih untuk inspeksi komponen otomotif di TMMIN menggunakan YOLOv8, meningkatkan skor F1 dari 0,07 menjadi 0,98.",
        details:
          "Rincian mendalam: Proyek ini melibatkan pengumpulan ribuan gambar dari lini produksi, pelabelan menggunakan CVAT, dan pelatihan model YOLOv8. Model kemudian diterapkan pada PC industri untuk memberikan umpan balik real-time kepada operator.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
        ],
        link_visitsite: "https://example.com",
        link_sourcecode: "https://github.com",
        tags: ["YOLOv8", "Python", "TMMIN"],
      },
      {
        title: "Egrek Digital",
        year: "2024",
        description:
          "Penelitian efisiensi pemanenan kelapa sawit yang melibatkan klasifikasi citra dan pemantauan real-time dengan Raspberry Pi.",
        details:
          "Proyek Egrek Digital bertujuan untuk memodernisasi pemanenan tradisional. Saya mengembangkan aplikasi Flutter yang berkomunikasi dengan Raspberry Pi melalui MQTT untuk memantau hasil panen dan kondisi pohon secara real-time.",
        image:
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594776208137-bc2b27970821?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473960154316-0ee418ae3490?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551288049-bbb9e34a690e?q=80&w=2070&auto=format&fit=crop",
        ],
        link_sourcecode: "https://github.com",
        tags: ["Flutter", "Python", "OpenCV"],
      },
      {
        title: "Hydroponics Management System",
        year: "2023",
        description:
          "Sistem IoT terintegrasi untuk memantau pH, TDS, dan suhu menggunakan Laravel dan berbagai sensor lingkungan.",
        details:
          "Dibangun menggunakan Laravel untuk backend dan React untuk dashboard frontend. Perangkat keras menggunakan ESP32 untuk mengirimkan data sensor melalui REST API setiap 60 detik.",
        image:
          "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1558449028-s54930927f10?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585144860106-9983ed736277?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "Laravel", "Automation"],
      },
      {
        title: "Monitoring 3 Phase Motor",
        year: "2023",
        description:
          "Solusi IoT industri untuk pemantauan real-time kesehatan motor tiga fasa dan konsumsi daya.",
        details:
          "Menggunakan sensor CT dan mikrokontroler STM32 untuk memantau arus dan getaran. Data divisualisasikan pada layar SCADA lokal.",
        image:
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1504194068133-c2472b64d30c?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["IoT", "STM32", "Instrumentation"],
      },
      {
        title: "Line Tracer Analog",
        year: "2022",
        description:
          "Robot analog kecepatan tinggi yang dirancang untuk mengikuti garis secara presisi menggunakan kontrol PID.",
        details:
          "Proyek ini berfokus pada desain sirkuit analog, menggunakan op-amp untuk perhitungan PID alih-alih mikrokontroler digital, mencapai latensi yang sangat rendah.",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2070&auto=format&fit=crop",
        ],
        tags: ["Analog", "Robotics", "PCB Design"],
      },
    ],
  },
  certifications: {
    title: "Sertifikasi",
    items: [
      {
        year: "2025",
        title: "Master Integrated Automation",
        issuer: "PT Yokogawa Indonesia",
        description: "Dari sensor hingga Smart Decision DCS.",
        link: "https://www.yokogawa.co.id/",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      },
      {
        year: "2020",
        title: "PLC-Based Control Installation",
        issuer: "BNSP",
        description: "Sertifikasi teknisi instalasi untuk sistem PLC industri.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2070&auto=format&fit=crop",
      },
      {
        year: "2019",
        title: "Simple Building Electrical Installation",
        issuer: "BNSP",
        description: "Wiring elektrik dasar dan keselamatan instalasi.",
        link: "#",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      },
    ],
  },
  intellectualProperty: {
    title: "Kekayaan Intelektual",
    items: [
      {
        type: "Paten",
        title: "Sistem Pengering Gabah Berbasis IoT",
        number: "P00202301234",
        status: "Granted",
        year: "2023",
        description:
          "Inovasi sistem pengeringan otomatis dengan kontrol suhu dan kelembaban real-time.",
      },
      {
        type: "HAKI - Hak Cipta",
        title: "Software Monitoring Smart Hydroponic",
        number: "EC00202312345",
        status: "Registered",
        year: "2023",
        description:
          "Program komputer untuk manajemen nutrisi dan lingkungan tanaman hidroponik.",
      },
    ],
  },
  contact: {
    title: "Hubungi Kami",
    subtitle: "Mari bekerja sama",
    email: "Email",
    socials: "Media Sosial",
    send_message: "Kirim Pesan",
    form: {
      name: "Nama",
      email: "Email",
      message: "Pesan",
      submit: "Kirim Pesan",
    },
  },
};

export const RESOURCES = {
  en: { translation: en },
  id: { translation: id },
};

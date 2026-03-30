import type { SiteData } from "../types/portfolio";

export const DATA: SiteData = {
  profile: {
    name: "Imam Nur Arifin",
    location: "Jakarta, Indonesia",
    phone: "081310363949",
    wa: "6281310363949",
    email: "imam.12ra.kkpi@gmail.com",
    linkedin: "https://linkedin.com/in/imamnura21",
    github: "https://github.com/imamnura",
    githubUsername: "imamnura",
    website: "https://imamnura.online",
    cvUrl: "#",
    summary: {
      id: "Frontend Engineer dengan pengalaman 5+ tahun yang berspesialisasi dalam React/Next.js dan performa UI. Berpengalaman dalam memberikan landing page dengan traffic tinggi, dashboard B2B, dan sistem konten dengan SEO, aksesibilitas, dan keandalan yang kuat. Tersertifikasi dalam Agile (Scrum) dan DevSecOps, mahir memimpin sprint, menegakkan gerbang kualitas, dan berkolaborasi lintas desain, produk, dan backend untuk memberikan hasil yang terukur.",
      en: "Frontend Engineer with 5+ years of experience specializing in React/Next.js and UI performance. Experienced in delivering high-traffic landing pages, B2B dashboards, and content systems with strong SEO, accessibility, and reliability. Certified in Agile (Scrum) and DevSecOps, adept at leading sprints, enforcing quality gates, and collaborating across design, product, and backend to deliver measurable outcomes.",
    },
  },
  skills: {
    Frontend: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML 5",
      "CSS 3",
    ],
    Backend: ["Node JS", "Express", "PHP"],
    "UI & Styling": [
      "Material UI",
      "Tailwind",
      "Ant Design",
      "SCSS",
      "BEM Methodology",
      "Accessibility",
    ],
    "State Management": ["Context", "Redux", "Zustand"],
    "Testing & Docs": ["Jest", "Enzyme", "Storybook", "React Testing Library"],
    "Performance & SEO": [
      "Lighthouse",
      "Image Optimization",
      "Code Splitting",
      "Google Analytics",
      "Sitemaps",
    ],
    "DevOps & Quality": ["Git", "Docker", "Jenkins", "CI/CD", "SonarQube"],
    Tools: ["Agile Scrum", "Jira", "Figma", "MySQL", "Firebase"],
  },
  experiences: [
    {
      company: "Telkom Indonesia",
      location: "Jakarta, Indonesia",
      role: "Frontend Developer",
      periodId: "Nov 2020 - Sekarang",
      periodEn: "Nov 2020 - Present",
      highlightsId: [
        "Membangun UI tingkat lanjut (drag-and-drop boards, lead/broadcast, offer/PO), menghasilkan pengurangan waktu pemrosesan end-to-end sebesar 25%.",
        "Membangun tagihan & pembayaran terintegrasi, mengurangi waktu pemrosesan 30-40%.",
        "Meningkatkan kualitas dengan Jest/Enzyme dan komponen Storybook, mengurangi >80% cacat UI.",
        "Mengotomatiskan rilis dengan Jenkins CI/CD, Docker, dan SonarQube.",
      ],
      highlightsEn: [
        "Built advanced UI (drag-and-drop boards, lead/broadcast, offer/PO), resulting in a 25% reduction in end-to-end processing time.",
        "Built integrated billing & payments, reducing processing time 30-40%.",
        "Enhanced quality with Jest/Enzyme tests and Storybook, leading to >80% reduction in UI defects.",
        "Automated releases with Jenkins CI/CD, Docker, and SonarQube quality gates.",
      ],
    },
    {
      company: "Blanja.com",
      location: "Jakarta, Indonesia",
      role: "Frontend Developer",
      periodId: "Sept 2019 - Okt 2020",
      periodEn: "Sept 2019 - Oct 2020",
      highlightsId: [
        "Mengoptimalkan frontend Vue/SCSS, memangkas waktu muat halaman sebesar 25-35% (Lighthouse).",
        "Mengirimkan komponen berbasis sistem desain yang dapat digunakan kembali, mempercepat fitur 20%.",
        "Mengoordinasikan tim lintas fungsi (UI/UX, Backend, QA) melalui komunikasi yang efektif.",
      ],
      highlightsEn: [
        "Optimized Vue/SCSS frontend, cutting page load time by 25-35% (Lighthouse).",
        "Shipped reusable, design system-based components, accelerating feature delivery by 20%.",
        "Coordinated cross-functional teams (UI/UX, Backend, QA) through effective communication.",
      ],
    },
    {
      company: "SALT Indonesia",
      location: "Jakarta, Indonesia",
      role: "Frontend Developer",
      periodId: "Jan 2019 - Sept 2019",
      periodEn: "Jan 2019 - Sept 2019",
      highlightsId: [
        "Menyampaikan landing page & PDP dengan traffic tinggi (Nutriclub, Bebelac, SGM) dengan skor Lighthouse naik 15-25 poin.",
        "Membangun Kalkulator Tarif BTPN dengan validasi yang kuat, meningkatkan penyelesaian 10-20%.",
        "Menyusun SCSS dan menerapkan metodologi BEM untuk CSS modular, mempercepat iterasi 20%.",
      ],
      highlightsEn: [
        "Delivered high-traffic landing pages & PDPs (Nutriclub, Bebelac, SGM) with Lighthouse scores up 15-25 pts.",
        "Built BTPN Tariff Calculator with robust validation, increasing completion by 10-20%.",
        "Structured SCSS and implemented BEM methodology for modular CSS, accelerating iteration by 20%.",
      ],
    },
  ],
  projects: [
    {
      title: "MyCarrier Platform",
      descId:
        "Proyek web untuk Divisi Layanan Wholesale Telkom dengan landing page dan dashboard manajemen. Platform ini dirancang untuk menangani transaksi B2B dalam skala besar dengan antarmuka yang ramah pengguna. Fitur-fitur utama mencakup manajemen lead, drag-and-drop board untuk pelacakan penjualan, dan integrasi penawaran harga. Seluruh sistem telah dioptimalkan untuk memberikan performa muat halaman (page load) yang cepat dan aksesibilitas tingkat lanjut, memastikan operasional perusahaan berjalan mulus tanpa kendala teknis berarti.",
      descEn:
        "Web projects for Telkom's Wholesale Service Division with landing page and management dashboard. The platform is designed to handle large-scale B2B transactions with a user-friendly interface. Key features include lead management, drag-and-drop boards for sales tracking, and quotation integration. The entire system has been optimized for fast page load performance and advanced accessibility, ensuring smooth company operations without significant technical hurdles.",
      tags: ["React", "Dashboard", "Tailwind CSS", "Redux", "Corporate API"],
      gradient: "from-red-600 to-rose-900",
      shadow: "shadow-red-900/20",
      demoUrl: "https://mycarrier.telkom.co.id",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      title: "MoLea Wiz LMS",
      descId:
        "Platform pembelajaran (Onboarding) untuk karyawan memahami kebijakan dan pedoman perusahaan. Sistem ini menyajikan materi edukasi interaktif yang mencakup kuis, video pembelajaran, dan progres penyelesaian modul. WebView disematkan secara responsif agar karyawan dapat belajar melalui aplikasi mobile perusahaan, dengan dashboard komprehensif untuk HR guna memantau skor dan keterlibatan staf baru secara real-time.",
      descEn:
        "Learning platform (Onboarding) for employees to understand company policies and guidelines. The system presents interactive educational materials including quizzes, instructional videos, and module completion progress. WebViews are embedded responsively so employees can learn via the company's mobile app, with a comprehensive dashboard for HR to monitor scores and engagement of new staff in real-time.",
      tags: ["React", "WebView", "LMS", "Context API", "SCSS"],
      gradient: "from-blue-500 to-cyan-600",
      shadow: "shadow-blue-900/20",
      demoUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      title: "STANBRAIN",
      descId:
        "Platform pendidikan interaktif dan materi latihan untuk persiapan ujian akademik PKN STAN dan CPNS. Menyediakan ribuan bank soal TryOut berskala nasional secara bersamaan dengan sistem penilaian real-time yang akurat. Dibuat menggunakan Next.js untuk mendapatkan SEO dan kecepatan render halaman yang luar biasa, memastikan ribuan siswa dapat mengaksesnya secara bersamaan tanpa degradasi performa server.",
      descEn:
        "Interactive educational platform and practice materials for academic exam preparation (PKN STAN and CPNS). Provides thousands of nationwide TryOut question banks concurrently with an accurate real-time grading system. Built using Next.js to achieve outstanding SEO and page rendering speed, ensuring thousands of students can access it simultaneously without server performance degradation.",
      tags: ["Next.js", "EdTech", "Tailwind CSS", "Zustand", "Node.js"],
      gradient: "from-amber-500 to-orange-600",
      shadow: "shadow-orange-900/20",
      demoUrl: "https://stanbrain.com",
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
      ],
    },
    {
      title: "Blanja.com",
      descId:
        "Sistem e-commerce nasional yang dikembangkan bersama Telkom & eBay untuk jutaan pengguna. Membantu ribuan UMKM lokal berjualan dan menembus pasar internasional. Mengutamakan optimasi front-end yang kompleks, mengingat jumlah traffic yang sangat tinggi setiap harinya. Melibatkan refactoring arsitektur komponen Vue dan SCSS untuk menekan waktu muat dan menjamin antarmuka pengguna bebas lag di berbagai perangkat genggam.",
      descEn:
        "National e-commerce system co-developed by Telkom & eBay for millions of users. Helping thousands of local SMEs sell and penetrate international markets. Prioritizes complex front-end optimization, considering the extremely high daily traffic volume. Involved refactoring Vue component architecture and SCSS to reduce load times and ensure lag-free user interfaces across various handheld devices.",
      tags: ["Vue.js", "E-Commerce", "SCSS", "Vuex", "High Traffic"],
      gradient: "from-orange-600 to-red-600",
      shadow: "shadow-red-900/20",
      demoUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      title: "Aetra Workforce System",
      descId:
        "Sistem berbasis web PHP & Laravel untuk memfasilitasi tugas administratif dan pemantauan pekerjaan harian di PT Aetra Air Jakarta. Diciptakan untuk mempermudah mandor dan pekerja lapangan dalam melacak inventaris alat, absensi, hingga laporan tugas. Dilengkapi dengan manajemen role dan izin yang kompleks, serta integrasi pelaporan berbasis grafik agar manajemen atas dapat melakukan audit dengan mudah setiap akhir bulan.",
      descEn:
        "PHP & Laravel web-based system to facilitate administrative tasks and monitoring of daily work at PT Aetra Air Jakarta. Created to simplify the process for foremen and field workers in tracking tool inventory, attendance, and task reports. Equipped with complex role and permission management, as well as graphic-based reporting integration so top management can easily perform audits at the end of each month.",
      tags: ["PHP", "Laravel", "Management System", "Bootstrap", "MySQL"],
      gradient: "from-sky-500 to-blue-700",
      shadow: "shadow-sky-900/20",
      demoUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    {
      title: "Corporate Landing Pages",
      descId:
        "Pembuatan dan optimasi landing page korporat untuk merek terkemuka seperti Bebelac, Nutriclub, dan SGM. Target utama proyek ini adalah mencapai skor Lighthouse maksimal (>95) guna memastikan halaman muncul di halaman pertama mesin pencari. Diimplementasikan menggunakan pendekatan 'Mobile First', kompresi aset gambar (WebP), lazy loading ekstensif, serta penyematan tag meta yang presisi untuk kebutuhan analitik pemasaran.",
      descEn:
        "Creation and optimization of corporate landing pages for leading brands like Bebelac, Nutriclub, and SGM. The primary goal of these projects is achieving maximum Lighthouse scores (>95) to ensure the pages appear on the first page of search engines. Implemented using a 'Mobile First' approach, image asset compression (WebP), extensive lazy loading, and precise meta tag embedding for marketing analytic needs.",
      tags: ["HTML5/CSS3", "JavaScript", "SEO", "Performance", "WebP"],
      gradient: "from-purple-600 to-indigo-800",
      shadow: "shadow-purple-900/20",
      demoUrl: "#",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop",
      ],
    },
  ],
  certifications: [
    {
      title: "Ai For React Developers",
      issuer: "LinkedIn Learning",
      descId:
        "Pelatihan komprehensif tentang penerapan AI dan tools terkini dalam pengembangan ekosistem React.",
      descEn:
        "Comprehensive training on implementing AI and modern tools within the React ecosystem.",
    },
    {
      title: "React Server Side Rendering",
      issuer: "Linkedin Learning",
      descId:
        "Pemahaman mendalam tentang optimasi performa dan SEO menggunakan Server Side Rendering di React.",
      descEn:
        "In-depth understanding of performance optimization and SEO using Server Side Rendering in React.",
    },
    {
      title: "Next.js 15 & React",
      issuer: "Udemy",
      descId:
        "Menguasai framework Next.js 15, React versi terbaru, App Router, dan arsitektur aplikasi modern.",
      descEn:
        "Mastering Next.js 15 framework, latest React versions, App Router, and modern app architecture.",
    },
    {
      title: "Building Progressive Web Apps (PWAs)",
      issuer: "LinkedIn Learning",
      descId:
        "Teknik merubah web menjadi aplikasi layaknya native dengan fitur offline dan PWA.",
      descEn:
        "Techniques to transform web apps into native-like experiences with offline capabilities and PWA features.",
    },
    {
      title: "Cloud Powered Apps with Firebase",
      issuer: "LinkedIn Learning",
      descId:
        "Integrasi layanan Cloud (Firebase) untuk backend serverless, autentikasi, dan database real-time.",
      descEn:
        "Integrating Cloud services (Firebase) for serverless backend, authentication, and real-time database.",
    },
    {
      title: "Google IT Support Professional",
      issuer: "Coursera",
      descId:
        "Sertifikasi fundamental IT dari Google yang mencakup troubleshooting, sistem operasi, dan networking.",
      descEn:
        "Fundamental IT certification from Google covering troubleshooting, OS, and networking.",
    },
    {
      title: "Dasar-dasar Desain UX",
      issuer: "Google",
      descId:
        "Konsep dasar User Experience (UX), empati pengguna, dan desain yang human-centric.",
      descEn:
        "Fundamental concepts of User Experience (UX), user empathy, and human-centric design.",
    },
    {
      title: "Indonesia Scrum Product Owner",
      issuer: "myDigilearn",
      descId:
        "Sertifikasi Product Owner berfokus pada manajemen backlog dan penciptaan nilai dalam Agile/Scrum.",
      descEn:
        "Product Owner certification focusing on backlog management and value creation in Agile/Scrum.",
    },
    {
      title: "DevSecOps Overview & Tools",
      issuer: "myDigilearn",
      descId:
        "Penerapan siklus DevSecOps, keamanan aplikasi, dan otomatisasi menggunakan berbagai tools terkini.",
      descEn:
        "Implementation of the DevSecOps lifecycle, application security, and automation using modern tools.",
    },
  ],
};

import { ref, computed } from "vue";

const courses = [
  {
    title: "Complete Java Developer Course from Scratch",
    issuer: "Udemy",
  },
  {
    title: "Advanced Android Mobile Application",
    issuer: "Udemy",
  },
  {
    title:
      "Advanced Ethical Hacker: Penetration Testing & Privilege Escalation",
    issuer: "Udemy",
  },
  {
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan-Coursera",
  },
  {
    title: "Android Mobile Application Course: Kotlin & Java",
    issuer: "Udemy",
  },
  {
    title:
      "Artificial General Intelligence: The Technology, Impact, and Ethics",
    issuer: "LinkedIn Learning",
  },
  {
    title: "Automating Your Work with Custom GPTs (No Code Required)",
    issuer: "LinkedIn Learning",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS) Coursera",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS) Coursera",
  },
  {
    title: "AWS Fundamentals Lab Series",
    issuer: "Amazon Web Services (AWS) Coursera",
  },
  {
    title: "AWS re/Start Course",
    issuer: "Amazon Web Services (AWS)",
  },
  {
    title: "AWS re/Start Graduate",
    issuer: "Amazon Web Services (AWS)",
  },
  {
    title: "Becoming an Ethical Hacker: Mobile Applications and Phones",
    issuer: "Udemy",
  },
  {
    title: "Becoming an Ethical Hacker: Web Penetration Testing and Bug Bounty",
    issuer: "Udemy",
  },
  {
    title: "BOOST YOUR CAREER WITH AI",
    issuer: "Kiron Open Higher Education",
  },
  {
    title: "Build a free website with WordPress",
    issuer: "Coursera",
  },
  {
    title: "Creating a WordPress Website: Blog, E-Commerce, Corporate",
    issuer: "Udemy",
  },
  {
    title: "CSS3",
    issuer: "Hi/Coders",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Ethical Hacker Course",
    issuer: "Udemy",
  },
  {
    title: "Explore Emerging Tech",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Foundations of Linux",
    issuer: "Coursera",
  },
  {
    title: "Front-End Web Development with React",
    issuer: "The Hong Kong University of Science and Technology Coursera",
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "The Hong Kong University of Science and Technology Coursera",
  },
  {
    title: "Full Stack Web Programming",
    issuer: "Hi/Coders",
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & Amazon Web Services Coursera",
  },
  {
    title: "Getting Started with Threat Intelligence and Hunting",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Hands-On AI: Build Your Own GPTs",
    issuer: "LinkedIn Learning",
  },
  {
    title: "How to Boost Your Productivity with AI Tools (2023)",
    issuer: "LinkedIn Learning",
  },
  {
    title: "How to Research and Write Using Generative AI Tools (2023)",
    issuer: "LinkedIn Learning",
  },
  {
    title:
      "IBM SkillsBuild Presents: How to Become a Cybersecurity Professional",
    issuer: "IBM SkillsBuild",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan Coursera",
  },
  {
    title: "Introduction to CSS3",
    issuer: "University of Michigan Coursera",
  },
  {
    title: "Introduction to Cybersecurity Careers",
    issuer: "IBM / Coursera",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta Coursera",
  },
  {
    title: "Introduction to HTML5",
    issuer: "University of Michigan Coursera",
  },
  {
    title: "Java",
    issuer: "Sololearn",
  },
  {
    title: "Javascript & Advanced Programming",
    issuer: "Hi/Coders",
  },
  {
    title: "Javascript & Programming Basics",
    issuer: "Hi/Coders",
  },
  {
    title: "Node.js",
    issuer: "Hi/Coders",
  },
  {
    title: "Penetration Testing, Threat Hunting, and Cryptography",
    issuer: "Coursera",
  },
  {
    title: "Product Development using AutoCAD",
    issuer: "Coursera",
  },
  {
    title: "React",
    issuer: "Hi/Coders",
  },
  {
    title: "SAP Professional Fundamentals",
    issuer: "SAP Coursera",
  },
  {
    title: "Terraform Basics: Automate Provisioning of AWS EC2 Instances",
    issuer: "Coursera (Guided Projects) Coursera",
  },
  {
    title: "Terraform for absolute beginners",
    issuer: "Coursera",
  },
  {
    title: "The Most Up-to-Date Spring Course in Turkey: 2025",
    issuer: "Udemy",
  },
  {
    title: "The Potential Power of AI Is Beyond Belief with MattVidPro",
    issuer: "eLearning / Webinar (CompTIA platform)",
  },
  {
    title: "Understanding Bias in AI",
    issuer: "LinkedIn Learning",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
  },
];

const currentLang = ref("de");

const translations = {
  de: {
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      experience: "Erfahrung",
      education: "Ausbildung",
      certificates: "Zertifikate",
      contact: "Kontakt",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hallo, ich bin",
      description:
        "Junior Full Stack Developer. Entwickelt hochperformante Web-Apps mit KI-Unterstützung und modernen Technologien wie Vue.js & Vite.",
      viewProjects: "Projekte ansehen",
      contact: "Kontakt",
      scroll: "Scroll",
    },
    about: {
      subtitle: "Wer bin ich?",
      title: "Über mich",
      heading: "Leidenschaftlicher Entwickler & lebenslanges Lernen",
      p1: "Junior Full Stack Developer mit AWS Cloud Practitioner Zertifizierung. Leidenschaftlich für moderne Webtechnologien (Vue.js, Vite, Firebase) und Cloud-Lösungen.",
      p2: "Mit einem KI-gestützten Entwicklungsansatz nutze ich GitHub Copilot und moderne Webtechnologien, um hochperformante und skalierbare Webanwendungen zu erstellen. Ich liefere schnelles Prototyping und produktionsreife Lösungen mit modernen Stacks. Codequalität, nachhaltige Architektur und Benutzererfahrung stehen dabei an erster Stelle.",
      location: "Standort",
      email: "E-Mail",
      phone: "Telefon",
      languages: "Sprachen",
      cert: "Zertifizierung",
      license: "Führerschein",
      stats: {
        projects: "Projekte abgeschlossen",
        certs: "Zertifizierungen",
        training: "Full Stack Ausbildung",
        teaching: "Jahre Lehrerfahrung",
      },
    },
    skills: {
      subtitle: "Was ich kann",
      title: "Fähigkeiten & Technologien",
    },
    projects: {
      subtitle: "Was ich gebaut habe",
      title: "Projekte",
      live: "Live ansehen",
    },
    experience: {
      subtitle: "Meine Laufbahn",
      title: "Berufliche Erfahrung",
      jobs: [
        {
          title: "Freiwilliger Fullstack Developer",
          company: "Design Bees, Zürich (Remote)",
          period: "Aug 2022 – Feb 2023",
          points: [
            "Entwicklung mit Java Spring Boot und Angular",
            "Zusammenarbeit im Team und Teilnahme an Teamaktivitäten",
            "Anwendung gängiger Entwicklungstechniken und Werkzeuge",
          ],
        },
        {
          title: "3-Achsen-CNC-Maschinenbediener",
          company: "Holzverarbeitung, Hatay, Türkei",
          period: "Nov 2019 – Mai 2021",
          points: [
            "Bedienung von 3-Achsen-CNC-Maschinen für Holz",
            "Erstellung von Produktionsplänen",
            "Alphacam 3D-Programm Anwendung",
          ],
        },
        {
          title: "Textil Planungsspezialist",
          company: "Karaman Textile, Samsun, Türkei",
          period: "Dez 2016 – Aug 2017",
          points: [
            "Planung und Koordination von Textilproduktionsprozessen",
            "Optimierung von Produktionsabläufen",
          ],
        },
        {
          title: "Mathematiklehrer",
          company:
            "Staatliche Schulen – Ministerium für Nationale Bildung, Türkei",
          period: "Sep 2007 – Aug 2016",
          points: [
            "Unterricht in Mathematik und Naturwissenschaften",
            "Fortbildung in Bildungstechnologien",
            "Entwicklung von E-Learning-Inhalten",
          ],
        },
      ],
    },
    education: {
      subtitle: "Mein Werdegang",
      title: "Ausbildung",
      items: [
        {
          title: "AWS Re-Start + Cloud Kurs",
          institution: "AWS / Cloud Bootcamp",
          year: "2023",
          items: [
            "AWS Dienste (EC2, S3, IAM)",
            "Cloud-Sicherheit",
            "Terraform & CloudFormation",
            "Automatisierung",
          ],
        },
        {
          title: "Full Stack Web-Entwicklung",
          institution: "Hi-Coders (9 Monate)",
          year: "2022",
          items: [
            "HTML, CSS, JavaScript",
            "React, Angular, Vue.js",
            "Node.js & Java",
            "Responsive Design",
          ],
        },
        {
          title: "Lehramt Mathematik & Naturwiss.",
          institution: "Atatürk Universität, Erzurum",
          year: "2006",
          items: [
            "Pädagogik & Didaktik",
            "Physik, Chemie, Biologie",
            "Computergestützte Mathematik",
            "Laborunterricht",
          ],
        },
      ],
    },
    certificates: {
      subtitle: "Meine Erfolge",
      title: "Zertifikate",
      items: courses,
    },
    contact: {
      subtitle: "Schreib mir",
      title: "Kontakt",
      text: "Ich freue mich auf neue Möglichkeiten. Melde dich gern!",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Nachricht senden",
      placeholder: {
        name: "Dein Name",
        email: "deine@email.com",
        message: "Deine Nachricht...",
      },
    },
    footer: {
      rights: "© 2025 Cuma Kaya · Altdorf, Schweiz",
      built: "Built with",
    },
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hello, I am",
      description:
        "Junior Full Stack Developer. Building high-performance web apps with AI-supported development and modern stacks like Vue.js & Vite.",
      viewProjects: "View Projects",
      contact: "Contact",
      scroll: "Scroll",
    },
    about: {
      subtitle: "Who am I?",
      title: "About Me",
      heading: "Passionate Developer & Lifelong Learner",
      p1: "Junior Full Stack Developer with AWS Cloud Practitioner Certification. Passionate about modern web technologies (Vue.js, Vite, Firebase) and cloud solutions.",
      p2: "I use an AI-supported development approach with GitHub Copilot and modern web technologies to build high-performance, scalable web applications. Utilizing stacks like Vue.js, Vite, and Firebase, I deliver rapid prototyping and production-ready solutions. My priorities are code quality, sustainable architecture, and exceptional user experience.",
      location: "Location",
      email: "Email",
      phone: "Phone",
      languages: "Languages",
      cert: "Certification",
      license: "Driving License",
      stats: {
        projects: "Projects Completed",
        certs: "Certifications",
        training: "Full Stack Training",
        teaching: "Years Teaching Exp.",
      },
    },
    skills: {
      subtitle: "What I can do",
      title: "Skills & Technologies",
    },
    projects: {
      subtitle: "What I built",
      title: "Projects",
      live: "View Live",
    },
    experience: {
      subtitle: "My Career",
      title: "Professional Experience",
      jobs: [
        {
          title: "Volunteer Fullstack Developer",
          company: "Design Bees, Zurich (Remote)",
          period: "Aug 2022 – Feb 2023",
          points: [
            "Development with Java Spring Boot and Angular",
            "Collaboration within the team and participation in team activities",
            "Application of common development techniques and tools",
          ],
        },
        {
          title: "3-Axis CNC Machine Operator",
          company: "Woodworking, Hatay, Turkey",
          period: "Nov 2019 – May 2021",
          points: [
            "Operation of 3-axis CNC machines for wood",
            "Creation of production plans",
            "Alphacam 3D program application",
          ],
        },
        {
          title: "Textile Planning Specialist",
          company: "Karaman Textile, Samsun, Turkey",
          period: "Dec 2016 – Aug 2017",
          points: [
            "Planning and coordination of textile production processes",
            "Optimization of production workflows",
          ],
        },
        {
          title: "Mathematics Teacher",
          company: "State Schools – Ministry of National Education, Turkey",
          period: "Sep 2007 – Aug 2016",
          points: [
            "Teaching Mathematics and Science",
            "Training in educational technologies",
            "Development of e-learning content",
          ],
        },
      ],
    },
    education: {
      subtitle: "My Background",
      title: "Education",
      items: [
        {
          title: "AWS Re-Start + Cloud Course",
          institution: "AWS / Cloud Bootcamp",
          year: "2023",
          items: [
            "AWS Services (EC2, S3, IAM)",
            "Cloud Security",
            "Terraform & CloudFormation",
            "Automation",
          ],
        },
        {
          title: "Full Stack Web Development",
          institution: "Hi-Coders (9 months)",
          year: "2022",
          items: [
            "HTML, CSS, JavaScript",
            "React, Angular, Vue.js",
            "Node.js & Java",
            "Responsive Design",
          ],
        },
        {
          title: "Mathematics & Science Education",
          institution: "Atatürk University, Erzurum",
          year: "2006",
          items: [
            "Pedagogy & Didactics",
            "Physics, Chemistry, Biology",
            "Computer-aided Mathematics",
            "Laboratory Teaching",
          ],
        },
      ],
    },
    certificates: {
      subtitle: "My Achievements",
      title: "Certificates",
      items: courses,
    },
    contact: {
      subtitle: "Write me",
      title: "Contact",
      text: "I look forward to new opportunities. Feel free to contact me!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      placeholder: {
        name: "Your Name",
        email: "your@email.com",
        message: "Your Message...",
      },
    },
    footer: {
      rights: "© 2025 Cuma Kaya · Altdorf, Switzerland",
      built: "Built with",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      certificates: "Certificats",
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      role: "Développeur Full Stack",
      greeting: "Bonjour, je suis",
      description:
        "Développeur Full Stack Junior. Développement d'applications web performantes assisté par l'IA et technologies modernes comme Vue.js & Vite.",
      viewProjects: "Voir Projets",
      contact: "Contact",
      scroll: "Défiler",
    },
    about: {
      subtitle: "Qui suis-je?",
      title: "À propos de moi",
      heading: "Développeur Passionné & Apprenant à Vie",
      p1: "Développeur Full Stack Junior certifié AWS Cloud Practitioner. Passionné par les technologies web modernes (Vue.js, Vite, Firebase) et les solutions cloud.",
      p2: "J'utilise une approche de développement assistée par l'IA avec GitHub Copilot et des technologies web modernes pour créer des applications performantes et évolutives. Avec des stacks comme Vue.js, Vite et Firebase, je produis des prototypages rapides et des solutions prêtes pour la production. La qualité du code, l'architecture durable et l'expérience utilisateur sont mes priorités.",
      location: "Lieu",
      email: "E-mail",
      phone: "Téléphone",
      languages: "Langues",
      cert: "Certification",
      license: "Permis",
      stats: {
        projects: "Projets terminés",
        certs: "Certifications",
        training: "Formation Full Stack",
        teaching: "Années d'enseignement",
      },
    },
    skills: {
      subtitle: "Ce que je sais faire",
      title: "Compétences & Technologies",
    },
    projects: {
      subtitle: "Ce que j'ai construit",
      title: "Projets",
      live: "Voir Live",
    },
    experience: {
      subtitle: "Mon parcours",
      title: "Expérience Professionnelle",
      jobs: [
        {
          title: "Développeur Fullstack Bénévole",
          company: "Design Bees, Zurich (Télétravail)",
          period: "Aoû 2022 – Fév 2023",
          points: [
            "Développement avec Java Spring Boot et Angular",
            "Collaboration en équipe et participation aux activités d'équipe",
            "Utilisation des techniques et outils de développement courants",
          ],
        },
        {
          title: "Opérateur CNC 3 Axes",
          company: "Travail du bois, Hatay, Turquie",
          period: "Nov 2019 – Mai 2021",
          points: [
            "Utilisation de machines CNC 3 axes pour le bois",
            "Création de plans de production",
            "Application du programme Alphacam 3D",
          ],
        },
        {
          title: "Spécialiste Planification Textile",
          company: "Karaman Textile, Samsun, Turquie",
          period: "Déc 2016 – Aoû 2017",
          points: [
            "Planification et coordination des processus de production textile",
            "Optimisation des flux de production",
          ],
        },
        {
          title: "Professeur de Mathématiques",
          company:
            "Écoles publiques – Ministère de l'Éducation Nationale, Turquie",
          period: "Sep 2007 – Aoû 2016",
          points: [
            "Enseignement des mathématiques et des sciences",
            "Formation aux technologies éducatives",
            "Développement de contenu e-learning",
          ],
        },
      ],
    },
    education: {
      subtitle: "Mon parcours",
      title: "Formation",
      items: [
        {
          title: "AWS Re-Start + Cours Cloud",
          institution: "AWS / Cloud Bootcamp",
          year: "2023",
          items: [
            "Services AWS (EC2, S3, IAM)",
            "Sécurité Cloud",
            "Terraform & CloudFormation",
            "Automatisation",
          ],
        },
        {
          title: "Développement Web Full Stack",
          institution: "Hi-Coders (9 mois)",
          year: "2022",
          items: [
            "HTML, CSS, JavaScript",
            "React, Angular, Vue.js",
            "Node.js & Java",
            "Responsive Design",
          ],
        },
        {
          title: "Master Enseignement Math. & Sc.",
          institution: "Université Atatürk, Erzurum",
          year: "2006",
          items: [
            "Pédagogie & Didactique",
            "Physique, Chimie, Biologie",
            "Mathématiques assistées par ordinateur",
            "Enseignement en laboratoire",
          ],
        },
      ],
    },
    certificates: {
      subtitle: "Mes Réalisations",
      title: "Certificats",
      items: courses,
    },
    contact: {
      subtitle: "Écrivez-moi",
      title: "Contact",
      text: "Je suis ouvert à de nouvelles opportunités. N'hésitez pas à me contacter !",
      name: "Nom",
      email: "E-mail",
      message: "Message",
      send: "Envoyer Message",
      placeholder: {
        name: "Votre Nom",
        email: "votre@email.com",
        message: "Votre Message...",
      },
    },
    footer: {
      rights: "© 2025 Cuma Kaya · Altdorf, Suisse",
      built: "Construit avec",
    },
  },
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      projects: "Projeler",
      certificates: "Sertifikalar",
      experience: "Deneyim",
      education: "Eğitim",
      contact: "İletişim",
    },
    hero: {
      role: "Full Stack Geliştirici",
      greeting: "Merhaba, ben",
      description:
        "Junior Full Stack Geliştirici. AI destekli geliştirme, Vue.js & Vite gibi modern teknolojilerle yüksek performanslı web uygulamaları geliştiriyorum.",
      viewProjects: "Projeleri Gör",
      contact: "İletişim",
      scroll: "Kaydır",
    },
    about: {
      subtitle: "Ben kimim?",
      title: "Hakkımda",
      heading: "Tutkulu Geliştirici & Yaşam Boyu Öğrenci",
      p1: "AWS Cloud Practitioner sertifikalı Junior Full Stack Geliştirici. Modern web teknolojileri (Vue.js, Vite, Firebase) ve bulut çözümleri konusunda tutkuluyum.",
      p2: "AI destekli geliştirme yaklaşımıyla, GitHub Copilot ve modern web teknolojilerini kullanarak yüksek performanslı, ölçeklenebilir web uygulamaları geliştiriyorum. Vue.js, Vite ve Firebase gibi modern stack’lerle hem hızlı prototipleme hem de production-ready çözümler sunuyorum. Önceliğim her zaman kod kalitesi, sürdürülebilir mimari ve kullanıcı deneyimidir.",
      location: "Konum",
      email: "E-posta",
      phone: "Telefon",
      languages: "Diller",
      cert: "Sertifika",
      license: "Ehliyet",
      stats: {
        projects: "Tamamlanan Projeler",
        certs: "Sertifikalar",
        training: "Full Stack Eğitimi",
        teaching: "Yıl Öğretmenlik Deneyimi",
      },
    },
    skills: {
      subtitle: "Neler yapabilirim",
      title: "Yetenekler & Teknolojiler",
    },
    projects: {
      subtitle: "Neler geliştirdim",
      title: "Projeler",
      live: "Canlı Gör",
    },
    experience: {
      subtitle: "Kariyerim",
      title: "Profesyonel Deneyim",
      jobs: [
        {
          title: "Gönüllü Fullstack Geliştirici",
          company: "Design Bees, Zürih (Uzaktan)",
          period: "Ağu 2022 – Şub 2023",
          points: [
            "Java Spring Boot ve Angular ile geliştirme",
            "Takım içi işbirliği ve ekip aktivitelerine katılım",
            "Yaygın geliştirme teknikleri ve araçlarının kullanımı",
          ],
        },
        {
          title: "3 Eksenli CNC Makine Operatörü",
          company: "Ahşap İşleme, Hatay, Türkiye",
          period: "Kas 2019 – May 2021",
          points: [
            "Ahşap için 3 eksenli CNC makinelerinin kullanımı",
            "Üretim planlarının oluşturulması",
            "Alphacam 3D program uygulaması",
          ],
        },
        {
          title: "Tekstil Planlama Uzmanı",
          company: "Karaman Tekstil, Samsun, Türkiye",
          period: "Ara 2016 – Ağu 2017",
          points: [
            "Tekstil üretim süreçlerinin planlanması ve koordinasyonu",
            "Üretim akışlarının optimizasyonu",
          ],
        },
        {
          title: "Matematik Öğretmeni",
          company: "Devlet Okulları – Milli Eğitim Bakanlığı, Türkiye",
          period: "Eyl 2007 – Ağu 2016",
          points: [
            "Matematik ve Fen Bilimleri Öğretimi",
            "Eğitim teknolojileri eğitimi",
            "E-öğrenme içeriği geliştirme",
          ],
        },
      ],
    },
    education: {
      subtitle: "Geçmişim",
      title: "Eğitim",
      items: [
        {
          title: "AWS Re-Start + Bulut Kursu",
          institution: "AWS / Cloud Bootcamp",
          year: "2023",
          items: [
            "AWS Hizmetleri (EC2, S3, IAM)",
            "Bulut Güvenliği",
            "Terraform & CloudFormation",
            "Otomasyon",
          ],
        },
        {
          title: "Full Stack Web Geliştirme",
          institution: "Hi-Coders (9 ay)",
          year: "2022",
          items: [
            "HTML, CSS, JavaScript",
            "React, Angular, Vue.js",
            "Node.js & Java",
            "Responsive Tasarım",
          ],
        },
        {
          title: "Matematik & Fen Bil. Eğitimi",
          institution: "Atatürk Üniversitesi, Erzurum",
          year: "2006",
          items: [
            "Pedagoji & Didaktik",
            "Fizik, Kimya, Biyoloji",
            "Bilgisayar Destekli Matematik",
            "Laboratuvar Öğretimi",
          ],
        },
      ],
    },
    certificates: {
      subtitle: "Başarılarım",
      title: "Sertifikalar",
      items: courses,
    },
    contact: {
      subtitle: "Bana yazın",
      title: "İletişim",
      text: "Yeni fırsatlara açığım. Benimle iletişime geçmekten çekinmeyin!",
      name: "İsim",
      email: "E-posta",
      message: "Mesaj",
      send: "Mesaj Gönder",
      placeholder: {
        name: "İsminiz",
        email: "senin@email.com",
        message: "Mesajınız...",
      },
    },
    footer: {
      rights: "© 2025 Cuma Kaya · Altdorf, İsviçre",
      built: "ile yapıldı",
    },
  },
};

export function useLanguage() {
  const t = computed(() => translations[currentLang.value]);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLang.value = lang;
    }
  };

  return {
    currentLang,
    t,
    setLanguage,
  };
}

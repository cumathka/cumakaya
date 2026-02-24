import { ref, computed } from "vue";

const currentLang = ref("de");

const translations = {
  de: {
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      experience: "Erfahrung",
      education: "Ausbildung",
      contact: "Kontakt",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hallo, ich bin",
      description:
        "Junior Full Stack Developer mit AWS Cloud Practitioner Zertifizierung. Leidenschaftlich für moderne Webtechnologien und Cloud-Lösungen aus Altdorf, Schweiz.",
      viewProjects: "Projekte ansehen",
      contact: "Kontakt",
      scroll: "Scroll",
    },
    about: {
      subtitle: "Wer bin ich?",
      title: "Über mich",
      heading: "Leidenschaftlicher Entwickler & lebenslanges Lernen",
      p1: "Mit 9 Monaten Ausbildung bei Hi-Coders und einer AWS Cloud Practitioner Zertifizierung bringe ich frisches technisches Wissen und einen einzigartigen pädagogischen Hintergrund mit. Meine Stärke: Komplexe Konzepte klar kommunizieren.",
      p2: "Als Quereinsteiger verbinde ich analytisches Denken aus dem Lehrberuf mit moderner Softwareentwicklung. Ich bin motiviert, in agilen Teams zu wachsen und lösungsorientiert zu arbeiten.",
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
      title: "Ausbildung & Kurse",
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
      contact: "Contact",
    },
    hero: {
      role: "Full Stack Developer",
      greeting: "Hello, I am",
      description:
        "Junior Full Stack Developer with AWS Cloud Practitioner Certification. Passionate about modern web technologies and cloud solutions from Altdorf, Switzerland.",
      viewProjects: "View Projects",
      contact: "Contact",
      scroll: "Scroll",
    },
    about: {
      subtitle: "Who am I?",
      title: "About Me",
      heading: "Passionate Developer & Lifelong Learner",
      p1: "With 9 months of training at Hi-Coders and an AWS Cloud Practitioner certification, I bring fresh technical knowledge and a unique educational background. My strength: Communicating complex concepts clearly.",
      p2: "As a career changer, I combine analytical thinking from teaching with modern software development. I am motivated to grow in agile teams and work in a solution-oriented manner.",
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
      title: "Education & Courses",
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
      education: "Formation",
      contact: "Contact",
    },
    hero: {
      role: "Développeur Full Stack",
      greeting: "Bonjour, je suis",
      description:
        "Développeur Full Stack Junior certifié AWS Cloud Practitioner. Passionné par les technologies web modernes et les solutions cloud, basé à Altdorf, Suisse.",
      viewProjects: "Voir Projets",
      contact: "Contact",
      scroll: "Défiler",
    },
    about: {
      subtitle: "Qui suis-je?",
      title: "À propos de moi",
      heading: "Développeur Passionné & Apprenant à Vie",
      p1: "Avec 9 mois de formation chez Hi-Coders et une certification AWS Cloud Practitioner, j'apporte des connaissances techniques fraîches et une expérience pédagogique unique. Ma force : Communiquer clairement des concepts complexes.",
      p2: "En reconversion professionnelle, je combine la pensée analytique de l'enseignement avec le développement logiciel moderne. Je suis motivé pour grandir au sein d'équipes agiles et travailler de manière orientée solutions.",
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
      title: "Formation & Cours",
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
      experience: "Deneyim",
      education: "Eğitim",
      contact: "İletişim",
    },
    hero: {
      role: "Full Stack Geliştirici",
      greeting: "Merhaba, ben",
      description:
        "AWS Cloud Practitioner sertifikalı Junior Full Stack Geliştirici. Modern web teknolojileri ve bulut çözümleri konusunda tutkulu, Altdorf, İsviçre'den.",
      viewProjects: "Projeleri Gör",
      contact: "İletişim",
      scroll: "Kaydır",
    },
    about: {
      subtitle: "Ben kimim?",
      title: "Hakkımda",
      heading: "Tutkulu Geliştirici & Yaşam Boyu Öğrenci",
      p1: "Hi-Coders'da 9 aylık eğitim ve AWS Cloud Practitioner sertifikası ile taze teknik bilgi ve benzersiz bir pedagojik geçmiş getiriyorum. Güçlü yönüm: Karmaşık kavramları net bir şekilde iletmek.",
      p2: "Kariyer değiştiren biri olarak, öğretmenlikten gelen analitik düşünceyi modern yazılım geliştirme ile birleştiriyorum. Çevik ekiplerde büyümeye ve çözüm odaklı çalışmaya motiveyim.",
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
      title: "Eğitim & Kurslar",
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

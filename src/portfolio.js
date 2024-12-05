/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Fitash's Portfolio",
  description:
    "A researcher, teacher, software developer, and tester. My research and teaching interests include trustworthy AI, software testing and low-code, no-code modeling. With more than a decade of experience in software development, I transform my ideas into practical, impactful solutions.",
  og: {
    title: "Fitash UL HAQ Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Fitash UL HAQ",
  logo_name: "FitashULHAQ",
  //  nickname:
  subTitle:
    "A researcher, teacher, software developer, and tester. My research and teaching interests include trustworthy AI, software testing and low-code, no-code modeling. With more than a decade of experience in software development, I transform my ideas into practical, impactful solutions.",
  resumeLink: "",
  portfolio_repository: "https://github.com/FitashUlHaq",
  githubProfile: "https://github.com/FitashUlHaq",
};

const socialMediaLinks = [
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=ABUhd7YAAAAJ&hl=en",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google
    backgroundColor: "#4285F4", // Reference https://simpleicons.org/?q=instagram
  },

  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/fitash/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  //  {
  //    name: "YouTube",
  //    link: "https://youtube.com/c/DevSense19",
  //    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  //  },
  {
    name: "gmail",
    link: "mailto:fitash.haq@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/FitashUlHaq",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Github",
    link: "https://github.com/FitashUlHaq",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  //  {
  //    name: "Facebook",
  //    link: "https://www.facebook.com/laymanbrother.19/",
  //    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  //  },
];

const skills = {
  data: [
    {
      title: "Trustworthy AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developed an approach to generate test data using many-objective search algorithms tailored for test suite generation to generate test data for DNN with many outputs.",
        "⚡ Developed an automated approach, SAMOTA, to generate data for DNN-enabled automated driving systems, using many-objective search and surrogate-assisted optimisation",
        "⚡ Developed an an automated approach, MORLAT, to dynamically interact with the environment during simulation. MORLAT relies on reinforcement learning and many-objective optimisation.",
        "⚡ Conducted an empirical study to compare offline testing and online testing in the context of Automated Driving Systems (ADS). We also investigate whether simulator-generated data can be used in lieu of real-world data. ",
        "⚡ and much more...",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Testing Autonomous car",
          fontAwesomeClassname: "mdi:car-autonomous",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Surrogate Models",
          fontAwesomeClassname: "eos-icons:neural-network",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "carbon:machine-learning",
        },
        {
          skillName: "Many-Objective Search",
          fontAwesomeClassname: "material-symbols:map-search-outline",
        },
        {
          skillName: "Reinforcement Learning",
          imageSrc: "reinforcementLearning.png",
        },
        {
          skillName: "CARLA Simulator",
          imageSrc: "carla-black-m.png",
        },
        {
          skillName: "PreScan Simulator",
          imageSrc: "prescan.png",
        },
        {
          skillName: "Blender Simulator",
          imageSrc: "blender.png",
        },
        {
          skillName: "BeamNG Simulator",
          imageSrc: "beamng.png",
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Low-code No-code Modelling",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Extended a low-code tool, BESSER, to automates the packaging, provisioning, and deployment of the system on GCP and AWS",
        "⚡ Extended a low-code tool, BESSER, to test the deployed application and verify the correct functionality",
        "⚡ and much more...",
      ],
      softwareSkills: [
        {
          skillName: "UML",
          fontAwesomeClassname: "simple-icons:uml",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Selenium",
          imageSrc: "selenium.svg",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designed and implemented a tool for testing automated driving systems using Python and machine learning, enhancing system reliability and performance.",
        "⚡ Developed a robust testing framework for software deployed on hardware systems, leveraging Python and machine learning to ensure seamless integration and optimal functionality.",
        "⚡ Built and deployed multiple web-based solutions for diverse enterprise clients, delivering scalable, user-centric applications tailored to business needs.",
        "⚡ and so on...",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "skill-icons:java-light",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "CSharp",
          fontAwesomeClassname: "skill-icons:cs",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "skill-icons:cpp",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "mysql",
          fontAwesomeClassname: "skill-icons:mysql-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "skill-icons:r-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "GoLang",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Latex",
          fontAwesomeClassname: "skill-icons:latex-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "DotNet",
          fontAwesomeClassname: "skill-icons:dotnet",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "skill-icons:gitlab-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Eclipse",
          fontAwesomeClassname: "skill-icons:eclipse-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "skill-icons:github-dark",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Raspberry-Pi",
          fontAwesomeClassname: "skill-icons:raspberrypi-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Pycharm",
          fontAwesomeClassname: "skill-icons:pycharm-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Blender",
          fontAwesomeClassname: "skill-icons:blender-light",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Atom",
          fontAwesomeClassname: "skill-icons:atom",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Luxembourg",
      subtitle: "PhD in Computer Science",
      logo_path: "unilu.png",
      alt_name: "Uni lu",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Thesis: Practical Automated Testing of Deep Learning Models and Systems.",
        "⚡ Worked with IEE (https://iee-sensing.com/) to perform verification activities for their DNN-based drowsiness detection system (https://orbilu.uni.lu/handle/10993/46959).",
        "⚡ Worked on H2020 funded project called DevOps for Complex Cyber-physical Systems (COSMOS).",
      ],
      website_link: "https://www.uni.lu/en/",
    },
    {
      title: "National University of Computer and Emerging Sciences",
      subtitle: "M.S. in Software Engineering",
      logo_path: "nuces.png",
      alt_name: "NUCES-FAST",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ CGPA: 4.0",
        "⚡ Thesis: An approach for automated test generation of safety system to achieve certification goals",
        "⚡ Received Gold Medal for outstanding performance in studies",
      ],
      website_link: "https://www.nu.edu.pk/",
    },
    {
      title: "National University of Computer and Emerging Sciences",
      subtitle: "B.S. in Computer Science",
      logo_path: "nuces.png",
      alt_name: "NUCES-FAST",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ CGPA: 3.79",
        "⚡ Studied basic and advanced courses related to computer science",
        "⚡ Received Silver and Bronze medals for outstanding performance in studies",
      ],
      website_link: "https://www.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Teaching and Internship",
  description:
    "I have worked with many multinational companies, and taught courses as professor and teacher assistant.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "R&T Scientist",
          company: "Luxembourg Institute of Science and Techonology",
          company_url: "https://www.list.lu/",
          logo_path: "LIST_logo.jpg",
          duration: "Jul 2024 - Present",
          location: "Luxembourg",
          description:
            "Worked on developing low-code tool BESSER, and extended with multi-cloud deployment capabilities. Furthermore, developed an Object constraint language (OCL) interpreter for BESSER models.",
          color: "#000000",
        },
        {
          title: "Junior R&T Associate",
          company: "Luxembourg Institute of Science and Techonology",
          company_url: "https://www.list.lu/",
          logo_path: "LIST_logo.jpg",
          duration: "Jan 2024 - Jun 2024",
          location: "Luxembourg",
          description:
            "Worked on developing low-code tool BESSER, and written research proposal for EU grants",
          color: "#000000",
        },
        {
          title: "Research Associate",
          company: "University of Luxembourg",
          company_url: "https://www.uni.lu/en/",
          logo_path: "unilu.png",
          duration: "Dec 2022 - Dec 2023",
          location: "Luxembourg, Luxembourg",
          description:
            "Worked on H2020 funded project called DevOps for Complex Cyber-physical Systems (COSMOS) and developed approaches for testing cyber-physical systems",
          color: "#0879bf",
        },
        {
          title: "Doctoral Researcher",
          company: "University of Luxembourg",
          company_url: "https://www.uni.lu/en/",
          logo_path: "unilu.png",
          duration: "Feb 2019 - Nov 2022",
          location: "Luxembourg",
          description:
            "Worked with IEE (https://iee-sensing.com/) to perform verification activities for their DNN-based drowsiness detection system (https://orbilu.uni.lu/handle/10993/46959). Furthermore, developed approaches for testing DNN-enabled autonomous driving systems.",
          color: "#9b1578",
        },
        {
          title: "Team Lead",
          company: "Quest",
          company_url: "http://www.questlab.pk/",
          logo_path: "quest_logo.jpg",
          duration: "Jun 2017 - Sep 2018",
          location: "Islamabad, Pakistan",
          description:
            "Successfully lead a team of developer to develop and deploy Flight Dynamics Simulator on integrated modular avionics",
          color: "#fc1f20",
        },
        {
          title: "Research Engineer",
          company: "Quest",
          company_url: "http://www.questlab.pk/",
          logo_path: "quest_logo.jpg",
          duration: "Sep 2016 - May 2017",
          location: "Islamabad, Pakistan",
          description:
            "Developed Source Code coverage analyser for embedded System (SCCA). SCCA includes instrumenting code and executing it on the target machine to calculate the structural coverage information.",
          color: "#fc1f20",
        },
        {
          title: "Research Assistant",
          company: "Quest",
          company_url: "http://www.questlab.pk/",
          logo_path: "quest_logo.jpg",
          duration: "May 2016 - Aug 2017",
          location: "Islamabad, Pakistan",
          description:
            "Worked on model based test data generation tool that produces test data by solving OCL constraints using search algorithms. It is developed in Java using Eclipse IDE and EMF (Eclipse Modeling Framework).",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Teaching",
      experiences: [
        {
          title: "Modelling With UML",
          company: "University of Luxembourg",
          company_url: "https://www.uni.lu/en/",
          logo_path: "unilu.png",
          duration: "Sept 2024 - Dec 2024",
          location: "Luxembourg, Luxembourg",
          description:
            "Taught 3rd Semester bachelor students the Unified Modeling Language (UML) for the analysis and design of software systems. Furthmore, we use UML to generate code and deploy the app on Google cloud platform (GCP).",
          color: "#000000",
        },
        {
          title: "Advanced Programming - Teacher assistant",
          company: "National University of Computer and Emerging Sciences",
          company_url: "https://www.nu.edu.pk/",
          logo_path: "nuces.png",
          duration: "2016",
          location: "Islamabad, Pakistan",
          description:
            "I helped professor teaching students the advanced concepts of programming in Java language, including J2SE and J2EE.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Quest - Intern",
          company: "Quest",
          company_url: "http://www.questlab.pk",
          logo_path: "quest_logo.jpg",
          duration: "Jun 2015 - Aug 2015",
          location: "Islamabad, Pakistan",
          description: "Worked on Automated Testing Toolset for games",
          color: "#000000",
        },
        {
          title: "Programmr - Intern",
          company: "Programmr",
          company_url: "https://www.linkedin.com/company/programr-com/",
          logo_path: "programmr.jpg",
          duration: "Jul 2013 - Sep 2013",
          location: "Remote",
          description: "Created programming exercises and provided solutions",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Publications & Achievements",
  description:
    "My research interests includes trustworthy AI, software testing, low-code and no-code approaches. ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Selected Publications",
  description: "Some of my published research Articles",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "extending-low-code",
      name:
        "Extending a Low-Code Tool with Multi-cloud Deployment Capabilities (⭐ Received Best Paper Award)",

      createdAt: "2024",
      description: "Published at European Conference on Software Architecture",
      url: "https://link.springer.com/chapter/10.1007/978-3-031-71246-3_5",
    },
    {
      id: "efficient-online",
      name:
        "Efficient online testing for DNN-enabled systems using surrogate-assisted and many-objective optimization (⭐ Received Best Paper Award)",
      createdAt: "2022",
      description:
        "Published at International Conference of Software Engineering (ICSE) 2022",
      url: "https://dl.acm.org/doi/pdf/10.1145/3510003.3510188",
    },
    {
      id: "efficient-RL",
      name:
        "Many-objective reinforcement learning for online testing of dnn-enabled systems",
      createdAt: "2023",
      description:
        "Published at International Conference of Software Engineering (ICSE) 2023",
      url: "https://dl.acm.org/doi/abs/10.1109/ICSE48619.2023.00155",
    },
    {
      id: "keypoints-online",
      name:
        "Automatic test suite generation for key-points detection DNNs using many-objective search (experience paper)",
      createdAt: "2021",
      description:
        "Published at International Conference of Software Engineering (ICSE) 2022",
      url: "https://dl.acm.org/doi/pdf/10.1145/3510003.3510188",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description: "Lets get in touch!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Porte de france",
    locality: "Esch Sur Alzette",
    country: "Luxembourg",
    region: "Luxembourg",
    postalCode: "4360",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Yhzmt3g2ZjZCv4nk9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

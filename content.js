/* Edit this file to update the site. Blank fields stay hidden or say "Not provided".
 * Sources and verification limits are documented in SOURCES.md.
 * Images are blank until you add your own files; no placeholder is a real chip photo.
 */
window.PORTFOLIO = {
  profile: {
    name: "Yuechen He",
    role: "Ph.D. student\nChip design",
    affiliation: "New York University",
    location: "New York, NY",
    initials: "YH",
    portrait: "./assets/portrait.jpg", // e.g. "./assets/portrait.jpg"
    portraitAlt: "Portrait of Yuechen He",
    email: "yh6574@nyu.edu/yh3657@columbia.edu",
    github: "",
    scholar: "https://scholar.google.com/citations?user=VnyashIAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/yuechenhe/",
    cv: "", // Add the actual PDF before setting "./assets/CV.pdf".
    about: [
      "I am Yuechen He, a Ph.D. student at New York University working in chip design. I studied in Columbia University as a Master, where I was honored taught by some real circuit masters such as prof.Peter Kinget, prof.Tod Dickson, prof. Ken Shepard. They led me into the realm of integrated circuits. My undergraduate studies were at the University of Electronic Science and Technology of China (UESTC).",
      "My design work includes a ultra low-power sensor readout IC and neural recording system front-end. Outside my academic work, I enjoy photography and cycling."
    ]
  },
  // Add only complete, verified paper records. See README for the object format.
  publications: [
    {
    title: "A 6.5-pJ/Step Reconfigurable Readout IC With Duty-Cycled Resistor and Switched Capacitor for High Linearity RC-to-Digital Converter",
    authors: "Siyuan Xu, Yingrui Wei, Yuechen He, and Peter R. Kinget",
    venue: "IEEE Journal of Solid-State Circuits",
    year: "2026",
    url: "https://ieeexplore.ieee.org/document/11459452/",
    note: ""
  },
  {
    title: "A 6.5pJ/Step Highly Linear Readout IC with Duty-Cycled Resistor and Switched Capacitor for Resistive and Capacitive Sensor Interface",
    authors: "Siyuan Xu, Yingrui Wei, Yuechen He, and Peter R. Kinget",
    venue: "IEEE European Solid-State Electronics Research Conference (ESSERC), pp. 561–564",
    year: "2025",
    url: "https://ieeexplore.ieee.org/document/11214065/",
    note: "Siyuan Xu, Yingrui Wei, and Yuechen He contributed equally."
  },
  {
    title: "Privacy Preserved Federated Learning for Skin Cancer Diagnosis",
    authors: "Yifan Li, Yuechen He, Yufei Fu, and Sizhe Shan",
    venue: "IEEE 3rd International Conference on Power, Electronics and Computer Applications (ICPECA), pp. 27–33",
    year: "2023",
    url: "https://ieeexplore.ieee.org/document/10075862/",
    note: ""
  }
  ],
  chips: [
    {
      title: "LVSensor",
      category: "Sensor readout IC",
      status: "Fabricated and tested · TSMC 65 nm",
      image: "",
      alt: "",
      imagePlaceholder: "Die photograph to be added",
      description: "A low-power front end for humidity and temperature sensing, developed with Yingrui Wei and Siyuan Xu.",
      detail: "LVSensor combines capacitive humidity sensing and resistive temperature sensing. The Columbia project page documents design, fabrication and testing in TSMC 65 nm. Team: Yingrui Wei, Yuechen He and Siyuan Xu; faculty guidance: Peter Kinget. An original die photograph and individual contribution details can be added here.",
      url: "https://www.ee.columbia.edu/~kinget/EE6350_S24/LVSENSOR/index.html",
      sourceLabel: "Project website"
    }
  ],
  education: [
  {
    institution: "New York University",
    degree: "Ph.D. in Electrical and Electronics Engineering",
    years: "Aug 2026 – Present",
    details: "Expected graduation: May 2032. SoE Fellowship, 2026.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    institution: "Columbia University",
    degree: "M.S. in Electrical and Electronics Engineering",
    years: "Aug 2023 – May 2025",
    details: "GPA: 4.1/4.33. Honors: MS EE Honors Student (2024); MS Teaching Award (2025); Master of Science Award of Excellence (2026).",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    institution: "University of Electronic Science and Technology of China (UESTC)",
    degree: "B.Eng. in Microelectronics Engineering",
    years: "Aug 2019 – Jun 2023",
    details: "Overall grade: 89/100. Final-year project: Analytical Model and Theoretical Analysis for Beveled Termination in Gallium Nitride Devices.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    institution: "Shijiazhuang No. 2 High School",
    degree: "Secondary Education",
    years: "Aug 2016 – Jun 2019",
    details: "",
    url: ""
  }
],
  // This is a partial record, not a full transcript. Grade is intentionally blank.
  courses: [
    {
      code: "EE6350",
      title: "VLSI Design Lab",
      institution: "Columbia University",
      category: "Integrated circuits",
      term: "Spring 2024",
      description: "Integrated-circuit design, simulation, layout and verification, followed by fabrication and chip testing. Team project: LVSensor.",
      instructor: "Peter Kinget",
      grade: "",
      status: "Project participation documented",
      url: "https://www.ee.columbia.edu/~kinget/EE6350_S24/"
    }
  ],
  // No job title, employer or employment dates were reliably accessible.
  // Example fields: { title: "", organization: "", dates: "", description: "", url: "" }
  experience: [
  {
    title: "Research Assistant",
    organization: "New York University · RAISE Lab",
    dates: "Aug 2026 – Present",
    description: "Conducting research on low-power biosystem chip design. Full-time, based in Brooklyn, New York.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    title: "Teaching Affiliate",
    organization: "James Watt School of Engineering, University of Glasgow",
    dates: "Sep 2025 – Feb 2026",
    description: "Supported laboratory sessions for programming and circuit design courses, led tutorials, and helped students prepare for examinations. Full-time, based in Hainan, China.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    title: "Advanced Master's Research",
    organization: "Columbia University · Bioelectronic Systems Lab",
    dates: "Nov 2024 – May 2025",
    description: "Developed implantable bioelectronic systems, focusing on sensor arrays, power management integrated circuits (PMICs), and wireless power transfer (WPT) modules. Based in Manhattan, New York.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    title: "Teaching Assistant for Five Courses",
    organization: "University of Electronic Science and Technology of China (UESTC)",
    dates: "Sep 2022 – Jun 2023",
    description: "Supported UESTC3032 Micro & Nano Tech, UESTC1008 Microelectronic System, UESTC2004 Embedded Processor, UESTC4033 Design of IC, and UESTC3022 Power Electronics. Tested and troubleshot controller circuits, helped students debug programs, and graded reports and assignments. Part-time, based in Chengdu and Sanya, China.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    title: "Summer Researcher · NTU AI Lab",
    organization: "Nanyang Technological University, Singapore",
    dates: "Jun 2022 – Sep 2022",
    description: "Developed a compact neural network for skin cancer image classification and integrated it into the Federated Machine Learning (FedML) platform. The LinkedIn project record reports over 98% accuracy with a 21-layer, approximately 1 MB model. Documented the work in the IEEE paper \"Privacy Preserved Federated Learning for Skin Cancer Diagnosis\" as the corresponding author.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  },
  {
    title: "Undergraduate Research Assistant · Power Device Laboratory",
    organization: "University of Electronic Science and Technology of China (UESTC)",
    dates: "Oct 2021 – Jan 2023",
    description: "Analyzed impact ionization in devices with positively and negatively beveled edges using an analytical model adapted from Xingbi Chen's work. Compared theoretical breakdown voltage, maximum electric field, specific on-resistance, and a modified figure of merit across wide-bandgap materials, including 4H-SiC, GaN, β-Ga₂O₃, and diamond. Used MEDICI and MATLAB.",
    url: "https://www.linkedin.com/in/yuechenhe/"
  }
  ],
  projects: [
    {
      title: "LVSensor: sensor interface design",
      dates: "2024",
      description: "Team project spanning IC design, fabrication, PCB development and testing.",
      url: "https://www.ee.columbia.edu/~kinget/EE6350_S24/LVSENSOR/index.html",
      linkLabel: "Project documentation"
    },
    {
      title: "Custom 8-bit microprocessor",
      dates: "Sep – Dec 2023",
      description: "Schematic and layout implementation of a processor core with RAM and custom digital building blocks.",
      url: "https://www.linkedin.com/in/yuechenhe/",
      linkLabel: "LinkedIn project record"
    }
  ],
  photography: [
    { title: "Photography collection", image: "", alt: "", placeholder: "Photograph to be added" },
    { title: "More photographs", image: "", alt: "", placeholder: "Photograph to be added" }
  ],
  // Example fields: { title: "", date: "", distance: "", location: "", description: "", image: "", alt: "" }
  rides: []
};

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
    portrait: "", // e.g. "./assets/portrait.jpg"
    portraitAlt: "Portrait of Yuechen He",
    email: "",
    github: "",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/yuechenhe/",
    cv: "", // Add the actual PDF before setting "./assets/CV.pdf".
    about: [
      "I am Yuechen He, a Ph.D. student at New York University working in chip design. My undergraduate studies were at the University of Electronic Science and Technology of China (UESTC).",
      "My design work includes a low-voltage sensor readout IC and a custom 8-bit microprocessor. Outside my academic work, I enjoy photography and cycling."
    ]
  },
  // Add only complete, verified paper records. See README for the object format.
  publications: [],
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
    },
    {
      title: "8-bit microprocessor core",
      category: "Full-custom digital design",
      status: "Schematic & layout · IBM 90 nm",
      image: "",
      alt: "",
      imagePlaceholder: "Layout image to be added",
      description: "An 8-bit processor with 8 × 8 RAM, including custom logic, storage and layout verification.",
      detail: "The LinkedIn project record describes a full-custom processor in IBM 90 nm with arithmetic, shifting, SRAM and control blocks. Verification included parasitic extraction with Calibre xRC. This entry describes schematic and layout work; fabrication is not asserted. Add the original layout and project documentation when available.",
      url: "https://www.linkedin.com/in/yuechenhe/",
      sourceLabel: "LinkedIn project record"
    }
  ],
  education: [
    {
      institution: "New York University",
      degree: "Ph.D. studies · Chip design",
      years: "2026 – Present",
      details: "SoE Fellowship, 2026.",
      url: "https://www.linkedin.com/in/yuechenhe/"
    },
    {
      institution: "University of Electronic Science and Technology of China (UESTC)",
      degree: "Undergraduate studies",
      years: "",
      details: "Degree title and attendance dates to be added.",
      url: "https://www.linkedin.com/in/yuechenhe/"
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
  experience: [],
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

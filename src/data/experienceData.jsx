import { Briefcase, GraduationCap } from "lucide-react";

const Data = [
    {
    type: "work",
    icon: Briefcase,
    title: "FullStack Developer",
    company: "Diggibyte Technologies Private Limited",
    location: "On-Site",
    period: "2024 - Present",
    description: " Developed and maintained scalable web applications using React.js and Angular, and cross-platform mobile applications using Flutter.",
    achievements: [
      "Built and integrated RESTful APIs and backend services using NestJS and PostgreSQL. Worked on analytics and enterprise applications, implementing new features and enhancing application performance.",
      "Managed Databricks deployments and contributed to data-driven solutions and application integrations",
      "Integrated third-party APIs and collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in application deployment, testing, debugging, and production support activities."
    ],
    color: "from-purple-600 to-blue-500",
  },
    {
    type: "work",
    icon: Briefcase,
    title: "MERN Stack Developer",
    company: "Dactilar Technologies",
    location: "Remote",
    period: "Jan 2024 - Jun 2024",
    description: "Developed and maintained full-stack web applications using MERN stack. Implemented RESTful APIs, optimized database queries, and created responsive UI components.",
    achievements: [
      "Built scalable REST APIs serving 10k+ daily requests",
      "Reduced page load time by 40% through optimization",
      "Mentored junior developers in React best practices",
    ],
    color: "from-purple-600 to-blue-500",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Master of Computer Applications (MCA)",
    company: "VIT Chennai",
    location: "Chennai, India",
    period: "2022 - 2024",
    description: "Specialized in software engineering, web technologies, and database management. Graduated with distinction.",
    achievements: [
      "CGPA: 8.5/10",
      "Led final year project on cloud-based solutions",
      "Active member of coding club",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Computer Applications (BCA)",
    company: "L.N Mishra College of Business Mangement, Muzaffarpur Bihar",
    location: "India",
    period: "2019 - 2022",
    description: "Foundation in computer science fundamentals, programming, and software development.",
    achievements: [
      "CGPA: 8.0/10",
      "Developed multiple academic projects",
      "Participated in hackathons and coding competitions",
    ],
    color: "from-cyan-600 to-teal-500",
  },
];


export default Data;
import { Code2, Database, Server, Wrench } from "lucide-react";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsJavascript, BsTypescript } from "react-icons/bs";
import { DiGithub, DiMongodb, DiMysql } from "react-icons/di";
import { FaAngular, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { GiRestingVampire } from "react-icons/gi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAegisauthenticator, SiDart, SiExpress, SiLibrariesdotio, SiMongoose, SiPostman, SiRedux } from "react-icons/si";
import { TbBrandDatabricks, TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

const SkillsData = [
  {
    title: "Programming Languages",
    icon: SiLibrariesdotio,
    color: "from-purple-600 to-purple-400",
    skills: [
      { name: "Java", icon: FaReact, color: "#61DAFB" },
      { name: "Python", icon: SiRedux, color: "#764ABC" },
      { name: "Dart", icon: SiDart, color: "#06B6D4" },
      { name: "JavaScript", icon: BsJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: BsTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    icon: SiLibrariesdotio,
    color: "from-purple-600 to-purple-400",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Angular", icon: FaAngular, color: "#E40035" },
      { name: "Tailwind", icon: RiTailwindCssFill, color: "#06B6D4" },
      { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
      { name: "Flutter", icon: SiDart, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-blue-600 to-blue-400",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#333333" },
      { name: "REST APIs", icon: GiRestingVampire, color: "#FF6B6B" },
      { name: "Authentication", icon: SiAegisauthenticator, color: "#4ECDC4" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-cyan-600 to-cyan-400",
    skills: [
      { name: "MongoDB", icon: DiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#F06529" },
      { name: "MySQL", icon: DiMysql, color: "#0075A8" },
      { name: "PostgreSQL", icon: BiLogoPostgresql, color: "#0075A8" },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "from-pink-600 to-pink-400",
    skills: [
      { name: "Git/GitHub", icon: DiGithub, color: "#F0F0F0" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Databricks", icon: TbBrandDatabricks, color: "#FF6B6B" },
      { name: "Lakebase", icon: TbBrandDatabricks, color: "#FF6B6B" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Figma", icon: FiFigma, color: "#F0F0F0" },
    ],
  },
];

export default SkillsData;
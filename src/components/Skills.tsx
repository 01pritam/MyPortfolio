import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiDjango, SiMongodb, SiMysql, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
  { name: "Django", icon: <SiDjango className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-600" /> }
];

export default function Skills() {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
      <h1 className="text-4xl  font-bold mt-10 text-center">SKILLS</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="text-5xl">{skill.icon}</div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

        
  
      
    </div>
  );
}

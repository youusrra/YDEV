/* eslint-disable react/prop-types */
import styles from "../styles";
import { projects } from "../constants";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";



 const ProjectCard = ({ name, description, image, source_code_link, source_code_link2 }) => {
  return (
    <div className="shadow shadow-indigo-500/100 p-5 rounded-2xl sm:w-[500px] w-full">
      <div className="relative w-full h-[250px]">
        <img src={image} alt={name} className="w-full h-full bg-cover rounded-2xl"/>
        <div className="absolute inset-0 flex justify-end m-3">
          <div onClick={() => window.open(source_code_link2, "_blank")} className="relative shadow shadow-indigo-500/100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <IoLogoVercel className="w-[50%] h-[50%] absolute object-contain"/>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-end mr-16 m-3">
          <div onClick={() => window.open(source_code_link, "_blank")} className="relative shadow shadow-indigo-500/100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <FaGithub className="w-[50%] h-[50%] absolute object-contain"/>
          </div>
        </div>

      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="text-secondary mt-2 text-[14px]">{description}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section className={`flex-col bg-transparentStars py-8 bg-no-repeat  bg-cover bg-center flex ${styles.paddingX}`} id="projects">
      <div className="items-start">
        <h1 className={`${styles.sectionHeadText}`}>My Projects</h1>
        <p className={`${styles.sectionSubText}`}>Explore my work, where design and functionality come together. Each project showcases my skills in creating responsive, user-friendly experiences using modern web technologies. Check them out to see how I turn ideas into reality.</p>
      </div>

      <div className="flex w-full mb-[60px] flex-wrap mt-[120px] justify-center items-center">
        {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`}
        index={index}
        {...project} 
        />
        ))}
      </div>
    </section>
  );
};

export default Projects;

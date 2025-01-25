import styles from "../styles";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className={`${styles.paddingX} flex-col bg-hero-pattern bg-cover bg-center flex justify-center w-full items-center py-[180px]`}>
      <h1 className="text-white font-semibold mb-12 lg:text-[40px]">Technologies I&apos;ve Worked With</h1>

    <div className="grid xl:grid-cols-5 md:grid-cols-3n xs:grid-cols-3 mt-[70px] items-center">
      {technologies.map((technology, index) => (
        <div className="nav-bg py-4 px-8 hover:bg-gray-800 transition duration-300 ease-in-out m-[35px]" key={index}>
          <img className="xl:w-[130px] lg:w-[120px] md:w-[100] w-[90px] object-cover" src={technology.icon} alt="" />
          <p className="text-center text-secondary mt-2 text-[16px] font-medium">{technology.name}</p>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Tech;

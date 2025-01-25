import styles from "../styles";
import { portfolioImg } from "../assets";

const Hero = () => (
  <section
    className={`${styles.paddingX} w-full flex items-center py-5`}
    id="ydev"
  >
    <div
      className={`xl:flex-1 flex items-start justify-center mx-auto h-screen w-full flex-col sm:px-16 py-8`}
    >
      <h1 className="text-white mb-7 font-bold text-[40px] lg:text-[60px]">
        Hi, I&apos;m Yousra
      </h1>
      <p className="tracking-wide xl:leading-[2.3] leading-[1.8] xl:text-[19px] text-[14px] xl:max-w-[1580px] xl:w-full w-[300px] p-text">
        a passionate web developer with a love for combining creativity and
        technology. I specialize in building modern, responsive, and visually
        appealing web applications that prioritize user experience and
        performance. My mission is to create seamless digital solutions that
        make an impact.
      </p>

      <a href="#about">
        <button
          type="button"
          className="shadow shadow-indigo-400/100 cursor-pointer rounded-xl font-semibold text-white duration-300 transition-all ease-in-out hover:scale-110 px-6 py-1 mt-8"
        >
          About Me
        </button>
      </a>
    </div>

    <div className="flex-1 ml-[380px]">
      <img
        src={portfolioImg}
        alt="portfolio-img"
        className="w-[510px] object-cover"
      />
    </div>
  </section>
);


export default Hero;

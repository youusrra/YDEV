import { Tech } from "../components";
import styles from "../styles";

const About = () => {
  return (
    <section className={`${styles.paddingX} pt-[100px] bg-transparentStars bg-cover bg-center w-full flex-col flex items-center py-5`} id="about">
      <h1 className={`${styles.sectionHeadText}`}>About Me</h1>

      <p className={`${styles.sectionSubText} xl:leading-[2.3] leading-[2.4] xl:text-[19px] md:text-[16px] text-[14px] lg:w-[980px] xl:w-full xs:w-[480px] md:w-[760px] text-center`}>As a self-taught developer without a computer science degree, I’ve embraced the challenge of mastering web development through hands-on projects, online courses, and continuous exploration of emerging technologies. Each project I build reflects my personal touch, often with a signature naming style that incorporates my initial &quot;Y&quot;—like YCOFFEE and YDEV—as a way to leave a mark on my creations.

I specialize in React and Next.js, with a strong focus on clean, maintainable code and modern design principles. Whether it’s experimenting with TypeScript, integrating styled-components, or designing intuitive interfaces, I’m always striving to push boundaries and refine my craft.</p>

      <Tech />
    </section>
  );
};
export default About;

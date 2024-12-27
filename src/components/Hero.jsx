import styles from "../styles"
import { portfolioImg } from "../assets"

const Hero = () => (
  <section className={`${styles.paddingX} w-full flex items-center py-5`} id="ydev">
    <div className={`flex-1 flex items-start justify-center mx-auto h-screen w-full flex-col sm:px-16 py-8`}>
      <h1 className="text-white mb-7 font-bold text-[60px]">Hi, I&apos;m Yousra</h1>
      <p className="tracking-wide leading-9"> a passionate web developer with a love for combining creativity and technology. I specialize in building modern, responsive, and visually appealing web applications that prioritize user experience and performance. My mission is to create seamless digital solutions that make an impact.</p>
     <a href="https://www.linkedin.com/feed/"><button type="button" className="bg-white cursor-pointer rounded-xl font-semibold text-navy transition-all ease-in-out hover:scale-110 px-6 py-1 mt-8">Download Cv</button></a> 
    </div>

    <div className="flex-1 ml-[210px]">
      <img src={portfolioImg} alt="portfolio-img" className="w-[620px] rounded-full"/>
    </div>
  </section>
)

export default Hero

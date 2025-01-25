import styles from "../styles"

const Contact = () => {

  return (
    <div className="xl:pt-12 flex items-center justify-center bg-stars bg-cover bg-no-repeat" id="contact">
      <div className="nav-bg py-6 px-10 mt-4n flex flex-col items-start mb-16 justify-center lg:w-[800px]">
          <p className={`${styles.sectionSubText} mt-4`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact</h3>
          <form 
          className="mt-8 flex flex-col gap-4" 
          >
            
            <label className="flex mb-4 flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input 
              type="text" 
              name="name"
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 lg:w-[630px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col mb-4">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input 
              type="email" 
              name="email"
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 lg:w-[630px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex mb-4 flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
              rows="7"
              name="name"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 lg:w-[630px] placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
            type="button"
            className="w-fit shadow shadow-indigo-400/100 rounded-xl font-bold text-white py-3 px-8 outline-none">Send</button>
          </form>
      </div>
    </div>
  )
}

export default Contact

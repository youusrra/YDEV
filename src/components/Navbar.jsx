import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { RiCloseFill } from "react-icons/ri";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-15 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer px-1">
            Yousra
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 py-4 px-8 nav-bg">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                 active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}

              
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div className="gap-3 flex flex-row">
            <a target="blank" href="https://github.com/youusrra">
            <FaGithub className="w-[25px] h-[25px] text-blue" />
            </a>
            <a className="ml-2" target="blank" href="https://www.linkedin.com/in/yousra-k-0b8443306/">
            <FaLinkedin className="w-[25px] h-[25px] text-blue" />
            </a>
            <a className="ml-2" target="blank" href="mailto:youusra.kh@gmail.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you.">
            <CgMail className="w-[25px] h-[25px] text-blue" />
            </a>
          </div>
        </ul>


        <div className="sm:hidden flex flex-1 items-center justify-between absolute right-0">
          {toggle ? (
            <RiCloseFill className="w-[28px] h-[28px] cursor-pointer" />
          ) : (
            <HiOutlineBars3BottomRight
              className="w-[28px] h-[28px] cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <div className={`${!toggle ? "hidden" : "flex"} p-6 nav-bg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

          <ul className="list-none flex sm:flex flex-col justify-end items-start gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white my-2 text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
               setActive(link.title);
            }}
                
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

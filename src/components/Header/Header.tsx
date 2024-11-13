import { useState } from "react";
import { useTypeWriter } from "../../hooks/useTypeWriter";
import { Tooltip } from "@mui/material";
import { useScroll } from "../../hooks/useScroll";
import {
  motion,
  useScroll as framerUseScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useAtom } from "jotai";
import { themeAtom } from "../../atomic/atomic";

export const Header = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [isDarkMode, setIsDarkMode] = useAtom<boolean>(themeAtom);
  const { scrollYProgress } = framerUseScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const springTranslateX = useSpring(translateX, {
    stiffness: 1000,
    damping: 20,
    restDelta: 1.001,
  });

  const { isScrolled } = useScroll();
  const text = useTypeWriter({
    WordToType: "Welcome to my Portfolio!",
    speed: 100,
    interval: 10000,
    toggle: toggle,
  });

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("portfolio-theme", JSON.stringify(isDarkMode));
  };

  return (
    <div className="sticky top-0 flex items-end flex-col z-50">
      <div
        className={`py-4 px-5 flex w-full dark:text-white font-semibold text-md transition-all duration-300 bg-white bg-opacity-5 backdrop-blur-sm items-center ${
          isScrolled && "shadow-lg bg-white bg-opacity-40 text-black"
        }`}
      >
        <p onClick={() => setToggle(!toggle)} className="cursor-pointer w-1/2">
          <Tooltip
            title={`Click to turn ${toggle ? "off" : "on"} typing effect`}
          >
            <span>&lt;{text}/&gt;</span>
          </Tooltip>
        </p>
        <div className="w-1/2 flex items-center justify-end h-full gap-10">
          <p className=" text-right">Jezreel Christian Bacasno</p>
          <div className="w-14">
            <ThemeToggle onClickFn={handleTheme} />
          </div>
        </div>
      </div>
      <motion.div
        className={`progress-bar mt-[67px] w-full `}
        style={{ translateX: springTranslateX }}
      >
        <div
          className={`flex text-2xl gap-2 py-2 justify-evenly self-end w-[230px] rounded-b-lg shadow-md bg-white bg-opacity-5  backdrop-blur-sm ${
            isScrolled &&
            "shadow-lg bg-white bg-opacity-40  backdrop-blur-sm self-end"
          }`}
        >
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaLinkedin />
          <FaGithubSquare />
          <FaSquareGitlab />
        </div>
      </motion.div>
    </div>
  );
};

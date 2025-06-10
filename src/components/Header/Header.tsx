import { useScroll } from "../../hooks/useScroll";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGitlab } from "react-icons/fa6";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useAtom } from "jotai";
import { themeAtom } from "../../atomic/atomic";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useAtom<boolean>(themeAtom);
  const { isScrolled } = useScroll();

  const handleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("portfolio-theme", JSON.stringify(isDarkMode));
  };

  return (
    <div className="sticky w-full top-0 flex items-end flex-col z-50 dark:text-white h-28">
      <div
        className={`py-4 h-fit px-5 flex w-full font-semibold text-md transition-all duration-300 bg-white bg-opacity-5 backdrop-blur-sm items-center ${
          isScrolled && "shadow-lg bg-white bg-opacity-40 text-black"
        }`}
      >
        <p className="cursor-pointer w-1/2 leading-4 dark:text-white">
          <span>&lt; Welcome to my Portfolio! /&gt;</span>
        </p>
        <div className="w-1/2 flex items-center justify-end h-full gap-10">
          <p className="leading-4 text-right dark:text-white">
            Jezreel Christian Bacasno
          </p>
          <div className="w-14 min-w-12">
            <ThemeToggle onClickFn={handleTheme} />
          </div>
        </div>
      </div>
      <div className="h-fit w-full">
        <div
          className={`flex ~text-2xl/3xl  py-2 justify-evenly self-end w-fit px-5 gap-5 rounded-b-lg shadow-md bg-white bg-opacity-5  backdrop-blur-sm ${
            isScrolled &&
            "shadow-lg bg-white bg-opacity-40  backdrop-blur-sm self-end"
          }`}
        >
          <FaLinkedin />
          <FaGithubSquare />
          <FaSquareGitlab />
        </div>
      </div>
    </div>
  );
};

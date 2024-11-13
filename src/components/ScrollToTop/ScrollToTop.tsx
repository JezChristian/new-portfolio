import { FaArrowUp } from "react-icons/fa";
import { useScroll } from "../../hooks/useScroll";
import { themeAtom } from "../../atomic/atomic";
import { useAtomValue } from "jotai";

export const ScrollToTop = () => {
  const { isScrolled, scrollTop } = useScroll();
  const isDark = useAtomValue(themeAtom);

  return (
    <button
      onClick={scrollTop}
      className={` h-14 w-14 rounded-full fixed bottom-10 right-10 transition-all duration-300  flex items-center justify-center  ${
        isScrolled ? " scale-100 " : " scale-0"
      }
        ${isDark ? " neumorphic-dark " : " neumorphic-light "}
      `}
    >
      <FaArrowUp />
    </button>
  );
};

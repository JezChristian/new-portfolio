import { useAtomValue } from "jotai";
import { themeAtom } from "../../atomic/atomic";

export const LoadingScreen = () => {
  const isDark = useAtomValue(themeAtom);
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg- flex w-full h-screen ${
        isDark
          ? "bg-home-black-radial animate_quick_scale"
          : "bg-home-white-gradient animate_quick_scale_down"
      }`}
    >
      <p className="cursor-pointer w-full h-full gap-3 flex flex-col items-center justify-center leading-4 dark:text-white">
        <span className="~text-xl/3xl animate_quick_scale">
          &lt; Welcome to my Portfolio! /&gt;
        </span>
        <span className="~text-xl/3xl animate_quick_scale_down">
          I&apos;m Jezreel Christian
        </span>
        <span className="~text-xs/lg animate-pulse">Loading contents...</span>
      </p>
    </div>
  );
};

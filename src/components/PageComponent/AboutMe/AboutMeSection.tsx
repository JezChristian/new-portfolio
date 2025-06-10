import { useRef, useState } from "react";
import { AboutMeButton } from "./components/AboutMeButton";
import { useAtom } from "jotai";
import { aboutMeAtom } from "../../../atomic/atomic";

import { EducationalBackground } from "./contents/EducationalBackground";
import { AboutMe } from "./contents/AboutMe";
import { ToolsUsed } from "./contents/Skills";
import { WorkExperience } from "./contents/WorkExperience";

export const AboutMeSection = () => {
  const [onFocus, setOnFocus] = useState<boolean>(true);
  const [selectedAboutMe] = useAtom(aboutMeAtom);
  const elementRef = useRef(null);

  return (
    <div
      id="about"
      ref={elementRef}
      className={`h-fit lg:min-h-screen w-full dark:text-white flex flex-col items-center transition-all duration-500 relative text-black overflow-hidden ${
        onFocus
          ? "justify-start lg:justify-center items-end ~pt-28/36"
          : "justify-center items-end ~pt-16/40"
      }`}
    >
      {SelectedAboutMe(selectedAboutMe)}
      <AboutMeButton onFocus={onFocus} setOnFocus={setOnFocus} />
    </div>
  );
};

const SelectedAboutMe = (selected: string) => {
  switch (selected) {
    case "About Me":
      return <AboutMe label={selected} />;
    case "Educational Background":
      return <EducationalBackground label={selected} />;
    case "Work Experience":
      return <WorkExperience label={selected} />;
    case "Tools Used":
      return <ToolsUsed label={selected} />;
  }
};

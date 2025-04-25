import { useEffect, useRef, useState } from "react";
import { AboutMeButton } from "./components/AboutMeButton";
import { useAtom } from "jotai";
import { aboutMeAtom } from "../../../atomic/atomic";

import { EducationalBackground } from "./contents/EducationalBackground";
import { AboutMe } from "./contents/AboutMe";
import { ToolsUsed } from "./contents/Skills";
import { WorkExperience } from "./contents/WorkExperience";

export const AboutMeSection = () => {
  const [onFocus, setOnFocus] = useState<boolean>(true);
  const [, setIsVisible] = useState<boolean>(true);
  const [selectedAboutMe, setSelectedAboutMe] = useAtom(aboutMeAtom);

  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          resetState();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const resetState = () => {
    setSelectedAboutMe("");
    setIsVisible(false);
  };

  return (
    <div
      id="about"
      ref={elementRef}
      className={`min-h-screen h-fit w-full dark:text-white flex flex-col items-center transition-all duration-500 relative text-black overflow-hidden ${
        onFocus ? "justify-center items-end" : "justify-center items-end pt-40"
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

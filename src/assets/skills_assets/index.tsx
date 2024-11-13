import AE from "./AE.png";
import AI from "./AI.png";
import AN from "./AN.png";
import ME from "./ME.png";
import PR from "./PR.png";
import PS from "./PS.png";
import XD from "./XD.png";
import Figma from "./Figma.png";

import AndroidStudio from "./AndroidStudio.png";
import GitHub from "./GitHub.png";
import GitLab from "./GitLab.png";
import Unity from "./Unity.png";
import VSCode from "./VSCode.png";

import CPP from "./CPP.png";
import CSS3 from "./CSS3.png";
import HTML5 from "./HTML5.png";
import Java from "./Java.png";
import JS from "./JS.png";
import React from "./React.png";
import ReactNative from "./ReactNative.png";
import Tailwind from "./Tailwind.png";
import SCSS from "./SCSS.png";

import Maya from "./Maya.png";
import SketchUp from "./SketchUp.png";
import Blender from "./Blender.png";

import ImageOne from "../ImageOne.png";
import ImageTwo from "../ImageTwo.png";
import ImageThree from "../ImageThree.png";

import DarkCSS3 from "../skills_assets/dark_mode/CSS3.png";
import DarkFigma from "../skills_assets/dark_mode/Figma.png";
import DarkGitHub from "../skills_assets/dark_mode/GitHub.png";
import DarkHTML5 from "../skills_assets/dark_mode/HTML5.png";
import DarkTailwind from "../skills_assets/dark_mode/Tailwind.png";
import DarkUnity from "../skills_assets/dark_mode/Unity.png";
import { themeAtom } from "../../atomic/atomic";
import { useAtomValue } from "jotai";
import { ItemCard } from "../../components/Cards/ItemCard";

export {
  AE,
  AI,
  AN,
  AndroidStudio,
  CPP,
  CSS3,
  Figma,
  GitHub,
  GitLab,
  HTML5,
  Java,
  JS,
  Maya,
  ME,
  PR,
  PS,
  React,
  ReactNative,
  SCSS,
  Tailwind,
  Unity,
  VSCode,
  XD,
  ImageOne,
  ImageTwo,
  ImageThree,
  DarkCSS3,
  DarkFigma,
  DarkGitHub,
  DarkHTML5,
  DarkTailwind,
  DarkUnity,
};

interface Props {
  toShow: number;
}

export const Softwares = ({ toShow }: Props) => {
  const isDark = useAtomValue(themeAtom);
  const Multimedia = [
    {
      label: "Adobe Animate",
      image: AN,
    },
    {
      label: "Adobe Illustrator",
      image: AI,
    },
    {
      label: "Adobe After Effects",
      image: AE,
    },
    {
      label: "Adobe Media Encoder",
      image: ME,
    },
    {
      label: "Adobe Premiere",
      image: PR,
    },
    {
      label: "Adobe Photoshop",
      image: PS,
    },
    {
      label: "Figma",
      image: isDark ? DarkFigma : Figma,
    },
    {
      label: "Adobe XD",
      image: XD,
    },
  ];

  const ProgrammingSoftwares = [
    {
      label: "Android Studio",
      image: AndroidStudio,
    },
    {
      label: "GitHub",
      image: isDark ? DarkGitHub : GitHub,
    },
    {
      label: "GitLab",
      image: GitLab,
    },
    {
      label: "Unity",
      image: isDark ? DarkUnity : Unity,
    },
    {
      label: "VSCode",
      image: VSCode,
    },
  ];

  const ProgrammingLanguage = [
    {
      label: "C++",
      image: CPP,
    },
    {
      label: "HTML5",
      image: isDark ? DarkHTML5 : HTML5,
    },
    {
      label: "Java",
      image: Java,
    },
    {
      label: "JavaScript",
      image: JS,
    },
    {
      label: "React",
      image: React,
    },
    {
      label: "ReactNative",
      image: ReactNative,
    },
    {
      label: "CSS3",
      image: isDark ? DarkCSS3 : CSS3,
    },
    {
      label: "Tailwind",
      image: isDark ? DarkTailwind : Tailwind,
    },
    {
      label: "SCSS",
      image: SCSS,
    },
  ];

  const ThreeDimensionals = [
    {
      label: "Autodesk Maya",
      image: Maya,
    },
    {
      label: "Blender",
      image: Blender,
    },
    {
      label: "SketchUp",
      image: SketchUp,
    },
  ];

  switch (toShow) {
    case 0:
      return <ItemCard items={Multimedia} />;
    case 1:
      return <ItemCard items={ProgrammingSoftwares} />;
    case 2:
      return <ItemCard items={ProgrammingLanguage} />;
    case 3:
      return <ItemCard items={ThreeDimensionals} />;
    default:
      return null;
  }
};

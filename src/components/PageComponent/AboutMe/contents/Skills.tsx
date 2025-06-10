import { useState } from "react";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { Softwares } from "../../../../assets/skills_assets";

interface Props {
  label: string;
}

interface AboutMeSkillsSelectedProps {
  selected: number;
}

const AboutMeSkillsSelected = ({ selected }: AboutMeSkillsSelectedProps) => {
  switch (selected) {
    case 1:
      return (
        <div className="w-full">
          <p className="text-xl animate_quick_scale mb-5">
            Multimedia Softwares
          </p>
          <div className="w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <Softwares toShow={0} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <p className="text-xl animate_quick_scale mb-5">3D Softwares</p>
          <div className="w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <Softwares toShow={3} />
          </div>
        </div>
      );
    default:
      return (
        <div className="w-full">
          <p className="text-xl animate_quick_scale mb-2">
            Programming Softwares
          </p>
          <div className="w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <Softwares toShow={1} />
          </div>
          <p className="text-xl animate_quick_scale my-2">
            Programming Related Skills
          </p>
          <div className="w-full flex flex-wrap gap-3 justify-center lg:justify-start">
            <Softwares toShow={2} />
          </div>
        </div>
      );
  }
};

export const ToolsUsed = ({ label }: Props) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="h-fit flex flex-col justify-center flex-grow items-center w-full">
      <p className=" text-4xl animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="h-fit flex items-start justify-center animate_quick_scale_down flex-col gap-5 lg:flex-row lg:w-2/3 lg:gap-28">
        <div className="flex w-full gap-5 justify-center flex-row flex-wrap h-fit lg:flex-col lg:w-fit">
          <CustomButton
            id="programming-button"
            className={`w-48 h-16 p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 0 && "font-bold underline"
            } lg:animate-floatOne`}
            onClick={() => setSelected(0)}
          >
            Programming
          </CustomButton>
          <CustomButton
            id="multi-media-button"
            className={`w-48 h-16 p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 1 && "font-bold underline"
            } lg:animate-floatTwo`}
            onClick={() => setSelected(1)}
          >
            Multimedia
          </CustomButton>
          <CustomButton
            id="3d-softwares-button"
            className={`w-48 h-16 p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 2 && "font-bold underline"
            } lg:animate-floatOne`}
            onClick={() => setSelected(2)}
          >
            3D Softwares
          </CustomButton>
        </div>
        <div className="flex flex-col flex-grow min-w-[250px] w-full px-10 ">
          <AboutMeSkillsSelected selected={selected} />
        </div>
      </div>
    </div>
  );
};

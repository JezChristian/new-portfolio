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
          <div className="w-full flex flex-wrap gap-3">
            <Softwares toShow={0} />
          </div>
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          <p className="text-xl animate_quick_scale mb-5">3D Softwares</p>
          <div className="w-full flex flex-wrap gap-3">
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
          <div className="w-full flex flex-wrap gap-3">
            <Softwares toShow={1} />
          </div>
          <p className="text-xl animate_quick_scale my-2">
            Programming Languages
          </p>
          <div className="w-full flex flex-wrap gap-3">
            <Softwares toShow={2} />
          </div>
        </div>
      );
  }
};

export const ToolsUsed = ({ label }: Props) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="h-full flex items-center flex-col ">
      <p className=" text-4xl animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="w-2/3 flex items-start justify-center gap-28 animate_quick_scale_down ">
        <div className="flex flex-col gap-5 w-fit">
          <CustomButton
            className={`p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 0 && "font-bold underline"
            } animate-floatOne`}
            onClick={() => setSelected(0)}
          >
            Programming
          </CustomButton>
          <CustomButton
            className={`p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 1 && "font-bold underline"
            } animate-floatTwo`}
            onClick={() => setSelected(1)}
          >
            Multimedia
          </CustomButton>
          <CustomButton
            className={`p-5 transition-all duration-1000 hover:rounded-full ${
              selected == 2 && "font-bold underline"
            } animate-floatOne`}
            onClick={() => setSelected(2)}
          >
            3D Softwares
          </CustomButton>
        </div>
        <div className="flex flex-col flex-grow min-w-[450px] ">
          <AboutMeSkillsSelected selected={selected} />
        </div>
      </div>
    </div>
  );
};

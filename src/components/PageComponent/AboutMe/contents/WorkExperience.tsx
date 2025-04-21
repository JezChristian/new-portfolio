import { NBLogo } from "../../../../assets";

interface Props {
  label: string;
}

export const WorkExperience = ({ label }: Props) => {
  return (
    <div className="h-fit flex flex-col justify-center flex-grow mb-12 lg:mb-0">
      <p className="text-4xl text-wrap animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="w-full flex items-center justify-center animate_quick_scale_down flex-col lg:flex-row lg:gap-10">
        <div className="gap-2 flex flex-col min-w-[180px] items-center lg:items-end">
          <img src={NBLogo} alt="NBLogo" className="w-32 mb-5 lg:w-52" />
        </div>
        <div className="w-[2px] bg-black dark:bg-white h-full rounded-full" />
        <div className="gap-2 flex flex-col h-full w-3/4 lg:w-1/2 lg:pl-10 ">
          <p className="text-4xl font-semibold text-center lg:text-left">
            <span className="font-normal text-lg">
              Currently works at <br />
            </span>
            <span className="text-[#0071BC]">Nexbridge </span>{" "}
            <span className="text-[#8CC63F]">Technologies</span> Incorporated
          </p>
          <p className="italic text-xl font-semibold text-center lg:text-left">
            Software Engineer | System Analyst
          </p>
          <p className="text-xs italic text-center lg:text-left lg:text-lg ">
            2023 - current
          </p>
        </div>
      </div>
    </div>
  );
};

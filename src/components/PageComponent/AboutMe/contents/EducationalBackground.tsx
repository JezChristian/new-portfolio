import { COGLogo } from "../../../COGLogo/COGLogo";
import CICTFront from "../../../../assets/Logo/CICTFront.png";
import CICTBack from "../../../../assets/Logo/CICTBack.png";
import BSUFront from "../../../../assets/Logo/BSUFront.png";
import BSUBack from "../../../../assets/Logo/BSUBack.png";

interface Props {
  label: string;
}

export const EducationalBackground = ({ label }: Props) => {
  return (
    <div className="h-fit flex flex-col justify-center flex-grow">
      <p className="text-4xl text-wrap animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="w-full flex items-center justify-center animate_quick_scale_down flex-col lg:flex-row lg:gap-10">
        <div className="gap-2 flex flex-col min-w-[180px] items-end">
          <COGLogo
            className="w-20 lg:w-32 -translate-x-[95px] lg:-translate-x-32"
            rotation="animate_rotate_counter_clockwise"
            front={CICTFront}
            back={CICTBack}
          />
          <COGLogo
            className="w-28 lg:w-40 -translate-y-10"
            rotation="animate_rotate_clockwise"
            front={BSUFront}
            back={BSUBack}
          />
        </div>
        <div className="w-[2px] bg-black dark:bg-white h-full rounded-full" />
        <div className="gap-2 flex flex-col h-full w-3/4 lg:w-1/2 lg:pl-10 ">
          <p className="text-4xl font-semibold text-center lg:text-left">
            Studied at Bulacan State University
          </p>
          <p className="text-2xl font-semibold text-center lg:text-left">
            Major in Information and Communication Technology
          </p>
          <p className=" italic text-center lg:text-left lg:text-2xl">
            Specialization in Web and Mobile Application Development
          </p>
          <p className="text-xs font-semibold text-center lg:text-left lg:text-lg ">
            &#40; 2019 - 2023 &#41;
          </p>
          <p className="text-sm font-semibold text-center lg:text-left lg:text-md ">
            Achievements : Magna Cum Laude | Best Thesis of year 2023
          </p>
        </div>
      </div>
    </div>
  );
};

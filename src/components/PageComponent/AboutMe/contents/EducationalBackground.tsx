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
    <div className="h-full">
      <p className=" text-4xl animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="w-full flex items-center justify-center gap-10 animate_quick_scale_down">
        <div className="gap-2 flex flex-col w-1/3 items-end ">
          <COGLogo
            className="w-32 -translate-x-32"
            rotation="animate_rotate_counter_clockwise"
            front={CICTFront}
            back={CICTBack}
          />
          <COGLogo
            className="w-40 -translate-y-10"
            rotation="animate_rotate_clockwise"
            front={BSUFront}
            back={BSUBack}
          />
        </div>
        <div className="w-[2px] bg-black dark:bg-white h-full rounded-full" />
        <div className="gap-2 flex flex-col w-1/2  h-full pl-10 ">
          <p className="text-4xl font-semibold">
            Studied at Bulacan State University
          </p>
          <p className="text-2xl font-semibold">
            Major in Information and Communication Technology
          </p>
          <p className="text-2xl italic">
            Specialization in Web and Mobile Application Development
          </p>
          <p className="text-lg font-semibold ">&#40; 2019 - 2023 &#41;</p>
          <p className="text-md font-semibold ">
            Achievements : Magna Cum Laude | Best Thesis of year 2023
          </p>
        </div>
      </div>
    </div>
  );
};

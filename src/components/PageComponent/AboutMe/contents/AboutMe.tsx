import { CustomButton } from "../../../CustomButton/CustomButton";
import { HiOutlineCube } from "react-icons/hi";
import { LuClapperboard } from "react-icons/lu";

interface Props {
  label: string;
}

export const AboutMe = ({ label }: Props) => {
  return (
    <div className="h-fit flex flex-col justify-center flex-grow">
      <p className=" text-4xl animate_quick_scale mb-10 w-full text-center">
        {label}
      </p>
      <div className="w-full flex items-center justify-center gap-10 flex-col animate_quick_scale_down">
        <p className="w-2/3 lg:w-1/3">
          Jezreel Christian Bacasno is a skilled web developer, multimedia
          artist, and 3D designer with a passion for creating seamless digital
          experiences. As a musician and cat enthusiast, he blends creativity
          and precision, bringing a unique touch to every project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 px-5">
          <CustomButton className="flex-grow px-5 py-3 flex">
            <p className="text-xs text-left">&lt;&#8725;&gt;</p>
            <p className="mt-1">Web Applications</p>
          </CustomButton>
          <CustomButton className="flex-grow px-5 py-3 flex">
            <div>
              <LuClapperboard />
            </div>
            <p className="mt-1">Multi Media</p>
          </CustomButton>
          <CustomButton className="flex-grow px-5 py-3 flex">
            <div>
              <HiOutlineCube />
            </div>{" "}
            <p className="mt-1">3D Models</p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

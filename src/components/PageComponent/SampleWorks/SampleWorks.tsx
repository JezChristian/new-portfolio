import { CustomButton } from "../../CustomButton/CustomButton";
import { LuClapperboard } from "react-icons/lu";
import { HiOutlineCube } from "react-icons/hi";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../atomic/atomic";

export const SampleWorks = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col pt-36">
      <div className="flex gap-2">
        <CustomButton className="text-lg flex items-center justify-center w-fit h-14 ">
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <p className="text-xs text-left">&lt;&#8725;&gt;</p>
            <p className="text-[10px] leading-3 ">Web Apps</p>
          </span>
        </CustomButton>
        <CustomButton className="text-lg flex items-center justify-center w-fit h-14 ">
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <LuClapperboard />
            <p className="text-[10px] leading-3 ">Multimedia</p>
          </span>
        </CustomButton>
        <CustomButton className="text-lg flex items-center justify-center w-fit h-14 ">
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <HiOutlineCube />
            <p className="text-[10px] leading-3 ">3D Works</p>
          </span>
        </CustomButton>
      </div>
      <div className="h-fit flex flex-grow w-full ">
        <Platform />
      </div>
    </div>
  );
};

const Platform = () => {
  const isDark = useAtomValue(themeAtom);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <div>Image</div>
      <div className="flex flex-col items-center justify-center ">
        <div
          className={` w-72 h-72 rounded-full transition-all duration-500 relative z-50 animate_platform_float  ${
            isDark ? "neumorphic-dark " : "neumorphic-light"
          } `}
        />
        <div
          className={` w-60 h-60 rounded-full transition-all duration-500 -mt-[245px] relative z-40 animate_platform_float  ${
            isDark ? "neumorphic-dark " : "neumorphic-light"
          } `}
        />
        <div
          className={` w-60 h-60 rounded-full transition-all duration-500  -mt-[245px] relative animate_platform_float_reverse opacity-30  ${
            isDark ? "neumorphic-dark " : "neumorphic-light"
          } `}
        />
      </div>
    </div>
  );
};

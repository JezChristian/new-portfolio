import { BsFilePerson } from "react-icons/bs";
import { TbSchool, TbTargetArrow } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { useAtom } from "jotai";
import { aboutMeAtom } from "../../../../atomic/atomic";
import { useEffect } from "react";

interface AboutMeButtonProps {
  setOnFocus: (value: boolean) => void;
  onFocus: boolean;
}

export const AboutMeButton = ({ setOnFocus, onFocus }: AboutMeButtonProps) => {
  const [selectedItem, setSelectedItem] = useAtom(aboutMeAtom);

  const handleSelected = (item: string) => {
    setOnFocus(false);
    setSelectedItem(item);
  };
  const handleResetSelected = (item: string) => {
    setOnFocus(true);
    setSelectedItem(item);
  };

  useEffect(() => {
    if (selectedItem == "") {
      handleResetSelected("");
    }
  }, [selectedItem]);

  return (
    <>
      <div
        className={` items-center justify-end transition-all duration-500 sticky bottom-10  self-start  rounded-xl  ${
          onFocus
            ? "w-full h-fit gap-10 py-5 flex flex-col pt-40"
            : "w-1/5 min-w-[280px] h-28 py-2 ml-2 scale-75 flex gap-5"
        }`}
      >
        {!onFocus && (
          <CustomButton onClick={() => handleResetSelected("")} className="p-2">
            <IoMdArrowRoundBack />
          </CustomButton>
        )}
        <div
          className={`flex flex-col py-2 px-4 rounded-xl ${
            onFocus
              ? "w-full items-center gap-5"
              : "bg-[#E7E8EA] dark:bg-[#2a2a2a] shadow-lg bg-opacity-50 "
          }`}
        >
          <p
            className={` font-medium text-left text-black dark:text-white
          ${onFocus ? "text-4xl" : "text-md self-start pb-2 "}`}
          >
            Know me more
          </p>
          <div
            className={` flex items-center justify-center gap-3 transition-all duration-500 ${
              onFocus ? "w-1/2 h-60" : " w-full "
            }`}
          >
            <CustomButton
              onClick={() => handleSelected("About Me")}
              className={`h-full text-lg leading-5 flex items-center justify-center ${
                onFocus ? "w-1/3 " : "w-14 h-14"
              }`}
            >
              {onFocus ? (
                "About Me"
              ) : (
                <span className="text-2xl flex flex-col items-center mt-2">
                  <BsFilePerson />
                  <p className="text-[10px] -mt-2">Me</p>
                  {selectedItem == "About Me" && (
                    <div className="h-[3px] w-5 rounded-lg dark:bg-[#e2e2e2] bg-[#4D4D4D] -mt-2 mb-1 animate_quick_scale" />
                  )}
                </span>
              )}
            </CustomButton>
            <CustomButton
              onClick={() => handleSelected("Educational Background")}
              className={`h-full text-lg leading-5 flex items-center justify-center ${
                onFocus ? "w-1/3" : "w-14 h-14"
              }`}
            >
              {onFocus ? (
                "Educational Background"
              ) : (
                <span className="text-2xl flex flex-col items-center mt-2">
                  <TbSchool />
                  <p className="text-[10px] -mt-2">Edu</p>
                  {selectedItem == "Educational Background" && (
                    <div className="h-[3px] w-5 rounded-lg dark:bg-[#e2e2e2] bg-[#4D4D4D] -mt-2 mb-1 animate_quick_scale" />
                  )}
                </span>
              )}
            </CustomButton>
            <CustomButton
              onClick={() => handleSelected("Tools Used")}
              className={`h-full text-lg leading-5 flex items-center justify-center ${
                onFocus ? "w-1/3" : "w-14 h-14"
              }`}
            >
              {onFocus ? (
                "Tools Used"
              ) : (
                <span className="text-2xl flex flex-col items-center mt-2">
                  <TbTargetArrow />
                  <p className="text-[10px] -mt-2">Skills</p>
                  {selectedItem == "Skill | Hobbies" && (
                    <div className="h-[3px] w-5 rounded-lg dark:bg-[#e2e2e2] bg-[#4D4D4D] -mt-2 mb-1 animate_quick_scale" />
                  )}
                </span>
              )}
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
};

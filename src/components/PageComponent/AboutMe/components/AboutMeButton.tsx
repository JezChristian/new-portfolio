import { BsFilePerson } from "react-icons/bs";
import { TbSchool, TbTargetArrow } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { useAtom } from "jotai";
import { aboutMeAtom } from "../../../../atomic/atomic";
import { useEffect } from "react";
import { useScroll } from "../../../../hooks/useScroll";

interface AboutMeButtonProps {
  setOnFocus: (value: boolean) => void;
  onFocus: boolean;
}

export const AboutMeButton = ({ setOnFocus, onFocus }: AboutMeButtonProps) => {
  const { scrollTo } = useScroll();
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
    <div className="h-fit w-full ">
      <div
        className={`items-center transition-all duration-500 sticky bottom-10 self-start rounded-xl  ${
          onFocus
            ? "w-full h-fit gap-10 py-5 flex flex-col  justify-end "
            : "w-fit h-28 py-2 ml-2 scale-75 flex gap-5 justify-start"
        }`}
      >
        {!onFocus && (
          <CustomButton
            id="go-back-button"
            onClick={() => {
              handleResetSelected("");
              scrollTo("about", 60);
            }}
            className="p-2 min-w-9"
          >
            <IoMdArrowRoundBack />
          </CustomButton>
        )}
        <div
          className={` flex flex-col py-2 px-4 rounded-xl ${
            onFocus
              ? "w-full items-center gap-5"
              : "bg-[#E7E8EA] dark:bg-[#2a2a2a] shadow-lg bg-opacity-50 "
          }`}
        >
          <p
            className={` font-medium text-black dark:text-white text-center
  ${onFocus ? "~text-2xl/4xl" : "text-md self-start pb-2"}`}
          >
            Know me more
          </p>
          <div
            className={`h-fit flex flex-wrap items-center justify-center gap-3 transition-all duration-500  ${
              onFocus ? "w-fit ~min-h-40/60 " : " w-full min-w-[280px]"
            }`}
          >
            <CustomButton
              id="about-me-button"
              onClick={() => {
                handleSelected("About Me");
                scrollTo("about", 50);
              }}
              className={`~text-sm/lg leading-5 flex items-center justify-center ${
                onFocus ? "w-48 ~h-20/28 lg:h-60" : "w-14 h-14"
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
              id="edu-bg-button"
              onClick={() => handleSelected("Educational Background")}
              className={`~text-sm/lg leading-5 flex items-center justify-center ${
                onFocus ? "w-48 ~h-20/28 lg:h-60" : "w-14 h-14"
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
              id="work-exp-button"
              onClick={() => {
                handleSelected("Work Experience");
                scrollTo("about", 50);
              }}
              className={`~text-sm/lg leading-5 flex items-center justify-center px-5 ${
                onFocus ? "w-48 ~h-20/28 lg:h-60" : "w-14 h-14"
              }`}
            >
              {onFocus ? (
                "Work Experience"
              ) : (
                <span className="text-2xl flex flex-col items-center mt-2">
                  <GrWorkshop />
                  <p className="text-[10px] -mt-2">Work</p>
                  {selectedItem == "Work Experience" && (
                    <div className="h-[3px] w-5 rounded-lg dark:bg-[#e2e2e2] bg-[#4D4D4D] -mt-2 mb-1 animate_quick_scale" />
                  )}
                </span>
              )}
            </CustomButton>
            <CustomButton
              id="tools-button"
              onClick={() => {
                handleSelected("Tools Used");
                scrollTo("about", 50);
              }}
              className={`~text-sm/lg leading-5 flex items-center justify-center ${
                onFocus ? "w-48 ~h-20/28 lg:h-60" : "w-14 h-14"
              }`}
            >
              {onFocus ? (
                "Tools Used"
              ) : (
                <span className="text-2xl flex flex-col items-center mt-2">
                  <TbTargetArrow />
                  <p className="text-[10px] -mt-2">Skills</p>
                  {selectedItem == "Tools Used" && (
                    <div className="h-[3px] w-5 rounded-lg dark:bg-[#e2e2e2] bg-[#4D4D4D] -mt-2 mb-1 animate_quick_scale" />
                  )}
                </span>
              )}
            </CustomButton>
          </div>
        </div>
      </div>
      {/* Add */}
    </div>
  );
};

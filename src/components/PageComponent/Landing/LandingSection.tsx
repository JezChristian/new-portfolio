import ImageOne from "../../../assets/ImageOne.png";
import ImageTwo from "../../../assets/ImageTwo.png";
import ImageThree from "../../../assets/ImageThree.png";
import { CustomButton, GitHubContributions } from "../../index";
import { useScroll } from "../../../hooks/useScroll";

export const LandingSection = () => {
  const { scrollTo } = useScroll();

  return (
    <div className="min-h-screen h-fit flex flex-col w-full overflow-hidden">
      <div className="w-full flex flex-grow h-full justify-center items-center -mt-28">
        <div className="h-full flex flex-col justify-center px-[4vw] w-3/5">
          <div className="w-full opacity-80 my-5 text-left">
            <p className="font-semibold landing-header-clamp ">
              Hi! I'm Jezreel Christian.
            </p>
            <p className=" font-semibold italic">
              To know me more, just navigate with these buttons below!.
            </p>
          </div>
          <div className="flex flex-col gap-5 leading-[1vw] button-clamp-header items-start w-3/5 ">
            <CustomButton
              onClick={() => scrollTo("about", 50)}
              className="p-[2vh] text-left min-h-[8vh] h-fit w-[80%]"
            >
              <p className="uppercase font-bold button-clamp-header leading-4">
                Personal Information
              </p>
              <p className="italic leading-4 text-xs">Who am I?</p>
            </CustomButton>
            <CustomButton className=" p-[2vh] text-left min-h-[11vh] h-fit leading-4 w-[65%]">
              <p className="uppercase font-bold button-clamp-header">
                My Portfolio
              </p>
              <p className="leading-3 transition-all duration-300 text-xs">
                Web Programmer | 3D Artist | Multimedia Artist
              </p>
            </CustomButton>
            <div className="w-[85%] gap-5 flex">
              <CustomButton className="w-[55%] p-[2vh] text-left h-[9vh] min-h-[60px]">
                <p className="uppercase font-bold button-clamp-header">
                  Contact Me
                </p>
              </CustomButton>
              <CustomButton className="w-[45%] p-[2vh] text-left  min-h-[60px]">
                <p className="uppercase font-bold button-clamp-header">
                  Download
                </p>
                <p className="italic text-xs">Resume</p>
              </CustomButton>
            </div>
            <GitHubContributions />
          </div>
        </div>
        <div className="w-2/5 h-full flex items-start justify-start scale-125 pt-[2vw] -ml-14">
          <img
            src={ImageTwo}
            alt="ImageTwo"
            className="animate-floatTwo w-[10vw] min-w-[70px]"
          />
          <img
            src={ImageOne}
            alt="ImageOne"
            className="animate-floatOne w-[10vw] min-w-[70px]"
          />
          <img
            src={ImageThree}
            alt="ImageThree"
            className="animate-floatTwo w-[10vw] min-w-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

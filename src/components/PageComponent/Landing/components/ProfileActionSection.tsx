import { useScroll } from "../../../../hooks/useScroll";
import { CustomButton } from "../../../CustomButton/CustomButton";

export const ProfileActionSection = () => {
  const { scrollTo } = useScroll();
  return (
    <div className="w-full flex flex-col gap-5 leading-[1vw] ~text-xs/lg items-start lg:w-3/5 mt-5">
      <CustomButton
        onClick={() => scrollTo("about", 50)}
        className="~p-2/5 text-left h-fit w-full lg:w-4/5"
      >
        <p className="uppercase font-bold ~text-xs/lg leading-4">
          Personal Information
        </p>
        <p className="italic leading-4 text-xs">Who am I?</p>
      </CustomButton>
      <CustomButton
        onClick={() => scrollTo("portfolio", 50)}
        className="~p-2/5 text-left  h-fit leading-4 lg:w-3/5"
      >
        <p className="uppercase font-bold ~text-xs/lg">My Portfolio</p>
        <p className="leading-3 transition-all duration-300 text-xs">
          Web Programmer | 3D Artist | Multimedia Artist
        </p>
      </CustomButton>
      <div className="w-full lg:w-[85%] gap-5 flex">
        <CustomButton className="~p-2/5 w-1/2 text-left ">
          <p className="uppercase font-bold ~text-xs/lg">Contact Me</p>
        </CustomButton>
        <CustomButton className="~p-2/5 w-1/2 text-left ">
          <p className="uppercase font-bold ~text-xs/lg">Download</p>
          <p className="italic text-xs">Resume</p>
        </CustomButton>
      </div>
    </div>
  );
};

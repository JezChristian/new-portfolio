import GitHubCalendar from "react-github-calendar";
import { subMonths } from "date-fns";
import GitHubIcon from "@mui/icons-material/GitHub";
import toast from "react-hot-toast";
import { CustomButton } from "../../index";
import { useScroll } from "../../../hooks/useScroll";
import ImageOne from "../../../assets/ImageOne.png";
import ImageTwo from "../../../assets/ImageTwo.png";
import ImageThree from "../../../assets/ImageThree.png";

export const LandingSection = () => {
  const lastSixMonths = subMonths(new Date(), 8);
  const { scrollTo } = useScroll();

  return (
    <div className="h-auto min-h-screen flex flex-col w-full ">
      <div className="w-full flex flex-grow h-full justify-center items-center">
        <div className="w-1/2 pl-20 h-full">
          <div className="w-full text-left opacity-80 my-10 ">
            <p className="text-6xl font-semibold mt-10">
              Hi! I'm Jezreel Christian.
            </p>
            <p className=" font-semibold italic text-lg">
              To know me more, just navigate with these buttons below!.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full leading-3 ">
            <CustomButton
              onClick={() => scrollTo("about", 50)}
              className="w-[66%] p-5 text-left"
            >
              <p className="uppercase font-bold text-lg">
                Personal Information
              </p>
              <p className="italic">Who am I?</p>
            </CustomButton>
            <CustomButton className=" w-[60%] p-5 text-left ">
              <p className="uppercase font-bold text-lg">My Portfolio</p>
              <p className="text-xs transition-all duration-300">
                Web Programmer | 3D Artist | Multimedia Artist
              </p>
            </CustomButton>
            <div className="w-[55%] gap-5 flex ">
              <CustomButton className="w-[60%] p-5 text-left ">
                <p className="uppercase font-bold text-lg">Contact Me</p>
                <p className="italic">Who am I?</p>
              </CustomButton>
              <CustomButton className="w-[40%] p-5 text-left ">
                <p className="uppercase font-bold text-md">Download</p>
                <p className="italic -mt-1 text-xs">Resume</p>
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex pl-20">
          {/* <div className="scale-120 flex ">
            <img
              src={ImageTwo}
              alt="ImageTwo"
              className="animate-floatTwo hover:scale-125"
            />
            <img
              src={ImageOne}
              alt="ImageOne"
              className="animate-floatOne hover:scale-125"
            />
            <img
              src={ImageThree}
              alt="ImageThree"
              className="animate-floatTwo "
            />
          </div> */}
        </div>
      </div>
      {/* <CustomButton className=" px-5 w-fit py-3">
        <div className="text-lg font-bold flex gap-5 my-2">
          <span>
            <GitHubIcon />
          </span>
          <p>Github Contributions</p>
        </div>
        <GitHubCalendar
          transformData={(contributions) =>
            contributions.filter((day) => new Date(day.date) >= lastSixMonths)
          }
          eventHandlers={{
            onClick: () => (activity) => {
              toast(
                <div className="text-xs font-semibold italic">
                  {activity.count} Git{" "}
                  {activity.count > 1 ? "activities" : "activity"} on{" "}
                  {activity.date}
                </div>,
                {
                  icon: "👏",
                }
              );
            },
          }}
          colorScheme="light"
          labels={{
            totalCount: "{{count}} contributions in the last 8 months",
          }}
          username="JezChristian"
        />
      </CustomButton> */}
    </div>
  );
};

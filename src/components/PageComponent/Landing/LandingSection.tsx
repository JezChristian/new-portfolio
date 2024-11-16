// import GitHubCalendar from "react-github-calendar";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import toast from "react-hot-toast";
// import { subMonths } from "date-fns";
import ImageOne from "../../../assets/ImageOne.png";
import ImageTwo from "../../../assets/ImageTwo.png";
import ImageThree from "../../../assets/ImageThree.png";
import { CustomButton } from "../../index";
import { useScroll } from "../../../hooks/useScroll";

export const LandingSection = () => {
  // const lastSixMonths = subMonths(new Date(), 8);
  const { scrollTo } = useScroll();

  return (
    <div className="h-screen flex flex-col w-full overflow-hidden">
      <div className="w-full flex flex-grow h-full justify-center items-start pt-10">
        <div className="w-3/5 px-[4vw] h-full flex flex-col justify-center">
          <div className="w-full text-left opacity-80 my-5 ">
            <p className="font-semibold mt-10 landing-header-clamp leading-[4vw]">
              Hi! I'm Jezreel Christian.
            </p>
            <p className=" font-semibold italic landing-subheader-clamp">
              To know me more, just navigate with these buttons below!.
            </p>
          </div>
          <div className="flex flex-col gap-5 w-3/5 leading-[1vw] button-clamp-header">
            <CustomButton
              onClick={() => scrollTo("about", 50)}
              className="w-[80%] p-[1vw] text-left h-[8vh]"
            >
              <span className="uppercase font-bold button-clamp-header">
                Personal Information
              </span>
              <p className="italic">Who am I?</p>
            </CustomButton>
            <CustomButton className=" w-[65%] p-[1vw] text-left  h-[11vh]">
              <p className="uppercase font-bold button-clamp-header">
                My Portfolio
              </p>
              <p className="leading-[.8vw] transition-all duration-300">
                Web Programmer | 3D Artist | Multimedia Artist
              </p>
            </CustomButton>
            <div className="w-[65%] gap-5 flex">
              <CustomButton className="w-[55%] p-[1vw] text-left h-[9vh]">
                <p className="uppercase font-bold button-clamp-header">
                  Contact Me
                </p>
                <p className="italic -mt-1 button-clamp-header">Who am I?</p>
              </CustomButton>
              <CustomButton className="w-[45%] p-[1vw] text-left ">
                <p className="uppercase font-bold button-clamp-header">
                  Download
                </p>
                <p className="italic -mt-1 button-clamp-header">Resume</p>
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full flex items-start justify-start scale-125 pt-[2vw]">
          <img
            src={ImageTwo}
            alt="ImageTwo"
            className="animate-floatTwo w-[10vw]"
          />
          <img
            src={ImageOne}
            alt="ImageOne"
            className="animate-floatOne w-[10vw]"
          />
          <img
            src={ImageThree}
            alt="ImageThree"
            className="animate-floatTwo w-[10vw]"
          />
        </div>
      </div>
      {/* <div className="w-full px-5 py-3 flex items-center justify-center mt-24">
        <CustomButton className="w-1/2 p-10 max-w-[650px]">
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
        </CustomButton>
      </div> */}
    </div>
  );
};

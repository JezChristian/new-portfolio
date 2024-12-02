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

  console.log("HEllo")

  return (
    <div className="min-h-screen h-fit flex flex-col w-full overflow-hidden">
      <div className="w-full flex flex-col-reverse flex-grow h-full justify-center items-center pt-10 sm:flex-row">
        <div className="w-full h-full flex flex-col justify-center px-[4vw] sm:w-3/5">
          <div className="w-full opacity-80 my-5 text-center sm:text-left">
            <p className="font-semibold mt-10 landing-header-clamp max-leading-[4vw] leading-8">
              Hi! I'm Jezreel Christian.
            </p>
            <p className=" font-semibold italic landing-subheader-clamp">
              To know me more, just navigate with these buttons below!.
            </p>
          </div>
          <div className="flex flex-col gap-5 leading-[1vw] button-clamp-header w-full items-center sm:items-start sm:w-3/5 ">
            <CustomButton
              onClick={() => scrollTo("about", 50)}
              className="w-full p-[2vh] text-left min-h-[8vh] h-fit  sm:w-[80%]"
            >
              <p className="uppercase font-bold button-clamp-header leading-4">
                Personal Information
              </p>
              <p className="italic leading-4 text-xs">Who am I?</p>
            </CustomButton>
            <CustomButton className="w-full p-[2vh] text-left min-h-[11vh] h-fit leading-4 sm:w-[65%]">
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

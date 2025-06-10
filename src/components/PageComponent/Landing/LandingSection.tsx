import {
  GitHubContributions,
  NameSection,
  ImageSection,
  ProfileActionSection,
} from "../../index";

export const LandingSection = () => {
  return (
    <div className="flex w-full h-full pt-10 flex-col-reverse lg:flex-row ">
      <div className="lg:w-2/3 opacity-80 text-left h-full flex flex-col items-start justify-center ~px-14/28">
        <NameSection />
        <ProfileActionSection />
        <GitHubContributions />
      </div>
      <ImageSection />
    </div>
  );
};

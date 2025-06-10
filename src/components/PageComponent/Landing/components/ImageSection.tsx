import {
  ImageOne,
  ImageThree,
  ImageTwo,
} from "../../../../assets/skills_assets";

export const ImageSection = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mb-10 lg:w-2/5 lg:items-start lg:justify-start lg:-ml-14">
      <img
        src={ImageTwo}
        alt="ImageTwo"
        className="animate-floatTwo ~w-16/52 min-w-[70px] "
      />
      <img
        src={ImageOne}
        alt="ImageOne"
        className="animate-floatOne ~w-16/44 min-w-[70px]"
      />
      <img
        src={ImageThree}
        alt="ImageThree"
        className="animate-floatTwo ~w-16/52 min-w-[70px]"
      />
    </div>
  );
};

import { SetStateAction } from "jotai";
import { Dispatch, MutableRefObject, useRef, useState } from "react";
import { MediaType } from "../../../../types";
import { CustomButton } from "../../../CustomButton/CustomButton";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { VideoControl } from "./VideoControls";

interface Props {
  selectedCategory: MediaType[] | null;
  selectedWork: string | undefined;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}

const Platform = ({
  selectedCategory,
  selectedWork,
  selectedIndex,
  setSelectedIndex,
}: Props) => {
  const CategoryLength = selectedCategory?.length ?? 0;

  const prevItemHandler = () => {
    setSelectedIndex((prev) => (prev === 0 ? CategoryLength - 1 : prev - 1));
  };
  const nextItemHandler = () => {
    setSelectedIndex((prev) => (prev === CategoryLength - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full items-center justify-start flex flex-col gap-10 pt-5 px-5">
      <p className="~text-3xl/5xl font-semibold text-center">{selectedWork}</p>
      <div className="flex h-fit justify-center gap-5 items-center w-full">
        <CustomButton
          className="lg:flex hidden  w-fit h-52 text-3xl px-4 items-center justify-center animate_quick_scale"
          onClick={prevItemHandler}
        >
          <IoChevronBackCircleOutline />
        </CustomButton>
        <div>
          <CustomButton className="h-fit px-5 pt-2 pb-6 transition-all duration-700 w-fit ">
            <div className=" flex flex-col gap-5 relative items-center">
              <p className="~text-lg/xl ~leading-5/7 font-semibold sticky top-0 max-w-[500px]">
                {selectedCategory?.[selectedIndex].label}
              </p>
              <ContentTypeIdentifyer item={selectedCategory?.[selectedIndex]} />
            </div>
          </CustomButton>
          <div className="lg:hidden flex w-full mt-5 gap-5 animate_quick_scale">
            <CustomButton
              className="flex flex-grow h-14 text-3xl px-4 items-center justify-center"
              onClick={prevItemHandler}
            >
              <IoChevronBackCircleOutline />
            </CustomButton>
            <CustomButton
              className="flex flex-grow h-14 text-3xl px-4 items-center justify-center"
              onClick={nextItemHandler}
            >
              <IoChevronForwardCircleOutline />
            </CustomButton>
          </div>
        </div>
        <CustomButton
          className="lg:flex hidden  w-fit h-52 text-3xl px-4 items-center justify-center animate_quick_scale"
          onClick={nextItemHandler}
        >
          <IoChevronForwardCircleOutline />
        </CustomButton>
      </div>
    </div>
  );
};

export default Platform;

interface ContentTypeIdentifyerProp {
  item: MediaType | undefined;
}

const ContentTypeIdentifyer = ({ item }: ContentTypeIdentifyerProp) => {
  const [play, setPlay] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;

  const handlePlay = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div className="self-center w-full items-center justify-center flex flex-col">
      {item?.type == "img" ? (
        <img className="w-64 h-auto aspect-square rounded-md" src={item?.src} />
      ) : (
        <>
          <video
            ref={videoRef}
            className=" w-full max-w-[580px] aspect-video rounded-md mb-5"
            src={item?.src}
            muted={mute}
            autoPlay={play}
          />
          <VideoControl
            handlePlay={handlePlay}
            mute={mute}
            setMute={setMute}
            play={play}
            toggleView={false}
          />
        </>
      )}
    </div>
  );
};

{
  /* <CustomButton className="h-fit px-5 pt-2 pb-6 transition-all duration-700 w-fit ">
          <div className=" flex flex-col gap-5 relative items-center">
            <p className="text-xl font-semibold sticky top-0 max-w-[500px]">
              {selectedCategory?.[selectedIndex].label}
            </p>
            <ContentTypeIdentifyer item={selectedCategory?.[selectedIndex]} />
          </div>
        </CustomButton> */
}

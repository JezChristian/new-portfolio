import { useAtomValue } from "jotai";
import { themeAtom } from "../../../../atomic/atomic";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MutableRefObject, useRef, useState } from "react";
import { PiSpeakerSimpleNoneBold, PiSpeakerSlashBold } from "react-icons/pi";
import { MediaType } from "../../../../assets/Works";
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";

interface Props {
  List: MediaType[] | null | undefined;
  selectedIndex: number;
  selectedWork: string | undefined;
  setSelectedIndex: (value: number) => void;
}

export const Platform = ({
  List,
  selectedIndex,
  selectedWork,
  setSelectedIndex,
}: Props) => {
  const isDark = useAtomValue(themeAtom);
  const [itemSelect, setItemSelect] = useState<MediaType | null>();
  const [toggleView, setToggleView] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [mute, setMute] = useState<boolean>(false);

  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;

  const handlePrev = () => {
    setSelectedIndex(
      selectedIndex != 0 ? selectedIndex - 1 : selectedIndex + 1
    );
    setItemSelect(List && List[selectedIndex - 1]);
  };
  const handleNext = () => {
    setSelectedIndex(
      List && List.length - 1 != selectedIndex ? selectedIndex + 1 : 0
    );
    setItemSelect(List && List[selectedIndex + 1]);
  };

  const handlePlay = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="w-screen h-full flex overflow-hidden">
      <div
        className={`transition-all  duration-500 flex flex-col items-center justify-center ${
          toggleView && itemSelect != null ? "w-1/2" : "w-full"
        }`}
      >
        <div className="z-50 flex flex-col w-fit h-full pt-28">
          {!toggleView &&
            List &&
            List.map(
              (item, index) =>
                selectedIndex == item.id && (
                  <div
                    key={index}
                    className="w-full text-center flex flex-col justify-center z-50 animate_quick_scale"
                  >
                    <p>{selectedWork}</p>
                    <p className="text-2xl font-semibold">{item.label}</p>
                  </div>
                )
            )}
          <div className="flex h-full justify-center items-center -my-14 gap-24">
            <CustomButton
              onClick={handlePrev}
              className="h-1/3 px-4 flex justify-center items-center "
            >
              <BsChevronLeft />
            </CustomButton>
            <div className="w-1/3">
              {List &&
                List.map(
                  (item, index) =>
                    selectedIndex == item.id && (
                      <div
                        key={index}
                        onClick={() => {
                          setItemSelect(item);
                          setToggleView(!toggleView);
                        }}
                        className="animate_regular_float flex flex-col"
                      >
                        <div
                          className={`w-6 h-6 flex items-center justify-center rounded-full z-[50] self-end -mb-2 -mr-2 cursor-pointer ${
                            isDark
                              ? " text-[#1C1C1C] neumorphic-light transition-all duration-500"
                              : " text-[#E4E5E7] neumorphic-dark transition-all duration-500"
                          }`}
                        >
                          ?
                        </div>
                        <CustomButton className="p-3">
                          {item.type == "img" ? (
                            <img
                              src={item.src}
                              alt={item.label}
                              className="rounded-md shadow-lg"
                            />
                          ) : (
                            <>
                              <video
                                muted={mute}
                                autoPlay={play}
                                loop
                                ref={videoRef}
                                className="rounded-md shadow-lg"
                              >
                                <source src={item.src} />
                              </video>
                              <VideoControl
                                toggleView={toggleView}
                                handlePlay={handlePlay}
                                play={play}
                                mute={mute}
                                setMute={setMute}
                              />
                            </>
                          )}
                        </CustomButton>
                      </div>
                    )
                )}
            </div>
            <CustomButton
              onClick={handleNext}
              className="h-1/3 px-4 flex justify-center items-center "
            >
              <BsChevronRight />
            </CustomButton>
          </div>
        </div>
        <MainPlatform />
      </div>
      <div
        className={`transition-all duration-500 flex flex-col z-50 py-10 ${
          toggleView && itemSelect != null ? "w-1/2" : "w-0"
        }`}
      >
        <div className="animate_quick_scale flex flex-col gap-10">
          <div className="flex w-full justify-between pr-10 gap-5">
            {itemSelect?.thumbnail != null && (
              <CustomButton className="p-2 object-fill min-h-28 min-w-28 max-w-28 max-h-28">
                <img
                  className="w-full h-full rounded-lg"
                  src={itemSelect?.thumbnail}
                  alt={itemSelect?.label}
                />
              </CustomButton>
            )}
            <div className="self-start flex flex-grow flex-col">
              <p>{selectedWork}</p>
              <p className="flex z-50 text-3xl font-semibold">
                {itemSelect?.label}
              </p>
            </div>
            <p
              onClick={() => setToggleView(false)}
              className="text-4xl flex items-start justify-center w-24 cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <IoCloseCircleOutline />
            </p>
          </div>
          <div className={`${toggleView ? " w-3/4" : "w-0 h-0"}`}>
            <p>{itemSelect?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainPlatform = () => {
  const isDark = useAtomValue(themeAtom);

  return (
    <div className="flex flex-col items-center justify-center -mt-48  w-1/3">
      <div
        className={` w-80 h-80 rounded-full transition-all duration-500 relative z-40 animate_platform_float  ${
          isDark ? "neumorphic-dark " : "neumorphic-light"
        } `}
      />
      <div
        className={` w-72 h-72 rounded-full transition-all duration-500 -mt-[280px] relative z-30 animate_platform_float  ${
          isDark ? "neumorphic-dark " : "neumorphic-light"
        } `}
      />
      <div
        className={` w-72 h-72 rounded-full transition-all duration-500  -mt-[280px] relative animate_platform_float_reverse opacity-30  ${
          isDark ? "neumorphic-dark " : "neumorphic-light"
        } `}
      />
    </div>
  );
};

interface VideoControlProps {
  handlePlay: () => void;
  setMute: (value: boolean) => void;
  play: boolean;
  mute: boolean;
  toggleView: boolean;
}

const VideoControl = ({
  handlePlay,
  toggleView,
  play,
  mute,
  setMute,
}: VideoControlProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex gap-2 justify-end relative bottom-0 right-0 pt-2"
    >
      <CustomButton onClick={handlePlay} className="px-5 py-2">
        {play ? (
          <div className="flex items-center justify-center gap-2 text-xs">
            <IoMdPause /> {!toggleView && "Pause"}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-xs">
            <FaPlay /> {!toggleView && "Play"}
          </div>
        )}
      </CustomButton>
      <CustomButton onClick={() => setMute(!mute)} className="px-5 py-2">
        {mute ? (
          <div className="flex items-center justify-center gap-2 text-xs">
            <PiSpeakerSlashBold /> {!toggleView && "Unmute"}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 text-xs">
            <PiSpeakerSimpleNoneBold /> {!toggleView && "Mute"}
          </div>
        )}
      </CustomButton>
    </div>
  );
};

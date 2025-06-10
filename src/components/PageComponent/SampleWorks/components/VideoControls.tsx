import { IoMdPause } from "react-icons/io";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { FaPlay } from "react-icons/fa";
import { PiSpeakerSimpleNoneBold, PiSpeakerSlashBold } from "react-icons/pi";

interface VideoControlProps {
  handlePlay: () => void;
  setMute: (value: boolean) => void;
  play: boolean;
  mute: boolean;
  toggleView: boolean;
}

export const VideoControl = ({
  handlePlay,
  toggleView,
  play,
  mute,
  setMute,
}: VideoControlProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex gap-2 justify-between items-center relative bottom-0 right-0 pt-2 flex-wrap w-full"
    >
      <CustomButton id="description-button" className="text-[.7rem] py-2 px-5">
        View Description
      </CustomButton>
      <div className="flex gap-2 flex-wrap flex-grow lg:flex-grow-0 ">
        <CustomButton
          id="play-button"
          onClick={handlePlay}
          className="px-5 py-2 flex flex-grow justify-center lg:flex-grow-0"
        >
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
        <CustomButton
          id="mute-button"
          onClick={() => setMute(!mute)}
          className="px-5 py-2 flex flex-grow justify-center lg:flex-grow-0"
        >
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
    </div>
  );
};

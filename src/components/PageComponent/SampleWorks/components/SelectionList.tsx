import { LuClapperboard } from "react-icons/lu";
import { CustomButton } from "../../../CustomButton/CustomButton";
import { HiOutlineCube } from "react-icons/hi";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../../atomic/atomic";

interface Props {
  selectedWork: number;
  setSelectedWork: (value: number) => void;
  setSelectedIndex: (value: number) => void;
}

export const SelectionList = ({
  selectedWork,
  setSelectedWork,
  setSelectedIndex,
}: Props) => {
  const isDark = useAtomValue(themeAtom);

  const handleSelection = (selected: number) => {
    setSelectedWork(selected);
    setSelectedIndex(0);
  };

  return (
    <div className="flex gap-2 pb-5">
      <div
        className={` rounded-2xl w-fit h-fit p-1 ${
          selectedWork == 0 && isDark
            ? "border-b-2 border-[#141414]"
            : selectedWork == 0 && !isDark
            ? "border-b-2 border-white"
            : null
        }`}
      >
        <CustomButton
          onClick={() => handleSelection(0)}
          className="text-lg flex items-center justify-center w-fit h-14"
        >
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <p className="text-xs text-left">&lt;&#8725;&gt;</p>
            <p className="text-[10px] leading-3 ">Web Apps</p>
          </span>
        </CustomButton>
      </div>
      <div
        className={` rounded-2xl w-fit h-fit p-1 ${
          selectedWork == 1 && isDark
            ? "border-b-2 border-[#141414]"
            : selectedWork == 1 && !isDark
            ? "border-b-2 border-white"
            : null
        }`}
      >
        <CustomButton
          onClick={() => handleSelection(1)}
          className="text-lg flex items-center justify-center w-fit h-14"
        >
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <LuClapperboard />
            <p className="text-[10px] leading-3 ">Multimedia</p>
          </span>
        </CustomButton>
      </div>
      <div
        className={` rounded-2xl w-fit h-fit p-1 ${
          selectedWork == 2 && isDark
            ? "border-b-2 border-[#141414]"
            : selectedWork == 2 && !isDark
            ? "border-b-2 border-white"
            : null
        }`}
      >
        <CustomButton
          onClick={() => handleSelection(2)}
          className="text-lg flex items-center justify-center w-fit h-14"
        >
          <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
            <HiOutlineCube />
            <p className="text-[10px] leading-3 ">3D Works</p>
          </span>
        </CustomButton>
      </div>
    </div>
  );
};

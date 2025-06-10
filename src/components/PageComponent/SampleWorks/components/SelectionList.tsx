import { CustomButton } from "../../../CustomButton/CustomButton";
import { useAtomValue } from "jotai";
import { themeAtom } from "../../../../atomic/atomic";
import { CategorySelection } from "../../../../constants/constants";

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
    <div className="flex gap-2 pb-5 flex-wrap justify-center">
      {CategorySelection.length > 0 &&
        CategorySelection.map((category, index) => (
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
              id={category.label}
              disabled={index === 2}
              onClick={() => handleSelection(index)}
              className="text-lg flex items-center justify-center w-fit h-14 disabled:cursor-not-allowed"
            >
              <span className="text-2xl flex items-center gap-2 px-2 rounded-none">
                {category.icon}
                <p className="text-[10px] leading-3 ">{category.label}</p>
              </span>
            </CustomButton>
          </div>
        ))}
    </div>
  );
};

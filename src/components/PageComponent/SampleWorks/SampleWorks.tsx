import { useState } from "react";
import { SelectionList } from "./components/SelectionList";
import { MultiMedia, Web_Portfolio } from "../../../constants/constants";
import Platform from "./components/Platform";

export const SampleWorks = () => {
  const [selectedWork, setSelectedWork] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const selectedCategory = selectionItem(selectedWork);

  return (
    <div
      id="portfolio"
      className="w-full min-h-screen h-screen flex items-center justify-center flex-col pt-36 pb-28"
    >
      <SelectionList
        selectedWork={selectedWork}
        setSelectedIndex={setSelectedIndex}
        setSelectedWork={setSelectedWork}
      />
      <div className="h-fit flex flex-grow w-full">
        <Platform
          selectedCategory={selectedCategory?.items ?? []}
          selectedWork={selectedCategory?.label}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </div>
    </div>
  );
};

function selectionItem(item: number) {
  switch (item) {
    case 0:
      return { label: "Web Application", items: Web_Portfolio };
    case 1:
      return { label: "Multimedia", items: MultiMedia };
    case 2:
      return null;
    default:
      return null;
  }
}

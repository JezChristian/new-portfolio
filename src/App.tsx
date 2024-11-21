import { useAtomValue } from "jotai";
import {
  AboutMeSection,
  Header,
  LandingSection,
  SampleWorks,
  ScrollToTop,
} from "./components";
import { themeAtom } from "./atomic/atomic";

function App() {
  const isDark = useAtomValue(themeAtom);
  return (
    <div
      className={`dark:text-white text-black h-fit min-h-screen max-w-screen ${
        isDark
          ? "dark bg-home-black-radial animate_quick_scale"
          : "bg-home-white-gradient animate_quick_scale_down"
      }`}
    >
      <Header />
      <div className="w-full  flex flex-col items-center">
        <LandingSection />
        {/* <AboutMeSection />
        <SampleWorks /> */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;

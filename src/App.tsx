import { useEffect } from "react";
import {
  AboutMeSection,
  LandingSection,
  SampleWorks,
  ScrollToTop,
} from "./components";
import Layout from "./layout/Layout";
import { useAtomValue } from "jotai";
import { themeAtom } from "./atomic/atomic";

function App() {
  const isDark = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Layout>
      <LandingSection />
      <AboutMeSection />
      <SampleWorks />
      <ScrollToTop />
    </Layout>
  );
}

export default App;

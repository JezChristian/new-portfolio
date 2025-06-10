import { useEffect, useState } from "react";
import {
  AboutMeSection,
  ContactMe,
  Footer,
  LandingSection,
  SampleWorks,
  ScrollToTop,
} from "./components";
import Layout from "./layout/Layout";
import { useAtomValue } from "jotai";
import { themeAtom } from "./atomic/atomic";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isDark = useAtomValue(themeAtom);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <LandingSection />
          <AboutMeSection />
          <SampleWorks />
          <ContactMe />
          <ScrollToTop />
          <Footer />
        </>
      )}
    </Layout>
  );
}

export default App;

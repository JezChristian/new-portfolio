import { useAtomValue } from "jotai";
import React, { PropsWithChildren } from "react";
import { themeAtom } from "../atomic/atomic";
import { Header } from "../components";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const isDark = useAtomValue(themeAtom);
  return (
    <div
      className={`flex w-full max-w-screen items-center justify-center h-fit
    ${
      isDark
        ? "bg-home-black-radial animate_quick_scale"
        : "bg-home-white-gradient animate_quick_scale_down"
    }`}
    >
      <div className="dark:text-white text-black container">
        <Header />
        <div className="w-full h-full overflow-hidden pt-12">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

import { useAtomValue } from "jotai";
import { themeAtom } from "../atomic/atomic";

export const useTheme = () => {
  const theme = useAtomValue(themeAtom);
  return theme;
};

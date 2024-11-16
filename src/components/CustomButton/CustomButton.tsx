import { PropsWithChildren } from "react";
import { themeAtom } from "../../atomic/atomic";
import { useAtomValue } from "jotai";

interface CustomButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  const isDark = useAtomValue(themeAtom);
  return (
    <button
      onClick={onClick}
      className={`${className}  custom-button transition-all duration-500 ${
        isDark ? "neumorphic-dark " : "neumorphic-light"
      } `}
    >
      <span className="custom-button-border">{children}</span>
    </button>
  );
};

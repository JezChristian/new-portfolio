import { CSSProperties, PropsWithChildren } from "react";
import { themeAtom } from "../../atomic/atomic";
import { useAtomValue } from "jotai";

interface CustomButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
  style,
  disabled = false,
}) => {
  const isDark = useAtomValue(themeAtom);
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${className}  custom-button transition-all duration-500 ${
        isDark ? "neumorphic-dark " : "neumorphic-light"
      } `}
      disabled={disabled}
    >
      <span className="custom-button-border">{children}</span>
    </button>
  );
};

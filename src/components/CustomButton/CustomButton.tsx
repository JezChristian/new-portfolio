import { CSSProperties, PropsWithChildren } from "react";
import { themeAtom } from "../../atomic/atomic";
import { useAtomValue } from "jotai";

interface CustomButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: CSSProperties;
  id: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  className,
  style,
  disabled = false,
  id,
}) => {
  const isDark = useAtomValue(themeAtom);
  return (
    <button
      id={id}
      style={style}
      onClick={onClick}
      className={`${className}  custom-button transition-all duration-500 ${
        isDark
          ? "neumorphic-dark ~rounded-md/xl"
          : "neumorphic-light ~rounded-md/xl"
      } `}
      disabled={disabled}
    >
      <span className="custom-button-border">{children}</span>
    </button>
  );
};

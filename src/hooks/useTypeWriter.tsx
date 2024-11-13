import { useEffect, useState } from "react";

type Props = {
  WordToType: string;
  speed: number;
  interval?: number;
  toggle?: boolean;
};

export const useTypeWriter = ({
  WordToType,
  speed = 50,
  interval = 5000,
  toggle = true,
}: Props) => {
  const [typedText, setTypedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isForward, setIsForward] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isForward && toggle) {
        if (index < WordToType.length) {
          const timeout = setTimeout(() => {
            setTypedText((prev) => prev + WordToType.charAt(index));
            setIndex((prev) => prev + 1);
          }, speed);
          return () => clearTimeout(timeout);
        } else {
          setIsForward(false);
        }
      } else {
        if (index > 0 && toggle) {
          setTypedText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsForward(true);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [index, WordToType, speed, isForward, toggle]);

  useEffect(() => {
    const stateChanger = setInterval(() => {
      setIsForward(!isForward);
    }, interval);

    return () => clearInterval(stateChanger);
  }, [interval]);

  return typedText;
};

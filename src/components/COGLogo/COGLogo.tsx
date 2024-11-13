interface Props {
  front: string | undefined;
  back: string | undefined;
  className: string;
  rotation: "animate_rotate_counter_clockwise" | "animate_rotate_clockwise";
}
export const COGLogo = ({ front, back, className, rotation }: Props) => {
  return (
    <div className={`relative ${className} `}>
      <div className={rotation}>
        <img className="scale-[1.15] " src={back} alt={back} />
      </div>
      <img className="absolute inset-0 " src={front} alt={front} />
    </div>
  );
};

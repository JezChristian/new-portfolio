export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <div className=" w-full flex items-center justify-center z-50 dark:text-white ~pt-36/16 pb-5">
      <p className="text-xs">
        Copyrights © {year} | Designed by : Jezreel Christian
      </p>
    </div>
  );
};

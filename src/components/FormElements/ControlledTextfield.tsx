import { useAtomValue } from "jotai";
import { Control, Controller, Path } from "react-hook-form";
import { themeAtom } from "../../atomic/atomic";

interface Props<T extends object> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  isTextarea?: boolean;
}

export const ControlledTextfield = <T extends object>({
  name,
  label,
  isTextarea = false,
  control,
  ...rest
}: Props<T>) => {
  const isDark = useAtomValue(themeAtom);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <div className="w-full flex flex-col items-start gap-2">
          <label className="~text-xs/lg" htmlFor={name}>
            {label}{" "}
            {error?.message && (
              <span className="text-[.6rem] text-red-500 animate_quick_scale">
                {" "}
                | Required
              </span>
            )}
          </label>
          {isTextarea ? (
            <textarea
              id={name}
              value={value}
              ref={ref}
              onChange={onChange}
              className={`w-full py-3 rounded-md bg-[#00000042] outline-none px-4 shadow-md max-h-48 min-h-14 ${
                error?.message &&
                "border border-red-600/70 animate_error_wiggle"
              } ${isDark ? "bg-[#00000042]" : "bg-[#ffffff42]"}`}
              cols={5}
              rows={5}
              maxLength={300}
              {...rest}
            />
          ) : (
            <input
              id={name}
              value={value}
              ref={ref}
              onChange={onChange}
              className={`w-full py-3 rounded-md bg-[#00000042] outline-none px-4 shadow-md ${
                error?.message &&
                "border border-red-600/70 animate_error_wiggle"
              } ${isDark ? "bg-[#00000042]" : "bg-[#ffffff42]"}`}
              {...rest}
            />
          )}
          {/* {error?.message && (
            <p className="text-xs text-red-500 ">{error?.message}</p>
          )} */}
        </div>
      )}
    />
  );
};

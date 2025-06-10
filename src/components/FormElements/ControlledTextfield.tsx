import { Control, Controller, Path } from "react-hook-form";

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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <div className="w-full flex flex-col items-start gap-2">
          <label className="~text-xs/lg" htmlFor={name}>
            {label}
          </label>
          {isTextarea ? (
            <textarea
              id={name}
              value={value}
              ref={ref}
              onChange={onChange}
              className={
                "w-full py-3 rounded-md bg-[#00000042] outline-none px-4 shadow-md max-h-48 min-h-14"
              }
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
              className="w-full py-3 rounded-md bg-[#00000042] outline-none px-4 shadow-md"
              {...rest}
            />
          )}
          {error?.message && (
            <p className="text-xs text-red-500 ">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
};

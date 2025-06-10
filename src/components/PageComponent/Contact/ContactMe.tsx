import { useForm } from "react-hook-form";
import { CustomButton } from "../../CustomButton/CustomButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactMeSchema, ContactMeType } from "../../../validation/contact-me";
import { ControlledTextfield } from "../../FormElements/ControlledTextfield";
import toast from "react-hot-toast";

export const ContactMe = () => {
  const form = useForm<ContactMeType>({
    mode: "onSubmit",
    resolver: yupResolver(ContactMeSchema),
  });
  const { control, handleSubmit } = form;

  const submitFormHandler = (value: ContactMeType) => {
    console.log("Submitted Values : ", value);
    toast.success("Sample Send Success", {
      position: "top-center",
      id: "toast-update-account-success",
    });
  };
  return (
    <div
      id="contact-me"
      className="flex w-full h-fit lg:h-screen pt-10 flex-col items-center justify-center gap-5 animate_quick_scale"
    >
      <div className="w-2/3 lg:w-1/3 h-fit gap-5 flex flex-col">
        <p className="font-semibold ~text-3xl/5xl mb-5 font-Lexend self-center">
          Contact Me!
        </p>
        <CustomButton
          id="form-container"
          className=" py-10 px-5 flex flex-col "
        >
          <div className="flex-col lg:flex-row flex gap-5">
            <ControlledTextfield control={control} name="name" label="Name" />
            <ControlledTextfield
              control={control}
              name="mobile_number"
              label="Phone #"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <ControlledTextfield control={control} name="email" label="Email" />
            <ControlledTextfield
              control={control}
              name="message"
              label="Message"
              isTextarea
            />
          </div>
        </CustomButton>
        <CustomButton
          id="form-submit-button"
          onClick={handleSubmit(submitFormHandler)}
          className="w-36 py-3 self-end"
        >
          Submit
        </CustomButton>
      </div>
    </div>
  );
};

import * as yup from "yup";

export const ContactMeSchema = yup.object({
  name: yup.string().required().min(8).max(58).label("Name"),
  email: yup.string().email().required().label("Email"),
  mobile_number: yup.number().required().label("Phone Number"),
  message: yup.string().required().min(8).max(600).label("Message"),
});

export type ContactMeType = yup.InferType<typeof ContactMeSchema>;

import Image from "next/image";
import { TextField } from "./TextField";

export const StepTwo = () => {
  return (
    <div>
      <TextField label="First name" type="email" />
      <TextField label="Last name" place="Your last name " type="text" />
      <TextField label="Username" place="Your username " type="password" />
      <TextField label="Username" place="Your username " type="password" />
    </div>
  );
};

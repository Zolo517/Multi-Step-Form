import Image from "next/image";
import { TextField } from "./TextField";

export const StepThree = () => {
  return (
    <div>
      <TextField label="First name" type="date" />
      <TextField label="Last name" type="url" />
    </div>
  );
};

import Image from "next/image";
import { TextField } from "./TextField";

export const StepThree = () => {
  return (
    <div className="flex flex-col gap-3">
      <TextField label="Date of birth" type="date" id="date" />
      <TextField label="Profile image" type="file" id="img" />
    </div>
  );
};

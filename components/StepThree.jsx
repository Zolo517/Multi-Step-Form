import Image from "next/image";
import { TextField } from "./TextField";

export const StepThree = ({ name }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        name={name}
        error="Please select a date"
        label="Date of birth"
        type="date"
        id="date"
      />
      <TextField
        name={name}
        error="Image cannot be blank"
        label="Profile image"
        type="file"
        id="img"
      />
    </div>
  );
};

import Image from "next/image";
import { TextField } from "./TextField";

export const StepThree = ({ name, errors,setErrors }) => {
  return (
    <div className="flex flex-col gap-3">
      <TextField
        errors={errors}
        setErrors={setErrors}
        error="Please select a date"
        label="Date of birth"
        type="date"
        id="date"
      />
      <TextField
        errors={errors}
        title="Choose a video please"
        setErrors={setErrors}
        error="Image cannot be blank"
        label="Profile image"
        type="file"
        id="img"
      />
    </div>
  );
};

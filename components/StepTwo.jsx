import Image from "next/image";
import { TextField } from "./TextField";

export const StepTwo = () => {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const found = p.match(regex)
  return (
    <div className="flex flex-col gap-3">
      <TextField label="Email" type="email" place="Your email " id="email" />
      <TextField
        label="Phone Number"
        place="Your phone number "
        type="text"
        id="number"
      />
      <TextField
        label="Password"
        place="Your password "
        type="password"
        id="pass"
      />
      <TextField
        id="confirm"
        label="Confirm password"
        place="Your confirm password"
        type="password"
      />
    </div>
  );
};

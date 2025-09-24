
import { TextField } from "./TextField";

export const StepTwo = ({ name }) => {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const found = p.match(regex)
  return (
    <div className="flex flex-col gap-3">
      <TextField
        name={name}
        label="Email"
        type="email"
        place="example@gmail.com "
        id="email"
        error="Please provide a valid email address."
      />
      <TextField
        name={name}
        label="Phone Number"
        place="Your phone number "
        type="text"
        id="number"
        error="Please enter valid phone number."
      />
      <TextField
        name={name}
        label="Password"
        place="Your password "
        type="password"
        id="pass"
        error="Password must include letters and numbers."
      />
      <TextField
        name={name}
        id="confirm"
        label="Confirm password"
        place="Your confirm password"
        type="password"
        error="Password do not match. Please try again."
      />
    </div>
  );
};

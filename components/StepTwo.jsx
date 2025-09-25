
import { TextField } from "./TextField";

export const StepTwo = ({ name, errors , setErrors}) => {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const found = p.match(regex)
  return (
    <div className="flex flex-col gap-3">
      <TextField
       errors={ errors}
       setErrors={setErrors}
        label="Email"
        type="email"
        place="example@gmail.com "
        id="email"
        name="email"
      />
      <TextField
       errors={ errors}
       setErrors={setErrors}
        label="Phone Number"
        place="Your phone number "
        type="text"
        id="number"
        name="number"
        
      />
      <TextField
       errors={ errors}
       setErrors={setErrors}
        label="Password"
        place="Your password "
        type="password"
        id="pass"
        name="pass"
      />
      <TextField
       errors={ errors}
       setErrors={setErrors}
        id="confirm"
        name="confirm"
        label="Confirm password"
        place="Your confirm password"
        type="password"

      />
    </div>
  );
};

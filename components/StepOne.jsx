import { TextField } from "./TextField";
export const StepOne = (props) => {
  const { errors, setErrors, name } = props;
  return (
    <div className="flex flex-col gap-3">
      <TextField
        setErrors={setErrors}
        name={name}
        label="First name"
        place="Your first name "
        type="text"
        id="first"
        error="First name cannot contain special characters or numbers."
      />
      <TextField
        setErrors={setErrors}
        name={name}
        label="Last name"
        place="Your last name "
        type="text"
        id="last"
        error="Last name cannot contain special characters or numbers."
      />
      <TextField
        setErrors={setErrors}
        name={name}
        label="Username"
        place="Your username "
        type="text"
        id="user"
        error="This username is already taken. Please choose another one."
      />
    </div>
  );
};

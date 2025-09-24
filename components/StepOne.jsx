import { TextField } from "./TextField";
export const StepOne = (props) => {
  const { errors, setErrors, name } = props;
  return (
    <div className="flex flex-col gap-3">
      <div>
        <TextField
          setErrors={setErrors}
          errors={errors}
          label="First name"
          place="Your first name "
          type="text"
          id="first"
        />
        {errors.firstName && (
          <p className="text-[#E14942] text-[12px]">{errors.firstName} </p>
        )}
      </div>
      <div>
        <TextField
          errors={errors}
          setErrors={setErrors}
          label="Last name"
          place="Your last name "
          type="text"
          id="last"
        />
        {errors.lastName && (
          <p className="text-[#E14942] text-[12px]">{errors.lastName} </p>
        )}
      </div>
      <div>
        <TextField
          errors={errors}
          setErrors={setErrors}
          label="Username"
          place="Your username "
          type="text"
          id="user"
        />
        {errors.userName && (
          <p className="text-[#E14942] text-[12px]">{errors.userName} </p>
        )}
      </div>
    </div>
  );
};

import { TextField } from "./TextField";
export const StepOne = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  return (
    <div className="flex flex-col gap-3">
      <TextField setCurrentIndex={setCurrentIndex} label="First name" place="Your first name " type="text" id="first" />
      <TextField label="Last name" place="Your last name " type="text" id="last" />
      <TextField label="Username" place="Your username " type="text" id="user" />
    </div>
  );
};

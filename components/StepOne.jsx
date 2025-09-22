import { TextField } from "./TextField";
export const StepOne = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  return (
    <div>
      <TextField label="First name" place="Your first name " type="text"/>
      <TextField label="Last name" place="Your last name " type="text" />
      <TextField label="Username" place="Your username " type="text" />
    </div>
  );
};

import { TextField } from "./TextField";
import { AnimatePresence, motion } from "motion/react";

export const StepOne = (props) => {
  const { errors, setErrors } = props;
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-3">
        <div>
          <TextField
            setErrors={setErrors}
            errors={errors}
            label="First name"
            place="Your first name "
            type="text"
            id="first"
            name="first"
          />
        </div>
        <div>
          <TextField
            errors={errors}
            setErrors={setErrors}
            label="Last name"
            place="Your last name "
            type="text"
            id="last"
            name="last"
          />
        </div>
        <div>
          <TextField
            errors={errors}
            setErrors={setErrors}
            label="Username"
            place="Your username "
            type="text"
            id="user"
            name="user"
          />
        </div>
      </div>
    </motion.div>
  );
};

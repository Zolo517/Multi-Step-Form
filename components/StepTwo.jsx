import { TextField } from "./TextField";
import { AnimatePresence, motion } from "motion/react";

export const StepTwo = ({ handleChange }) => {
  // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // const found = p.match(regex)
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-3">
        <TextField
     handleChange={handleChange}
          label="Email"
          type="text"
          place="example@gmail.com "
          id="email"
          name="email"
        />
        <TextField
         handleChange={handleChange}
          label="Phone Number"
          place="Your phone number "
          type="text"
          id="number"
          name="number"
        />
        <TextField
          handleChange={handleChange}
          label="Password"
          place="Your password "
          type="password"
          id="pass"
          name="pass"
        />
        <TextField
          handleChange={handleChange}
          id="confirmPass"
          name="confirmPass"
          label="Confirm password"
          place="Your confirm password"
          type="password"
        />
      </div>
    </motion.div>
  );
};

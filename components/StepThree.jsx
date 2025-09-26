import Image from "next/image";
import { TextField } from "./TextField";
import { AnimatePresence, motion } from "motion/react";

export const StepThree = ({ name, errors, setErrors }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col gap-3">
        <TextField
          errors={errors}
          setErrors={setErrors}
          label="Date of birth"
          type="date"
          id="date"
          name="date"
        />
        <TextField
          errors={errors}
          title="Choose a video please"
          setErrors={setErrors}
          label="Profile image"
          type="file"
          id="img"
          name="img"
        />
      </div>
    </motion.div>
  );
};

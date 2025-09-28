import Image from "next/image";
import { TextField } from "./TextField";
import { AnimatePresence, motion } from "motion/react";

export const StepThree = ({
handleChange
}) => {
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
          label="Date of birth"
          type="date"
          id="date"
          name="date"
        />
        <TextField
         handleChange={handleChange}
          title="Choose a video please"
          label="Profile image"
          type="file"
          id="img"
          name="img"
        />
      </div>
    </motion.div>
  );
};

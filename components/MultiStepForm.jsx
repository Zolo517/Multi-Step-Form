"use client";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Button } from "./Button";
import { Header } from "./Header";

export const MultiStepForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const errors = {};

    const firstName = data.get("firstName");
    const lastName = data.get("lastName");
    const userName = data.get("userName");

    if (!firstName || !lastName || !userName) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
      errors.lastName =
        "Last name cannot contain special characters or numbers.";
      errors.userName =
        "This username is already taken. Please choose another one.";
    } else if (userName.length < 5) {
      errors.userName = "Too short name";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if (!validate(data)) {
      return null;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  if (currentIndex === 3) {
    return (
      <div className="w-120 h-[193px] bg-white p-8 flex flex-col justify-between">
        <Header
          h3="You're All Set! 🔥"
          p="We've received your submission. Thank you!"
        />
      </div>
    );
  }

  return (
    <div>
      <form
        className="w-120 h-[655px] bg-white p-8 flex flex-col  justify-between"
        onSubmit={handleSubmit}
      >
        <div className="">
          <Header
            h3="Join Us! 😎"
            p="Please provide all current information accurately."
          />
          <CurrentStep setErrors={setErrors} errors={errors} />
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            isContinue={false}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName="Back"
          />

          <Button
            type="submit"
            isContinue={true}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName="Continue"
          />
        </div>
      </form>
    </div>
  );
};

"use client";
import { useState } from "react";
import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Button } from "./Button";
import { Header } from "./Header";

export const MultiStepForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  const { errors, setErrors } = useState({});

  const onClickButton = (event) => {
    event.preventDefault();
  };
  const handleSubmit =()=>{
    
  }

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
    <form
      className="w-120 h-[655px] bg-white p-8 flex flex-col justify-between"
      onSubmit={onClickButton}
    >
      <div className="">
        <Header
          h3="Join Us! 😎"
          p="Please provide all current information accurately."
        />
        <CurrentStep setErrors={setErrors} errors={errors} />
      </div>
      <div className="flex justify-between">
        <div>
          <Button
            isContinue={false}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName={"Back"}
          />
        </div>
        <Button
          isContinue={true}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          buttonsName={"Continue"}
        />
      </div>
    </form>
  );
};

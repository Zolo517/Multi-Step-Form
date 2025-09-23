import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Button } from "./Button";
import { Header } from "./Header";

export const MultiStepForm = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];
 

  const continueButton = (buttonsName) => {
    if (buttonsName === "Continue" && currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
    } else if (buttonsName === "Back" && currentIndex < 1) {
      setCurrentIndex(currentIndex - 1);
    } else if (buttonsName === "Submit" && currentIndex === 2) {
      setCurrentIndex();
    }
  };

  return (
    <div className="w-120 h-[655px] bg-white p-8 flex flex-col justify-between">
      <div className="">
        <Header />
        <CurrentStep
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
      <div className="flex justify-between">
        <Button
        isContinue={false}
          // continueButton={continueButton}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          buttonsName={"Back"}
        />
        <Button
        isContinue={true}
          // continueButton={continueButton}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
          buttonsName={"Continue"}
        />
      </div>
    </div>
  );
};

import { StepOne } from "@/components/StepOne";
import { StepTwo } from "@/components/StepTwo";
import { StepThree } from "@/components/StepThree";
import { Button } from "./Button";
import { Header } from "./Header";


export const MultiStepForm = (props) => {
  const { currentIndex, setCurrentIndex } = props;
  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];
  return (
    <div className="w-120 h-[655px] bg-white p-8 ">
      <Header />
      <CurrentStep
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <div className="flex ">
      <Button
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      <Button
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
      </div>
    </div>
  );
};

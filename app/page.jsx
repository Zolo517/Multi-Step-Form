"use client";
import { useState } from "react";
import { MultiStepForm } from "@/components/MultiStepForm";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  return (
    <div className="flex flex-col justify-center items-center  h-[1062px] w-full ">
      <MultiStepForm
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </div>
  );
}

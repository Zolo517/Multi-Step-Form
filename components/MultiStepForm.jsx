"use client";
import { useEffect, useState } from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { Button } from "./Button";
import { Header } from "./Header";
import { StepFour } from "./StepFour";

export const MultiStepForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localData, setLocalData] = useState({
    first: "",
    last: "",
    user: "",
    email: "",
    number: "",
    pass: "",
    confirmPass: "",
    date: "",
    img: "",
  });

  const [errors, setErrors] = useState({});
  const CurrentStep = [StepOne, StepTwo, StepThree][currentIndex];

  useEffect(() => {
    
  }, []);

  const validate = (data) => {
    const errors = {};

    const first = data.get("first");
    const last = data.get("last");
    const user = data.get("user");
    const email = data.get("email");
    const number = data.get("number");
    const pass = data.get("pass");
    const confirmPass = data.get("confirmPass");
    const date = data.get("date");
    const img = data.get("img");

    const prevData = JSON.parse(localStorage.getItem("data"));

    if (currentIndex === 0) {
      if (!first || first.length < 5)
        errors.first =
          "First name cannot contain special characters or numbers.";
      if (!last || last.length < 5)
        errors.last = "Last name cannot contain special characters or numbers.";
      if (!user || user.length < 5)
        errors.user =
          "This username is already taken. Please choose another one.";
    }

    if (currentIndex === 1) {
      if (!email) errors.email = "Please provide a valid email address.";
      if (!number || number.length < 8)
        errors.number = "Please enter valid phone number.";
      if (!pass || pass.length < 6)
        errors.pass = "Password must include letters and numbers.";
      if (!confirmPass || confirmPass !== pass)
        errors.confirmPass = "Password do not match. Please try again.";
    }
    if (currentIndex === 2) {
      if (!date) errors.date = "Please select a date";
      if (!img) errors.img = "Image cannot be blank";
    }



    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const continueBtn = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const backBtn = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    if (!validate(data)) {
      return null;
    }

    setCurrentIndex(currentIndex + 1);
  };

  if (currentIndex === 3) {
    return (
      <div className=" bg-white p-8 flex flex-col  justify-between">
        <StepFour />
      </div>
    );
  }

  return (
    <form
      className="w-120 h-[655px] bg-white p-8 flex flex-col  justify-between"
      onSubmit={submitHandler}
    >
      <div className="">
        <Header />

        <CurrentStep setErrors={setErrors} errors={errors} />
      </div>

      <div className="flex gap-2">
        {currentIndex !== 0 ? (
          <Button
            type="button"
            isContinue={false}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName="<  Back"
            backBtn={backBtn}
          />
        ) : null}

        {currentIndex < 2 ? (
          <Button
            isContinue={true}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName="Continue"
            continueBtn={continueBtn}
          />
        ) : (
          <Button
            isContinue={true}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            buttonsName="Submit"
            continueBtn={continueBtn}
          />
        )}
      </div>
    </form>
  );
};

// localstorage.getItem = zaaval JSON.parse aar orooj objectiig string bolgoh ystoi
// localStorage.setItem = zaaval JSON.stringify aar orooj string bolgoh ystoi
// object bish gantshan item avmaar baigaa tohioldold JSON bichih shaardlaga baihgui

{
  /*

json ashiglaj objectiig string bolgoson



      const prevData = JSON.parse(localStorage.getItem("data"));
    if (prevData)
      localStorage.setItem(
        "data",
        JSON.stringify({
          ...prevData,
          first,
          last,
          user,
          email,
          number,
          pass,
          confirmPass,
          date,
          img,
        })
      );
    else
      localStorage.setItem(
        "data",
        JSON.stringify({
          first,
          last,
          user,
          email,
          number,
          pass,
          confirmPass,
          date,
          img,
        })
      );
      */
}

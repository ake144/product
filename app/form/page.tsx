"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiplestepForm } from "@/hooks/useMultiForm";
import { AnimatePresence } from "framer-motion";
import UserInfoForm from "@/components/forms/user-info";
import PlanForm from "@/components/forms/plan-form";
import AddonsForm from "@/components/forms/addon-form";
import FinalStep from "@/components/forms/final-form";
import SuccessMessage from "@/components/forms/success-msg";
import SideBar from "@/components/sidebar";
import { motion } from "framer-motion";
import { Span } from "next/dist/trace";


interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
  price: number;
}

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  yearly: boolean;
  addOns: AddOn[];
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Online Service",
      subtitle: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      checked: false,
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      checked: false,
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ],
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    goTo,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    const { name, email, phone } = fieldToUpdate;

    if (name && name.trim().length < 3) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be at least 3 characters long",
      }));
    } else if (name && name.trim().length > 15) {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name should be no longer than 15 characters",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Please enter a valid email address",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    if (phone && !/^[0-9]{10}$/.test(phone)) {
      setErrors((prevState) => ({
        ...prevState,
        phone: "Please enter a valid 10-digit phone number",
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        phone: "",
      }));
    }

    setFormData({ ...formData, ...fieldToUpdate });
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error)) {
      return;
    }
    nextStep();
  };
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="relative flex justify-center flex-col items-center min-h-screen w-full">
      <motion.h1
        className="text-2xl md:text-2xl lg:text-3xl font-geist-sans font-bold text-white mb-8 tracking-tight"
        initial="hidden"
        animate="show"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        {currentStepIndex === 0 && (
          <span>
            Making Hiring{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Easier
            </span>
          </span>
        )}
        {currentStepIndex === 1 && (
          <span>
            Build Your{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Adventure
            </span>
          </span>
        )}
        {currentStepIndex === 2 && (
          <span>
            Handle Teams{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Effortlessly
            </span>
          </span>
        )}
        {currentStepIndex === 3 && (
          <span>
            Time management{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              at Ease
            </span>
          </span>
        )}
      </motion.h1>
      <div
        className={`flex justify-between ${
          currentStepIndex === 1 ? "h-[700px] md:h-[700px]" : "h-[700px]"
        } w-11/12 max-w-7xl relative m-1 rounded-lg border border-neutral-700 bg-transparent/80 p-4`}
      >
        {!showSuccessMsg ? (
          <SideBar currentStepIndex={currentStepIndex} goTo={goTo} />
        ) : (
          ""
        )}
        <main
          className={`${showSuccessMsg ? "w-full" : "w-full md:mt-5 back md:w-[70%]"}`}
        >
          {showSuccessMsg ? (
            <AnimatePresence mode="wait">
              <SuccessMessage />
            </AnimatePresence>
          ) : (
            <form
              onSubmit={handleOnSubmit}
              className="w-full flex flex-col justify-between h-full"
            >
              <AnimatePresence mode="wait">
                {currentStepIndex === 0 && (
                  <UserInfoForm
                    key="step1"
                    {...formData}
                    updateForm={updateForm}
                    errors={errors}
                  />
                )}
                {currentStepIndex === 1 && (
                  <PlanForm key="step2" {...formData} updateForm={updateForm} />
                )}
                {currentStepIndex === 2 && (
                  <AddonsForm
                    key="step3"
                    {...formData}
                    updateForm={updateForm}
                  />
                )}
                {currentStepIndex === 3 && (
                  <FinalStep key="step4" {...formData} goTo={goTo} />
                )}
              </AnimatePresence>
              <div className="w-full items-center flex justify-between">
                <div className="">
                  <Button
                    onClick={previousStep}
                    type="button"
                    variant={"default"}
                    className={`${
                      isFirstStep
                        ? "invisible"
                        : "visible bg-transparent underline underline-offset-2 hover:bg-transparent text-neutral-200 hover:text-white"
                    }`}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="flex items-center">
                  <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                    <Button
                      type="submit"
                      className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
                    >
                      {isLastStep ? "Confirm" : "Next Step"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}

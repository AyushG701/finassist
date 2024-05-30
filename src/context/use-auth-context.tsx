"use client";
import React, { useState } from "react";

// Define the type for the InitialValueProps
type InitialValueProps = {
  currentStep: number; // The current step in a process (e.g., a multi-step form)
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>; // Function to update the current step
};

// Define the initial values for the context
const InitialValues: InitialValueProps = {
  currentStep: 1, // Initial step is set to 1
  setCurrentStep: () => undefined, // Initial setCurrentStep is a no-op function
};

// Create a context with the initial values
const authContext = React.createContext(InitialValues);

// Destructure the Provider from the context object
const { Provider } = authContext;

// Create a context provider component
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode; // The children that will be wrapped by this provider
}) => {
  // Use the useState hook to manage the currentStep state
  const [currentStep, setCurrentStep] = useState<number>(
    InitialValues.currentStep, // Initialize state with the currentStep from InitialValues
  );

  // Prepare the values to be passed to the context consumers
  const values = { currentStep, setCurrentStep };

  // Return the provider with the context values, wrapping the children
  return <Provider value={values}>{children}</Provider>;
};

export const useAuthContextHook = () => {
  const state = React.useContext(authContext);
  return state;
};

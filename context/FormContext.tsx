"use client";

import { createContext, useContext, useState, useEffect } from "react";

type FormDataType = {
  fileName: string;
  Date: string;
  "Date of Visit": string;

  tools: { name: string; qty: string }[];
  materials: { name: string; qty: string }[];

  workName: string;
  employees: string[];

  wages: string[];
  workingHours: string[];
  income: string[];
  payments: string[];

  food: {
    roomRent: string;
    breakfast: string;
    lunch: string;
    eveningTea: string;
    dinner: string;
    drinkingWater: string;
    otherFood: string;
  };

  transport: {
    transportation: string;
    busFare: string;
    autoFare: string;
    petrol: string;
  };

  purchase: { name: string; amount: string }[];

  remarks: string;
};

const defaultData: FormDataType = {
  fileName: "",
  Date: "",
  "Date of Visit": "",
  tools: [],
  materials: [],
  workName: "",
  employees: [],
  wages: [],
  workingHours: [],
  income: [],
  payments: [],
  food: {
    roomRent: "",
    breakfast: "",
    lunch: "",
    eveningTea: "",
    dinner: "",
    drinkingWater: "",
    otherFood: ""
  },
  transport: {
    transportation: "",
    busFare: "",
    autoFare: "",
    petrol: ""
  },
  purchase: [],
  remarks: ""
};

const FormContext = createContext<unknown>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<FormDataType>(defaultData);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("formData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
"use client";

import { useState } from "react";
import { generateExcel } from "@/utils/excel";

type FormType = {
  [key: string]: string;
};

export default function CreatePage() {
  const [fileName, setFileName] = useState<string>("");
  const [rows, setRows] = useState<FormType[]>([]);

  const [form, setForm] = useState<FormType>({
    Date: "",
    Tools: "",
    Quantity: "",
    Materials: "",
    "Quantity.1": "",
    "Name of Work Done": "",
    Employee: "",
    Wages: "",
    "Working Hours": "",
    Income: "",
    Payments: "",
    "Room Rent": "",
    Breakfast: "",
    Lunch: "",
    "Evening Tea": "",
    Dinner: "",
    "Drinking Water": "",
    "Other Food": "",
    Transportation: "",
    "Bus Fare": "",
    "Auto Fare": "",
    Petrol: "",
    "Material Name": "",
    Amount: "",
    "Date of Visit": "",
    Remarks: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    setRows([...rows, form]);

    // Reset form after adding
    setForm(
      Object.keys(form).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {} as FormType)
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Create Excel</h2>

      {/* File Name */}
      <input
        className="border p-2 mb-4 w-full"
        placeholder="File Name"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
      />

      {/* Example Fields (we'll expand UI later) */}
      <div className="grid grid-cols-2 gap-4">
        <input name="Date" placeholder="Date" onChange={handleChange} className="border p-2" />
        <input name="Tools" placeholder="Tools" onChange={handleChange} className="border p-2" />
        <input name="Quantity" placeholder="Quantity" onChange={handleChange} className="border p-2" />
        <input name="Materials" placeholder="Materials" onChange={handleChange} className="border p-2" />
        <input name="Quantity.1" placeholder="Quantity (Materials)" onChange={handleChange} className="border p-2" />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={addRow}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Entry
        </button>

        <button
          onClick={() => generateExcel(rows, fileName)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download Excel
        </button>
      </div>
    </div>
  );
}

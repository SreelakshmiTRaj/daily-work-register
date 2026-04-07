"use client";

import { useState } from "react";
import { generateExcel } from "@/utils/excel";

type FormType = {
  [key: string]: string;
};

export default function CreatePage() {
  // ✅ ALL columns (exact match)
  const columns = [
    "Date",
    "Tools",
    "Quantity",
    "Materials",
    "Quantity.1",
    "Name of Work Done",
    "Employee",
    "Wages",
    "Working Hours",
    "Income",
    "Payments",
    "Room Rent",
    "Breakfast",
    "Lunch",
    "Evening Tea",
    "Dinner",
    "Drinking Water",
    "Other Food",
    "Transportation",
    "Bus Fare",
    "Auto Fare",
    "Petrol",
    "Material Name",
    "Amount",
    "Date of Visit",
    "Remarks",
  ];

  // ✅ Create empty form dynamically
  const createEmptyForm = (): FormType => {
    const obj: FormType = {};
    columns.forEach((col) => {
      obj[col] = "";
    });
    return obj;
  };

  const [fileName, setFileName] = useState<string>("");
  const [rows, setRows] = useState<FormType[]>([]);
  const [form, setForm] = useState<FormType>(createEmptyForm());

  // ✅ Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Add entry (fixes reference bug)
  const addRow = () => {
    setRows([...rows, { ...form }]);
    setForm(createEmptyForm());
    alert("Entry Added");
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

      {/* ALL Fields */}
      <div className="grid grid-cols-2 gap-4">
        {columns.map((col) => {
          const isDateField = col === "Date" || col === "Date of Visit";

          return (
            <input
              key={col}
              name={col}
              type={isDateField ? "date" : "text"}
              placeholder={col}
              value={form[col]}
              onChange={handleChange}
              className="border p-2"
            />
          );
        })}
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

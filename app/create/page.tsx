"use client";

import { useState } from "react";
import { generateExcel } from "@/utils/excel";

type FormType = {
  [key: string]: string;
};

export default function CreatePage() {
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
    "Remarks"
  ];

  const createEmptyForm = (): FormType => {
    const obj: FormType = {};
    columns.forEach((col) => (obj[col] = ""));
    return obj;
  };

  const [fileName, setFileName] = useState<string>("");
  const [rows, setRows] = useState<FormType[]>([]);
  const [form, setForm] = useState<FormType>(createEmptyForm());

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addRow = () => {
    setRows([...rows, { ...form }]);
    setForm(createEmptyForm());
    alert("Entry Added");
  };

  const InputField = ({
    name,
    label,
    type = "text"
  }: {
    name: string;
    label: string;
    type?: string;
  }) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className="border p-2 rounded"
      />
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Daily Work Register</h1>

      {/* File Name */}
      <div className="mb-6">
        <label className="font-medium">File Name</label>
        <input
          className="border p-2 w-full mt-1 rounded"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>

      {/* Basic Info */}
      <Section title="Basic Info">
        <InputField name="Date" label="Date" type="date" />
        <InputField name="Date of Visit" label="Date of Visit" type="date" />
      </Section>

      {/* Tools */}
      <Section title="Tools">
        <InputField name="Tools" label="Tools Used" />
        <InputField name="Quantity" label="Quantity" />
      </Section>

      {/* Materials */}
      <Section title="Materials">
        <InputField name="Materials" label="Materials Used" />
        <InputField name="Quantity.1" label="Quantity" />
      </Section>

      {/* Work Details */}
      <Section title="Work Details">
        <FullWidthInput
          name="Name of Work Done"
          label="Name of Work Done"
          value={form}
          onChange={handleChange}
        />
        <InputField name="Employee" label="Employee" />
        <InputField name="Wages" label="Wages" />
        <InputField name="Working Hours" label="Working Hours" />
        <InputField name="Income" label="Income" />
        <InputField name="Payments" label="Payments" />
      </Section>

      {/* Accommodation */}
      <Section title="Accommodation">
        <InputField name="Room Rent" label="Room Rent" />
      </Section>

      {/* Food */}
      <Section title="Food Expenses">
        <InputField name="Breakfast" label="Breakfast" />
        <InputField name="Lunch" label="Lunch" />
        <InputField name="Evening Tea" label="Evening Tea" />
        <InputField name="Dinner" label="Dinner" />
        <InputField name="Drinking Water" label="Drinking Water" />
        <InputField name="Other Food" label="Other Food" />
      </Section>

      {/* Transport */}
      <Section title="Transportation">
        <InputField name="Transportation" label="Transportation" />
        <InputField name="Bus Fare" label="Bus Fare" />
        <InputField name="Auto Fare" label="Auto Fare" />
        <InputField name="Petrol" label="Petrol" />
      </Section>

      {/* Purchase */}
      <Section title="Site Purchase">
        <InputField name="Material Name" label="Material Name" />
        <InputField name="Amount" label="Amount" />
      </Section>

      {/* Remarks */}
      <div className="mt-6">
        <label className="font-medium">Remarks</label>
        <textarea
          name="Remarks"
          value={form["Remarks"]}
          onChange={handleChange}
          className="border p-2 w-full mt-1 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
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

/* Section Wrapper */
function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

/* Full Width Input */
function FullWidthInput({
  name,
  label,
  value,
  onChange
}: {
  name: string;
  label: string;
  value: any;
  onChange: any;
}) {
  return (
    <div className="col-span-2 flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>
      <input
        name={name}
        value={value[name]}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
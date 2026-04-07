"use client";

import { useRouter } from "next/navigation";

export default function NavButtons({
  back,
  next
}: {
  back?: string;
  next?: string;
}) {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-6">
      {back ? (
        <button
          onClick={() => router.push(back)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Back
        </button>
      ) : <div />}

      {next && (
        <button
          onClick={() => router.push(next)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      )}
    </div>
  );
}
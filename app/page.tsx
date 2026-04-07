import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Daily Work Register</h1>

      <div className="mt-6 flex flex-col gap-4">
        <Link href="/create">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Create New Excel
          </button>
        </Link>

        <Link href="/edit">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Edit Existing Excel
          </button>
        </Link>
      </div>
    </div>
  );
}
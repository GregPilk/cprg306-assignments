import Link from "next/link";
import AssignTabs from "./assign-tabs.js";

export default function Page() {
  const weeks = [
    "week-1",
    "week-2",
    "week-3",
    "week-4",
    "week-5",
    "week-6",
    "week-7",
    "week-8",
  ];
  return (
    <div className="flex justify-center bg-slate-600 min-h-screen">
      <main className=" max-w-screen-lg">
        <h1 className="border-slate-800 bg-slate-700 border-2 text-5xl text-center mt-3 pl-16 pr-16 p-8 rounded-2xl">
          CPRG-306: Web Development 2
        </h1>
        <div className="flex flex-wrap justify-center">
          {weeks.map((week) => (
            <AssignTabs week={week} />
          ))}
        </div>
      </main>
    </div>
  );
}

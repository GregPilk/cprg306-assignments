import Link from "next/link";
export default function AssignTabs({ week }) {
  return (
    <div className="p-2 m-4 bg-slate-800 border-2 max-h-32 max-w-52 border-slate-800 hover:bg-green-800 rounded-3xl">
      <Link href={week}>
        <p className="text-center text-2xl min-h-96 capitalize">
          {week} Assignments
        </p>
      </Link>
    </div>
  );
}

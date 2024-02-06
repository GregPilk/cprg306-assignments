import Link from "next/link";

export default function Page(){
  return(
    <div className="flex justify-center m-3 pt-3 pr-3 pl-3">
      <main > 
        <h1 className="text-5xl mb-2">CPRG 306: Web Development 2 Assignments</h1>
        <ul className="flex justify-around list-none bg-green-950 border-2 border-double border-slate-600">
          <li className="p-2 hover:bg-blue-400">
            <Link href="week-2">Week 2 Assignments</Link>
          </li>
          <li className="p-2 hover:bg-blue-400">
            <Link href="week-3">Week 3 Assignments</Link>
          </li>
          <li className="p-2 hover:bg-blue-400">
            <Link href="week-4">Week 4 Assignments</Link>
          </li>
          <li className="p-2 hover:bg-blue-400">
            <Link href="week-5">Week 5 Assignments</Link>
          </li>
        </ul>  
      </main>
    </div>
  );
    
}
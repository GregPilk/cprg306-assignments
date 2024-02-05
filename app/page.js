import Link from "next/link";

export default function Page(){
  return(
    <div>
      <main > 
        <h1 className='text-4xl text-green-500'>CPRG 306: Web Development 2 Assignments</h1>
        <ul>
          <li>
            <Link href="week-2">Week 2 Assignments</Link>
          </li>
          <li>
            <Link href="week-3">Week 3 Assignments</Link>
          </li>
          <li>
            <Link href="week-4">Week 4 Assignments</Link>
          </li>
        </ul>  
      </main>

    </div>
        
  );
    
}
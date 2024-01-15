import Link from "next/link";

export default function Page(){
  return(
    <div>
      <main > 
        <h1 className='text-4xl text-green-500'>Web Dev 2 Assignments</h1>
        <ul>
          <li>
            <Link href="week-2">Week 2 Assignments</Link>
          </li>
        </ul>  
      </main>

    </div>
        
  );
    
}
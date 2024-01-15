import Link from "next/link";

export default function Page(){
  return(
    <div>
      <main > 
        <h1 class='text -2xl text-red-800 font-serif'>Web Dev 2 Assignments</h1>Hello World!
        <ul>
          <li>
            <Link href="week-2">Week 2</Link>
          </li>
        </ul>  
      </main>

    </div>
        
  );
    
}
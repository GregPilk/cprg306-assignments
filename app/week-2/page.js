import { Heading } from "./heading";
import { StudentInfo } from "./student-info";

export default function Page(){
    let a = 5;
    let b = 10;
    let c = a + b;
    return(
        <main>
            <Heading />
            <h1>Student Info</h1>
            <p>This is the sum of a and b is {c}</p>
            <StudentInfo />
        </main>
    );
}
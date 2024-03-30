// // import type { User } from "../types/index/d/ts";
// export async function POST(request: Request){
//     const newUser = await request.json();
//     newUser.id = 3;
//     console.log('create new user');
//     return new Response(JSON.stringify(newUser), { status: 201});
// }
// // fetch list of users

// export async function GET(request: Request, {params}: {params: {id: string}}){
//     const id = Number(params.id);
//     const users: User[] = [
//         {
//             //id: 1,
//             name: "John",
//             age: 30
//         },
//         {
//             //id: 2,
//             name: "Sue",
//             age: 45,
            
//         }
//     ];
//     console.log('fetch users');
//     return new Response(JSON.stringify(users), { status: 201});
// }
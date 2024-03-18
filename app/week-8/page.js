"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-slate-600 min-h-screen flex justify-center items-center">
      {user ? (
        <ul className="flex flex-col justify-center items-center list-none">
          <li className="border-slate-800 bg-slate-700 border-2 text-2xl text-center mb-2 pl-8 pr-8 p-4 rounded-2xl">
            Welcome, {user.displayName} ({user.email})
          </li>
          <li className="p-2 m-2 bg-slate-800 border-2 max-h-32 w-52 border-slate-800 text-center hover:bg-green-800 rounded-3xl">
            <Link href="/week-8/shopping-list">Shopping List</Link>
          </li>
          <li className="p-2 m-2 bg-slate-800 border-2 max-h-32 w-52 border-slate-800 text-center hover:bg-green-800 rounded-3xl">
            <button onClick={handleLogout}>Sign Out</button>
          </li>
        </ul>
      ) : (
        <ul className="flex flex-col justify-center items-center list-none">
          <li className="border-slate-800 bg-slate-700 border-2 text-2xl text-center mb-2 pl-16 pr-16 p-4 rounded-2xl">
            Welcome! Please Login
          </li>
          <li className="p-2 m-4 bg-slate-800 border-2 max-h-32 w-52 border-slate-800 text-center hover:bg-green-800 rounded-3xl">
            <button onClick={handleLogin}>Sign In with GitHub</button>
          </li>
        </ul>
      )}
    </div>
  );
}

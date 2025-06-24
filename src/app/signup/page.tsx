"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-3xl">Signup</h1>
      <hr />
      <label className="m-1.5 text-center bg-gray-400 text-black text-3xl border-2 w-[50%]" htmlFor="username">Username</label>

      <input 
        type="text" 
        className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        id="username" 
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})} //here we keep everything same only the user value gets updated
        placeholder="user123"
        
        />

        <label className="m-2 text-center bg-gray-300 text-black text-3xl border-2 w-[50%]" htmlFor="email">Email</label>

      <input 
        type="email" 
        className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        id="email"
        required 
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})} //here we keep everything same only the user value gets updated
        placeholder="Enter your email"
        
        />

        <label className="m-1.5 text-center bg-red-300 text-black text-3xl border-2 w-[50%]" htmlFor="password">Password</label>

      <input 
        type="password" 
        className="w-[50%] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        id="password" 
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})} //here we keep everything same only the user value gets updated
        placeholder="Enter your password"
        
        />

        <button onClick={onSignup} 
            className="m-1 w-[50%] p-1 bg-blue-500 text-black font-bold text-2xl border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 cursor-pointer"
            
            > Submit
        
        </button>
        <Link href="/login">Visit login page</Link>
    </div>
  );
}

"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '../../../Public/img/bg.webp';
import Link from 'next/link';
import signup from '../signup/page'
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/store/reducer/loginSlice';

const Page : React.FC =()=> {

  const [username,setusername]=useState('')
  const [password,setPassword]=useState('')

const dispatch=useAppDispatch()
const router=useRouter()
const {user , status  ,error }=useAppSelector((state)=>state.login)

useEffect(()=>{
    if(status === 'succees' && user){
      const userid=user._id;

      localStorage.setItem('userid',userid)
       router.push('/')
    }
},[status,user,router])

const handling =(e: React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
      
dispatch(loginUser({username ,password}))
  
}









  return (
    <div className="relative w-full h-screen">
    <Image
      src={bg}
      alt="background"
      objectFit="cover"
      className="absolute inset-0 z-[-1] w-full"
    />
    <form >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">
          <h2 className="text-lg font-semibold text-center mb-4 text-white-200">Log in with your Instagram account</h2>

          <input
            type="text"
            placeholder="Username"
            className="bg-[#201d1d] appearance-none rounded-xl w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="text"
            onChange={(e)=>setusername(e.target.value)}
            required

            
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="Password"
            onChange={(e)=>setPassword(e.target.value)}
            required

          />
           
           <button
            type="submit"
            className="bg-white rounded-xl block w-full px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
          >
            Log in
          </button>
          
       

          <p className="flex justify-center mt-3 text-gray-600 font-extralight">Forgot password?</p>

          <div className="flex items-center justify-center mt-4">
            <div className="w-full h-px bg-gray-400"></div>
            <p className="px-2 text-gray-400 text-sm">or</p>
            <div className="w-full h-px bg-gray-400"></div>
          </div>

         <Link href={'/signup'}>
         <button className="bg-transparent rounded-xl block w-full px-3 py-3 mt-2 text-white">
              Sign up
            </button>
         </Link>
           
          
        </div>
      </div>
    </form>
  </div>
  );
}

export default Page;

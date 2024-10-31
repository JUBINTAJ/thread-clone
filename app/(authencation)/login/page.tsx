"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import bg from '../../../Public/img/bg.webp';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { useRouter } from 'next/navigation';
import qr from '../../../Public/img/Screenshot 2024-10-15 161102.png';
import Loading from '@/app/componnts/loading/loading';
// import  { loginUser } from '@/store/reducer/userSlice'
import axiosInstance from '@/app/axios/axiosinstance';
import { Result } from 'postcss';

const Page: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const[stutas,setstatus]=useState<string| null>(null)
  const[error ,seterror]=useState<string| null>(null)
  


  const dispatch = useAppDispatch();
  const router =useRouter();


  


const loginuser=async (userdata : {username : string , password : string })=>{
  try{
    const response=await axiosInstance.post('users/login',userdata)
    return response.data
  }catch(error:any){
    console.log(error)
  }
}

  const handling = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
   const user=await  loginuser({username,password})
    if(user && user._id){
      const userId=user._id
      localStorage.setItem('userid',userId)
      router.push('/main')
      
    }
    setLoading(false)

  }





  return (
    <div className="relative w-full h-screen">
      <Image
        src={bg}
        alt="background"
        objectFit="cover"
        className="absolute inset-0 z-[-1] w-full"
      />
      <form onSubmit={handling}>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">
              <h2 className="text-lg font-semibold text-center mb-4 mr-11 text-white-200">Log in with your Instagram account</h2>

              <input
                type="text"
                placeholder="Username"
                className="bg-[#201d1d] appearance-none rounded-xl h-14 w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
                aria-label="text"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="bg-[#201d1d] appearance-none rounded-xl block h-14 w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                aria-label="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {password === 'failed'  && (
                <p className="text-red-500 text-sm mt-2">User not found or incorrect password</p>
              )}

              <button
                type="submit"
                className="bg-white rounded-xl block w-full h-14 px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                disabled={loading} 
              >
                {loading ? <Loading /> : 'Log In'} 
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

          <div className="flex flex-row justify-center p-4 gap-3 flex-wrap">
            <a href="#" className="text-gray-500 hover:underline text-[11px]">© 2024</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px]">Threads Terms</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px]">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px]">Cookies Policy</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px]">Report a problem</a>
            <div className="absolute bottom-4 right-4 p-4">
              <p className='pb-4 pl-8 text-gray-500 text-[13px]'>Scan to get the app</p>
              <Image
                src={qr}
                alt='qr'
                className="w-full h-auto flex flex-row justify-end flex-wrap hover:scale-110 transition ease-in-out"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Page;

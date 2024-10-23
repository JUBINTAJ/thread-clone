"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';

import { setname, setusername, setemail, setphone, setPassword, setconformpassword, signUser } from '@/store/reducer/signsSlice';
import { useRouter } from 'next/navigation';
import Loading from '@/app/componnts/loading/loading';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '@/app/axios/axiosinstance';




const Page: React.FC = () => {
    const [loading ,setloading]=useState(false)

    const[name , setname]=useState("")
    const[username ,setusername]=useState("")
    const[email ,setemail]=useState("")
    const[password ,setPassword]=useState("")
    const[conformpassword,setconformpassword]=useState("")



    // const dispatch: AppDispatch = useDispatch();
    // const { name, username, email, phone, password, conformpassword, status, error } = useSelector((state: RootState) => state.sign);



     const  signUser = (
          async  (userdata :{name:string, username:string, email:string, phone:string, password:string, conformpassword:string} )=>{
    
            try{
                const response=await axiosInstance.post('users/signup',userdata)
                return response.data
            }catch (error : any){
                console.log(error.response.data.message || 'all error are occared')
            }
    
    
          }
          
    
    )





    const router = useRouter();

    const handling = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true)
        if (password === conformpassword) {
            
            (signUser:({ name:string, username:string, email:string, password :string, phone:string ,conformpassword:string })).finally(()=>{
                setloading(false)
            });
        } else {
            console.log("Passwords do not match");
        }
    };

    useEffect(() => {
        if (status === 'success') {

            router.push('/login'); 
        }
    }, [status, router, username, password]);

    return (
     <div className="relative w-full h-screen">
       <form onSubmit={handling}>
   <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">
                        <input
               type="text"
                placeholder="Name"
              className="bg-[#201d1d] appearance-none rounded-xl w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
                onChange={(e) => (setname(e.target.value))}
                    required
                        />
                        <input
                            type="text"
                        placeholder="Username"
                        className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                        onChange={(e) => (setusername(e.target.value))}
                        required
                        />
                        <input
                            type="email"
                           placeholder="Email"
                         className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                        onChange={(e) => (setemail(e.target.value))}
                         required
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => (setphone(e.target.value))}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password 'min 8 char"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => (setPassword(e.target.value))}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => (setconformpassword(e.target.value))}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white rounded-xl block w-full px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                        >
                            {loading?  <Loading/> : ' Sign in'} {}
                        </button>
                    </div>
                </div>
            </form>
            {status === 'failed' && <p>Error: {error}</p>}
        </div>
    );
};

export default Page;

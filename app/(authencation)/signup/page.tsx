"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';

import { setname, setusername, setemail, setphone, setPassword, setconformpassword, signUser } from '@/store/reducer/signsSlice';
import { useRouter } from 'next/navigation';
import Loading from '@/app/componnts/loading/loading';




const Page: React.FC = () => {
    const [loading ,setloading]=useState(false)
    const dispatch: AppDispatch = useDispatch();
    const { name, username, email, phone, password, conformpassword, status, error } = useSelector((state: RootState) => state.sign);
    const router = useRouter();

    const handling = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true)
        if (password === conformpassword) {
            dispatch(signUser({ name, username, email, password, phone })).finally(()=>{
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
    }, [status, router, dispatch, username, password]);

    return (
     <div className="relative w-full h-screen">
       <form onSubmit={handling}>
   <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">
                        <input
               type="text"
                placeholder="Name"
              className="bg-[#201d1d] appearance-none rounded-xl w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
                onChange={(e) => dispatch(setname(e.target.value))}
                    required
                        />
                        <input
                            type="text"
                        placeholder="Username"
                        className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                        onChange={(e) => dispatch(setusername(e.target.value))}
                        required
                        />
                        <input
                            type="email"
                           placeholder="Email"
                         className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                        onChange={(e) => dispatch(setemail(e.target.value))}
                         required
                        />
                        <input
                            type="tel"
                            placeholder="Phone"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => dispatch(setphone(e.target.value))}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => dispatch(setPassword(e.target.value))}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => dispatch(setconformpassword(e.target.value))}
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

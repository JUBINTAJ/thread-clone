import Link from 'next/link';
import React from 'react';
import login from '../login/page'

function Page() {
  return (
    <div className="relative w-full h-screen">
  
    <form >
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">

          <input
            type="text"
            placeholder="name"
            className="bg-[#201d1d] appearance-none rounded-xl w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="text"
          />
          <input
            type="text"
            placeholder="username"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="text"
          />
       
             <input
            type="email"
            placeholder="Email"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="email"
          />
             <input
            type="number"
            placeholder="phone"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="number"
          />
               <input    
            type="password"
            placeholder="Password"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="Password"
          />
               <input    
            type="conformpassword"
            placeholder="conformpassword"
            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
            aria-label="conformpassword"
          />

          <Link href={'/login'}>
          <button
            type="submit"
            className="bg-white rounded-xl block w-full px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
          >
           Sign
          </button>
          </Link>
        


      

         
            
          
        </div>
      </div>
    </form>
  </div>
  );
}

export default Page;

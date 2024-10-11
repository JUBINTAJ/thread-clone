// "use client"
// import Link from 'next/link';
// import React, { useEffect } from 'react';
// import login from '../login/page'
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState,AppDispatch } from '@/store/store';
// import { setname,setPassword,setusername,setconformpassword,setemail,setphone,signUser } from '@/store/reducer/signsSlice';
// import { useRouter } from 'next/navigation';
// const Page:React.FC = ()=> {


//    const dispatch:AppDispatch=useDispatch()
//   const {name , username ,Email,phone,Password,conformpassword ,status,error}=useSelector((state:RootState)=>state.sign)

//   const router=useRouter()

//   const handling=(e: React.FormEvent<HTMLFormElement>)=>{
//     e.preventDefault();
//     if(Password===conformpassword){
      
//       dispatch(signUser({name,username,Email,phone,Password,conformpassword}))
//     }
//     else{
//       console.log("password is not match")
//     }

//   }
//   useEffect(()=>{
//     if(status==='succes'){
//       router.push('/login')
//     }
//   },[status,router])

  
//   return (

//     <div className="relative w-full h-screen">
  
//     <form onSubmit={handling} >
//       <div className="flex flex-col items-center justify-center min-h-screen">
//         <div className="bg-transparent p-6 rounded-lg shadow-lg w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-5">

//           <input
//             type="text"
//             placeholder="name"
//             className="bg-[#201d1d] appearance-none rounded-xl w-full block px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="text"
//             onChange={(e)=>dispatch(setname(e.target.value))}
//             required
//           />
//           <input
//             type="text"
//             placeholder="username"
//             className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="text"
//             onChange={(e)=>dispatch(setusername(e.target.value))}
//             required
//           />
       
//              <input
//             type="email"
//             placeholder="Email"
//             className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="email"
//             onChange={(e)=>dispatch(setemail(e.target.value))}
//             required
//           />
//              <input
//             type="number"
//             placeholder="phone"
//             className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="number"
//             onChange={(e)=>dispatch(setphone(e.target.value))}
//             required
//           />
//                <input    
//             type="password"
//             placeholder="Password"
//             className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="Password"
//             onChange={(e)=>dispatch(setPassword(e.target.value))}

//           />
//                <input    
//             type="conformpassword"
//             placeholder="conformpassword"
//             className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
//             aria-label="conformpassword"
//             onChange={(e)=>dispatch(setconformpassword(e.target.value))}
//             required
//           />

//              <button
//             type="submit"
//             className="bg-white rounded-xl block w-full px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
//           >
//            Sign
//           </button>
        


      

         
            
          
//         </div>
//       </div>
//     </form>
//     {status==='failed'  && <p>Error:{error}</p>}


//   </div>
//   );
// }

// export default Page;

"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { setname, setPassword, setusername, setconformpassword, setemail, setphone, signUser } from '@/store/reducer/signsSlice';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { name, username, Email, phone, Password, conformpassword, status, error } = useSelector((state: RootState) => state.sign);
    const router = useRouter();

    const handling = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Password === conformpassword) {
            dispatch(signUser({ name, username, Email, phone, Password, conformpassword }));
        } else {
            console.log("Password does not match");
        }
    };

    useEffect(() => {
        if (status === 'success') {
            router.push('/login');
        }
    }, [status, router]);

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
                            type="tel" // Use 'tel' for phone input
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
                            required
                        />
                        <input
                            type="password" // Correct type for confirm password
                            placeholder="Confirm Password"
                            className="bg-[#201d1d] appearance-none rounded-xl block w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                            onChange={(e) => dispatch(setconformpassword(e.target.value))}
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white rounded-xl block w-full px-3 py-3 mt-2 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
                        >
                            Sign
                        </button>
                    </div>
                </div>
            </form>
            {status === 'failed' && <p>Error: {error}</p>}
        </div>
    );
};

export default Page;


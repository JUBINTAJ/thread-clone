'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bg from '../../../Public/img/bg.webp';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { useRouter } from 'next/navigation';
import qr from '../../../Public/img/Screenshot 2024-10-15 161102.png';
import Loading from '@/app/componnts/loading/loading';
// import  { loginUser } from '@/store/reducer/userSlice'
import { loginuser } from '@/app/(authencation)/login/page';
import { setCookie } from '@/app/lib/utils/setCookie';


const Page: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [stutas, setstatus] = useState<'initail' | 'loading' | 'success' | 'failed'>('initail')
  const [error, seterror] = useState<string | null>(null)
  const [show, setshow] = useState(false)

  const dispatch = useAppDispatch();
  const router = useRouter();


  // const handling = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true)
  //   setstatus('loading')
  //   const user = await loginuser({ username, password })
  //   if (user && user._id) {
  //     const userId = user._id
  //     localStorage.setItem('userid', userId)
  //     router.push('/main')
  //     setstatus('success')

  //   }

  //   setLoading(false)

  // }

  const handling = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setstatus('loading');

    try {
      const user = await loginuser({ username, password });
      if (user && user._id) {
        const userId = user._id;
        localStorage.setItem('userid', userId)
        await setCookie(userId)
        router.push('/main');
        setstatus('success');
      } else {
        if (!username || !password) {
          seterror('Please enter both username and password.');
        } else {
          seterror('Invalid username or password.');
        }
        setstatus('failed');
      }
    } catch (error: any) {
      console.log(error);
      setstatus('failed');
      seterror('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
              <div className='relative'>

                <input
                  type={show ? 'text ' : 'password'}
                  placeholder="Password"
                  className="bg-[#201d1d] appearance-none rounded-xl block h-14 w-full px-3 py-3 mt-2 placeholder-gray-500 text-white"
                  aria-label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required

                />
                <button
                  type='button'
                  onClick={() => setshow(!show)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"

                >
                  {show ? '👁️‍🗨️' : '👁️'}
                </button>
              </div>
              {stutas === 'failed' && username && password && (
                <div className="mt-2 p-3 bg-red-100 border border-red-500 rounded-md text-red-600 text-sm">
                  <strong>Error:</strong> {error || 'Invalid username or password. Please try again.'}
                </div>
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

          <div className="flex flex-col sm:flex-row justify-center p-4 gap-3 flex-wrap relative">
            <a href="#" className="text-gray-500 hover:underline text-[11px] sm:text-[12px] md:text-[14px]">© 2024</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px] sm:text-[12px] md:text-[14px]">Threads Terms</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px] sm:text-[12px] md:text-[14px]">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px] sm:text-[12px] md:text-[14px]">Cookies Policy</a>
            <a href="#" className="text-gray-500 hover:underline text-[11px] sm:text-[12px] md:text-[14px]">Report a problem</a>

            <div className="absolute bottom-4 right-4 p-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8">
              <p className="pb-4 text-gray-500 text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
                Scan to get the app
              </p>
              <Image
                src={qr}
                alt="qr"
                className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36 flex flex-row justify-end flex-wrap hover:scale-110 transition ease-in-out"
              />
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Page;


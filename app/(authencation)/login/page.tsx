import React, {  useState } from 'react';
import Image from 'next/image';
import bg from '../../../Public/img/bg.webp';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { useRouter } from 'next/navigation';
import qr from '../../../Public/img/Screenshot 2024-10-15 161102.png';
import Loading from '@/app/componnts/loading/loading';
import axiosInstance from '@/app/axios/axiosinstance';
import Form from '@/app/componnts/form/form'







  export const loginuser = async (userdata: { username: string, password: string }) => {
  try {
    const response = await axiosInstance.post('users/login', userdata)
    return response.data
  } catch (error: any) {
    console.log(error)
  }
}




const Page: React.FC = () => {





  return (
<>
    <div>
<Form/>
    </div>

    </>

  
  );
}

export default Page;


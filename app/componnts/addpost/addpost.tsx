'use client'
import axiosInstance from '@/app/axios/axiosinstance';
import axios from 'axios';
import React, { ReactNode, useState } from 'react'

interface postprops {
    isopen : boolean;
    onclose:()=> void;
    children:ReactNode;
}

const addpost :React.FC<postprops> =({isopen,onclose,children}) => {
    const [postcontent , setpostcontent]=useState<string>('')
    const[postimage ,setpostimage]=useState<any>(null)
    const[prev , setprev]=useState<string|null>(null)

const postsubmit= async ()=>{
    const userId=localStorage.getItem('userid')
    if(postcontent.trim()===''){
        alert('Please write something before posting!')
        return
    }
    if(!userId){
        alert('user not found')
        return
    }
    const newpost = new FormData();
    newpost.append('userid',userId)
    newpost.append('text',postcontent)
    newpost.append('image',postimage)


    try{
        const res=await axiosInstance.post('posts',newpost)
        return res
    }catch(error){
        console.log('error adding in new post',error)

    }
    setpostcontent('');
    setpostimage(null);
    onclose();

}
  const postchange =(event : React.ChangeEvent<HTMLTextAreaElement>)=>{
    setpostcontent(event.target.value)
  }

  const imagechange=(e : React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    const file = e.target.files?.[0]
    if(file){
        setpostimage(file);
        const reader=new FileReader();
        console.log('File',file)
        reader.onloadend=()=>{
            setprev(reader.result as string)
        }
        reader.readAsDataURL(file)
    }
  }
  if(!isopen) return null

  return (
    <div>
<div className="fixed inset-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-[1000]">
      <div className="bg-[#181818] p-8 w-[90%] max-w-[500px] rounded-lg shadow-lg relative animate-fadeIn">
        <button onClick={onclose} className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-red-500 transition-colors">
          &times;
        </button>
        <div className="mt-4 text-gray-200">
          {children}
          <div className="flex flex-col gap-4 mt-8">
            <textarea
              placeholder="Write a post"
              value={postcontent}
              onChange={postchange}
              className="bg-[#181818] outline-none"
            />
            {prev && (
              <div className="w-full max-h-[300px] overflow-hidden rounded-md">
                <img src={prev} alt="Preview" className="w-full h-auto object-cover rounded-md" />
              </div>
            )}
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={imagechange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                <button className="ml-2 mt-5 border h-10 w-40 rounded-lg">Upload Image</button>
              </label>
            </div>
          </div>
          <div className="mt-3 flex justify-end">
            <button onClick={postsubmit}>Post</button>
            {/* <PostBtn onClick={postsubmit} /> */}
          </div>
        </div>
      </div>
    </div>










    </div>
  )
}

export default addpost
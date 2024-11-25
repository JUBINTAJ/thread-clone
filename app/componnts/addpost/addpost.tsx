'use client';
import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import React, { ReactNode, useEffect, useState } from 'react';
import Loading from '@/app/componnts/loading/loading';
import { fetchUser } from '@/store/reducer/usergetSlice';
import draft from '@/Public/img/draft.png';
import Image from 'next/image';
import iconsstore from '@/app/componnts/icons/icons'


interface PostProps {
    isopen: boolean;
    onclose: () => void;
    children: ReactNode;
}

const AddPost: React.FC<PostProps> = ({ isopen, onclose, children }) => {

    const dispatch = useAppDispatch();
    const { icon } = iconsstore()

    const [postcontent, setpostcontent] = useState<string>('');
    const [postimage, setpostimage] = useState<any>(null);
    const [prev, setprev] = useState<string | null>(null);
    const [loading, setloading] = useState(false);

    const { user } = useAppSelector((state) => state.userget);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    const postsubmit = async () => {
        const userId = localStorage.getItem('userid');
        if (postcontent.trim() === '') {
            alert('Please write something before posting');
            return;
        }
        if (!userId) {
            alert('User not found');
            return;
        }
        setloading(true);

        const newpost = new FormData();
        newpost.append('userId', userId);
        newpost.append('text', postcontent);
        newpost.append('image', postimage);

        try {
            const res = await axiosInstance.post('posts', newpost);
            console.log('error', res)
            onclose();
            dispatch(fetchPosts());
        } catch (error) {
            console.log('Error adding new post', error);
        } finally {
            setloading(false);
        }
        setpostcontent('');
        setpostimage(null);
        setprev(null);
    };

    const postchange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setpostcontent(event.target.value);
    };

    const imagechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (file) {
            setpostimage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setprev(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isopen) return null;

    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000] ml-2 ">
            <div className="bg-[#181818] p-6 md:p-8 w-[630px] h-[280px] max-h-[80vh] ml-14 rounded-2xl shadow-lg relative animate-fadeIn border border-[#444] overflow-y-auto scrollb">
                <div className='flex justify-between items-center mb-4'>
                    <button onClick={onclose} className="text-gray-400 hover:text-white transition">Cancel</button>
                    <p className="text-center text-white font-semibold text-lg">New Thread</p>
                    <div className="w-16">
                        <Image src={draft} alt='Draft Icon' className='w-8 h-8' />
                    </div>
                </div>
                <div className="w-[810px] h-px bg-[#444] mb-4  -ml-8 "></div>
                <div>
                    {user && (
                        <div key={user.id} className="flex items-center mb-4">
                            <img className='w-10 h-10 rounded-full ' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="Profile" />
                            <div className='ml-3 mb-5'>
                                {user.username}
                            </div>

                        </div>
                    )}
                    {/* <div className="line-container">
                        <div className="vertical-line h-7"></div>
                    </div> */}
                    <div className="text-gray-200">
                        {children}
                        <div className="flex flex-col gap-4 -mt-10 ">
                            <div className='ml-11  '>
                                <textarea
                                    placeholder="what's new?"
                                    value={postcontent}
                                    onChange={postchange}
                                    className="bg-[#181818]  outline-none w-full resize-none p-3 rounded-md text-white text-sm "
                                // rows={4}
                                />
                            </div>
                            <div className="flex gap-3 -mt-9 ml-14  ">
                                <div className="relative">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={imagechange}
                                        className="absolute inset-0 opacity-0 "
                                    />
                                    <label className="">
                                        <div className="w-5">
                                            {icon.images}
                                        </div>
                                    </label>
                                </div>
                                <div className="w-5">
                                    {icon.gif}
                                </div>
                                <div className="w-5">
                                    {icon.hash}
                                </div>
                                <div className="w-5">
                                    {icon.poll}
                                </div>
                            </div>
                            {prev && (
                                <div className="w-full max-h-[300px] overflow-hidden rounded-md">
                                    <img src={prev} alt="Preview" className="w-full  object-cover rounded-md  " />
                                </div>
                            )}
                        </div>


                        <div className="mt-3 flex justify-end">
                        <div className=' text-gray-500 mr-72 -mb-3'>Anyone can reply & quote</div>
                            <button onClick={postsubmit} disabled={loading} className="bg-black text-white rounded-lg px-4 py-2 transition ">
                                {loading ? <Loading /> : 'Post'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddPost;

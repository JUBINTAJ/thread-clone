'use client';
import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import React, { ReactNode, useEffect, useState } from 'react';
import Loading from '@/app/componnts/loading/loading';
import { fetchUser } from '@/store/reducer/usergetSlice';
import draft from '@/Public/img/draft.png';
import Image from 'next/image';

interface PostProps {
    isopen: boolean;
    onclose: () => void;
    children: ReactNode;
}

const AddPost: React.FC<PostProps> = ({ isopen, onclose, children }) => {
    const [postcontent, setpostcontent] = useState<string>('');
    const [postimage, setpostimage] = useState<any>(null);
    const [prev, setprev] = useState<string | null>(null);
    const [loading, setloading] = useState(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.userget);

    useEffect(() => {
    
            dispatch(fetchUser( ));
        
    }, [dispatch]);

    const postsubmit = async () => {
        const userId = localStorage.getItem('userid');
        if (postcontent.trim() === '') {
            alert('Please write something before posting!');
            return;
        }
        if (!userId) {
            alert('User not found');
            return;
        }
        setloading(true);
        const newpost = new FormData();

        newpost.append('userid', userId);
        newpost.append('text', postcontent);
        newpost.append('image', postimage);

        try {
            await axiosInstance.post('posts', newpost);
        } catch (error) {
            console.log('Error adding new post', error);
        } finally {
            setloading(false);
        }

        setpostcontent('');
        setpostimage(null);
        setprev(null);
        onclose();
        dispatch(fetchPosts());
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
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
            <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px]  ml-14 rounded-lg shadow-lg relative animate-fadeIn border border-[#444]">
                <div className='flex justify-between items-center mb-4'>
                    <button onClick={onclose} className="text-gray-400 hover:text-white transition">Cancel</button>
                    <p className="text-center text-white font-semibold text-lg">New Thread</p>
                    <div className="w-16">
                        <Image src={draft} alt='Draft Icon' className='w-8 h-8' />
                    </div>
                </div>
                <div className="w-full h-px bg-[#444] mb-4"></div>
                <div>
                    {user && (
                        <div key={user.id} className="flex items-center mb-4">
                            <img className='w-10 h-10 rounded-full border-2 border-black' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="Profile" />
                        </div>
                    )}
                    <div className="text-gray-200">
                        {children}
                        <div className="flex flex-col gap-4 mt-4">
                            <textarea
                                placeholder="Write a post"
                                value={postcontent}
                                onChange={postchange}
                                className="bg-[#2C2C2C] border border-[#444] outline-none w-full resize-none p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
                                rows={4}
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
                                    <button className="ml-2 mt-5 border border-black text-white-500  hover:text-white transition h-10 w-40 rounded-lg">Upload Image</button>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                            <button onClick={postsubmit} disabled={loading} className="bg-black text-white rounded-lg px-4 py-2 transition hover:bg-blue-700">
                                {loading ? <Loading /> : 'Post'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;

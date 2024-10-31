'use client';
import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import React, { ReactNode, useEffect, useState } from 'react';
import Loading from '@/app/componnts/loading/loading';
import { fetchUser } from '@/store/reducer/usergetSlice';

interface postprops {
    isopen: boolean;
    onclose: () => void;
    children: ReactNode;
}

const AddPost: React.FC<postprops> = ({ isopen, onclose, children }) => {
    const [postcontent, setpostcontent] = useState<string>('');
    const [postimage, setpostimage] = useState<any>(null);
    const [prev, setprev] = useState<string | null>(null);
    const [loading, setloading] = useState(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.userget);

    useEffect(() => {
        const userId = localStorage.getItem('userid');
        if (userId) {
            dispatch(fetchUser(userId));
        }
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
        <div className="fixed inset-0 w-full h-full bg-opacity-60 flex justify-center items-center z-[1000]">
            <div className="bg-[#181818] p-8 w-[90%] max-w-[500px] rounded-lg shadow-lg relative animate-fadeIn border border-[#3b3b3b]">
                <div className='flex justify-between'>
                    <button onClick={onclose} className="top- text-white">Cancel</button>
                    <p>New thread</p>
                </div>
                <div className="w-[467px] h-px bg-[#3b3b3b]"></div>
                <div className=''>
                    {user && (
                        <div key={user.id}>
                            <img className='w-10 h-10 rounded-full ' src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="Profile" />
                        </div>
                    )}
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
                            <button onClick={postsubmit} disabled={loading}>
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

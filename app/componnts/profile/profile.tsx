'use client';

import React, { useEffect, useState } from 'react';
import axiosInstance from '@/app/axios/axiosinstance';
import EditProfileModal from '@/app/componnts/editprofile/editprofile';
import { useAppSelector, useAppDispatch } from '@/app/hookkkk/Appdispatch';
import { fetchPostByUserId } from '@/store/reducer/postSlice';
import Link from 'next/link';
import Followers from '@/app/componnts/followers/followers'

const ProfilePage: React.FC = () => {
    const [user, setUser] = useState<any>(null);
    const [status, setStatus] = useState<'initial' | 'loading' | 'success' | 'failed'>('initial');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const dispatch = useAppDispatch();
    const { post } = useAppSelector((state) => state.post);

    useEffect(() => {
        const fetchData = async () => {
            setStatus('loading');
            try {
                const userId = localStorage.getItem('userid');
                if (!userId) {
                    setStatus('failed');
                    console.log('User is not found');
                    return;
                }
                const response = await axiosInstance.get(`users/${userId}`);
                setUser(response.data.user);
                setStatus('success');

                dispatch(fetchPostByUserId(userId));
            } catch (error) {
                console.error('Failed to load user data:', error);
                setStatus('failed');
            }
        };

        fetchData();
    }, [dispatch]);

    const handlefollwersClick = () => {
        setIsModal(true);
    };


    if (status === 'failed') {
        return <p className='flex justify-center items-center  prata-regular'>Error loading user data.</p>;
    }

    return (
        <div className='flex justify-center'>
            <div className="w-full max-w-2xl p-5 mt-5  border-[#3b3b3b] rounded-lg">
                {user && (
                    <div key={user.id} className="p-4">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-semibold text-white">{user.name}</h1>
                                <p className="text-lg text-gray-500">{user.username}</p>
                            </div>
                            <div>
                                <img
                                    className="w-20 h-20 object-cover rounded-full border-2 border-gray-300"
                                    src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                    alt="Profile"
                                />
                            </div>
                        </div>
                        <p className="text-gray-200 mb-2">{user.bio}</p>
                        <p className="text-gray-400 mb-4" onClick={handlefollwersClick} >{user.followers.length} Followers</p>
                        <Followers isOpen={isModal} onClose={() => setIsModal(false)} />
                        <button
                            className="border border-[#554e4e] w-full h-10 rounded-xl hover:text-black hover:bg-white mt-4"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Edit Profile
                        </button>
                    </div>
                )}

                <div className='flex justify-around mt-8 gap-5 '>
                    <Link href="/main/profile" className="text-gray-200 hover:text-white">
                        Threads
                    </Link>
                    <Link href="/main/profile/replies" className="text-gray-200 hover:text-white">
                        Replies
                    </Link>
                    <Link href="/main/profile/reposts" className="text-gray-200 hover:text-white">
                        Reposts
                    </Link>
                </div>
                <div className="w-[810px] h-px bg-[#554e4e] mt-4 -ml-5 "></div>
                <div className="mt-5">
                </div>
            </div>
            {isModalOpen && (
                <EditProfileModal isopen={isModalOpen} onclose={() => setIsModalOpen(false)}>
                    <h1>Edit Profile</h1>
                </EditProfileModal>
            )}
        </div>
    );
};

export default ProfilePage;

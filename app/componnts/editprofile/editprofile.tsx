'use client';

import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchUser } from '@/store/reducer/usergetSlice';
import React, { ReactNode, useEffect, useState } from 'react';
import Loading from '@/app/componnts/loading/loading';
import draft from '@/Public/img/draft.png';
import Image from 'next/image';

interface EditProfileModalProps {
    isopen: boolean;
    onclose: () => void;
    children: ReactNode;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isopen, onclose, children }) => {
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [profilePic, setProfilePic] = useState<any>(null);
    const [prevProfilePic, setPrevProfilePic] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.userget);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setUsername(user.username);
            setBio(user.bio);
            setPrevProfilePic(user.profilePic);
        }
    }, [user]);

    const handleSubmit = async () => {
        const userId = localStorage.getItem('userid');
        if (!userId) {
            alert('User not found');
            return;
        }
        
        setLoading(true);
        const updatedProfile = new FormData();
        
        updatedProfile.append('userid', userId);
        updatedProfile.append('name', name);
        updatedProfile.append('username', username);
        updatedProfile.append('bio', bio);
        if (profilePic) updatedProfile.append('profilePic', profilePic);

        try {
            await axiosInstance.put(`users/${userId}`, updatedProfile);
            dispatch(fetchUser()); // Refresh the user data
            onclose(); // Close the modal after successful submission
        } catch (error) {
            console.log('Error updating profile', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e.target.files?.[0];
        if (file) {
            setProfilePic(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPrevProfilePic(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    if (!isopen) return null;

    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
            <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] ml-14 rounded-lg shadow-lg relative animate-fadeIn border border-[#444]">
                <div className='flex justify-between items-center mb-4'>
                    <button onClick={onclose} className="text-gray-400 hover:text-white transition">Cancel</button>
                    <p className="text-center text-white font-semibold text-lg">Edit Profile</p>
                    <div className="w-16">
                        <Image src={draft} alt='Draft Icon' className='w-8 h-8' />
                    </div>
                </div>
                <div className="w-full h-px bg-[#444] mb-4"></div>
                <div>
                    {user && (
                        <div key={user.id} className="flex items-center mb-4">
                            <img className='w-10 h-10 rounded-full border-2 border-black' src={prevProfilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="Profile" />
                        </div>
                    )}
                    <div className="text-gray-200">
                        {children}
                        <div className="flex flex-col gap-4 mt-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
                            />
                            {/* Username Input */}
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
                            />
                            {/* Bio Textarea */}
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                placeholder="Bio"
                                className="bg-[#2C2C2C] border border-[#444] outline-none w-full resize-none p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
                                rows={4}
                            />
                            {/* Profile Image Preview */}
                            {prevProfilePic && (
                                <div className="w-full max-h-[300px] overflow-hidden rounded-md">
                                    <img src={prevProfilePic} alt="Preview" className="w-full h-auto object-cover rounded-md" />
                                </div>
                            )}
                            {/* Image Upload Input */}
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                />
                                <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                                    <button className="ml-2 mt-5 border border-black text-white-500 hover:text-white transition h-10 w-40 rounded-lg">Upload Image</button>
                                </label>
                            </div>
                        </div>
                        <div className="mt-3 flex justify-end">
                            <button onClick={handleSubmit} disabled={loading} className="bg-black text-white rounded-lg px-4 py-2 transition">
                                {loading ? <Loading /> : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;

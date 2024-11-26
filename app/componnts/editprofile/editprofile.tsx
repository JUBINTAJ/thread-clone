'use client';

import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { ReactNode, useEffect, useRef, useState } from 'react';
import Loading from '@/app/componnts/loading/loading';
import draft from '@/Public/img/draft.png';
import Image from 'next/image';

import { userupdateee } from '@/store/reducer/userSlice';
import { fetchsearch, fetchUser } from '@/store/reducer/usergetSlice';

interface EditProfileModalProps {
  isopen: boolean;
  onclose: () => void;
  children: ReactNode;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isopen, onclose, children }) => {
  const dispatch = useAppDispatch();
  const { userupdate } = useAppSelector((state) => state.user);
  const fileInputRef = useRef<HTMLInputElement | null>(null);  


  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [profile, setProfile] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false);

  

  useEffect(() => {
    if (isopen) {
      const fetchUserData = async () => {
        const userId = localStorage.getItem('userid');
        if (userId) {
          try {
            setLoading(true);
            const res = await axiosInstance.get(`users/${userId}`);
            const userdata = res.data.user;

            setName(userdata.name);
            setUsername(userdata.username); 
            setBio(userdata.bio);
            setEmail(userdata.email);
            setProfile(userdata.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png');
            setLoading(false);
            
          } catch (error) {
            console.log('Error fetching user data:', error);
            setLoading(false);
          }
        }
      };
      fetchUserData();
        }
  }, [isopen]);

  const handle = async () => {
    const userId = localStorage.getItem('userid');
    if (userId) {
      try {
        setLoading(true);
        console.log('Profile data before update:', { name, username, bio, email,profile});
        console.log('profile',profile)
        const res = await axiosInstance.patch(`users/${userId}`, {
          name,
          username,
          bio,
          email,
          profilePic: profile, 
        });
        dispatch(userupdateee(res.data));
        setLoading(false);
        
        onclose();
        dispatch(fetchsearch())
      } catch (error) {
        console.log('Error updating user data:', error);
        setLoading(false);
      }
    }
  };
  

  if (!isopen) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
      <div className="bg-[#2C2C2C] p-6 md:p-8 w-[550px] ml-14 rounded-lg shadow-lg relative animate-fadeIn border border-[#444]">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onclose} className="text-gray-400 hover:text-white transition">
            Cancel
          </button>
          <p className="text-center text-white font-semibold text-lg">Edit Profile</p>
          <div className="w-16">
            <Image src={draft} alt="Draft Icon" className="w-8 h-8" />
          </div>
        </div>
        <div className="w-full h-px bg-[#444] mb-4"></div>
        <div>
          <div className="flex items-center mb-4">
            <img className="w-10 h-10 rounded-full border-2 border-black" src={profile} alt="Profile" />
          </div>

          <div className="text-gray-200">
            {children}
            <div className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}  
                placeholder="Username"
                className="bg-[#2C2C2C] border border-[#444] outline-none w-full p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
                className="bg-[#2C2C2C] border border-[#444] outline-none w-full resize-none p-3 rounded-md text-white focus:ring-2 focus:ring-blue-500 transition"
                rows={4}
              />
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setProfile(reader.result as string);  
                       }
                    reader.readAsDataURL(file);

                  }}
                }

               
                />
                <label className="flex items-center text-gray-300 cursor-pointer hover:text-white">
                  <button className="ml-2 mt-5 border border-black text-white-500 hover:text-white transition h-10 w-40 rounded-lg">
                    Upload Image
                  </button>
                </label>
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                onClick={handle}
                className="bg-black text-white rounded-lg px-4 py-2 transition"
                disabled={loading}
              >
                {loading ? <div className='mb-2'><Loading /></div> : 'Save '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;

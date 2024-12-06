'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/componnts/sidebar/sidebar';
import Followbtn from '@/app/componnts/Followbtn/followbtn'
 
import { useAppDispatch, useAppSelector } from '../../hookkkk/Appdispatch';
import { fetchsearch } from '@/store/reducer/usergetSlice';

function Page() {
    const dispatch = useAppDispatch();
    const { users ,user } = useAppSelector((state) => state.userget);

    const [search, setSearch] = useState<string>("");
    const [showSearch, setShowSearch] = useState<any[]>([]);
    const[Follow , setFollow]=useState(false)
    

    useEffect(() => {
        dispatch(fetchsearch());
        setShowSearch(
            users.filter((user) =>
                user.username.toLowerCase().includes(search.toLowerCase())
          )
        );
    }, [dispatch,users]);

   

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const hand=()=>{
        setFollow(true)
    }

    return (
      <div className="flex flex-col sm:flex-row">
  {/* Sidebar */}
  <div className="sm:w-[250px] w-full">
    <Sidebar />
  </div>

  {/* Main Content (Search Section) */}
  <div className="lay-2 sm:mr-24 w-full sm:w-[calc(100%-250px)]">
    {/* Title */}
    <div>
      <p className="text-center pt-8 prata-regular text-lg sm:text-2xl">Search</p>
    </div>

    {/* Search Container */}
    <div className="bg-[#5654543b] w-full md:w-[630px] h-auto md:h-[865px] mt-3 border-b-0 border border-[#3b3b3b] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none scrollb mx-auto">
      {/* Search Input */}
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
          className="bg-black ml-8 h-11 w-[90%] sm:w-[570px] mt-6 rounded-xl border border-[#3b3b3b] pl-8 text-[#3b3b3b]"
        />
      </div>

      {/* Follow Suggestions Title */}
      <p className="ml-8 mt-6 text-[#464343] text-base sm:text-lg">Follow suggestions</p>

      {/* Follow Suggestions */}
      <div>
        {showSearch.length > 0 ? (
          showSearch.map((user) => (
            <div key={user.id} className="flex items-center mb-6 px-6 sm:px-8">
              {/* User Profile Image */}
              <img
                className="w-10 h-10 rounded-full"
                src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                alt="Profile"
              />
              <div className="ml-3 flex flex-col flex-grow">
                <p className="mb-1">{user.name}</p>
                <p className="text-gray-400">{user.username}</p>
                <p className="mt-1">{user.followers.length} followers</p>
                <div className="w-full h-px bg-[#3b3b3b] mt-2"></div>
              </div>
              <div className="mr-6 flex items-center">
                <Followbtn userId={user._id} />
              </div>
            </div>
          ))
        ) : (
          <p className="ml-8 mt-4 text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  </div>

  {/* Optional Third Column */}
  <div className="lay-3"></div>
</div>

      
    );
}

export default Page;

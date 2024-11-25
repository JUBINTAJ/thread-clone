

'use client';
import axiosInstance from "@/app/axios/axiosinstance";
import React, { useEffect, useState } from "react";

interface FollowBtnProps {
    userId: string;
}

const FollowBtn: React.FC<FollowBtnProps> = ({ userId }) => {

    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);  

    const senderId = localStorage.getItem('userid'); 

    const check = async () => {
        if (!userId || !senderId) return;
        try {
            const res = await axiosInstance.get(`users/${userId}`);
            const user = res.data.user;
            setIsFollowing(user.followed);

        } catch (error) {
            console.log('Error fetching user data:', error);
        }
    };

    const handle = async () => {
        if (!senderId) {
            console.log('User not logged in');
            return;
        }
        setLoading(true);  
        try {
            if (isFollowing) {
                await axiosInstance.post(`users/unfollow/${userId}`, { userUnfollowId: senderId });
                setIsFollowing(false);
            } else {
                await axiosInstance.post(`users/follow/${userId}`, { userFollowId: senderId });
                setIsFollowing(true);
            }
        } catch (error) {
            console.log('Error during follow/unfollow action:', error);
        } finally {
            setLoading(false);  
        }
    };

    useEffect(() => {
        if (userId === senderId) {
            setIsFollowing(true); 
        } else {
            check();
        }
    }, [userId, senderId]);

    return (
        <button
            className={`border border-[#3b3b3b] w-28 h-9 rounded-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handle}
            disabled={!senderId || loading} 
        >
            {loading ? 'Loading...' : isFollowing ? 'Unfollow' : 'Follow'}
        </button>
    );
};

export default FollowBtn;







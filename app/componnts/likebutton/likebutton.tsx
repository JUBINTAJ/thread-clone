'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import likee from '@/Public/img/like.png'; 
import redlike from '@/Public/img/love.png'
interface LikeButtonProps {
    initialLike: number;
    postId: string;
    likedUser: string[];
}

const LikeButton = ({ initialLike, postId, likedUser }: LikeButtonProps) => {
    const [like, setLike] = useState(initialLike);
    const [liked, setLiked] = useState(false);
    
    const userId=localStorage.getItem('userid')
    useEffect(() => {
        if(likedUser.includes(userId as string)){
            setLiked(true)
        }
    }, [likedUser, userId]);

    const handleLike = async () => {
        const updatedLike = liked ? like - 1 : like + 1;
        setLike(updatedLike);
        setLiked(!liked);

        try {
            const endpoint = liked
                ? `https://social-media-rest-apis.onrender.com/api/posts/unlike/${postId}`
                : `https://social-media-rest-apis.onrender.com/api/posts/like/${postId}`;

            await axios.post(endpoint, { userId });
        } catch (error) {
            console.error("error is occurred ", error);
            setLike(liked ? like - 1 : like + 1 );
            setLiked(!liked);
        }
    };

    return (
        <button onClick={handleLike} className="flex items-center">
        <Image
            src={liked ? redlike : likee}
            alt="like icon"
            className="w-6"
        />
        <span className={liked ? 'text-red-500' : 'text-white'}>
            {like}
        </span>
    </button>
    );
};

export default LikeButton;

'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import likee from '@/Public/img/Img - Like.svg'; 
import redlike from '@/Public/img/Vector.svg'
import { Span } from "next/dist/trace";
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
<button onClick={handleLike} className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in">
              <Image
            src={liked ?  redlike  : likee}
            alt="like icon"
            className="w-6   "
            />
        <span className={liked ? 'text-[#FF0034]' : 'text-white' } >
           <span className="ml-1"> {like}</span>
        </span>
    </button>
    );
};

export default LikeButton;

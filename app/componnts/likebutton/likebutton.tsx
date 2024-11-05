'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
import likee from '@/Public/img/icons8-like-100 (1).png'; // Corrected path

interface LikeButtonProps {
    initialLike: number;
    userId: string;
    postId: string;
    likedUser: string[];
}

const LikeButton = ({ initialLike, userId, postId, likedUser }: LikeButtonProps) => {
    const [like, setLike] = useState(initialLike);
    const [liked, setLiked] = useState(false);

    // Check if the user has already liked the post
    useEffect(() => {
        setLiked(likedUser.includes(userId));
    }, [likedUser, userId]);

    // Handle the like/unlike logic
    const handleLike = async () => {
        const updatedLike = liked ? like - 1 : like + 1;
        setLike(updatedLike);
        setLiked(!liked);

        try {
            const endpoint = liked
                ? `https://social-media-rest-apis.onrender.com/api/posts/unlike/${postId}`
                : `https://social-media-rest-apis.onrender.com/api/posts/like/${postId}`;

            // Send the like/unlike request to the backend
            await axios.post(endpoint, { userId });
        } catch (error) {
            console.error("Error occurred while updating like status", error);
            // Revert changes if there’s an error
            setLike(liked ? like - 1 : like + 1);
            setLiked(!liked);
        }
    };

    return (
        <button onClick={handleLike} className="flex items-center">
            <Image src={likee} alt="like icon" className="w-6 " />
            <span>{like}</span>
        </button>
    );
};

export default LikeButton;

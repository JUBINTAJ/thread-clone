'use client';

import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import React, { useEffect, useState } from 'react';

interface Reply {
    text: string;
    username: string;
    userId: string;
    userprofilpic: string;
}

interface Post {
    postId: string;
    text: string;
    postById: {
        username: string;
        userprofilpic: string;
    };
    image?: string;
    replies: Reply[];
}

interface PostProps {
    isOpen: boolean;
    onClose: () => void;
    postId: string;
    userId: string;
    profilpic: string;
    userprofilpic: string;
    username: string;
    post: Post[];
}

const Comment: React.FC<PostProps> = ({ isOpen, onClose, postId }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { user } = useAppSelector((state) => state.userget);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isOpen) {
            const fetchPost = async () => {
                setLoading(true);
                try {
                    const res = await axiosInstance.get(`posts/post/${postId}`);
                    setPost(res.data.post);
                } catch (err) {
                    setError('Error fetching the post. Please try again.');
                } finally {
                    setLoading(false);
                }
            };
            fetchPost();
        }
    }, [isOpen, postId]);

    if (!isOpen) return null;

    const replies = post?.replies ?? [];

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-50">
            <div className="bg-[#181818] rounded-xl shadow-lg w-[500px] h-[600px] flex flex-col border border-[#3b3b3b] scrollb">
                {/* Header */}
                <div className="flex justify-between items-center my-5 px-10">
                    <button
                        onClick={onClose}
                        className="text-white hover:text-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <p className="text-center text-white font-serif font-semibold text-lg">
                        Reply
                    </p>
                    <div className="w-16"></div>
                </div>

                <div className="w-full h-px bg-[#444] mb-4"></div>

                {/* Post Content */}
                <div className="flex-1 no-scrollbar overflow-y-auto px-3">
                    {loading && (
                        <p className="text-white text-center">Loading...</p>
                    )}
                    {error && (
                        <p className="text-red-500 text-center">{error}</p>
                    )}
                    {post && (
                        <div className="mb-4 px-4">
                            <div className="flex items-start mb-4">
                                <img
                                    className="w-10 h-10 rounded-full object-cover mr-4"
                                    src={
                                        post.postById.userprofilpic ||
                                        'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                    }
                                    alt="User Profile"
                                />
                                <div className="flex-1">
                                    <p className="text-white font-bold text-sm mb-1">
                                        {post.postById.username}
                                    </p>
                                    <p className="text-white text-sm">
                                        {post.text}
                                    </p>
                                </div>
                            </div>
                            {post.image && (
                                <div className="relative w-full mb-3 ">
                                    <img
                                        src={post.image}
                                        alt="Post"
                                        className="w-full h-auto object-cover rounded-lg transition-opacity duration-300 border border-[#3b3b3b]"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Replies */}
                    <div className="space-y-2">
                        {replies.length > 0 ? (
                            [...replies].reverse().map((reply, index) => (
                                <div
                                    key={index}
                                    className="flex items-start mb-2"
                                >
                                    <img
                                        className="w-10 h-10 rounded-full mr-2"
                                        src={
                                            reply.userprofilpic ||
                                            'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                                        }
                                        alt="Reply User"
                                    />
                                    <div className="bg-[#181818] p-2.5 rounded-lg text-white w-full">
                                        <p className="font-bold text-sm mb-0.5">
                                            {reply.username}
                                        </p>
                                        <p className="break-words text-sm">
                                            {reply.text}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-center text-sm">
                                No replies
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;

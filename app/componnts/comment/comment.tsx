'use client';

import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import { fetchPosts } from '@/store/reducer/postssSlice';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Loading from '../loading/loading';

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
    isopen: boolean;
    onclose: () => void;
    postId: string;
    userId: string;
    profilpic: string;
    userprofilpic: string;
    username: string;
    post: Post[];
}

const Comment: React.FC<PostProps> = ({ isopen, onclose, postId, userId, userprofilpic, profilpic }) => {
    const [post, setPost] = useState<Post | null>(null);
    const [comment, setComment] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const { user } = useAppSelector((state) => state.userget);

    useEffect(() => {
        if (isopen) {
            const fetchPost = async () => {
                try {
                    const res = await axiosInstance.get(`posts/post/${postId}`);
                    console.log('Post data:', res.data);
                    setPost(res.data.post);
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            };
            fetchPost();
        }
    }, [isopen, postId]);

    const handleReply = async () => {
        if (!comment.trim()) return;
const userId = localStorage.getItem("userid")
        const reply = {
            text: comment,
            userId,
            postId,
            profilpic,
            userprofilpic,
        };

        try {
            setLoading(true);
            await axiosInstance.post(`posts/${postId}/reply`, reply);

            setComment('');
            onclose();
            dispatch(fetchPosts());
            setError(null);
        } catch (error) {
            console.error('Error posting reply:', error);
            setError('Failed to post reply. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    // console.log('Sending reply:', replies);
    console.log('User state:', user);
    
    if (!isopen) return null;

    const replies = post?.replies ?? [];

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-[#181818] rounded-xl shadow-lg w-[500px] h-[600px] flex flex-col border border-[#3b3b3b]">
                <div className='flex justify-between items-center my-5 px-10'>
                    <button onClick={onclose} className="text-white hover:text-black transition">Cancel</button>
                    <p className="text-center text-white font-serif font-semibold text-lg">Reply</p>
                    <div className="w-16"></div>
                </div>

                <div className="w-full h-px bg-[#444] mb-4"></div>

                <div className="flex-1 no-scrollbar overflow-y-auto px-3 scrollb">
                    {post && (
                        <div className="mb-4 px-4">
                            <div className="flex items-start mb-4">
                                <img
                                    className='w-10 h-10 rounded-full object-cover mr-4'
                                    src={post.postById.userprofilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                    alt="User Profile"
                                />

                                <div className="flex-1">
                                    <p className="text-white font-bold text-sm mb-1">{post.postById.username}</p>
                                    <p className="text-white text-sm">{post.text}</p>
                                </div>
                            </div>

                            <div className="flex items-start mb-4 px-4">
                                <div className="line-container">
                                    <div className="vertical-line"></div>
                                </div>

                                <div className="relative flex">
                                    {post.image && (
                                        <div className="relative w-full mb-3 ml-8">
                                            <img
                                                src={post.image}
                                                alt="Post"
                                                className="w-full h-auto object-cover rounded-lg transition-opacity duration-300 border border-[#3b3b3b] image-main"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {user && (
                        <div key={user.id} className="flex items-center mb-8 ml-5">
                            <img
                                className='w-10 h-10 rounded-full mr-4'
                                src={user.profilePic || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'}
                                alt="Profile"
                            />
                            <div className="text-white font-medium">
                                {user.username}
                            </div>
                        </div>
                    )}

                    <div className="mb-3"></div>
                    <div className="space-y-2">
                       {replies.length > 0 ? (
                            [...replies].reverse().map((reply, index) => (
                                <div key={index} className="flex items-start mb-2">
                                    <div className="bg-[#181818] p-2.5 rounded-lg text-white w-full">
                                        <img src={reply.userprofilpic ||  "https://cdn-icons-png.flaticon.com/512/149/149071.png" } alt='' className="w-10 h-10 rounded-full mr-2 inline-block" />
                                        <p className="font-bold text-sm mb-0.5">{reply.username}</p>
                                        <p className="break-words text-sm">{reply.text}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-center text-sm">No replies</p>
                        )}
                    </div> 
                </div>

                <div className="p-2">
                    {error && <p className="text-red-500 text-xs mb-2 ml-12">{error}</p>}

                    <div className="mb-2 flex justify-center">
                        <input
                            id="comment-input"
                            placeholder="Add your comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-[330px] p-2 border border-[#2d2d2d] bg-[#181818] rounded-lg text-sm"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-[#2d2d2d] text-white px-3 py-1.5 rounded-2xl mt-2 ml-5 mr-2 text-sm h-10 w-16"
                            onClick={handleReply}
                            disabled={loading}
                        >
                            {loading ? <div className='mb-6'><Loading /></div> : 'Post'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;

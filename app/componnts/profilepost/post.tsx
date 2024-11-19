'use client'

import axiosInstance from '@/app/axios/axiosinstance'
import { useAppDispatch } from '@/app/hookkkk/Appdispatch'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LikeButton from '@/app/componnts/likebutton/likebutton'

const post = () => {
    const dispatch = useAppDispatch()
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

    type Reply = {
        id: string;
        userId: string;
        userProfilePic: string;
        username: string;
        text: string;
    };

    type Post = {
        id: string;
        userProfilePic: string;
        username: string;
        text: string;
        image: string;
        createdOn: string;
        replies: Reply[];
        likes: string[];
        reposts: string[];
        postById: string;
    }



    const fetchputpost = async () => {
        try {
            const userId = localStorage.getItem('userid')

            if (userId) {
                const res = await axiosInstance.get(`posts/${userId}`)
                setPosts(res.data.post);

            }
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchputpost()
    }, [])





    const deletepost = async (postId: string) => {
        try {
            await axiosInstance.delete(`posts/${postId}`)
            setPosts((prevPost) => prevPost.filter((post) => post.id !== postId))
        } catch (error) {
            console.log('error in delete post', error)
        }


    }




    return (
        <div className="flex items-center justify-center h-screen mt-20">
            <div className="w-6/12 bg-[#181818] rounded-3xl mt-auto">
                <div className="flex flex-col gap-10 p-4">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col">
                            <div className="flex items-center mt-6">
                                <div>{post.userProfilePic}</div>


                                <div className="ml-4">
                                    <h3 className="text-white">{post.username}</h3>
                                </div>
                                <div className="ml-auto">
                                    {/* <MdDelete className="text-white text-2xl" onClick={() => toggleDropdown(post._id)} /> */}
                                    {selectedPostId === post.id && (
                                        <button className="text-white text-sm ml-4" onClick={() => deletepost(post.id)}>Delete</button>
                                    )}
                                </div>
                            </div>
                            <p className="text-left text-gray-300 ml-8 mt-1">{post.text}</p>
                            {post.image && <img src={post.image} alt="post" className="w-1/2 h-auto mx-8 mt-3 rounded-lg" />}
                            <div className="flex items-center justify-between ml-8 mt-3">
                                <LikeButton
                                    initialLike={post.likes.length}
                                    postId={post.id}
                                    likedUser={post.likes}
                                />
                        
                                {/* <ReplyButton replyCount={post.replies.length} />
                                <RepostButton repostCount={post.reposts.length} /> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default post
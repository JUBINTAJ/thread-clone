'use client';
import Image from 'next/image';

import axiosInstance from '@/app/axios/axiosinstance';
import { useAppDispatch, useAppSelector } from '@/app/hookkkk/Appdispatch';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LikeButton from '@/app/componnts/likebutton/likebutton';
import Addpost from '@/app/componnts/addpost/addpost';
import comment from '@/Public/img/Img - Comment.svg';
import repost from '@/Public/img/Img - Repost.svg';
import Comment from '@/app/componnts/comment/comment';
import Repost from '@/app/componnts/repost/repost';

const PostPage = () => {
  const dispatch = useAppDispatch();
  const [onopen, setonopen] = useState(false);

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [selectcmt, setselectcmt] = useState<any>(null);
  const [repostData, setRepostData] = useState<any>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [username, setUserName] = useState<string>("");

  const { users, user } = useAppSelector((state) => state.userget);

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
  };

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    if (userId && users.length > 0) {
      const user = users.find((user) => user.id === userId);
      if (user) {
        setCurrentUser(user);
        setUserName(user.username);
      }
    }
  }, [users]);

  const fetchputpost = async () => {
    try {
      const userId = localStorage.getItem('userid');
      if (userId) {
        const res = await axiosInstance.get(`posts/${userId}`);
        setPosts(res.data.post);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchputpost();
  }, []);

  const deletepost = async (postId: string) => {
    try {
      await axiosInstance.delete(`posts/${postId}`);
      setPosts((prevPost) => prevPost.filter((post) => post.id !== postId));
    } catch (error) {
      console.log('error in delete post', error);
    }
  };

  const openmodal = (post: any) => {
    setselectcmt(post);
  };

  const opennmodal = (repost: any) => {
    setRepostData({
      postId: repost._id,
      userProfilePic: repost.postById?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      username: repost.postById?.username || 'Unknown User',
    });
  };

  return (
    <div className="flex justify-center items-start min-h-screen mb-[10px]">
      <div className="w-full">
        {user && (
          <div key={user.id} className="flex items-center p-4">
            <img
              className="w-10 h-10 rounded-full object-cover mr-4"
              src={user.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="Profile"
            />
            <h1 className="text-[#545050]">What's new?</h1>
            <button
              className="border w-16 h-10 rounded-xl ml-auto border-[#3b3b3b] hover:bg-gray-800 transition-colors"
              onClick={() => setonopen(true)}
            >
              Post
            </button>
            <Addpost isopen={onopen} onclose={() => setonopen(false)}>
              <h1></h1>
            </Addpost>
          </div>
        )}
        <div className="mb-4">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col p-6 border border-[#3b3b3b] ">
              <div className="flex items-center">
                <img
                  src={post.userProfilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt="User Profile"
                  className="object-cover w-10 h-10 rounded-full"
                />
                <div className="ml-4   flex justify-between items-start">
                  <h3 className="text-white font-semibold">{post.username || 'mimin_1234'}</h3>
                  <h1 className="text-gray-500 text-lg ml-[400px] ">...</h1>

                </div>
                {/* <div className="ml-auto">
                  {selectedPostId === post.id && (
                    <button
                      className="text-white text-sm px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors"
                      onClick={() => deletepost(post.id)}
                    >
                      Delete
                    </button>
                  )}
                </div> */}
                
              </div>
              <p className="text-left text-gray-300 mt-4">{post.text}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="image-main  border border-[#3b3b3b]"
                />
              )}
              <div className="flex items-center gap-4 mt-4">
                <LikeButton
                  initialLike={post.likes.length}
                  postId={post.id}
                  likedUser={post.likes}
                />
                <div
                 className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in"
                  onClick={() => openmodal(post)}
                >
                  <Image src={comment} alt="Comment" width={20} height={20} />
                  <span className="text-sm ml-2">{post.replies.length}</span>
                </div>
                <div
                 className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in"
                  onClick={() => opennmodal(post)}
                >
                  <Image src={repost} alt="Repost" width={20} height={20} />
                  <span className="text-sm ml-2">{post.reposts.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectcmt && (
          <Comment
            isopen={!!selectcmt}
            onclose={() => setselectcmt(null)}
            postId={selectcmt._id}
            userId={user?.id || ""}
            userprofilpic={user?.profilePic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
            username={user?.username || 'Anonymous'}
          />
        )}
        {repostData && (
          <Repost
            isopen={!!repostData}
            onclose={() => setRepostData(null)}
            postId={repostData.postId}
            userprofilpic={repostData.userProfilePic}
            username={repostData.username}
          />
        )}
      </div>
    </div>
  );
};

export default PostPage;

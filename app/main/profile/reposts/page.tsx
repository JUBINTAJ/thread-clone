'use client';

import axiosInstance from '@/app/axios/axiosinstance';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import commentIcon from '@/Public/img/Img - Comment.svg';
import repostIcon from '@/Public/img/Img - Repost.svg';
import Comment from '@/app/componnts/comment/comment';
import Repost from '@/app/componnts/repost/repost';
import LikeButton from '@/app/componnts/likebutton/likebutton';

type Reply = {
  id: string;
  userId: string;
  userProfilePic: string;
  username: string;
  text: string;
};

interface Replys {
  _id: string;
  userId: string;
  postId: string;
  userprofilpic: string;
  username: string;
  image: string;
  text: string;
  replies: Reply[];
  likes: string[];
  reposts: string[];
}

const Page = () => {
  const [reposts, setReposts] = useState<Replys[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedComment, setSelectedComment] = useState<Replys | null>(null);
  const [repostData, setRepostData] = useState<Replys | null>(null);
  const [postId, setPostId] = useState<string | null>(null);

  const fetchReposts = async () => {
    const userId = localStorage.getItem('userid');
    if (!userId) {
      setError('User ID not found');
      setLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.get(`posts/repost/${userId}`);
      console.log('Full Response:', response.data);
      const posts = response.data.posts || [];
      console.log('Extracted posts:', posts);
      
      setReposts(posts);
      setLoading(false);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch reposts');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReposts();
  }, []);

  if (loading) {
    return <div className='flex justify-center prata-regular'>Loading...</div>;
  }

  if (error) {
    console.log('Error:', error);
    return <div className='flext justify-center prata-regular'>Error: {error}</div>;
  }

  console.log('Reposts data:', reposts);

  const openCommentModal = (post: Replys) => {
    setSelectedComment(post);
  };

  const openRepostModal = (post: Replys) => {
    setPostId(post._id);
    setRepostData(post);
  };

  return (
    <div className='-mt-14'>
      {reposts.length > 0 ? (
        reposts.map((item) => (
          <div key={item._id} className="flex flex-col p-6 border border-[#3b3b3b]">
            <div className="flex items-center">
              <img
                src={item.userprofilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                alt={item.username}
                className="object-cover w-10 h-10 rounded-full"
              />
              <div className="ml-4 flex justify-between items-center w-full">
                <h3 className="text-white font-semibold">{item.username || 'Unknown User'}</h3>
              </div>
            </div>
            <p className="text-left text-gray-300 mt-4 ml-9">{item.text}</p>

            {item.image && (
              <img
                src={item.image}
                alt="Repost Content"
                className="image-main border border-[#3b3b3b] mt-4 rounded-lg w-full max-w-sm object-cover"
              />
            )}

            <div className="flex items-center gap-4 mt-4">
              <LikeButton
                initialLike={item.likes.length}
                postId={item._id}
                likedUser={item.likes}
              />
              <div
                className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in"
                onClick={() => openCommentModal(item)}
              >
                <Image src={commentIcon} alt="Comment" width={20} height={20} />
                <span className="text-sm ml-2">{item.replies?.length || 0}</span>
              </div>
              <div
                className="w-[60px] h-[30px] flex justify-center items-center rounded-[20px] gap-1 hover:bg-[rgb(56,52,52)] transition-all duration-500 ease-in"
                onClick={() => openRepostModal(item)}
              >
                <Image src={repostIcon} alt="Repost" width={20} height={20} />
                <span className="text-sm ml-2">{item.reposts?.length || 0}</span>
              </div>
            </div>

            {selectedComment && (
              <Comment
                isopen={!!selectedComment}
                onclose={() => setSelectedComment(null)}
                postId={selectedComment._id}
                userId={item?._id || ""}
                userprofilpic={item?.userprofilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                username={item?.username || 'Anonymous'}
              />
            )}

            {postId && repostData && (
              <Repost
                isopen={!!postId}
                onclose={() => setPostId(null)}
                postId={postId}
                userprofilpic={repostData.userprofilpic || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                username={repostData.username || 'Unknown User'}
              />
            )}
          </div>
        ))
      ) : (
        <div>No reposts found</div>
      )}
    </div>
  );
};

export default Page;

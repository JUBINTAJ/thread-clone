// 'use client'; 
// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { following, unfollow } from '@/store/reducer/follow';
// import styles from './FollowBtn.module.scss';

// interface FollowBtnProps {
//     userId: string;
// }

// const FollowBtn: React.FC<FollowBtnProps> = ({ userId }) => {
//     const dispatch = useDispatch();
//     const { followers, status } = useSelector((state: any) => state.follow);
//     const [isFollowing, setIsFollowing] = useState(false);

//     useEffect(() => {
//         // Assuming followers is now an array
//         setIsFollowing(followers.includes(userId));
//     }, [followers, userId]);

//     const handleFollow = () => {
//         if (isFollowing) {
//             dispatch(unfollow({ userId }));
//         } else {
//             dispatch(following({ userId }));
//         }
//     };

//     return (
//         <button
//             onClick={handleFollow}
//             className={`border border-[#3b3b3b] w-28 h-9 rounded-xl ${isFollowing ? styles.following : styles.follow}`}
//             disabled={status === 'loading'}
//         >
//             {status === 'loading' ? 'Loading...' : isFollowing ? 'Following' : 'Follow'}
//         </button>
//     );
// };

// export default FollowBtn;

import React from 'react';

 

interface PostBtnProps {

    onClick: () => void;

}

 

const PostBtn: React.FC<PostBtnProps> = ({ onClick }) => {

    return (



            <>
            <button onClick={onClick}   className='h-10 w-16 mt-3  bg-[#181818] text-white border rounded-lg '> Post</button>
            </>

    );

};

 

export default PostBtn;  
import axios from "axios";
import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";


interface likeprops{
    initialike:number;
    userId:string;
    postId:string;
    likeduser:string[]
}


const likebutton =({initialike,userId,postId,likeduser}:likeprops)=>{
    const[like,setlike]=useState((initialike))
    const[liked,setliked]=useState(false)
    useEffect(()=>{
        if(likeduser.includes(userId)){
            setliked(true)
        }


    },[likeduser,setliked])

    const handlelike=async()=>{
        const updatelike=liked? like-1 :like+1
        setlike(updatelike)
        setliked(!liked)

        try{
            const Epoint=liked?
                  `https://social-media-rest-apis.onrender.com/api/posts/unlike/${postId}` 
                : `https://social-media-rest-apis.onrender.com/api/posts/like/${postId}`


                const response = await axios.post(Epoint,{userId})
                
        }
         catch  (error:any){
             setlike(liked ? like-1:like+1)
             setliked(liked)
         }
    }


}

export default likebutton;
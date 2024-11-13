
import { cookies } from "next/headers";

export function getUserId(){
    const cookieStore = cookies();

    const userId = cookieStore.get('userid')
       
    if(userId){
        return userId.value;


    }

    return null;
}

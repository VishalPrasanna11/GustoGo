import { useUpdateMyUser, userGetMyUser } from "@/api/UserApi";
import UserProfile from "@/forms/UserProfile/UserProfile";
import { User } from "@/types";


const UserProfilePage = () => {
    const {currentUser, isLoading:isGetLoading} = userGetMyUser();
    const {updateUser, isLoading:isUpdateLoading} = useUpdateMyUser();
    if(isGetLoading){
        return <div>Loading...</div>
    }

    if(!currentUser){
        return <div>Failed to fetch user</div>
    }

    return (
        <UserProfile 
       currentUser={currentUser}
        onSave={updateUser} 
        isLoading={isUpdateLoading}/>
    )
}


export default UserProfilePage;

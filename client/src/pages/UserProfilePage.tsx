import { userGetMyUser, useUpdateMyUser } from "@/api/UserApi";
import UserProfileForm,{UserFormData} from "@/forms/UserProfile/UserProfile";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = userGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
 
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
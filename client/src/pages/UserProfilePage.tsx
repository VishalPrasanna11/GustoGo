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
  const handleSave = async (formData: UserFormData) => {
    try {
      // Assuming updateUser expects a complete user profile data object
      await updateUser({
        name: formData.name,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        city: formData.city,
        country: formData.country,
        state: formData.state,
        phone: formData.phone,
        zipCode: formData.zipCode,
      
        // Add other required fields like addressLine2, state, zipCode, phone if necessary
      });
      // Optionally handle success, e.g., show a success message
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Handle error, e.g., show an error message
    }
  };
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
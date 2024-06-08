
import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;;

type CreateUser = {
    auth0id: string;
    email: string;
};

export const userGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async ():Promise<User> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                contentType: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return response.json();
    };

    const { data:currentUser, isLoading, isError } = useQuery("fetchCurrentUser", getMyUserRequest);
    if(isError){
        toast.error("Failed to fetch user");
    }
    return {
        currentUser,
        isLoading,
        isError,
    };
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    
    const createMyUserRequest = async (user: CreateUser) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };
  
    const {
      mutateAsync: createUser,
      isLoading,
      isError,
      isSuccess,
    } = useMutation(createMyUserRequest);
  
    return {
      createUser,
      isLoading,
      isError,
      isSuccess,
    };
  };

type updateuserData = {
    name : string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
}




export const useUpdateMyUser = () =>{
    const { getAccessTokenSilently } = useAuth0();
    const updateUserDataRequest = async (form: updateuserData) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }
     }
    const {mutateAsync: 
            updateUser,
          isLoading,
          isError,
          isSuccess,
          reset} = useMutation(updateUserDataRequest);

          if(isSuccess){
            toast.success("User updated successfully");
          }
          if(isError){
            toast.error("Failed to update user");
            reset();
        }
          
        return {
            updateUser,
            isLoading,
         }
}

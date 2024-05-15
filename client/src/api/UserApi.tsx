
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;;

type User = {
    auth0id: string;
    email: string;
};


export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    
    const createMyUserRequest = async (user: User) => {
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

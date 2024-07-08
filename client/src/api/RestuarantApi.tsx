import { RestauarantType } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useCreateRestaurant = () => {
    debugger;
    const { getAccessTokenSilently } = useAuth0();

    const createRestaurantRequest = async (restaurant: FormData):Promise <RestauarantType> => {
        console.log("This is the restaurant", restaurant);
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(restaurant),
        });

        if (!response.ok) {
            throw new Error("Failed to create restaurant");
        }
        return response.json();
    };
    const { 
        mutate: createRestaurant,
        isLoading,
        isSuccess, 
        isError } = useMutation(createRestaurantRequest);

        if(isSuccess){
            toast.success("Restaurant created successfully");
        }

        if(isError){
            toast.error("Failed to create restaurant");
        }
        return {
            createRestaurant,
            isLoading,
            isError,
        };

};



import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import Restaurant from "@/forms/Restaurant/Restaurant"

const RestauarantPage = () => {
    const {createRestaurant,isLoading,} = useCreateMyRestaurant();
    return (
       <Restaurant onSave={createRestaurant} isLoading={isLoading}/>
    )
}

export default RestauarantPage;
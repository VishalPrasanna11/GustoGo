import { useCreateRestaurant } from "@/api/RestuarantApi";
import Restaurant from "@/forms/Restaurant/Restaurant"

const RestauarantPage = () => {
    const {createRestaurant,isLoading,} = useCreateRestaurant();
    return (
       <Restaurant onSave={createRestaurant} isLoading={isLoading}/>
    )
}

export default RestauarantPage;
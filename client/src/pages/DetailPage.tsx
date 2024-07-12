import { useGetRestaurant } from "@/api/RestaurantApi";
import RestaurantInfo from "@/components/RestaurantInfo";
import { MenuItem } from "@/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    const { restaurantId } = useParams(); 
    const { restaurant, isLoading } = useGetRestaurant(restaurantId);

    if(isLoading){
        return <div>Loading...</div>
    }

    function addToCart(menuItem: MenuItem) {
        throw new Error("Function not implemented.");
    }

    return (
        <div className="flex flex-col gap-10">
            <AspectRatio ratio={16 / 5}>
                <img src={restaurant?.lastUpdated} 
                className="rounded-md object-cover h-full w-full"/>
            </AspectRatio>
            <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
                <div className="flex flex-col gap-4">
                    {restaurant && <RestaurantInfo restaurant={restaurant}/>}   
                    <span className="text-2xl font-bold tracking-tight">Menu</span>
                    {restaurant.menuItems.map((menuItem) => (
            <menuItem
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
                </div>
            </div>

            
                
            
            
        </div>
    );


};

export default DetailPage;
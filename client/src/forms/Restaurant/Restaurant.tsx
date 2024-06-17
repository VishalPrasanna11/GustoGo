import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {z} from 'zod';
import DetailsSection from './DetailsSection';
import { Separator } from '@/components/ui/separator';
import CuisinesSection from './CuisinesSection';
import MenuSection from './MenuSection';
import ImageSection from './ImageSection';
import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';

const restuarantSchema = z.object({
    restaurantname:z.string({
        required_error: 'Restaurant name is required'
    }),
    city: z.string({
        required_error: 'City is required'
    }),
    country: z.string({
        required_error: 'Country is required'
    }),
    deliveryPrice: z.coerce.number({
        required_error: 'Delivery price is required',
        invalid_type_error: 'Delivery price must be a number',
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: 'Estimated delivery time is required',
        invalid_type_error: 'Estimated delivery time must be a number',
    }),
    cuisines:z.array(z.string()).nonempty({
        message: 'Please select at least one cuisine'
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, {
            message: 'Menu item name is required'
        }),
        price: z.coerce.number().min(1, 'Price is required')
    
    }),
),
imageFile:z.instanceof(File,{message:'Image is required'}),
});


type restuarantFormData = z.infer<typeof restuarantSchema>;


type Props = {
    onSave:(restuarantFormData:FormData)=>void
    isLoading:boolean
}

const Restaurant = ({onSave,isLoading}: Props) => {
    const form = useForm<restuarantFormData>({
        resolver:zodResolver(restuarantSchema),
        defaultValues:{
            cuisines:[],
            menuItems:[{name:'',price:0}],
        }
    });

    const onSubmit = (data:restuarantFormData) => {
        const formData = new FormData();
        formData.append('restaurantName',data.restaurantname);
        formData.append('city',data.city);
        formData.append('country',data.country);
        formData.append('deliveryPrice',String(data.deliveryPrice));
        formData.append('estimatedDeliveryTime',String(data.estimatedDeliveryTime));
        formData.append('cuisines',JSON.stringify(data.cuisines));
        formData.append('menuItems',JSON.stringify(data.menuItems));
        formData.append('imageFile',data.imageFile);
        onSave(formData);
    }

    return (
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 bg-gray-50 p-8 rounded-lg shadow-md'
            >
            <DetailsSection/>
            <Separator/>
            <CuisinesSection/>
            <Separator/>
            <MenuSection/>
            <Separator/>
            <ImageSection/>
            {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )
}

export default Restaurant;

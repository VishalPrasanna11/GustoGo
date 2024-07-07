import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import DetailsSection from './DetailsSection';
import { Separator } from '@/components/ui/separator';
import CuisinesSection from './CuisinesSection';
import MenuSection from './MenuSection';
import ImageSection from './ImageSection';
import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { RestauarantType } from '@/types';

const restaurantSchema = z.object({
    restaurantname: z.string({
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
    cuisines: z.array(z.string()).nonempty({
        message: 'Please select at least one cuisine'
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, {
            message: 'Menu item name is required'
        }),
        price: z.coerce.number().min(1, 'Price is required')
    })),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "Image is required" }).optional(),
}).refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image URL or image File must be provided",
    path: ["imageFile"],
});

type restaurantFormData = z.infer<typeof restaurantSchema>;

type Props = {
    restaurant?: RestauarantType;
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}

const Restaurant = ({ onSave, isLoading ,restaurant}: Props) => {
    const form = useForm<restaurantFormData>({
        resolver: zodResolver(restaurantSchema),
        defaultValues: {
           
            cuisines: [],
            menuItems: [{ name: '', price: 0 }],
        }
    });

    const onSubmit = (formDataJson: restaurantFormData) => {
        console.log("Form data (JSON):", formDataJson);

        const formData = new FormData();

        formData.append('restaurantName', formDataJson.restaurantname);
        formData.append('city', formDataJson.city);
        formData.append('country', formDataJson.country);
        formData.append('deliveryPrice', String(formDataJson.deliveryPrice));
        formData.append('estimatedDeliveryTime', String(formDataJson.estimatedDeliveryTime));
        
        formDataJson.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine);
        });
        
        formDataJson.menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}].name`, menuItem.name);
            formData.append(`menuItems[${index}].price`, String(menuItem.price));
        });
        
        if (formDataJson.imageFile) {
            formData.append('imageFile', formDataJson.imageFile);
        }

        console.log("Form data (FormData):", formData);
        debugger; // Pause execution here to inspect formData
        onSave(formData);
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={form.handleSubmit(()=>onSubmit)}
                className='space-y-8 bg-gray-50 p-8 rounded-lg shadow-md'
            >
                <DetailsSection />
                <Separator />
                <CuisinesSection />
                <Separator />
                <MenuSection />
                <Separator />
                <ImageSection />
                {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
            </form>
        </FormProvider>
    )
}

export default Restaurant;

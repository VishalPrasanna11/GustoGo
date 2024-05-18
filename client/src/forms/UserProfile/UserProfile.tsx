import { useForm } from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';

const UserProfileFormSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email().optional(),
    addressLine1: z.string().min(3, "Address Line 1 must be at least 3 characters"),
    addressLine2: z.string().optional(),
    city: z.string().min(3, "City must be at least 3 characters"),
    state: z.string().min(2, "State must be at least 2 characters"),
    zipCode: z.string().min(5, "Zip Code must be at least 5 characters"),
    country: z.string().min(3, "Country must be at least 3 characters"),
    phone: z.string().min(10, "Phone must be at least 10 characters").max(10, "Phone must not exceed 10 characters"),
});

type UserProfileForm = z.infer<typeof UserProfileFormSchema>;

type Props = {
    onSave: (user: UserProfileForm) => void;
    isLoading: boolean;
};

const UserProfile = ({ onSave, isLoading }: Props) => {
    const form=useForm<UserProfileForm>({
    resolver: zodResolver(UserProfileFormSchema),
        defaultValues: {
            name: "",
            email: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zipCode: "",
            country: "",
            phone: "",
        },
    });
    return (
        <Form {...form}>
            <form 
            onSubmit={form.handleSubmit(onSave)}
            className='space-y-4 bg-gray-50 p-4 rounded-lg shadow-md md:p-10'
            >
            <div>
                <h2 className='text-2xl font-bold'>
                    User Profile Details
                </h2>
                <FormDescription>
                    View and update your user profile details here!
                </FormDescription>
                </div>
                <FormField control={form.control} name='email' 
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                        
                    </FormItem>
                
             )}/>
             <FormField control={form.control} name='name' 
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field}  className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
            <div className='flex flex-col md:flex-row gap-4'>
            <FormField control={form.control} name='addressLine1' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>Address Line1</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
             <FormField control={form.control} name='addressLine2' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>Address Line2</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
             <FormField control={form.control} name='city' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
            </div>


            <div className='flex flex-col md:flex-row gap-4'>
            <FormField control={form.control} name='state' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
             <FormField control={form.control} name='zipCode' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>ZipCode</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
             <FormField control={form.control} name='country' 
                render={({field})=>(
                    <FormItem className='flex-1'>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
            </div>
            <FormField control={form.control} name='phone' 
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                            <Input {...field} className='bg-white'/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                
             )}/>
             {isLoading ? (
                <LoadingButton />
            ) : (
                <Button type='submit' className='bg-black'>Save</Button>)

             }
            </form>

        </Form>
            
    )}

export default UserProfile;


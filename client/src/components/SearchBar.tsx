import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from './ui/form';
import {z} from 'zod';
import { useForm } from 'react-hook-form'; // Import the missing dependency
import { Search, FormField, FormItem, FormControl, Input, Button } from 'your-ui-library'; // Import the missing components


const formSchema = z.object({
    searchQuery: z.string({required_error: "Search query is required"}),});


export type SearchForm = z.infer<typeof formSchema>;

type Props ={
    onSubmit: (formData: SearchForm) => void;
    placeHolder: string;
    onReset?: () => void;
};

const SearchBar= ({onSubmit, onReset, placeHolder}: Props) => {
    const form = useForm<SearchForm>({
        resolver: zodResolver(formSchema),
        
    });

    const handleReset = () => {
        form.reset({
            searchQuery: "",
        });

        if(onReset){
            onReset();
        }
    };

    return (
        <Form>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`flex items-center flex-1 gap-3 justify-between flex-row border-2 rounded-full p-3 mx-5${form.formState.errors.searchQuery && "border-red-500"}`}>
                <Search strokeWidth={2.5} size={30} className="ml-1 text-orange-500 hidden md:block" />
                <FormField control={form.control} name="searchQuery" render={(field) => (
                    <FormItem className="flex-1">
                        <FormControl>
                            <Input {...field} className="border-none shadow-none text-x1 focus-visible:ring-0" placeholder={placeHolder} />
                        </FormControl>
                    </FormItem>
                )} />

                {form.formState.isDirty && (<Button onClick={handleReset} type="button" variant="outline" className="rounded-full">Clear</Button>)}
                <Button type="submit" variant="primary" className="rounded-full bg-orange-500">Search</Button>
            </form>
        </Form>
    );
};

export default SearchBar;
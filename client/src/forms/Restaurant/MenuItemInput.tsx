import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Form } from "react-router-dom";

type Props = {
    index: number;
    removeMenuItem: (index: number) => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
    const { control } = useFormContext();
    return (
        <div className="flex flex-row items-end gap-2">
            <FormField control = {control} 
            name = {`menuItems[${index}].name`} 
            render={({field})=><FormItem>   
                <FormLabel>
                Name
                <FormMessage/>
                </FormLabel>
                <FormControl>
                    <Input {...field} 
                    placeholder="Cheese Pizza" 
                    className="bg-white"/>
                </FormControl>
            </FormItem>
            }/>
            <FormField control = {control} 
            name = {`menuItems[${index}].price`} 
            render={({field})=><FormItem>   
                <FormLabel>
                Price ($)
                <FormMessage/>
                </FormLabel>
                <FormControl>
                    <Input {...field} 
                    placeholder="10.99" 
                    className="bg-white"/>
                </FormControl>
            </FormItem>
            }/>
            <Button
            type="button"
            onClick={()=>removeMenuItem(index)}
            className="bg-red-500 text-white">
                Remove
            </Button>

            </div>
    );

};

export default MenuItemInput;

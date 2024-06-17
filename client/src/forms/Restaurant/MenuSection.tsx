import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "MenuItems",  // Ensure consistency in naming convention
    });

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Menu</h2>
                <FormDescription>
                    Add the menu items that your restaurant serves
                </FormDescription>
            </div>
            <FormField
                control={control}
                name="MenuItems"  // Ensure consistency in naming convention
                render={() => (
                    <FormItem className="flex flex-col gap-2">
                        {fields.map((field, index) => (
                            <MenuItemInput
                                key={field.id}  // Add key prop for list items
                                index={index}
                                removeMenuItem={() => remove(index)}
                            />
                        ))}
                    </FormItem>
                )}
            />
            <Button
                type="button"
                onClick={() => append({ name: '', price: '' })}
                className="bg-primary text-white"
            >
                Add Menu Item
            </Button>
        </div>
    );
};

export default MenuSection;

import { Menu } from "lucide-react"
import { Sheet,SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"


const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-#0A0A0A" />
            </SheetTrigger>

            <SheetContent className="space-y-3">
                <SheetTitle>
                    <span>Welcome to GustoGo</span>
                </SheetTitle>

                <Separator />
                <SheetDescription className="flex">
                <Button 
                    style={{ 
                        backgroundColor: '#0A0A0A', 
                        color: '#fff' 
                    }} 
                    className="flex-1 font-bold"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FFBD58'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0A0A0A'}
                    >
                        Log In
                </Button>
                </SheetDescription>
            </SheetContent>

        </Sheet>
    );}
    export default MobileNav;
import { Button } from "./ui/button";

const MainNav = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8">
            <div>
                <Button 
                    style={{ 
                        backgroundColor: '#0A0A0A', 
                        color: '#fff' 
                    }} 
                    variant="ghost"
                    className="font-bold"
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B0803E'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0A0A0A'}
                    >
                        Log In
                </Button>
            </div>
        </nav>
    );
}

export default MainNav;
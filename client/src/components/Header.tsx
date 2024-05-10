import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
    return (
        <header className="border-b-2 border-b-#0A0A0A py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-#0A0A0A  text-3xl tracking-tight font-bold">GustoGo</Link>
                <div className="md:hidden">
                    <MobileNav/>
                </div>
                <div className="hidden md:block">
                    <MainNav/>
                </div>
            </div>
        </header>
    );
}
export default Header;
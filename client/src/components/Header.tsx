import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="border-b-2 border-b-#0A0A0A py-6">
            <div className="container mx-auto flex justify-between items-center py-4">
                <Link to="/" className="text-#0A0A0A  text-3xl tracking-tight font-bold">GustoGo</Link>
            </div>
        </header>
    );
}
export default Header;
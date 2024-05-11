import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout" // Import the 'Layout' component
import HomePage from "./pages/HomePage";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>} />
            <Route path="/about" element={<span>About</span>} />
        </Routes>
    )}
export default AppRouter;
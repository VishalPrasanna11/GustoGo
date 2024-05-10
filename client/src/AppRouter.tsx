import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout" // Import the 'Layout' component

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>} />
            <Route path="/about" element={<span>About</span>} />
        </Routes>
    )}
export default AppRouter;
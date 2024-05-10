import { Route, Routes } from "react-router-dom"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<span>Home</span>} />
            <Route path="/about" element={<span>About</span>} />
        </Routes>
    )}
export default AppRouter;
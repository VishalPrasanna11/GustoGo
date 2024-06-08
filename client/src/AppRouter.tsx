import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout" // Import the 'Layout' component
import HomePage from "./pages/HomePage";
import AutHCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={
            <Layout showHero><HomePage/></Layout>} />

            <Route path="/auth-callback" element={
           
            <AutHCallbackPage/>
            } />
            <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={
            <Layout>
                <UserProfilePage/>
            </Layout>
           
            } />
            </Route>
        </Routes>
    )}
export default AppRouter;
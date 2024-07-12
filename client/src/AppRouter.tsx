import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout" // Import the 'Layout' component
import HomePage from "./pages/HomePage";
import AutHCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import RestauarantPage from "./pages/RestaurantPage";
import SearchPage from "./pages/SearchPage";

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={
            <Layout showHero><HomePage/></Layout>} />

            <Route path="/auth-callback" element={
           
            <AutHCallbackPage/>
            } />
            <Route path="/search/:city"
             element = {
             <Layout showHero={false}>
                <SearchPage/>
             </Layout>} />
            <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={
            <Layout>
                <UserProfilePage/>
            </Layout>
           
            } />
            <Route path="/restaurant" element={
            <Layout>
                <RestauarantPage/>
            </Layout>
           
            } />
            </Route>
            
        </Routes>
    )}
export default AppRouter;
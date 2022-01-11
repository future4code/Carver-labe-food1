import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUp/SignUp";
import SignAdressPage from "../pages/SignAdressPage/SignAdressPage";
import HomePage from "../pages/HomePage/HomePage";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import EditAdressPage from "../pages/EditAdressPage/EditAdressPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Footer from "../components/Footer";

export default function Router() {
    return (
        <BrowserRouter>
            <Footer />
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/perfil/cadastro' element={<SignUpPage />} />
                <Route path='/endereco/cadastro' element={<SignAdressPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path='/restaurante/:id' element={<RestaurantPage />} />
                <Route path='/carrinho' element={<CartPage />} />
                <Route path='/perfil' element={<ProfilePage />} />
                <Route path='/perfil/editar' element={<EditProfilePage />} />
                <Route path='/endereco/editar' element={<EditAdressPage />} />
                <Route element={<ErrorPage />} />

            </Routes>
        </BrowserRouter>
    )
}
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Components/Login/Login";
import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout/Layout";


const Routers = () => {

    const { t } = useTranslation();
    return <Routes>
        <Route path="" element={<Layout t={t}/>} >
            <Route path="/login" element={<Login t={t} />}></Route>
        </Route>
    </Routes>
}
export default Routers;
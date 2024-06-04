import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout/Layout";
import Auth from "../Components/Auth/Auth";


const Routers = () => {

    const { t } = useTranslation();
    return <Routes>
        <Route path="" element={<Layout t={t}/>} >
            <Route path="/Auth" element={<Auth t={t} />}></Route>
        </Route>
    </Routes>
}
export default Routers;
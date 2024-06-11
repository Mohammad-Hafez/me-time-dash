import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../Components/Layout/Layout";
import Auth from "../Components/Auth/Auth";
import BusinessDetails from "../Components/BusinessDetails/BusinessDetails";


const Routers = () => {
    let {t} = useTranslation()
    return <Routes>
        <Route path="" element={<Layout/>} >
            <Route path="/Auth" element={<Auth t={t} />}></Route>
            <Route path="/business-details" element={<BusinessDetails t={t}/>}></Route>
        </Route>
    </Routes>
}
export default Routers;
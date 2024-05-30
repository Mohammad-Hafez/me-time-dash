import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import { useLanguage } from '../../Context/LanguageContext';

export default function Layout({t}) {

    const { changeLanguage } = useLanguage();

  return <>
      <div className="layout d-flex flex-column justify-content-between align-items-stretch min-vh-100">
        <SideMenu t={t} changeLanguage={changeLanguage}/>
        <div className="outlet">
          <Outlet/>
        </div>
        <Footer t={t} changeLanguage={changeLanguage}/>
      </div>
    </>
}

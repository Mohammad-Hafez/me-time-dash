import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import SideMenu from '../SideMenu/SideMenu'
import { useLanguage } from '../../Context/LanguageContext';
import { useTranslation } from 'react-i18next';

export default function Layout() {

    const { changeLanguage } = useLanguage();
    let {t} = useTranslation()
    return (
        <div className="min-h-screen grid grid-cols-12 grid-rows-12 gap-y-0">
            {/* Sidebar */}
            {/* <aside className="lg:col-span-2 md:col-span-3 col-span-4 row-span-11 ">
                <SideMenu t={t} changeLanguage={changeLanguage} />
            </aside> */}

            {/* Main Content */}
            <main className="lg:col-span-12 md:col-span-9 col-span-8  row-span-11 bg-gray-50">
                <Outlet/>
            </main>

            {/* Footer */}
            <footer className="col-span-12 mt-auto  row-span-1">
                <Footer t={t} changeLanguage={changeLanguage} />
            </footer>
        </div>
    );
}

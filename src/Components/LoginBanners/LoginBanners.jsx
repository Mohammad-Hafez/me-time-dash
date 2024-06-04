import React from 'react'
import styles from './LoginBanners.module.css'
import { useTranslation } from 'react-i18next'

export default function LoginBanners() {
    let {t} = useTranslation()
    return <>
            <div className="h-full flex flex-col justify-around">
                <div className={`${styles.banner} w-full h-4/6 bg-center`}>
                </div>
                <div className="text-sm md:text-base lg:text-lg xl:text-2xl h-1/6 font-bold bg-white flex items-center justify-center mb-4">
                    <span>{t('login.figCaption')}</span>
                </div>
            </div>
    </>
}

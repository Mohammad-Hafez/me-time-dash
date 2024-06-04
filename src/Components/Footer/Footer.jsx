import React from 'react'

export default function Footer({ t, changeLanguage }) {
    return <>
        <section>
            {t('Welcome')}
            <button className='p-2 border border-spacing-1 mx-1' onClick={() => changeLanguage('ar')}>ar</button>
            <button className='p-2 border border-spacing-1 mx-1' onClick={() => changeLanguage('en')}>en</button>
        </section>
    </>
}

import React from 'react'

export default function Footer({ t, changeLanguage }) {
    return <>
        <section>
            {t('Welcome')}
            <button onClick={() => changeLanguage('ar')}>ar</button>
            <button onClick={() => changeLanguage('en')}>en</button>
        </section>
    </>
}

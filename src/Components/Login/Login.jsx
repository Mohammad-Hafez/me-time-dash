import React from 'react'
import { Helmet } from 'react-helmet'

export default function Login({t}) {
    return <>
        <Helmet>
            Title
        </Helmet>
        <section>
            <h1>{t('buttons.next')}</h1>
        </section>
    </>
}

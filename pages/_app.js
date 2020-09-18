import React from "react";
import '../public/scss/index.scss'
import '../public/scss/dashboard.scss'
import '../public/scss/layout.scss'
import '../public/scss/header.scss'


export default function MyApp({Component, pageProps}) {
    return <Component {...pageProps} />
}
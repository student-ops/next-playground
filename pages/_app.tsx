import { AppProps } from "next/app"
import { ComponentType } from "react"

import "../styles/globals.css"

type MyAppProps = {
    Component: ComponentType
    pageProps: Record<string, unknown>
}

function MyApp({ Component, pageProps }: MyAppProps) {
    // Set up any global styles or data here

    return (
        // Render the Component and pageProps
        <Component {...pageProps} />
    )
}

export default MyApp

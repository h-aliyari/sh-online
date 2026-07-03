// frontend\src\app\_app.tsx
import React from "react";
import { ThemeProvider } from '../context/ThemeContext';
import useTheme from "@/hooks/useTheme";

export default function App({ Component, pageProps}: { Component: React.ComponentType, pageProps: any }) {
    const { isDarkMode } = useTheme();

    return (
        <ThemeProvider>
            <body className={isDarkMode ? 'dark-mode' : '' }>
                <Component {...pageProps} />
            </body>
        </ThemeProvider>
    )
}
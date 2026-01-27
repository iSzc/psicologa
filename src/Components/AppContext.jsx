import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [themeChange, setThemeChange] = useState(false);

    useEffect(()=> {
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme === "light") {
            setThemeChange(true)
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                themeChange,
                setThemeChange,
            }}>
                {children}
            </AppContext.Provider>
    )
}

export function useApp(){
    return useContext(AppContext)
}
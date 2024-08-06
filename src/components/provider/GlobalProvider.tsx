"use client"
import { FC, ReactNode, useState } from "react";
import GlobalContext from "../context/GlobalContext";
interface GlobalProviderProps {
    children: ReactNode
}
export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    return (
        <GlobalContext.Provider value={{ loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}
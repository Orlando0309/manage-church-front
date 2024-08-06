import { createContext } from "react";

export interface GlobalContextType{
    loading: boolean;
    setLoading:(value:boolean)=>void;
}

const GlobalContext=createContext<GlobalContextType|undefined>(undefined);
export default GlobalContext;
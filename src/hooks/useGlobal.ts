import GlobalContext from "@/components/context/GlobalContext";
import { useContext } from "react";

export const useGlobal=()=>{
    const context = useContext(GlobalContext);
    if(!context){
        // put error here
        throw new Error('useGlobal must be used within an GlobalProvider');

    }
    return context

}
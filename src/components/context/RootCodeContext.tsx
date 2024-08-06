"use client"
import { createContext, Dispatch, SetStateAction } from "react";

interface RootCodeContextType {
  data: any[];
  setData: Dispatch<SetStateAction<any[]>>;
  reload: () => void;
}

 const RootCodeContext = createContext<RootCodeContextType | undefined>(undefined);
export default RootCodeContext;
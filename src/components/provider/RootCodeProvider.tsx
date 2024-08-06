"use client"
import { HTTP_SUCCESS } from "@/constante";
import { RT_CODE_URL } from "@/endpoint";
import axios from "axios";
import React, { useState, ReactNode, useCallback, FC, useEffect } from "react";
import RootCodeContext  from "../context/RootCodeContext";
import { JAVA_API } from "@/secret";
import { axiosInstance } from "@/axiosConfig";

interface RootCodeProviderProps {
  children: ReactNode;
}

export const RootCodeProvider: FC<RootCodeProviderProps> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);

  const reload = useCallback(async () => {
    // Implement the logic to reload data here
    console.log('Reloading data...');
    const result=await axiosInstance.get(`${RT_CODE_URL}`);
        if(result?.data.status === HTTP_SUCCESS){
            setData(result.data.data)
        }
    // Example: setData(newData);
  }, []);

  useEffect(()=>{
    if(data.length==0)
    reload()
  },[data, reload])

  return (
    <RootCodeContext.Provider value={{ data, setData, reload }}>
      {children}
    </RootCodeContext.Provider>
  );
};

"use client"
import RootCodeContext  from "@/components/context/RootCodeContext";
import { useContext } from "react";

export const useRootCode = () => {
  const context = useContext(RootCodeContext);
  if (context === undefined) {
    throw new Error('useRootCode must be used within a RootCodeProvider');
  }
  return context;
};

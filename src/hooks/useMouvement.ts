import { axiosInstance } from "@/axiosConfig"
import { HTTP_ERROR, HTTP_SUCCESS } from "@/constante"
import { MV_SAVE_MANY, MV_URL } from "@/endpoint"
import { Mouvement } from "@/types/mouvement"
import qs from "qs"

export const useBalance=()=>{
    const save=async (data:Mouvement[])=>{
        const result=await axiosInstance.post(`${MV_SAVE_MANY}`,data);
        if(result?.data?.data && result.data?.status){
            return {
                message: result.data.message,
                status: result.data.status
            }
        }
        return {
            message: "An error occurred",
            status: HTTP_ERROR
        }
        
    }
    return {
        save
    }
}
export const useBalanceFilter=async (year:number|null, month:number|null,flux?:string)=>{
    const get=async ()=>{
        let data:any={}
        if(year && !Number.isNaN(year)){
            data.year = year
        }
        if(month && !Number.isNaN(month)){
            data.month = month
        }
        if(flux ){
            data.flux = flux
        }
        const url=`${MV_URL}?${qs.stringify(data)}`;
        const result=await axiosInstance.get(url);
        if(result?.data?.data && result.data?.status===HTTP_SUCCESS){
            return {
                message: result.data.message,
                status: result.data.status,
                data: result.data.data
            }
        }
    }
    return await get();
}

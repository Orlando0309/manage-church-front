import { axiosInstance } from "@/axiosConfig";
import { HTTP_ERROR } from "@/constante";
import { CODE_URL } from "@/endpoint";
import { Codemouvement } from "@/types/code";
import qs from "qs";

const codeService={
    save:async (data:Codemouvement)=>{
        const result=await axiosInstance.post(`${CODE_URL}`,data);
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
    },
    autocomplete: async (newvalue:string)=>{
        const k=qs.stringify({
            q:newvalue
        })
        const result=await axiosInstance.get(`${CODE_URL}?${k}`);
        return result;
    }
}
export default codeService;
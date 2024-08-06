"use client"
import { toLabelValue } from "@/util";
import { Select } from "antd";
import { FC, useState } from "react";
import { HTTP_SUCCESS } from "@/constante";
import { StopOutlined } from "@ant-design/icons";
import codeService from "@/api/code";
interface CodeSelectProps {
    handleCodeChange: (code: string) => void;
    value: any;

}
export const CodeSelect: FC<CodeSelectProps> = ({ handleCodeChange, value }) => {
    const [codeData, setCodeData] = useState([])
    const handleSearch=async (newvalue:string)=>{
        if(newvalue!==""){
            
            const result=await codeService.autocomplete(newvalue);
            if(result?.data?.status===HTTP_SUCCESS){
                setCodeData(result.data.data);
            }
        }
    }
    return (
        <Select
            className="w-100"
            showSearch
            value={value}
            defaultActiveFirstOption={false}
            suffixIcon={null}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleCodeChange}
            notFoundContent={<StopOutlined />}
            options={toLabelValue(codeData, "code", "id")} />
    )
}
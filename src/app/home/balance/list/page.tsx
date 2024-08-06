"use client"
import { MonthPicker } from "@/components/datepicker/InputDate";
import { useGlobal } from "@/hooks/useGlobal";
import { useBalanceFilter } from "@/hooks/useMouvement";
import Loader from "@/loader/Loader";
import { Input, Space, Typography } from "antd";
import { FC, useEffect, useState } from "react";
import dayjs from "dayjs"
import { MV } from "@/constante";

const { Title } = Typography

const BalanceList: FC = () => {
    const [yearMonth, setMonth] = useState(dayjs())
    const [isChanging,setIsChanging]=useState(true)
    const [data, setData] = useState([])
    const result = useBalanceFilter(yearMonth?.get('year'), yearMonth?.get('month') + 1)
    const { loading, setLoading } = useGlobal()
    useEffect(() => {

        if(isChanging){
            result.then((response) => {
                setLoading(true)
                if (response?.data) {
                    setLoading(false)
                    setData(response.data)
                }
            }).catch((err) => {
                setLoading(false);
            });
            setIsChanging(false)
        }
    }, [isChanging,result, setLoading])

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {loading && <Loader />}
            <Title className="text-center">Balance on {yearMonth?.get('year')}</Title>
            <Space direction="vertical">
                <MonthPicker defaultValue={yearMonth} onChange={(e) => {
                    
                    setMonth(e)
                    setIsChanging(true)
                }} />
            </Space>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Label</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       data.length>0 && data.map((d,index)=>{
                            const {code,codelabel,datemouvement,montant,flux}=d;
                            return (
                                <tr key={index}>
                                    <td>{(code as string).replace(' ','0')}</td>
                                    <td>{codelabel}</td>
                                    <td>{datemouvement}</td>
                                    <td>{((flux===MV?montant*(-1):montant) as number).toLocaleString()} Ar</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Space>
    )
}
export default BalanceList
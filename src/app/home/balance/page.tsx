"use client"
import { CodeSelect } from "@/components/codeSearch/CodeSelect";
import { Button, Dropdown, Input, Space, Typography } from "antd";
import { FC, useState } from "react";
import type { MenuProps } from 'antd';
import InputAmount from "@/components/InputAmount/InputAmount";
import { InputDate } from "@/components/datepicker/InputDate";
import { useBalance } from "@/hooks/useMouvement";
import { useGlobal } from "@/hooks/useGlobal";
import Loader from "@/loader/Loader";

const { Title } = Typography
const Balance: FC = () => {
    const [year] = useState(new Date().getFullYear());
    const [balance, setBalance] = useState<any[]>([{ codemouvement: "", montant: 1000 }]); // Default values

    const {save}=useBalance();
    const {loading,setLoading}=useGlobal();

    const handleCodeChange = (index: number, newValue: string) => {
        const temp = [...balance];
        temp[index] = { ...temp[index], codemouvement: newValue };
        setBalance(temp);
    };

    const handleAmountChange = (index: number, newValue: number | null) => {
        const temp = [...balance];
        temp[index] = { ...temp[index], montant: newValue };
        setBalance(temp);
    };
    const handleDateChange = (index: number, newValue: any) => {
        const temp = [...balance];
        temp[index] = { ...temp[index], datemouvement: newValue };
        setBalance(temp);
    };

    const saveData=async ()=>{
        setLoading(true);
        const s=await save(balance.map(balance =>  {
            return{ 
            ...balance,
            datemouvement:balance.datemouvement.toDate()
            }
        }))
        setLoading(false);
    }

    const items: MenuProps['items'] = [
        { label: 'Submit and continue', key: '1' },
    ];

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {loading && <Loader/>}
            <Title className="text-center">Balance of {year}</Title>
            <Dropdown.Button onClick={saveData} type="primary" menu={{ items }}>Save</Dropdown.Button>
            <table className="table" cellPadding={1}>
                <thead>
                    <tr>
                        <th>Num</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        balance.length==0 && <tr>
                            <td colSpan={3}>
                            <Button onClick={() => setBalance([...balance, { codemouvement: "", montant: 1000 }])}>Add row</Button>
                            </td>
                        </tr>
                    }
                    {balance.map((b, index) => (
                        <tr key={index}>
                            <td>
                                <CodeSelect
                                    value={b.codemouvement || ""}
                                    handleCodeChange={(v) => handleCodeChange(index, v)}
                                />
                            </td>
                            <td>
                                <InputAmount
                                    onChange={(v) => handleAmountChange(index, v as number)}
                                    currency='Ar'
                                    defaultValue={b?.montant}
                                    />
                            </td>
                            <td>
                                <InputDate
                                    onChange={(v) => handleDateChange(index, v)}
                                    defaultValue={b?.datemouvement}
                                />
                            </td>
                            <td>
                                <Space direction="horizontal">
                                    <Button onClick={() => setBalance([...balance, { codemouvement: "", montant: 1000 }])}>Add row</Button>
                                    <Button onClick={() => {
                                        const temp = [...balance];
                                        temp.splice(index, 1);
                                        setBalance(temp);
                                    }}>Delete row</Button>
                                </Space>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Space>
    );
};

export default Balance;

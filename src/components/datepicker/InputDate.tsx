import { DatePicker, DatePickerProps } from "antd";
import { FC } from "react";
interface InputDateProps{
    onChange: DatePickerProps['onChange'],
    defaultValue?: any
}

export const InputDate:FC<InputDateProps>=({onChange,defaultValue})=>{
    return <DatePicker value={defaultValue} onChange={onChange} />
}

export const MonthPicker:FC<InputDateProps>=({onChange,defaultValue})=>{
    return <DatePicker.MonthPicker value={defaultValue} onChange={onChange} />
}
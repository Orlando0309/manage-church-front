import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber, Space } from 'antd';

// const onChange: InputNumberProps['onChange'] = (value) => {
//   console.log('changed', value);
// };

interface InputAmountProps{
    onChange: InputNumberProps['onChange'],
    currency: string,
    defaultValue?: number
}
const InputAmount: React.FC<InputAmountProps> = ({onChange,currency,defaultValue}) => (
    <InputNumber<number>
      value={defaultValue}
      formatter={(value) => `${currency} ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={(value) => value?.replace(/[^\d]/g, '') as unknown as number}
      onChange={onChange}
    />

);

export default InputAmount;
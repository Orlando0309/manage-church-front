"use client"
import { Button, Input, Space, Tag, Typography } from "antd";
import { FC, useState } from "react";

const { Title, Text } = Typography;

import { Table } from 'antd';
import type { TableProps, GetProps } from 'antd';

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

interface DataType {
    key: string;
    name: string;
    money: string;
    address: number;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Num',
        dataIndex: 'name',
        render: (text) => <Text strong>{text}</Text>,
    },
    {
        title: 'Amount',
        className: 'column-money',
        dataIndex: 'money',
        align: 'right',
    },
    {
        title: 'State',
        dataIndex: 'address',
        render: (value) => {
            if (value == 1) {
                return <Tag color="green">PAID</Tag>
            }
            return <Tag color="volcano">UNPAID</Tag>
        }
    },
    {
        title:'Action',
        render:(_,record)=>{
            return (
                <Button onClick={()=> console.log(record)} type="primary">PAY</Button>
            )
        }
    }
];

const data: DataType[] = [
    {
        key: '1',
        name: '310000',
        money: '￥300,000.00',
        address: 0,
    },
    {
        key: '2',
        name: '311000',
        money: '￥1,256,000.00',
        address: 1,
    },
    {
        key: '3',
        name: '320000',
        money: '￥120,000.00',
        address: 1,
    },
];

// const options = [
//     {
//         label: 'PAID',
//         value: 1
//     },
//     {
//         label: 'UNPAID',
//         value: 0
//     }
// ]

const Duties: FC = () => {
    const [year, setYear] = useState(new Date().getFullYear())
    // const [dutyState,setDutyState]=useState(null);

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        console.log(info?.source, value);
        setYear(Number.parseInt(value));
    }
    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Title className="text-center">Duty of the year {year}</Title>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => <Space>
                    <Text>Filter By Year</Text>
                    <Search placeholder="Enter a year here" defaultValue={year} onSearch={onSearch} enterButton />
                </Space>}
                footer={() => 'Footer'}
            />
        </Space>
    )
}
export default Duties;
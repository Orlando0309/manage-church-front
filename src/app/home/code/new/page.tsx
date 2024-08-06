"use client"
import codeService from "@/api/code";
import { MD, MV } from "@/constante";
import { useRootCode } from "@/hooks/useRootCode";
import { CodemouvementInput } from "@/types/code";
import { toCode } from "@/util";
import { Button, Flex, Form, Input, Radio, Select, Space, Table, Typography } from "antd";
import { FC, useState } from "react";
const { Title } = Typography

const columns = [
    {
        title: 'Root Code',
        dataIndex: 'rootcode',
        key: 'rootcode',
    },
    {
        title: 'Label',
        dataIndex: 'label',
        key: 'label',
    },
];

const NewCode: FC = () => {
    const [form] = Form.useForm();
    const [formCode, setFormCode] = useState<CodemouvementInput | undefined>();
    const { data } = useRootCode();

    const onFormCodeChange = (changedValues: any) => {
        setFormCode(prev => ({
            ...prev,
            ...changedValues,
        }));
    };

    const onFinish = async (values: any) => {
        const code = values.code;

        const root = getRoot(values?.rootcode)
        // Pad rootcode to ensure it's 5 characters long
        const paddedRootcode = toCode(root?.rootcode, code).padEnd(5, '0');
        const concatenatedCode = paddedRootcode;

        const result = {
            ...values,
            code: concatenatedCode,
        };


        const httpResult = await codeService.save(result);
        // You can send 'result' to your backend or perform other actions here
    };

    const getRoot = (id: number) => {
        if (data) {
            return data.find((i) => i.id === id)
        }
        return null;
    }

    const selected = getRoot(formCode?.rootcode || 0)
    return (
        <Space direction="horizontal" align="center">
            <Space direction="vertical">
                <Title>Add new Code</Title>
                <Form
                    form={form}
                    initialValues={formCode}
                    onValuesChange={onFormCodeChange}
                    style={{ maxWidth: 600 }}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item label="Root code" name="rootcode">
                        <Select>
                            {data.map((rt, index) => (
                                <Select.Option key={index} value={rt?.id}>
                                    <strong>{rt.rootcode}</strong> {rt?.label}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Code" name="code">
                        <Space.Compact>
                            <Input style={{ width: '20%' }} value={selected ? toCode(selected?.rootcode, Number.parseInt(formCode?.code || '0')).replace(formCode?.code || '', '') : ""} disabled />
                            <Input style={{ width: '80%' }} />
                        </Space.Compact>
                    </Form.Item>
                    <Form.Item label="Code's label" name="label">
                        <Input placeholder="offerings" />
                    </Form.Item>
                    <Form.Item label="Destination" name="flux">
                        <Radio.Group>
                            <Radio value={MD}> CREDIT </Radio>
                            <Radio value={MV}> DEBIT </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Space>
            <Table dataSource={data} columns={columns} rowKey="id" />

        </Space>
    );
};

export default NewCode;

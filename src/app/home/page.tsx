import { FC } from "react";
import { Card, Space } from 'antd';

const Home: FC = () => {
    return (
        <Space direction="vertical" size={16}>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            
        </Space>
    )
}
export default Home;
// components/Loader.js
import React from 'react';
import { Spin } from 'antd';

const Loader = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" fullscreen  />
    </div>
);

export default Loader;

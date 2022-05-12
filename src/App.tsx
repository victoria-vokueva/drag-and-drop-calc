import React, { FC } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import './App.css';
import { useTypedSelector } from './hooks/useTypedSelector';
import MySwitch from './components/UI/mySwitch/mySwitch';
import Draggable from './components/Draggable';
import Droppable from './components/Droppable';

const { Sider, Content } = Layout;

const App: FC = () => {
    const { isActive } = useTypedSelector(state => state.calc);

    return (
        <Layout>
            <Sider collapsible collapsed={isActive} trigger={null} width={'50vw'} collapsedWidth={0}>
                <Draggable />
            </Sider>
            <Content>
                <div className='content-wrapper'>
                    <MySwitch />
                    <Droppable />
                </div>
            </Content>
        </Layout>
    );
};

export default App;

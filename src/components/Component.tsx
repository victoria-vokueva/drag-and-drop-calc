import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Equal from './Equal';
import MyInput from './MyInput';
import Numbers from './Numbers';
import Operations from './Operations';

interface ComponentProps {
    name: string;
    disabled?: boolean;
}
const Component: FC<ComponentProps> = ({ name, disabled }) => {
    const { isActive } = useTypedSelector(state => state.calc);
    const draggable = isActive ? false : true;

    const renderComponent = () => {
        switch (name) {
            case 'display':
                return <MyInput id='display' draggable={draggable}></MyInput>;
            case 'operations':
                return <Operations id='operations' disabled={disabled} draggable={draggable}></Operations>;
            case 'numbers':
                return <Numbers id='numbers' disabled={disabled} draggable={draggable}></Numbers>;
            case 'equal':
                return <Equal id='equal' disabled={disabled} draggable={draggable}></Equal>;
            default:
                break;
        }
    }

    return (
        <div className='wrapper-component'>
            {renderComponent()}
        </div>
    )
}

export default Component;
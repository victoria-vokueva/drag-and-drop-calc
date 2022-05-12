import { Input } from 'antd';
import React, { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';

interface InputProps {
    id: string;
    draggable: boolean;
}

const MyInput: FC<InputProps> = ({id, draggable}) => {

    let { displayValue } = useTypedSelector(state => state.calc);

    return (
        <div
            id={id}
            draggable={draggable}>
            <div className='card-container-input'>
                <Input className='display' value={displayValue}></Input>
            </div>
        </div>
    )

}

export default MyInput;
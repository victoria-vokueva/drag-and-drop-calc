import { Input } from 'antd';
import Operation from 'antd/lib/transfer/operation';
import React, { FC, Fragment, useState } from 'react'
import { IComponent } from '../models/IComponent';
import MyButton from './UI/myButton/MyButton';

interface OperationsProps {
    id: string;
    disabled?: boolean;
    draggable: boolean;
}

const Operations: FC<OperationsProps> = ({id, disabled, draggable}) => {

    return (
        <div
            draggable={draggable}>
            <ul>
                <li><MyButton value='/' disabled={disabled} /></li>
                <li><MyButton value='*' disabled={disabled} /></li>
                <li><MyButton value='-' disabled={disabled} /></li>
                <li><MyButton value='+' disabled={disabled} /></li>
            </ul>
        </div>
    )

}

export default Operations;
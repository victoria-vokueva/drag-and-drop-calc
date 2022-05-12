import { Input } from 'antd';
import Operation from 'antd/lib/transfer/operation';
import React, { FC, Fragment, useState } from 'react'
import { IComponent } from '../models/IComponent';
import MyButton from './UI/myButton/MyButton';

interface EqualProps {
    id: string;
    disabled?: boolean;
    draggable: boolean;
}

const Numbers: FC<EqualProps> = ({id, disabled, draggable}) => {

    return (
        <div
            draggable={draggable}>
            <ul>
                <li><MyButton value='7' disabled={disabled} /></li>
                <li><MyButton value='8' disabled={disabled} /></li>
                <li><MyButton value='9' disabled={disabled} /></li>
            </ul>
            <ul>
                <li><MyButton value='4' disabled={disabled} /></li>
                <li><MyButton value='5' disabled={disabled} /></li>
                <li><MyButton value='6' disabled={disabled} /></li>
            </ul>
            <ul>
                <li><MyButton value='1' disabled={disabled} /></li>
                <li><MyButton value='2' disabled={disabled} /></li>
                <li><MyButton value='3' disabled={disabled} /></li>
            </ul>
            <ul>
                <li><MyButton value='0' disabled={disabled} /></li>
                <li><MyButton value='.' disabled={disabled} /></li>
            </ul>
        </div>
    )

}

export default Numbers;
import { Input } from 'antd';
import React, { FC, Fragment, useState } from 'react'
import { IComponent } from '../models/IComponent';
import MyButton from './UI/myButton/MyButton';

interface EqualProps {
    id?: string;
    disabled?: boolean;
    draggable: boolean;
}

const Equal: FC<EqualProps> = ({ id, disabled, draggable }) => {
    return (
        <div draggable={draggable}>
            <div className='card-container-btn'>
                <MyButton value='=' color={'var(--default-color'} disabled={disabled} />
            </div>
        </div>
    )
}

export default Equal;
import { Input } from 'antd';
import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import AutoScalingText from './AutoScallingText';

const formatting = (value: string) => {
    const language = navigator.language || 'en-US';
    let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumSignificantDigits: 15,
    });
    return formattedValue;
}

interface InputProps {
    id: string;
    draggable: boolean;
}

const MyInput: FC<InputProps> = ({ id, draggable }) => {

    let { displayValue } = useTypedSelector(state => state.calc);
    const formattedValue = formatting(displayValue);

    return (
        <div
            id={id}
            draggable={draggable}>
            <div className='card-container-input'>
                <div className='display'>
                    <AutoScalingText>
                        {formattedValue}
                    </AutoScalingText>
                </div>
            </div>
        </div >
    )

}

export default MyInput;
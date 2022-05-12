import React, { FC, useContext } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IComponent } from '../models/IComponent';
import { Context } from '../context';
import DraggableComponent from './DraggableComponent';

interface ICalculatorOperations {
    [index: string]: (any);
}

const formatting = (value: string) => {
    const language = navigator.language || 'en-US';
    let formattedValue = parseFloat(value).toLocaleString(language, {
        useGrouping: true,
        maximumSignificantDigits: 7,
        maximumFractionDigits: 1,
    } || {
        useGrouping: true,
        maximumSignificantDigits: 1,
        maximumFractionDigits: 7,
    });
    return formattedValue;
}

const CalculatorOperations = {
    '/': (prevValue: number, nextValue: number) => formatting(String(prevValue / nextValue)),
    '*': (prevValue: number, nextValue: number) => formatting(String(prevValue * nextValue)),
    '+': (prevValue: number, nextValue: number) => formatting(String(prevValue + nextValue)),
    '-': (prevValue: number, nextValue: number) => formatting(String(prevValue - nextValue)),
    '=': (nextValue: number) => formatting(String(nextValue)),
} as ICalculatorOperations;

interface ComponentProps {
    component: IComponent;
}

const CalcComponent: FC<ComponentProps> = ({ component }) => {
    const { setData, setValue } = useActions();
    const { data, displayValue } = useTypedSelector(state => state.calc);
    const { operator, setOperator, waitingForOperand, setWaiting } = useContext(Context);

    const clickHandler = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        let value = target.nodeName;
        if (value === 'UL') return;
        else value = target.innerText;

        if (value.match(/[0-9|\.]/gi)) {
            if (waitingForOperand) {
                displayValue === data && setValue(value);
                displayValue !== data && setValue(displayValue.concat(value));
            }
            else if (displayValue !== '0') {
                setValue(displayValue.concat(value));
            }
            else {
                setValue(value);
            }
            return;
        }

        if (value in CalculatorOperations) {
            if (waitingForOperand) {
                const newValue = CalculatorOperations[operator](Number(data), Number(displayValue));
                setValue(String(newValue));
                setData(String(newValue));
            } else
                setData(displayValue);
            setOperator(value);
            setWaiting(true);
            return;
        }

        /*if (value === '=') {
            const newValue = CalculatorOperations['='](Number(displayValue));
            setValue(String(newValue));
            setWaiting(false);
            setOperator('');
            setData(String('0'));
        }*/
    }

    return (
        <div onClick={clickHandler}>
            <DraggableComponent component={component} from='droppable' />
        </div>
    )
}

export default CalcComponent;
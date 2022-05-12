import React, { FC } from 'react';
import { Button } from 'antd';
import classes from '../myButton/MyButton.module.css'

interface ButtonProps {
    value?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    icon?: string;
    disabled?: boolean;
    children?: React.ReactNode | React.ReactChild;
}

const MyButton: FC<ButtonProps> =
    ({
        value,
        color,
        onClick,
        icon,
        disabled,
        children
    }) => {
        return (
            <Button
                style={color ? { backgroundColor: `${color}`, color: '#fff' } : {}}
                disabled={disabled}
                className={classes.myBtn}
                onClick={onClick}>
                {children}
                {value}
            </Button>
        )
    }

export default MyButton;
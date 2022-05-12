import React, { FC } from 'react';
import { Button } from 'antd';
import Icons from '../Icons/index';
import classes from '../mySwitch/mySwitch.module.css';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const MySwitch: FC = () => {

    const { isActive } = useTypedSelector(state => state.calc);
    const { setIsActive } = useActions();

    const handleClick = () => {
        if (isActive) {
            setIsActive(false);
        }
        else {
            setIsActive(true);
        }
    }

    return (
        <div className={classes.container__btns}>
            <Button className={classes.switch__btn} id={isActive ? classes.active : ''} onClick={handleClick}>
                <Icons
                    name='eye'
                    color={isActive ? '#5D5FEF' : '#4D5562'}
                    size='20'
                    className={classes.switch__icon}
                />
                Runtime
            </Button>
            <Button className={classes.switch__btn} id={isActive ? '' : classes.active} onClick={handleClick}>
                <Icons
                    name='extension'
                    color={isActive ? '#4D5562' : '#5D5FEF'}
                    size='20'
                    className={classes.switch__icon}
                />
                Constructor
            </Button>
        </div>
    )
}

export default MySwitch;
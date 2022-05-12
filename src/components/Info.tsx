import React, { FC } from 'react';
import Icons from './UI/Icons';

const Info: FC = () => {
    return (
        <div className='info-wrapper'>
            <Icons
                name='image'
                color='var(--second-color)'
                size='22'
                className=''
            />
            <p>Перетащите сюда <span>любой элемент <br /> из левой панели</span></p>
        </div>
    )
}

export default Info;
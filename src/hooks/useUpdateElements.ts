import React, { useEffect } from 'react';
import { updateElement } from '../utils/updateElement';

export const useChangeCurrentComponent = (
    idActiveElement: number | undefined,
    prevIdActiveElement: number | undefined
    ) => {

    useEffect (() => {
        if (idActiveElement || idActiveElement === 0) {
            updateElement(`active-${idActiveElement}`, 'className', 'active');
            updateElement(`active-diamond-left-${idActiveElement}`, 'className', 'active-diamond-left');
            updateElement(`active-diamond-right-${idActiveElement}`, 'className', 'active-diamond-right');
        } else {
            updateElement(`active-${prevIdActiveElement}`, 'className', '');
            updateElement(`active-diamond-left-${prevIdActiveElement}`, 'className', '');
            updateElement(`active-diamond-right-${prevIdActiveElement}`, 'className', '');
        }
    }, [idActiveElement])


};
import { useCallback, useRef } from 'react';


export const useDebounce = (callback: any, delay: number) => {
    const timer: {current: NodeJS.Timeout | null} = useRef(null);

    const debounceCallback = useCallback((...args: []) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debounceCallback;
}
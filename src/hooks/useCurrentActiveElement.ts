import { useEffect, useState } from 'react';

export const useCurrentActiveElement = (event: React.DragEvent | undefined) => {
    const [indexActiveElement, setIndex] = useState<number>();

    const elements = document.getElementsByClassName('overlay');

    useEffect(() => {
        if (elements && event) {
            const target = event.target as HTMLElement;
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].outerHTML.includes(target.innerHTML)) {
                    setIndex(i);
                }
            }
        }
        else setIndex(undefined);
    }, [event])

    return indexActiveElement;
};
import React, { FC, ReactChild, useEffect, useState } from 'react';

interface PropsAutoScalingText {
    children: ReactChild;
}

const AutoScalingText: FC<PropsAutoScalingText> = ({ children }) => {

    const [scale, setScale] = useState(1);
    const nodeRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const node = nodeRef.current;
        const parentNode = node?.parentNode as HTMLDivElement;
        const availableWidth = parentNode?.offsetWidth;
        const actualWidth = node?.offsetWidth;
        console.log(scale);
        console.log(actualWidth);
        console.log(availableWidth);

        if (availableWidth && actualWidth) {
            const actualScale = availableWidth / actualWidth;
            if (scale === actualScale)
                return;

            if (actualScale < 1) {
                setScale(actualScale);
            }
            else if (scale < 1) {
                setScale(1);
            }
        }
    })

    return (
        <div className='auto-scaling-wrapper'>
            <div ref={nodeRef}
                className='auto-scaling-text'
                style={{ transform: `scale(${scale},${scale})` }}>
                {children}
            </div>
        </div>
    )
}

export default AutoScalingText;
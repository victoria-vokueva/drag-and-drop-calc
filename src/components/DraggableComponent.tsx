import React, { FC } from 'react';
import { IComponent } from '../models/IComponent';
import { updateElement } from '../utils/updateElement';
import Component from './Component';

interface PropsDraggableComponent {
    component: IComponent;
    from: string;
}

const DraggableComponent: FC<PropsDraggableComponent> = ({
    component,
    from,
}) => {

    const isVisible = (from === 'draggable' && component.visible === false) ? { opacity: '50%' } : {};
    const isDisabled = (from === 'draggable' && component.visible === false) ? true : false;
    const isClassName = from === 'droppable' ? 'card-wrapper-canvas' : 'card-wrapper';

    const dragStart = (e: React.DragEvent<HTMLElement>, elem: IComponent) => {
        console.log("Drag start")
        e.dataTransfer.setData('key', elem.name);
        e.dataTransfer.setData('component', JSON.stringify(component));
        const overlayers = document.getElementsByClassName('overlay');
        setTimeout(() => {
            for (let j = 0; j < overlayers.length; j++) {
                updateElement(`overlay-${j}`, 'className', 'overlay active-overlay');
            }
        }, 12)

    }

    function dragEnd(e: React.DragEvent<HTMLElement>) {
        console.log("Drag end");
        const overlayers = document.getElementsByClassName('overlay');
        for (let i = 0; i < overlayers.length; i++) {
            updateElement(`overlay-${i}`, 'className', 'overlay');
        }
    }

    return (
        <div className={isClassName}
            onDragStart={(e) => dragStart(e, component)}
            onDragEnd={dragEnd}
            style={isVisible}>
            <Component name={component.name} disabled={isDisabled} />
        </div>
    )
}

export default DraggableComponent;
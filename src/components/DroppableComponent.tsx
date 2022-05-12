import React, { FC } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IComponent } from '../models/IComponent';
import DraggableComponent from './DraggableComponent';

interface PropsDraggableComponent {
    component: IComponent;
    index: number;
}

const DroppableComponent: FC<PropsDraggableComponent> = ({
    component,
    index,
}) => {

    const { deleteComponent, setStaticList } = useActions();
    const { listComponents } = useTypedSelector(state => state.calc);
    const { staticlistComponents } = useTypedSelector(state => state.calc);

    const doubleClickHandler = (e: React.MouseEvent, elem: IComponent, key: Number) => {
        e.preventDefault();
        let arr = [...staticlistComponents];
        const ind = staticlistComponents.indexOf(component);
        arr[ind].visible = true;
        setStaticList(arr);
        deleteComponent(index, listComponents);
    }


    return (
        <div
            onDoubleClick={(e) => doubleClickHandler(e, component, index)}>
            <DraggableComponent component={component} from='droppable' />
            <div id={`active-${index}`}>
                <div id={`active-diamond-left-${index}`} />
                <div id={`active-diamond-right-${index}`} />
            </div>
        </div>
    )
}

export default DroppableComponent;
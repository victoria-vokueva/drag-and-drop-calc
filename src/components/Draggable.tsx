import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import DraggableComponent from './DraggableComponent';

const Draggable: FC = () => {

    const { staticlistComponents } = useTypedSelector(state => state.calc);

    return (
        <div className="sider-wrapper">
            <div className="palette">
                {staticlistComponents
                    ? staticlistComponents.map((el, key) =>
                        <DraggableComponent component={el} from='draggable' key={key} /> )
                    : null}
            </div>
        </div>
    )
}

export default Draggable;
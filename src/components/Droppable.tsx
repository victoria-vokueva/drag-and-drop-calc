import React, { FC, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDebounce } from '../hooks/useDebounce';
import { useCurrentActiveElement } from '../hooks/useCurrentActiveElement';
import { useChangeCurrentComponent } from '../hooks/useUpdateElements';
import { Context } from '../context';
import CalcComponent from './CalcComponent';
import Info from './Info';
import DroppableComponent from './DroppableComponent';


const Droppable: FC = () => {

    const { addComponent, updateComponent, setStaticList } = useActions();
    const { isActive } = useTypedSelector(state => state.calc);
    const { listComponents } = useTypedSelector(state => state.calc);
    const { staticlistComponents } = useTypedSelector(state => state.calc);
    const isEmpty = listComponents.length ? false : true;
    const dragOverDebounce = useDebounce(dragWithPreventHandler, 10);

    const [currentEvent, setCurrentEvent] = useState<React.DragEvent>();
    const idActiveElement = useCurrentActiveElement(currentEvent);
    const [prevIdActiveElement, setPrevIdActiveElement] = useState<number>();
    useChangeCurrentComponent(idActiveElement, prevIdActiveElement);

    //Context
    const [operator, setOperator] = useState('');
    const [waitingForOperand, setWaiting] = useState<Boolean>(false);


    function dropHandler(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
        const componentName = e.dataTransfer.getData('key');
        const component = staticlistComponents.find(comp => comp.name === componentName);
        if (component?.visible === true) {
            const index = staticlistComponents.indexOf(component);
            let arr = [...staticlistComponents];
            arr[index].visible = false;
            setStaticList(arr);
            addComponent(idActiveElement, component, listComponents);
        }
        else if (component && idActiveElement) {
            const index = listComponents.indexOf(component);
            updateComponent(idActiveElement, index, component, listComponents);
        }
        setPrevIdActiveElement(idActiveElement);
        setCurrentEvent(undefined);
    }

    function dragWithPreventHandler(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
        setCurrentEvent(e);
    }

    function dragOver(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
    }

    function leaveHandler(e: React.DragEvent<HTMLElement>) {
        e.preventDefault();
        setPrevIdActiveElement(idActiveElement);
        setCurrentEvent(undefined);
    }

    return (
        <div>
            {isEmpty
                ?
                <div className='canvas-wrapper-empty'
                    onDragLeave={leaveHandler}
                    onDrop={dropHandler}
                    onDragEnter={dragWithPreventHandler}
                    onDragOver={dragOver}>
                    <Info />
                </div>
                :
                <div className='canvas-wrapper'>
                    {listComponents.map((component, key) =>
                        <div>
                            {isActive
                                ?
                                <Context.Provider value={{
                                    operator, setOperator, waitingForOperand, setWaiting
                                }}>
                                    <CalcComponent component={component} />
                                </Context.Provider>
                                :
                                <div id={`overlay-${key}`}
                                    className='overlay'
                                    onDragLeave={leaveHandler}
                                    onDrop={dropHandler}
                                    onDragEnter={dragOverDebounce}
                                    onDragOver={dragOver}>
                                    <DroppableComponent component={component} index={key} />
                                </div>
                            }
                        </div>
                    )}
                </div>
            }
        </div>
    )

}

export default Droppable;
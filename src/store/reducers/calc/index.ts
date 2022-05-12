import { CalcAction, CalcActionEnum, CalcState } from './types';

enum ComponentsEnum {
    display='display',
    operations='operations',
    numbers='numbers',
    equal='equal'
}

const initialState: CalcState = {
    data: '0',
    displayValue: '0',
    listComponents: [],
    staticlistComponents: [
        { name: ComponentsEnum.display, visible: true, position: 0 },
        { name: ComponentsEnum.operations, visible: true, position: 1 },
        { name: ComponentsEnum.numbers, visible: true, position: 2 },
        { name: ComponentsEnum.equal, visible: true, position: 3 },
    ],
    isActive: false,
}

export default function CalcReducer(state = initialState, action: CalcAction): CalcState {
    switch (action.type) {
        case CalcActionEnum.SET_DATA:
            return {...state, data: action.payload};
        case CalcActionEnum.SET_DISPLAY_VALUE:
            return {...state, displayValue: action.payload};
        case CalcActionEnum.SET_LIST:
            return {...state, listComponents: action.payload};
        case CalcActionEnum.SET_ACTIVE:
            return {...state, isActive: action.payload};
        default:
            return state;
    }
}
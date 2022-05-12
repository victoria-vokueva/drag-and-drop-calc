import { IComponent } from '../../../models/IComponent';


export interface CalcState {
    data: string;
    displayValue: string;
    listComponents: Array<IComponent>,
    staticlistComponents: Array<IComponent>,
    isActive: boolean;
}

export enum CalcActionEnum {
    SET_DATA = "SET_DATA",
    SET_DISPLAY_VALUE = "SET_DISPLAY_VALUE",
    SET_LIST = "SET_LIST",
    SET_STATIC_LIST="SET_STATIC_LIST",
    SET_ACTIVE = "SET_ACTIVE",
}

export interface SetCalcAction {
    type: CalcActionEnum.SET_DATA;
    payload: string
}

export interface SetValueAction {
    type: CalcActionEnum.SET_DISPLAY_VALUE;
    payload: string
}

export interface SetListAction {
    type: CalcActionEnum.SET_LIST;
    payload: Array<IComponent>
}

export interface SetStaticListAction {
    type: CalcActionEnum.SET_STATIC_LIST;
    payload: Array<IComponent>
}

export interface SetActiveAction {
    type: CalcActionEnum.SET_ACTIVE;
    payload: boolean
}

export type CalcAction =
    SetCalcAction |
    SetValueAction |
    SetListAction |
    SetStaticListAction |
    SetActiveAction 

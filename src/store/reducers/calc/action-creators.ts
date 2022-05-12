import { AppDispatch } from '../../index';
import { IComponent } from '../../../models/IComponent';
import { CalcActionEnum, SetCalcAction, SetActiveAction, SetListAction, SetValueAction, SetStaticListAction }
    from './types';

export const CalcActionCreators = {
    setData: (payload: string): SetCalcAction => ({ type: CalcActionEnum.SET_DATA, payload }),
    setValue: (payload: string): SetValueAction => ({ type: CalcActionEnum.SET_DISPLAY_VALUE, payload }),
    setList: (payload: Array<IComponent>): SetListAction => ({ type: CalcActionEnum.SET_LIST, payload }),
    setStaticList: (payload: Array<IComponent>): SetStaticListAction =>
        ({ type: CalcActionEnum.SET_STATIC_LIST, payload }),
    addComponent: (id: number | undefined, component: IComponent, arr: Array<IComponent>) =>
        async (dispatch: AppDispatch) => {
            try {
                if (id === undefined) {
                    arr.push(component);
                } else {
                    arr.splice(id + 1, 0, component);
                }
                dispatch(CalcActionCreators.setList(arr));
            } catch (e) {
                console.log(e);
            }
        },
    updateComponent: (newId: number, oldId: number, component: IComponent, arr: Array<IComponent>) =>
        async (dispatch: AppDispatch) => {
            try {
                arr.splice(newId + 1, 0, component);
                dispatch(CalcActionCreators.setList(arr));
                setTimeout (() => {
                    arr.splice(oldId, 1);
                    dispatch(CalcActionCreators.setList(arr));
                }, 10);
            } catch (e) {
                console.log(e);
            }
        },
    deleteComponent: (id: number | undefined, arr: Array<IComponent>) =>
        async (dispatch: AppDispatch) => {
            try {
                id !== undefined && arr.splice(id, 1);
                dispatch(CalcActionCreators.setList(arr));
            } catch (e) {
                console.log(e);
            }
        },
    setIsActive: (payload: boolean): SetActiveAction => ({ type: CalcActionEnum.SET_ACTIVE, payload }),
}
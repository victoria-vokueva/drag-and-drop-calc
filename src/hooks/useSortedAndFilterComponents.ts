import { useEffect, useState } from 'react';
import { IComponent } from '../models/IComponent';

export const useSortedComponents = (listComponents: Array<IComponent>, propsComponent: string) => {
    //console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД');
    if (propsComponent) {
        return [...listComponents].sort((a, b) => Number(a['position']) - Number(b['position']));
    }
    return listComponents;

};

export const useFilterComponents = (listComponents: Array<IComponent>, propsComponent: string, data: Object) => {
    const sortedList = useSortedComponents(listComponents, propsComponent);
    const [sortedAndFilterList, setList] = useState(sortedList);

    useEffect(() => {
        //console.log('ОТРАБОТАЛА ФУНКЦИЯ ФИЛЬТЕР');
        if (propsComponent) {
            setList(sortedList.filter(el => el.visible === false));
        }
    }, [listComponents]);
    //console.log(sortedAndFilterList);
    return sortedAndFilterList;
};
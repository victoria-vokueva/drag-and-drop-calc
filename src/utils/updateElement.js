export const updateElement =
    (
        idElement,
        propsElement,
        value,
    ) => {

        const element = document.getElementById(idElement);
        if (element) {
            element[propsElement] = value;
        }
    };
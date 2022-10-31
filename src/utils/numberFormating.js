export const numberFormating = value => {
    if(value) {
        return value.toFixed(1) || '';
    }

    return '';
};

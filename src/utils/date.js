export const dateYear = date => {
    if(date) {
        return date.split('-')[0] || '';
    }

    return '';
}

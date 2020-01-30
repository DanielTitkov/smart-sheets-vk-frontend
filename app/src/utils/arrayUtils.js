export const dataArrayToObject = (dataArray) => {
    let data = {}
    dataArray && dataArray.map(d => {
        data[d.elementId] = d.content
    });
    return data;
}

export const dataObjectToArray = (dataObject) => {
    return Object.entries(dataObject).map(([key, value]) => {
        return {
            elementId: key,
            content: value
        }
    });
}
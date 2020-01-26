import React from 'react';
import TextFrame from "../components/sheets/TextFrame"
import SheetTitle from "../components/sheets/SheetTitle"

export const buildSheetStructure = (structure, data, updateFunction, elementMapping) => {
    return structure.map(e => {
        return React.createElement(
            elementMapping[e.type], // element
            { // props
                key: e.id,
                updateFunction: (data) => updateFunction(e.id, data),
                data: data ? getElementData(data, e.id) : null,
                params: e.params,
            },
            null // children
        )
    })
}

export const getElementMapping = () => {
    return {
        TextFrame: TextFrame,
        SheetTitle: SheetTitle,
    }
}

export const getElementData = (dataArray, elementId) => {
    const dataFiltered = dataArray.filter(d => d.elementId === elementId);
    if (dataFiltered.length > 1) {
        console.log("Error: non-unique element id");
        // ???? do something
    } 
    return dataFiltered[0];
}

export const getSheetTitle = (sheet) => {
    return getElementData(sheet.data, sheet.blueprint.titleElementId).content;
}

export const newDataObject = (elementId, content) => {
    return {
        elementId: elementId,
        content: content
    }
}
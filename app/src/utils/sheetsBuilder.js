import React from 'react';
import TextFrame from "../components/sheets/TextFrame"
import SheetTitle from "../components/sheets/SheetTitle"
import SheetHeader from '../components/sheets/SheetHeader';
import appConfig from '../config/appConfig';

const buildSheetStructure = (structure, data, updateFunction, elementMapping) => {
    return structure.map(e => {
        return React.createElement(
            elementMapping[e.type], // element
            { // props
                key: e.id,
                updateFunction: (data, field) => updateFunction(e.id, data, field),
                data: data ? getElementData(data, e.id) : null,
                params: e.params,
            },
            null // children
        )
    })
}

const getElementMapping = () => {
    return {
        TextFrame: TextFrame,
        SheetTitle: SheetTitle,
        SheetHeader: SheetHeader,
    }
}

const getElementData = (dataObject, elementId) => {
    return dataObject[elementId];
}

const getSheetTitle = (sheet) => {
    const elementData = getElementData(sheet.data, sheet.blueprint.titleElementId)
    return elementData ? elementData[appConfig.DEFAULT_DATA_FIELD] : null;
}

const newDataObject = (elementId, content) => {
    return {
        elementId: elementId,
        content: content
    }
}

export {buildSheetStructure, getElementMapping, getElementData, getSheetTitle, newDataObject}
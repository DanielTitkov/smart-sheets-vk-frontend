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
                data: data ? data[e.id] : null,
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
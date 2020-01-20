import appConfig from "../../config/appConfig"
import axios from 'axios';

export const setActiveSheet = (sheetOrBlueprint) => {
    return (dispatch, getState) => {
        const { activeSheet } = getState().sheets;
        let newSheet = null;
        if (sheetOrBlueprint && sheetOrBlueprint.blueprint) { // if we have sheet
            newSheet = activeSheet && activeSheet.id && (activeSheet.id === sheetOrBlueprint.id) ? activeSheet : sheetOrBlueprint;
        } else { // if we have blueprint
            newSheet = {};
            newSheet['blueprint'] = sheetOrBlueprint;
        }
        
        dispatch({
            type: "SET_ACTIVE_SHEET",
            sheet: newSheet,
        })
    }
};

export const updateActiveSheetData = (id, data) => {
    return (dispatch, getState) => {
        dispatch({ type: "UPDATE_ACTIVE_SHEET_DATA", id: id, data: data });
    }
};

export const getRecentSheets = () => {
    const sheets = [
        {
            id: 2,
            created: '2020-01-18T00:44:01.359398Z',
            updated: '2020-01-18T00:44:46.760607Z',
            blueprint: {
                id: 2,
                type: 'Плюс-минус-интересно',
                desc: 'Техника, которая помогает раскласть всякое по полочками, но без смешных шляп',
                imageUrl: 'https://unsplash.it/800/600?image=59',
                titleElementId: 1,
                structure: [
                    {
                        id: 1,
                        type: 'SheetTitle',
                        params: {
                            title: 'Назовите проблему'
                        }
                    },
                    {
                        id: 2,
                        type: 'TextFrame',
                        params: {
                            desc: 'Тут опишите, что вам хорошо и славно',
                            title: 'Плюс',
                            imageURL: ''
                        }
                    },
                    {
                        id: 3,
                        type: 'TextFrame',
                        params: {
                            desc: 'Тут опишите, что вам плохо и не очень',
                            title: 'Минус',
                            imageURL: ''
                        }
                    },
                    {
                        id: 4,
                        type: 'TextFrame',
                        params: {
                            desc: 'Тут опишите, что не вошло в предыдущие поля',
                            title: 'Интересно',
                            imageURL: ''
                        }
                    }
                ]
            },
            data: {
                1: "НАХУЙ так ЖИТЬ?",
                2: "FOOOOOOOOOOOOOOOOOO!",
                3: "OOOOOOOOOOOOOOOOOHHHHHHH NOOOOOOOOOOOOOOOOOOOOOOO",
            },
        }
    ]
    return (dispatch, getState) => {
        dispatch({ type: "GET_RECENT_SHEETS", sheets: sheets });
    }
}

export const getSheetBlueprints = () => {
    const blueprints = [
        {
            id: 1,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageUrl: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            structure: [
                {
                    id: 1,
                    type: "SheetTitle",
                    params: {
                        title: "Назовите проблему",
                    },
                },
                {
                    id: 2,
                    type: "TextFrame",
                    params: {
                        title: "Плюс",
                        desc: "Тут опишите, что вам хорошо и славно",
                        imageURL: "",
                    },
                },
                {
                    id: 3,
                    type: "TextFrame",
                    params: {
                        title: "Минус",
                        desc: "Тут опишите, что вам плохо и не очень",
                        imageURL: "",
                    },
                },
                {
                    id: 4,
                    type: "TextFrame",
                    params: {
                        title: "Интересно",
                        desc: "Тут опишите, что не вошло в предыдущие поля",
                        imageURL: "",
                    },
                },
            ],
        },
        {
            id: 2,
            type: "Шесть шляп мышления",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageUrl: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            structure: [],
        },
        {
            id: 3,
            type: "Хороший суп злой суп",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageUrl: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            structure: [],
        },
    ]
    return (dispatch, getState) => {
        dispatch({ type: "GET_SHEET_BLUEPRINTS", blueprints: blueprints });
    }
}
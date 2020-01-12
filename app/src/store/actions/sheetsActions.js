import appConfig from "../../config/appConfig"
import axios from 'axios';

export const setActiveSheet = (sheet) => {
    return (dispatch, getState) => {
        const { activeSheet } = getState().sheets;
        let newSheet = null;
        if (sheet) {
            newSheet = activeSheet && activeSheet.id && (activeSheet.id === sheet.id) ? activeSheet : sheet;
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
            id: 1,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            updateTime: "10.12.2019 12:45",
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
            data: {
                1: "Кто СИЛЬНЕЕ: акула ИЛИ медведь?"
            },
        },
        {
            id: 2,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            updateTime: "10.12.2019 12:45",
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
            data: {
                1: "НАХУЙ так ЖИТЬ?",
                2: "FOOOOOOOOOOOOOOOOOO!",
                3: "OOOOOOOOOOOOOOOOOHHHHHHH NOOOOOOOOOOOOOOOOOOOOOOO",
            },
        },
    ]
    return (dispatch, getState) => {
        dispatch({ type: "GET_RECENT_SHEETS", sheets: sheets });
    }
}

export const getSheetBlueprints = () => {
    const blueprints = [
        {
            // id: 1,
            type: "Плюс-минус-интересно",
            desc: "Техника, которая помогает раскласть всякое по полочками, но без смешных шляп",
            imageURL: "https://unsplash.it/800/600?image=59",
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
            data: null,
        },
        {
            // id: 2,
            type: "Шесть шляп мышления",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1, 
            structure: [],
            data: null,
        },
        {
            // id: 3,
            type: "Хороший суп злой суп",
            desc: "Техника, которая помогает раскласть всякое по полочками и смешные шляпы",
            imageURL: "https://unsplash.it/800/600?image=59",
            titleElementId: 1,
            structure: [],
            data: null,
        },
    ]
    return (dispatch, getState) => {
        dispatch({ type: "GET_SHEET_BLUEPRINTS", blueprints: blueprints });
    }
}
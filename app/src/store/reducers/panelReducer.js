const initState = {
    activePanel: 'home'
}

const panelReducer = (state=initState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_PANEL":
            return {activePanel: action.panel};
        default:
            return state;
    }
}

export default panelReducer;
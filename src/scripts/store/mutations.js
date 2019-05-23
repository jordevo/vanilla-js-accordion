export default {
    openPanel(state, payload) {
        state.openMultiplePanels ? state.openPanels.push(payload) : state.openPanels = [payload];
        return state;
    },
    closePanel(state, payload) {
        state.openPanels.splice(state.openPanels.findIndex((element) => element === payload), 1);
        return state;
    },
    shownNewFact(state) {
        state.factsShown++;
        return state;
    },
    toggleMultiplePanels(state) {
        state.openMultiplePanels = !state.openMultiplePanels;
        state.openMultiplePanels ? null : state.openPanels = [];
        return state;
    }
}
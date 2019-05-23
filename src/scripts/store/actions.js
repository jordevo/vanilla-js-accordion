export default {
    openPanel(context, payload) {
        context.commit('openPanel', payload);
    },
    closePanel(context, payload) {
        context.commit('closePanel', payload);
    },
    shownNewFact(context) {
        context.commit('shownNewFact');
    },
    toggleMultiplePanels(context) {
        context.commit('toggleMultiplePanels');
    }
}
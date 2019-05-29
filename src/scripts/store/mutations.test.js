import mutations from './mutations.js';

const mockState = {
    openPanels: ['id1','id2'],
    factsShown: 2,
    openMultiplePanels: false
}

test('openPanel mutation adds panel to state', () => {
	expect(mutations.openPanel(mockState,'id3').openPanels).toContain('id3');
});

test('closePanel mutation removes panel from state', () => {
	expect(mutations.closePanel(mockState,'id3').openPanels).not.toContain('id3');
});
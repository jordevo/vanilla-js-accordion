import mutations from './mutations.js';

const mockState = {
	openPanels: ['id1','id2'],
	factsShown: 2,
	openMultiplePanels: false
};

const mockStateAllowOpen = {
	openPanels: ['id1','id2'],
	factsShown: 2,
	openMultiplePanels: true
};

describe('mutations', () => {

	describe('when openPanel is called', () => {
		test('when multiple panels cannot be opened, empties state and adds panel to state', () => {
			expect(mutations.openPanel(mockState,'id3').openPanels).toEqual(['id3']);
		});
		//mockState.openMultiplePanels = true;
		test('when multiple panels can be opened, adds panel to state', () => {
			expect(mutations.openPanel(mockStateAllowOpen,'id3').openPanels).toContain('id3');
		});
	});

	test('closePanel removes panel from state', () => {
		expect(mutations.closePanel(mockState,'id3').openPanels).not.toContain('id3');
	});

	test('shownNewFact increments the counter for random facts that the user has seen', () => {
		expect(mutations.shownNewFact(mockState).factsShown).toBe(3);
	});

	test('toggleMultiplePanels inverts the given value of openMultiplePanels', () => {
		expect(mutations.toggleMultiplePanels(mockState).openMultiplePanels).toBe(true);
		expect(mutations.toggleMultiplePanels(mockStateAllowOpen).openMultiplePanels).toBe(false);
	});

	test('toggleMultiplePanels closes panels if switched to false', () => {
		expect(mutations.toggleMultiplePanels(mockStateAllowOpen).openPanels).toEqual([]);
	});


});
import Component from '../lib/component.js';
import store from '../store/index.js';

export class ToggleComponent extends Component {

	constructor(element) {
    super({
      store,
      element: document.querySelector(element + ' input')
    });

    this._addEventListeners();
	}

  _addEventListeners() {
  	const _store = store;
  	this.element.addEventListener('change', () => {
	    _store.dispatch('toggleMultiplePanels');
		});
  }

}
import Component from '../lib/component.js';
import store from '../store/index.js';

export class ToggleComponent extends Component {

	constructor(element) {
    super({
      store,
      element: document.querySelector(element)
    });

    this._addEventListeners();
	}

  _addEventListeners() {
  	const _store = store;
  	this.element.addEventListener('click', () => {
	    _store.dispatch('toggleMultiplePanels');
		});
  }

  render() {
    store.state.openMultiplePanels ? this.element.innerHTML = 'Open one panel' : this.element.innerHTML = 'Open multiple panels';
  }
}
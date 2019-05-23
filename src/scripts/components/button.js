import Component from '../lib/component.js';
import store from '../store/index.js';

export class ButtonComponent extends Component {

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
	    _store.dispatch('shownNewFact');
		});
  }
}
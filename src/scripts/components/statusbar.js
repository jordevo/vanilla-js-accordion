import Component from '../lib/component.js';
import store from '../store/index.js';

export class StatusBarComponent extends Component {

	constructor(element) {
    super({
      store,
      element: document.querySelector(element)
    });
	}

	render() {
		this.element.innerHTML = `You have seen
			 ${store.state.factsShown} random ajax
			 fact${store.state.factsShown > 1 ? 's' : ''}`;
	}

}
import Component from '../lib/component.js';
import store from '../store/index.js';

export class AccordionComponent extends Component {

	constructor(element) {
        super({
          store,
          element: document.querySelector(element)
        });

		const container = typeof element === 'string' ? document.querySelector(element) : element;

		if (container == null) {
			return;
		}

        this.params = {
            primitiveClass: element.substr(1),
            headerClass: element+'-header',
            panelClass: element+'-panel',
            activeClass: 'is-active',
            hiddenClass: 'is-hidden'
        };

        this.container = container;
        const children = Array.from(this.container.children);

        // grabs all header elements
        this.headers = children.filter(header => header.classList.contains( this.params.headerClass.substr(1) ));

        // sets "unique" random ids
        this.ids = this.headers.map( (el) => {
            return { id: Math.floor((Math.random() * 1000000) + 1) };
        });

        // grabs all panel elements
        this.panels = children.filter(panel => panel.classList.contains( this.params.panelClass.substr(1) ));

        this._setupAttributes();

        this._addEventListeners();
	}

    render() {
        const _self = this;
        this.headers.map((header, index) => {
            if(store.state.openPanels.indexOf(header.attributes.id.value) < 0) {
                const panelToClose = _self.panels[index];

                panelToClose.classList.remove(_self.params.activeClass);
                panelToClose.classList.add(_self.params.hiddenClass);

                header.classList.remove(_self.params.activeClass);

                header.setAttribute('aria-expanded', false);

                header.removeEventListener('click', _self._closePanel);
                header.addEventListener('click', _self._openPanel);
                return;
            }

            const panelToOpen = _self.panels[index];

            panelToOpen.classList.remove(_self.params.hiddenClass);
            panelToOpen.classList.add(_self.params.activeClass);

            header.classList.add(_self.params.activeClass);

            header.setAttribute('aria-expanded', true);

            header.removeEventListener('click', _self._openPanel);
            header.addEventListener('click', _self._closePanel);
        });
    }

    _addEventListeners() {
        const _self = this;

        this.headers.map((header, index) => {
            header.addEventListener('click', _self._openPanel);
        });
    }

    _openPanel(evt) {
        store.dispatch('openPanel', evt.target.attributes.id.value);
    }

    _closePanel(evt) {
        store.dispatch('closePanel', evt.target.attributes.id.value);
    }

    /**
     *  _setupAttributes
     *
     *  Initalises accordion attribute methods
     */
    _setupAttributes() {
        // adds id & aria-controls to headers
        this._setupHeaders();

        // adds id & aria-labelledby to panels
        this._setupPanels();
    }

    /**
     * _setupHeaders
     */
    _setupHeaders() {
        const _self = this;
        this.headers.forEach( (header, index) => {
            header.setAttribute('id', `${_self.params.primitiveClass}-header-${_self.ids[index].id}`);
            header.setAttribute('aria-controls', `${_self.params.primitiveClass}-panel-${_self.ids[index].id}`);
        });
    }


    /**
     * _setupPanels
     */
    _setupPanels() {
        const _self = this;
        this.panels.forEach( (panel, index) => {
            panel.classList.add(_self.params.hiddenClass);
            panel.setAttribute('id', `${_self.params.primitiveClass}-panel-${_self.ids[index].id}`);
            panel.setAttribute('aria-labelledby', `${_self.params.primitiveClass}-header-${_self.ids[index].id}`);
        });
    }
}
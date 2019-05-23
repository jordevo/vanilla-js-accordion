import { GetLoremIpsum } from './utils';
import { AccordionComponent } from './components/accordion';
import { StatusBarComponent } from './components/statusbar';
import { ToggleComponent } from './components/toggle';
import store from './store/index.js';

const ajaxElement = document.querySelector('.AjaxElement');

const loadFacts = () => {
	ajaxElement.innerHTML = '<img src="./assets/images/oval.svg" alt="loading">';
	setTimeout(() => {
		GetLoremIpsum()
	  .then(res => {
	    ajaxElement.innerHTML = res;
	   	store.dispatch('shownNewFact');
	  })
	  .catch(err => (ajaxElement.innerHTML = '<p>Error: content could not be loaded.</p>'));
	},500);
}

document.addEventListener('DOMContentLoaded', (event) => {

	loadFacts();

	const Accordion = new AccordionComponent('.AccordionComponent');
	Accordion.render();

	const StatusBar = new StatusBarComponent('.StatusBarComponent');
	StatusBar.render();

	const Toggle = new ToggleComponent('.ToggleComponent');
	Toggle.render();

}, false);

document.addEventListener('click', (event) => {

	if (!event.target.matches('.ButtonComponent')) return;

	event.preventDefault();

	loadFacts();

}, false);
import { GetLoremIpsum } from './utils';
import { AccordionComponent } from './components/accordion';
import { ButtonComponent } from './components/button';
import { StatusBarComponent } from './components/statusbar';
import { ToggleComponent } from './components/toggle';

const ajaxElement = document.querySelector('.ajaxElement');

const loadFacts = () => {
	GetLoremIpsum()
  .then(res => {
    ajaxElement.innerHTML = res
  })
  .catch(err => (ajaxElement.innerHTML = 'Error: content could not be loaded.'));
}

document.addEventListener('DOMContentLoaded', (event) => {

	loadFacts();

	const Accordion = new AccordionComponent('.AccordionComponent');
	Accordion.render();

	const ButtonNewFact = new ButtonComponent('.ButtonComponent');
	ButtonNewFact.render();

	const StatusBar = new StatusBarComponent('.StatusBarComponent');
	StatusBar.render();

	const ToggleMultiplePanels = new ToggleComponent('.ToggleComponent');
	ToggleMultiplePanels.render();

}, false);

document.addEventListener('click', (event) => {

	if (!event.target.matches('.ButtonComponent')) return;

	event.preventDefault();

	loadFacts();

}, false);
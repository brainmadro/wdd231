import { getAllCompanies, createBusinessCard } from "./companies.js";

const $displayToggleButton = document.querySelector('#display-toggle')
const $companiesContainer = document.querySelector('.companies-container')

$displayToggleButton.addEventListener('click', (event) => {
	const buttonContent = event.target.innerHTML
	$companiesContainer.classList.toggle('grid')

	if (buttonContent == 'Flex') {
		event.target.innerHTML = 'Grid'
	} else {
		event.target.innerHTML = 'Flex'	
	}
	
})

const companies = await getAllCompanies()

companies.forEach(company => {
	const $card = createBusinessCard(company)
	$companiesContainer.appendChild($card)
});
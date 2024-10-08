import { createBusinessCard, getAllCompanies } from "./companies.js";

const companies = await getAllCompanies()
const $companiesContainer = document.querySelector('.companies-container')

companies.forEach(company => {
	const $card = createBusinessCard(company)
	$companiesContainer.appendChild($card)
});
import { getPremiumCompanies, createBusinessCard } from "./companies.js";

const $hamButton = document.querySelector('#menu')
const $navigation = document.querySelector('header nav')
const $spotlightsCompanies = document.querySelector('.spotlights-companies')

$hamButton.addEventListener('click', () => {
	$navigation.classList.toggle('open');
	$hamButton.classList.toggle('open');
});

const companies = await getPremiumCompanies()
const shuffleCompanies = companies.sort(() => Math.random() - 0.5);

shuffleCompanies.length = 3
shuffleCompanies.forEach(company => {
	const $card = createBusinessCard(company)
	$spotlightsCompanies.appendChild($card)
});
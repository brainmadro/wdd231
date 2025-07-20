import { getPremiumCompanies, createBusinessCard } from "./companies.js";

const companies = await getPremiumCompanies()
const shuffleCompanies = companies.sort(() => Math.random() - 0.5);

shuffleCompanies.length = 3
shuffleCompanies.forEach(company => {
	const $card = createBusinessCard(company)
	$spotlightsCompanies.appendChild($card)
});
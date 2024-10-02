async function getCompanies() {
	
}

function createBusinessCard(company) {
	const memberships = [null, 'member', 'silver', 'gold']
	
	const $card = document.createElement('div')
	const $image = document.createElement('img')
	const $title = document.createElement('div')
	const $details = document.createElement('div')
	const $description = document.createElement('div')

	$image.setAttribute('src', company.icon)
	$image.setAttribute('alt', company.name + ' Logo')
	$image.setAttribute('loading', 'lazy')
	
	$title.innerHTML = `<h2>${company.name}</h2><h3>${memberships[company.membership]}</h3>`
	$details.innerHTML = `
		<span><strong>ADDRESS:</strong>${company.address}</span>
		<span><strong>PHONE:</strong>${company.phone}</span>
		<span><strong>LINK:</strong>${company.website}</span>`

	$card.classList.add('company-card')
	$title.classList.add('company-card-title')
	$description.classList.add('company-card-description')
	$details.classList.add('company-card-details')

	$description.appendChild($image)
	$description.appendChild($details)
	$card.appendChild($title)
	$card.appendChild($description)
	
	return $card
}

async function getPremiumCompanies() {
	let companies = []
	
	try {
		const res = await fetch('/chamber/data/members.json')
		if (res.ok) {
			companies = await res.json()
			companies = companies.filter(company => company.membership > 1)
		}
	} catch (err) {
		console.error(err);
	}

	return companies
}

export { 
	getCompanies,
	createBusinessCard,
	getPremiumCompanies
}
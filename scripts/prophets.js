const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
		const card = document.createElement('section')
		const fullName = document.createElement('h2')
		const portrait = document.createElement('img')
		const details = document.createElement('p')

		fullName.textContent = `${prophet.name} ${prophet.lastname}`
		details.innerHTML = `
			<span>Date of Birth: ${prophet.birthdate}</span>
			<span>Place of Birth: ${prophet.birthplace}</span>
		`
		
		portrait.setAttribute('src', prophet.imageurl)
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} portrait`)
    portrait.setAttribute('loading', 'lazy')
    portrait.setAttribute('width', '240')
    portrait.setAttribute('height', '340')

		card.appendChild(fullName)
		card.appendChild(details)
    card.appendChild(portrait)

		cards.appendChild(card)
  });
}

async function getProphetData() {
  const response = await fetch(url)
  const data = await response.json()
  //console.table(data.prophets)
	displayProphets(data.prophets)
}

getProphetData();
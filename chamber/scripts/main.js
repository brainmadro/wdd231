const $hamButton = document.querySelector('#menu')
const $navigation = document.querySelector('header nav')
const $spotlightsCompanies = document.querySelector('.spotlights-companies')

$hamButton.addEventListener('click', () => {
	$navigation.classList.toggle('open');
	$hamButton.classList.toggle('open');
});



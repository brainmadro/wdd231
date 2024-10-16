const $hamButton = document.querySelector('#menu')
const $navigation = document.querySelector('header nav')
const $spotlightsCompanies = document.querySelector('.spotlights-companies')
const $modal = document.querySelector('dialog')

$hamButton.addEventListener('click', () => {
	$navigation.classList.toggle('open');
	$hamButton.classList.toggle('open');
});

if ($modal) {
	$modal.addEventListener('click', event => {
		if (event.target === event.currentTarget) {
			$modal.removeAttribute('open')
		}
	})
}
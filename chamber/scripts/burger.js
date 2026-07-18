const hamButton = document.querySelector('#burger');
const navigation = document.querySelector('#topnav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
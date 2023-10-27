const button = document.querySelector('.light-button');
const popup = document.querySelector('.popup');
const shadow = document.querySelector('.shadow');

button.addEventListener('click', () => {
  popup.classList.remove('hidden');
  shadow.classList.remove('hidden');
});

shadow.addEventListener('click', () => {
  popup.classList.add('hidden');
  shadow.classList.add('hidden');
})

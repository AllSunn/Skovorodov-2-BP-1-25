var mainTitle = document.getElementById('mainTitle');
var subtitle = document.getElementById('subtitle');
var updateButton = document.getElementById('update');

updateButton.addEventListener('click', function() {
    mainTitle.textContent = 'Здравствуйте!';
    subtitle.textContent = 'Осваиваем JavaScript и DOM';
});

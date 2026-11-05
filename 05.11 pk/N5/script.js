const employee = {
  name: 'Дмитрий',
  position: 'Веб-разработчик',
  department: 'Разработка',
  showCard() {
    console.log(this.name, this.position, this.department);
  }
};

employee.showCard();

const lost = employee.showCard;
lost();

const bound = employee.showCard.bind(employee);
bound();

function showCardInCity(city) {
  console.log(this.name, this.position, this.department, city);
}

showCardInCity.call(employee, 'Москва');
showCardInCity.apply(employee, ['Москва']);

const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
  console.log('function:', this, event.currentTarget);
});

btn.addEventListener('click', (event) => {
  console.log('arrow:', this, event.currentTarget);
});

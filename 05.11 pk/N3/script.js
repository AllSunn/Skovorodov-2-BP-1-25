const employee = {
  name: 'Дмитрий',
  position: 'Веб-разработчик',
  showInfo() {
    console.log(this.name, this.position);
  }
};

employee.showInfo();

const lost = employee.showInfo;
lost();

const bound = employee.showInfo.bind(employee);
bound();

const employee2 = { name: 'Ольга', position: 'Дизайнер' };
const bound2 = employee.showInfo.bind(employee2);
bound2();

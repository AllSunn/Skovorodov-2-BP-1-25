const contacts = new Map();

contacts.set('Ivanov', '+7-900-111-22-33');
contacts.set('Petrova', '+7-900-444-55-66');
contacts.set('Sidorov', '+7-900-777-88-99');

console.log(contacts.get('Petrova'));

contacts.delete('Sidorov');

console.log(contacts.size);
console.log(contacts.has('Sidorov'));

const surnames = [...contacts.keys()];
console.log(surnames);

contacts.forEach(function(phone, surname) {
  console.log(surname + ": " + phone);
});

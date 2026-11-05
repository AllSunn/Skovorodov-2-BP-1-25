const students = [
  { name: 'Anna', grade: 5 },
  { name: 'Ivan', grade: 4 },
  { name: 'Anna', grade: 5 },
  { name: 'Petr', grade: 3 },
  { name: 'Olga', grade: 4 },
  { name: 'Ivan', grade: 4 }
];

const strings = students.map(s => JSON.stringify(s));
const uniqueStrings = [...new Set(strings)];
const uniqueStudents = uniqueStrings.map(s => JSON.parse(s));
console.log(uniqueStudents);

const gradeMap = new Map();
for (const s of students) {
  if (!gradeMap.has(s.grade)) {
    gradeMap.set(s.grade, []);
  }
  gradeMap.get(s.grade).push(s.name);
}

for (const [grade, names] of gradeMap) {
  console.log(`Оценка ${grade}: ${names.join(', ')}`);
}
console.log([...gradeMap.keys()]);

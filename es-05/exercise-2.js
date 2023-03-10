// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000



function calculateSalary(role) {
  switch (role) {
    case 'ceo':
      result = 2200 + '€';
      break;
    case 'manager':
      result = 1800 + '€';
      break;
    case 'cto':
      result = 1800 + '€';
      break;
    case 'developer':
      result = 1500 + '€';
      break;

    default:
      result =  1000 + '€';
    
  }
  return result
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
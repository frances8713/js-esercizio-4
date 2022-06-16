// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

function calculateSalary(role) {
    if ('role' == 'ceo') {
        console.log('il salario del ceo è 2200€');

    } else if ('role' == 'manager') {
        console.log('il salario del manager è 1800€');

    } else if ('role' == 'cto') {
        console.log('il salario del cto è 1800€');

    } else if ('role' == 'developer') {
        console.log('il salario del developer è 1500€');
    } else {
        console.log('il salario di default è 1000€');
    }
  }
  
  console.log(ceoSalary);
  console.log(managerSalary);
  console.log(ctoSalary);
  console.log(developerSalary);
  console.log(otherSalary);
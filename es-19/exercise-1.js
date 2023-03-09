const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = 'Simon';
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


// Usando assign in questo modo si creerà un nuovo oggetto clonato
// e non copiato da person1 a cui potremo variare i valori
// al suo interno a nostro piacimento rispetto a prima a cui gli
// indicavamo che i due oggetti erano uguali, quindi se uno cambiava
// si modificava anche l'altro.
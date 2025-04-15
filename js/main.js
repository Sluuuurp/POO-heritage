// Vous mettrez ici le code permettant de tester vos classes

personne1 = new Person("flo", "alex", 18, "homme", "jeux videos")

// personne1.lastname = "forever"

// personne1.firstname = "michel"

// personne1.age = 14

// personne1.gender = "homme"

personne1.addInterest('basket')
personne1.addInterest('foot')
personne1.addInterest('manga')

personne1.removeInterest('foot')

console.log(personne1.lastname)

console.log(personne1.firstname)

console.log(personne1.fullname)

console.log(personne1.age)

console.log(personne1.gender)

console.log(personne1.interest)

console.log(`la personne a ${personne1.nbInterest} interet`)

console.log(personne1.greeting())

console.log(personne1.goodbye())

console.log(personne1.infos)

console.log("test de a classe professor")

let prof1 = new Professor("michel", "forever", 35, "homme", "timbres", "math")

let eleve1 = new Student("jean", "valjean", 16, "homme", "BD", "666", 12)

console.log(prof1.greeting())

console.log(prof1.infos)

console.log(prof1.askForSilence())

prof1.evaluate(eleve1, "9")

console.log(eleve1.average)

eleve1.number = "65"

console.log(eleve1.number)

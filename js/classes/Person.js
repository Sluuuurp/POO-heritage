// Vous mettrez ici le code de la classe Person
class Person {

    #lastname;
    #firstname;
    #age;
    #gender;
    #interest = [];
    #regex = new RegExp(/^[A-Za-z ]+$/)

    constructor(prenom, nom, age, genre, interet) {
        this.#firstname = prenom
        this.lastname = nom
        this.#age = age
        this.#gender = genre
        this.addInterest(interet)
    }

    greeting()
    {
        return `Bonjour je m'appelle ${this.#firstname} ${this.#lastname}`
    }

    goodbye()
    {
        return `Au revoir`
    }

    addInterest(interest)
    {
        if (this.#regex.test(interest)){
            this.#interest.push(interest)
        }
        else{
            console.log("interet saisie invalide")
        } 
    }

    removeInterest(interest)
    {
        //recupere l'index correspondant
        let index = this.#interest.indexOf(interest);
        if(index !== -1){
        //supprime la valeur du taleau
        this.#interest.splice(index, 1)
        console.log(`supression de "${interest}" reussi`)
        }
        else{
            console.log('interet non trouver')
        }
    }

    #upperFirst(string) // fonction qui passe le 1er caractere d'un mot ou phrase en majuscule
    {
       return string = string[0].toUpperCase() + string.slice(1);
        
    }

    //******************SETER ******************/

    set lastname(lastname)
    {
        //test de la validité de la saisie
        if (this.#regex.test(lastname)){
            this.#lastname = this.#upperFirst(lastname)
        }
        else{
            console.log("nom saisie invalide")
        } 
    }

    set firstname(firstname)
    {
        //test de la validité de la saisie
        if (this.#regex.test(firstname)){
            this.#firstname = this.#upperFirst(firstname)
        }
        else{
            console.log("prenom saisie invalide")
        }
    }

    set age(age)
    {
        if(typeof(age) === 'number' && age > 0){
            this.#age = age
        }
        else{
            console.log('pas correct')
        }
    }

    set gender(gender)
    {
        gender = this.#upperFirst(gender)
        if(gender === "Homme" || gender === "Femme" || gender === "Autre"){
            this.#gender = gender
        }
        else{
            console.log("genre incorrect")
        }
        
    }
    

    //******************GETTER ******************/

    get lastname()
    {
        return this.#lastname
    }

    get firstname()
    {
        return this.#firstname
    }

    get age()
    {
        return this.#age
    }

    get gender()
    {
        return this.#gender
    }

    get interest()
    {
        return this.#interest
    }

    get nbInterest()
    {
        return this.#interest.length
    }

    get infos()
    {
        return `${this.#firstname}, ${this.#lastname}, ${this.#age} ans, ${this.#gender}, ${this.#interest}`
    }
}
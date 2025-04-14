// Vous mettrez ici le code de la classe Student
class Student extends Person
{
    #number;
    #average;
    #regex = new RegExp (/^[1-9][0-9]{0,2}$/)


    constructor(firstname, lastname, age, gender, interest, number, average)
    {
        super(firstname, lastname, age, gender, interest)
        this.number = number
        this.average = average
    }

    greeting()
    {
        return `Salut ! Moi c'est ${super.firstname} ! J'ai ${super.age} ans. `
    }

    sign()
    {
        return 'signature'
    }

    get number()
    {
        return this.#number
    }

    get average()
    {
        return this.#average
    }

    set number(number)
    {
        if(typeof(number) !== 'string'){
            number = number.toString()
        }

        if(this.#regex.test(number)){   // ma regex accpet une valeur entre 1 et 999
            console.log("numero d'eleve saisie avec succès")
            this.#number = number
        }
        else{
            console.log("Numero d'eleve saisie invalide")
        }
        
    }

    set average(average)
    {
        if(typeof(average) !== 'number'){
            average = Number(average)
        }

        if(this.#regex.test(average)){
            console.log("moyenne d'eleve saisie avec succès")
            this.#average = average
        }
        else{
            console.log("Moyenne de l'eleve saisie invalide")
        }
    }


}
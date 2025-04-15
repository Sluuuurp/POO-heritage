// Vous mettrez ici le code de la classe Professor
class Professor extends Person
{
    #subject = "math";

    constructor(firstname,lastname, age, gender, interest, sujet)
    {
        super(firstname, lastname, age, gender, interest)
        this.#subject = sujet
    }

    askForSilence()
    {
        return "Un peu de silence !!!"
    }

    greeting()
    {
        return `Bonjour je m'appelle ${super.firstname} ${super.lastname} et j'enseigne le(s) ${this.#subject}`
    }

    evaluate(student, average)
    {
        student.average = average
    }

    get subject()
    {
        return this.#subject;
    }

    get infos()
    {
        return `${super.firstname}, ${super.lastname}, ${super.age} ans, ${super.gender}, prof de ${this.#subject}, aime ${super.interest}`
    }

    set subject(sujet)
    {
        if(typeof(sujet) === 'string'){
            return this.#subject = sujet 
        }
        else{
            console.log('sujet saisie invalide')
        }
        
    }

    
}
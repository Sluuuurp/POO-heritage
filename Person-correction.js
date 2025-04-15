class Person 
{
    #lastname;
    #firstname;
    #age;
    #gender;
    #interests;
 
    constructor(lastname, firstname, age, gender, interests)
    {
 
        if(Array.isArray(interests) === false) {
            throw new Error('Les intérêts doivent être dans un tableau');
        }
 
        interests.forEach( interest => {
            this._testString(interest);
        });
 
 
        this.lastname = lastname;
        this.firstname = firstname;
        this.age = age;
        this.gender = gender;
        this.#interests = interests;
    }
 
    get lastname()
    {
        return this.#lastname.toUpperCase();
    }
 
    set lastname(lastname)
    {
        if(this._testString(lastname) === true) {
            this.#lastname = this._capitalizeFirstLetter(lastname);
        }
    }
 
    get firstname()
    {
        return this.#firstname.toLowerCase();
    }
 
    set firstname(firstname)
    {
        if(this._testString(firstname) === true) {
            this.#firstname = this._capitalizeFirstLetter(firstname);
        }
    }
 
    get fullname()
    {
        return `${this.#firstname} ${this.#lastname}`;
    }
 
    get age()
    {
        return this.#age;
    }
 
    set age(age)
    {
        try {
            this._testNumber(age);
        }
        catch(error) {
            throw new Error(`Age : ${error.message}`);
        }
 
        if(age < 0) {
            throw new Error('Age : ne peut être inférieur à 0');
        }
 
        this.#age = age;
    }
 
    get gender()
    {
        return this.#gender;
    }
 
    set gender(gender)
    {
        gender = gender.toLowerCase();
        if(this._testString(gender) === true) {
            if(gender !== "homme" && gender !=="femme" && gender !== "autre") {
                throw new Error('Le genre doit valoir : homme, femme ou autre');
            }
        }
    }
 
    get interests()
    {
        return this.#interests.join(";");
    }
 
    get nbInterests()
    {
        return this.#interests.length;
    }
 
    get infos()
    {
        return `${this.#firstname};${this.#lastname};${this.#age};${this.#gender};${this.#interests.join(",")}`;
 
        // return [this.#firstname, this.#lastname, this.age, this.gender, this.#interests.join(",")].join(';');
    }
 
    greeting()
    {
        return `Bonjour, je m'appelle ${this.fullname}`;
    }
 
    goodbye()
    {
        return "Au revoir.";
    }
 
    addInterest(interest)
    {
        if(this._testString(interest) === true) {
            if(this.#interests.includes(interest) === false) {
                this.#interests.push(interest);
            }
        }
    }
 
    removeInterest(interest)
    {
        if(this._testString(interest) === true) {
            const index = this.#interests.indexOf(interest);
            if( index !== -1) {
                this.#interests.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        }
    }
 
    _capitalizeFirstLetter(value)
    {
        return String(value).charAt(0).toUpperCase() + String(value).slice(1).toLowerCase();
    }
 
    _testString(value)
    {
        if(typeof value !== "string" && value instanceof String === false ) {
            throw new Error(`${value} n'est pas une chaine de caractères`);
        }
 
        let regex = new RegExp(/^[A-Za-z]+$/);
        if(regex.test(value) === false) {
            throw new Error(`${value} ne doit contenir que des lettres`);
        }
 
        return true;
    }
 
    _testNumber(value)
    {
        if(typeof value !== "number" && value instanceof Number === false) {
            throw new Error(`${value} n'est pas un nombre`);
        }
 
        return true;
    }
 
    // _testInArray(value)
    // {
    //     // if(this.#interests.indexOf(value) !== -1) {
    //     //     return true;
    //     // }
    //     // else {
    //     //     return false;
    //     // }
 
    //     // return this.#interests.indexOf(value) !== -1 ? this.#interests.indexOf(value) : false;
 
    //     // return this.#interests.indexOf(value) !== -1;
    // }
}
export default class Passport {
    /**
     * @param {string} firstName
     * @param {string} lastName
     */
      
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName(){         
        return this.firstName.toLowerCase();   
    }

    getLastName(){
        return this.lastName.toUpperCase();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getInitials(){
        return `${this.firstName[0]}.${this.lastName[0]}.`;
    }

    getInitials(){
        return `${this.firstName[0].toUpperCase()}.${this.lastName[0].toUpperCase()}.`;
    }

    getIsValidName(){
        if(this.firstName.match(/[.,;'@#!$%^&]/) === this.lastName.match(/[.,;'@#!$%^&]/)){
            return 'Yes';
        }
            return 'No';
    }

    getIsValidName(){
        if(this.firstName.includes('.') || this.lastName.includes('.')){
            return 'No';
        }
            return 'Yes';
    }
}
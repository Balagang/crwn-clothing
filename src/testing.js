class Person {
    constructor(firstname, lastname, age, likes = []) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstname} is ${this.age}.`
        
        this.likes.forEach((like) => {
            bio += ` ${this.firstname} likes ${like}.`
        })
    
        return bio  
    }
    setName(fullname) {
        const names = fullname.split(' ')
        this.firstname = names[0]
        this.lastname = names[1]
    }
}

const me = new Person('bank', 'lastbank', 33, ['Learning', 'Studying'])
// me.lastname = 'LastChange'
me.setName('FIRSTNAME LASTNAME')
console.log(me.getBio())
class HelloWorld {

    firstName= '';
    lastName: string;
   
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this. lastName = lastName;
    }

    sayhello() {
        console.log('Hello World!' + 'My name is' + this.firstName + ' ' + this.lastName);
    }

}

    const myHelloClassInstance = new HelloWorld('Jose', 'Hernandez');
    myHelloClassInstance.sayhello();
class HelloWorld {

    firstName= '';
    lastName: string;
   
    constructor(public firstName: string, public lastName: string){
        
    }

    sayhello() {
        console.log('Hello World!' + 'My name is' + this.firstName + ' ' + this.lastName);
    }

}

    const myHelloClassInstance = new HelloWorld('Jose', 'Hernandez');
    myHelloClassInstance.sayhello();
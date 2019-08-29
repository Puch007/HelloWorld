var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = '';
    }
    HelloWorld.prototype.sayhello = function () {
        console.log('Hello World!' + 'My name is' + this.firstName + ' ' + this.lastName);
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Jose', 'Hernandez');
myHelloClassInstance.sayhello();

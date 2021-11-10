const person = {
    name: 'Tom',
    hello: function() {
        // this.name -> person.nameとしても同じ
        console.log('Hello ' + this.name)
    }
}

person.hello();
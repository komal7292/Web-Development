var a = {
  firstName: 'Komal',
  lastName: 'Gupta',
  age: 22,
  email: 'abc@gmail.com',
  favMovies: ['dhoom', 'sholey', 'herione'],
  living: {
    city: 'Delhi',
    country: 'India'
  },
  fullname: function () {
    return this.firstName + ',' + this.lastName
  }
}
console.log(a)
// document.write(a.living.city)

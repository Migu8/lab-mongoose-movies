const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')


const dbName = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

/*
const celebrities = [
  {
    name: "Prueba",
    occupation: "Prueba",
    catchPhrase: "Prueba"
  }
]


Celebrity.create(celebrities)
.then(celebrities=>{
  console.log(`${celebrities.length} celebrities added`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log(e)
})
*/

const movies =[
  {
    title: "Locuras en la noche",
    genre: "Sex",
    plot: "NDD"
  },
  {
    title: "Locuras en la noche II",
    genre: "Sex",
    plot: "NDD"
  }
]

Movie.create(movies)
.then(movies=>{
  console.log(`${movies.length} movies added`)
  mongoose.connection.close()
})
.catch(e=>{
  console.log(e)
})
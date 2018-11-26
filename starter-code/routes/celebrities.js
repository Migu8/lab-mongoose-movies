const express = require('express')
const router = express.Router()
const Celebrity = require('../models/Celebrity')


//Create
router.get('/new', (request, response)=>{
    const action = '/celebrities'
    response.render('celebrities/new')
})

router.post('/new', (request, response)=>{
    Celebrity.create(request.body)
    .then(cele=>{
        response.render('successful', cele)
    })
    .catch(e=>{
        console.log(e)
        response.render('celebrities/new', {cele:request.body, e})
    })
})


//list
router.get('/', (request, response, next)=>{
    Celebrity.find()
    .then(celebrities=>{
        response.render('celebrities/index', {celebrities})
    })
    .catch(e=>{
        next(e)
    })
})

//details by celebrity
router.get('/show/:id', (request, response, next)=>{
    const {id} = request.params
    Celebrity.findById(id)
    .then(celebrity=>{
        response.render('celebrities/show', celebrity)
    })
    .catch(e=>{
        next(e)
    })
})

//Delete
router.get('/delete/:id', (request, response)=>{
    const {id} = request.params
    Celebrity.findById(id)
    .then(celebrity=>{
        response.render('celebrities/delete', celebrity)
    })
    .catch(e=>{
        next(e)
    })
})

router.post('/delete/:id', (request, response)=>{
    const {id} = request.params
    Celebrity.findByIdAndRemove(id)
    .then(celebrity=>{
        response.redirect('/celebrities')
    })
    .catch(e=>{
        next(e)
    })
})

module.exports = router
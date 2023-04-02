const router = require('express').Router()
let db = require('../models')

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  db.place_schema.findById(req.params.id)
    .populate('comments')
    .then((place) => { 
      console.log(place.comments)
      res.render('places/edit', { place }) 
    })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

router.get('/:id', (req, res) => {
  db.place_schema.findById(req.params.id)
    .then((place) => { res.render('places/show', { place }) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
  db.place_schema.findByIdAndDelete(String(req.params.id))
    .then(() => { res.redirect('/places') })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

router.put('/:id', (req, res) => {
  db.place_schema.findByIdAndUpdate(String(req.params.id), req.body)
    .then(() => { res.redirect(`/places/${req.params.id}`) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })

})

router.get('/', (req, res) => {
  db.place_schema.find()
    .then((places) => { res.render('places/index', { places }) })
    .catch((err) => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  db.place_schema.create(req.body)
    .then(() => { res.redirect('/places') })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        let message = "Validation Error: "
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value} - `
          message += `${err.errors[field].message}`
        }
        console.log("Validation Error Message", message)
        res.render('places/new', { message })
      }
      res.render('error404')
    })
})

module.exports = router
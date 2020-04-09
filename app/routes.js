// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

// ::PROFESSIONALS:: //

// Make sure this route matches the one you used in the action on the form element
router.post('/gp-consent', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['have-consent']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/gp-registered')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/answer-no')
  }
})

router.post('/gp-registered', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['registered']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/gp-registered-doctors')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/answer-no')
  }
})

router.post('/yp-registered', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['registered']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/yp-registered-doctors')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/answer-no')
  }
})

router.post('/gp-list', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['list']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/gp-under18')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/gp-under18')
  }
})

router.post('/gp-support-needs', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['support-needs']
  // Check whether the answer equals yes
  if (answer == "Mental"){
    // If the answer is yes send to the next question
    res.redirect('/gp-form')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/gp-eating-disorder')
  }
})

// ::YOUNG PERSON:: //

// Make sure this route matches the one you used in the action on the form element
router.post('/yp-consent', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['give-consent']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/yp-registered')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/answer-no')
  }
})

// Make sure this route matches the one you used in the action on the form element
router.post('/contact-carer', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['contact-carer']
  // Check whether the answer equals yes
  if (answer == "Yes"){
    // If the answer is yes send to the next question
    res.redirect('/yp-under18')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/answer-no')
  }
})

router.post('/yp-support-needs', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['support-needs']
  // Check whether the answer equals yes
  if (answer == "Mental"){
    // If the answer is yes send to the next question
    res.redirect('/yp-form')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/yp-eating-disorder')
  }
})

// Make sure this route matches the one you used in the action on the form element
router.post('/whoareyou', function (req, res) {
  // Set a variable to the answer so we can access it later
  var answer = req.session.data['who']
  // Check whether the answer equals yes
  if (answer == "Young Person"){
    // If the answer is yes send to the next question
    res.redirect('/yp-consent')
  }
  else if (answer == "Parent"){
    // If the answer is yes send to the next question
    res.redirect('#')
  }
  else {
    // If the answer is no send to the no screen 
    res.redirect('/gp-consent')
  }
})
import { Skill } from '../models/skill.js'

//--> display all
//display a list of skills
function index(req, res) {
  Skill.find({})
  //return skill
  .then(skills =>{
    res.render('skills/index',{
      //key value pais in an object
      skills: skills,
      time: req.time
    }) 
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


// async function index2(req,res) {
//   try {
//     const skills = await Skill.find({})
//     res.render('skills/index',{
//       skills: skills

//   })
//   } catch (error) {
//     console.log(error)
//     res.redirect('/')
//   }
// }

//-->create 
//return an html form to create a new skill
function newSkill(req,res) {
   // testing
  // console.log('waffles')
    res.render('skills/new',)
}
//post ->manipulate the databse to create a new skill
function create(req,res) {
  // testing
  console.log(req.body)
  // res.redirect('skills/new')
  req.body.done = false
  Skill.create(req.body)
  .then(todo => {
    res.redirect('/skills')
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

// async function create1(req,res) {
//   try{
//     req.body.done = false
//     const newSkill = await Skill.create(req.body)
//     res.redirect('/skills')
//   } catch {
//     console.log(error)
//     res.redirect('/skills')
//   }
  
// }

//-->show specific one
function show(req,res) {
  // console.log(req.params.skillId,'⬅️ 👀req.params.skillId')
  // res.redirect('/skills')
  //find the docment that matches the id
  Skill.findById(req.params.skillId)
  .then(skill =>{
    res.render('skills/show',{
      //name of the var :value of the var
      skill: skill
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

// async function show1(req,res) {
//   try{
//     const skill = await Skill.findById(req.params.skillId)
//     res.render('skills/show',{
//       skill: skill
//     })
//   } catch(error) {
//     console.log(error)
//     res.redirect('/')
//   }
// }

//-->delete 
function deleteSkill(req,res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

// async function deleteSkill1(req,res) {
//   try{
//     await Skill.findByIdAndDelete(req.params.skillId)
//     res.redirect('/skills')
//   } catch(error) {
//     console.log(error)
//     res.redirect('/skills')
//   }
// }

//using react for delete
// function deleteSkill2(req,res) {
//   Skill.findByIdAndDelete(req.params.skillId)
//   .then(skill =>{
//     res.json(skill)
//   })
// }

export{
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
}
import { Skill } from '../models/skill.js'



function index(req, res) {

  Skill.find({})
  .then(skills =>{
    res.render('skills/index',{
      skills: skills
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

function newskill(req,res) {
  // console.log('waffles')
    res.render('skills/new',)
}

export{
  index,
  newskill as new
}
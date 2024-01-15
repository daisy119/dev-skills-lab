import { Router } from 'express'
import * as skillsCtrl from '../controller/skills.js'

const router = Router()

// GET localhost:3000/skills
//skillsCtrl is an imported object
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/:skillId  ||route parameter shold be at the bottom
router.get('/:skillId', skillsCtrl.show)
// GET localhost:3000/skills
router.post('/',skillsCtrl.create)
// Delete localhost:3000/skills/:skillsId
router.delete('/:skillId',skillsCtrl.delete)


export { router }

import { Router } from 'express'
import * as skillsCtrl from '../controller/skills.js'

const router = Router()

// GET localhost:3000/skills
//skillsCtrl is an imported object
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
// GET localhost:3000/skills/:skillId  ||route parameter should be at the bottom
router.get('/:skillId', skillsCtrl.show)
// GET localhost:3000/skills/:skillId/edit  
router.get('/:skillId/edit', skillsCtrl.edit)
// GET localhost:3000/skills
router.post('/',skillsCtrl.create)
// DELETE localhost:3000/skills/:skillsId
router.delete('/:skillId',skillsCtrl.delete)
//PUT localhost:3000/skills/:skillId
router.put('/:skillId',skillsCtrl.update)


export { router }

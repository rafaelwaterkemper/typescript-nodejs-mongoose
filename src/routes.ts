import express from 'express'

import UserController from './users/UserController'

const router = express.Router()

router.post('/user', UserController.create)
router.get('/user', UserController.findAll)

export default router

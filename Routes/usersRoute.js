import express from 'express'
import { getAllUsers } from '../Controllers/usersController.js'
import { verifyToken } from  '../Middlewares/verifytoken.js'

const router = express.Router()

router.get('/users', verifyToken, getAllUsers)

export default router
 
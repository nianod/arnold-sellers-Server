 
import express from 'express'
import { findSpecificUser, findUser } from "../Controllers/profile.js"
import { verifyToken } from "../Middlewares/verifytoken.js"  

const router = express.Router()

 
router.get('/me', verifyToken, async (request, response) => {
  try {
 
    const user = await User.findById(request.user.id).select('-password');
    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }
    response.status(200).json(user);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
});

router.get('/', findUser)
router.get('/:id', findSpecificUser)

export default router

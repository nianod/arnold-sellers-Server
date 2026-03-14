import User from '../Models/User.js'

export const getAllUsers = async () => {
   try{
    const users = await User.find().select("-password")
    res.status(200).json({ users, total: users.length})
   }catch(err) {
    res.status(500).json({ message: error.message });
   }
}

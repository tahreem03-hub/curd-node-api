const userService = require('../services/UserService')
class UserController {
    async createUser(req, resp) {
        try {
            const { name, email, phone } = req.body;
            const saveUser = await userService.createUser(name, email, phone);
            resp.json(saveUser);
        } catch (error) {
            resp.status(500).json({ error: error.message })
        }
    }

    async getAllUsers(req, resp){
        try{
            const users= await userService.getAllUsers();
            resp.json(users);
        }catch(error){
            resp.status(500).json({error: error.message});
        }
    }

    async getUserById(req, resp){
        const userId= req.params.id;
        try{
            const user = await userService.getUserById(userId);
            if(!user)
                 return resp.status(404).json({error: "user not found"})
            resp.json(user);
               
        }catch(error){
            resp.status(500).json({error: error.message});
        }
    }

    async updateUser(req, resp){
        const userId= req.params.id;
        const updatedData=req.body;
        try{
            const updatedUser = await userService.updateUser(userId, updatedData);
            if(!updatedUser)
                 return resp.status(404).json({error: "user not found"})
            resp.json(updatedUser);
               
        }catch(error){
            resp.status(500).json({error: error.message});
        }
    }

    async deleteUser(req, resp){
        const userId= req.params.id;
        try{
            const deletedUser = await userService.deleteUser(userId);
            if(!deletedUser)
                 return resp.status(404).json({error: "user not found"})
            resp.json({message:"User deleted successfully", user:deletedUser});
               
        }catch(error){
            resp.status(500).json({error: error.message});
        }
    }

}
module.exports = new UserController();
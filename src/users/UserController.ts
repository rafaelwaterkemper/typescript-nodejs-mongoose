import { Request, Response } from 'express'

import User from './User'

class UserController {
    
    public async findAll (req: Request, res: Response): Promise<Response> {
        let users = await User.find()

        return res.json(users)
    }
    
    public async create (req: Request, res: Response): Promise<Response> {
        let user = await User.create(req.body)

        return res.json(user)
    }
}

export default new UserController()

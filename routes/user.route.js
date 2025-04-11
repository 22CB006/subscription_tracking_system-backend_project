import {Router} from 'express';

//instantiate the router
const userRouter = Router();

// GET /user -> GET all users (static parameter)
// GET /users/:id -> GET users by id


userRouter.get('/', (req, res)=> res.send({ title:'GET all users'}));

userRouter.get('/:id', (req, res)=> res.send({ title:'GET user details'}));

userRouter.post('/', (req, res)=> res.send({ title:'CREATE new user'}));

userRouter.put('/:id', (req, res)=> res.send({ title:'UPDATE user'}));

userRouter.delete('/:id', (req, res)=> res.send({ title:'DELETE user'}));

export default userRouter;
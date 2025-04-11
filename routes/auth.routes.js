import {Router} from 'express';

//instantiate the router
const authRouter = Router(); //initialise router

authRouter.post('/sign-up', (req, res) => res.send({title: 'Sign Up'}));
authRouter.post('/sign-in', (req, res) => res.send({title: 'Sign Up'}));
authRouter.post('/sign-out', (req, res) => res.send({title: 'Sign Up'}));


export default authRouter;
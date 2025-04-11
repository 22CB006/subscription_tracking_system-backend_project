import express from 'express';

import {PORT} from './config/env.js'

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.auth.js';
import connectToDatabase from './database/mongodb.js';


const app = express();

app.use('/api/v1/auth', authRouter);   // /api/v1/auth/sign-up - prepending whatever is here
app.use('/api/v1/users', userRouter); 
app.use('/api/v1/subscription', subscriptionRouter); 

app.get('/', (req, res)=> {
    res.send('Welcome to the subscription tracker API');
});


app.listen(PORT, async() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    
    await connectToDatabase();
});

export default app;
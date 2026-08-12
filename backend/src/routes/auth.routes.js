import { Router } from 'express';
import supabase from '../config/supabase.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router();
const secretKey = process.env.JWT_SECRET_KEY;

router.post('/signup', async (req, res) => {
    const { username, password, email, phone } = req.body;
    if (!username || !password || !email || !phone) {
        return res.status(400).send('Please fill in all info')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: hashedPassword,
        options: {
            emailRedirectTo: 'localhost:5137/dashboard',
            data: {
                display_name: username,
                phone_number: phone
            }
        }
    })

    if (error) {
        return res.send({
            message: "There was an error retrieving the data",
            error: error
        })
    }
 
    const payload = {
        username: username,
        password: hashedPassword,
        email: email
    }
    const token = jwt.sign({ data: payload }, secretKey, { expiresIn: '30m' })

    res.status(200).send(data)
})

router.post('/login', async (req, res) => {
    const userData = req.body
    
    if (!userData.email || !userData.password) {
        return res.status(400).send('Username or Password is missing')
    }
})


export default router;
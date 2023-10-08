import express from 'express';
import { login } from '../services/UserService.js';

const router = express.Router();

router.get('/login', (rec, res, next)=>{
  res.status(200).json(login)});

router.post('/singin', (rec, res, next)=>{
  res.status(200).json({
    cpf:'13254376599',
    name: 'lucas eduardo',
    provider: 'prefeitura'
  });
});
export default router;

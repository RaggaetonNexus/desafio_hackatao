import express from 'express';
import * as IndexService from '../services/IndexService.js'

const router = express.Router();

router.get('/', async (req, res, next)=>{
    try{
        res.send("funcionando");
    }catch(error){
        next(error);
    }
})

export default router;

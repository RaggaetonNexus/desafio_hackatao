import express from 'express';
import { getAll, getById, create, edit, deleteById } from '../services/RequestService.js'

const router = express.Router();

router.get('/', getAll);
router.post('/', create);
router.get('/:id', getById);
router.put('/:id', edit);
router.delete('/:id', deleteById);

export default router;

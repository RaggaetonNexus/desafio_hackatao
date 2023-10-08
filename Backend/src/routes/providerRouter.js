import express from 'express';
import { getAll, getById, create, edit, deleteById } from '../services/ProviderService.js'

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', edit);
router.delete('/:id', deleteById);

export default router;

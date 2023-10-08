import express from 'express';
import { getAll, create, edit, deleteOne, createServiceType, deleteServiceType, getAllTypes, statusOngoing, finished, getOne } from '../services/ServiceService.js'

const router = express.Router();


// Rotas para o serviço GetAllServicesRequest
router.get('/', getAll);
router.post('/', create);

router.get('/types', getAllTypes);
router.post('/types', createServiceType);

router.delete('/types/:id', deleteServiceType);
router.patch('/ongoing/:id', statusOngoing);
router.patch('/ended/:id', finished);
router.get('/:id', getOne);
router.delete('/:id', deleteOne);
router.put('/:id', edit);

export default router;

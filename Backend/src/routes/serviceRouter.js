import express from 'express';
import * as ServiceService from '../services/ServiceService.js'

const router = express.Router();


// Rotas para o serviço GetAllServicesRequest
router.get('/', ServiceService.default.getAll);
router.post('/', ServiceService.default.create);
router.delete('/:id', ServiceService.default.deleteOne);
router.put('/:id', ServiceService.default.edit);
router.patch('/ongoing/:id', ServiceService.default.statusOngoing);
router.patch('/ended/:id', ServiceService.default.finished);

router.get('/types', ServiceService.default.getAllTypes);
router.post('/types', ServiceService.default.createServiceType);
router.delete('/types/:id', ServiceService.default.deleteServiceType);

export default router;

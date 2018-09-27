import { Router } from 'express';
import findAll from './find-all';
import create from './create';
import remove from './remove';

const router = Router();

//GET http://localhost:9000/api/bills/
router.get('/', findAll);
//POST http://localhost:9000/api/bills/
router.post('/', create);
//DELETE http://localhost:9000/api/bills/5bac1f4980701043b4bb0b80
router.delete('/:id', remove);

export default router;